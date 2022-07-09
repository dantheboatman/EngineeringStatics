<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <!-- Thin layer on PreTeXt XML -->
  <xsl:import href="core/pretext-html.xsl"/>
  <!-- Customize html behavior -->
  <!--  <xsl:param name="html.annotation" select="'hypothesis'"/>
-->
  <xsl:param name="html.css.extra" select="'statics.css'"/>
  
  <!-- IdentityTransform -->
  <xsl:template match="node() | @*" mode="identity">
    <xsl:copy>
      <xsl:apply-templates select="node() | @*" mode="identity"/>
    </xsl:copy>
  </xsl:template>
  
<!-- ==========================================
Modifications to put geogebra interactive instructions in the sidebar as an <aside>
These changes use the assembly mode and tranform ptx to ptx.
First, prevent standard pretext from emitting  the interactive instructions in a <p> before the interactive. 
-->
  <xsl:template match="interactive" mode="interactive-core">
      <xsl:apply-templates select="." mode="iframe-interactive"/>
   </xsl:template>
  
  <!-- write instructions, if any, as an aside -->
  <xsl:template match="interactive/instructions">
    <xsl:if test=". !=''">
      <aside>
        <title>Interactive Diagram</title>
        <xsl:apply-templates select="." mode='identity'/>
      </aside>
    </xsl:if>
  </xsl:template>
  
<!-- This writes the interactive's instructions before the container containing an interactive, during assembly.-->
<!-- It leaves a copy of the instructions in the interactive, but it is not rendered due to template above -->
  <xsl:template match="sidebyside | figure[not(ancestor::sidebyside)] | interactive[not(ancestor::figure) and not(ancestor::sidebyside)]" mode="assembly">
    <xsl:apply-templates select=".//instructions"/>
    <xsl:apply-templates mode="identity" select="." />
  </xsl:template>
  
<!-- ===================================-->
  
</xsl:stylesheet>
