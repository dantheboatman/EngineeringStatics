# Directory structure

1. `project.ptx`  -- PreTeXt configuration fie for pretext-cli
2. `README.md`  -- displayed on the github project page
3. `requirements.txt` -- used by pretext-cli
4. **src/**  -- All source materials needed to produce the book
	1. `publication.ptx` -- PreTeXt settings for the book
	2. `move_externals.py` -- script to move external resources to **build/**
	3. **ptx/**  -- source ptx files
		* `*.ptx` -- book text 
		* `begin_here.ptx`  -- main driver
		* `book.ptx` -- used for debugging
		* `book.xml` -- used for debugging
		* `docinfo.ptx`  -- LaTeX macros and customizations. 
		* `interactives.ptx`  -- ggb figures (loaded into ptx with xinclude) .
	4. **resources/**  -- 'external' resources 
		1.  **chxx/**  -- image resources per chapter
		2.  **common/** -- cover images and favicons
		3.  **interactives/** --geogebra files
		4. **_css/** -- Custom CSS 
		5. **_Numbas/**  -- End of chapter exercises
	5.  **xsl/**  -- custom xslt  (loaded by project.ptx)
5. **build/**  -- This entire folder is built from source. Changes made here will get overwritten.
	1.  **generated/** -- built by `pretext generate`
	2.  **external/** -- built by `python build_externals.py`
	3.  **pdf/** -- built by `pretext print`
	4.  **web/** -- built by `pretext web`
6. **meta/**   -- miscellaneous non-rendered files about the project
7. **docs/**  -- files in here are copied from build/ and served by github pages.   
	* The pdf version is expected to be found at `docs/pdf/statics.pdf`.
	* `docs/CNAME` containing "engineeringstatics.org" is needed to make our url work.

# Book production

Before beginning an edit cycle, pull project from GitHub.

1.	Make edits to the files in `src/` as necessary to update the book.
2.	Run `python move_externals.py `from src/ if anything in `resources` changed and needs to be updated
3.	Run `pretext generate` if generated images need to be updated
3.	Run `pretext build web` to update web version in build/
4.	Run `pretext build print` to update pdf version in build/
5.	Repeat above until satisfied, then push changes to GitHub
6.	Move contents of build/web and build/pdf to docs/ to publish via GitHub 

See makefile to simplify this process.

