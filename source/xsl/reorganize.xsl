<?xml version="1.0" encoding="UTF-8"?>
<!-- Utility Stylesheet used to move remix element to the end of images and interactives, use as example -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xi="http://www.w3.org/2001/XInclude" version="2.0">
<xsl:output method="xml" indent="no"/>
<xsl:preserve-space elements="slate"/>
<xsl:template match="/">
	<xsl:apply-templates/>
</xsl:template>
<!-- IdentityTransform -->
<xsl:template match="node() | @*">
	<xsl:copy>
		<xsl:apply-templates select="node() | @*"/>
	</xsl:copy>
</xsl:template>
<xsl:template match="image">
	<xsl:copy>
		<xsl:apply-templates select="@*"/>
		<xsl:text>&#10;</xsl:text>
		<xsl:apply-templates select="* except remix"/>
		<xsl:text>&#10;</xsl:text>
		<xsl:apply-templates select="remix"/>
	</xsl:copy>
</xsl:template>
<xsl:template match="interactive">
	<xsl:copy>
		<xsl:apply-templates select="@*"/>
		<xsl:text>&#10;</xsl:text>
		<xsl:apply-templates select="* except remix"/>
		<xsl:text>&#10;</xsl:text>
		<xsl:apply-templates select="remix"/>
	</xsl:copy>
</xsl:template>
</xsl:stylesheet>
