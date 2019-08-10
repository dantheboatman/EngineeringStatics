<?xml version='1.0'?> <!-- As XML file -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <!-- Thin layer on MathBook XML -->
  <xsl:import href="../../../ptx/mathbook/xsl/mathbook-latex.xsl"/>
  <xsl:include href="weh-common.xsl"/>
 
 <!-- Customize latex behavior -->
 <xsl:template match="example" mode="tcb-style">
  <xsl:text>colback=aliceblue,</xsl:text>
 </xsl:template>

</xsl:stylesheet>
