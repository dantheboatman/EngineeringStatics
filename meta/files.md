# Directory structure

1. `README.md` -- displayed on the github project page
2. `source/` -- contains all the files to produce the book
	* `ptx/` -- driver, chapters, and docinfo
	* `resources/` -- non-ptx resources, including
		* images-- organized by chapter
		* `geogebra/`-- Geogebra files included as interactives
		* `_Numbas/` -- numbas exams unzipped
		* `_code/` -- javascript files for interactive slates
		* `css/` -- custom css
	* ``xsl/`` -- custom xsl
3. `scripts/`
	* `update_assets.py`  -- used to move resources --> assets for publication
4. `requirements.txt`  -- version of CLI used
5. `project.ptx` -- main configuration file for pretext-cli
6. `publication/` -- publisher settings
	* `interactives.ptx` -- for generating ggb interactives only, for testing
	* `publication.ptx`  -- PreTeXt settings for the book
7. `assets/` -- copied from source/resources/ by  `update_assets.py`
8. `generated-assets/`  -- generated in build process
9. `site` -- for landing page on github pages
	* `CNAME` -- must be present to make `engineeringstatics.org` point here
10. `output/`  -- generated by `pretext build`
11. `codechat_config.yaml`  -- config file, generated by pretext cli
12. `logs/`  -- pretext cli log files
13. `meta/` -- miscellaneous non-rendered files about the project
	* `baker-statics.xml`
	* `CODE_OF_CONDUCT.md`
	* `files.md`
	* `OxygenXML/`
	* `todo.ooutline`
14. `Scrivener`  -- non tracked resources for Scrivener
15. `docs/`  -- files in here are copied from build/ and served by github pages.   
	* The pdf version is expected to be found at `docs/pdf/statics.pdf`.
	* `docs/CNAME` containing "engineeringstatics.org" is needed to make our url work.
