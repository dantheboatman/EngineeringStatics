<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
 <xsl:output method="xml"/>
 <xsl:strip-space elements="*"/>

 <xsl:template match="/">
  <!-- copy each chapter in source book.xml to its own file > @id.ptx-->
  <xsl:for-each select="//chapter">
   <xsl:result-document href="{@xml:id}.ptx">
    <xsl:copy>
     <xsl:apply-templates select="@*"/>
     <xsl:apply-templates/>
    </xsl:copy>
   </xsl:result-document>
  </xsl:for-each>

 </xsl:template>

 <!-- IdentityTransform -->
 <xsl:template match="node() | @*">
  <xsl:copy>
   <xsl:apply-templates select="node() | @*"/>
  </xsl:copy>
 </xsl:template>

 <xsl:template match="tag | tage">
  <!-- Don't perform replacements on the text of these element.-->
  <xsl:copy-of select="."/>
 </xsl:template>


 <!-- Force Examples into Subsections
<xsl:template match="example">
 <subsubsection>
  <xsl:attribute name="role">example</xsl:attribute>
  <title>Example: <xsl:value-of select="title"/> </title>
  <xsl:apply-templates select="introduction/node()|@*"/>
  <xsl:apply-templates select="statement/node()|@*"/>
  <xsl:apply-templates select="solution"/>
  <xsl:apply-templates select="conclusion"/>   
 </subsubsection>
</xsl:template> 

 <xsl:template match="example/solution">
  <paragraphs><title>Solution</title><xsl:apply-templates select="node()|@*"/></paragraphs>
 </xsl:template>
 
 <xsl:template match="example/conclusion">
  <paragraphs><title>Conclusion</title><xsl:apply-templates select="node()|@*"/></paragraphs>
 </xsl:template>-->


 <!-- reorganize examples to validate, moves intro to before example, adds conclusion to solution
 removes paragraph tag but keeps its contents, title becomes first paragraph.-->

 <xsl:template match="example">
  <xsl:apply-templates select="introduction/*"/>
  <example>
   <xsl:apply-templates select="title |statement"/>
   <xsl:apply-templates select="answer"/>
    <solution>
    <xsl:apply-templates select="solution/*"/>
    <xsl:apply-templates select="conclusion/*"/>
   </solution>
   <xsl:apply-templates select="hint"/>
  </example>
 </xsl:template>


 <xsl:template match="example//paragraphs">
  <xsl:apply-templates select="./*"/>
 </xsl:template>
 
 <xsl:template match="example//paragraphs/title"><p><term><xsl:value-of select="."/></term></p></xsl:template>

   

 <!-- Format output to my liking -->

 <xsl:template match="title | caption">
  <!-- empty line prior to these elements -->
  <xsl:text>&#xa;&#xa;</xsl:text>
  <xsl:copy>
   <xsl:apply-templates/>
  </xsl:copy>
  <xsl:text>&#xa;&#xa;</xsl:text>
 </xsl:template>


 <xsl:template match="p">
  <!-- starts on new line -->
  <xsl:text>&#xa;</xsl:text>
  <xsl:copy>
   <xsl:apply-templates/>
  </xsl:copy>
 </xsl:template>


 <!-- substitutions -->

 <xsl:template match="element()/text()">
  <!-- Calls a nested sequence of regex replacements on the text nodes. -->
  <!-- Each calls the next on non-matching-substring -->
  <!-- Last just returns the text(). -->
  <xsl:call-template name="markdown_links"/>
 </xsl:template>

 <xsl:template name="markdown_links">
  <xsl:analyze-string select="." regex="\[(.*?)\]\((.*?)\)">
   <xsl:matching-substring>
    <xsl:element name="url">
     <xsl:attribute name="href">
      <xsl:value-of select="regex-group(2)"/>
     </xsl:attribute>
     <xsl:value-of select="regex-group(1)"/>
    </xsl:element>
   </xsl:matching-substring>
   <xsl:non-matching-substring>
    <xsl:call-template name="pretext"/>
   </xsl:non-matching-substring>
  </xsl:analyze-string>
 </xsl:template>

 <xsl:template name="pretext">
  <!-- convenience method - returns proper <pretext/> tag when pretext in the text -->
  <xsl:analyze-string select="." regex="pretext" flags="i">
   <xsl:matching-substring>
    <xsl:element name="pretext"/>
   </xsl:matching-substring>
   <xsl:non-matching-substring>
    <xsl:call-template name="bullets"/>
   </xsl:non-matching-substring>
  </xsl:analyze-string>
 </xsl:template>

 <xsl:template name="bullets">
  <!-- removes bullets inserted by ptx-ul style in scrivener-->
  <xsl:analyze-string select="." regex="^\s•">
   <xsl:matching-substring>
    <xsl:value-of select="replace(., '•', '')"/>
   </xsl:matching-substring>
   <xsl:non-matching-substring>
    <xsl:value-of select="."/>
   </xsl:non-matching-substring>
  </xsl:analyze-string>
 </xsl:template>

 <xsl:template name="mdash">
  <!-- converts markdown style dashes to m-dashes -->
  <!-- can be escaped with a backslash-->
  <!-- not working -->
  <xsl:analyze-string select="." regex="\\?--">
   <xsl:matching-substring>
    <xsl:choose>
     <xsl:when test=". = '--'">
      <xsl:element name="em"/>
     </xsl:when>
     <xsl:otherwise>
      <xsl:text>dash dash</xsl:text>
     </xsl:otherwise>
    </xsl:choose>
   </xsl:matching-substring>
   <xsl:non-matching-substring>
    <xsl:text>no match</xsl:text>
    <xsl:value-of select="."/>
   </xsl:non-matching-substring>
  </xsl:analyze-string>
 </xsl:template>

</xsl:stylesheet>
