<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 
 <!--turn off timestamp on output files, prevent spurious diff in git.-->
 <xsl:param name="debug.datedfiles" select="'no'"/>
 <xsl:param name="numbering.maximum.level" select="3"/>
 
 <!-- 3 = nothing deeper than a subsection gets a number -->
 <!--<xsl:param name="numbering.equations.level" select="1"/>
 <!-\- 1 = equations number continuously through chapters -\->
 <xsl:param name="numbering.theorems.level" select="1"/>
 <!-\- 1 = example numbering controled by theorems -\->-->


 
 <!-- Add numbas iframe -->
 <xsl:template match="interactive[@platform='numbas']">
  <iframe src="{slate/@source}/index.html" width="{slate/@width}" height="{slate/@height}"/>
 </xsl:template>


</xsl:stylesheet>