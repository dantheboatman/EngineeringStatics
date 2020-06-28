<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 <xsl:output method="xml"/>

<!-- this stylesheet removes <qty> to proper pretext <units> tags.-->
<!-- add additional unit as necessary to units.xsl -->
<!-- produces one temporary file to process with pretext-html.xsl or pdf -->
 

<xsl:template match="/">
 <xsl:apply-templates/>
</xsl:template>
 
 <!-- IdentityTransform -->
 <xsl:template match="node() | @*">
  <xsl:copy>
   <xsl:apply-templates select="node() | @*"/>
  </xsl:copy>
 </xsl:template>
 
 <xsl:template match="qty">
  <xsl:if test="."><xsl:value-of select="."/><xsl:text>~</xsl:text></xsl:if>
  <xsl:choose>
   <xsl:when test="@unit = 'lbm'">
    <xsl:text>\text{lb}_\text{m}</xsl:text>
   </xsl:when>
   <xsl:when test="@unit = 'lbf'">
    <xsl:text>\text{lb}_\text{f}</xsl:text>
   </xsl:when>
   <xsl:when test="@unit = 'ft/s^2'">
    <xsl:text>~\text{ft}/\text{s}^2</xsl:text>
   </xsl:when>
   <xsl:when test="@unit = 'm/s^2'">
    <xsl:text>~\text{m}/\text{s}^2</xsl:text>
   </xsl:when>
   <xsl:when test="@unit = 'm^2'">
    <xsl:text>~\text{m}^2</xsl:text>
   </xsl:when>
   <xsl:otherwise>
    <xsl:text/>\text{ <xsl:value-of select="@unit"/>} <xsl:text/>
   </xsl:otherwise>
  </xsl:choose>
 </xsl:template>
 
 
</xsl:stylesheet>