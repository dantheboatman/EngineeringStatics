<?xml version='1.0'?> <!-- As XML file -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <!-- Thin layer on PreTeXt XML -->
  <xsl:import href="../../../ptx/mathbook/xsl/pretext-html.xsl"/>
  <xsl:import href="./weh-common.xsl"/>
 
  <!-- Customize html behavior -->
 <xsl:param name="chunk.level" select="3" />
</xsl:stylesheet>
