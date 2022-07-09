<?xml version='1.0'?> <!-- As XML file -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
  xmlns:date="http://exslt.org/dates-and-times"
 extension-element-prefixes="date">
 
 <!-- Thin layer on PreText XML -->
 <xsl:import href="../../mathbook/xsl/pretext-latex.xsl"/>
 <xsl:include href="weh-common.xsl"/>

 <!-- Customize latex behavior -->
 
<xsl:param name="latex.geometry" select="'letterpaper,total={6in,9in}'"/>
<xsl:param name="latex.font.size" select="'12pt'"/>
<xsl:param name="latex.draft" select="'no'"/>
<!--xsl:param name="watermark.text" select="concat(date:day-in-month(),' ',date:month-name(), ' ', date:year())"/-->
 

<!-- remove aliceblue background on examples
  <xsl:template match="example" mode="tcb-style">
  <xsl:text>colback=aliceblue,</xsl:text>
 </xsl:template>
-->
</xsl:stylesheet>
