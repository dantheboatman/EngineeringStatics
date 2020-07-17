<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 
 <!--turn off timestamp on output files, prevent spurious diff in git.-->
 <xsl:param name="debug.datedfiles" select="'no'"/>
 
 <xsl:param name="debug.chapter.start" select='1'/>
 <!-- start chapters with zero-->
 <xsl:param name="numbering.maximum.level" select="3"/>
 <!-- 3 = nothing deeper than a subsection gets a number -->
 <xsl:param name="numbering.equations.level" select="1"/>
 <!-- 1 = equations number continuously through chapters -->
 <xsl:param name="numbering.theorems.level" select="1"/>
 <!-- 1 = example numbering controled by theorems -->

 <!-- add weh custom templates -->
  
 <!-- don't put solutions in knowls modifies template at line 337 in mathbook-html.xsl-->
 <!--<xsl:template match="solution" mode="is-hidden">
  <xsl:text>false</xsl:text>
 </xsl:template>-->
 
 <!-- Add numbas iframe -->
 <xsl:template match="interactive[@platform='numbas']">
  <iframe src="{slate/@source}/index.html" width="{slate/@width}" height="{slate/@height}"/>
 </xsl:template>


</xsl:stylesheet>