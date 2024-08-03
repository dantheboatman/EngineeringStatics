<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>
<xsl:stylesheet 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:html="http://www.w3.org/1999/xhtml"  version="1.0">
   <xsl:import href="./core/pretext-latex.xsl"/>
  <xsl:output method="text"/>


	<xsl:template match="&GOAL-LIKE;|&EXAMPLE-LIKE;|&REMARK-LIKE;" mode="tcb-style">
		<xsl:text>colframe=CornflowerBlue!90, colback=CornflowerBlue!10,&#xa;</xsl:text>
	</xsl:template>
 
<xsl:template match="example/answer"/>
</xsl:stylesheet>
