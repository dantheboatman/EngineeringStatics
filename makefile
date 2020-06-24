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
IMAGESSRC = $(PRJ)/src/resources
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
RESOURCES   = $(PRJ)/src/resources
MBX_OUT     = $(RESOURCES)/generated

OUTPUT     = $(PRJ)/output
HTMLOUT    = $(PRJ)/docs
PDFOUT     = $(OUTPUT)/pdf
IMAGESOUT  = $(OUTPUT)/images
GGBOUT     = $(OUTPUT)/GGB
NUMBASOUT  = $(OUTPUT)/numbas


html:
	install -d $(OUTPUT)
	install -d $(MBUSR)
	install -d $(HTMLOUT)
	install -d $(HTMLOUT)/images
	install -d $(HTMLOUT)/numbas

	-rm $(HTMLOUT)/*.html
	-rm $(HTMLOUT)/knowl/*.html
	-rm $(HTMLOUT)/images/*
	-rm -r $(HTMLOUT)/numbas/*
	-rm $(HTMLOUT)/*.css
	make copy_images

	cp -a $(IMAGESOUT) $(HTMLOUT)
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

	-rm $(PDFOUT)/images/*
	-rm $(PDFOUT)/*.*
	make copy_images
	cp -a $(IMAGESOUT) $(PDFOUT)
	cd $(PDFOUT); \
	xsltproc -xinclude -o statics.tex $(MBUSR)/weh-custom-latex.xsl $(MAINFILE); \
	open statics.tex;\
	#xelatex statics.tex; 
	

	
# makes thumbnail images for youtube videos
youtube:
	install -d $(MBX_OUT)/youtube
	-rm $(MBX_OUT)/youtube/*
	$(MB)/pretext/pretext -c youtube -d $(MBX_OUT)/youtube $(MAINFILE)

preview:  #makes preview images for interactives which don't define @preview
# broken as of 6/23/2020
	install -d $(MBX_OUT)/preview
	-rm $(MBX_OUT)/preview/*
	$(MB)/pretext/pretext -v -c preview -d $(MBX_OUT)/preview $(MAINFILE)
	
images:  # makes svg images from inkscape pdfs with text removed
	install -d $(MBX_OUT)/latex_images
	-rm $(MBX_OUT)/latex_images/*
	$(MB)/pretext/pretext -v -c latex-image -f svg -d $(MBX_OUT)/latex_images $(MAINFILE)
	
	
copy_images:
	install -d $(IMAGESSRC)
	install -d $(IMAGESOUT)
	-rm $(IMAGESOUT)/*
# these commands copy resources to IMAGESOUT while flattening the heirarchy
	find $(IMAGESSRC) -iname '*.ggb'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(IMAGESSRC) -iname '*.jpg'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(IMAGESSRC) -iname '*.png'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(IMAGESSRC) -iname '*.svg'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(IMAGESSRC) -iname '*.pdf'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(IMAGESSRC) -iname '*.pdf_tex' -exec  cp -n \{\} $(IMAGESOUT)/ \;


publish: #supposed to copy everything to the webeserver directory
	-rm $(APACHEDIR)/*.*
	cp -R $(HTMLOUT)/* $(APACHEDIR)
	open $(APACHEURL)


