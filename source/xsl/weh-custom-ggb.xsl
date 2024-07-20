<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:html="http://www.w3.org/1999/xhtml" version="1.0">
  <!-- ==========================================
    
Customizations to allow geogebra to communicate back and forth with the html page.  Main changes:
1.  Load geogebra in a promise so that the api object is accessible
2.  When loading ggb, also loads a custom javascript function called listeners() which can do things like 
    a.  update the page when the ggb changes
    b.  update the applet when the page changes
    c.  notifiy mathjax to update equations when they change
    d.  send commands to ggb by clicking a button on the page
    e.  use <input> elements to enter values needed by ggb.
    f.  Inject html after the page is rendered from the ptx source.
  
 Core pretext now loads ggb using a promise, so my code has been removed 7/24/24 -->
     
 <!--Modified pretext-html.xsl template to play nice with ggb -->
  <xsl:template match="//interactive/sidebyside" mode="compose-panels">
    <xsl:param name="layout" />
    <xsl:param name="panels" />
    
    <xsl:variable name="left-margin"  select="$layout/left-margin" />
    <xsl:variable name="right-margin" select="$layout/right-margin" />
    
    <xsl:call-template name="latex-macros" />             <!--weh: apply my custom macros -->
    
    <!-- A "sidebyside" div, to contain headers, -->
    <!-- panels, captions rows as "sbsrow" divs  -->
    <xsl:element name="div">
      <xsl:attribute name="class">
        <xsl:text>ptx-content blue sidebyside</xsl:text>  <!-- weh: needs ptx-content to make sidebysides work,  blue style -->
      </xsl:attribute>
      <xsl:attribute name="style">
        <xsl:text>min-height: 1vh;</xsl:text>             <!-- weh: reduce minimum height of sbs, so it shrinks to fit. -->
      </xsl:attribute>
      
      <!-- Panels in an "sbsrow" div, always -->
      <xsl:element name="div">
        <xsl:attribute name="class">
          <xsl:text>sbsrow</xsl:text>
        </xsl:attribute>
        <!-- margins are custom from source -->
        <xsl:attribute name="style">
          <xsl:text>margin-left:</xsl:text>
          <xsl:value-of select="$left-margin" />
          <xsl:text>;</xsl:text>
          <xsl:text>margin-right:</xsl:text>
          <xsl:value-of select="$right-margin" />
          <xsl:text>;</xsl:text>
        </xsl:attribute>
        <xsl:copy-of select="$panels" />
      </xsl:element>
      
    </xsl:element>
  </xsl:template>
  
  
</xsl:stylesheet>