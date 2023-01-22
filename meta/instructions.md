# Directory structure

1. `project.ptx`  -- PreTeXt configuration file for pretext-cli
2. `README.md`  -- displayed on the github project page
3. `requirements.txt` -- used by pretext-cli
4. `publication/publication.ptx` -- PreTeXt settings for the book
5. `source/` -- All source materials needed to produce the book
	1. `move_externals.py` -- script to move external resources to `output/`
	2. `ptx/`  -- source ptx files
		*  `*.ptx` -- book text 
		* `main.ptx`  -- main driver
		* `Chapter*.ptx` -- book content divided into chapters.
		* `docinfo.ptx`  -- LaTeX macros and customizations. 
		* `interactives.ptx`  -- ggb figures (loaded into ptx with xinclude) .
		* `makefile`, `virgin.paths`, and `makefile.paths` -- files used by unix `make`  command to automate book production.
	3. `resources/` -- 'external' resources 
		1.  `chxx`  -- image resources per chapter
		2.  `common` -- cover images and favicons
		3.  `interactives` --geogebra files
		4. `_css/` -- Custom CSS 
		5. `_code` -- custom javascript for interactives
		6. `_Numbas`  -- End of chapter exercises
		7. `affinity-assets` -- files for Affinity Designer to set up preferences, styles and symbols
	4.  `xsl/`  -- custom xslt  (loaded by project.ptx)
6. `output/`  -- This entire folder is built from source. Changes made here will get overwritten.
	1.  `generated/` -- built by `pretext generate`
	2.  `external/` -- built by `python build_externals.py`
	3. ` pdf/`-- built by `pretext print`
	4.  `web/` -- built by `pretext web`
7. `meta/`   -- miscellaneous non-rendered files about the project
8. `docs/`  -- files in here are copied from build/ and served by github pages.   
	* The pdf version is expected to be found at `docs/pdf/statics.pdf`.
	* `docs/CNAME` containing "engineeringstatics.org" is needed to make our url work.

# Manual book production

Before beginning an edit cycle, pull project from GitHub.

1.	Make edits to the files in `statics/source/` as necessary to update the book.
2.	Run `python move_externals.py ` to move and flatten all files from `source/resources` to `output/external`, if anything in `resources` changed.
3.	Run `pretext generate` if generated images like youtube video thumbnails, and interactive preview images need to be remade.  These will be copied to `output/generated`
3.	Run `pretext build web` to update the html version in `statics/output`
4.	Run `pretext build print` to update the pdf version in `statics/output/pdf`. 
5.	Repeat above until satisfied, then push changes to GitHub
6.	Move contents of` build/web` to` statics/docs` and push to GitHub 

# Semi-automated production using `make` #

`make` is a Unix command to perform a series of commands in sequence as specified in the `makefile`.  `makefile.paths` contains the paths to the file on your computer.  `virgin.paths`  is a template for setting up `makefile.paths`

Make sure that you have copied `virgin.paths` to `makefile.paths`  and corrected the paths for your local installation.  Also make sure that the preTeXt CLI, and `make` work on your computer.

1.	Edit files in `statics/source`
2.	In command line type `make`  or `make html`  to automate steps 2, 3, and 4.
3.	`make pdf`  will copy files from `statics/output` to  `statics/output/pdf`.
4.	`make publish` will copy all files from `statics/output` to `statics/docs` for publication
5.	Push repository to GitHub to publish everything.

