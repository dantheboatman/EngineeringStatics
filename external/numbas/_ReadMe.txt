Numbas Interactives 

<interactive platform="numbas" width="150%" aspect="10:14" extensions='ggb qty jsx vm' source="question-44306-internal-force-overhanging-beam"/>

Adjust aspect to show entire question
Adjust extensions to include necessary extensions.  (see [question]/extensions/extensions.json to see which ones are neeeded.)
Copy Source to resources/_Numbas/

Currently supports the following extensions:

ggb = Geogebra
qty = Quantities
jsx = JSXGraphics
vm =  Shear and Bending Moment 
ss =  Spreadsheets aka 'sheets'
poly = Polynomials
la = Linear Algebra

The xsl will need to be extended to cover additional numbas extensions.

To add a new extension
	1. Copy the extention code from downloaded question.  Found in [question]/extensions/[name]
	2. Extend xsl:choose in weh-custom-html to include new boilerplate from [question]/extensions/extensions.json
	3. Adjust "root" path to look one level up, ie prepend "../"
	
To modify extension look and behavior, make necessary changes in
	numbas.js, numbas.css or numbas-template in xslt

