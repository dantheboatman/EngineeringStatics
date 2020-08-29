<?xml version='1.0'?> <!-- As XML file -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 <!-- Thin layer on PreText XML -->
 <xsl:import href="../../mathbook/xsl/pretext-latex.xsl"/>
 <xsl:include href="weh-common.xsl"/>

 <!-- Customize latex behavior -->
 
<xsl:param name="latex.geometry" select="'letterpaper,total={6in,9in}'"/>
 <xsl:template match="example" mode="tcb-style">
  <xsl:text>colback=aliceblue,</xsl:text>
 </xsl:template>

</xsl:stylesheet>
