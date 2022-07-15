
MB  =  /Users/whaynes/ptx/mathbook
PRJ =  /Users/whaynes/ptx/statics
BROWSER       = Google\ Chrome

##################################################
# SOURCE directory 
##################################################
SOURCE    = $(PRJ)/src/ptx
RESOURCES = $(PRJ)/src/resources

##################################################
# OUTPUT Directories - Built from source
##################################################
BUILD      = $(PRJ)/build
HTMLOUT    = $(BUILD)/web
PDFOUT     = $(BUILD)/pdf
GENERATED  = $(BUILD)/generated
EXTERNAL   = $(BUILD)/external

#################################################
# Local and remote webserver document locations
#################################################
MAMPDIR    = ~/Sites/localhost/statics
MAMPURL    = http://localhost:8888/statics
GITHUB     = $(PRJ)/docs
#

PTX = $(shell find $(SOURCE) -type f -name '*.ptx')

################################################################################
# Main functions
################################################################################
# 
## make html version for local viewing
html: tidy
	pretext build web
	-rm -r $(MAMPDIR)/* 
	cp -R  $(HTMLOUT)/ $(MAMPDIR)
	open -a $(BROWSER)  $(MAMPURL)
#
## move images to external directory
images: generated external
	
##  make pdf version and rename it
pdf: 
	pretext build print
	mv $(PDFOUT)/begin_here.pdf $(PDFOUT)/statics.pdf
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
	cd $(PRJ)/src; python move_externals.py
	

$(PTX): 
	tidy
#
###############################################
#  Utilities
###############################################
info:
	@echo   PreTeXt Source-------- $(SOURCE)
	@echo   Resource Folder------- $(RESOURCES)
	@echo   BUILD----------------- $(BUILD)
	@echo   HTMLOUT--------------- $(HTMLOUT)
	@echo   PDFOUT---------------- $(PDFOUT)
	@echo   GENERATED------------- $(GENERATED)
	@echo   EXTERNAL-------------- $(EXTERNAL)
#
clean:
	-rm -r $(BUILD)
#
# folders not used - here for reference
folders:
	@[ -d $(BUILD) ] || mkdir $(BUILD)
#
#Formats all pretext files consistently
tidy: $(PTX)
	@echo  Format the ptx files:
	for file in  $(SOURCE)/*.ptx ; do \
		xmllint --format -o $${file}  $${file}; \
	done 
#

	
.PHONY: info tidy folders