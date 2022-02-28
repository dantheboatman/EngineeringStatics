<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 <!--use to turn off timestamp on output files, prevent spurious diff in git.
 <xsl:param name="debug.datedfiles" select="'no'"/> -->
 
 <!-- Add numbas iframe -->
 <xsl:template match="interactive[@platform = 'numbas']">
  <iframe src="{slate/@source}/index.html" width="{@width}">
   <xsl:attribute name="height">
    <xsl:apply-templates select="." mode="get-height-pixels"/>
   </xsl:attribute>
  </iframe>
 </xsl:template>
</xsl:stylesheet>
