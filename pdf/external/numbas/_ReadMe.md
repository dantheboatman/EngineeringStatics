# Numbas Interactives 

## To add a numbas interactive to PTX

`<interactive platform="numbas" width="150%" aspect="10:14" extensions='ggb qty jsx vm' source="question-44306-internal-force-overhanging-beam"/>
`
1. Adjust aspect to show entire question
2. Adjust extensions to include necessary extensions.  (see [question]/extensions/extensions.json to see which ones are neeeded.)
3. Copy Source to resources/_Numbas/

Currently supports the following extensions:

* ggb = Geogebra
* qty = Quantities
* jsx = JSXGraphics
* vm =  Shear and Bending Moment 
* ss =  Spreadsheets aka 'sheets'
* poly = Polynomials
* la = Linear Algebra

The xsl will need to be extended to cover additional numbas extensions.

## To add a new extension
1. Copy the extention code from downloaded question.  Found in [question]/extensions/[name]
2. Extend `xsl:choose` in `weh-custom-html` to include new boilerplate from `[question]/extensions/extensions.json`
3. Adjust "root" path to look one level up, ie prepend "../"
	
To modify extension look and behavior, make necessary changes in
	numbas.js, numbas.css or numbas-template in xslt

I added this line of css to make space for the numbas interactives (design width 900px) plus 40px left margin.

	`section.exercises{width:940px;}`
	
ss_numbas.rb is a script that uses chromedriver to load an iframe, screenshot the statement (div.statement) at double resolution, then saves it to resources/images/screenshots

##To generate screenshots 

	cd /scripts
	ruby ss_numbas.rb 

Without command line argument, all files matching this pattern are processed
	`'*Exercises*-if.html'`
	
You can use a command line argument to limit what is processed
	`'Ch_2_Exercises-2-3-2-if.html'`  for a single file
	`'Ch_2_Exercises*-if.html'`     for all files in chapter
	
For this to work,  

1. Ruby Available and `bundle update` run
1. you must have previously run
     `scripts/update_assets.py; pretext build web`  to load the -if.html files into \output\web\
2. Local webserver must be running (I use MAMP)
3. Paths must be correct and site available
    	`DIR = Pathname.new('../output/web/')
		BASE_URL = 'http://localhost:8888/statics/web'
		OUTPUT_DIR = Pathname.new('../source/resources/screenshots')`
2. Chrome must not be running
3. Chromedriver must be up to date. 

Note one problem with a 3d geogebra diagram does not work at double resolution.  Change SCALE to 1 and run again.