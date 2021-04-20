include makefile.locations.mk
##
# Search path for resources. Look in all the sub folders of $(RESOURCES)
VPATH:= $(shell find  $(RESOURCES) -type d)
#
# this sets the type of resources that are to go into the book
# currently everything -- could be improved: no pdf for html, no svg or ggb for pdf.
resource_types:= -iname "*.png" -o -iname "*.jpg" -o -iname "*.svg" -o -iname "*.ggb" -o -iname "*.pdf"
#
#
# Find the names of the resources
resources:= $(notdir $(shell find  $(RESOURCES)  $(resource_types) ))
#
# Set path of resources to go to $(IMAGESOUT) folder, flattened
# This is what copies new images out only when they change or are missing.
images:= $(addprefix $(IMAGESOUT)/, $(resources))
#

#
################################################################################
# Main functions
################################################################################
# 
## make html version for local viewing
#
HTML: info folders css xslt numbas $(images) tidy 
	cd $(HTMLOUT); \
	xsltproc -xinclude -stringparam publisher $(PUBLISHER) $(HTMLXSLT) $(MAINFILE) 
	open -a $(BROWSER)  $(BASEURL)
#
## move local html files to web directory
#
publish:
	-rm $(WEBDIR)/*.*
	cp -R $(HTMLOUT)/* $(WEBDIR)
	echo engineeringstatics.org $(WEBDIR)/CNAME
	open $(WEBDIR)/index.html
#
##  make pdf version
#
DRAFTMSG :=  DRAFT-$(shell date +%F)
#
pdf:  info folders css xslt numbas $(images) tidy
	-ln -s $(IMAGESOUT) $(PDFOUT)/images
	cd $(PDFOUT); \
	xsltproc -xinclude  -stringparam publisher $(PUBLISHER) -o statics.tex $(LATEXXSLT) $(MAINFILE)
	open $(PDFOUT)/statics.tex

###############################################################################
# Image resource processing
###############################################################################
#  Terminal Colors
RED:= `tput setaf 1`
GREEN:= `tput setaf 2`
RESET=`tput sgr0`
#
# this is a default rule which copies the files to $(IMAGESOUT),  
$(IMAGESOUT)/%:  %
	@echo $(GREEN)---copied $(<F) to $(IMAGESOUT) $(RESET)
	@cp $< $@
#
#
################################################################################
## Just copy other resources
################################################################################
#
# numbas, css, and xslt don't use dependencies, just copy everything evertime.

numbas: $(NUMBAS)
	@echo Copy Numbas Files
	@cp -a $(NUMBAS) $(HTMLOUT)

css: $(CUSTOM)/*.css
	@echo Copy CSS
	@cp $(CUSTOM)/*.css $(HTMLOUT)
	
xslt: $(CUSTOM)/*.xsl
	@echo Copy XSLT
	@cp $(CUSTOM)/*.xsl $(MBUSR)

	
################################################################################
##  Use the 'pretext/pretext' python script to generate certain images from source.
###############################################################################
#
##  makes thumbnail images for youtube videos#
youtube:
	install -d $(MBX_OUT)/youtube
	-rm $(MBX_OUT)/youtube/*
	$(MB)/pretext/pretext -c youtube -d $(MBX_OUT)/youtube $(MAINFILE);
#
##  makes preview images for interactives which don't define @preview#
preview:  
	install -d $(MBX_OUT)/preview
	-rm $(MBX_OUT)/preview/*
	$(MB)/pretext/pretext -vv -c preview -d $(MBX_OUT)/preview $(MAINFILE);
#
## render asymptote code#
asy:  
	install -d $(MBX_OUT)/asy
	-rm $(MBX_OUT)/asy/*
	$(MB)/pretext/pretext -vv -p $(PUBLISHER) -c asy -f svg -d $(MBX_OUT)/asy $(MAINFILE);
#
#
###############################################
#  Utilities
###############################################
info:
	@echo   PreText Source-------- $(MAINFILE)
	@echo   HTML XSLT file-------- $(HTMLXSLT)
	@echo   LaTeX XSLT file------- $(LATEXXSLT)
	@echo   Publisher file-------- $(PUBLISHER)
	@echo   Resource Folder------- $(RESOURCES)
	@echo   BUILD----------------- $(realpath $(BUILD))
	@echo   HTMLOUT--------------- $(HTMLOUT)
	@echo   IMAGESOUT------------- $(IMAGESOUT)
#
clean:
	-rm -r $(HTMLOUT)
#	-rm -r $(PDFOUT)/*
#
folders:
	@[ -d $(BUILD) ] || mkdir $(BUILD)
	@[ -d $(HTMLOUT) ] || mkdir $(HTMLOUT)
	@[ -d $(PDFOUT) ] || mkdir $(PDFOUT)
	@[ -d $(IMAGESOUT) ] || mkdir $(IMAGESOUT)
#
#Formats all pretext files consistently
tidy:
	@echo  tidying up ptx files:
	for file in  $(SOURCE)/*.ptx ; do \
		xmllint --format -o $${file}  $${file};\
	done 
#

debug: 
	@echo  $(DRAFTMSG)
	open $(WEBDIR)/index.html
	
.PHONY: info folders numbas css xslt tidy debug