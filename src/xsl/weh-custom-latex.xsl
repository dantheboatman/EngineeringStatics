<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" xmlns:date="http://exslt.org/dates-and-times" extension-element-prefixes="date">
 
<!-- Thin layer on PreText XML -->
 <xsl:import href="core/pretext-latex.xsl"/>

 <!-- Customize latex behavior -->
 
<xsl:param name="latex.geometry" select="'letterpaper,total={6in,9in}'"/>
<xsl:param name="latex.font.size" select="'12pt'"/>
<xsl:param name="latex.draft" select="'no'"/>
<!--xsl:param name="watermark.text" select="concat(date:day-in-month(),' ',date:month-name(), ' ', date:year())"/-->
 
</xsl:stylesheet>
