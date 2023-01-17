include makefile.paths
#
# Gather source files
PTX = $(shell find $(SOURCE) -type f -name '*.ptx')

################################################################################
# Main functions
################################################################################
# 
## make html version for local viewing
html: tidy external
	pretext build web
	-rm -r $(LOCALDIR)/* 
	cp -R  $(HTMLOUT)/ $(LOCALDIR)
	open -a $(BROWSER)  $(LOCALURL)
	
subset: tidy external
#usage: make subset id=xml:id
	pretext build subset -x $(id)
	-rm -r $(LOCALDIR)/* 
	cp -R  $(HTMLOUT)/ $(LOCALDIR)
	open -a $(BROWSER)  $(LOCALURL)/$(id).html
	
chapter: tidy external
# usage: make chapter n=05
	echo Chapter_$(n)
	pretext build subset -x Chapter_$(n)
	-rm -r $(LOCALDIR)/* 
	cp -R  $(HTMLOUT)/ $(LOCALDIR)
	open -a $(BROWSER) $(LOCALURL)/Chapter_$(n).html
	
interactives:
# Builds a directory and index of all Interactives
# for testing purposes
# make html wipes this directory 
	pretext build interactives
	mkdir -p $(LOCALDIR)/interactives
	cp -R  $(BUILD)/interactives $(LOCALDIR)
	open -a $(BROWSER) $(LOCALURL)/interactives/interactives.html
#
## move images to external directory
images: generated external
	
##  make pdf version and rename it
pdf: 
	pretext build print
	mv $(PDFOUT)/main.pdf $(PDFOUT)/statics.pdf
	open $(PDFOUT)/statics.pdf

# Move files to docs directory for github pages
# Still need to commit and push to go live
publish:
	-rm -r $(GITHUB)/* 
	cp -R $(HTMLOUT)/ $(GITHUB)
	echo engineeringstatics.org > $(GITHUB)/CNAME
	mkdir $(GITHUB)/pdf
	cp $(PDFOUT)/statics.pdf $(GITHUB)/pdf
	open $(GITHUB)/index.html
	
# These will fire if the corresponding folder is deleted.  Should depend on source ptx and images.
	
generated:
	@echo
	@echo "Making GENERATED Images"
	pretext generate
	 
external:
	@echo
	@echo "Moving EXTERNAL Images"
	python $(SOURCE)/move_externals.py $(RESOURCES) $(EXTERNAL)
	

#
###############################################
#  Utilities
###############################################
info:
	@echo   Project folder---------$(PRJ)
	@echo   All Source files-------$(SOURCE)
	@echo   PreTeXt files ---------$(PTX)
	@echo   Resource Folder------- $(RESOURCES)
	@echo   BUILD----------------- $(BUILD)
	@echo   HTMLOUT--------------- $(HTMLOUT)
	@echo   PDFOUT---------------- $(PDFOUT)
	@echo   GENERATED------------- $(GENERATED)
	@echo   EXTERNAL-------------- $(EXTERNAL)
#
clean:
	-rm -r $(BUILD)
	-rm -r $(LOCALDIR)
#
# folders not used - here for reference
folders:
	@[ -d $(BUILD) ] || mkdir $(BUILD)
#
#Formats all pretext files consistently
tidy: $(PTX)
	@echo  Format the ptx files:
	for file in  $(PTX) ; do \
		xmllint --format -o $${file}  $${file}; \
	done 
#

	
.PHONY: info tidy folders