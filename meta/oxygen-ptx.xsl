<?xml version='1.0'?> <!-- As XML file -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:strip-space elements="*"/> 
 <xsl:output method="xml"/>

 <xsl:template match="chapter">
  <xsl:copy-of select="."/>
 </xsl:template>
 
</xsl:stylesheet>
