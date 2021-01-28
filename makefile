###########
# Simplified version of makefiles found here: 
# https://github.com/PCCMathSAC/orcca
# WEH 1/21/19
# WEH 7/12/20 revised

##################################################
# This is not a "true" makefile, since it does not
# operate on dependencies.  It is more of a shell
# script, sharing common configurations
##################################################

##################################################
# The Makefile.paths file contains customized versions
# of locations of the principal components of this
# project and names of various helper executables
include Makefile.paths
##################################################

##################################################
# Project directory ($PRJ) Layout and function
##################################################
#
#-Statics/
#
#---source/          : All source files for Statics Book
#---- ptx/           : ptx files, one per chapter, plus main driver
#---- numbas/        : contains numbas questions
#---- resources/     : images and ggb files organized by chapter,
#                    : folders/subfolders for convenience only, all 
#                    : filenames in resources/ must be unique. No checking.
#---custom/          : publication customizations
#---build/           : all content can be regenerated
#-----html/          : website built here with 'make html'
#-----pdf/           : tex files put here with 'make pdf', then run xelatex
#-----latex-images/  : images from source put here with 'make images'
#-----images/        : all resources flattened here with make copy_images'
#---docs/            : live site for github pages, copy build/html here to publish
#---meta/            : information and tools about the project.
##################################################


###################################
# These hold the sources that make
# the book after processing.
SOURCE    = $(PRJ)/src/ptx
RESOURCES = $(PRJ)/src/resources
NUMBASSRC = $(PRJ)/src/numbas
CUSTOM    = $(PRJ)/custom
CSS       = $(CUSTOM)
XSL       = $(CUSTOM)
BUILD     = ${PRJ}/build
####################################
# The books's main driver file
MAINFILE  = $(SOURCE)/begin_here.ptx
###################################
# These hold the things made that are
# generated from the source
MBX_OUT    = $(RESOURCES)/generated
HTMLOUT    = $(BUILD)/html
PDFOUT     = $(BUILD)/pdf
IMAGESOUT  = $(BUILD)/images
NUMBASOUT  = $(BUILD)/numbas
###################################
# These paths are subdirectories of
# the Mathbook XML distribution
# MBUSR is where extension files get copied
# so relative paths work properly
MBXSL = $(MB)/xsl
MBUSR = $(MB)/user
#
###################################
# make recipes type 'make html'
# to compile the book to $(HTMLOUT)
#
#
html:
	install -d $(BUILD)
	install -d $(MBUSR)
	install -d $(HTMLOUT)
	install -d $(HTMLOUT)/images
	install -d $(HTMLOUT)/numbas

# Clear out the HTML folder
	-rm $(HTMLOUT)/*.html
	-rm $(HTMLOUT)/knowl/*.html
	-rm $(HTMLOUT)/images/*
	-rm -r $(HTMLOUT)/numbas/*
	-rm $(HTMLOUT)/*.css
	
# copy needed resources
	make copy_images
	cp -a $(IMAGESOUT) $(HTMLOUT)
	cp -a $(NUMBASSRC) $(HTMLOUT)
	cp $(CUSTOM)/*.css $(HTMLOUT)
	cp $(CUSTOM)/*.xsl $(MBUSR)
	cd $(HTMLOUT); \
	xsltproc -xinclude -stringparam publisher publisher.xml $(MBUSR)/weh-custom-html.xsl $(MAINFILE); \
	open $(HTMLOUT)/index.html

pdf:
	install -d $(BUILD)
	install -d $(MBUSR)
	install -d $(PDFOUT)
	install -d $(PDFOUT)/images

	-rm $(PDFOUT)/images/*
	-rm $(PDFOUT)/*.*
	# copy needed resources
	make copy_images
	cp -a $(IMAGESOUT) $(PDFOUT)
	cp $(CUSTOM)/*.xsl $(MBUSR)

	cd $(PDFOUT); \
	xsltproc -xinclude  -stringparam publisher publisher.xml -o statics.tex $(MBUSR)/weh-custom-latex.xsl $(MAINFILE); \
	open  $(PDFOUT)/statics.tex
	
##  Use the 'pretext' python script to generate various images from source.
#
##  makes thumbnail images for youtube videos
#
youtube:
	install -d $(MBX_OUT)/youtube
	-rm $(MBX_OUT)/youtube/*
	$(MB)/pretext/pretext -c youtube -d $(MBX_OUT)/youtube $(MAINFILE);
#
##  makes preview images for interactives which don't define @preview
#
preview:  
	install -d $(MBX_OUT)/preview
	-rm $(MBX_OUT)/preview/*
	$(MB)/pretext/pretext -v -c preview -d $(MBX_OUT)/preview $(MAINFILE);
#
##  renders latex text on Inkscape pdfs produces 
#
images: 
	install -d $(MBX_OUT)/latex_images
	-rm $(MBX_OUT)/latex_images/*
	$(MB)/pretext/pretext -v -c latex-image -f svg -d $(MBX_OUT)/latex_images/ $(MAINFILE);

#
# this copies all the source images and resources to the 
# build/images folder, while flattening the hierarchy
#
copy_images:
	install -d $(BUILD)
	install -d $(IMAGESOUT)
	-rm $(IMAGESOUT)/*
# these commands copy resources to IMAGESOUT while flattening the heirarchy
	find $(RESOURCES) -iname '*.ggb'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(RESOURCES) -iname '*.jpg'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(RESOURCES) -iname '*.png'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(RESOURCES) -iname '*.svg'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(RESOURCES) -iname '*.pdf'     -exec  cp -n \{\} $(IMAGESOUT)/ \;
	find $(RESOURCES) -iname '*.pdf_tex' -exec  cp -n \{\} $(IMAGESOUT)/ \;
#
# copies html to local webserver and opens index page
#
publish:
	-rm $(WEBDIR)/*.*
	cp -R $(HTMLOUT)/* $(WEBDIR)
	open $(BASEURL)


