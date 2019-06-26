###########
# Simplified version of makefiles found here: 
# https://github.com/PCCMathSAC/orcca
# WEH 1/21/19
###########

###########
# Variables
###########

##################################################
# The Makefile.paths file contains customized versions
# of locations of the principal components of this
# project and names of various helper executables
##################################################

include Makefile.paths


##############
# Introduction
##############

# This is not a "true" makefile, since it does not
# operate on dependencies.  It is more of a shell
# script, sharing common configurations

######################
# System Prerequisites
######################

#   install         (system tool to make directories)
#   xsltproc        (xml/xsl text processor)
#   xmllint         (only to check source against DTD)
#   <helpers>       (PDF viewer, web browser, pager, Sage executable, etc)




###################################
# These paths are subdirectories of
# the project distribution
###################################
PRJSRC    = $(PRJ)/src/ptx
IMAGESSRC = $(PRJ)/src/images
GGBSRC    = $(PRJ)/src/ggb
NUMBASSRC = $(PRJ)/src/numbas
CUSTOM    = $(PRJ)/custom
CSS       = $(PRJ)/css
XSL       = $(PRJ)/xsl

# The project's driver file and stylesheets
MAINFILE  = $(PRJSRC)/begin_here.ptx



# These paths are subdirectories of
# the Mathbook XML distribution
# MBUSR is where extension files get copied
# so relative paths work properly
MBXSL = $(MB)/xsl
MBUSR = $(MB)/user


# These paths hold the output 
# 
OUTPUT     = $(PRJ)/output
HTMLOUT    = $(OUTPUT)/html
PDFOUT     = $(OUTPUT)/pdf
IMAGESOUT  = $(OUTPUT)/images
GGBOUT     = $(OUTPUT)/GGB
NUMBASOUT  = $(OUTPUT)/numbas
PGOUT      = $(OUTPUT)/pg
WWOUT      = $(OUTPUT)/webwork-extraction


html:
	install -d $(OUTPUT)
	install -d $(MBUSR)
	install -d $(HTMLOUT)
	install -d $(HTMLOUT)/images
	install -d $(HTMLOUT)/ggb 
	install -d $(HTMLOUT)/numbas
	install -d $(IMAGESSRC)
	install -d $(WWOUT)

	-rm $(HTMLOUT)/*.html
	-rm $(HTMLOUT)/knowl/*.html
	-rm $(HTMLOUT)/images/*
	-rm $(HTMLOUT)/ggb/*
	-rm $(HTMLOUT)/numbas/*
	-rm $(HTMLOUT)/*.css

	cp -a $(IMAGESSRC) $(HTMLOUT)
	cp -a $(GGBSRC) $(HTMLOUT)
	cp -a $(NUMBASSRC) $(HTMLOUT)
	cp $(CUSTOM)/*.css $(HTMLOUT)
	cp $(CUSTOM)/*.xsl $(MBUSR)
	cd $(HTMLOUT); \
	xsltproc -xinclude --novalid  $(MBUSR)/weh-custom-html.xsl  $(MAINFILE);
	open $(HTMLOUT)/index.html

pdf:
	install -d $(OUTPUT)
	install -d $(PDFOUT)
	install -d $(PDFOUT)/images
	install -d $(IMAGESOUT)
	install -d $(IMAGESSRC)
	-rm $(PDFOUT)/images/*
	-rm $(PDFOUT)/ggb/*
	-rm $(PDFOUT)/*.*
	make youtube
	cp -a $(IMAGESOUT) $(PDFOUT)
	cp -a $(IMAGESSRC) $(PDFOUT) 
	cp -a $(GGBSRC) $(PDFOUT)
#	cp -a $(WWOUT)/*.png $(PDFOUT)/images
	cd $(PDFOUT); \
	xsltproc -xinclude $(MBXSL)/mathbook-latex.xsl $(MAINFILE); \
	xelatex index.tex; \
	xelatex index.tex; \
	xelatex index.tex; 
	
merge:
	cd $(OUTPUT); \
	xsltproc --xinclude --stringparam webwork.extraction $(WWOUT)/webwork-extraction.xml $(MBXSL)/pretext-merge.xsl $(MAINFILE) > merge.xml

	
# run this to scrape thumbnail images from YouTube for any YouTube videos
youtube:
	install -d $(OUTPUT)
	install -d $(IMAGESOUT)
	-rm $(IMAGESOUT)/*.jpg
	$(MB)/script/mbx -c youtube -d $(IMAGESOUT) $(OUTPUT)/merge.xml

preview:
	install -d $(OUTPUT)
	install -d $(IMAGESOUT)
	-rm $(IMAGESOUT)/*.png
	$(MB)/script/mbx -vv -c preview -d $(IMAGESOUT) $(OUTPUT)/merge.xml
	
publish:
	cp -R $(HTMLOUT) $(APACHEDIR)
	open $(APACHEURL)
