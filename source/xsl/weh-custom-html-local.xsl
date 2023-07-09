<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>
<!-- this stylesheet is calls pretext-html from the distribution, rather than the cli version. 
Used for local debugging in Oxygen -->

<xsl:stylesheet 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:html="http://www.w3.org/1999/xhtml"  
  exclude-result-prefixes="html" version="1.0">
  <!-- Thin layer on PreTeXt XML -->
	<xsl:import href="../../../mathbook/xsl/pretext-html.xsl"/>
  <!-- Call my hacks for geogebra interactives  -->
  <xsl:import href="weh-custom-ggb.xsl"/>
  
  <!-- IdentityTransform -->
  <xsl:template match="node() | @*" mode="identity">
    <xsl:copy>
      <xsl:apply-templates select="node() | @*" mode="identity"/>
    </xsl:copy>
  </xsl:template>

 
</xsl:stylesheet>
