<?xml version='1.0'?> <!-- As XML file -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <!-- Thin layer on PreTeXt XML -->
  <xsl:import href="../../mathbook/xsl/pretext-html.xsl"/>
  <xsl:import href="./weh-common.xsl"/>
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
  
<!-- then, write the interactive's instructions (if any) in an aside before the container containing an interactive.-->
  <xsl:template match="//p[following-sibling::*[descendant::instructions and position()='1' and not( parent::sidebyside)]]" mode="assembly">
   <p><xsl:apply-templates mode="identity"/></p>
    <xsl:if test="./following-sibling::*//instructions !=''">
      <aside>
        <title>Instructions</title>
        <p><xsl:apply-templates select="./following-sibling::*[1]//instructions" mode='identity'/></p>
      </aside>
    </xsl:if>
  </xsl:template>
  
<!-- ===================================-->
  
</xsl:stylesheet>
