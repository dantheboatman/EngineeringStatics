<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:html="http://www.w3.org/1999/xhtml" version="1.0" xmlns:pi="http://pretextbook.org/2020/pretext/internal">
  <xsl:import href="./core/pretext-latex.xsl"/>
  <xsl:output method="text"/>
  <xsl:template match="&GOAL-LIKE;|&EXAMPLE-LIKE;|&REMARK-LIKE;" mode="tcb-style">
    <xsl:text>colframe=CornflowerBlue!90, colback=CornflowerBlue!10,&#xa;</xsl:text>
  </xsl:template>
  
  <!--  Hide answers in examples-->
  <xsl:template match="example/answer"/>
  
  <!-- Adjust Widths fo Numbas Exercises Include link to web version-->
  <xsl:template match="interactive[@platform = 'geogebra']" mode="representations">
    <xsl:variable name="the-url">
      <xsl:apply-templates select="." mode="static-url"/>
    </xsl:variable>
    <!-- @preview must be present, so author provides a static image.  To generate use scripts/screenshot-numbas.rb -->
    <image>
      <xsl:attribute name="source">
        <xsl:value-of select="@preview"/>
      </xsl:attribute>
    </image>
    <!-- URL templates create empty strings as signals URLs do not (yet) exist -->
    <xsl:variable name="standalone-url">
      <xsl:apply-templates select="." mode="standalone-url"/>
    </xsl:variable>
    <xsl:if test="not($standalone-url = '')">
      <sidebyside widths="10% 20%" margins="0% 68%" valign="middle">
        <p>
          <url href="{$standalone-url}" visual="">
            <image>
              <xsl:attribute name="pi:generated">
                <xsl:text>qrcode/</xsl:text>
                <xsl:apply-templates select="." mode="assembly-id"/>
                <xsl:text>.png</xsl:text>
              </xsl:attribute>
            </image>
          </url>
        </p>
        <p>
          <url href="{$standalone-url}">Live Link</url>
        </p>
      </sidebyside>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>
