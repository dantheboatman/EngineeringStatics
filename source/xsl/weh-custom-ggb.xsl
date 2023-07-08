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
  
This is a modified copy of the template in pretext-html.xsl -->
    <xsl:template match="slate[@surface='geogebra']">
        <!-- size of the window, to be passed as a parameter -->
        <xsl:variable name="width">
            <xsl:apply-templates select="." mode="get-width-pixels" />
        </xsl:variable>
        <xsl:variable name="height">
            <xsl:apply-templates select="." mode="get-height-pixels" />
        </xsl:variable>
        <!-- We need a Javascript identifier to name the applet -->
        <xsl:variable name="applet-name">
            <xsl:apply-templates select="." mode="visible-id-no-dash" />
        </xsl:variable>
        <!-- And a Javascript identifier for the parameters -->
        <xsl:variable name="applet-parameters">
            <xsl:apply-templates select="." mode="visible-id-no-dash" />
            <xsl:text>_params</xsl:text>
        </xsl:variable>
        <!-- And a Javascript identifier for the onload function -->
        <xsl:variable name="applet-onload">
            <xsl:apply-templates select="." mode="visible-id-no-dash" />
            <xsl:text>_onload</xsl:text>
        </xsl:variable>
        <!-- And a Javascript identifier for the onload function argument -->
        <!-- not strictly necessary, but clarifies HTML                   -->
        <xsl:variable name="applet-onload-argument">
            <xsl:text>api</xsl:text>
        </xsl:variable>
        <!-- And an HTML unique identifier -->
        <xsl:variable name="applet-container">
            <xsl:apply-templates select="." mode="visible-id" />
            <xsl:text>-container</xsl:text>
        </xsl:variable>
        <!-- Javascript API for loading GeoGebra                               -->
        <script>
            <!-- API commands, as text() nodes in the slate. Manual at:   -->
            <!-- https://wiki.geogebra.org/en/Reference:GeoGebra_Apps_API -->
            <!-- In PTX source, use the commands one per line, as in:     -->
            <!-- setCoordSystem(0, 20, 0, 10);                            -->
            <!-- enableShiftDragZoom(false);                              -->
            <xsl:if test="normalize-space(text())">
                <xsl:text>var </xsl:text>
                <xsl:value-of select="$applet-onload" />
                <xsl:text> = function(ggb) {&#xa;</xsl:text>
                <xsl:call-template name="prepend-string">
                    <xsl:with-param name="text">
                        <xsl:call-template name="sanitize-text">
                            <xsl:with-param name="text" select="." />
                        </xsl:call-template>
                    </xsl:with-param>
                    <!-- period below is Javascript syntax for methods -->
                    <xsl:with-param name="pad" select="concat('ggb', '.')" />
                </xsl:call-template>
                <xsl:text>};&#xa;</xsl:text>
            </xsl:if>
            <!-- Parameter reference:                                              -->
            <!-- https://wiki.geogebra.org/en/Reference:GeoGebra_App_Parameters    -->
            <!-- We leave most parameters as their default value. In most cases,   -->
            <!-- an author could use API commands to alter these settings.         -->
            <xsl:text>var </xsl:text>
            <xsl:value-of select="$applet-parameters" />
            <xsl:text> = {&#xa;</xsl:text>
            <xsl:text>id:"</xsl:text>
            <xsl:value-of select="$applet-name" />
            <xsl:text>",&#xa;</xsl:text>
            <!-- Prioritize local over remote -->
            <xsl:choose>
                <xsl:when test="@base64">
                    <xsl:text>ggbBase64:"</xsl:text>
                    <xsl:value-of select="@base64" />
                    <xsl:text>",&#xa;</xsl:text>
                </xsl:when>
                <xsl:when test="@source">
                    <xsl:text>filename:"</xsl:text>
                    <!-- empty when not using managed directories -->
                    <xsl:value-of select="$external-directory"/>
                    <xsl:value-of select="@source" />
                    <xsl:text>",&#xa;</xsl:text>
                </xsl:when>
                <xsl:when test="@material">
                    <xsl:text>material_id:"</xsl:text>
                    <xsl:value-of select="@material" />
                    <xsl:text>",&#xa;</xsl:text>
                </xsl:when>
                <xsl:when test="@geogebra">
                    <xsl:message>PTX Warning:  "geogebra" attribute on "slate" element is deprecated; use "material" attribute</xsl:message>
                    <xsl:text>material_id:"</xsl:text>
                    <xsl:value-of select="@geogebra" />
                    <xsl:text>",&#xa;</xsl:text>
                </xsl:when>
                <!-- Now must be authored in source, so we can check for   -->
                <!-- setting perspective via an attribute.  This bypasses  -->
                <!-- a bug where using "setPerspective()" in source caused -->
                <!-- the focus to be grabbed here.                         -->
                <xsl:otherwise>
                    <xsl:if test="@perspective">
                        <xsl:text>perspective:"</xsl:text>
                        <xsl:value-of select="@perspective"/>
                        <xsl:text>",&#xa;</xsl:text>
                    </xsl:if>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:text>width:</xsl:text><xsl:value-of select="$width" />
            <xsl:text>,&#xa;</xsl:text>
            <xsl:text>height:</xsl:text><xsl:value-of select="$height" />
            <xsl:text>,&#xa;</xsl:text>
            <xsl:text>appletOnLoad: function(ggb) {&#xa;</xsl:text>
            <xsl:value-of select="$applet-onload" />
            <xsl:text>(ggb);&#xa;</xsl:text>
            <!--notifiy listeners and save ggb api object.-->
            <xsl:text>console.log("Loading </xsl:text>
            <xsl:value-of select="$applet-name" />
            <xsl:text>" , ggb);&#xa;</xsl:text>
            <xsl:text>listeners(ggb);&#xa;</xsl:text>
            <xsl:text>}&#xa;}&#xa;&#xa;</xsl:text>
            
            <xsl:text>var load_ggb = new Promise(function(resolve, reject) {&#xa;</xsl:text>
            
            <xsl:text>var </xsl:text>
            <xsl:value-of select="$applet-name" />
            <xsl:text> = new GGBApplet(</xsl:text>
            <xsl:value-of select="$applet-parameters" />
            <xsl:text>, true);&#xa;</xsl:text>
            <xsl:text>resolve(</xsl:text>
            <xsl:value-of select="$applet-name" />
            <xsl:text>);&#xa;</xsl:text>
            <xsl:text>}).then(&#xa;</xsl:text>
            <xsl:text>function(</xsl:text>
            <xsl:value-of select="$applet-name" />
            <xsl:text>) {;&#xa;</xsl:text>
            <!-- inject the applet into the div below -->
            <xsl:text>window.onload = function() { </xsl:text>
            <xsl:value-of select="$applet-name" />
            <xsl:text>.inject('</xsl:text>
            <xsl:value-of select="$applet-container" />
            <xsl:text>');&#xa;};},&#xa;</xsl:text>
            <xsl:text>function(error) {&#xa;</xsl:text>
            <xsl:text>console.log('GGB load applet error.', error);&#xa;</xsl:text>
            <xsl:text>});&#xa;</xsl:text>
        </script>
        <xsl:text>&#xa;&#xa;</xsl:text>
        <!-- build a container div with the right shape -->
        <div class="geogebra-applet" id="{$applet-container}">
            <xsl:apply-templates select="." mode="size-pixels-style-attribute" />
        </div>
    </xsl:template>

 <!-- created a new slate[@surface='ptx']  which can contain pretext, but also html elements. Obviously it doesn't validate, and
    sometimes when transformed, the standard templates eat the html elements. I need to figure out which are necessary and allow for them.   -->

 <xsl:template match="slate[@surface = 'ptx']" > 
   <xsl:call-template name="latex-macros" />
   <xsl:apply-templates />
 </xsl:template>

 <xsl:template match="slate[@surface = 'ptx']//html:*">
  <xsl:copy-of select="." />
 </xsl:template>

	<!-- We take in all three rows and package       -->
	<!-- them up inside an overriding "sidebyside"   -->
	<!-- div containing three "sbsrow" divs.  Purely -->
	<!--  a container, never a target, so no xml:id  -->
	<!-- in source, so no HTML id on div.sidebyside  -->
	<xsl:template match="sidebyside" mode="compose-panels">
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
