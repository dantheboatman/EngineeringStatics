<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>
<xsl:stylesheet 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:html="http://www.w3.org/1999/xhtml"  
  exclude-result-prefixes="html" version="1.0">
  <!-- Thin layer on PreTeXt XML -->
  <xsl:import href="./core/pretext-html.xsl"/>
  
  <!-- IdentityTransform -->
  <!--<xsl:template match="node() | @*" mode="identity">
    <xsl:copy>
      <xsl:apply-templates select="node() | @*" mode="identity"/>
    </xsl:copy>
  </xsl:template>
-->
  
  
<!--  This template is needed to enable slate[@surface='svg']  used by shear and bending moment example problems-->
  <xsl:template match="slate[@surface='svg']">
    <div>
      <xsl:attribute name='style'>width: 100%;</xsl:attribute>
      <xsl:attribute name="class">interactive-svg</xsl:attribute>
      <xsl:copy-of select="*"/>
    </div>
  </xsl:template>
</xsl:stylesheet>
