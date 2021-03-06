###########
# WEH 1/21/19
# WEH 7/12/20 
# WEH 2/22/21



##################################################
# Paths  Per user customization
# contains customized versions
# of locations of the principal components of this
# project and names of various helper executables which
# you must set for your particular computer.
###################################################
MB = /Users/whaynes/ptx/mathbook
PRJ =  /Users/whaynes/ptx/statics
#
# Tools
JINGTRANG     = /Applications/Oxygen\ XML\ Editor/lib
ENGINE        = xelatex
PAGER         = less
BROWSER       = Google\ Chrome
##################################################

####################################
# The books's main driver files
MAINFILE      = $(SOURCE)/begin_here.ptx
HTMLXSLT      = $(MBUSR)/weh-custom-html.xsl
LATEXXSLT     = $(MBUSR)/weh-custom-latex.xsl
PUBLISHER     = $(SOURCE)/publisher.xml
###################################


##################################################
# Pretext sub directories
##################################################
MBXSL = $(MB)/xsl
MBUSR = $(MB)/user

##################################################
# Project directory Layout  $(PRJ)  Source Files
##################################################
#
#-Statics/           : $(PRJ)
#---source/          : All source files for Statics Book
#---- ptx/           : ptx files, one per chapter, plus main driver
#---- numbas/        : contains numbas questions
#---- resources/     : images and ggb files organized by chapter,
#                    : folders/subfolders for convenience only, all 
#                    : filenames in resources/ must be unique. No checking.
#	                   : No Spaces. Filename use 'A-Z', 'a-z', [0-9] and '_-' only.
#---custom/          : publication customizations
#---docs/            : live site for github pages, copy $(HTMLOUT) here to publish
#---meta/            : information and tools about the project.
#---build/           : all content can be regenerated
#-----html/          : website built here with 'make html'
#-----pdf/           : tex files put here with 'make pdf', then run xelatex
#-----latex-images/  : images from source put here with 'make images'
#-----images/        : all resources flattened here with make copy_images'

##################################################

##################################################
# SOURCE directory 
##################################################
SOURCE    = $(PRJ)/src/ptx
RESOURCES = $(PRJ)/src/resources
NUMBAS    = $(PRJ)/src/numbas
CUSTOM    = $(PRJ)/custom

##################################################
# BUILD directory ($BUILD)  Generated Files
##################################################
BUILD      = $(PRJ)/build
HTMLOUT    = ~/Sites/localhost/statics
BASEURL    = http://localhost:8888/statics
PDFOUT     = $(BUILD)/pdf
IMAGESOUT  = $(HTMLOUT)/images
NUMBASOUT  = $(HTMLOUT)/numbas
MBX_OUT    = $(RESOURCES)/generated

##################################################
# Live book is published on GitHub Pages
# with `MAKE publish`
# All HTML are copied to $(WEBDIR), then 
# pushed to docs directory on github.
##################################################
WEBDIR     = $(PRJ)/docs




###################################
# type 'make html'
# to compile the book to $(HTMLOUT)
###################################

