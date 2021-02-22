<?xml version='1.0'?> <!-- As XML file -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <!-- Thin layer on PreTeXt XML -->
  <xsl:import href="../../mathbook/xsl/pretext-html.xsl"/>
  <xsl:import href="./weh-common.xsl"/>

  <!-- Customize html behavior -->
<!--  <xsl:param name="html.annotation" select="'hypothesis'"/>
-->  <xsl:param name="html.css.extra" select="'statics.css'"/>
 </xsl:stylesheet>
