# Directory structure

1. `project.ptx`  -- PreTeXt configuration for pretext-cli
1. `README.md`  -- displayed on the github project page
1. `requirements.txt` -- requirements for the pretext-cli
* **src/**  -- All source materials needed to produce the book
	1. `publication.ptx` -- PreTeXt setting for the book
	1. `move_externals.py` -- script to move external resources to **build/**
	1. **ptx/**  -- source ptx files
		* `*.ptx` -- book text 
		* `begin_here.ptx`  -- main driver
		* `book.ptx` -- used for debugging
		* `book.xml` -- used for debugging
		* `docinfo.ptx`  -- LaTeX macros and customizations. 
		* `interactives.ptx`  -- ggb figures (loaded into ptx with xinclude) .
	* **resources/**  -- 'external' resources 
		1.  **chxx/**  -- image resources per chapter
		1.  **common/** -- cover images and favicons
		1.  **interactives/** --geogebra files
			* **_css/** -- Custom CSS (loaded with string parameter)
			* **_Numbas/**  --End of chapter exercises
	1.  **xsl/**  -- custom xslt (loaded in project.ptx)
* **build/**  -- This entire folder is built from source. Changes made here will get overwritten.
	1.  **generated/** -- built by `pretext generate`
	1.  **external/** -- built by `python build_externals.py`
	1.  **pdf/** -- built by `pretext print`
	1.  **web/** -- built by `pretext web`
* **meta/**   -- miscellaneous non-rendered files about the project
* **docs/**  -- files in here are copied from build/ and served by github pages. 

# Book production

1.	Run `python move_externals.py`from src/ if external resources need t be updated
2.	Run `pretext generate` if generated images need to be updated
3.	Run `pretext build web` to update web version in build/
4.	Ren `pretext build print` to update pdf version in build/
5.	Push changes to gihub
6.	move contents of build/web and build/pdf to docs/ to publish 

