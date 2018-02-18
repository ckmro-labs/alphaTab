/*
 * This file is part of alphaTab.
 * Copyright © 2018, Daniel Kuschny and Contributors, All rights reserved.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.0 of the License, or at your option any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.
 */
(function ($hx_exports, $global) { "use strict";
$hx_exports["alphaTab"] = $hx_exports["alphaTab"] || {};
$hx_exports["alphaTab"]["xml"] = $hx_exports["alphaTab"]["xml"] || {};
$hx_exports["alphaTab"]["xml"]["_XmlNodeType"] = $hx_exports["alphaTab"]["xml"]["_XmlNodeType"] || {};
;$hx_exports["alphaTab"]["model"] = $hx_exports["alphaTab"]["model"] || {};
$hx_exports["alphaTab"]["model"]["_VibratoType"] = $hx_exports["alphaTab"]["model"]["_VibratoType"] || {};
;$hx_exports["alphaTab"]["model"]["_TripletFeel"] = $hx_exports["alphaTab"]["model"]["_TripletFeel"] || {};
;$hx_exports["alphaTab"]["model"]["_SlideType"] = $hx_exports["alphaTab"]["model"]["_SlideType"] || {};
;$hx_exports["alphaTab"]["model"]["_PickStrokeType"] = $hx_exports["alphaTab"]["model"]["_PickStrokeType"] || {};
;$hx_exports["alphaTab"]["model"]["_NoteAccidentalMode"] = $hx_exports["alphaTab"]["model"]["_NoteAccidentalMode"] || {};
;$hx_exports["alphaTab"]["model"]["_KeySignatureType"] = $hx_exports["alphaTab"]["model"]["_KeySignatureType"] || {};
;$hx_exports["alphaTab"]["model"]["_HarmonicType"] = $hx_exports["alphaTab"]["model"]["_HarmonicType"] || {};
;$hx_exports["alphaTab"]["model"]["_GraceType"] = $hx_exports["alphaTab"]["model"]["_GraceType"] || {};
;$hx_exports["alphaTab"]["model"]["_Fingers"] = $hx_exports["alphaTab"]["model"]["_Fingers"] || {};
;$hx_exports["alphaTab"]["model"]["_DynamicValue"] = $hx_exports["alphaTab"]["model"]["_DynamicValue"] || {};
;$hx_exports["alphaTab"]["model"]["_Duration"] = $hx_exports["alphaTab"]["model"]["_Duration"] || {};
;$hx_exports["alphaTab"]["model"]["_CrescendoType"] = $hx_exports["alphaTab"]["model"]["_CrescendoType"] || {};
;$hx_exports["alphaTab"]["model"]["_ClefOttavia"] = $hx_exports["alphaTab"]["model"]["_ClefOttavia"] || {};
;$hx_exports["alphaTab"]["model"]["_Clef"] = $hx_exports["alphaTab"]["model"]["_Clef"] || {};
;$hx_exports["alphaTab"]["model"]["_BrushType"] = $hx_exports["alphaTab"]["model"]["_BrushType"] || {};
;$hx_exports["alphaTab"]["model"]["_AutomationType"] = $hx_exports["alphaTab"]["model"]["_AutomationType"] || {};
;$hx_exports["alphaTab"]["model"]["_AccidentalType"] = $hx_exports["alphaTab"]["model"]["_AccidentalType"] || {};
;$hx_exports["alphaTab"]["model"]["_AccentuationType"] = $hx_exports["alphaTab"]["model"]["_AccentuationType"] || {};
;$hx_exports["alphaTab"]["io"] = $hx_exports["alphaTab"]["io"] || {};
;$hx_exports["alphaTab"]["importer"] = $hx_exports["alphaTab"]["importer"] || {};
$hx_exports["alphaTab"]["importer"]["_AlphaTexSymbols"] = $hx_exports["alphaTab"]["importer"]["_AlphaTexSymbols"] || {};
;$hx_exports["alphaTab"]["exporter"] = $hx_exports["alphaTab"]["exporter"] || {};
;$hx_exports["alphaTab"]["collections"] = $hx_exports["alphaTab"]["collections"] || {};
$hx_exports["alphaTab"]["collections"]["_StringBuilder"] = $hx_exports["alphaTab"]["collections"]["_StringBuilder"] || {};
;$hx_exports["alphaTab"]["collections"]["_FastList"] = $hx_exports["alphaTab"]["collections"]["_FastList"] || {};
;$hx_exports["alphaTab"]["collections"]["_FastDictionary"] = $hx_exports["alphaTab"]["collections"]["_FastDictionary"] || {};
;$hx_exports["alphaTab"]["audio"] = $hx_exports["alphaTab"]["audio"] || {};
$hx_exports["alphaTab"]["audio"]["model"] = $hx_exports["alphaTab"]["audio"]["model"] || {};
$hx_exports["alphaTab"]["audio"]["model"]["_MidiController"] = $hx_exports["alphaTab"]["audio"]["model"]["_MidiController"] || {};
;$hx_exports["alphaTab"]["audio"]["generator"] = $hx_exports["alphaTab"]["audio"]["generator"] || {};
;$hx_exports["alphaTab"]["rendering"] = $hx_exports["alphaTab"]["rendering"] || {};
$hx_exports["alphaTab"]["rendering"]["staves"] = $hx_exports["alphaTab"]["rendering"]["staves"] || {};
;$hx_exports["alphaTab"]["rendering"]["utils"] = $hx_exports["alphaTab"]["rendering"]["utils"] || {};
$hx_exports["alphaTab"]["rendering"]["utils"]["_BeamDirection"] = $hx_exports["alphaTab"]["rendering"]["utils"]["_BeamDirection"] || {};
;$hx_exports["alphaTab"]["rendering"]["_EffectBarGlyphSizing"] = $hx_exports["alphaTab"]["rendering"]["_EffectBarGlyphSizing"] || {};
;$hx_exports["alphaTab"]["rendering"]["glyphs"] = $hx_exports["alphaTab"]["rendering"]["glyphs"] || {};
$hx_exports["alphaTab"]["rendering"]["glyphs"]["_TripletFeelGlyph_BarType"] = $hx_exports["alphaTab"]["rendering"]["glyphs"]["_TripletFeelGlyph_BarType"] || {};
;$hx_exports["alphaTab"]["rendering"]["glyphs"]["_MusicFontSymbol"] = $hx_exports["alphaTab"]["rendering"]["glyphs"]["_MusicFontSymbol"] || {};
;$hx_exports["alphaTab"]["rendering"]["_BeatXPosition"] = $hx_exports["alphaTab"]["rendering"]["_BeatXPosition"] || {};
;$hx_exports["alphaTab"]["rendering"]["effects"] = $hx_exports["alphaTab"]["rendering"]["effects"] || {};
;$hx_exports["alphaTab"]["rendering"]["layout"] = $hx_exports["alphaTab"]["rendering"]["layout"] || {};
$hx_exports["alphaTab"]["rendering"]["layout"]["_HeaderFooterElements"] = $hx_exports["alphaTab"]["rendering"]["layout"]["_HeaderFooterElements"] || {};
;$hx_exports["alphaTab"]["util"] = $hx_exports["alphaTab"]["util"] || {};
$hx_exports["alphaTab"]["util"]["_LogLevel"] = $hx_exports["alphaTab"]["util"]["_LogLevel"] || {};
;$hx_exports["alphaTab"]["platform"] = $hx_exports["alphaTab"]["platform"] || {};
$hx_exports["alphaTab"]["platform"]["javaScript"] = $hx_exports["alphaTab"]["platform"]["javaScript"] || {};
;$hx_exports["alphaTab"]["platform"]["model"] = $hx_exports["alphaTab"]["platform"]["model"] || {};
$hx_exports["alphaTab"]["platform"]["model"]["_TextBaseline"] = $hx_exports["alphaTab"]["platform"]["model"]["_TextBaseline"] || {};
;$hx_exports["alphaTab"]["platform"]["model"]["_TextAlign"] = $hx_exports["alphaTab"]["platform"]["model"]["_TextAlign"] || {};
;$hx_exports["alphaTab"]["platform"]["model"]["_FontStyle"] = $hx_exports["alphaTab"]["platform"]["model"]["_FontStyle"] || {};
;$hx_exports["alphaTab"]["platform"]["svg"] = $hx_exports["alphaTab"]["platform"]["svg"] || {};
$hx_exports["alphaTab"]["platform"]["svg"]["_SupportedFonts"] = $hx_exports["alphaTab"]["platform"]["svg"]["_SupportedFonts"] || {};
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw new js._Boot.HaxeError("EReg::matched");
		}
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) {
		v = parseInt(x);
	}
	if(isNaN(v)) {
		return null;
	}
	return v;
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return HxOverrides.substr(s,0,start.length) == start;
	} else {
		return false;
	}
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return HxOverrides.substr(s,slen - elen,elen) == end;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var system = {};
system.Exception = function() {
};
system.Exception.__name__ = true;
system.Exception.prototype = {
	Exception_CsString: function(message) {
		this.Message = message;
	}
	,__class__: system.Exception
};
var alphaTab = {};
alphaTab.AlphaTabException = $hx_exports["alphaTab"]["AlphaTabException"] = function() {
	system.Exception.call(this);
};
alphaTab.AlphaTabException.__name__ = true;
alphaTab.AlphaTabException.__super__ = system.Exception;
alphaTab.AlphaTabException.prototype = $extend(system.Exception.prototype,{
	AlphaTabException: function(message) {
		this.Exception_CsString(message);
		this.Description = null;
		this.Description = message;
		return this;
	}
	,__class__: alphaTab.AlphaTabException
});
alphaTab.platform = {};
alphaTab.platform.IPathCanvas = $hx_exports["alphaTab"]["platform"]["IPathCanvas"] = function() { };
alphaTab.platform.IPathCanvas.__name__ = true;
alphaTab.platform.IPathCanvas.prototype = {
	__class__: alphaTab.platform.IPathCanvas
};
alphaTab.platform.ICanvas = $hx_exports["alphaTab"]["platform"]["ICanvas"] = function() { };
alphaTab.platform.ICanvas.__name__ = true;
alphaTab.platform.ICanvas.__interfaces__ = [alphaTab.platform.IPathCanvas];
alphaTab.platform.ICanvas.prototype = {
	__class__: alphaTab.platform.ICanvas
};
alphaTab.platform.svg = {};
alphaTab.platform.svg.SvgCanvas = $hx_exports["alphaTab"]["platform"]["svg"]["SvgCanvas"] = function() {
	this.Buffer = null;
	this._currentPath = null;
	this._currentPathIsEmpty = false;
	var this1 = "";
	this._currentPath = this1;
	this._currentPathIsEmpty = true;
	this.set_Color(new alphaTab.platform.model.Color(255,255,255,255));
	this.set_LineWidth(1);
	this.set_Font(new alphaTab.platform.model.Font("Arial",10,0));
	this.set_TextAlign(0);
	this.set_TextBaseline(0);
};
alphaTab.platform.svg.SvgCanvas.__name__ = true;
alphaTab.platform.svg.SvgCanvas.__interfaces__ = [alphaTab.platform.IPathCanvas,alphaTab.platform.ICanvas];
alphaTab.platform.svg.SvgCanvas.prototype = {
	get_Color: function() {
		return this.__Color;
	}
	,set_Color: function(value) {
		return this.__Color = value;
	}
	,get_LineWidth: function() {
		return this.__LineWidth;
	}
	,set_LineWidth: function(value) {
		return this.__LineWidth = value;
	}
	,get_Font: function() {
		return this.__Font;
	}
	,set_Font: function(value) {
		return this.__Font = value;
	}
	,get_TextAlign: function() {
		return this.__TextAlign;
	}
	,set_TextAlign: function(value) {
		return this.__TextAlign = value;
	}
	,get_TextBaseline: function() {
		return this.__TextBaseline;
	}
	,set_TextBaseline: function(value) {
		return this.__TextBaseline = value;
	}
	,get_Resources: function() {
		return this.__Resources;
	}
	,set_Resources: function(value) {
		return this.__Resources = value;
	}
	,BeginRender: function(width,height) {
		var this1 = "";
		this.Buffer = this1;
		this.Buffer += Std.string("<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"");
		this.Buffer += Std.string(width);
		this.Buffer += Std.string("px\" height=\"");
		this.Buffer += Std.string(height);
		this.Buffer += Std.string("px\" class=\"alphaTabSurfaceSvg\">\n");
		var this2 = "";
		this._currentPath = this2;
		this._currentPathIsEmpty = true;
	}
	,BeginGroup: function(identifier) {
		this.Buffer += Std.string("<g class=\"" + identifier + "\">");
	}
	,EndGroup: function() {
		this.Buffer += Std.string("</g>");
	}
	,EndRender: function() {
		this.Buffer += Std.string("</svg>");
		return this.Buffer;
	}
	,FillRect: function(x,y,w,h) {
		if(w > 0) {
			var s = "<rect x=\"" + (system.Convert.ToInt32_Single(x) - 0) + "\" y=\"" + (system.Convert.ToInt32_Single(y) - 0) + "\" width=\"" + w + "\" height=\"" + h + "\" fill=\"" + this.get_Color().RGBA + "\" />\n";
			this.Buffer += Std.string(s);
		}
	}
	,StrokeRect: function(x,y,w,h) {
		var s = "<rect x=\"" + (system.Convert.ToInt32_Single(x) - 0) + "\" y=\"" + (system.Convert.ToInt32_Single(y) - 0) + "\" width=\"" + w + "\" height=\"" + h + "\" stroke=\"" + this.get_Color().RGBA + "\"";
		this.Buffer += Std.string(s);
		if(this.get_LineWidth() != 1) {
			var s1 = " stroke-width=\"" + this.get_LineWidth() + "\"";
			this.Buffer += Std.string(s1);
		}
		this.Buffer += Std.string(" fill=\"transparent\" />\n");
	}
	,BeginPath: function() {
	}
	,ClosePath: function() {
		this._currentPath += Std.string(" z");
	}
	,MoveTo: function(x,y) {
		this._currentPath += Std.string(" M" + (x - 0) + "," + (y - 0));
	}
	,LineTo: function(x,y) {
		this._currentPathIsEmpty = false;
		this._currentPath += Std.string(" L" + (x - 0) + "," + (y - 0));
	}
	,QuadraticCurveTo: function(cpx,cpy,x,y) {
		this._currentPathIsEmpty = false;
		this._currentPath += Std.string(" Q" + cpx + "," + cpy + "," + x + "," + y);
	}
	,BezierCurveTo: function(cp1x,cp1y,cp2x,cp2y,x,y) {
		this._currentPathIsEmpty = false;
		this._currentPath += Std.string(" C" + cp1x + "," + cp1y + "," + cp2x + "," + cp2y + "," + x + "," + y);
	}
	,FillCircle: function(x,y,radius) {
		this._currentPathIsEmpty = false;
		this._currentPath += Std.string(" M" + (x - radius) + "," + y + " A1,1 0 0,0 " + (x + radius) + "," + y + " A1,1 0 0,0 " + (x - radius) + "," + y + " z");
		this.Fill();
	}
	,Fill: function() {
		if(!this._currentPathIsEmpty) {
			this.Buffer += Std.string("<path d=\"" + this._currentPath + "\"");
			if(this.get_Color().RGBA != "#000000") {
				var s = " fill=\"" + this.get_Color().RGBA + "\"";
				this.Buffer += Std.string(s);
			}
			this.Buffer += Std.string(" stroke=\"none\"/>");
		}
		var this1 = "";
		this._currentPath = this1;
		this._currentPathIsEmpty = true;
	}
	,Stroke: function() {
		if(!this._currentPathIsEmpty) {
			var s = "<path d=\"" + this._currentPath + "\" stroke=\"" + this.get_Color().RGBA + "\"";
			if(this.get_LineWidth() != 1) {
				s = s + (" stroke-width=\"" + this.get_LineWidth() + "\"");
			}
			s = s + " fill=\"none\" />";
			this.Buffer += Std.string(s);
		}
		var this1 = "";
		this._currentPath = this1;
		this._currentPathIsEmpty = true;
	}
	,FillText: function(text,x,y) {
		if(text == "") {
			return;
		}
		var s = "<text x=\"" + system.Convert.ToInt32_Single(x) + "\" y=\"" + system.Convert.ToInt32_Single(y) + "\" style=\"font:" + this.get_Font().ToCssString(1) + "\" " + " dominant-baseline=\"" + this.GetSvgBaseLine() + "\"";
		if(this.get_Color().RGBA != "#000000") {
			s = s + (" fill=\"" + this.get_Color().RGBA + "\"");
		}
		if(this.get_TextAlign() != 0) {
			s = s + (" text-anchor=\"" + this.GetSvgTextAlignment() + "\"");
		}
		s = s + (">" + text + "</text>");
		this.Buffer += Std.string(s);
	}
	,GetSvgTextAlignment: function() {
		var _g = this.get_TextAlign();
		switch(_g) {
		case 0:
			return "start";
		case 1:
			return "middle";
		case 2:
			return "end";
		default:
		}
		return "";
	}
	,GetSvgBaseLine: function() {
		var _g = this.get_TextBaseline();
		switch(_g) {
		case 0:
			return "hanging";
		case 1:
			return "middle";
		case 2:
			return "bottom";
		default:
			return "";
		}
	}
	,MeasureText: function(text) {
		if(text == null || text.length == 0) {
			return 0;
		}
		var font = 1;
		if(this.get_Font().Family.indexOf("Times") != -1) {
			font = 0;
		}
		return alphaTab.platform.svg.FontSizes.MeasureString(text,font,this.get_Font().Size,this.get_Font().Style);
	}
	,FillMusicFontSymbol: function(x,y,scale,symbol) {
		throw new js._Boot.HaxeError("abstract");
	}
	,OnPreRender: function() {
		return null;
	}
	,OnRenderFinished: function() {
		return null;
	}
	,__class__: alphaTab.platform.svg.SvgCanvas
};
alphaTab.platform.svg.CssFontSvgCanvas = $hx_exports["alphaTab"]["platform"]["svg"]["CssFontSvgCanvas"] = function() {
	alphaTab.platform.svg.SvgCanvas.call(this);
};
alphaTab.platform.svg.CssFontSvgCanvas.__name__ = true;
alphaTab.platform.svg.CssFontSvgCanvas.__super__ = alphaTab.platform.svg.SvgCanvas;
alphaTab.platform.svg.CssFontSvgCanvas.prototype = $extend(alphaTab.platform.svg.SvgCanvas.prototype,{
	FillMusicFontSymbol: function(x,y,scale,symbol) {
		var s = "<g transform=\"translate(" + (system.Convert.ToInt32_Single(x) - 0) + " " + (system.Convert.ToInt32_Single(y) - 0) + ")\" class=\"at\" ><text";
		this.Buffer += Std.string(s);
		if(scale != 1) {
			this.Buffer += Std.string("  style=\"font-size: " + scale * 100 + "%\"");
		}
		if(this.get_Color().RGBA != "#000000") {
			var s1 = " fill=\"" + this.get_Color().RGBA + "\"";
			this.Buffer += Std.string(s1);
		}
		this.Buffer += Std.string(">&#" + symbol + ";</text></g>");
	}
	,__class__: alphaTab.platform.svg.CssFontSvgCanvas
});
alphaTab.platform.model = {};
alphaTab.platform.model.Color = $hx_exports["alphaTab"]["platform"]["model"]["Color"] = function(r,g,b,a) {
	if(a == null) {
		a = 255;
	}
	this.Raw = 0;
	this.RGBA = null;
	this.Raw = a << 24 | r << 16 | g << 8 | b;
	if(this.get_A() == 255) {
		this.RGBA = "#" + alphaTab.platform.Platform.ToHexString(this.get_R(),2) + alphaTab.platform.Platform.ToHexString(this.get_G(),2) + alphaTab.platform.Platform.ToHexString(this.get_B(),2);
	} else {
		this.RGBA = "rgba(" + this.get_R() + "," + this.get_G() + "," + this.get_B() + "," + this.get_A() / 255.0 + ")";
	}
};
alphaTab.platform.model.Color.__name__ = true;
alphaTab.platform.model.Color.prototype = {
	get_A: function() {
		return system.Convert.ToUInt8(this.Raw >> 24 & 255);
	}
	,get_R: function() {
		return system.Convert.ToUInt8(this.Raw >> 16 & 255);
	}
	,get_G: function() {
		return system.Convert.ToUInt8(this.Raw >> 8 & 255);
	}
	,get_B: function() {
		return system.Convert.ToUInt8(this.Raw & 255);
	}
	,__class__: alphaTab.platform.model.Color
};
alphaTab.platform.Platform = $hx_exports["alphaTab"]["platform"]["Platform"] = function() { };
alphaTab.platform.Platform.__name__ = true;
alphaTab.platform.Platform.ParseFloat = function(s) {
	return parseFloat(s);
};
alphaTab.platform.Platform.GetCallerName = function() {
	return arguments.callee.caller.caller.name;
};
alphaTab.platform.Platform.Log = function(logLevel,category,msg,details) {
	msg = "[AlphaTab][" + category + "] " + msg;
	var $console = $global.console;
	switch(logLevel) {
	case 0:
		break;
	case 1:
		$console.debug(msg,details);
		break;
	case 2:
		$console.info(msg,details);
		break;
	case 3:
		$console.warn(msg,details);
		break;
	case 4:
		var stack = haxe.CallStack.toString(haxe.CallStack.callStack());
		$console.error(msg,stack,details);
		break;
	default:
	}
};
alphaTab.platform.Platform.NewObject = function() {
	return {}
};
alphaTab.platform.Platform.JsonExists = function(json,property) {
	return (json && property in json);
};
alphaTab.platform.Platform.JsonKeys = function(json) {
	return Object.keys(json);
};
alphaTab.platform.Platform.Log2 = function(f) {
	return Math.log2(f);
};
alphaTab.platform.Platform.ParseInt = function(s) {
	var val = parseInt(s);
	if(isNaN(val)) {
		return -2147483648;
	} else {
		return val;
	}
};
alphaTab.platform.Platform.CloneArray = function(array) {
	return new Int32Array(array);
};
alphaTab.platform.Platform.BlockCopy = function(src,srcOffset,dst,dstOffset,count) {
	var i = 0;
	while(i < count) {
		dst[dstOffset + i] = src[srcOffset + i];
		++i;
	}
};
alphaTab.platform.Platform.StringFromCharCode = function(c) {
	return String.fromCharCode(c);
};
alphaTab.platform.Platform.ReadSignedByte = function(readable) {
	var n = readable.ReadByte();
	if(n >= 128) {
		return system.Convert.ToInt8(n - 256);
	}
	return system.Convert.ToInt8(n);
};
alphaTab.platform.Platform.ToString = function(data) {
	var this1 = "";
	var s = this1;
	var i = 0;
	while(i < data.length) {
		var c = data[i++];
		if(c < 128) {
			if(c == 0) {
				break;
			}
			s += String.fromCharCode(c);
		} else if(c < 224) {
			s += String.fromCharCode((c & 63) << 6 | data[i++] & 127);
		} else if(c < 240) {
			s += String.fromCharCode((c & 31) << 12 | (data[i++] & 127) << 6 | data[i++] & 127);
		} else {
			var u = (c & 15) << 18 | (data[i++] & 127) << 12 | (data[i++] & 127) << 6 | data[i++] & 127;
			s += String.fromCharCode((u >> 18) + 55232);
			s += String.fromCharCode(u & 1023 | 56320);
		}
	}
	return s;
};
alphaTab.platform.Platform.StringToByteArray = function(contents) {
	var this1 = new Uint8Array(contents.length);
	var byteArray = this1;
	var i = 0;
	while(i < contents.length) {
		var this2 = system.Convert.ToUInt16(HxOverrides.cca(contents,i));
		byteArray[i] = system.Convert.ToUInt8(this2);
		++i;
	}
	return byteArray;
};
alphaTab.platform.Platform.S4 = function() {
	return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
};
alphaTab.platform.Platform.NewGuid = function() {
	var lhs = alphaTab.platform.Platform.S4() + alphaTab.platform.Platform.S4();
	var this1 = system.Convert.ToUInt16(45);
	var lhs1 = lhs + String.fromCharCode(this1) + alphaTab.platform.Platform.S4();
	var this2 = system.Convert.ToUInt16(45);
	var lhs2 = lhs1 + String.fromCharCode(this2) + alphaTab.platform.Platform.S4();
	var this3 = system.Convert.ToUInt16(45);
	var lhs3 = lhs2 + String.fromCharCode(this3) + alphaTab.platform.Platform.S4();
	var this4 = system.Convert.ToUInt16(45);
	return lhs3 + String.fromCharCode(this4) + alphaTab.platform.Platform.S4() + alphaTab.platform.Platform.S4() + alphaTab.platform.Platform.S4();
};
alphaTab.platform.Platform.Member_Object_CsString1 = function(s,name) {
	return s[name];
};
alphaTab.platform.Platform.Member_Object_CsString_T1 = function(s,name,value) {
	return s[name] = value;
};
alphaTab.platform.Platform.Match = function(s,regex) {
	return s.match(regex);
};
alphaTab.platform.Platform.IsTruthy = function(o) {
	return !(!o);
};
alphaTab.platform.Platform.IsNaN = function(v) {
	return isNaN(v);
};
alphaTab.platform.Platform.TypeOf = function(o) {
	return typeof(o);
};
alphaTab.platform.Platform.ArrayBufferToByteArray = function(data) {
	return new Uint8Array(data);
};
alphaTab.platform.Platform.ToDouble = function(bytes) {
	var array = new Float64Array(bytes.buffer);
	return array[0];
};
alphaTab.platform.Platform.IsStringNumber = function(s,allowSign) {
	if(allowSign == null) {
		allowSign = true;
	}
	if(s.length == 0) {
		return false;
	}
	var this1 = system.Convert.ToUInt16(HxOverrides.cca(s,0));
	var c = this1;
	return alphaTab.platform.Platform.IsCharNumber(c,allowSign);
};
alphaTab.platform.Platform.IsCharNumber = function(c,allowSign) {
	if(allowSign == null) {
		allowSign = true;
	}
	if(!(allowSign && c == 45)) {
		if(c >= 48) {
			return c <= 57;
		} else {
			return false;
		}
	} else {
		return true;
	}
};
alphaTab.platform.Platform.IsWhiteSpace = function(c) {
	if(!(c == 32 || c == 11 || c == 13)) {
		return c == 10;
	} else {
		return true;
	}
};
alphaTab.platform.Platform.ToHexString = function(n,digits) {
	if(digits == null) {
		digits = 0;
	}
	var s = "";
	var hexChars = "0123456789ABCDEF";
	while(true) {
		var this1 = system.Convert.ToUInt16(HxOverrides.cca(hexChars,n & 15));
		s = String.fromCharCode(this1) + s;
		n = n >> 4;
		if(!(n > 0)) {
			break;
		}
	}
	while(s.length < digits) s = "0" + s;
	return s;
};
system.Convert = function() { };
system.Convert.__name__ = true;
system.Convert.ToInt8 = function(v) {
	system.Convert._int32Buffer[0] = v;
	return system.Convert._int8Buffer[0];
};
system.Convert.ToUInt8 = function(v) {
	system.Convert._int32Buffer[0] = v;
	return system.Convert._uint8Buffer[0];
};
system.Convert.ToInt16 = function(v) {
	system.Convert._int32Buffer[0] = v;
	return system.Convert._int16Buffer[0];
};
system.Convert.ToUInt16 = function(v) {
	system.Convert._int32Buffer[0] = v;
	return system.Convert._uint16Buffer[0];
};
system.Convert.ToUInt32 = function(v) {
	system.Convert._int32Buffer[0] = v;
	return system.Convert._uint32Buffer[0];
};
system.Convert.ToInt32 = function(v) {
	system.Convert._uint32Buffer[0] = v;
	return system.Convert._int32Buffer[0];
};
system.Convert.ToInt32_Double = function(v) {
	if(v >= 0) {
		if(v < 2147483647.5) {
			return v | 0;
		}
	} else if(v >= -2147483648.5) {
		return v | 0;
	}
	throw new js._Boot.HaxeError(new system.OverflowException("Value was either too large or too small for a Int32."));
};
system.Convert.ToInt32_Single = function(v) {
	var this1 = v;
	return system.Convert.ToInt32_Double(this1);
};
alphaTab.platform.model.Font = $hx_exports["alphaTab"]["platform"]["model"]["Font"] = function(family,size,style) {
	if(style == null) {
		style = 0;
	}
	this._css = null;
	this.Family = null;
	this.Size = 0.0;
	this.Style = null;
	this.Family = family;
	this.Size = size;
	this.Style = style;
	this._css = this.ToCssString(1);
};
alphaTab.platform.model.Font.__name__ = true;
alphaTab.platform.model.Font.prototype = {
	get_IsBold: function() {
		return (this.Style & 1) != 0;
	}
	,get_IsItalic: function() {
		return (this.Style & 2) != 0;
	}
	,Clone: function() {
		return new alphaTab.platform.model.Font(this.Family,this.Size,this.Style);
	}
	,ToCssString: function(scale) {
		if(scale == null) {
			scale = 1;
		}
		if(this._css != null && scale == 1) {
			return this._css;
		}
		var this1 = "";
		var buf = this1;
		if(this.get_IsBold()) {
			buf += Std.string("bold ");
		}
		if(this.get_IsItalic()) {
			buf += Std.string("italic ");
		}
		buf += Std.string(this.Size * scale);
		buf += Std.string("px ");
		buf += Std.string("'");
		buf += Std.string(this.Family);
		buf += Std.string("'");
		return buf;
	}
	,__class__: alphaTab.platform.model.Font
};
alphaTab.platform.javaScript = {};
alphaTab.platform.javaScript.Html5Canvas = $hx_exports["alphaTab"]["platform"]["javaScript"]["Html5Canvas"] = function() {
	this._canvas = null;
	this._context = null;
	this._color = null;
	this._font = null;
	this._musicFont = null;
	this._color = new alphaTab.platform.model.Color(0,0,0,255);
	var fontElement = window.document.createElement("span");
	fontElement.classList.add("at");
	window.document.body.appendChild(fontElement);
	var style = window.getComputedStyle(fontElement);
	var s = style.fontSize;
	this._musicFont = new alphaTab.platform.model.Font(style.fontFamily,parseFloat(s),0);
};
alphaTab.platform.javaScript.Html5Canvas.__name__ = true;
alphaTab.platform.javaScript.Html5Canvas.__interfaces__ = [alphaTab.platform.ICanvas];
alphaTab.platform.javaScript.Html5Canvas.prototype = {
	get_Resources: function() {
		return this.__Resources;
	}
	,set_Resources: function(value) {
		return this.__Resources = value;
	}
	,OnPreRender: function() {
		return null;
	}
	,OnRenderFinished: function() {
		return null;
	}
	,BeginRender: function(width,height) {
		this._canvas = js.Boot.__cast(window.document.createElement("canvas") , HTMLCanvasElement);
		var tmp = system.Convert.ToInt32_Single(width);
		this._canvas.width = tmp;
		var tmp1 = system.Convert.ToInt32_Single(height);
		this._canvas.height = tmp1;
		this._canvas.style.width = Std.string(width) + "px";
		this._canvas.style.height = Std.string(height) + "px";
		this._context = this._canvas.getContext("2d");
		this._context.textBaseline = "top";
	}
	,EndRender: function() {
		var result = this._canvas;
		this._canvas = null;
		return result;
	}
	,get_Color: function() {
		return this._color;
	}
	,set_Color: function(value) {
		if(this._color.RGBA == value.RGBA) {
			return this.get_Color();
		}
		this._color = value;
		this._context.strokeStyle = value.RGBA;
		this._context.fillStyle = value.RGBA;
		return this.get_Color();
	}
	,get_LineWidth: function() {
		return this._context.lineWidth;
	}
	,set_LineWidth: function(value) {
		this._context.lineWidth = value;
		return this.get_LineWidth();
	}
	,FillRect: function(x,y,w,h) {
		if(w > 0) {
			this._context.fillRect(system.Convert.ToInt32_Single(x) - 0.5,system.Convert.ToInt32_Single(y) - 0.5,w,h);
		}
	}
	,StrokeRect: function(x,y,w,h) {
		this._context.strokeRect(x - 0.5,y - 0.5,w,h);
	}
	,BeginPath: function() {
		this._context.beginPath();
	}
	,ClosePath: function() {
		this._context.closePath();
	}
	,MoveTo: function(x,y) {
		this._context.moveTo(x - 0.5,y - 0.5);
	}
	,LineTo: function(x,y) {
		this._context.lineTo(x - 0.5,y - 0.5);
	}
	,QuadraticCurveTo: function(cpx,cpy,x,y) {
		this._context.quadraticCurveTo(cpx,cpy,x,y);
	}
	,BezierCurveTo: function(cp1x,cp1y,cp2x,cp2y,x,y) {
		this._context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
	}
	,FillCircle: function(x,y,radius) {
		this._context.beginPath();
		this._context.arc(x,y,radius,0,6.28318530717958,true);
		this.Fill();
	}
	,Fill: function() {
		this._context.fill();
	}
	,Stroke: function() {
		this._context.stroke();
	}
	,get_Font: function() {
		return this._font;
	}
	,set_Font: function(value) {
		this._font = value;
		var tmp = value.ToCssString(1);
		this._context.font = tmp;
		return this.get_Font();
	}
	,get_TextAlign: function() {
		var _g = this._context.textAlign;
		switch(_g) {
		case "center":
			return 1;
		case "left":
			return 0;
		case "right":
			return 2;
		default:
			return 0;
		}
	}
	,set_TextAlign: function(value) {
		switch(value) {
		case 0:
			this._context.textAlign = "left";
			break;
		case 1:
			this._context.textAlign = "center";
			break;
		case 2:
			this._context.textAlign = "right";
			break;
		default:
		}
		return this.get_TextAlign();
	}
	,get_TextBaseline: function() {
		var _g = this._context.textBaseline;
		switch(_g) {
		case "bottom":
			return 2;
		case "middle":
			return 1;
		case "top":
			return 0;
		default:
			return 0;
		}
	}
	,set_TextBaseline: function(value) {
		switch(value) {
		case 0:
			this._context.textBaseline = "top";
			break;
		case 1:
			this._context.textBaseline = "middle";
			break;
		case 2:
			this._context.textBaseline = "bottom";
			break;
		default:
		}
		return this.get_TextBaseline();
	}
	,BeginGroup: function(identifier) {
	}
	,EndGroup: function() {
	}
	,FillText: function(text,x,y) {
		this._context.fillText(text,x,y);
	}
	,MeasureText: function(text) {
		return js.Boot.__cast(this._context.measureText(text).width , Float);
	}
	,FillMusicFontSymbol: function(x,y,scale,symbol) {
		if(symbol == -1) {
			return;
		}
		var baseLine = this._context.textBaseline;
		var font = this._context.font;
		var tmp = this._musicFont.ToCssString(scale);
		this._context.font = tmp;
		this._context.textBaseline = "middle";
		this._context.fillText(String.fromCharCode(symbol),x,y);
		this._context.textBaseline = baseLine;
		this._context.font = font;
	}
	,__class__: alphaTab.platform.javaScript.Html5Canvas
};
alphaTab.platform.javaScript.JQueryAlphaTab = $hx_exports["alphaTab"]["platform"]["javaScript"]["JQueryAlphaTab"] = function() {
	var this1 = [];
	this._initListeners = this1;
};
alphaTab.platform.javaScript.JQueryAlphaTab.__name__ = true;
alphaTab.platform.javaScript.JQueryAlphaTab.Restore = function(selector) {
	$(selector).empty().removeData("alphaTab");
};
alphaTab.platform.javaScript.JQueryAlphaTab.prototype = {
	Exec: function(element,method,args) {
		if(typeof(method) != 'string') {
			args = [method];
			method = "init";
		}
		var tmp;
		var this1 = system.Convert.ToUInt16(HxOverrides.cca(method,0));
		if(!(this1 == 95)) {
			tmp = method == "Exec";
		} else {
			tmp = true;
		}
		if(tmp) {
			return null;
		}
		var jElement = $(element);
		var context = jElement.data("alphaTab");
		if(method == "destroy" && !(!(!context))) {
			return null;
		}
		if(method != "init" && !(!(!context))) {
			throw new Error("alphaTab not initialized");
		}
		var apiMethod = this[method];
		if(!(!apiMethod)) {
			var realArgs = [ jElement, context ].concat(args);
			return apiMethod.apply(this,realArgs);
		} else {
			alphaTab.util.Logger.Error("Api","Method '" + method + "' does not exist on jQuery.alphaTab",null);
			return null;
		}
	}
	,init: function(element,context,options) {
		if(!(!(!context))) {
			context = new alphaTab.platform.javaScript.JsApi(element[0],options);
			element.data("alphaTab",context);
			var listener = $iterator(this._initListeners)();
			while(listener.hasNext()) {
				var listener1 = listener.next();
				listener1(element,context,options);
			}
		}
	}
	,destroy: function(element,context) {
		element.removeData("alphaTab");
		context.Destroy();
	}
	,tex: function(element,context,tex) {
		context.Tex(tex);
	}
	,tracks: function(element,context,tracks) {
		if(tracks) {
			context.SetTracks(tracks,true);
		}
		return context.get_Tracks();
	}
	,api: function(element,context) {
		return context;
	}
	,score: function(element,context,score) {
		if(!(!score)) {
			context.ScoreLoaded(score,true);
		}
		return context.Score;
	}
	,renderer: function(element,context) {
		return context.Renderer;
	}
	,layout: function(element,context,layout) {
		if(!(!layout)) {
			context.UpdateLayout(layout);
		}
		return context.Settings.Layout;
	}
	,print: function(element,context,width) {
		context.Print(width);
	}
	,_oninit: function(listener) {
		this._initListeners.push(listener);
	}
	,__class__: alphaTab.platform.javaScript.JQueryAlphaTab
};
alphaTab.util = {};
alphaTab.util.Logger = $hx_exports["alphaTab"]["util"]["Logger"] = function() {
};
alphaTab.util.Logger.__name__ = true;
alphaTab.util.Logger.Debug = function(category,msg,details) {
	alphaTab.util.Logger.Log(1,category,msg,details);
};
alphaTab.util.Logger.Warning = function(category,msg,details) {
	alphaTab.util.Logger.Log(3,category,msg,details);
};
alphaTab.util.Logger.Info = function(category,msg,details) {
	alphaTab.util.Logger.Log(2,category,msg,details);
};
alphaTab.util.Logger.Error = function(category,msg,details) {
	alphaTab.util.Logger.Log(4,category,msg,details);
};
alphaTab.util.Logger.Log = function(logLevel,category,msg,details) {
	if(logLevel < alphaTab.util.Logger.LogLevel) {
		return;
	}
	alphaTab.platform.Platform.Log(logLevel,category,msg,details);
};
alphaTab.util.Logger.prototype = {
	__class__: alphaTab.util.Logger
};
var haxe = {};
haxe.CallStack = function() { };
haxe.CallStack.__name__ = true;
haxe.CallStack.getStack = function(e) {
	if(e == null) {
		return [];
	}
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			if(haxe.CallStack.wrapCallSite != null) {
				site = haxe.CallStack.wrapCallSite(site);
			}
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe.StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe.StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe.CallStack.makeStack(e.stack);
	Error.prepareStackTrace = oldValue;
	return a;
};
haxe.CallStack.callStack = function() {
	try {
		throw new Error();
	} catch( e ) {
		if (e instanceof js._Boot.HaxeError) e = e.val;
		var a = haxe.CallStack.getStack(e);
		a.shift();
		return a;
	}
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		b.b += m == null ? "null" : "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += file == null ? "null" : "" + file;
		b.b += " line ";
		b.b += line == null ? "null" : "" + line;
		if(s1 != null) {
			b.b += ")";
		}
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		b.b += cname == null ? "null" : "" + cname;
		b.b += ".";
		b.b += meth == null ? "null" : "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		b.b += n == null ? "null" : "" + n;
		break;
	}
};
haxe.CallStack.makeStack = function(s) {
	if(s == null) {
		return [];
	} else if(typeof(s) == "string") {
		var stack = s.split("\n");
		if(stack[0] == "Error") {
			stack.shift();
		}
		var m = [];
		var rie10 = new EReg("^   at ([A-Za-z0-9_. ]+) \\(([^)]+):([0-9]+):([0-9]+)\\)$","");
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			if(rie10.match(line)) {
				var path = rie10.matched(1).split(".");
				var meth = path.pop();
				var file = rie10.matched(2);
				var line1 = Std.parseInt(rie10.matched(3));
				m.push(haxe.StackItem.FilePos(meth == "Anonymous function" ? haxe.StackItem.LocalFunction() : meth == "Global code" ? null : haxe.StackItem.Method(path.join("."),meth),file,line1));
			} else {
				m.push(haxe.StackItem.Module(StringTools.trim(line)));
			}
		}
		return m;
	} else {
		return s;
	}
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js.Boot.__nativeClassName(o);
		if(name != null) {
			return js.Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js.Boot.__string_rec(o[i],s);
					} else {
						str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return true;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js.Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw new js._Boot.HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js.Boot.__nativeClassName = function(o) {
	var name = js.Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js.Boot.__isNativeObj = function(o) {
	return js.Boot.__nativeClassName(o) != null;
};
js.Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
haxe.StackItem = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
alphaTab.platform.javaScript.JsWorker = $hx_exports["alphaTab"]["platform"]["javaScript"]["JsWorker"] = function(main) {
	this._renderer = null;
	this._main = null;
	this._main = main;
	this._main.addEventListener("message",$bind(this,this.HandleMessage),false);
};
alphaTab.platform.javaScript.JsWorker.__name__ = true;
alphaTab.platform.javaScript.JsWorker.Init = function() {
	new alphaTab.platform.javaScript.JsWorker($global);
};
alphaTab.platform.javaScript.JsWorker.prototype = {
	HandleMessage: function(e) {
		var _gthis = this;
		var data = (js.Boot.__cast(e , MessageEvent)).data;
		var cmd = data ? data.cmd : "";
		switch(cmd) {
		case "alphaTab.initialize":
			var settings = alphaTab.Settings.FromJson(data.settings,null);
			this._renderer = new alphaTab.rendering.ScoreRenderer(settings);
			this._renderer.PartialRenderFinished = system._EventAction1.EventAction1_Impl_.add(this._renderer.PartialRenderFinished,function(result) {
				_gthis._main.postMessage({ cmd : "alphaTab.partialRenderFinished", result : result});
			});
			this._renderer.RenderFinished = system._EventAction1.EventAction1_Impl_.add(this._renderer.RenderFinished,function(result1) {
				_gthis._main.postMessage({ cmd : "alphaTab.renderFinished", result : result1});
			});
			this._renderer.PostRenderFinished = system._EventAction.EventAction_Impl_.add(this._renderer.PostRenderFinished,function() {
				_gthis._main.postMessage({ cmd : "alphaTab.postRenderFinished", boundsLookup : _gthis._renderer.get_BoundsLookup().ToJson()});
			});
			this._renderer.PreRender = system._EventAction1.EventAction1_Impl_.add(this._renderer.PreRender,function(result2) {
				_gthis._main.postMessage({ cmd : "alphaTab.preRender", result : result2});
			});
			this._renderer.Error = system._EventAction2.EventAction2_Impl_.add(this._renderer.Error,$bind(this,this.Error));
			break;
		case "alphaTab.invalidate":
			this._renderer.Invalidate();
			break;
		case "alphaTab.render":
			var converter = new alphaTab.model.JsonConverter();
			var score = converter.JsObjectToScore(data.score);
			this.RenderMultiple(score,data.trackIndexes);
			break;
		case "alphaTab.resize":
			this._renderer.Resize(data.width);
			break;
		case "alphaTab.updateSettings":
			this.UpdateSettings(data.settings);
			break;
		default:
		}
	}
	,UpdateSettings: function(settings) {
		this._renderer.UpdateSettings(alphaTab.Settings.FromJson(settings,null));
	}
	,RenderMultiple: function(score,trackIndexes) {
		try {
			this._renderer.Render(score,trackIndexes);
		} catch( e ) {
			if (e instanceof js._Boot.HaxeError) e = e.val;
			if( js.Boot.__instanceof(e,system.Exception) ) {
				this.Error("render",e);
			} else throw(e);
		}
	}
	,Error: function(type,e) {
		alphaTab.util.Logger.Error(type,"An unexpected error occurred in worker",e);
		var error = JSON.parse(JSON.stringify(e));
		var e2 = e;
		if(e2.message) {
			error.message = e2.message;
		}
		if(e2.stack) {
			error.stack = e2.stack;
		}
		if(e2.constructor && e2.constructor.name) {
			error.type = e2.constructor.name;
		}
		this._main.postMessage({ cmd : "alphaTab.error", error : { type : type, detail : error}});
	}
	,__class__: alphaTab.platform.javaScript.JsWorker
};
alphaTab.rendering = {};
alphaTab.rendering.layout = {};
alphaTab.rendering.layout.ScoreLayout = $hx_exports["alphaTab"]["rendering"]["layout"]["ScoreLayout"] = function(renderer) {
	this._barRendererLookup = null;
	this.Renderer = null;
	this.Width = 0.0;
	this.Height = 0.0;
	this.ScoreInfoGlyphs = null;
	this.TuningGlyph = null;
	this.Renderer = renderer;
	var this1 = {}
	this._barRendererLookup = this1;
};
alphaTab.rendering.layout.ScoreLayout.__name__ = true;
alphaTab.rendering.layout.ScoreLayout.prototype = {
	get_Name: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,get_SupportsResize: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,Resize: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,LayoutAndRender: function() {
		this.CreateScoreInfoGlyphs();
		this.DoLayoutAndRender();
	}
	,DoLayoutAndRender: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,CreateScoreInfoGlyphs: function() {
		alphaTab.util.Logger.Info("ScoreLayout","Creating score info glyphs",null);
		var flags = this.Renderer.Settings.Layout.Get("hideInfo",false) ? 0 : 511;
		var score = this.Renderer.Score;
		var res = this.Renderer.RenderingResources;
		var this1 = {}
		this.ScoreInfoGlyphs = this1;
		var tmp;
		var s = score.Title;
		if(!(s == null || s.length == 0)) {
			tmp = (flags & 1) != 0;
		} else {
			tmp = false;
		}
		if(tmp) {
			this.ScoreInfoGlyphs[1] = new alphaTab.rendering.glyphs.TextGlyph(0,0,score.Title,res.TitleFont,1);
		}
		var tmp1;
		var s1 = score.SubTitle;
		if(!(s1 == null || s1.length == 0)) {
			tmp1 = (flags & 2) != 0;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			this.ScoreInfoGlyphs[2] = new alphaTab.rendering.glyphs.TextGlyph(0,0,score.SubTitle,res.SubTitleFont,1);
		}
		var tmp2;
		var s2 = score.Artist;
		if(!(s2 == null || s2.length == 0)) {
			tmp2 = (flags & 4) != 0;
		} else {
			tmp2 = false;
		}
		if(tmp2) {
			this.ScoreInfoGlyphs[4] = new alphaTab.rendering.glyphs.TextGlyph(0,0,score.Artist,res.SubTitleFont,1);
		}
		var tmp3;
		var s3 = score.Album;
		if(!(s3 == null || s3.length == 0)) {
			tmp3 = (flags & 8) != 0;
		} else {
			tmp3 = false;
		}
		if(tmp3) {
			this.ScoreInfoGlyphs[8] = new alphaTab.rendering.glyphs.TextGlyph(0,0,score.Album,res.SubTitleFont,1);
		}
		var tmp4;
		var tmp5;
		var s4 = score.Music;
		if(!(s4 == null || s4.length == 0)) {
			tmp5 = score.Music == score.Words;
		} else {
			tmp5 = false;
		}
		if(tmp5) {
			tmp4 = (flags & 64) != 0;
		} else {
			tmp4 = false;
		}
		if(tmp4) {
			this.ScoreInfoGlyphs[64] = new alphaTab.rendering.glyphs.TextGlyph(0,0,"Music and Words by " + score.Words,res.WordsFont,1);
		} else {
			var tmp6;
			var s5 = score.Music;
			if(!(s5 == null || s5.length == 0)) {
				tmp6 = (flags & 32) != 0;
			} else {
				tmp6 = false;
			}
			if(tmp6) {
				this.ScoreInfoGlyphs[32] = new alphaTab.rendering.glyphs.TextGlyph(0,0,"Music by " + score.Music,res.WordsFont,2);
			}
			var tmp7;
			var s6 = score.Words;
			if(!(s6 == null || s6.length == 0)) {
				tmp7 = (flags & 16) != 0;
			} else {
				tmp7 = false;
			}
			if(tmp7) {
				this.ScoreInfoGlyphs[16] = new alphaTab.rendering.glyphs.TextGlyph(0,0,"Words by " + score.Music,res.WordsFont,0);
			}
		}
		if(this.Renderer.Tracks.length == 1 && !this.Renderer.Tracks[0].IsPercussion && !this.Renderer.Settings.Layout.Get("hideTuning",false)) {
			var tuning = alphaTab.model.Tuning.FindTuning(this.Renderer.Tracks[0].Tuning);
			if(tuning != null) {
				this.TuningGlyph = new alphaTab.rendering.glyphs.TuningGlyph(0,0,this.get_Scale(),this.Renderer.RenderingResources,tuning);
			}
		}
	}
	,get_Scale: function() {
		return this.Renderer.Settings.Scale;
	}
	,CreateEmptyStaveGroup: function() {
		var group = new alphaTab.rendering.staves.StaveGroup();
		group.Layout = this;
		var trackIndex = 0;
		while(trackIndex < this.Renderer.Tracks.length) {
			var track = this.Renderer.Tracks[trackIndex];
			var staveProfile;
			if(track.IsPercussion) {
				staveProfile = "score";
			} else if(track.get_IsStringed()) {
				staveProfile = this.Renderer.Settings.Staves.Id;
			} else {
				staveProfile = "score";
			}
			var profile = alphaTab.Environment.StaveProfiles.hasOwnProperty(staveProfile) ? alphaTab.Environment.StaveProfiles[staveProfile] : alphaTab.Environment.StaveProfiles["default"];
			var staveIndex = 0;
			while(staveIndex < track.Staves.length) {
				var renderStaveIndex = 0;
				while(renderStaveIndex < profile.length) {
					var factory = profile[renderStaveIndex];
					var staff = track.Staves[staveIndex];
					if(factory.CanCreate(track,staff)) {
						group.AddStaff(track,new alphaTab.rendering.staves.Staff(trackIndex,staff,factory));
					}
					++renderStaveIndex;
				}
				++staveIndex;
			}
			++trackIndex;
		}
		return group;
	}
	,RegisterBarRenderer: function(key,renderer) {
		if(!this._barRendererLookup.hasOwnProperty(key)) {
			var this1 = this._barRendererLookup;
			var this2 = {}
			this1[key] = this2;
		}
		this._barRendererLookup[key][renderer.Bar.Id] = renderer;
	}
	,UnregisterBarRenderer: function(key,renderer) {
		if(this._barRendererLookup.hasOwnProperty(key)) {
			var lookup = this._barRendererLookup[key];
			var key1 = renderer.Bar.Id;
			delete lookup[key1];
		}
	}
	,GetRendererForBar: function(key,bar) {
		var barRendererId = bar.Id;
		if(this._barRendererLookup.hasOwnProperty(key) && this._barRendererLookup[key].hasOwnProperty(barRendererId)) {
			return this._barRendererLookup[key][barRendererId];
		}
		return null;
	}
	,RenderAnnotation: function() {
		var _gthis = this;
		var msg = "Rendered using alphaTab (http://www.alphaTab.net)";
		var canvas = this.Renderer.Canvas;
		var resources = this.Renderer.RenderingResources;
		var height = resources.CopyrightFont.Size * 2;
		this.Height = this.Height + height;
		var x = this.Width / 2;
		canvas.BeginRender(this.Width,height);
		canvas.set_Color(resources.MainGlyphColor);
		canvas.set_Font(resources.CopyrightFont);
		canvas.set_TextAlign(1);
		canvas.FillText(msg,x,resources.CopyrightFont.Size);
		var result = canvas.EndRender();
		var tmp = this.Renderer;
		var _tmp = new alphaTab.rendering.RenderFinishedEventArgs();
		_tmp.Width = _gthis.Width;
		_tmp.Height = height;
		_tmp.RenderResult = result;
		_tmp.TotalWidth = _gthis.Width;
		_tmp.TotalHeight = _gthis.Height;
		_tmp.FirstMasterBarIndex = -1;
		_tmp.LastMasterBarIndex = -1;
		tmp.OnPartialRenderFinished(_tmp);
	}
	,__class__: alphaTab.rendering.layout.ScoreLayout
};
alphaTab.rendering.layout.PageViewLayout = $hx_exports["alphaTab"]["rendering"]["layout"]["PageViewLayout"] = function(renderer) {
	alphaTab.rendering.layout.ScoreLayout.call(this,renderer);
	this._groups = null;
	this._allMasterBarRenderers = null;
	this._barsFromPreviousGroup = null;
};
alphaTab.rendering.layout.PageViewLayout.__name__ = true;
alphaTab.rendering.layout.PageViewLayout.__super__ = alphaTab.rendering.layout.ScoreLayout;
alphaTab.rendering.layout.PageViewLayout.prototype = $extend(alphaTab.rendering.layout.ScoreLayout.prototype,{
	get_Name: function() {
		return "PageView";
	}
	,DoLayoutAndRender: function() {
		var x = alphaTab.rendering.layout.PageViewLayout.PagePadding[0];
		var y = alphaTab.rendering.layout.PageViewLayout.PagePadding[1];
		var this1 = this.Renderer.Settings.Width;
		this.Width = this1;
		var this2 = [];
		this._allMasterBarRenderers = this2;
		y = this.LayoutAndRenderScoreInfo(x,y,-1);
		y = this.LayoutAndRenderScore(x,y);
		this.Height = y + alphaTab.rendering.layout.PageViewLayout.PagePadding[3];
	}
	,get_SupportsResize: function() {
		return true;
	}
	,Resize: function() {
		var x = alphaTab.rendering.layout.PageViewLayout.PagePadding[0];
		var y = alphaTab.rendering.layout.PageViewLayout.PagePadding[1];
		var this1 = this.Renderer.Settings.Width;
		this.Width = this1;
		var oldHeight = this.Height;
		y = this.LayoutAndRenderScoreInfo(x,y,oldHeight);
		y = this.ResizeAndRenderScore(x,y,oldHeight);
		this.Height = y + alphaTab.rendering.layout.PageViewLayout.PagePadding[3];
	}
	,LayoutAndRenderScoreInfo: function(x,y,totalHeight) {
		if(totalHeight == null) {
			totalHeight = -1;
		}
		var _gthis = this;
		alphaTab.util.Logger.Info(this.get_Name(),"Layouting score info",null);
		var scale = this.get_Scale();
		var res = this.Renderer.RenderingResources;
		var centeredGlyphs = [1,2,4,8,64];
		var i = 0;
		while(i < centeredGlyphs.length) {
			if(this.ScoreInfoGlyphs.hasOwnProperty(centeredGlyphs[i])) {
				var glyph = this.ScoreInfoGlyphs[centeredGlyphs[i]];
				var this1 = 2;
				glyph.X = this.Width / this1;
				glyph.Y = y;
				glyph.TextAlign = 1;
				y = y + glyph.Font.Size;
			}
			++i;
		}
		var musicOrWords = false;
		var musicOrWordsHeight = 0;
		if(this.ScoreInfoGlyphs.hasOwnProperty(32)) {
			var glyph1 = this.ScoreInfoGlyphs[32];
			glyph1.X = this.Width - alphaTab.rendering.layout.PageViewLayout.PagePadding[2];
			glyph1.Y = y;
			glyph1.TextAlign = 2;
			musicOrWords = true;
			musicOrWordsHeight = glyph1.Font.Size;
		}
		if(this.ScoreInfoGlyphs.hasOwnProperty(16)) {
			var glyph2 = this.ScoreInfoGlyphs[16];
			glyph2.X = x;
			glyph2.Y = y;
			glyph2.TextAlign = 0;
			musicOrWords = true;
			musicOrWordsHeight = glyph2.Font.Size;
		}
		if(musicOrWords) {
			y = y + musicOrWordsHeight;
		}
		if(this.TuningGlyph != null) {
			y = y + 20 * scale;
			this.TuningGlyph.X = x;
			this.TuningGlyph.Y = y;
			y = y + this.TuningGlyph.Height;
		}
		y = y + 20 * scale;
		var canvas = this.Renderer.Canvas;
		canvas.BeginRender(this.Width,y);
		canvas.set_Color(res.ScoreInfoColor);
		canvas.set_TextAlign(1);
		var this2 = this.ScoreInfoGlyphs;
		var key = $iterator(Object.keys(this2))();
		while(key.hasNext()) {
			var key1 = key.next();
			this.ScoreInfoGlyphs[key1].Paint(0,0,canvas);
		}
		if(this.TuningGlyph != null) {
			this.TuningGlyph.Paint(0,0,canvas);
		}
		var result = canvas.EndRender();
		var tmp = this.Renderer;
		var _tmp = new alphaTab.rendering.RenderFinishedEventArgs();
		_tmp.Width = _gthis.Width;
		_tmp.Height = y;
		_tmp.RenderResult = result;
		_tmp.TotalWidth = _gthis.Width;
		_tmp.TotalHeight = totalHeight < 0 ? y : totalHeight;
		_tmp.FirstMasterBarIndex = -1;
		_tmp.LastMasterBarIndex = -1;
		tmp.OnPartialRenderFinished(_tmp);
		return y;
	}
	,ResizeAndRenderScore: function(x,y,oldHeight) {
		var canvas = this.Renderer.Canvas;
		if(this.Renderer.Settings.Layout.Get("barsPerRow",-1) != -1) {
			var i = 0;
			while(i < this._groups.length) {
				var group = this._groups[i];
				this.FitGroup(group);
				group.FinalizeGroup();
				y = y + this.PaintGroup(group,oldHeight,canvas);
				++i;
			}
		} else {
			var this1 = [];
			this._groups = this1;
			var currentIndex = 0;
			var maxWidth = this.get_MaxWidth();
			var group1 = this.CreateEmptyStaveGroup();
			group1.Index = this._groups.length;
			group1.X = x;
			group1.Y = y;
			while(currentIndex < this._allMasterBarRenderers.length) {
				var renderers = this._allMasterBarRenderers[currentIndex];
				if(group1.Width + renderers.Width <= maxWidth || group1.MasterBarsRenderers.length == 0) {
					group1.AddMasterBarRenderers(this.Renderer.Tracks,renderers);
					++currentIndex;
				} else {
					group1.IsFull = true;
					group1.IsLast = false;
					this._groups.push(group1);
					this.FitGroup(group1);
					group1.FinalizeGroup();
					y = y + this.PaintGroup(group1,oldHeight,canvas);
					group1 = this.CreateEmptyStaveGroup();
					group1.Index = this._groups.length;
					group1.X = x;
					group1.Y = y;
				}
			}
			this.FitGroup(group1);
			group1.FinalizeGroup();
			y = y + this.PaintGroup(group1,oldHeight,canvas);
		}
		return y;
	}
	,LayoutAndRenderScore: function(x,y) {
		var score = this.Renderer.Score;
		var canvas = this.Renderer.Canvas;
		var startIndex = this.Renderer.Settings.Layout.Get("start",1);
		--startIndex;
		startIndex = Math.min(score.MasterBars.length - 1,Math.max(0,startIndex));
		var currentBarIndex = startIndex;
		var endBarIndex = this.Renderer.Settings.Layout.Get("count",score.MasterBars.length);
		if(endBarIndex < 0) {
			endBarIndex = score.MasterBars.length;
		}
		endBarIndex = startIndex + endBarIndex - 1;
		endBarIndex = Math.min(score.MasterBars.length - 1,Math.max(0,endBarIndex));
		var this1 = [];
		this._groups = this1;
		while(currentBarIndex <= endBarIndex) {
			var group = this.CreateStaveGroup(currentBarIndex,endBarIndex);
			this._groups.push(group);
			group.X = x;
			group.Y = y;
			currentBarIndex = group.get_LastBarIndex() + 1;
			this.FitGroup(group);
			group.FinalizeGroup();
			alphaTab.util.Logger.Info(this.get_Name(),"Rendering partial from bar " + group.get_FirstBarIndex() + " to " + group.get_LastBarIndex(),null);
			y = y + this.PaintGroup(group,y,canvas);
		}
		return y;
	}
	,PaintGroup: function(group,totalHeight,canvas) {
		var height = group.get_Height() + 20 * this.get_Scale();
		canvas.BeginRender(this.Width,height);
		this.Renderer.Canvas.set_Color(this.Renderer.RenderingResources.MainGlyphColor);
		this.Renderer.Canvas.set_TextAlign(0);
		group.Paint(0,-group.Y,canvas);
		totalHeight = totalHeight + height;
		var result = canvas.EndRender();
		var args = new alphaTab.rendering.RenderFinishedEventArgs();
		args.TotalWidth = this.Width;
		args.TotalHeight = totalHeight;
		args.Width = this.Width;
		args.Height = height;
		args.RenderResult = result;
		args.FirstMasterBarIndex = group.get_FirstBarIndex();
		args.LastMasterBarIndex = group.get_LastBarIndex();
		this.Renderer.OnPartialRenderFinished(args);
		return height;
	}
	,FitGroup: function(group) {
		if(group.IsFull || group.Width > this.get_MaxWidth()) {
			group.ScaleToWidth(this.get_MaxWidth());
		}
		this.Width = Math.max(this.Width,group.Width);
	}
	,CreateStaveGroup: function(currentBarIndex,endIndex) {
		var group = this.CreateEmptyStaveGroup();
		group.Index = this._groups.length;
		var barsPerRow = this.Renderer.Settings.Layout.Get("barsPerRow",-1);
		var maxWidth = this.get_MaxWidth();
		var end = endIndex + 1;
		var i = currentBarIndex;
		while(i < end) {
			var renderers;
			if(this._barsFromPreviousGroup != null && this._barsFromPreviousGroup.MasterBar.Index == i) {
				renderers = group.AddMasterBarRenderers(this.Renderer.Tracks,this._barsFromPreviousGroup);
			} else {
				renderers = group.AddBars(this.Renderer.Tracks,i);
				this._allMasterBarRenderers.push(renderers);
			}
			this._barsFromPreviousGroup = null;
			var groupIsFull = false;
			if(barsPerRow == -1 && (group.Width >= maxWidth && group.MasterBarsRenderers.length != 0)) {
				groupIsFull = true;
			} else if(group.MasterBarsRenderers.length == barsPerRow + 1) {
				groupIsFull = true;
			}
			if(groupIsFull) {
				group.RevertLastBar();
				group.IsFull = true;
				group.IsLast = false;
				this._barsFromPreviousGroup = renderers;
				return group;
			}
			group.X = 0;
			++i;
		}
		group.IsLast = endIndex == group.get_LastBarIndex();
		return group;
	}
	,get_MaxWidth: function() {
		return this.Renderer.Settings.Width - alphaTab.rendering.layout.PageViewLayout.PagePadding[0] - alphaTab.rendering.layout.PageViewLayout.PagePadding[2];
	}
	,__class__: alphaTab.rendering.layout.PageViewLayout
});
alphaTab.rendering.layout.HorizontalScreenLayout = $hx_exports["alphaTab"]["rendering"]["layout"]["HorizontalScreenLayout"] = function(renderer) {
	alphaTab.rendering.layout.ScoreLayout.call(this,renderer);
	this._group = null;
};
alphaTab.rendering.layout.HorizontalScreenLayout.__name__ = true;
alphaTab.rendering.layout.HorizontalScreenLayout.__super__ = alphaTab.rendering.layout.ScoreLayout;
alphaTab.rendering.layout.HorizontalScreenLayout.prototype = $extend(alphaTab.rendering.layout.ScoreLayout.prototype,{
	get_Name: function() {
		return "HorizontalScreen";
	}
	,get_SupportsResize: function() {
		return false;
	}
	,Resize: function() {
	}
	,DoLayoutAndRender: function() {
		var _gthis = this;
		var score = this.Renderer.Score;
		var canvas = this.Renderer.Canvas;
		var startIndex = this.Renderer.Settings.Layout.Get("start",1);
		--startIndex;
		startIndex = Math.min(score.MasterBars.length - 1,Math.max(0,startIndex));
		var currentBarIndex = startIndex;
		var endBarIndex = this.Renderer.Settings.Layout.Get("count",score.MasterBars.length);
		if(endBarIndex < 0) {
			endBarIndex = score.MasterBars.length;
		}
		endBarIndex = startIndex + endBarIndex - 1;
		endBarIndex = Math.min(score.MasterBars.length - 1,Math.max(0,endBarIndex));
		this._group = this.CreateEmptyStaveGroup();
		this._group.IsLast = true;
		this._group.X = alphaTab.rendering.layout.HorizontalScreenLayout.PagePadding[0];
		this._group.Y = alphaTab.rendering.layout.HorizontalScreenLayout.PagePadding[1];
		var countPerPartial = this.Renderer.Settings.Layout.Get("countPerPartial",10);
		var this1 = [];
		var partials = this1;
		var currentPartial = new alphaTab.rendering.layout.HorizontalScreenLayoutPartialInfo();
		while(currentBarIndex <= endBarIndex) {
			var result = this._group.AddBars(this.Renderer.Tracks,currentBarIndex);
			if(currentPartial.MasterBars.length == 0 && result.IsLinkedToPrevious && partials.length > 0) {
				var previousPartial = partials[partials.length - 1];
				previousPartial.MasterBars.push(score.MasterBars[currentBarIndex]);
				previousPartial.Width = previousPartial.Width + result.Width;
			} else {
				currentPartial.MasterBars.push(score.MasterBars[currentBarIndex]);
				currentPartial.Width = currentPartial.Width + result.Width;
				if(currentPartial.MasterBars.length >= countPerPartial) {
					if(partials.length == 0) {
						currentPartial.Width = currentPartial.Width + (this._group.X + this._group.AccoladeSpacing);
					}
					partials.push(currentPartial);
					alphaTab.util.Logger.Info(this.get_Name(),"Finished partial from bar " + currentPartial.MasterBars[0].Index + " to " + currentPartial.MasterBars[currentPartial.MasterBars.length - 1].Index,null);
					currentPartial = new alphaTab.rendering.layout.HorizontalScreenLayoutPartialInfo();
				}
			}
			++currentBarIndex;
		}
		if(currentPartial.MasterBars.length > 0) {
			if(partials.length == 0) {
				currentPartial.Width = currentPartial.Width + (this._group.X + this._group.AccoladeSpacing);
			}
			partials.push(currentPartial);
			alphaTab.util.Logger.Info(this.get_Name(),"Finished partial from bar " + currentPartial.MasterBars[0].Index + " to " + currentPartial.MasterBars[currentPartial.MasterBars.length - 1].Index,null);
		}
		this._group.FinalizeGroup();
		this.Height = this._group.Y + this._group.get_Height() + alphaTab.rendering.layout.HorizontalScreenLayout.PagePadding[3];
		this.Width = this._group.X + this._group.Width + alphaTab.rendering.layout.HorizontalScreenLayout.PagePadding[2];
		currentBarIndex = 0;
		var i = 0;
		while(i < partials.length) {
			var partial = partials[i];
			canvas.BeginRender(partial.Width,this.Height);
			canvas.set_Color(this.Renderer.RenderingResources.MainGlyphColor);
			canvas.set_TextAlign(0);
			var renderX = this._group.GetBarX(partial.MasterBars[0].Index) + this._group.AccoladeSpacing;
			if(i == 0) {
				renderX = renderX - (this._group.X + this._group.AccoladeSpacing);
			}
			alphaTab.util.Logger.Info(this.get_Name(),"Rendering partial from bar " + partial.MasterBars[0].Index + " to " + partial.MasterBars[partial.MasterBars.length - 1].Index,null);
			this._group.PaintPartial(-renderX,this._group.Y,this.Renderer.Canvas,currentBarIndex,partial.MasterBars.length);
			var result1 = canvas.EndRender();
			var tmp = this.Renderer;
			var _tmp = new alphaTab.rendering.RenderFinishedEventArgs();
			_tmp.TotalWidth = _gthis.Width;
			_tmp.TotalHeight = _gthis.Height;
			_tmp.Width = partial.Width;
			_tmp.Height = _gthis.Height;
			_tmp.RenderResult = result1;
			_tmp.FirstMasterBarIndex = partial.MasterBars[0].Index;
			_tmp.LastMasterBarIndex = partial.MasterBars[partial.MasterBars.length - 1].Index;
			tmp.OnPartialRenderFinished(_tmp);
			currentBarIndex = currentBarIndex + partial.MasterBars.length;
			++i;
		}
	}
	,__class__: alphaTab.rendering.layout.HorizontalScreenLayout
});
alphaTab.rendering.IEffectBarRendererInfo = $hx_exports["alphaTab"]["rendering"]["IEffectBarRendererInfo"] = function() { };
alphaTab.rendering.IEffectBarRendererInfo.__name__ = true;
alphaTab.rendering.IEffectBarRendererInfo.prototype = {
	__class__: alphaTab.rendering.IEffectBarRendererInfo
};
alphaTab.rendering.effects = {};
alphaTab.rendering.effects.TempoEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["TempoEffectInfo"] = function() {
};
alphaTab.rendering.effects.TempoEffectInfo.__name__ = true;
alphaTab.rendering.effects.TempoEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.TempoEffectInfo.prototype = {
	get_EffectId: function() {
		return "tempo";
	}
	,get_HideOnMultiTrack: function() {
		return true;
	}
	,get_CanShareBand: function() {
		return false;
	}
	,get_SizingMode: function() {
		return 0;
	}
	,ShouldCreateGlyph: function(beat) {
		if(beat.Voice.Bar.Staff.Index == 0 && beat.Voice.Index == 0 && beat.Index == 0) {
			if(beat.Voice.Bar.get_MasterBar().TempoAutomation == null) {
				return beat.Voice.Bar.Index == 0;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	,CreateNewGlyph: function(renderer,beat) {
		var tempo;
		if(beat.Voice.Bar.get_MasterBar().TempoAutomation != null) {
			tempo = system.Convert.ToInt32_Single(beat.Voice.Bar.get_MasterBar().TempoAutomation.Value);
		} else {
			tempo = beat.Voice.Bar.Staff.Track.Score.Tempo;
		}
		return new alphaTab.rendering.glyphs.TempoGlyph(0,0,tempo);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.TempoEffectInfo
};
alphaTab.rendering.effects.TripletFeelEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["TripletFeelEffectInfo"] = function() {
};
alphaTab.rendering.effects.TripletFeelEffectInfo.__name__ = true;
alphaTab.rendering.effects.TripletFeelEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.TripletFeelEffectInfo.prototype = {
	get_EffectId: function() {
		return "triplet-feel";
	}
	,get_HideOnMultiTrack: function() {
		return true;
	}
	,get_CanShareBand: function() {
		return false;
	}
	,get_SizingMode: function() {
		return 0;
	}
	,ShouldCreateGlyph: function(beat) {
		if(beat.Index == 0) {
			if(!(beat.Voice.Bar.get_MasterBar().Index == 0 && beat.Voice.Bar.get_MasterBar().TripletFeel != 0)) {
				if(beat.Voice.Bar.get_MasterBar().Index > 0) {
					return beat.Voice.Bar.get_MasterBar().TripletFeel != beat.Voice.Bar.get_MasterBar().PreviousMasterBar.TripletFeel;
				} else {
					return false;
				}
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.TripletFeelGlyph(beat.Voice.Bar.get_MasterBar().TripletFeel);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.TripletFeelEffectInfo
};
alphaTab.rendering.effects.MarkerEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["MarkerEffectInfo"] = function() {
};
alphaTab.rendering.effects.MarkerEffectInfo.__name__ = true;
alphaTab.rendering.effects.MarkerEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.MarkerEffectInfo.prototype = {
	get_EffectId: function() {
		return "marker";
	}
	,get_HideOnMultiTrack: function() {
		return true;
	}
	,get_CanShareBand: function() {
		return true;
	}
	,get_SizingMode: function() {
		return 0;
	}
	,ShouldCreateGlyph: function(beat) {
		if(beat.Voice.Bar.Staff.Index == 0 && beat.Voice.Index == 0 && beat.Index == 0) {
			return beat.Voice.Bar.get_MasterBar().get_IsSectionStart();
		} else {
			return false;
		}
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.TextGlyph(0,0,beat.Voice.Bar.get_MasterBar().Section.Text,renderer.get_Resources().MarkerFont,0);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.MarkerEffectInfo
};
alphaTab.rendering.effects.TextEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["TextEffectInfo"] = function() {
};
alphaTab.rendering.effects.TextEffectInfo.__name__ = true;
alphaTab.rendering.effects.TextEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.TextEffectInfo.prototype = {
	get_EffectId: function() {
		return "text";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return false;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,ShouldCreateGlyph: function(beat) {
		var s = beat.Text;
		return !(s == null || StringTools.trim(s).length == 0);
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.TextGlyph(0,0,beat.Text,renderer.get_Resources().EffectFont,0);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.TextEffectInfo
};
alphaTab.rendering.effects.ChordsEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["ChordsEffectInfo"] = function() {
};
alphaTab.rendering.effects.ChordsEffectInfo.__name__ = true;
alphaTab.rendering.effects.ChordsEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.ChordsEffectInfo.prototype = {
	get_EffectId: function() {
		return "chords";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return true;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,ShouldCreateGlyph: function(beat) {
		return beat.get_HasChord();
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.TextGlyph(0,0,beat.get_Chord().Name,renderer.get_Resources().EffectFont,0);
	}
	,CanExpand: function(from,to) {
		return false;
	}
	,__class__: alphaTab.rendering.effects.ChordsEffectInfo
};
alphaTab.rendering.effects.NoteEffectInfoBase = $hx_exports["alphaTab"]["rendering"]["effects"]["NoteEffectInfoBase"] = function() {
};
alphaTab.rendering.effects.NoteEffectInfoBase.__name__ = true;
alphaTab.rendering.effects.NoteEffectInfoBase.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.NoteEffectInfoBase.prototype = {
	ShouldCreateGlyph: function(beat) {
		var this1 = [];
		this.LastCreateInfo = this1;
		var i = 0;
		var j = beat.Notes.length;
		while(i < j) {
			var n = beat.Notes[i];
			if(this.ShouldCreateGlyphForNote(n)) {
				this.LastCreateInfo.push(n);
			}
			++i;
		}
		return this.LastCreateInfo.length > 0;
	}
	,ShouldCreateGlyphForNote: function(note) {
		throw new js._Boot.HaxeError("abstract");
	}
	,get_EffectId: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return true;
	}
	,get_SizingMode: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,CreateNewGlyph: function(renderer,beat) {
		throw new js._Boot.HaxeError("abstract");
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.NoteEffectInfoBase
};
alphaTab.rendering.effects.TrillEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["TrillEffectInfo"] = function() {
	alphaTab.rendering.effects.NoteEffectInfoBase.call(this);
};
alphaTab.rendering.effects.TrillEffectInfo.__name__ = true;
alphaTab.rendering.effects.TrillEffectInfo.__super__ = alphaTab.rendering.effects.NoteEffectInfoBase;
alphaTab.rendering.effects.TrillEffectInfo.prototype = $extend(alphaTab.rendering.effects.NoteEffectInfoBase.prototype,{
	get_EffectId: function() {
		return "trill";
	}
	,ShouldCreateGlyphForNote: function(note) {
		return note.get_IsTrill();
	}
	,get_SizingMode: function() {
		return 1;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.TrillGlyph(0,0);
	}
	,__class__: alphaTab.rendering.effects.TrillEffectInfo
});
alphaTab.rendering.effects.BeatVibratoEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["BeatVibratoEffectInfo"] = function() {
};
alphaTab.rendering.effects.BeatVibratoEffectInfo.__name__ = true;
alphaTab.rendering.effects.BeatVibratoEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.BeatVibratoEffectInfo.prototype = {
	get_EffectId: function() {
		return "beat-vibrato";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return true;
	}
	,get_SizingMode: function() {
		return 3;
	}
	,ShouldCreateGlyph: function(beat) {
		return beat.Vibrato != 0;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.VibratoGlyph(0,5 * renderer.get_Scale(),1.4);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.BeatVibratoEffectInfo
};
alphaTab.rendering.effects.NoteVibratoEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["NoteVibratoEffectInfo"] = function() {
	alphaTab.rendering.effects.NoteEffectInfoBase.call(this);
};
alphaTab.rendering.effects.NoteVibratoEffectInfo.__name__ = true;
alphaTab.rendering.effects.NoteVibratoEffectInfo.__super__ = alphaTab.rendering.effects.NoteEffectInfoBase;
alphaTab.rendering.effects.NoteVibratoEffectInfo.prototype = $extend(alphaTab.rendering.effects.NoteEffectInfoBase.prototype,{
	get_EffectId: function() {
		return "note-vibrato";
	}
	,ShouldCreateGlyphForNote: function(note) {
		if(!(note.Vibrato != 0)) {
			if(note.IsTieDestination) {
				return note.TieOrigin.Vibrato != 0;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	,get_SizingMode: function() {
		return 3;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.VibratoGlyph(0,5 * renderer.get_Scale(),1.2);
	}
	,__class__: alphaTab.rendering.effects.NoteVibratoEffectInfo
});
alphaTab.rendering.effects.AlternateEndingsEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["AlternateEndingsEffectInfo"] = function() {
};
alphaTab.rendering.effects.AlternateEndingsEffectInfo.__name__ = true;
alphaTab.rendering.effects.AlternateEndingsEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.AlternateEndingsEffectInfo.prototype = {
	get_EffectId: function() {
		return "alternate-feel";
	}
	,get_HideOnMultiTrack: function() {
		return true;
	}
	,get_CanShareBand: function() {
		return false;
	}
	,get_SizingMode: function() {
		return 4;
	}
	,ShouldCreateGlyph: function(beat) {
		if(beat.Index == 0) {
			return beat.Voice.Bar.get_MasterBar().AlternateEndings != 0;
		} else {
			return false;
		}
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.AlternateEndingsGlyph(0,0,beat.Voice.Bar.get_MasterBar().AlternateEndings);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.AlternateEndingsEffectInfo
};
alphaTab.rendering.BarRendererFactory = $hx_exports["alphaTab"]["rendering"]["BarRendererFactory"] = function() {
	this.IsInAccolade = false;
	this.HideOnMultiTrack = false;
	this.HideOnPercussionTrack = false;
	this.IsInAccolade = true;
	this.HideOnPercussionTrack = false;
	this.HideOnMultiTrack = false;
};
alphaTab.rendering.BarRendererFactory.__name__ = true;
alphaTab.rendering.BarRendererFactory.prototype = {
	get_StaffId: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,CanCreate: function(track,staff) {
		if(!(!this.HideOnPercussionTrack)) {
			return !track.IsPercussion;
		} else {
			return true;
		}
	}
	,Create: function(renderer,bar,staveSettings) {
		throw new js._Boot.HaxeError("abstract");
	}
	,__class__: alphaTab.rendering.BarRendererFactory
};
alphaTab.rendering.EffectBarRendererFactory = $hx_exports["alphaTab"]["rendering"]["EffectBarRendererFactory"] = function(staffId,infos) {
	alphaTab.rendering.BarRendererFactory.call(this);
	this._infos = null;
	this._staffId = null;
	this._infos = infos;
	this._staffId = staffId;
	this.IsInAccolade = false;
};
alphaTab.rendering.EffectBarRendererFactory.__name__ = true;
alphaTab.rendering.EffectBarRendererFactory.__super__ = alphaTab.rendering.BarRendererFactory;
alphaTab.rendering.EffectBarRendererFactory.prototype = $extend(alphaTab.rendering.BarRendererFactory.prototype,{
	get_StaffId: function() {
		return this._staffId;
	}
	,Create: function(renderer,bar,staveSettings) {
		return new alphaTab.rendering.EffectBarRenderer(renderer,bar,this._infos);
	}
	,__class__: alphaTab.rendering.EffectBarRendererFactory
});
alphaTab.rendering.ScoreBarRendererFactory = $hx_exports["alphaTab"]["rendering"]["ScoreBarRendererFactory"] = function() {
	alphaTab.rendering.BarRendererFactory.call(this);
};
alphaTab.rendering.ScoreBarRendererFactory.__name__ = true;
alphaTab.rendering.ScoreBarRendererFactory.__super__ = alphaTab.rendering.BarRendererFactory;
alphaTab.rendering.ScoreBarRendererFactory.prototype = $extend(alphaTab.rendering.BarRendererFactory.prototype,{
	get_StaffId: function() {
		return "score";
	}
	,Create: function(renderer,bar,staveSettings) {
		return new alphaTab.rendering.ScoreBarRenderer(renderer,bar);
	}
	,__class__: alphaTab.rendering.ScoreBarRendererFactory
});
alphaTab.rendering.effects.CrescendoEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["CrescendoEffectInfo"] = function() {
};
alphaTab.rendering.effects.CrescendoEffectInfo.__name__ = true;
alphaTab.rendering.effects.CrescendoEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.CrescendoEffectInfo.prototype = {
	get_EffectId: function() {
		return "crescendo";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return true;
	}
	,get_SizingMode: function() {
		return 3;
	}
	,ShouldCreateGlyph: function(beat) {
		return beat.Crescendo != 0;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.CrescendoGlyph(0,0,beat.Crescendo);
	}
	,CanExpand: function(from,to) {
		return from.Crescendo == to.Crescendo;
	}
	,__class__: alphaTab.rendering.effects.CrescendoEffectInfo
};
alphaTab.rendering.effects.DynamicsEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["DynamicsEffectInfo"] = function() {
};
alphaTab.rendering.effects.DynamicsEffectInfo.__name__ = true;
alphaTab.rendering.effects.DynamicsEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.DynamicsEffectInfo.prototype = {
	get_EffectId: function() {
		return "dynamics";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return false;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,ShouldCreateGlyph: function(beat) {
		if(beat.Voice.Index == 0) {
			if(!(beat.Index == 0 && beat.Voice.Bar.Index == 0)) {
				if(beat.PreviousBeat != null) {
					return beat.Dynamic != beat.PreviousBeat.Dynamic;
				} else {
					return false;
				}
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.DynamicsGlyph(0,0,beat.Dynamic);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.DynamicsEffectInfo
};
alphaTab.rendering.effects.LyricsEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["LyricsEffectInfo"] = function() {
};
alphaTab.rendering.effects.LyricsEffectInfo.__name__ = true;
alphaTab.rendering.effects.LyricsEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.LyricsEffectInfo.prototype = {
	get_EffectId: function() {
		return "lyrics";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return false;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,ShouldCreateGlyph: function(beat) {
		return beat.Lyrics != null;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.LyricsGlyph(0,0,beat.Lyrics,renderer.get_Resources().EffectFont,1);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.LyricsEffectInfo
};
alphaTab.rendering.effects.TapEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["TapEffectInfo"] = function() {
};
alphaTab.rendering.effects.TapEffectInfo.__name__ = true;
alphaTab.rendering.effects.TapEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.TapEffectInfo.prototype = {
	get_EffectId: function() {
		return "tap";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return true;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,ShouldCreateGlyph: function(beat) {
		if(!(beat.Slap || beat.Pop)) {
			return beat.Tap;
		} else {
			return true;
		}
	}
	,CreateNewGlyph: function(renderer,beat) {
		var res = renderer.get_Resources();
		if(beat.Slap) {
			return new alphaTab.rendering.glyphs.TextGlyph(0,0,"S",res.EffectFont,0);
		}
		if(beat.Pop) {
			return new alphaTab.rendering.glyphs.TextGlyph(0,0,"P",res.EffectFont,0);
		}
		return new alphaTab.rendering.glyphs.TextGlyph(0,0,"T",res.EffectFont,0);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.TapEffectInfo
};
alphaTab.rendering.effects.FadeInEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["FadeInEffectInfo"] = function() {
};
alphaTab.rendering.effects.FadeInEffectInfo.__name__ = true;
alphaTab.rendering.effects.FadeInEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.FadeInEffectInfo.prototype = {
	get_EffectId: function() {
		return "fade-in";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return true;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,ShouldCreateGlyph: function(beat) {
		return beat.FadeIn;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.FadeInGlyph(0,0);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.FadeInEffectInfo
};
alphaTab.rendering.effects.HarmonicsEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["HarmonicsEffectInfo"] = function() {
	alphaTab.rendering.effects.NoteEffectInfoBase.call(this);
};
alphaTab.rendering.effects.HarmonicsEffectInfo.__name__ = true;
alphaTab.rendering.effects.HarmonicsEffectInfo.HarmonicToString = function(type) {
	switch(type) {
	case 1:
		return "N.H.";
	case 2:
		return "A.H.";
	case 3:
		return "P.H.";
	case 4:
		return "T.H.";
	case 5:
		return "S.H.";
	case 6:
		return "Fdbk.";
	default:
	}
	return "";
};
alphaTab.rendering.effects.HarmonicsEffectInfo.__super__ = alphaTab.rendering.effects.NoteEffectInfoBase;
alphaTab.rendering.effects.HarmonicsEffectInfo.prototype = $extend(alphaTab.rendering.effects.NoteEffectInfoBase.prototype,{
	get_EffectId: function() {
		return "harmonics";
	}
	,ShouldCreateGlyphForNote: function(note) {
		if(!note.get_IsHarmonic()) {
			return false;
		}
		if(note.Beat != this._beat || note.HarmonicType > this._beatType) {
			this._beat = note.Beat;
			this._beatType = note.HarmonicType;
		}
		return true;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.TextGlyph(0,0,alphaTab.rendering.effects.HarmonicsEffectInfo.HarmonicToString(this._beatType),renderer.get_Resources().EffectFont,0);
	}
	,__class__: alphaTab.rendering.effects.HarmonicsEffectInfo
});
alphaTab.rendering.effects.LetRingEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["LetRingEffectInfo"] = function() {
	alphaTab.rendering.effects.NoteEffectInfoBase.call(this);
};
alphaTab.rendering.effects.LetRingEffectInfo.__name__ = true;
alphaTab.rendering.effects.LetRingEffectInfo.__super__ = alphaTab.rendering.effects.NoteEffectInfoBase;
alphaTab.rendering.effects.LetRingEffectInfo.prototype = $extend(alphaTab.rendering.effects.NoteEffectInfoBase.prototype,{
	get_EffectId: function() {
		return "let-ring";
	}
	,get_CanShareBand: function() {
		return false;
	}
	,ShouldCreateGlyphForNote: function(note) {
		return note.IsLetRing;
	}
	,get_SizingMode: function() {
		return 3;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.LineRangedGlyph("LetRing");
	}
	,__class__: alphaTab.rendering.effects.LetRingEffectInfo
});
alphaTab.rendering.effects.CapoEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["CapoEffectInfo"] = function() {
};
alphaTab.rendering.effects.CapoEffectInfo.__name__ = true;
alphaTab.rendering.effects.CapoEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.CapoEffectInfo.prototype = {
	get_EffectId: function() {
		return "capo";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return false;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,ShouldCreateGlyph: function(beat) {
		if(beat.Index == 0 && beat.Voice.Bar.Index == 0) {
			return beat.Voice.Bar.Staff.Track.Capo != 0;
		} else {
			return false;
		}
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.TextGlyph(0,0,"Capo. fret " + beat.Voice.Bar.Staff.Track.Capo,renderer.get_Resources().EffectFont,0);
	}
	,CanExpand: function(from,to) {
		return false;
	}
	,__class__: alphaTab.rendering.effects.CapoEffectInfo
};
alphaTab.rendering.effects.PalmMuteEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["PalmMuteEffectInfo"] = function() {
	alphaTab.rendering.effects.NoteEffectInfoBase.call(this);
};
alphaTab.rendering.effects.PalmMuteEffectInfo.__name__ = true;
alphaTab.rendering.effects.PalmMuteEffectInfo.__super__ = alphaTab.rendering.effects.NoteEffectInfoBase;
alphaTab.rendering.effects.PalmMuteEffectInfo.prototype = $extend(alphaTab.rendering.effects.NoteEffectInfoBase.prototype,{
	get_EffectId: function() {
		return "palm-mute";
	}
	,ShouldCreateGlyphForNote: function(note) {
		return note.IsPalmMute;
	}
	,get_SizingMode: function() {
		return 3;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.LineRangedGlyph("P.M.");
	}
	,__class__: alphaTab.rendering.effects.PalmMuteEffectInfo
});
alphaTab.rendering.effects.PickStrokeEffectInfo = $hx_exports["alphaTab"]["rendering"]["effects"]["PickStrokeEffectInfo"] = function() {
};
alphaTab.rendering.effects.PickStrokeEffectInfo.__name__ = true;
alphaTab.rendering.effects.PickStrokeEffectInfo.__interfaces__ = [alphaTab.rendering.IEffectBarRendererInfo];
alphaTab.rendering.effects.PickStrokeEffectInfo.prototype = {
	get_EffectId: function() {
		return "pick-stroke";
	}
	,get_HideOnMultiTrack: function() {
		return false;
	}
	,get_CanShareBand: function() {
		return true;
	}
	,get_SizingMode: function() {
		return 1;
	}
	,ShouldCreateGlyph: function(beat) {
		return beat.PickStroke != 0;
	}
	,CreateNewGlyph: function(renderer,beat) {
		return new alphaTab.rendering.glyphs.PickStrokeGlyph(0,0,beat.PickStroke);
	}
	,CanExpand: function(from,to) {
		return true;
	}
	,__class__: alphaTab.rendering.effects.PickStrokeEffectInfo
};
alphaTab.rendering.TabBarRendererFactory = $hx_exports["alphaTab"]["rendering"]["TabBarRendererFactory"] = function(showTimeSignature,showRests,showTiedNotes) {
	alphaTab.rendering.BarRendererFactory.call(this);
	this._showTimeSignature = false;
	this._showRests = false;
	this._showTiedNotes = false;
	this._showTimeSignature = showTimeSignature;
	this._showRests = showRests;
	this._showTiedNotes = showTiedNotes;
	this.HideOnPercussionTrack = true;
};
alphaTab.rendering.TabBarRendererFactory.__name__ = true;
alphaTab.rendering.TabBarRendererFactory.__super__ = alphaTab.rendering.BarRendererFactory;
alphaTab.rendering.TabBarRendererFactory.prototype = $extend(alphaTab.rendering.BarRendererFactory.prototype,{
	get_StaffId: function() {
		return "tab";
	}
	,CanCreate: function(track,staff) {
		if(track.Tuning.length > 0) {
			return alphaTab.rendering.BarRendererFactory.prototype.CanCreate.call(this,track,staff);
		} else {
			return false;
		}
	}
	,Create: function(renderer,bar,staveSettings) {
		var tabBarRenderer = new alphaTab.rendering.TabBarRenderer(renderer,bar);
		tabBarRenderer.ShowRests = this._showRests;
		tabBarRenderer.ShowTimeSignature = this._showTimeSignature;
		tabBarRenderer.ShowTiedNotes = this._showTiedNotes;
		tabBarRenderer.RenderRhythm = staveSettings.Get("rhythm",tabBarRenderer.RenderRhythm);
		tabBarRenderer.RhythmHeight = staveSettings.Get("rhythmHeight",tabBarRenderer.RhythmHeight);
		tabBarRenderer.RhythmBeams = staveSettings.Get("rhythmBeams",tabBarRenderer.RhythmBeams);
		return tabBarRenderer;
	}
	,__class__: alphaTab.rendering.TabBarRendererFactory
});
alphaTab.Environment = $hx_exports["alphaTab"]["Environment"] = function() {
};
alphaTab.Environment.__name__ = true;
alphaTab.Environment.PlatformInit = function() {
	alphaTab.Environment.RenderEngines["svg"] = function() {
		return new alphaTab.platform.svg.CssFontSvgCanvas();
	};
	alphaTab.Environment.RenderEngines["default"] = function() {
		return new alphaTab.platform.svg.CssFontSvgCanvas();
	};
	alphaTab.Environment.RenderEngines["html5"] = function() {
		return new alphaTab.platform.javaScript.Html5Canvas();
	};
	alphaTab.Environment.CheckFontLoad();
	alphaTab.Environment.RegisterJQueryPlugin();
	Math.log2 = Math.log2 || function(x) { return Math.log(x) * Math.LOG2E; };
	if($global.document) {
		var document = window.document;
		var this1 = "";
		var vbAjaxLoader = this1;
		vbAjaxLoader = vbAjaxLoader + ("<script type=\"text/vbscript\">" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("Function VbAjaxLoader(method, fileName)" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    Dim xhr" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    Set xhr = CreateObject(\"Microsoft.XMLHTTP\")" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    xhr.Open method, fileName, False" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    xhr.setRequestHeader \"Accept-Charset\", \"x-user-defined\"" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    xhr.send" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    Dim byteArray()" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    if xhr.Status = 200 Then" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("        Dim byteString" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("        Dim i" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("        byteString=xhr.responseBody" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("        ReDim byteArray(LenB(byteString))" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("        For i = 1 To LenB(byteString)" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("            byteArray(i-1) = AscB(MidB(byteString, i, 1))" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("        Next" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    End If" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("    VbAjaxLoader=byteArray" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("End Function" + "\r\n");
		vbAjaxLoader = vbAjaxLoader + ("</script>" + "\r\n");
		var s = vbAjaxLoader;
		document.write(s);
		var scriptElement = document.currentScript;
		if(!(!(!scriptElement))) {
			try {
				var error = new Error();
				var stack = error.stack;
				if(!(!(!stack))) {
					throw error;
				}
				alphaTab.Environment.ScriptFile = alphaTab.Environment.ScriptFileFromStack(stack);
			} catch( e ) {
				if (e instanceof js._Boot.HaxeError) e = e.val;
				if( js.Boot.__instanceof(e,Error) ) {
					var stack1 = e.stack;
					if(!(!(!stack1))) {
						scriptElement = document.querySelector("script[data-alphatab]\")");
					} else {
						alphaTab.Environment.ScriptFile = alphaTab.Environment.ScriptFileFromStack(stack1);
					}
				} else throw(e);
			}
		}
		var s1 = alphaTab.Environment.ScriptFile;
		if(s1 == null || s1.length == 0) {
			if(!(!(!scriptElement))) {
				alphaTab.util.Logger.Warning("Environment","Could not automatically find alphaTab script file for worker, please add the data-alphatab attribute to the script tag that includes alphaTab or provide it when initializing alphaTab",null);
			} else {
				alphaTab.Environment.ScriptFile = scriptElement.src;
			}
		}
	} else {
		alphaTab.platform.javaScript.JsWorker.Init();
	}
};
alphaTab.Environment.RegisterJQueryPlugin = function() {
	var json = $global;
	if((json && "jQuery" in json)) {
		var jquery = window["jQuery"];
		var api = new alphaTab.platform.javaScript.JQueryAlphaTab();
		jquery.fn.alphaTab = function(method) {
			var _this = this;
			if(_this.length == 1) {
				var _this1 = _this[0];
				var tmp = Array.prototype.slice.call(arguments, 1);
				return api.Exec(_this1,method,tmp);
			} else {
				return this.each(function() {
					var tmp1 = Array.prototype.slice.call(arguments, 1);
					api.Exec(this,method,tmp1);
				});
			}
		};
		jquery.alphaTab = { restore : alphaTab.platform.javaScript.JQueryAlphaTab.Restore};
		jquery.fn.alphaTab.fn = api;
	}
};
alphaTab.Environment.ScriptFileFromStack = function(stack) {
	var matches = stack.match("(data:text\\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\\/\\/[\\/]?.+?\\/[^:\\)]*?)(?::\\d+)(?::\\d+)?");
	if(!(!(!matches))) {
		matches = stack.match("^(?:|[^:@]*@|.+\\)@(?=data:text\\/javascript|blob|http[s]?|file)|.+?\\s+(?: at |@)(?:[^:\\(]+ )*[\\(]?)(data:text\\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\\/\\/[\\/]?.+?\\/[^:\\)]*?)(?::\\d+)(?::\\d+)?");
		if(!(!(!matches))) {
			matches = stack.match("\\)@(data:text\\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\\/\\/[\\/]?.+?\\/[^:\\)]*?)(?::\\d+)(?::\\d+)?");
			if(!(!(!matches))) {
				return null;
			}
		}
	}
	return matches[1];
};
alphaTab.Environment.CheckFontLoad = function() {
	var isWorker = typeof(WorkerGlobalScope) !== 'undefined' && self instanceof WorkerGlobalScope;
	if(isWorker) {
		alphaTab.Environment.IsFontLoaded = false;
		return;
	}
	var cssFontLoadingModuleSupported = !(!window.document.fonts) && !(!window.document.fonts["load"]);
	if(cssFontLoadingModuleSupported) {
		window.document.fonts.load("1em alphaTab").then(function(_) {
			alphaTab.Environment.IsFontLoaded = true;
			return true;
		});
	} else {
		var checkFont = null;
		checkFont = function() {
			var document = window.document;
			var testItem = document.getElementById("alphaTabFontChecker");
			if(testItem == null) {
				testItem = document.createElement("div");
				testItem.setAttribute("id","alphaTabFontChecker");
				testItem.style.opacity = "0";
				testItem.style.position = "absolute";
				testItem.style.left = "0";
				testItem.style.top = "0";
				testItem.style.fontSize = "100px";
				testItem.classList.add("at");
				testItem.innerHTML = "&#" + 57424 + ";";
				document.body.appendChild(testItem);
			}
			var width = testItem.offsetWidth;
			if(width > 30 && width < 100) {
				alphaTab.Environment.IsFontLoaded = true;
				document.body.removeChild(testItem);
			} else {
				window.setTimeout(function() {
					checkFont();
				},1000);
			}
		};
		window.addEventListener("DOMContentLoaded",function() {
			checkFont();
		});
	}
};
alphaTab.Environment.Init = function() {
	var this1 = {}
	alphaTab.Environment.RenderEngines = this1;
	var this2 = {}
	alphaTab.Environment.LayoutEngines = this2;
	var this3 = {}
	alphaTab.Environment.StaveProfiles = this3;
	alphaTab.Environment.PlatformInit();
	alphaTab.Environment.LayoutEngines["default"] = function(r) {
		return new alphaTab.rendering.layout.PageViewLayout(r);
	};
	alphaTab.Environment.LayoutEngines["page"] = function(r1) {
		return new alphaTab.rendering.layout.PageViewLayout(r1);
	};
	alphaTab.Environment.LayoutEngines["horizontal"] = function(r2) {
		return new alphaTab.rendering.layout.HorizontalScreenLayout(r2);
	};
	alphaTab.Environment.StaveProfiles["default"] = alphaTab.Environment.StaveProfiles["score-tab"] = [new alphaTab.rendering.EffectBarRendererFactory("score-effects",[new alphaTab.rendering.effects.TempoEffectInfo(),new alphaTab.rendering.effects.TripletFeelEffectInfo(),new alphaTab.rendering.effects.MarkerEffectInfo(),new alphaTab.rendering.effects.TextEffectInfo(),new alphaTab.rendering.effects.ChordsEffectInfo(),new alphaTab.rendering.effects.TrillEffectInfo(),new alphaTab.rendering.effects.BeatVibratoEffectInfo(),new alphaTab.rendering.effects.NoteVibratoEffectInfo(),new alphaTab.rendering.effects.AlternateEndingsEffectInfo()]),new alphaTab.rendering.ScoreBarRendererFactory(),new alphaTab.rendering.EffectBarRendererFactory("tab-effects",[new alphaTab.rendering.effects.CrescendoEffectInfo(),new alphaTab.rendering.effects.DynamicsEffectInfo(),new alphaTab.rendering.effects.LyricsEffectInfo(),new alphaTab.rendering.effects.TrillEffectInfo(),new alphaTab.rendering.effects.BeatVibratoEffectInfo(),new alphaTab.rendering.effects.NoteVibratoEffectInfo(),new alphaTab.rendering.effects.TapEffectInfo(),new alphaTab.rendering.effects.FadeInEffectInfo(),new alphaTab.rendering.effects.HarmonicsEffectInfo(),new alphaTab.rendering.effects.LetRingEffectInfo(),new alphaTab.rendering.effects.CapoEffectInfo(),new alphaTab.rendering.effects.PalmMuteEffectInfo(),new alphaTab.rendering.effects.PickStrokeEffectInfo()]),new alphaTab.rendering.TabBarRendererFactory(false,false,false)];
	alphaTab.Environment.StaveProfiles["score"] = [new alphaTab.rendering.EffectBarRendererFactory("score-effects",[new alphaTab.rendering.effects.TempoEffectInfo(),new alphaTab.rendering.effects.TripletFeelEffectInfo(),new alphaTab.rendering.effects.MarkerEffectInfo(),new alphaTab.rendering.effects.TextEffectInfo(),new alphaTab.rendering.effects.ChordsEffectInfo(),new alphaTab.rendering.effects.TrillEffectInfo(),new alphaTab.rendering.effects.BeatVibratoEffectInfo(),new alphaTab.rendering.effects.NoteVibratoEffectInfo(),new alphaTab.rendering.effects.FadeInEffectInfo(),new alphaTab.rendering.effects.LetRingEffectInfo(),new alphaTab.rendering.effects.PalmMuteEffectInfo(),new alphaTab.rendering.effects.PickStrokeEffectInfo(),new alphaTab.rendering.effects.AlternateEndingsEffectInfo()]),new alphaTab.rendering.ScoreBarRendererFactory(),new alphaTab.rendering.EffectBarRendererFactory("score-bottom-effects",[new alphaTab.rendering.effects.CrescendoEffectInfo(),new alphaTab.rendering.effects.DynamicsEffectInfo(),new alphaTab.rendering.effects.LyricsEffectInfo()])];
	alphaTab.Environment.StaveProfiles["tab"] = [new alphaTab.rendering.EffectBarRendererFactory("tab-effects",[new alphaTab.rendering.effects.TempoEffectInfo(),new alphaTab.rendering.effects.TripletFeelEffectInfo(),new alphaTab.rendering.effects.MarkerEffectInfo(),new alphaTab.rendering.effects.TextEffectInfo(),new alphaTab.rendering.effects.ChordsEffectInfo(),new alphaTab.rendering.effects.TripletFeelEffectInfo(),new alphaTab.rendering.effects.TrillEffectInfo(),new alphaTab.rendering.effects.BeatVibratoEffectInfo(),new alphaTab.rendering.effects.NoteVibratoEffectInfo(),new alphaTab.rendering.effects.TapEffectInfo(),new alphaTab.rendering.effects.FadeInEffectInfo(),new alphaTab.rendering.effects.HarmonicsEffectInfo(),new alphaTab.rendering.effects.LetRingEffectInfo(),new alphaTab.rendering.effects.CapoEffectInfo(),new alphaTab.rendering.effects.PalmMuteEffectInfo(),new alphaTab.rendering.effects.PickStrokeEffectInfo(),new alphaTab.rendering.effects.AlternateEndingsEffectInfo()]),new alphaTab.rendering.TabBarRendererFactory(true,true,true),new alphaTab.rendering.EffectBarRendererFactory("tab-bottom-effects",[new alphaTab.rendering.effects.LyricsEffectInfo()])];
};
alphaTab.Environment.prototype = {
	__class__: alphaTab.Environment
};
alphaTab.LayoutSettings = $hx_exports["alphaTab"]["LayoutSettings"] = function() {
	this.Mode = null;
	this.AdditionalSettings = null;
	var this1 = {}
	this.AdditionalSettings = this1;
};
alphaTab.LayoutSettings.__name__ = true;
alphaTab.LayoutSettings.get_Defaults = function() {
	var settings = new alphaTab.LayoutSettings();
	settings.Mode = "page";
	return settings;
};
alphaTab.LayoutSettings.prototype = {
	Get: function(key,def) {
		var this1 = this.AdditionalSettings;
		var key1 = key.toLowerCase();
		if(this1.hasOwnProperty(key1)) {
			return this.AdditionalSettings[key.toLowerCase()];
		}
		return def;
	}
	,__class__: alphaTab.LayoutSettings
};
alphaTab.Main = $hx_exports["alphaTab"]["Main"] = function() { };
alphaTab.Main.__name__ = true;
alphaTab.Main.main = function() {
	alphaTab.Environment.Init();
};
alphaTab.Settings = $hx_exports["alphaTab"]["Settings"] = function() {
};
alphaTab.Settings.__name__ = true;
alphaTab.Settings.SetDefaults = function(settings) {
	settings.UseWebWorker = true;
};
alphaTab.Settings.FromJson = function(json,dataAttributes) {
	if(js.Boot.__instanceof(json,alphaTab.Settings)) {
		return js.Boot.__cast(json , alphaTab.Settings);
	}
	var settings = alphaTab.Settings.get_Defaults();
	settings.ScriptFile = alphaTab.Environment.ScriptFile;
	alphaTab.Settings.FillFromJson(settings,json,dataAttributes);
	return settings;
};
alphaTab.Settings.FillFromJson = function(settings,json,dataAttributes) {
	var global = $global;
	if(global.document && global.ALPHATAB_ROOT) {
		settings.ScriptFile = global.ALPHATAB_ROOT;
		settings.ScriptFile = alphaTab.Settings.EnsureFullUrl(settings.ScriptFile);
		settings.ScriptFile = alphaTab.Settings.AppendScriptName(settings.ScriptFile);
	} else {
		settings.ScriptFile = alphaTab.Environment.ScriptFile;
	}
	if(global.document && global.ALPHATAB_FONT) {
		settings.FontDirectory = global.ALPHATAB_FONT;
		settings.FontDirectory = alphaTab.Settings.EnsureFullUrl(settings.FontDirectory);
	} else {
		settings.FontDirectory = settings.ScriptFile;
		var s = settings.FontDirectory;
		if(!(s == null || s.length == 0)) {
			var this1 = settings.FontDirectory;
			var this2 = system.Convert.ToUInt16(47);
			var lastSlash = this1.lastIndexOf(String.fromCharCode(this2));
			if(lastSlash >= 0) {
				settings.FontDirectory = HxOverrides.substr(settings.FontDirectory,0,lastSlash) + "/Font/";
			}
		}
	}
	if((json && "useWorker" in json)) {
		settings.UseWebWorker = json.useWorker;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("useWorker")) {
		settings.UseWebWorker = !(!dataAttributes["useWorker"]);
	}
	if((json && "scale" in json)) {
		settings.Scale = json.scale;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("scale")) {
		settings.Scale = dataAttributes["scale"];
	}
	if((json && "width" in json)) {
		settings.Width = json.width;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("width")) {
		settings.Width = dataAttributes["width"];
	}
	if((json && "engine" in json)) {
		settings.Engine = json.engine;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("engine")) {
		settings.Engine = dataAttributes["engine"];
	}
	if((json && "stretchForce" in json)) {
		settings.StretchForce = json.stretchForce;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("stretchForce")) {
		settings.StretchForce = dataAttributes["stretchForce"];
	}
	if((json && "forcePianoFingering" in json)) {
		settings.ForcePianoFingering = json.forcePianoFingering;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("forcePianoFingering")) {
		settings.ForcePianoFingering = dataAttributes["forcePianoFingering"];
	}
	if((json && "lazy" in json)) {
		settings.DisableLazyLoading = !json.lazy;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("lazy")) {
		settings.DisableLazyLoading = !(!(!dataAttributes["lazy"]));
	}
	if((json && "transpositionPitches" in json)) {
		settings.TranspositionPitches = json.transpositionPitches;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("transpositionPitches")) {
		var pitchOffsets = dataAttributes["transpositionPitches"];
		if(pitchOffsets != null && pitchOffsets["length"]) {
			settings.TranspositionPitches = pitchOffsets;
		}
	}
	if((json && "displayTranspositionPitches" in json)) {
		settings.DisplayTranspositionPitches = json.displayTranspositionPitches;
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("displayTranspositionPitches")) {
		var pitchOffsets1 = dataAttributes["displayTranspositionPitches"];
		if(pitchOffsets1 != null && pitchOffsets1["length"]) {
			settings.DisplayTranspositionPitches = pitchOffsets1;
		}
	}
	if((json && "scriptFile" in json)) {
		settings.ScriptFile = alphaTab.Settings.EnsureFullUrl(json.scriptFile);
		settings.ScriptFile = alphaTab.Settings.AppendScriptName(settings.ScriptFile);
	}
	if((json && "fontDirectory" in json)) {
		settings.FontDirectory = alphaTab.Settings.EnsureFullUrl(json.fontDirectory);
	}
	if((json && "layout" in json)) {
		settings.Layout = alphaTab.Settings.LayoutFromJson(json.layout);
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("layout")) {
		settings.Layout = alphaTab.Settings.LayoutFromJson(dataAttributes["layout"]);
	}
	if(dataAttributes != null) {
		var key = $iterator(Object.keys(dataAttributes))();
		while(key.hasNext()) {
			var key1 = key.next();
			if(StringTools.startsWith(key1,"layout")) {
				var property = HxOverrides.substr(key1,6,null);
				settings.Layout.AdditionalSettings[property.toLowerCase()] = dataAttributes[key1];
			}
		}
	}
	if((json && "staves" in json)) {
		settings.Staves = alphaTab.Settings.StavesFromJson(json.staves);
	} else if(dataAttributes != null && dataAttributes.hasOwnProperty("staves")) {
		settings.Staves = alphaTab.Settings.StavesFromJson(dataAttributes["staves"]);
	}
	if(dataAttributes != null) {
		var key2 = $iterator(Object.keys(dataAttributes))();
		while(key2.hasNext()) {
			var key3 = key2.next();
			if(StringTools.startsWith(key3,"staves")) {
				var property1 = HxOverrides.substr(key3,6,null);
				settings.Staves.AdditionalSettings[property1.toLowerCase()] = dataAttributes[key3];
			}
		}
	}
};
alphaTab.Settings.StavesFromJson = function(json) {
	var staveSettings;
	if(typeof(json) == "string") {
		staveSettings = new alphaTab.StaveSettings(json);
	} else if(json.id) {
		staveSettings = new alphaTab.StaveSettings(json.id);
		if(json.additionalSettings) {
			var json1 = json.additionalSettings;
			var keys2 = Object.keys(json1);
			var key2 = HxOverrides.iter(keys2);
			while(key2.hasNext()) {
				var key21 = key2.next();
				staveSettings.AdditionalSettings[key21.toLowerCase()] = json.additionalSettings[key21];
			}
		}
	} else {
		return new alphaTab.StaveSettings("score-tab");
	}
	return staveSettings;
};
alphaTab.Settings.LayoutFromJson = function(json) {
	var layout = new alphaTab.LayoutSettings();
	if(typeof(json) == "string") {
		layout.Mode = json;
	} else {
		if(json.mode) {
			layout.Mode = json.mode;
		}
		if(json.additionalSettings) {
			var json1 = json.additionalSettings;
			var keys = Object.keys(json1);
			var key = HxOverrides.iter(keys);
			while(key.hasNext()) {
				var key1 = key.next();
				layout.AdditionalSettings[key1.toLowerCase()] = json.additionalSettings[key1];
			}
		}
	}
	return layout;
};
alphaTab.Settings.AppendScriptName = function(url) {
	if(!(url == null || url.length == 0) && !StringTools.endsWith(url,".js")) {
		if(!StringTools.endsWith(url,"/")) {
			url = url + "/";
		}
		url = url + "AlphaTab.js";
	}
	return url;
};
alphaTab.Settings.EnsureFullUrl = function(relativeUrl) {
	var global = $global;
	if(!StringTools.startsWith(relativeUrl,"http") && !StringTools.startsWith(relativeUrl,"https")) {
		var this1 = "";
		var root = this1;
		root += Std.string(global.location.protocol);
		root += Std.string("//");
		root += Std.string(global.location.hostName);
		if(global.location.port) {
			root += Std.string(":");
			root += Std.string(global.location.port);
		}
		root += Std.string(relativeUrl);
		if(!StringTools.endsWith(relativeUrl,"/")) {
			root += Std.string("/");
		}
		return root;
	}
	return relativeUrl;
};
alphaTab.Settings.get_Defaults = function() {
	var settings = new alphaTab.Settings();
	settings.Scale = 1.0;
	settings.StretchForce = 1;
	settings.Width = -1;
	settings.Engine = "default";
	var this1 = new Int32Array(0);
	settings.TranspositionPitches = this1;
	var this2 = new Int32Array(0);
	settings.DisplayTranspositionPitches = this2;
	settings.Layout = alphaTab.LayoutSettings.get_Defaults();
	settings.Staves = new alphaTab.StaveSettings("default");
	alphaTab.Settings.SetDefaults(settings);
	return settings;
};
alphaTab.Settings.prototype = {
	ToJson: function() {
		var json = {}
		json.useWorker = this.UseWebWorker;
		json.scale = this.Scale;
		json.width = this.Width;
		json.engine = this.Engine;
		json.stretchForce = this.StretchForce;
		json.forcePianoFingering = this.ForcePianoFingering;
		json.transpositionPitches = this.TranspositionPitches;
		json.displayTranspositionPitches = this.DisplayTranspositionPitches;
		json.scriptFile = this.ScriptFile;
		json.fontDirectory = this.FontDirectory;
		json.lazy = this.DisableLazyLoading;
		json.layout = {}
		json.layout.mode = this.Layout.Mode;
		json.layout.additionalSettings = {}
		var this1 = this.Layout.AdditionalSettings;
		var setting = $iterator(Object.keys(this1))();
		while(setting.hasNext()) {
			var setting1 = setting.next();
			json.layout.additionalSettings[setting1] = this.Layout.AdditionalSettings[setting1];
		}
		json.staves = {}
		json.staves.id = this.Staves.Id;
		json.staves.additionalSettings = {}
		var this2 = this.Staves.AdditionalSettings;
		var additionalSetting = $iterator(Object.keys(this2))();
		while(additionalSetting.hasNext()) {
			var additionalSetting1 = additionalSetting.next();
			json.staves.additionalSettings[additionalSetting1] = this.Staves.AdditionalSettings[additionalSetting1];
		}
		return json;
	}
	,__class__: alphaTab.Settings
};
alphaTab.StaveSettings = $hx_exports["alphaTab"]["StaveSettings"] = function(id) {
	this.Id = null;
	this.AdditionalSettings = null;
	this.Id = id;
	var this1 = {}
	this.AdditionalSettings = this1;
};
alphaTab.StaveSettings.__name__ = true;
alphaTab.StaveSettings.prototype = {
	Get: function(key,def) {
		var this1 = this.AdditionalSettings;
		var key1 = key.toLowerCase();
		if(this1.hasOwnProperty(key1)) {
			return this.AdditionalSettings[key.toLowerCase()];
		}
		return def;
	}
	,__class__: alphaTab.StaveSettings
};
alphaTab.audio = {};
alphaTab.audio.GeneralMidi = $hx_exports["alphaTab"]["audio"]["GeneralMidi"] = function() {
};
alphaTab.audio.GeneralMidi.__name__ = true;
alphaTab.audio.GeneralMidi.GetValue = function(name) {
	if(alphaTab.audio.GeneralMidi._values == null) {
		var this1 = {}
		alphaTab.audio.GeneralMidi._values = this1;
		alphaTab.audio.GeneralMidi._values["acousticgrandpiano"] = 0;
		alphaTab.audio.GeneralMidi._values["brightacousticpiano"] = 1;
		alphaTab.audio.GeneralMidi._values["electricgrandpiano"] = 2;
		alphaTab.audio.GeneralMidi._values["honkytonkpiano"] = 3;
		alphaTab.audio.GeneralMidi._values["electricpiano1"] = 4;
		alphaTab.audio.GeneralMidi._values["electricpiano2"] = 5;
		alphaTab.audio.GeneralMidi._values["harpsichord"] = 6;
		alphaTab.audio.GeneralMidi._values["clavinet"] = 7;
		alphaTab.audio.GeneralMidi._values["celesta"] = 8;
		alphaTab.audio.GeneralMidi._values["glockenspiel"] = 9;
		alphaTab.audio.GeneralMidi._values["musicbox"] = 10;
		alphaTab.audio.GeneralMidi._values["vibraphone"] = 11;
		alphaTab.audio.GeneralMidi._values["marimba"] = 12;
		alphaTab.audio.GeneralMidi._values["xylophone"] = 13;
		alphaTab.audio.GeneralMidi._values["tubularbells"] = 14;
		alphaTab.audio.GeneralMidi._values["dulcimer"] = 15;
		alphaTab.audio.GeneralMidi._values["drawbarorgan"] = 16;
		alphaTab.audio.GeneralMidi._values["percussiveorgan"] = 17;
		alphaTab.audio.GeneralMidi._values["rockorgan"] = 18;
		alphaTab.audio.GeneralMidi._values["churchorgan"] = 19;
		alphaTab.audio.GeneralMidi._values["reedorgan"] = 20;
		alphaTab.audio.GeneralMidi._values["accordion"] = 21;
		alphaTab.audio.GeneralMidi._values["harmonica"] = 22;
		alphaTab.audio.GeneralMidi._values["tangoaccordion"] = 23;
		alphaTab.audio.GeneralMidi._values["acousticguitarnylon"] = 24;
		alphaTab.audio.GeneralMidi._values["acousticguitarsteel"] = 25;
		alphaTab.audio.GeneralMidi._values["electricguitarjazz"] = 26;
		alphaTab.audio.GeneralMidi._values["electricguitarclean"] = 27;
		alphaTab.audio.GeneralMidi._values["electricguitarmuted"] = 28;
		alphaTab.audio.GeneralMidi._values["overdrivenguitar"] = 29;
		alphaTab.audio.GeneralMidi._values["distortionguitar"] = 30;
		alphaTab.audio.GeneralMidi._values["guitarharmonics"] = 31;
		alphaTab.audio.GeneralMidi._values["acousticbass"] = 32;
		alphaTab.audio.GeneralMidi._values["electricbassfinger"] = 33;
		alphaTab.audio.GeneralMidi._values["electricbasspick"] = 34;
		alphaTab.audio.GeneralMidi._values["fretlessbass"] = 35;
		alphaTab.audio.GeneralMidi._values["slapbass1"] = 36;
		alphaTab.audio.GeneralMidi._values["slapbass2"] = 37;
		alphaTab.audio.GeneralMidi._values["synthbass1"] = 38;
		alphaTab.audio.GeneralMidi._values["synthbass2"] = 39;
		alphaTab.audio.GeneralMidi._values["violin"] = 40;
		alphaTab.audio.GeneralMidi._values["viola"] = 41;
		alphaTab.audio.GeneralMidi._values["cello"] = 42;
		alphaTab.audio.GeneralMidi._values["contrabass"] = 43;
		alphaTab.audio.GeneralMidi._values["tremolostrings"] = 44;
		alphaTab.audio.GeneralMidi._values["pizzicatostrings"] = 45;
		alphaTab.audio.GeneralMidi._values["orchestralharp"] = 46;
		alphaTab.audio.GeneralMidi._values["timpani"] = 47;
		alphaTab.audio.GeneralMidi._values["stringensemble1"] = 48;
		alphaTab.audio.GeneralMidi._values["stringensemble2"] = 49;
		alphaTab.audio.GeneralMidi._values["synthstrings1"] = 50;
		alphaTab.audio.GeneralMidi._values["synthstrings2"] = 51;
		alphaTab.audio.GeneralMidi._values["choiraahs"] = 52;
		alphaTab.audio.GeneralMidi._values["voiceoohs"] = 53;
		alphaTab.audio.GeneralMidi._values["synthvoice"] = 54;
		alphaTab.audio.GeneralMidi._values["orchestrahit"] = 55;
		alphaTab.audio.GeneralMidi._values["trumpet"] = 56;
		alphaTab.audio.GeneralMidi._values["trombone"] = 57;
		alphaTab.audio.GeneralMidi._values["tuba"] = 58;
		alphaTab.audio.GeneralMidi._values["mutedtrumpet"] = 59;
		alphaTab.audio.GeneralMidi._values["frenchhorn"] = 60;
		alphaTab.audio.GeneralMidi._values["brasssection"] = 61;
		alphaTab.audio.GeneralMidi._values["synthbrass1"] = 62;
		alphaTab.audio.GeneralMidi._values["synthbrass2"] = 63;
		alphaTab.audio.GeneralMidi._values["sopranosax"] = 64;
		alphaTab.audio.GeneralMidi._values["altosax"] = 65;
		alphaTab.audio.GeneralMidi._values["tenorsax"] = 66;
		alphaTab.audio.GeneralMidi._values["baritonesax"] = 67;
		alphaTab.audio.GeneralMidi._values["oboe"] = 68;
		alphaTab.audio.GeneralMidi._values["englishhorn"] = 69;
		alphaTab.audio.GeneralMidi._values["bassoon"] = 70;
		alphaTab.audio.GeneralMidi._values["clarinet"] = 71;
		alphaTab.audio.GeneralMidi._values["piccolo"] = 72;
		alphaTab.audio.GeneralMidi._values["flute"] = 73;
		alphaTab.audio.GeneralMidi._values["recorder"] = 74;
		alphaTab.audio.GeneralMidi._values["panflute"] = 75;
		alphaTab.audio.GeneralMidi._values["blownbottle"] = 76;
		alphaTab.audio.GeneralMidi._values["shakuhachi"] = 77;
		alphaTab.audio.GeneralMidi._values["whistle"] = 78;
		alphaTab.audio.GeneralMidi._values["ocarina"] = 79;
		alphaTab.audio.GeneralMidi._values["lead1square"] = 80;
		alphaTab.audio.GeneralMidi._values["lead2sawtooth"] = 81;
		alphaTab.audio.GeneralMidi._values["lead3calliope"] = 82;
		alphaTab.audio.GeneralMidi._values["lead4chiff"] = 83;
		alphaTab.audio.GeneralMidi._values["lead5charang"] = 84;
		alphaTab.audio.GeneralMidi._values["lead6voice"] = 85;
		alphaTab.audio.GeneralMidi._values["lead7fifths"] = 86;
		alphaTab.audio.GeneralMidi._values["lead8bassandlead"] = 87;
		alphaTab.audio.GeneralMidi._values["pad1newage"] = 88;
		alphaTab.audio.GeneralMidi._values["pad2warm"] = 89;
		alphaTab.audio.GeneralMidi._values["pad3polysynth"] = 90;
		alphaTab.audio.GeneralMidi._values["pad4choir"] = 91;
		alphaTab.audio.GeneralMidi._values["pad5bowed"] = 92;
		alphaTab.audio.GeneralMidi._values["pad6metallic"] = 93;
		alphaTab.audio.GeneralMidi._values["pad7halo"] = 94;
		alphaTab.audio.GeneralMidi._values["pad8sweep"] = 95;
		alphaTab.audio.GeneralMidi._values["fx1rain"] = 96;
		alphaTab.audio.GeneralMidi._values["fx2soundtrack"] = 97;
		alphaTab.audio.GeneralMidi._values["fx3crystal"] = 98;
		alphaTab.audio.GeneralMidi._values["fx4atmosphere"] = 99;
		alphaTab.audio.GeneralMidi._values["fx5brightness"] = 100;
		alphaTab.audio.GeneralMidi._values["fx6goblins"] = 101;
		alphaTab.audio.GeneralMidi._values["fx7echoes"] = 102;
		alphaTab.audio.GeneralMidi._values["fx8scifi"] = 103;
		alphaTab.audio.GeneralMidi._values["sitar"] = 104;
		alphaTab.audio.GeneralMidi._values["banjo"] = 105;
		alphaTab.audio.GeneralMidi._values["shamisen"] = 106;
		alphaTab.audio.GeneralMidi._values["koto"] = 107;
		alphaTab.audio.GeneralMidi._values["kalimba"] = 108;
		alphaTab.audio.GeneralMidi._values["bagpipe"] = 109;
		alphaTab.audio.GeneralMidi._values["fiddle"] = 110;
		alphaTab.audio.GeneralMidi._values["shanai"] = 111;
		alphaTab.audio.GeneralMidi._values["tinklebell"] = 112;
		alphaTab.audio.GeneralMidi._values["agogo"] = 113;
		alphaTab.audio.GeneralMidi._values["steeldrums"] = 114;
		alphaTab.audio.GeneralMidi._values["woodblock"] = 115;
		alphaTab.audio.GeneralMidi._values["taikodrum"] = 116;
		alphaTab.audio.GeneralMidi._values["melodictom"] = 117;
		alphaTab.audio.GeneralMidi._values["synthdrum"] = 118;
		alphaTab.audio.GeneralMidi._values["reversecymbal"] = 119;
		alphaTab.audio.GeneralMidi._values["guitarfretnoise"] = 120;
		alphaTab.audio.GeneralMidi._values["breathnoise"] = 121;
		alphaTab.audio.GeneralMidi._values["seashore"] = 122;
		alphaTab.audio.GeneralMidi._values["birdtweet"] = 123;
		alphaTab.audio.GeneralMidi._values["telephonering"] = 124;
		alphaTab.audio.GeneralMidi._values["helicopter"] = 125;
		alphaTab.audio.GeneralMidi._values["applause"] = 126;
		alphaTab.audio.GeneralMidi._values["gunshot"] = 127;
	}
	name = StringTools.replace(name.toLowerCase()," ","");
	if(alphaTab.audio.GeneralMidi._values.hasOwnProperty(name)) {
		return alphaTab.audio.GeneralMidi._values[name];
	} else {
		return 0;
	}
};
alphaTab.audio.GeneralMidi.IsPiano = function(program) {
	if(!(program <= 7)) {
		if(program >= 16) {
			return program <= 23;
		} else {
			return false;
		}
	} else {
		return true;
	}
};
alphaTab.audio.GeneralMidi.IsGuitar = function(program) {
	if(!(program >= 24 && program <= 39 || program == 105)) {
		return program == 43;
	} else {
		return true;
	}
};
alphaTab.audio.GeneralMidi.prototype = {
	__class__: alphaTab.audio.GeneralMidi
};
alphaTab.audio.MidiUtils = $hx_exports["alphaTab"]["audio"]["MidiUtils"] = function() { };
alphaTab.audio.MidiUtils.__name__ = true;
alphaTab.audio.MidiUtils.TicksToMillis = function(ticks,tempo) {
	return system.Convert.ToInt32_Double(ticks * (60000.0 / (tempo * 960)));
};
alphaTab.audio.MidiUtils.ToTicks = function(duration) {
	return alphaTab.audio.MidiUtils.ValueToTicks(duration);
};
alphaTab.audio.MidiUtils.ValueToTicks = function(duration) {
	var this1 = duration;
	var denomninator = this1;
	if(denomninator < 0) {
		denomninator = 1 / -denomninator;
	}
	return system.Convert.ToInt32_Single(960 * (4.0 / denomninator));
};
alphaTab.audio.MidiUtils.ApplyDot = function(ticks,doubleDotted) {
	if(doubleDotted) {
		return ticks + (ticks / 4 | 0) * 3;
	}
	return ticks + (ticks / 2 | 0);
};
alphaTab.audio.MidiUtils.ApplyTuplet = function(ticks,numerator,denominator) {
	return ticks * denominator / numerator | 0;
};
alphaTab.audio.MidiUtils.DynamicToVelocity = function(dyn) {
	return 15 + dyn * 16;
};
alphaTab.audio.generator = {};
alphaTab.audio.generator.IMidiFileHandler = $hx_exports["alphaTab"]["audio"]["generator"]["IMidiFileHandler"] = function() { };
alphaTab.audio.generator.IMidiFileHandler.__name__ = true;
alphaTab.audio.generator.IMidiFileHandler.prototype = {
	__class__: alphaTab.audio.generator.IMidiFileHandler
};
alphaTab.audio.generator.MidiFileGenerator = $hx_exports["alphaTab"]["audio"]["generator"]["MidiFileGenerator"] = function(score,handler) {
	this._score = null;
	this._handler = null;
	this._currentTempo = 0;
	this.TickLookup = null;
	this._score = score;
	this._currentTempo = this._score.Tempo;
	this._handler = handler;
	this.TickLookup = new alphaTab.audio.model.MidiTickLookup();
};
alphaTab.audio.generator.MidiFileGenerator.__name__ = true;
alphaTab.audio.generator.MidiFileGenerator.GenerateMidiFile = function(score) {
	var midiFile = new alphaTab.audio.model.MidiFile();
	var i = 0;
	var j = score.Tracks.length;
	while(i < j) {
		midiFile.CreateTrack();
		++i;
	}
	midiFile.InfoTrack = 0;
	var handler = new alphaTab.audio.generator.MidiFileHandler(midiFile);
	var generator = new alphaTab.audio.generator.MidiFileGenerator(score,handler);
	generator.Generate();
	midiFile.TickLookup = generator.TickLookup;
	return midiFile;
};
alphaTab.audio.generator.MidiFileGenerator.ToChannelShort = function(data) {
	var value = Math.max(-32768,Math.min(32767,data * 8 - 1));
	return Math.max(value,-1) + 1;
};
alphaTab.audio.generator.MidiFileGenerator.prototype = {
	Generate: function() {
		var i = 0;
		var j = this._score.Tracks.length;
		while(i < j) {
			this.GenerateTrack(this._score.Tracks[i]);
			++i;
		}
		var controller = new alphaTab.audio.generator.MidiPlaybackController(this._score);
		var previousMasterBar = null;
		while(!controller.get_Finished()) {
			var index = controller.Index;
			var bar = this._score.MasterBars[index];
			var currentTick = controller.CurrentTick;
			controller.ProcessCurrent();
			if(controller.ShouldPlay) {
				this.GenerateMasterBar(bar,previousMasterBar,currentTick);
				var i1 = 0;
				var j1 = this._score.Tracks.length;
				while(i1 < j1) {
					var track = this._score.Tracks[i1];
					var k = 0;
					var l = track.Staves.length;
					while(k < l) {
						var staff = track.Staves[k];
						if(index < staff.Bars.length) {
							this.GenerateBar(staff.Bars[index],currentTick);
						}
						++k;
					}
					++i1;
				}
			}
			controller.MoveNext();
			previousMasterBar = bar;
		}
		var i2 = 0;
		var j2 = this._score.Tracks.length;
		while(i2 < j2) {
			this._handler.FinishTrack(this._score.Tracks[i2].Index,controller.CurrentTick);
			++i2;
		}
		this.TickLookup.Finish();
	}
	,GenerateTrack: function(track) {
		this.GenerateChannel(track,system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel),track.PlaybackInfo);
		if(track.PlaybackInfo.PrimaryChannel != track.PlaybackInfo.SecondaryChannel) {
			this.GenerateChannel(track,system.Convert.ToUInt8(track.PlaybackInfo.SecondaryChannel),track.PlaybackInfo);
		}
	}
	,GenerateChannel: function(track,channel,playbackInfo) {
		var volume = alphaTab.audio.generator.MidiFileGenerator.ToChannelShort(playbackInfo.Volume);
		var balance = alphaTab.audio.generator.MidiFileGenerator.ToChannelShort(playbackInfo.Balance);
		this._handler.AddControlChange(track.Index,0,channel,system.Convert.ToUInt8(7),system.Convert.ToUInt8(volume));
		this._handler.AddControlChange(track.Index,0,channel,system.Convert.ToUInt8(10),system.Convert.ToUInt8(balance));
		this._handler.AddControlChange(track.Index,0,channel,system.Convert.ToUInt8(11),127);
		this._handler.AddControlChange(track.Index,0,channel,system.Convert.ToUInt8(100),0);
		this._handler.AddControlChange(track.Index,0,channel,system.Convert.ToUInt8(101),0);
		this._handler.AddControlChange(track.Index,0,channel,system.Convert.ToUInt8(38),0);
		this._handler.AddControlChange(track.Index,0,channel,system.Convert.ToUInt8(6),12);
		this._handler.AddProgramChange(track.Index,0,channel,system.Convert.ToUInt8(playbackInfo.Program));
	}
	,GenerateMasterBar: function(masterBar,previousMasterBar,currentTick) {
		if(previousMasterBar == null || previousMasterBar.TimeSignatureDenominator != masterBar.TimeSignatureDenominator || previousMasterBar.TimeSignatureNumerator != masterBar.TimeSignatureNumerator) {
			this._handler.AddTimeSignature(currentTick,masterBar.TimeSignatureNumerator,masterBar.TimeSignatureDenominator);
		}
		if(previousMasterBar == null) {
			this._handler.AddTempo(currentTick,masterBar.Score.Tempo);
			this._currentTempo = masterBar.Score.Tempo;
		} else if(masterBar.TempoAutomation != null) {
			this._handler.AddTempo(currentTick,system.Convert.ToInt32_Single(masterBar.TempoAutomation.Value));
			this._currentTempo = system.Convert.ToInt32_Single(masterBar.TempoAutomation.Value);
		}
		var masterBarLookup = new alphaTab.audio.model.MasterBarTickLookup();
		masterBarLookup.MasterBar = masterBar;
		masterBarLookup.Start = currentTick;
		masterBarLookup.Tempo = this._currentTempo;
		masterBarLookup.End = masterBarLookup.Start + masterBar.CalculateDuration();
		this.TickLookup.AddMasterBar(masterBarLookup);
	}
	,GenerateBar: function(bar,barStartTick) {
		var i = 0;
		var j = bar.Voices.length;
		while(i < j) {
			this.GenerateVoice(bar.Voices[i],barStartTick);
			++i;
		}
	}
	,GenerateVoice: function(voice,barStartTick) {
		if(voice.IsEmpty && (!voice.Bar.get_IsEmpty() || voice.Index != 0)) {
			return;
		}
		var i = 0;
		var j = voice.Beats.length;
		while(i < j) {
			this.GenerateBeat(voice.Beats[i],barStartTick);
			++i;
		}
	}
	,GenerateBeat: function(beat,barStartTick) {
		var beatStart = beat.Start;
		var audioDuration = beat.Voice.Bar.get_IsEmpty() ? beat.Voice.Bar.get_MasterBar().CalculateDuration() : beat.CalculateDuration();
		var beatLookup = new alphaTab.audio.model.BeatTickLookup();
		beatLookup.Start = barStartTick + beatStart;
		var realTickOffset = beat.NextBeat == null ? audioDuration : beat.NextBeat.get_AbsoluteStart() - beat.get_AbsoluteStart();
		beatLookup.End = barStartTick + beatStart + (realTickOffset > audioDuration ? realTickOffset : audioDuration);
		beatLookup.Beat = beat;
		this.TickLookup.AddBeat(beatLookup);
		var track = beat.Voice.Bar.Staff.Track;
		var i = 0;
		var j = beat.Automations.length;
		while(i < j) {
			this.GenerateAutomation(beat,beat.Automations[i],barStartTick);
			++i;
		}
		if(beat.get_IsRest()) {
			this._handler.AddRest(track.Index,barStartTick + beatStart,track.PlaybackInfo.PrimaryChannel);
		} else {
			var brushInfo = this.GetBrushInfo(beat);
			var i1 = 0;
			var j1 = beat.Notes.length;
			while(i1 < j1) {
				var n = beat.Notes[i1];
				this.GenerateNote(n,barStartTick + beatStart,audioDuration,brushInfo);
				++i1;
			}
		}
		if(beat.Vibrato != 0) {
			var phaseLength = 240;
			var bendAmplitude = 3;
			this.GenerateVibratorWithParams(beat.Voice.Bar.Staff.Track,barStartTick + beatStart,beat.CalculateDuration(),phaseLength,bendAmplitude);
		}
	}
	,GenerateNote: function(note,beatStart,beatDuration,brushInfo) {
		var track = note.Beat.Voice.Bar.Staff.Track;
		var noteKey = note.get_RealValue();
		var brushOffset = note.get_IsStringed() && note.String <= brushInfo.length ? brushInfo[note.String - 1] : 0;
		var noteStart = beatStart + brushOffset;
		var noteDuration = this.GetNoteDuration(note,beatDuration) - brushOffset;
		var dynamicValue = this.GetDynamicValue(note);
		if(!note.get_HasBend()) {
			this._handler.AddBend(track.Index,noteStart,system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel),system.Convert.ToUInt8(64));
		}
		if(note.Beat.FadeIn) {
			this.GenerateFadeIn(note,noteStart,noteDuration,noteKey,dynamicValue);
		}
		if(note.get_IsTrill() && !track.IsPercussion) {
			this.GenerateTrill(note,noteStart,noteDuration,noteKey,dynamicValue);
			return;
		}
		if(note.Beat.get_IsTremolo()) {
			this.GenerateTremoloPicking(note,noteStart,noteDuration,noteKey,dynamicValue);
			return;
		}
		if(note.get_HasBend()) {
			this.GenerateBend(note,noteStart,noteDuration,noteKey,dynamicValue);
		} else if(note.Beat.get_HasWhammyBar()) {
			this.GenerateWhammyBar(note,noteStart,noteDuration,noteKey,dynamicValue);
		} else if(note.SlideType != 0) {
			this.GenerateSlide(note,noteStart,noteDuration,noteKey,dynamicValue);
		} else if(note.Vibrato != 0) {
			this.GenerateVibrato(note,noteStart,noteDuration,noteKey,dynamicValue);
		}
		if(note.HarmonicType != 0) {
			this.GenerateHarmonic(note,noteStart,noteDuration,noteKey,dynamicValue);
		}
		if(!note.IsTieDestination) {
			this._handler.AddNote(track.Index,noteStart,noteDuration,system.Convert.ToUInt8(noteKey),dynamicValue,system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel));
		}
	}
	,GetNoteDuration: function(note,beatDuration) {
		return this.ApplyDurationEffects(note,beatDuration);
	}
	,ApplyDurationEffects: function(note,duration) {
		if(note.IsDead) {
			return this.ApplyStaticDuration(30,duration);
		}
		if(note.IsPalmMute) {
			return this.ApplyStaticDuration(80,duration);
		}
		if(note.IsStaccato) {
			return duration / 2 | 0;
		}
		if(note.IsTieOrigin) {
			var endNote = note.TieDestination;
			if(!note.IsTieDestination) {
				var startTick = note.Beat.get_AbsoluteStart();
				var endTick = endNote.Beat.get_AbsoluteStart() + this.GetNoteDuration(endNote,endNote.Beat.CalculateDuration());
				return endTick - startTick;
			} else {
				return duration + this.GetNoteDuration(endNote,endNote.Beat.CalculateDuration());
			}
		}
		return duration;
	}
	,ApplyStaticDuration: function(duration,maximum) {
		var value = this._currentTempo * duration / 60 | 0;
		return Math.min(value,maximum);
	}
	,GetDynamicValue: function(note) {
		var dynamicValue = note.Dynamic;
		if(!note.Beat.Voice.Bar.Staff.Track.IsPercussion && note.HammerPullOrigin != null) {
			--dynamicValue;
		}
		if(note.IsGhost) {
			--dynamicValue;
		}
		var _g = note.Accentuated;
		switch(_g) {
		case 1:
			++dynamicValue;
			break;
		case 2:
			dynamicValue += 2;
			break;
		default:
		}
		return dynamicValue;
	}
	,GenerateFadeIn: function(note,noteStart,noteDuration,noteKey,dynamicValue) {
		var track = note.Beat.Voice.Bar.Staff.Track;
		var endVolume = alphaTab.audio.generator.MidiFileGenerator.ToChannelShort(track.PlaybackInfo.Volume);
		var volumeFactor = js.Boot.__cast(endVolume , Float) / noteDuration;
		var tickStep = 120;
		var steps = noteDuration / tickStep | 0;
		var endTick = noteStart + noteDuration;
		var i = steps - 1;
		while(i >= 0) {
			var tick = endTick - i * tickStep;
			var volume = (tick - noteStart) * volumeFactor;
			if(i == steps - 1) {
				this._handler.AddControlChange(track.Index,noteStart,system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel),system.Convert.ToUInt8(7),system.Convert.ToUInt8(system.Convert.ToInt32_Single(volume)));
				this._handler.AddControlChange(track.Index,noteStart,system.Convert.ToUInt8(track.PlaybackInfo.SecondaryChannel),system.Convert.ToUInt8(7),system.Convert.ToUInt8(system.Convert.ToInt32_Single(volume)));
			}
			this._handler.AddControlChange(track.Index,tick,system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel),system.Convert.ToUInt8(7),system.Convert.ToUInt8(system.Convert.ToInt32_Single(volume)));
			this._handler.AddControlChange(track.Index,tick,system.Convert.ToUInt8(track.PlaybackInfo.SecondaryChannel),system.Convert.ToUInt8(7),system.Convert.ToUInt8(system.Convert.ToInt32_Single(volume)));
			--i;
		}
	}
	,GenerateHarmonic: function(note,noteStart,noteDuration,noteKey,dynamicValue) {
	}
	,GenerateVibrato: function(note,noteStart,noteDuration,noteKey,dynamicValue) {
		var phaseLength = 480;
		var bendAmplitude = 2;
		var track = note.Beat.Voice.Bar.Staff.Track;
		this.GenerateVibratorWithParams(track,noteStart,noteDuration,phaseLength,bendAmplitude);
	}
	,GenerateVibratorWithParams: function(track,noteStart,noteDuration,phaseLength,bendAmplitude) {
		var resolution = 16;
		var phaseHalf = phaseLength / 2 | 0;
		noteStart = noteStart + phaseLength;
		var noteEnd = noteStart + noteDuration;
		while(noteStart < noteEnd) {
			var phase = 0;
			var phaseDuration = noteStart + phaseLength < noteEnd ? phaseLength : noteEnd - noteStart;
			while(phase < phaseDuration) {
				var bend = bendAmplitude * Math.sin(phase * 3.14159265358979 / phaseHalf);
				this._handler.AddBend(track.Index,noteStart + phase,system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel),system.Convert.ToUInt8(system.Convert.ToInt32_Double(64 + bend)));
				phase = phase + resolution;
			}
			noteStart = noteStart + phaseLength;
		}
	}
	,GenerateSlide: function(note,noteStart,noteDuration,noteKey,dynamicValue) {
	}
	,GenerateWhammyBar: function(note,noteStart,noteDuration,noteKey,dynamicValue) {
	}
	,GenerateBend: function(note,noteStart,noteDuration,noteKey,dynamicValue) {
		var track = note.Beat.Voice.Bar.Staff.Track;
		var ticksPerPosition = js.Boot.__cast(noteDuration , Float) / 60;
		var i = 0;
		while(i < note.BendPoints.length - 1) {
			var currentPoint = note.BendPoints[i];
			var nextPoint = note.BendPoints[i + 1];
			var currentBendValue = 64 + currentPoint.Value * 2.75;
			var nextBendValue = 64 + nextPoint.Value * 2.75;
			var ticksBetweenPoints = ticksPerPosition * (nextPoint.Offset - currentPoint.Offset);
			var ticksPerValue = ticksBetweenPoints / Math.abs(nextBendValue - currentBendValue);
			var tick = noteStart + ticksPerPosition * currentPoint.Offset;
			if(currentBendValue < nextBendValue) {
				while(currentBendValue <= nextBendValue) {
					var tmp = this._handler;
					var track1 = track.Index;
					var tmp1 = system.Convert.ToInt32_Double(tick);
					var tmp2 = system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel);
					var this1 = currentBendValue;
					var this2 = Math.round(this1);
					tmp.AddBend(track1,tmp1,tmp2,system.Convert.ToUInt8(system.Convert.ToInt32_Double(this2)));
					++currentBendValue;
					tick = tick + ticksPerValue;
				}
			} else if(currentBendValue > nextBendValue) {
				while(currentBendValue >= nextBendValue) {
					var tmp3 = this._handler;
					var track2 = track.Index;
					var tmp4 = system.Convert.ToInt32_Double(tick);
					var tmp5 = system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel);
					var this3 = currentBendValue;
					var this4 = Math.round(this3);
					tmp3.AddBend(track2,tmp4,tmp5,system.Convert.ToUInt8(system.Convert.ToInt32_Double(this4)));
					--currentBendValue;
					tick = tick + ticksPerValue;
				}
			}
			++i;
		}
	}
	,GenerateTrill: function(note,noteStart,noteDuration,noteKey,dynamicValue) {
		var track = note.Beat.Voice.Bar.Staff.Track;
		var trillKey = note.get_StringTuning() + note.get_TrillFret();
		var trillLength = alphaTab.audio.MidiUtils.ToTicks(note.TrillSpeed);
		var realKey = true;
		var tick = noteStart;
		while(tick + 10 < noteStart + noteDuration) {
			if(tick + trillLength >= noteStart + noteDuration) {
				trillLength = noteStart + noteDuration - tick;
			}
			this._handler.AddNote(track.Index,tick,trillLength,system.Convert.ToUInt8(realKey ? trillKey : noteKey),dynamicValue,system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel));
			realKey = !realKey;
			tick = tick + trillLength;
		}
	}
	,GenerateTremoloPicking: function(note,noteStart,noteDuration,noteKey,dynamicValue) {
		var track = note.Beat.Voice.Bar.Staff.Track;
		var tpLength = alphaTab.audio.MidiUtils.ToTicks(note.Beat.TremoloSpeed);
		var tick = noteStart;
		while(tick + 10 < noteStart + noteDuration) {
			if(tick + tpLength >= noteStart + noteDuration) {
				tpLength = noteStart + noteDuration - tick;
			}
			this._handler.AddNote(track.Index,tick,tpLength,system.Convert.ToUInt8(noteKey),dynamicValue,system.Convert.ToUInt8(track.PlaybackInfo.PrimaryChannel));
			tick = tick + tpLength;
		}
	}
	,GetBrushInfo: function(beat) {
		var this1 = new Int32Array(beat.Voice.Bar.Staff.Track.Tuning.length);
		var brushInfo = this1;
		if(beat.BrushType != 0) {
			var stringUsed = 0;
			var i = 0;
			var j = beat.Notes.length;
			while(i < j) {
				var n = beat.Notes[i];
				if(n.IsTieDestination) {
					++i;
					continue;
				}
				stringUsed = stringUsed | 1 << n.String - 1;
				++i;
			}
			if(beat.Notes.length > 0) {
				var brushMove = 0;
				var brushIncrement = this.GetBrushIncrement(beat);
				var i1 = 0;
				var j1 = beat.Voice.Bar.Staff.Track.Tuning.length;
				while(i1 < j1) {
					var index = beat.BrushType == 4 || beat.BrushType == 2 ? i1 : brushInfo.length - 1 - i1;
					if((stringUsed & 1 << index) != 0) {
						brushInfo[index] = brushMove;
						brushMove = brushIncrement;
					}
					++i1;
				}
			}
		}
		return brushInfo;
	}
	,GetBrushIncrement: function(beat) {
		if(beat.BrushDuration == 0) {
			return 0;
		}
		var duration = beat.CalculateDuration();
		if(duration == 0) {
			return 0;
		}
		return system.Convert.ToInt32_Double(duration / 8.0 * (4.0 / beat.BrushDuration));
	}
	,GenerateAutomation: function(beat,automation,startMove) {
		var _g = automation.Type;
		switch(_g) {
		case 1:
			var volume = alphaTab.audio.generator.MidiFileGenerator.ToChannelShort(system.Convert.ToInt32_Single(automation.Value));
			this._handler.AddControlChange(beat.Voice.Bar.Staff.Track.Index,beat.Start + startMove,system.Convert.ToUInt8(beat.Voice.Bar.Staff.Track.PlaybackInfo.PrimaryChannel),system.Convert.ToUInt8(7),system.Convert.ToUInt8(volume));
			this._handler.AddControlChange(beat.Voice.Bar.Staff.Track.Index,beat.Start + startMove,system.Convert.ToUInt8(beat.Voice.Bar.Staff.Track.PlaybackInfo.SecondaryChannel),system.Convert.ToUInt8(7),system.Convert.ToUInt8(volume));
			break;
		case 2:
			this._handler.AddProgramChange(beat.Voice.Bar.Staff.Track.Index,beat.Start + startMove,system.Convert.ToUInt8(beat.Voice.Bar.Staff.Track.PlaybackInfo.PrimaryChannel),system.Convert.ToUInt8(system.Convert.ToInt32_Single(automation.Value)));
			this._handler.AddProgramChange(beat.Voice.Bar.Staff.Track.Index,beat.Start + startMove,system.Convert.ToUInt8(beat.Voice.Bar.Staff.Track.PlaybackInfo.SecondaryChannel),system.Convert.ToUInt8(system.Convert.ToInt32_Single(automation.Value)));
			break;
		case 3:
			var balance = alphaTab.audio.generator.MidiFileGenerator.ToChannelShort(system.Convert.ToInt32_Single(automation.Value));
			this._handler.AddControlChange(beat.Voice.Bar.Staff.Track.Index,beat.Start + startMove,system.Convert.ToUInt8(beat.Voice.Bar.Staff.Track.PlaybackInfo.PrimaryChannel),system.Convert.ToUInt8(10),system.Convert.ToUInt8(balance));
			this._handler.AddControlChange(beat.Voice.Bar.Staff.Track.Index,beat.Start + startMove,system.Convert.ToUInt8(beat.Voice.Bar.Staff.Track.PlaybackInfo.SecondaryChannel),system.Convert.ToUInt8(10),system.Convert.ToUInt8(balance));
			break;
		default:
		}
	}
	,__class__: alphaTab.audio.generator.MidiFileGenerator
};
alphaTab.audio.generator.MidiFileHandler = $hx_exports["alphaTab"]["audio"]["generator"]["MidiFileHandler"] = function(midiFile) {
	this._midiFile = null;
	this._midiFile = midiFile;
};
alphaTab.audio.generator.MidiFileHandler.__name__ = true;
alphaTab.audio.generator.MidiFileHandler.__interfaces__ = [alphaTab.audio.generator.IMidiFileHandler];
alphaTab.audio.generator.MidiFileHandler.FixValue = function(value) {
	if(value > 127) {
		return 127;
	}
	return value;
};
alphaTab.audio.generator.MidiFileHandler.BuildMetaMessage = function(metaType,data) {
	var meta = alphaTab.io.ByteBuffer.Empty();
	meta.WriteByte(255);
	meta.WriteByte(system.Convert.ToUInt8(metaType & 255));
	alphaTab.audio.generator.MidiFileHandler.WriteVarInt(meta,data.length);
	meta.Write(data,0,data.length);
	return new alphaTab.audio.model.MidiMessage(meta.ToArray());
};
alphaTab.audio.generator.MidiFileHandler.WriteVarInt = function(data,v) {
	var n = 0;
	var this1 = new Uint8Array(4);
	var array = this1;
	while(true) {
		array[n++] = system.Convert.ToUInt8(v & 127 & 255);
		v = v >> 7;
		if(!(v > 0)) {
			break;
		}
	}
	while(n > 0) {
		--n;
		if(n > 0) {
			data.WriteByte(system.Convert.ToUInt8((array[n] | 128) & 255));
		} else {
			data.WriteByte(array[n]);
		}
	}
};
alphaTab.audio.generator.MidiFileHandler.BuildSysExMessage = function(data) {
	var sysex = alphaTab.io.ByteBuffer.Empty();
	sysex.WriteByte(240);
	alphaTab.audio.generator.MidiFileHandler.WriteVarInt(sysex,data.length + 2);
	sysex.WriteByte(0);
	sysex.Write(data,0,data.length);
	sysex.WriteByte(247);
	return new alphaTab.audio.model.MidiMessage(sysex.ToArray());
};
alphaTab.audio.generator.MidiFileHandler.prototype = {
	AddEvent: function(track,tick,message) {
		this._midiFile.Tracks[track].AddEvent(new alphaTab.audio.model.MidiEvent(tick,message));
	}
	,MakeCommand: function(command,channel) {
		return system.Convert.ToUInt8(command & 240 | channel & 15);
	}
	,AddTimeSignature: function(tick,timeSignatureNumerator,timeSignatureDenominator) {
		var denominatorIndex = 0;
		while(true) {
			timeSignatureDenominator = timeSignatureDenominator >> 1;
			if(!(timeSignatureDenominator > 0)) {
				break;
			}
			++denominatorIndex;
		}
		this.AddEvent(this._midiFile.InfoTrack,tick,alphaTab.audio.generator.MidiFileHandler.BuildMetaMessage(88,new Uint8Array([system.Convert.ToUInt8(timeSignatureNumerator & 255),system.Convert.ToUInt8(denominatorIndex & 255),48,8])));
	}
	,AddRest: function(track,tick,channel) {
		this.AddEvent(track,tick,alphaTab.audio.generator.MidiFileHandler.BuildSysExMessage(new Uint8Array([system.Convert.ToUInt8(0)])));
	}
	,AddNote: function(track,start,length,key,dynamicValue,channel) {
		var velocity = alphaTab.audio.MidiUtils.DynamicToVelocity(dynamicValue);
		this.AddEvent(track,start,new alphaTab.audio.model.MidiMessage(new Uint8Array([this.MakeCommand(144,channel),alphaTab.audio.generator.MidiFileHandler.FixValue(key),alphaTab.audio.generator.MidiFileHandler.FixValue(system.Convert.ToUInt8(velocity))])));
		this.AddEvent(track,start + length,new alphaTab.audio.model.MidiMessage(new Uint8Array([this.MakeCommand(128,channel),alphaTab.audio.generator.MidiFileHandler.FixValue(key),alphaTab.audio.generator.MidiFileHandler.FixValue(system.Convert.ToUInt8(velocity))])));
	}
	,AddControlChange: function(track,tick,channel,controller,value) {
		this.AddEvent(track,tick,new alphaTab.audio.model.MidiMessage(new Uint8Array([this.MakeCommand(176,channel),alphaTab.audio.generator.MidiFileHandler.FixValue(controller),alphaTab.audio.generator.MidiFileHandler.FixValue(value)])));
	}
	,AddProgramChange: function(track,tick,channel,program) {
		this.AddEvent(track,tick,new alphaTab.audio.model.MidiMessage(new Uint8Array([this.MakeCommand(192,channel),alphaTab.audio.generator.MidiFileHandler.FixValue(program)])));
	}
	,AddTempo: function(tick,tempo) {
		var tempoInUsq = 60000000 / tempo | 0;
		this.AddEvent(this._midiFile.InfoTrack,tick,alphaTab.audio.generator.MidiFileHandler.BuildMetaMessage(81,new Uint8Array([system.Convert.ToUInt8(tempoInUsq >> 16 & 255),system.Convert.ToUInt8(tempoInUsq >> 8 & 255),system.Convert.ToUInt8(tempoInUsq & 255)])));
	}
	,FinishTrack: function(track,tick) {
		var tmp = this._midiFile.InfoTrack;
		var this1 = new Uint8Array(0);
		this.AddEvent(tmp,tick,alphaTab.audio.generator.MidiFileHandler.BuildMetaMessage(47,this1));
	}
	,AddBend: function(track,tick,channel,value) {
		this.AddEvent(track,tick,new alphaTab.audio.model.MidiMessage(new Uint8Array([this.MakeCommand(224,channel),0,alphaTab.audio.generator.MidiFileHandler.FixValue(value)])));
	}
	,__class__: alphaTab.audio.generator.MidiFileHandler
};
alphaTab.audio.generator.MidiPlaybackController = $hx_exports["alphaTab"]["audio"]["generator"]["MidiPlaybackController"] = function(score) {
	this._score = null;
	this._repeatStartIndex = 0;
	this._repeatNumber = 0;
	this._repeatOpen = false;
	this.ShouldPlay = false;
	this.Index = 0;
	this.CurrentTick = 0;
	this._score = score;
	this.ShouldPlay = true;
	this.Index = 0;
	this.CurrentTick = 0;
};
alphaTab.audio.generator.MidiPlaybackController.__name__ = true;
alphaTab.audio.generator.MidiPlaybackController.prototype = {
	get_Finished: function() {
		return this.Index >= this._score.MasterBars.length;
	}
	,ProcessCurrent: function() {
		var masterBar = this._score.MasterBars[this.Index];
		var masterBarAlternateEndings = masterBar.AlternateEndings;
		if(!masterBar.RepeatGroup.IsClosed && masterBar.RepeatGroup.Openings[masterBar.RepeatGroup.Openings.length - 1] == masterBar) {
			this._repeatNumber = 0;
			this._repeatOpen = false;
		}
		if((masterBar.IsRepeatStart || masterBar.Index == 0) && this._repeatNumber == 0) {
			this._repeatStartIndex = this.Index;
			this._repeatOpen = true;
		} else if(masterBar.IsRepeatStart) {
			this.ShouldPlay = true;
		}
		if(this._repeatOpen && masterBarAlternateEndings > 0) {
			if((masterBarAlternateEndings & 1 << this._repeatNumber) == 0) {
				this.ShouldPlay = false;
			} else {
				this.ShouldPlay = true;
			}
		}
		if(this.ShouldPlay) {
			this.CurrentTick = this.CurrentTick + masterBar.CalculateDuration();
		}
	}
	,MoveNext: function() {
		var masterBar = this._score.MasterBars[this.Index];
		var masterBarRepeatCount = masterBar.RepeatCount - 1;
		if(this._repeatOpen && masterBarRepeatCount > 0) {
			if(this._repeatNumber < masterBarRepeatCount) {
				this.Index = this._repeatStartIndex;
				this._repeatNumber++;
			} else {
				this._repeatNumber = 0;
				this._repeatOpen = false;
				this.ShouldPlay = true;
				this.Index++;
			}
		} else {
			this.Index++;
		}
	}
	,__class__: alphaTab.audio.generator.MidiPlaybackController
};
alphaTab.audio.model = {};
alphaTab.audio.model.BeatTickLookup = $hx_exports["alphaTab"]["audio"]["model"]["BeatTickLookup"] = function() {
};
alphaTab.audio.model.BeatTickLookup.__name__ = true;
alphaTab.audio.model.BeatTickLookup.prototype = {
	__class__: alphaTab.audio.model.BeatTickLookup
};
alphaTab.audio.model.MasterBarTickLookup = $hx_exports["alphaTab"]["audio"]["model"]["MasterBarTickLookup"] = function() {
	this.Start = 0;
	this.End = 0;
	this.Tempo = 0;
	this.MasterBar = null;
	this.Beats = null;
	var this1 = [];
	this.Beats = this1;
};
alphaTab.audio.model.MasterBarTickLookup.__name__ = true;
alphaTab.audio.model.MasterBarTickLookup.prototype = {
	Finish: function() {
		var comparison = function(a,b) {
			return a.Start - b.Start;
		};
		this.Beats.sort(function(a1,b1) {
			return comparison(a1,b1);
		});
	}
	,AddBeat: function(beat) {
		this.Beats.push(beat);
	}
	,__class__: alphaTab.audio.model.MasterBarTickLookup
};
alphaTab.audio.model._MidiController = {};
alphaTab.audio.model._MidiController.MidiController_Impl_ = $hx_exports["alphaTab"]["audio"]["model"]["_MidiController"]["MidiController_Impl_"] = {};
alphaTab.audio.model._MidiController.MidiController_Impl_.__name__ = true;
alphaTab.audio.model._MidiController.MidiController_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.audio.model._MidiController.MidiController_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.audio.model._MidiController.MidiController_Impl_.toString = function(this1) {
	switch(this1) {
	case 6:
		return "DataEntryCoarse";
	case 7:
		return "VolumeCoarse";
	case 10:
		return "PanCoarse";
	case 11:
		return "ExpressionControllerCoarse";
	case 38:
		return "DataEntryFine";
	case 100:
		return "RegisteredParameterFine";
	case 101:
		return "RegisteredParameterCourse";
	}
	return "";
};
alphaTab.audio.model.MidiEvent = $hx_exports["alphaTab"]["audio"]["model"]["MidiEvent"] = function(tick,message) {
	this.Track = null;
	this.Tick = 0;
	this.Message = null;
	this.NextEvent = null;
	this.PreviousEvent = null;
	this.Tick = tick;
	this.Message = message;
};
alphaTab.audio.model.MidiEvent.__name__ = true;
alphaTab.audio.model.MidiEvent.prototype = {
	get_DeltaTicks: function() {
		if(this.PreviousEvent == null) {
			return 0;
		} else {
			return this.Tick - this.PreviousEvent.Tick;
		}
	}
	,WriteTo: function(s) {
		this.WriteVariableInt(s,this.get_DeltaTicks());
		this.Message.WriteTo(s);
	}
	,WriteVariableInt: function(s,value) {
		var this1 = new Uint8Array(4);
		var array = this1;
		var n = 0;
		while(true) {
			array[n++] = system.Convert.ToUInt8(value & 127 & 255);
			value = value >> 7;
			if(!(value > 0)) {
				break;
			}
		}
		while(n > 0) {
			--n;
			if(n > 0) {
				s.WriteByte(system.Convert.ToUInt8(array[n] | 128));
			} else {
				s.WriteByte(array[n]);
			}
		}
	}
	,__class__: alphaTab.audio.model.MidiEvent
};
alphaTab.audio.model.MidiFile = $hx_exports["alphaTab"]["audio"]["model"]["MidiFile"] = function() {
	this.TickLookup = null;
	this.Tracks = null;
	this.InfoTrack = 0;
	var this1 = [];
	this.Tracks = this1;
};
alphaTab.audio.model.MidiFile.__name__ = true;
alphaTab.audio.model.MidiFile.prototype = {
	CreateTrack: function() {
		var track = new alphaTab.audio.model.MidiTrack();
		track.Index = this.Tracks.length;
		track.File = this;
		this.Tracks.push(track);
		return track;
	}
	,WriteTo: function(s) {
		var b = new Uint8Array([77,84,104,100]);
		s.Write(b,0,b.length);
		b = new Uint8Array([0,0,0,6]);
		s.Write(b,0,b.length);
		b = new Uint8Array([0,1]);
		s.Write(b,0,b.length);
		var v = system.Convert.ToInt16(this.Tracks.length);
		b = new Uint8Array([system.Convert.ToUInt8(v >> 8 & 255),system.Convert.ToUInt8(v & 255)]);
		s.Write(b,0,b.length);
		v = system.Convert.ToInt16(960);
		b = new Uint8Array([system.Convert.ToUInt8(v >> 8 & 255),system.Convert.ToUInt8(v & 255)]);
		s.Write(b,0,b.length);
		var i = 0;
		var j = this.Tracks.length;
		while(i < j) {
			this.Tracks[i].WriteTo(s);
			++i;
		}
	}
	,__class__: alphaTab.audio.model.MidiFile
};
alphaTab.audio.model.MidiMessage = $hx_exports["alphaTab"]["audio"]["model"]["MidiMessage"] = function(data) {
	this.Event = null;
	this.Data = null;
	this.Data = data;
};
alphaTab.audio.model.MidiMessage.__name__ = true;
alphaTab.audio.model.MidiMessage.prototype = {
	WriteTo: function(s) {
		s.Write(this.Data,0,this.Data.length);
	}
	,__class__: alphaTab.audio.model.MidiMessage
};
alphaTab.audio.model.MidiTickLookup = $hx_exports["alphaTab"]["audio"]["model"]["MidiTickLookup"] = function() {
	this.MasterBarLookup = null;
	this.MasterBars = null;
	this._currentMasterBar = null;
	var this1 = [];
	this.MasterBars = this1;
	var this2 = {}
	this.MasterBarLookup = this2;
};
alphaTab.audio.model.MidiTickLookup.__name__ = true;
alphaTab.audio.model.MidiTickLookup.prototype = {
	Finish: function() {
		var i = 0;
		while(i < this.MasterBars.length) {
			this.MasterBars[i].Finish();
			++i;
		}
	}
	,FindBeat: function(tracks,tick) {
		var masterBar = this.FindMasterBar(tick);
		if(masterBar == null) {
			return null;
		}
		var this1 = {}
		var trackLookup = this1;
		var track = HxOverrides.iter(tracks);
		while(track.hasNext()) {
			var track1 = track.next();
			trackLookup[track1.Index] = true;
		}
		var beat = null;
		var index = 0;
		var beats = masterBar.Beats;
		var b = 0;
		while(b < beats.length) {
			var currentBeat = beats[b];
			if(!trackLookup.hasOwnProperty(currentBeat.Beat.Voice.Bar.Staff.Track.Index)) {
				++b;
				continue;
			}
			if(currentBeat.Start <= tick && tick < currentBeat.End) {
				if(beat == null || beat.Start < currentBeat.Start) {
					beat = beats[b];
					index = b;
				}
			} else if(currentBeat.End > tick) {
				break;
			}
			++b;
		}
		if(beat == null) {
			return null;
		}
		var nextBeat = null;
		var b1 = index + 1;
		while(b1 < beats.length) {
			var currentBeat1 = beats[b1];
			if(trackLookup.hasOwnProperty(currentBeat1.Beat.Voice.Bar.Staff.Track.Index)) {
				nextBeat = currentBeat1;
				break;
			}
			++b1;
		}
		if(nextBeat == null && masterBar.MasterBar.NextMasterBar != null) {
			var nextBar = this.GetMasterBar(masterBar.MasterBar.NextMasterBar);
			beats = nextBar.Beats;
			var b2 = 0;
			while(b2 < beats.length) {
				var currentBeat2 = beats[b2];
				if(trackLookup.hasOwnProperty(currentBeat2.Beat.Voice.Bar.Staff.Track.Index)) {
					nextBeat = currentBeat2;
					break;
				}
				++b2;
			}
		}
		var result = new alphaTab.audio.model.MidiTickLookupFindBeatResult();
		result.CurrentBeat = beat.Beat;
		result.NextBeat = nextBeat == null ? null : nextBeat.Beat;
		result.Duration = alphaTab.audio.MidiUtils.TicksToMillis(beat.End - beat.Start,masterBar.Tempo);
		return result;
	}
	,FindMasterBar: function(tick) {
		var bars = this.MasterBars;
		var bottom = 0;
		var top = bars.length - 1;
		while(bottom <= top) {
			var middle = (top + bottom) / 2 | 0;
			var bar = bars[middle];
			if(tick >= bar.Start && tick < bar.End) {
				return bar;
			}
			if(tick < bar.Start) {
				top = middle - 1;
			} else {
				bottom = middle + 1;
			}
		}
		return null;
	}
	,GetMasterBar: function(bar) {
		if(!this.MasterBarLookup.hasOwnProperty(bar.Index)) {
			var _tmp = new alphaTab.audio.model.MasterBarTickLookup();
			_tmp.Start = 0;
			_tmp.End = 0;
			var this1 = [];
			_tmp.Beats = this1;
			_tmp.MasterBar = bar;
			return _tmp;
		}
		return this.MasterBarLookup[bar.Index];
	}
	,GetMasterBarStart: function(bar) {
		if(!this.MasterBarLookup.hasOwnProperty(bar.Index)) {
			return 0;
		}
		return this.MasterBarLookup[bar.Index].Start;
	}
	,AddMasterBar: function(masterBar) {
		this.MasterBars.push(masterBar);
		this._currentMasterBar = masterBar;
		if(!this.MasterBarLookup.hasOwnProperty(masterBar.MasterBar.Index)) {
			this.MasterBarLookup[masterBar.MasterBar.Index] = masterBar;
		}
	}
	,AddBeat: function(beat) {
		this._currentMasterBar.AddBeat(beat);
	}
	,__class__: alphaTab.audio.model.MidiTickLookup
};
alphaTab.audio.model.MidiTickLookupFindBeatResult = $hx_exports["alphaTab"]["audio"]["model"]["MidiTickLookupFindBeatResult"] = function() {
};
alphaTab.audio.model.MidiTickLookupFindBeatResult.__name__ = true;
alphaTab.audio.model.MidiTickLookupFindBeatResult.prototype = {
	__class__: alphaTab.audio.model.MidiTickLookupFindBeatResult
};
alphaTab.audio.model.MidiTrack = $hx_exports["alphaTab"]["audio"]["model"]["MidiTrack"] = function() {
};
alphaTab.audio.model.MidiTrack.__name__ = true;
alphaTab.audio.model.MidiTrack.prototype = {
	AddEvent: function(e) {
		e.Track = this;
		if(this.FirstEvent == null) {
			this.FirstEvent = e;
			this.LastEvent = e;
		} else if(this.LastEvent.Tick <= e.Tick) {
			this.LastEvent.NextEvent = e;
			e.PreviousEvent = this.LastEvent;
			this.LastEvent = e;
		} else if(this.FirstEvent.Tick > e.Tick) {
			e.NextEvent = this.FirstEvent;
			this.FirstEvent.PreviousEvent = e;
			this.FirstEvent = e;
		} else {
			var firstDelta = e.Tick - this.FirstEvent.Tick;
			var lastDelta = this.LastEvent.Tick - e.Tick;
			if(firstDelta < lastDelta) {
				var previous = this.FirstEvent;
				while(previous != null && previous.NextEvent != null && previous.NextEvent.Tick <= e.Tick) previous = previous.NextEvent;
				if(previous == null) {
					return;
				}
				var next = previous.NextEvent;
				previous.NextEvent = e;
				e.PreviousEvent = previous;
				e.NextEvent = next;
				if(next != null) {
					next.PreviousEvent = e;
				}
			} else {
				var next1 = this.LastEvent;
				while(next1 != null && next1.PreviousEvent != null && next1.PreviousEvent.Tick > e.Tick) next1 = next1.PreviousEvent;
				if(next1 == null) {
					return;
				}
				var previous1 = next1.PreviousEvent;
				next1.PreviousEvent = e;
				e.NextEvent = next1;
				e.PreviousEvent = previous1;
				if(previous1 != null) {
					previous1.NextEvent = e;
				} else {
					this.FirstEvent = e;
				}
			}
		}
	}
	,WriteTo: function(s) {
		var trackData = alphaTab.io.ByteBuffer.Empty();
		var current = this.FirstEvent;
		var count = 0;
		while(current != null) {
			current.WriteTo(trackData);
			current = current.NextEvent;
			++count;
		}
		var b = new Uint8Array([77,84,114,107]);
		s.Write(b,0,b.length);
		var data = trackData.ToArray();
		var l = data.length;
		b = new Uint8Array([system.Convert.ToUInt8(l >> 24 & 255),system.Convert.ToUInt8(l >> 16 & 255),system.Convert.ToUInt8(l >> 8 & 255),system.Convert.ToUInt8(l & 255)]);
		s.Write(b,0,b.length);
		s.Write(data,0,data.length);
	}
	,__class__: alphaTab.audio.model.MidiTrack
};
alphaTab.collections = {};
alphaTab.collections._FastDictionary = {};
alphaTab.collections._FastDictionary.FastDictionary_Impl_ = $hx_exports["alphaTab"]["collections"]["_FastDictionary"]["FastDictionary_Impl_"] = {};
alphaTab.collections._FastDictionary.FastDictionary_Impl_.__name__ = true;
alphaTab.collections._FastDictionary.FastDictionary_Impl_._new = function() {
	var this1 = {}
	return this1;
};
alphaTab.collections._FastDictionary.FastDictionary_Impl_.get_Item = function(this1,index) {
	return this1[index];
};
alphaTab.collections._FastDictionary.FastDictionary_Impl_.set_Item = function(this1,index,value) {
	return this1[index] = value;
};
alphaTab.collections._FastDictionary.FastDictionary_Impl_.get_Count = function(this1) {
	return Object.keys(this1).length;
};
alphaTab.collections._FastDictionary.FastDictionary_Impl_.GetEnumerator = function(this1) {
	return Object.keys(this1);
};
alphaTab.collections._FastDictionary.FastDictionary_Impl_.Remove = function(this1,key) {
	delete this1[key];
};
alphaTab.collections._FastDictionary.FastDictionary_Impl_.ContainsKey = function(this1,key) {
	return this1.hasOwnProperty(key);
};
alphaTab.collections._FastList = {};
alphaTab.collections._FastList.FastList_Impl_ = $hx_exports["alphaTab"]["collections"]["_FastList"]["FastList_Impl_"] = {};
alphaTab.collections._FastList.FastList_Impl_.__name__ = true;
alphaTab.collections._FastList.FastList_Impl_._new = function() {
	var this1 = [];
	return this1;
};
alphaTab.collections._FastList.FastList_Impl_.get_Count = function(this1) {
	return this1.length;
};
alphaTab.collections._FastList.FastList_Impl_.get_Item = function(this1,index) {
	return this1[index];
};
alphaTab.collections._FastList.FastList_Impl_.set_Item = function(this1,index,value) {
	return this1[index] = value;
};
alphaTab.collections._FastList.FastList_Impl_.Add = function(this1,item) {
	this1.push(item);
};
alphaTab.collections._FastList.FastList_Impl_.Sort = function(this1,comparison) {
	this1.sort(function(a,b) {
		return comparison(a,b);
	});
};
alphaTab.collections._FastList.FastList_Impl_.Clone = function(this1) {
	return this1.slice(0);
};
alphaTab.collections._FastList.FastList_Impl_.RemoveAt = function(this1,index) {
	if(index != -1) {
		this1.splice(index,1);
	}
};
alphaTab.collections._FastList.FastList_Impl_.ToArray = function(this1) {
	return this1;
};
alphaTab.collections._FastList.FastList_Impl_.GetEnumerator = function(this1) {
	return this1;
};
alphaTab.collections._FastList.FastList_Impl_.IndexOf = function(this1,item) {
	return this1.indexOf(item);
};
alphaTab.collections._FastList.FastList_Impl_.Reverse = function(this1) {
	this1.reverse();
};
alphaTab.collections._FastList.FastList_Impl_.ToEnumerable = function(this1) {
	return new system.collections.generic.IterableEnumerable(this1);
};
alphaTab.collections._StringBuilder = {};
alphaTab.collections._StringBuilder.StringBuilder_Impl_ = $hx_exports["alphaTab"]["collections"]["_StringBuilder"]["StringBuilder_Impl_"] = {};
alphaTab.collections._StringBuilder.StringBuilder_Impl_.__name__ = true;
alphaTab.collections._StringBuilder.StringBuilder_Impl_._new = function() {
	var this1 = "";
	return this1;
};
alphaTab.collections._StringBuilder.StringBuilder_Impl_.Append = function(this1,s) {
	this1 += Std.string(s);
};
alphaTab.collections._StringBuilder.StringBuilder_Impl_.AppendChar = function(this1,i) {
	this1 += String.fromCharCode(i);
};
alphaTab.collections._StringBuilder.StringBuilder_Impl_.AppendLine = function(this1,s) {
	if(s == null) {
		s = "";
	}
	this1 = this1 + (s + "\r\n");
};
alphaTab.collections._StringBuilder.StringBuilder_Impl_.ToString = function(this1) {
	return this1;
};
alphaTab.exporter = {};
alphaTab.exporter.AlphaTexExporter = $hx_exports["alphaTab"]["exporter"]["AlphaTexExporter"] = function() {
	this._builder = null;
	var this1 = "";
	this._builder = this1;
};
alphaTab.exporter.AlphaTexExporter.__name__ = true;
alphaTab.exporter.AlphaTexExporter.prototype = {
	Export: function(track) {
		this.Score(track);
	}
	,Score: function(track) {
		this.MetaData(track);
		this.Bars(track);
	}
	,ToTex: function() {
		return this._builder;
	}
	,MetaData: function(track) {
		var score = track.Score;
		this.StringMetaData("title",score.Title);
		this.StringMetaData("subtitle",score.SubTitle);
		this.StringMetaData("artist",score.Artist);
		this.StringMetaData("album",score.Album);
		this.StringMetaData("words",score.Words);
		this.StringMetaData("music",score.Music);
		this.StringMetaData("copyright",score.Copyright);
		this._builder += Std.string("\\tempo ");
		this._builder += Std.string(score.Tempo);
		this._builder = this._builder + ("" + "\r\n");
		if(track.Capo > 0) {
			this._builder += Std.string("\\capo ");
			this._builder += Std.string(track.Capo);
			this._builder = this._builder + ("" + "\r\n");
		}
		this._builder += Std.string("\\tuning");
		var i = 0;
		while(i < track.Tuning.length) {
			this._builder += Std.string(" ");
			var s = alphaTab.model.Tuning.GetTextForTuning(track.Tuning[i],true);
			this._builder += Std.string(s);
			++i;
		}
		this._builder += Std.string("\\instrument ");
		this._builder += Std.string(track.PlaybackInfo.Program);
		this._builder = this._builder + ("" + "\r\n");
		this._builder += Std.string(".");
		this._builder = this._builder + ("" + "\r\n");
	}
	,StringMetaData: function(key,value) {
		if(!(value == null || StringTools.trim(value).length == 0)) {
			this._builder += Std.string("\\");
			this._builder += Std.string(key);
			this._builder += Std.string(" \"");
			var s = StringTools.replace(value,"\"","\\\"");
			this._builder += Std.string(s);
			this._builder += Std.string("\"");
			this._builder = this._builder + ("" + "\r\n");
		}
	}
	,Bars: function(track) {
		var i = 0;
		while(i < 1) {
			var j = 0;
			while(j < track.Staves[i].Bars.length) {
				if(i > 0) {
					this._builder += Std.string(" |");
					this._builder = this._builder + ("" + "\r\n");
				}
				this.Bar(track.Staves[i].Bars[j]);
				++j;
			}
			++i;
		}
	}
	,Bar: function(bar) {
		this.BarMeta(bar);
		this.Voice(bar.Voices[0]);
	}
	,Voice: function(voice) {
		var i = 0;
		while(i < voice.Beats.length) {
			this.Beat(voice.Beats[i]);
			++i;
		}
	}
	,Beat: function(beat) {
		if(beat.get_IsRest()) {
			this._builder += Std.string("r");
		} else {
			if(beat.Notes.length > 1) {
				this._builder += Std.string("(");
			}
			var i = 0;
			while(i < beat.Notes.length) {
				this.Note(beat.Notes[i]);
				++i;
			}
			if(beat.Notes.length > 1) {
				this._builder += Std.string(")");
			}
		}
		this._builder += Std.string(".");
		this._builder += Std.string(beat.Duration);
		this._builder += Std.string(" ");
		this.BeatEffects(beat);
	}
	,Note: function(note) {
		if(note.IsDead) {
			this._builder += Std.string("x");
		} else if(note.IsTieDestination) {
			this._builder += Std.string("-");
		} else {
			this._builder += Std.string(note.Fret);
		}
		this._builder += Std.string(".");
		this._builder += Std.string(note.Beat.Voice.Bar.Staff.Track.Tuning.length - note.String + 1);
		this._builder += Std.string(" ");
		this.NoteEffects(note);
	}
	,NoteEffects: function(note) {
		var hasEffectOpen = false;
		if(note.get_HasBend()) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("be (");
			var i = 0;
			while(i < note.BendPoints.length) {
				this._builder += Std.string(note.BendPoints[i].Offset);
				this._builder += Std.string(" ");
				this._builder += Std.string(note.BendPoints[i].Value);
				this._builder += Std.string(" ");
				++i;
			}
			this._builder += Std.string(")");
		}
		var _g = note.HarmonicType;
		switch(_g) {
		case 1:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("nh ");
			break;
		case 2:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("ah ");
			break;
		case 3:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("ph ");
			break;
		case 4:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("th ");
			break;
		case 5:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("sh ");
			break;
		default:
		}
		if(note.get_IsTrill()) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("tr ");
			var s = note.get_TrillFret();
			this._builder += Std.string(s);
			this._builder += Std.string(" ");
			var _g1 = note.TrillSpeed;
			switch(_g1) {
			case 16:
				this._builder += Std.string("16 ");
				break;
			case 32:
				this._builder += Std.string("32 ");
				break;
			case 64:
				this._builder += Std.string("64 ");
				break;
			default:
			}
		}
		if(note.Vibrato != 0) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("v ");
		}
		if(note.SlideType == 2) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("sl ");
		}
		if(note.SlideType == 1) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("ss ");
		}
		if(note.IsHammerPullOrigin) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("h ");
		}
		if(note.IsGhost) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("g ");
		}
		if(note.Accentuated == 1) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("ac ");
		} else if(note.Accentuated == 2) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("hac ");
		}
		if(note.IsPalmMute) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("pm ");
		}
		if(note.IsStaccato) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("st ");
		}
		if(note.IsLetRing) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("lr ");
		}
		var _g11 = note.LeftHandFinger;
		switch(_g11) {
		case 0:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("1 ");
			break;
		case 1:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("2 ");
			break;
		case 2:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("3 ");
			break;
		case 3:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("4 ");
			break;
		case 4:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("5 ");
			break;
		default:
		}
		var _g2 = note.RightHandFinger;
		switch(_g2) {
		case 0:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("1 ");
			break;
		case 1:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("2 ");
			break;
		case 2:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("3 ");
			break;
		case 3:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("4 ");
			break;
		case 4:
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("5 ");
			break;
		default:
		}
		this.EffectClose(hasEffectOpen);
	}
	,EffectOpen: function(hasBeatEffectOpen) {
		if(!hasBeatEffectOpen) {
			this._builder += Std.string("{");
		}
		return true;
	}
	,EffectClose: function(hasBeatEffectOpen) {
		if(hasBeatEffectOpen) {
			this._builder += Std.string("}");
		}
	}
	,BeatEffects: function(beat) {
		var hasEffectOpen = false;
		if(beat.FadeIn) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("f ");
		}
		var _g = beat.GraceType;
		switch(_g) {
		case 1:
			this._builder += Std.string("gr ob ");
			break;
		case 2:
			this._builder += Std.string("gr ");
			break;
		default:
		}
		if(beat.Vibrato != 0) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("v ");
		}
		if(beat.Slap) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("s ");
		}
		if(beat.Pop) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("p ");
		}
		if(beat.Dots == 2) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("dd ");
		} else if(beat.Dots == 1) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("d ");
		}
		if(beat.PickStroke == 1) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("su ");
		} else if(beat.PickStroke == 2) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("sd ");
		}
		if(beat.get_HasTuplet()) {
			var tupletValue = 0;
			if(beat.TupletDenominator == 3 && beat.TupletNumerator == 2) {
				tupletValue = 3;
			} else if(beat.TupletDenominator == 5 && beat.TupletNumerator == 4) {
				tupletValue = 5;
			} else if(beat.TupletDenominator == 6 && beat.TupletNumerator == 4) {
				tupletValue = 6;
			} else if(beat.TupletDenominator == 7 && beat.TupletNumerator == 4) {
				tupletValue = 7;
			} else if(beat.TupletDenominator == 9 && beat.TupletNumerator == 8) {
				tupletValue = 9;
			} else if(beat.TupletDenominator == 10 && beat.TupletNumerator == 8) {
				tupletValue = 10;
			} else if(beat.TupletDenominator == 11 && beat.TupletNumerator == 8) {
				tupletValue = 11;
			} else if(beat.TupletDenominator == 12 && beat.TupletNumerator == 8) {
				tupletValue = 12;
			}
			if(tupletValue != 0) {
				hasEffectOpen = this.EffectOpen(hasEffectOpen);
				this._builder += Std.string("tu ");
				this._builder += Std.string(tupletValue);
				this._builder += Std.string(" ");
			}
		}
		if(beat.get_HasWhammyBar()) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("tbe (");
			var i = 0;
			while(i < beat.WhammyBarPoints.length) {
				this._builder += Std.string(beat.WhammyBarPoints[i].Offset);
				this._builder += Std.string(" ");
				this._builder += Std.string(beat.WhammyBarPoints[i].Value);
				this._builder += Std.string(" ");
				++i;
			}
			this._builder += Std.string(")");
		}
		if(beat.get_IsTremolo()) {
			hasEffectOpen = this.EffectOpen(hasEffectOpen);
			this._builder += Std.string("tp ");
			if(beat.TremoloSpeed == 8) {
				this._builder += Std.string("8 ");
			} else if(beat.TremoloSpeed == 16) {
				this._builder += Std.string("16 ");
			} else if(beat.TremoloSpeed == 32) {
				this._builder += Std.string("32 ");
			} else {
				this._builder += Std.string("8 ");
			}
		}
		this.EffectClose(hasEffectOpen);
	}
	,BarMeta: function(bar) {
		var masterBar = bar.get_MasterBar();
		if(masterBar.Index > 0) {
			var previousMasterBar = masterBar.PreviousMasterBar;
			var previousBar = bar.PreviousBar;
			if(previousMasterBar.TimeSignatureDenominator != masterBar.TimeSignatureDenominator || previousMasterBar.TimeSignatureNumerator != masterBar.TimeSignatureNumerator) {
				this._builder += Std.string("\\ts ");
				this._builder += Std.string(masterBar.TimeSignatureNumerator);
				this._builder += Std.string(" ");
				this._builder += Std.string(masterBar.TimeSignatureDenominator);
				this._builder = this._builder + ("" + "\r\n");
			}
			if(previousMasterBar.KeySignature != masterBar.KeySignature) {
				this._builder += Std.string("\\ks ");
				var _g = masterBar.KeySignature;
				switch(_g) {
				case -7:
					this._builder += Std.string("cb");
					break;
				case -6:
					this._builder += Std.string("gb");
					break;
				case -5:
					this._builder += Std.string("db");
					break;
				case -4:
					this._builder += Std.string("ab");
					break;
				case -3:
					this._builder += Std.string("eb");
					break;
				case -2:
					this._builder += Std.string("bb");
					break;
				case -1:
					this._builder += Std.string("f");
					break;
				case 0:
					this._builder += Std.string("c");
					break;
				case 1:
					this._builder += Std.string("g");
					break;
				case 2:
					this._builder += Std.string("d");
					break;
				case 3:
					this._builder += Std.string("a");
					break;
				case 4:
					this._builder += Std.string("e");
					break;
				case 5:
					this._builder += Std.string("b");
					break;
				case 6:
					this._builder += Std.string("f#");
					break;
				case 7:
					this._builder += Std.string("c#");
					break;
				default:
				}
				this._builder = this._builder + ("" + "\r\n");
			}
			if(bar.Clef != previousBar.Clef) {
				this._builder += Std.string("\\clef ");
				var _g1 = bar.Clef;
				switch(_g1) {
				case 0:
					this._builder += Std.string("n");
					break;
				case 1:
					this._builder += Std.string("c3");
					break;
				case 2:
					this._builder += Std.string("c4");
					break;
				case 3:
					this._builder += Std.string("f4");
					break;
				case 4:
					this._builder += Std.string("g2");
					break;
				default:
				}
				this._builder = this._builder + ("" + "\r\n");
			}
			if(masterBar.TempoAutomation != null) {
				this._builder += Std.string("\\tempo ");
				this._builder += Std.string(masterBar.TempoAutomation.Value);
				this._builder = this._builder + ("" + "\r\n");
			}
		}
		if(masterBar.IsRepeatStart) {
			this._builder += Std.string("\\ro ");
			this._builder = this._builder + ("" + "\r\n");
		}
		if(masterBar.get_IsRepeatEnd()) {
			this._builder += Std.string("\\rc ");
			this._builder += Std.string(masterBar.RepeatCount + 1);
			this._builder = this._builder + ("" + "\r\n");
		}
	}
	,__class__: alphaTab.exporter.AlphaTexExporter
};
alphaTab.importer = {};
alphaTab.importer.AlphaTexException = $hx_exports["alphaTab"]["importer"]["AlphaTexException"] = function() {
	alphaTab.AlphaTabException.call(this);
};
alphaTab.importer.AlphaTexException.__name__ = true;
alphaTab.importer.AlphaTexException.__super__ = alphaTab.AlphaTabException;
alphaTab.importer.AlphaTexException.prototype = $extend(alphaTab.AlphaTabException.prototype,{
	AlphaTexException: function(position,nonTerm,expected,symbol,symbolData) {
		this.AlphaTabException("");
		this.Position = 0;
		this.NonTerm = null;
		this.Expected = null;
		this.Symbol = null;
		this.SymbolData = null;
		this.Position = position;
		this.NonTerm = nonTerm;
		this.Expected = expected;
		this.Symbol = symbol;
		this.SymbolData = symbolData;
		if(this.SymbolData == null) {
			this.Description = "MalFormed AlphaTex: @" + this.Position + ": Error on block " + this.NonTerm + ", expected a " + alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.toString(this.Expected) + " found a " + alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.toString(this.Symbol);
		} else {
			this.Description = "MalFormed AlphaTex: @" + this.Position + ": Error on block " + this.NonTerm + ", invalid value: " + this.SymbolData;
		}
		return this;
	}
	,__class__: alphaTab.importer.AlphaTexException
});
alphaTab.importer.ScoreImporter = $hx_exports["alphaTab"]["importer"]["ScoreImporter"] = function() {
};
alphaTab.importer.ScoreImporter.__name__ = true;
alphaTab.importer.ScoreImporter.BuildImporters = function() {
	return [new alphaTab.importer.Gp3To5Importer(),new alphaTab.importer.GpxImporter(),new alphaTab.importer.AlphaTexImporter(),new alphaTab.importer.MusicXmlImporter()];
};
alphaTab.importer.ScoreImporter.prototype = {
	Init: function(data) {
		this.Data = data;
	}
	,get_Name: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,ReadScore: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,__class__: alphaTab.importer.ScoreImporter
};
alphaTab.importer.AlphaTexImporter = $hx_exports["alphaTab"]["importer"]["AlphaTexImporter"] = function() {
	alphaTab.importer.ScoreImporter.call(this);
};
alphaTab.importer.AlphaTexImporter.__name__ = true;
alphaTab.importer.AlphaTexImporter.IsLetter = function(code) {
	if(!alphaTab.importer.AlphaTexImporter.IsTerminal(code)) {
		if(!(code >= 33 && code <= 47 || code >= 58 && code <= 126)) {
			return code > 128;
		} else {
			return true;
		}
	} else {
		return false;
	}
};
alphaTab.importer.AlphaTexImporter.IsTerminal = function(ch) {
	if(!(ch == 46 || ch == 123 || ch == 125 || ch == 91 || ch == 93 || ch == 40 || ch == 41 || ch == 124 || ch == 39 || ch == 34)) {
		return ch == 92;
	} else {
		return true;
	}
};
alphaTab.importer.AlphaTexImporter.__super__ = alphaTab.importer.ScoreImporter;
alphaTab.importer.AlphaTexImporter.prototype = $extend(alphaTab.importer.ScoreImporter.prototype,{
	get_Name: function() {
		return "AlphaTex";
	}
	,ReadScore: function() {
		try {
			this.CreateDefaultScore();
			this._curChPos = 0;
			this._currentDuration = 4;
			var this1 = [];
			this._lyrics = this1;
			this.NextChar();
			this.NewSy();
			this.Score();
			this._score.Finish();
			this._track.ApplyLyrics(this._lyrics);
			return this._score;
		} catch( e ) {
			if (e instanceof js._Boot.HaxeError) e = e.val;
			if( js.Boot.__instanceof(e,alphaTab.importer.AlphaTexException) ) {
				throw new js._Boot.HaxeError(new alphaTab.importer.UnsupportedFormatException().UnsupportedFormatException(e.Description));
			} else throw(e);
		}
	}
	,Error: function(nonterm,expected,symbolError) {
		if(symbolError == null) {
			symbolError = true;
		}
		var e;
		if(symbolError) {
			e = new alphaTab.importer.AlphaTexException().AlphaTexException(this._curChPos,nonterm,expected,this._sy,null);
		} else {
			e = new alphaTab.importer.AlphaTexException().AlphaTexException(this._curChPos,nonterm,expected,expected,this._syData);
		}
		alphaTab.util.Logger.Error(this.get_Name(),e.Description,null);
		throw new js._Boot.HaxeError(e);
	}
	,CreateDefaultScore: function() {
		this._score = new alphaTab.model.Score();
		this._score.Tempo = 120;
		this._score.TempoLabel = "";
		this._track = new alphaTab.model.Track(1);
		this._track.PlaybackInfo.Program = 25;
		this._track.PlaybackInfo.PrimaryChannel = alphaTab.importer.AlphaTexImporter.TrackChannels[0];
		this._track.PlaybackInfo.SecondaryChannel = alphaTab.importer.AlphaTexImporter.TrackChannels[1];
		this._track.Tuning = alphaTab.model.Tuning.GetDefaultTuningFor(6).Tunings;
		this._score.AddTrack(this._track);
	}
	,ParseClefFromString: function(str) {
		var _g = str.toLowerCase();
		switch(_g) {
		case "c3":case "tenor":
			return 1;
		case "alto":case "c4":
			return 2;
		case "bass":case "f4":
			return 3;
		case "n":case "neutral":
			return 0;
		case "g2":case "treble":
			return 4;
		default:
			return 4;
		}
	}
	,ParseClefFromInt: function(i) {
		switch(i) {
		case 43:
			return 4;
		case 48:
			return 1;
		case 60:
			return 2;
		case 65:
			return 3;
		default:
			return 4;
		}
	}
	,ParseKeySignature: function(str) {
		var _g = str.toLowerCase();
		switch(_g) {
		case "a":
			return 3;
		case "ab":
			return -4;
		case "b":
			return 5;
		case "bb":
			return -2;
		case "c":
			return 0;
		case "c#":
			return 7;
		case "cb":
			return -7;
		case "d":
			return 2;
		case "db":
			return -5;
		case "e":
			return 4;
		case "eb":
			return -3;
		case "f":
			return -1;
		case "f#":
			return 6;
		case "g":
			return 1;
		case "gb":
			return -6;
		default:
			return 0;
		}
	}
	,NextChar: function() {
		var b = this.Data.ReadByte();
		if(b == -1) {
			this._ch = 0;
		} else {
			this._ch = b;
			this._curChPos++;
		}
	}
	,NewSy: function() {
		this._sy = 0;
		while(true) {
			if(this._ch == 0) {
				this._sy = 1;
			} else if(alphaTab.platform.Platform.IsWhiteSpace(this._ch)) {
				this.NextChar();
			} else if(this._ch == 47) {
				this.NextChar();
				if(this._ch == 47) {
					while(this._ch != 13 && this._ch != 10 && this._ch != 0) this.NextChar();
				} else if(this._ch == 42) {
					while(this._ch != 0) if(this._ch == 42) {
						this.NextChar();
						if(this._ch == 47) {
							this.NextChar();
							break;
						}
					} else {
						this.NextChar();
					}
				} else {
					this.Error("symbol",5,false);
				}
			} else if(this._ch == 34 || this._ch == 39) {
				var startChar = this._ch;
				this.NextChar();
				var this1 = "";
				var s = this1;
				this._sy = 5;
				while(this._ch != startChar && this._ch != 0) {
					s += String.fromCharCode(this._ch);
					this.NextChar();
				}
				this._syData = s;
				this.NextChar();
			} else if(this._ch == 45) {
				if(this._allowNegatives && this.IsDigit(this._ch)) {
					var number = this.ReadNumber();
					this._sy = 2;
					this._syData = number;
				} else {
					this._sy = 5;
					this._syData = this.ReadName();
				}
			} else if(this._ch == 46) {
				this._sy = 4;
				this.NextChar();
			} else if(this._ch == 58) {
				this._sy = 3;
				this.NextChar();
			} else if(this._ch == 40) {
				this._sy = 7;
				this.NextChar();
			} else if(this._ch == 92) {
				this.NextChar();
				var name = this.ReadName();
				this._sy = 12;
				this._syData = name;
			} else if(this._ch == 41) {
				this._sy = 8;
				this.NextChar();
			} else if(this._ch == 123) {
				this._sy = 9;
				this.NextChar();
			} else if(this._ch == 125) {
				this._sy = 10;
				this.NextChar();
			} else if(this._ch == 124) {
				this._sy = 11;
				this.NextChar();
			} else if(this._ch == 42) {
				this._sy = 13;
				this.NextChar();
			} else if(this.IsDigit(this._ch)) {
				var number1 = this.ReadNumber();
				this._sy = 2;
				this._syData = number1;
			} else if(alphaTab.importer.AlphaTexImporter.IsLetter(this._ch)) {
				var name1 = this.ReadName();
				var tuning = alphaTab.model.TuningParser.Parse(name1);
				if(tuning != null) {
					this._sy = 6;
					this._syData = tuning;
				} else {
					this._sy = 5;
					this._syData = name1;
				}
			} else {
				this.Error("symbol",5,false);
			}
			if(!(this._sy == 0)) {
				break;
			}
		}
	}
	,IsDigit: function(code) {
		if(!(code >= 48 && code <= 57)) {
			if(code == 45) {
				return this._allowNegatives;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	,ReadName: function() {
		var this1 = "";
		var str = this1;
		while(true) {
			str += String.fromCharCode(this._ch);
			this.NextChar();
			if(!(alphaTab.importer.AlphaTexImporter.IsLetter(this._ch) || this.IsDigit(this._ch) || this._ch == 35)) {
				break;
			}
		}
		return str;
	}
	,ReadNumber: function() {
		var this1 = "";
		var str = this1;
		while(true) {
			str += String.fromCharCode(this._ch);
			this.NextChar();
			if(!this.IsDigit(this._ch)) {
				break;
			}
		}
		return alphaTab.platform.Platform.ParseInt(str);
	}
	,Score: function() {
		this.MetaData();
		this.Bars();
	}
	,MetaData: function() {
		var anyMeta = false;
		while(this._sy == 12) {
			var syData = Std.string(this._syData).toLowerCase();
			if(syData == "title") {
				this.NewSy();
				if(this._sy == 5) {
					this._score.Title = Std.string(this._syData);
				} else {
					this.Error("title",5,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "subtitle") {
				this.NewSy();
				if(this._sy == 5) {
					this._score.SubTitle = Std.string(this._syData);
				} else {
					this.Error("subtitle",5,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "artist") {
				this.NewSy();
				if(this._sy == 5) {
					this._score.Artist = Std.string(this._syData);
				} else {
					this.Error("artist",5,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "album") {
				this.NewSy();
				if(this._sy == 5) {
					this._score.Album = Std.string(this._syData);
				} else {
					this.Error("album",5,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "words") {
				this.NewSy();
				if(this._sy == 5) {
					this._score.Words = Std.string(this._syData);
				} else {
					this.Error("words",5,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "music") {
				this.NewSy();
				if(this._sy == 5) {
					this._score.Music = Std.string(this._syData);
				} else {
					this.Error("music",5,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "copyright") {
				this.NewSy();
				if(this._sy == 5) {
					this._score.Copyright = Std.string(this._syData);
				} else {
					this.Error("copyright",5,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "tempo") {
				this.NewSy();
				if(this._sy == 2) {
					this._score.Tempo = this._syData;
				} else {
					this.Error("tempo",2,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "capo") {
				this.NewSy();
				if(this._sy == 2) {
					this._track.Capo = this._syData;
				} else {
					this.Error("capo",2,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "tuning") {
				this.NewSy();
				var _g = this._sy;
				switch(_g) {
				case 5:
					var text = Std.string(this._syData).toLowerCase();
					if(text == "piano" || text == "none" || text == "voice") {
						var this1 = new Int32Array(0);
						this._track.Tuning = this1;
					} else {
						this.Error("tuning",6,true);
					}
					this.NewSy();
					break;
				case 6:
					var this2 = [];
					var tuning = this2;
					while(true) {
						var t = this._syData;
						tuning.push(t.get_RealValue());
						this.NewSy();
						if(!(this._sy == 6)) {
							break;
						}
					}
					this._track.Tuning = new Int32Array(tuning);
					break;
				default:
					this.Error("tuning",6,true);
				}
				anyMeta = true;
			} else if(syData == "instrument") {
				this.NewSy();
				if(this._sy == 2) {
					var instrument = this._syData;
					if(instrument >= 0 && instrument <= 128) {
						this._track.PlaybackInfo.Program = this._syData;
					} else {
						this.Error("instrument",2,false);
					}
				} else if(this._sy == 5) {
					var instrumentName = Std.string(this._syData).toLowerCase();
					this._track.PlaybackInfo.Program = alphaTab.audio.GeneralMidi.GetValue(instrumentName);
				} else {
					this.Error("instrument",2,true);
				}
				this.NewSy();
				anyMeta = true;
			} else if(syData == "lyrics") {
				this.NewSy();
				var lyrics = new alphaTab.model.Lyrics();
				lyrics.StartBar = 0;
				lyrics.Text = "";
				if(this._sy == 2) {
					lyrics.StartBar = this._syData;
					this.NewSy();
				}
				if(this._sy == 5) {
					lyrics.Text = this._syData;
					this.NewSy();
				} else {
					this.Error("lyrics",5,true);
				}
				this._lyrics.push(lyrics);
				anyMeta = true;
			} else if(anyMeta) {
				this.Error("metaDataTags",5,false);
			} else {
				break;
			}
		}
		if(anyMeta) {
			if(this._sy != 4) {
				this.Error("song",4,true);
			}
			this.NewSy();
		} else if(this._sy == 4) {
			this.NewSy();
		}
	}
	,Bars: function() {
		this.Bar();
		while(this._sy != 1) {
			if(this._sy != 11) {
				this.Error("bar",11,true);
			}
			this.NewSy();
			this.Bar();
		}
	}
	,Bar: function() {
		var master = new alphaTab.model.MasterBar();
		this._score.AddMasterBar(master);
		var bar = new alphaTab.model.Bar();
		this._track.AddBarToStaff(0,bar);
		if(master.Index > 0) {
			master.KeySignature = master.PreviousMasterBar.KeySignature;
			master.TimeSignatureDenominator = master.PreviousMasterBar.TimeSignatureDenominator;
			master.TimeSignatureNumerator = master.PreviousMasterBar.TimeSignatureNumerator;
			bar.Clef = bar.PreviousBar.Clef;
		}
		this.BarMeta(bar);
		var voice = new alphaTab.model.Voice();
		bar.AddVoice(voice);
		while(this._sy != 11 && this._sy != 1) this.Beat(voice);
		if(voice.Beats.length == 0) {
			var emptyBeat = new alphaTab.model.Beat();
			emptyBeat.IsEmpty = true;
			voice.AddBeat(emptyBeat);
		}
	}
	,Beat: function(voice) {
		if(this._sy == 3) {
			this._allowNegatives = true;
			this.NewSy();
			this._allowNegatives = false;
			if(this._sy != 2) {
				this.Error("duration",2,true);
			}
			this._currentDuration = this.ParseDuration(this._syData);
			this.NewSy();
			return;
		}
		var beat = new alphaTab.model.Beat();
		voice.AddBeat(beat);
		if(voice.Bar.get_MasterBar().TempoAutomation != null && voice.Beats.length == 1) {
			beat.Automations.push(voice.Bar.get_MasterBar().TempoAutomation);
		}
		if(this._sy == 7) {
			this.NewSy();
			this.Note(beat);
			while(this._sy != 8 && this._sy != 1) this.Note(beat);
			if(this._sy != 8) {
				this.Error("note-list",8,true);
			}
			this.NewSy();
		} else if(this._sy == 5 && Std.string(this._syData).toLowerCase() == "r") {
			this.NewSy();
		} else {
			this.Note(beat);
		}
		if(this._sy == 4) {
			this._allowNegatives = true;
			this.NewSy();
			this._allowNegatives = false;
			if(this._sy != 2) {
				this.Error("duration",2,true);
			}
			this._currentDuration = this.ParseDuration(this._syData);
			this.NewSy();
		}
		beat.Duration = this._currentDuration;
		var beatRepeat = 1;
		if(this._sy == 13) {
			this.NewSy();
			if(this._sy != 2) {
				this.Error("multiplier",2,true);
			} else {
				beatRepeat = this._syData;
			}
			this.NewSy();
		}
		this.BeatEffects(beat);
		var i = 0;
		while(i < beatRepeat - 1) {
			voice.AddBeat(beat.Clone());
			++i;
		}
	}
	,BeatEffects: function(beat) {
		if(this._sy != 9) {
			return;
		}
		this.NewSy();
		while(this._sy == 5) {
			this._syData = Std.string(this._syData).toLowerCase();
			if(!this.ApplyBeatEffect(beat)) {
				this.Error("beat-effects",5,false);
			}
		}
		if(this._sy != 10) {
			this.Error("beat-effects",10,true);
		}
		this.NewSy();
	}
	,ApplyBeatEffect: function(beat) {
		var syData = Std.string(this._syData).toLowerCase();
		if(syData == "f") {
			beat.FadeIn = true;
			this.NewSy();
			return true;
		}
		if(syData == "v") {
			beat.Vibrato = 1;
			this.NewSy();
			return true;
		}
		if(syData == "s") {
			beat.Slap = true;
			this.NewSy();
			return true;
		}
		if(syData == "p") {
			beat.Pop = true;
			this.NewSy();
			return true;
		}
		if(syData == "dd") {
			beat.Dots = 2;
			this.NewSy();
			return true;
		}
		if(syData == "d") {
			beat.Dots = 1;
			this.NewSy();
			return true;
		}
		if(syData == "su") {
			beat.PickStroke = 1;
			this.NewSy();
			return true;
		}
		if(syData == "sd") {
			beat.PickStroke = 2;
			this.NewSy();
			return true;
		}
		if(syData == "tu") {
			this.NewSy();
			if(this._sy != 2) {
				this.Error("tuplet",2,true);
				return false;
			}
			var tuplet = this._syData;
			switch(tuplet) {
			case 3:
				beat.TupletNumerator = 3;
				beat.TupletDenominator = 2;
				break;
			case 5:
				beat.TupletNumerator = 5;
				beat.TupletDenominator = 4;
				break;
			case 6:
				beat.TupletNumerator = 6;
				beat.TupletDenominator = 4;
				break;
			case 7:
				beat.TupletNumerator = 7;
				beat.TupletDenominator = 4;
				break;
			case 9:
				beat.TupletNumerator = 9;
				beat.TupletDenominator = 8;
				break;
			case 10:
				beat.TupletNumerator = 10;
				beat.TupletDenominator = 8;
				break;
			case 11:
				beat.TupletNumerator = 11;
				beat.TupletDenominator = 8;
				break;
			case 12:
				beat.TupletNumerator = 12;
				beat.TupletNumerator = 8;
				beat.TupletDenominator = 8;
				break;
			default:
			}
			this.NewSy();
			return true;
		}
		if(syData == "tb" || syData == "tbe") {
			var exact = syData == "tbe";
			this.NewSy();
			if(this._sy != 7) {
				this.Error("tremolobar-effect",7,true);
				return false;
			}
			this._allowNegatives = true;
			this.NewSy();
			while(this._sy != 8 && this._sy != 1) {
				var offset;
				var value;
				if(exact) {
					if(this._sy != 2) {
						this.Error("tremolobar-effect",2,true);
						return false;
					}
					offset = this._syData;
					this.NewSy();
					if(this._sy != 2) {
						this.Error("tremolobar-effect",2,true);
						return false;
					}
					value = this._syData;
				} else {
					if(this._sy != 2) {
						this.Error("tremolobar-effect",2,true);
						return false;
					}
					offset = 0;
					value = this._syData;
				}
				beat.AddWhammyBarPoint(new alphaTab.model.BendPoint(offset,value));
				this.NewSy();
			}
			while(beat.WhammyBarPoints.length > 60) beat.RemoveWhammyBarPoint(beat.WhammyBarPoints.length - 1);
			if(!exact) {
				var count = beat.WhammyBarPoints.length;
				var step = 60 / count | 0;
				var i = 0;
				while(i < count) {
					beat.WhammyBarPoints[i].Offset = Math.min(60,i * step);
					++i;
				}
			} else {
				var comparison = function(a,b) {
					return a.Offset - b.Offset;
				};
				beat.WhammyBarPoints.sort(function(a1,b1) {
					return comparison(a1,b1);
				});
			}
			this._allowNegatives = false;
			if(this._sy != 8) {
				this.Error("tremolobar-effect",8,true);
				return false;
			}
			this.NewSy();
			return true;
		}
		if(syData == "gr") {
			this.NewSy();
			if(Std.string(this._syData).toLowerCase() == "ob") {
				beat.GraceType = 1;
				this.NewSy();
			} else {
				beat.GraceType = 2;
			}
			return true;
		}
		if(syData == "tp") {
			this.NewSy();
			var duration = 8;
			if(this._sy == 2) {
				var _g = this._syData;
				switch(_g) {
				case 8:
					duration = 8;
					break;
				case 16:
					duration = 16;
					break;
				case 32:
					duration = 32;
					break;
				default:
					duration = 8;
				}
				this.NewSy();
			}
			beat.TremoloSpeed = duration;
			return true;
		}
		return false;
	}
	,Note: function(beat) {
		var isDead = Std.string(this._syData) == "x";
		var isTie = Std.string(this._syData) == "-";
		var fret = -1;
		var octave = -1;
		var tone = -1;
		var _g = this._sy;
		switch(_g) {
		case 2:
			fret = this._syData;
			break;
		case 5:
			if(isTie || isDead) {
				fret = 0;
			} else {
				this.Error("note-fret",2,true);
			}
			break;
		case 6:
			var tuning = this._syData;
			octave = tuning.Octave;
			tone = tuning.NoteValue;
			break;
		default:
			this.Error("note-fret",2,true);
		}
		this.NewSy();
		var isFretted = octave == -1 && this._track.Tuning.length > 0;
		var string = -1;
		if(isFretted) {
			if(this._sy != 4) {
				this.Error("note",4,true);
			}
			this.NewSy();
			if(this._sy != 2) {
				this.Error("note-string",2,true);
			}
			string = this._syData;
			if(string < 1 || string > this._track.Tuning.length) {
				this.Error("note-string",2,false);
			}
			this.NewSy();
		}
		var note = new alphaTab.model.Note();
		beat.AddNote(note);
		if(isFretted) {
			note.String = this._track.Tuning.length - (string - 1);
			note.IsDead = isDead;
			note.IsTieDestination = isTie;
			if(!isTie) {
				note.Fret = fret;
			}
		} else {
			note.Octave = octave;
			note.Tone = tone;
			note.IsTieDestination = isTie;
		}
		this.NoteEffects(note);
	}
	,NoteEffects: function(note) {
		if(this._sy != 9) {
			return;
		}
		this.NewSy();
		while(this._sy == 5) {
			var syData = Std.string(this._syData).toLowerCase();
			this._syData = syData;
			if(syData == "b" || syData == "be") {
				var exact = this._syData == "be";
				this.NewSy();
				if(this._sy != 7) {
					this.Error("bend-effect",7,true);
				}
				this.NewSy();
				while(this._sy != 8 && this._sy != 1) {
					var offset = 0;
					var value = 0;
					if(exact) {
						if(this._sy != 2) {
							this.Error("bend-effect-value",2,true);
						}
						offset = this._syData;
						this.NewSy();
						if(this._sy != 2) {
							this.Error("bend-effect-value",2,true);
						}
						value = this._syData;
					} else {
						if(this._sy != 2) {
							this.Error("bend-effect-value",2,true);
						}
						value = this._syData;
					}
					note.AddBendPoint(new alphaTab.model.BendPoint(offset,value));
					this.NewSy();
				}
				while(note.BendPoints.length > 60) {
					var index = note.BendPoints.length - 1;
					if(index != -1) {
						note.BendPoints.splice(index,1);
					}
				}
				if(exact) {
					note.BendPoints.sort((function(comparison) {
						return function(a,b) {
							return comparison[0](a,b);
						};
					})([(function() {
						return function(a1,b1) {
							return a1.Offset - b1.Offset;
						};
					})()]));
				} else {
					var count = note.BendPoints.length;
					var step = 60 / (count - 1) | 0;
					var i = 0;
					while(i < count) {
						note.BendPoints[i].Offset = Math.min(60,i * step);
						++i;
					}
				}
				if(this._sy != 8) {
					this.Error("bend-effect",8,true);
				}
				this.NewSy();
			} else if(syData == "nh") {
				note.HarmonicType = 1;
				this.NewSy();
			} else if(syData == "ah") {
				note.HarmonicType = 2;
				this.NewSy();
			} else if(syData == "th") {
				note.HarmonicType = 4;
				this.NewSy();
			} else if(syData == "ph") {
				note.HarmonicType = 3;
				this.NewSy();
			} else if(syData == "sh") {
				note.HarmonicType = 5;
				this.NewSy();
			} else if(syData == "tr") {
				this.NewSy();
				if(this._sy != 2) {
					this.Error("trill-effect",2,true);
				}
				var fret = this._syData;
				this.NewSy();
				var duration = 16;
				if(this._sy == 2) {
					var _g = this._syData;
					switch(_g) {
					case 16:
						duration = 16;
						break;
					case 32:
						duration = 32;
						break;
					case 64:
						duration = 64;
						break;
					default:
						duration = 16;
					}
					this.NewSy();
				}
				note.TrillValue = fret + note.get_StringTuning();
				note.TrillSpeed = duration;
			} else if(syData == "v") {
				this.NewSy();
				note.Vibrato = 1;
			} else if(syData == "sl") {
				this.NewSy();
				note.SlideType = 2;
			} else if(syData == "ss") {
				this.NewSy();
				note.SlideType = 1;
			} else if(syData == "h") {
				this.NewSy();
				note.IsHammerPullOrigin = true;
			} else if(syData == "g") {
				this.NewSy();
				note.IsGhost = true;
			} else if(syData == "ac") {
				this.NewSy();
				note.Accentuated = 1;
			} else if(syData == "hac") {
				this.NewSy();
				note.Accentuated = 2;
			} else if(syData == "pm") {
				this.NewSy();
				note.IsPalmMute = true;
			} else if(syData == "st") {
				this.NewSy();
				note.IsStaccato = true;
			} else if(syData == "lr") {
				this.NewSy();
				note.IsLetRing = true;
			} else if(syData == "x") {
				this.NewSy();
				note.Fret = 0;
				note.IsDead = true;
			} else if(syData == "lf") {
				this.NewSy();
				var finger = 0;
				if(this._sy == 2) {
					finger = this.ToFinger(this._syData);
					this.NewSy();
				}
				note.LeftHandFinger = finger;
			} else if(syData == "rf") {
				this.NewSy();
				var finger1 = 0;
				if(this._sy == 2) {
					finger1 = this.ToFinger(this._syData);
					this.NewSy();
				}
				note.RightHandFinger = finger1;
			} else if(!this.ApplyBeatEffect(note.Beat)) {
				this.Error(syData,5,false);
			}
		}
		if(this._sy != 10) {
			this.Error("note-effect",10,false);
		}
		this.NewSy();
	}
	,ToFinger: function(syData) {
		switch(syData) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		default:
		}
		return 0;
	}
	,ParseDuration: function(duration) {
		switch(duration) {
		case -4:
			return -4;
		case -2:
			return -2;
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
			return 64;
		case 128:
			return 128;
		default:
			return 4;
		}
	}
	,BarMeta: function(bar) {
		var master = bar.get_MasterBar();
		while(this._sy == 12) {
			var syData = Std.string(this._syData).toLowerCase();
			if(syData == "ts") {
				this.NewSy();
				if(this._sy != 2) {
					this.Error("timesignature-numerator",2,true);
				}
				master.TimeSignatureNumerator = this._syData;
				this.NewSy();
				if(this._sy != 2) {
					this.Error("timesignature-denominator",2,true);
				}
				master.TimeSignatureDenominator = this._syData;
			} else if(syData == "ro") {
				master.IsRepeatStart = true;
			} else if(syData == "rc") {
				this.NewSy();
				if(this._sy != 2) {
					this.Error("repeatclose",2,true);
				}
				master.RepeatCount = this._syData - 1;
			} else if(syData == "ks") {
				this.NewSy();
				if(this._sy != 5) {
					this.Error("keysignature",5,true);
				}
				master.KeySignature = this.ParseKeySignature(Std.string(this._syData).toLowerCase());
			} else if(syData == "clef") {
				this.NewSy();
				var _g = this._sy;
				switch(_g) {
				case 2:
					bar.Clef = this.ParseClefFromInt(this._syData);
					break;
				case 5:
					bar.Clef = this.ParseClefFromString(Std.string(this._syData).toLowerCase());
					break;
				case 6:
					var parseResult = this._syData;
					bar.Clef = this.ParseClefFromInt(parseResult.get_RealValue());
					break;
				default:
					this.Error("clef",5,true);
				}
			} else if(syData == "tempo") {
				this.NewSy();
				if(this._sy != 2) {
					this.Error("tempo",2,true);
				}
				var tempoAutomation = new alphaTab.model.Automation();
				tempoAutomation.IsLinear = true;
				tempoAutomation.Type = 0;
				tempoAutomation.Value = this._syData;
				master.TempoAutomation = tempoAutomation;
			} else {
				this.Error("measure-effects",5,false);
			}
			this.NewSy();
		}
	}
	,__class__: alphaTab.importer.AlphaTexImporter
});
alphaTab.importer._AlphaTexSymbols = {};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_ = $hx_exports["alphaTab"]["importer"]["_AlphaTexSymbols"]["AlphaTexSymbols_Impl_"] = {};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.__name__ = true;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "No";
	case 1:
		return "Eof";
	case 2:
		return "Number";
	case 3:
		return "DoubleDot";
	case 4:
		return "Dot";
	case 5:
		return "String";
	case 6:
		return "Tuning";
	case 7:
		return "LParensis";
	case 8:
		return "RParensis";
	case 9:
		return "LBrace";
	case 10:
		return "RBrace";
	case 11:
		return "Pipe";
	case 12:
		return "MetaCommand";
	case 13:
		return "Multiply";
	}
	return "";
};
alphaTab.importer.FileLoadException = $hx_exports["alphaTab"]["importer"]["FileLoadException"] = function() {
	alphaTab.AlphaTabException.call(this);
};
alphaTab.importer.FileLoadException.__name__ = true;
alphaTab.importer.FileLoadException.__super__ = alphaTab.AlphaTabException;
alphaTab.importer.FileLoadException.prototype = $extend(alphaTab.AlphaTabException.prototype,{
	FileLoadException: function(message,xhr) {
		this.AlphaTabException(message);
		this.Xhr = null;
		this.Xhr = xhr;
		return this;
	}
	,__class__: alphaTab.importer.FileLoadException
});
alphaTab.importer.Gp3To5Importer = $hx_exports["alphaTab"]["importer"]["Gp3To5Importer"] = function() {
	alphaTab.importer.ScoreImporter.call(this);
};
alphaTab.importer.Gp3To5Importer.__name__ = true;
alphaTab.importer.Gp3To5Importer.ToStrokeValue = function(value) {
	switch(value) {
	case 1:
		return 30;
	case 2:
		return 30;
	case 3:
		return 60;
	case 4:
		return 120;
	case 5:
		return 240;
	case 6:
		return 480;
	default:
		return 0;
	}
};
alphaTab.importer.Gp3To5Importer.__super__ = alphaTab.importer.ScoreImporter;
alphaTab.importer.Gp3To5Importer.prototype = $extend(alphaTab.importer.ScoreImporter.prototype,{
	get_Name: function() {
		return "Guitar Pro 3-5";
	}
	,ReadScore: function() {
		this.ReadVersion();
		this._score = new alphaTab.model.Score();
		this.ReadScoreInformation();
		if(this._versionNumber < 500) {
			this._globalTripletFeel = this.ReadBool() ? 2 : 0;
		}
		if(this._versionNumber >= 400) {
			this.ReadLyrics();
		}
		if(this._versionNumber >= 510) {
			this.Data.Skip(19);
		}
		if(this._versionNumber >= 500) {
			this.ReadPageSetup();
			this._score.TempoLabel = this.ReadStringIntByte();
		}
		this._score.Tempo = this.ReadInt32();
		if(this._versionNumber >= 510) {
			this.ReadBool();
		}
		this.ReadInt32();
		if(this._versionNumber >= 400) {
			this.Data.ReadByte();
		}
		this.ReadPlaybackInfos();
		if(this._versionNumber >= 500) {
			this.Data.Skip(38);
			this.Data.Skip(4);
		}
		this._barCount = this.ReadInt32();
		this._trackCount = this.ReadInt32();
		this.ReadMasterBars();
		this.ReadTracks();
		this.ReadBars();
		this._score.Finish();
		if(this._lyrics != null && this._lyricsTrack >= 0) {
			this._score.Tracks[this._lyricsTrack].ApplyLyrics(this._lyrics);
		}
		return this._score;
	}
	,ReadVersion: function() {
		var version = this.ReadStringByteLength(30);
		if(!StringTools.startsWith(version,"FICHIER GUITAR PRO ")) {
			throw new js._Boot.HaxeError(new alphaTab.importer.UnsupportedFormatException().UnsupportedFormatException(""));
		}
		version = HxOverrides.substr(version,"FICHIER GUITAR PRO ".length + 1,null);
		var this1 = system.Convert.ToUInt16(46);
		var dot = version.indexOf(String.fromCharCode(this1));
		this._versionNumber = 100 * alphaTab.platform.Platform.ParseInt(HxOverrides.substr(version,0,dot)) + alphaTab.platform.Platform.ParseInt(HxOverrides.substr(version,dot + 1,null));
		alphaTab.util.Logger.Info(this.get_Name(),"Guitar Pro version " + version + " detected",null);
	}
	,ReadScoreInformation: function() {
		this._score.Title = this.ReadStringIntUnused();
		this._score.SubTitle = this.ReadStringIntUnused();
		this._score.Artist = this.ReadStringIntUnused();
		this._score.Album = this.ReadStringIntUnused();
		this._score.Words = this.ReadStringIntUnused();
		var tmp = this._versionNumber >= 500 ? this.ReadStringIntUnused() : this._score.Words;
		this._score.Music = tmp;
		this._score.Copyright = this.ReadStringIntUnused();
		this._score.Tab = this.ReadStringIntUnused();
		this._score.Instructions = this.ReadStringIntUnused();
		var noticeLines = this.ReadInt32();
		var this1 = "";
		var notice = this1;
		var i = 0;
		while(i < noticeLines) {
			if(i > 0) {
				notice = notice + ("" + "\r\n");
			}
			notice += Std.string(this.ReadStringIntUnused());
			++i;
		}
		this._score.Notices = notice;
	}
	,ReadLyrics: function() {
		var this1 = [];
		this._lyrics = this1;
		this._lyricsTrack = this.ReadInt32() - 1;
		var i = 0;
		while(i < 5) {
			var lyrics = new alphaTab.model.Lyrics();
			lyrics.StartBar = this.ReadInt32() - 1;
			lyrics.Text = this.ReadStringInt();
			this._lyrics.push(lyrics);
			++i;
		}
	}
	,ReadPageSetup: function() {
		this.Data.Skip(30);
		var i = 0;
		while(i < 10) {
			this.ReadStringIntByte();
			++i;
		}
	}
	,ReadPlaybackInfos: function() {
		var this1 = [];
		this._playbackInfos = this1;
		var i = 0;
		while(i < 64) {
			var info = new alphaTab.model.PlaybackInformation();
			info.PrimaryChannel = i;
			info.SecondaryChannel = i;
			info.Program = this.ReadInt32();
			info.Volume = this.Data.ReadByte();
			info.Balance = this.Data.ReadByte();
			this.Data.Skip(6);
			this._playbackInfos.push(info);
			++i;
		}
	}
	,ReadMasterBars: function() {
		var i = 0;
		while(i < this._barCount) {
			this.ReadMasterBar();
			++i;
		}
	}
	,ReadMasterBar: function() {
		var previousMasterBar = null;
		if(this._score.MasterBars.length > 0) {
			previousMasterBar = this._score.MasterBars[this._score.MasterBars.length - 1];
		}
		var newMasterBar = new alphaTab.model.MasterBar();
		var flags = this.Data.ReadByte();
		if((flags & 1) != 0) {
			newMasterBar.TimeSignatureNumerator = this.Data.ReadByte();
		} else if(previousMasterBar != null) {
			newMasterBar.TimeSignatureNumerator = previousMasterBar.TimeSignatureNumerator;
		}
		if((flags & 2) != 0) {
			newMasterBar.TimeSignatureDenominator = this.Data.ReadByte();
		} else if(previousMasterBar != null) {
			newMasterBar.TimeSignatureDenominator = previousMasterBar.TimeSignatureDenominator;
		}
		newMasterBar.IsRepeatStart = (flags & 4) != 0;
		if((flags & 8) != 0) {
			newMasterBar.RepeatCount = this.Data.ReadByte() + (this._versionNumber >= 500 ? 0 : 1);
		}
		if((flags & 16) != 0) {
			if(this._versionNumber < 500) {
				var currentMasterBar = previousMasterBar;
				var existentAlternatives = 0;
				while(currentMasterBar != null) {
					if(currentMasterBar.get_IsRepeatEnd() && currentMasterBar != previousMasterBar) {
						break;
					}
					if(currentMasterBar.IsRepeatStart) {
						break;
					}
					existentAlternatives = existentAlternatives | currentMasterBar.AlternateEndings;
					currentMasterBar = currentMasterBar.PreviousMasterBar;
				}
				var repeatAlternative = 0;
				var repeatMask = this.Data.ReadByte();
				var i = 0;
				while(i < 8) {
					var repeating = 1 << i;
					if(repeatMask > i && (existentAlternatives & repeating) == 0) {
						repeatAlternative = repeatAlternative | repeating;
					}
					++i;
				}
				newMasterBar.AlternateEndings = system.Convert.ToUInt8(repeatAlternative);
			} else {
				newMasterBar.AlternateEndings = system.Convert.ToUInt8(this.Data.ReadByte());
			}
		}
		if((flags & 32) != 0) {
			var section = new alphaTab.model.Section();
			section.Text = this.ReadStringIntByte();
			section.Marker = "";
			this.ReadColor();
			newMasterBar.Section = section;
		}
		if((flags & 64) != 0) {
			newMasterBar.KeySignature = alphaTab.platform.Platform.ReadSignedByte(this.Data);
			newMasterBar.KeySignatureType = js.Boot.__cast(this.Data.ReadByte() , Int);
		} else if(previousMasterBar != null) {
			newMasterBar.KeySignature = previousMasterBar.KeySignature;
			newMasterBar.KeySignatureType = previousMasterBar.KeySignatureType;
		}
		if(this._versionNumber >= 500 && (flags & 3) != 0) {
			this.Data.Skip(4);
		}
		if(this._versionNumber >= 500 && (flags & 16) == 0) {
			newMasterBar.AlternateEndings = system.Convert.ToUInt8(this.Data.ReadByte());
		}
		if(this._versionNumber >= 500) {
			var tripletFeel = this.Data.ReadByte();
			switch(tripletFeel) {
			case 1:
				newMasterBar.TripletFeel = 2;
				break;
			case 2:
				newMasterBar.TripletFeel = 1;
				break;
			default:
			}
			this.Data.ReadByte();
		} else {
			newMasterBar.TripletFeel = this._globalTripletFeel;
		}
		newMasterBar.IsDoubleBar = (flags & 128) != 0;
		this._score.AddMasterBar(newMasterBar);
	}
	,ReadTracks: function() {
		var i = 0;
		while(i < this._trackCount) {
			this.ReadTrack();
			++i;
		}
	}
	,ReadTrack: function() {
		var newTrack = new alphaTab.model.Track(1);
		this._score.AddTrack(newTrack);
		var flags = this.Data.ReadByte();
		newTrack.Name = this.ReadStringByteLength(40);
		newTrack.IsPercussion = (flags & 1) != 0;
		var stringCount = this.ReadInt32();
		var this1 = [];
		var tuning = this1;
		var i = 0;
		while(i < 7) {
			var stringTuning = this.ReadInt32();
			if(stringCount > i) {
				tuning.push(stringTuning);
			}
			++i;
		}
		newTrack.Tuning = new Int32Array(tuning);
		var port = this.ReadInt32();
		var index = this.ReadInt32() - 1;
		var effectChannel = this.ReadInt32() - 1;
		this.Data.Skip(4);
		if(index >= 0 && index < this._playbackInfos.length) {
			var info = this._playbackInfos[index];
			info.Port = port;
			info.IsSolo = (flags & 16) != 0;
			info.IsMute = (flags & 32) != 0;
			info.SecondaryChannel = effectChannel;
			if(alphaTab.audio.GeneralMidi.IsGuitar(info.Program)) {
				newTrack.DisplayTranspositionPitch = -12;
			}
			newTrack.PlaybackInfo = info;
		}
		newTrack.Capo = this.ReadInt32();
		newTrack.Color = this.ReadColor();
		if(this._versionNumber >= 500) {
			this.Data.ReadByte();
			this.Data.ReadByte();
			this.Data.Skip(43);
		}
		if(this._versionNumber >= 510) {
			this.Data.Skip(4);
			this.ReadStringIntByte();
			this.ReadStringIntByte();
		}
	}
	,ReadBars: function() {
		var i = 0;
		while(i < this._barCount) {
			var t = 0;
			while(t < this._trackCount) {
				this.ReadBar(this._score.Tracks[t]);
				++t;
			}
			++i;
		}
	}
	,ReadBar: function(track) {
		var newBar = new alphaTab.model.Bar();
		if(track.IsPercussion) {
			newBar.Clef = 0;
		}
		track.AddBarToStaff(0,newBar);
		var voiceCount = 1;
		if(this._versionNumber >= 500) {
			this.Data.ReadByte();
			voiceCount = 2;
		}
		var v = 0;
		while(v < voiceCount) {
			this.ReadVoice(track,newBar);
			++v;
		}
	}
	,ReadVoice: function(track,bar) {
		var beatCount = this.ReadInt32();
		if(beatCount == 0) {
			return;
		}
		var newVoice = new alphaTab.model.Voice();
		bar.AddVoice(newVoice);
		var i = 0;
		while(i < beatCount) {
			this.ReadBeat(track,bar,newVoice);
			++i;
		}
	}
	,ReadBeat: function(track,bar,voice) {
		var newBeat = new alphaTab.model.Beat();
		var flags = this.Data.ReadByte();
		if((flags & 1) != 0) {
			newBeat.Dots = 1;
		}
		if((flags & 64) != 0) {
			var type = this.Data.ReadByte();
			newBeat.IsEmpty = (type & 2) == 0;
		}
		voice.AddBeat(newBeat);
		var duration = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		switch(duration) {
		case -2:
			newBeat.Duration = 1;
			break;
		case -1:
			newBeat.Duration = 2;
			break;
		case 0:
			newBeat.Duration = 4;
			break;
		case 1:
			newBeat.Duration = 8;
			break;
		case 2:
			newBeat.Duration = 16;
			break;
		case 3:
			newBeat.Duration = 32;
			break;
		case 4:
			newBeat.Duration = 64;
			break;
		default:
			newBeat.Duration = 4;
		}
		if((flags & 32) != 0) {
			newBeat.TupletNumerator = this.ReadInt32();
			var _g = newBeat.TupletNumerator;
			switch(_g) {
			case 1:
				newBeat.TupletDenominator = 1;
				break;
			case 3:
				newBeat.TupletDenominator = 2;
				break;
			case 5:case 6:case 7:
				newBeat.TupletDenominator = 4;
				break;
			case 2:case 4:case 8:
				break;
			case 9:case 10:case 11:case 12:case 13:
				newBeat.TupletDenominator = 8;
				break;
			default:
				newBeat.TupletNumerator = 1;
				newBeat.TupletDenominator = 1;
			}
		}
		if((flags & 2) != 0) {
			this.ReadChord(newBeat);
		}
		if((flags & 4) != 0) {
			newBeat.Text = this.ReadStringIntUnused();
		}
		if((flags & 8) != 0) {
			this.ReadBeatEffects(newBeat);
		}
		if((flags & 16) != 0) {
			this.ReadMixTableChange(newBeat);
		}
		var stringFlags = this.Data.ReadByte();
		var i = 6;
		while(i >= 0) {
			if((stringFlags & 1 << i) != 0 && 6 - i < track.Tuning.length) {
				this.ReadNote(track,bar,voice,newBeat,6 - i);
			}
			--i;
		}
		if(this._versionNumber >= 500) {
			this.Data.ReadByte();
			var flag = this.Data.ReadByte();
			if((flag & 8) != 0) {
				this.Data.ReadByte();
			}
		}
	}
	,ReadChord: function(beat) {
		var chord = new alphaTab.model.Chord();
		var chordId = alphaTab.platform.Platform.NewGuid();
		if(this._versionNumber >= 500) {
			this.Data.Skip(17);
			chord.Name = this.ReadStringByteLength(21);
			this.Data.Skip(4);
			chord.FirstFret = this.ReadInt32();
			var i = 0;
			while(i < 7) {
				var fret = this.ReadInt32();
				if(i < beat.Voice.Bar.Staff.Track.Tuning.length) {
					chord.Strings.push(fret);
				}
				++i;
			}
			var numberOfBarres = this.Data.ReadByte();
			var this1 = new Uint8Array(5);
			var barreFrets = this1;
			this.Data.Read(barreFrets,0,barreFrets.length);
			var i1 = 0;
			while(i1 < numberOfBarres) {
				var this2 = barreFrets[i1];
				chord.BarreFrets.push(this2);
				++i1;
			}
			this.Data.Skip(26);
		} else if(this.Data.ReadByte() != 0) {
			if(this._versionNumber >= 400) {
				this.Data.Skip(16);
				chord.Name = this.ReadStringByteLength(21);
				this.Data.Skip(4);
				chord.FirstFret = this.ReadInt32();
				var i2 = 0;
				while(i2 < 7) {
					var fret1 = this.ReadInt32();
					if(i2 < beat.Voice.Bar.Staff.Track.Tuning.length) {
						chord.Strings.push(fret1);
					}
					++i2;
				}
				var numberOfBarres1 = this.Data.ReadByte();
				var this3 = new Uint8Array(5);
				var barreFrets1 = this3;
				this.Data.Read(barreFrets1,0,barreFrets1.length);
				var i3 = 0;
				while(i3 < numberOfBarres1) {
					var this4 = barreFrets1[i3];
					chord.BarreFrets.push(this4);
					++i3;
				}
				this.Data.Skip(26);
			} else {
				this.Data.Skip(25);
				chord.Name = this.ReadStringByteLength(34);
				chord.FirstFret = this.ReadInt32();
				var i4 = 0;
				while(i4 < 6) {
					var fret2 = this.ReadInt32();
					if(i4 < beat.Voice.Bar.Staff.Track.Tuning.length) {
						chord.Strings.push(fret2);
					}
					++i4;
				}
				this.Data.Skip(36);
			}
		} else {
			var strings = this._versionNumber >= 406 ? 7 : 6;
			chord.Name = this.ReadStringIntByte();
			chord.FirstFret = this.ReadInt32();
			if(chord.FirstFret > 0) {
				var i5 = 0;
				while(i5 < strings) {
					var fret3 = this.ReadInt32();
					if(i5 < beat.Voice.Bar.Staff.Track.Tuning.length) {
						chord.Strings.push(fret3);
					}
					++i5;
				}
			}
		}
		var s = chord.Name;
		if(!(s == null || s.length == 0)) {
			beat.ChordId = chordId;
			beat.Voice.Bar.Staff.Track.Chords[beat.ChordId] = chord;
		}
	}
	,ReadBeatEffects: function(beat) {
		var flags = this.Data.ReadByte();
		var flags2 = 0;
		if(this._versionNumber >= 400) {
			flags2 = this.Data.ReadByte();
		}
		beat.FadeIn = (flags & 16) != 0;
		if(this._versionNumber < 400 && (flags & 1) != 0 || (flags & 2) != 0) {
			beat.Vibrato = 1;
		}
		beat.HasRasgueado = (flags2 & 1) != 0;
		if((flags & 32) != 0 && this._versionNumber >= 400) {
			var slapPop = alphaTab.platform.Platform.ReadSignedByte(this.Data);
			switch(slapPop) {
			case 1:
				beat.Tap = true;
				break;
			case 2:
				beat.Slap = true;
				break;
			case 3:
				beat.Pop = true;
				break;
			default:
			}
		} else if((flags & 32) != 0) {
			var slapPop1 = alphaTab.platform.Platform.ReadSignedByte(this.Data);
			switch(slapPop1) {
			case 1:
				beat.Tap = true;
				break;
			case 2:
				beat.Slap = true;
				break;
			case 3:
				beat.Pop = true;
				break;
			default:
			}
			this.Data.Skip(4);
		}
		if((flags2 & 4) != 0) {
			this.ReadTremoloBarEffect(beat);
		}
		if((flags & 64) != 0) {
			var strokeUp;
			var strokeDown;
			if(this._versionNumber < 500) {
				strokeDown = this.Data.ReadByte();
				strokeUp = this.Data.ReadByte();
			} else {
				strokeUp = this.Data.ReadByte();
				strokeDown = this.Data.ReadByte();
			}
			if(strokeUp > 0) {
				beat.BrushType = 1;
				beat.BrushDuration = alphaTab.importer.Gp3To5Importer.ToStrokeValue(strokeUp);
			} else if(strokeDown > 0) {
				beat.BrushType = 2;
				beat.BrushDuration = alphaTab.importer.Gp3To5Importer.ToStrokeValue(strokeDown);
			}
		}
		if((flags2 & 2) != 0) {
			var _g = alphaTab.platform.Platform.ReadSignedByte(this.Data);
			switch(_g) {
			case 0:
				beat.PickStroke = 0;
				break;
			case 1:
				beat.PickStroke = 1;
				break;
			case 2:
				beat.PickStroke = 2;
				break;
			default:
			}
		}
	}
	,ReadTremoloBarEffect: function(beat) {
		this.Data.ReadByte();
		this.ReadInt32();
		var pointCount = this.ReadInt32();
		if(pointCount > 0) {
			var i = 0;
			while(i < pointCount) {
				var point = new alphaTab.model.BendPoint(0,0);
				point.Offset = this.ReadInt32();
				point.Value = this.ReadInt32() / 25 | 0;
				this.ReadBool();
				beat.AddWhammyBarPoint(point);
				++i;
			}
		}
	}
	,ReadMixTableChange: function(beat) {
		var tableChange = new alphaTab.importer.MixTableChange();
		tableChange.Instrument = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		if(this._versionNumber >= 500) {
			this.Data.Skip(16);
		}
		tableChange.Volume = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		tableChange.Balance = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		var chorus = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		var reverb = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		var phaser = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		var tremolo = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		if(this._versionNumber >= 500) {
			tableChange.TempoName = this.ReadStringIntByte();
		}
		tableChange.Tempo = this.ReadInt32();
		if(tableChange.Volume >= 0) {
			this.Data.ReadByte();
		}
		if(tableChange.Balance >= 0) {
			this.Data.ReadByte();
		}
		if(chorus >= 0) {
			this.Data.ReadByte();
		}
		if(reverb >= 0) {
			this.Data.ReadByte();
		}
		if(phaser >= 0) {
			this.Data.ReadByte();
		}
		if(tremolo >= 0) {
			this.Data.ReadByte();
		}
		if(tableChange.Tempo >= 0) {
			tableChange.Duration = alphaTab.platform.Platform.ReadSignedByte(this.Data);
			if(this._versionNumber >= 510) {
				this.Data.ReadByte();
			}
		}
		if(this._versionNumber >= 400) {
			this.Data.ReadByte();
		}
		if(this._versionNumber >= 500) {
			this.Data.ReadByte();
		}
		if(this._versionNumber >= 510) {
			this.ReadStringIntByte();
			this.ReadStringIntByte();
		}
		if(tableChange.Volume >= 0) {
			var volumeAutomation = new alphaTab.model.Automation();
			volumeAutomation.IsLinear = true;
			volumeAutomation.Type = 1;
			var this1 = tableChange.Volume;
			volumeAutomation.Value = this1;
			beat.Automations.push(volumeAutomation);
		}
		if(tableChange.Balance >= 0) {
			var balanceAutomation = new alphaTab.model.Automation();
			balanceAutomation.IsLinear = true;
			balanceAutomation.Type = 3;
			var this2 = tableChange.Balance;
			balanceAutomation.Value = this2;
			beat.Automations.push(balanceAutomation);
		}
		if(tableChange.Instrument >= 0) {
			var instrumentAutomation = new alphaTab.model.Automation();
			instrumentAutomation.IsLinear = true;
			instrumentAutomation.Type = 2;
			var this3 = tableChange.Instrument;
			instrumentAutomation.Value = this3;
			beat.Automations.push(instrumentAutomation);
		}
		if(tableChange.Tempo >= 0) {
			var tempoAutomation = new alphaTab.model.Automation();
			tempoAutomation.IsLinear = true;
			tempoAutomation.Type = 0;
			var this4 = tableChange.Tempo;
			tempoAutomation.Value = this4;
			beat.Automations.push(tempoAutomation);
			beat.Voice.Bar.get_MasterBar().TempoAutomation = tempoAutomation;
		}
	}
	,ReadNote: function(track,bar,voice,beat,stringIndex) {
		var newNote = new alphaTab.model.Note();
		newNote.String = track.Tuning.length - stringIndex;
		var flags = this.Data.ReadByte();
		if((flags & 2) != 0) {
			newNote.Accentuated = 2;
		} else if((flags & 64) != 0) {
			newNote.Accentuated = 1;
		}
		newNote.IsGhost = (flags & 4) != 0;
		if((flags & 32) != 0) {
			var noteType = this.Data.ReadByte();
			if(noteType == 3) {
				newNote.IsDead = true;
			} else if(noteType == 2) {
				newNote.IsTieDestination = true;
			}
		}
		if((flags & 1) != 0 && this._versionNumber < 500) {
			this.Data.ReadByte();
			this.Data.ReadByte();
		}
		if((flags & 16) != 0) {
			var dynamicNumber = alphaTab.platform.Platform.ReadSignedByte(this.Data);
			newNote.Dynamic = this.ToDynamicValue(dynamicNumber);
			beat.Dynamic = newNote.Dynamic;
		}
		if((flags & 32) != 0) {
			newNote.Fret = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		}
		if((flags & 128) != 0) {
			newNote.LeftHandFinger = js.Boot.__cast(alphaTab.platform.Platform.ReadSignedByte(this.Data) , Int);
			newNote.RightHandFinger = js.Boot.__cast(alphaTab.platform.Platform.ReadSignedByte(this.Data) , Int);
			newNote.IsFingering = true;
		}
		if(this._versionNumber >= 500) {
			if((flags & 1) != 0) {
				newNote.DurationPercent = this.ReadDouble();
			}
			var flags2 = this.Data.ReadByte();
			newNote.AccidentalMode = (flags2 & 2) != 0 ? 1 : 0;
		}
		beat.AddNote(newNote);
		if((flags & 8) != 0) {
			this.ReadNoteEffects(track,voice,beat,newNote);
		}
	}
	,ToDynamicValue: function(value) {
		switch(value) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		case 7:
			return 6;
		case 8:
			return 7;
		default:
			return 5;
		}
	}
	,ReadNoteEffects: function(track,voice,beat,note) {
		var flags = this.Data.ReadByte();
		var flags2 = 0;
		if(this._versionNumber >= 400) {
			flags2 = this.Data.ReadByte();
		}
		if((flags & 1) != 0) {
			this.ReadBend(note);
		}
		if((flags & 16) != 0) {
			this.ReadGrace(voice,note);
		}
		if((flags2 & 4) != 0) {
			this.ReadTremoloPicking(beat);
		}
		if((flags2 & 8) != 0) {
			this.ReadSlide(note);
		} else if(this._versionNumber < 400) {
			if((flags & 4) != 0) {
				note.SlideType = 1;
			}
		}
		if((flags2 & 16) != 0) {
			this.ReadArtificialHarmonic(note);
		} else if(this._versionNumber < 400) {
			if((flags & 4) != 0) {
				note.HarmonicType = 1;
				note.HarmonicValue = this.DeltaFretToHarmonicValue(note.Fret);
			}
			if((flags & 8) != 0) {
				note.HarmonicType = 2;
			}
		}
		if((flags2 & 32) != 0) {
			this.ReadTrill(note);
		}
		note.IsLetRing = (flags & 8) != 0;
		note.IsHammerPullOrigin = (flags & 2) != 0;
		if((flags2 & 64) != 0) {
			note.Vibrato = 1;
		}
		note.IsPalmMute = (flags2 & 2) != 0;
		note.IsStaccato = (flags2 & 1) != 0;
	}
	,ReadBend: function(note) {
		this.Data.ReadByte();
		this.ReadInt32();
		var pointCount = this.ReadInt32();
		if(pointCount > 0) {
			var i = 0;
			while(i < pointCount) {
				var point = new alphaTab.model.BendPoint(0,0);
				point.Offset = this.ReadInt32();
				point.Value = this.ReadInt32() / 25 | 0;
				this.ReadBool();
				note.AddBendPoint(point);
				++i;
			}
		}
	}
	,ReadGrace: function(voice,note) {
		var graceBeat = new alphaTab.model.Beat();
		var graceNote = new alphaTab.model.Note();
		graceNote.String = note.String;
		graceNote.Fret = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		graceBeat.Duration = 32;
		graceBeat.Dynamic = this.ToDynamicValue(alphaTab.platform.Platform.ReadSignedByte(this.Data));
		var transition = alphaTab.platform.Platform.ReadSignedByte(this.Data);
		switch(transition) {
		case 0:
			break;
		case 1:
			graceNote.SlideType = 2;
			graceNote.SlideTarget = note;
			break;
		case 2:
			break;
		case 3:
			graceNote.IsHammerPullOrigin = true;
			break;
		default:
		}
		graceNote.Dynamic = graceBeat.Dynamic;
		this.Data.Skip(1);
		if(this._versionNumber < 500) {
			graceBeat.GraceType = 2;
		} else {
			var flags = this.Data.ReadByte();
			graceNote.IsDead = (flags & 1) != 0;
			graceBeat.GraceType = (flags & 2) != 0 ? 1 : 2;
		}
		graceBeat.AddNote(graceNote);
		voice.AddGraceBeat(graceBeat);
	}
	,ReadTremoloPicking: function(beat) {
		var speed = this.Data.ReadByte();
		switch(speed) {
		case 1:
			beat.TremoloSpeed = 8;
			break;
		case 2:
			beat.TremoloSpeed = 16;
			break;
		case 3:
			beat.TremoloSpeed = 32;
			break;
		default:
		}
	}
	,ReadSlide: function(note) {
		if(this._versionNumber >= 500) {
			var type = alphaTab.platform.Platform.ReadSignedByte(this.Data);
			switch(type) {
			case 1:
				note.SlideType = 1;
				break;
			case 2:
				note.SlideType = 2;
				break;
			case 4:
				note.SlideType = 6;
				break;
			case 8:
				note.SlideType = 5;
				break;
			case 16:
				note.SlideType = 3;
				break;
			case 32:
				note.SlideType = 4;
				break;
			default:
				note.SlideType = 0;
			}
		} else {
			var type1 = alphaTab.platform.Platform.ReadSignedByte(this.Data);
			switch(type1) {
			case -2:
				note.SlideType = 4;
				break;
			case -1:
				note.SlideType = 3;
				break;
			case 1:
				note.SlideType = 1;
				break;
			case 2:
				note.SlideType = 2;
				break;
			case 3:
				note.SlideType = 6;
				break;
			case 4:
				note.SlideType = 5;
				break;
			default:
				note.SlideType = 0;
			}
		}
	}
	,ReadArtificialHarmonic: function(note) {
		var type = this.Data.ReadByte();
		if(this._versionNumber >= 500) {
			switch(type) {
			case 1:
				note.HarmonicType = 1;
				note.HarmonicValue = this.DeltaFretToHarmonicValue(note.Fret);
				break;
			case 2:
				var harmonicTone = this.Data.ReadByte();
				var harmonicKey = this.Data.ReadByte();
				var harmonicOctaveOffset = this.Data.ReadByte();
				note.HarmonicType = 2;
				break;
			case 3:
				note.HarmonicType = 4;
				note.HarmonicValue = this.DeltaFretToHarmonicValue(this.Data.ReadByte());
				break;
			case 4:
				note.HarmonicType = 3;
				note.HarmonicValue = 12;
				break;
			case 5:
				note.HarmonicType = 5;
				note.HarmonicValue = 12;
				break;
			default:
			}
		} else if(this._versionNumber >= 400) {
			switch(type) {
			case 1:
				note.HarmonicType = 1;
				break;
			case 3:
				note.HarmonicType = 4;
				break;
			case 4:
				note.HarmonicType = 3;
				break;
			case 5:
				note.HarmonicType = 5;
				break;
			case 15:
				note.HarmonicType = 2;
				break;
			case 17:
				note.HarmonicType = 2;
				break;
			case 22:
				note.HarmonicType = 2;
				break;
			default:
			}
		}
	}
	,DeltaFretToHarmonicValue: function(deltaFret) {
		switch(deltaFret) {
		case 2:
			return 2.4;
		case 3:
			return 3.2;
		case 8:
			return 8.2;
		case 10:
			return 9.6;
		case 14:case 15:
			return 14.7;
		case 21:case 22:
			return 21.7;
		case 4:case 5:case 7:case 9:case 12:case 16:case 17:case 19:case 24:
			var this1 = deltaFret;
			return this1;
		default:
			return 12;
		}
	}
	,ReadTrill: function(note) {
		note.TrillValue = this.Data.ReadByte() + note.get_StringTuning();
		var _g = this.Data.ReadByte();
		switch(_g) {
		case 1:
			note.TrillSpeed = 16;
			break;
		case 2:
			note.TrillSpeed = 32;
			break;
		case 3:
			note.TrillSpeed = 64;
			break;
		default:
		}
	}
	,ReadDouble: function() {
		var this1 = new Uint8Array(8);
		var bytes = this1;
		this.Data.Read(bytes,0,bytes.length);
		return alphaTab.platform.Platform.ToDouble(bytes);
	}
	,GetDoubleSig: function(bytes) {
		var this1 = bytes[3];
		var this2 = bytes[7];
		return system.Convert.ToInt32_Double(((bytes[1] & 15) << 16 | bytes[2] << 8 | this1) * 4294967296.0 + (bytes[4] >> 7) * 2147483648 + ((bytes[4] & 127) << 24 | bytes[5] << 16 | bytes[6] << 8 | this2));
	}
	,ReadColor: function() {
		var r = system.Convert.ToUInt8(this.Data.ReadByte());
		var g = system.Convert.ToUInt8(this.Data.ReadByte());
		var b = system.Convert.ToUInt8(this.Data.ReadByte());
		this.Data.Skip(1);
		return new alphaTab.platform.model.Color(r,g,b,255);
	}
	,ReadBool: function() {
		return this.Data.ReadByte() != 0;
	}
	,ReadInt32: function() {
		var this1 = new Uint8Array(4);
		var bytes = this1;
		this.Data.Read(bytes,0,4);
		return bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24;
	}
	,ReadStringIntUnused: function() {
		this.Data.Skip(4);
		return this.ReadString(this.Data.ReadByte());
	}
	,ReadStringInt: function() {
		return this.ReadString(this.ReadInt32());
	}
	,ReadStringIntByte: function() {
		var length = this.ReadInt32() - 1;
		this.Data.ReadByte();
		return this.ReadString(length);
	}
	,ReadString: function(length) {
		var this1 = new Uint8Array(length);
		var b = this1;
		this.Data.Read(b,0,b.length);
		return alphaTab.platform.Platform.ToString(b);
	}
	,ReadStringByteLength: function(length) {
		var stringLength = this.Data.ReadByte();
		var s = this.ReadString(stringLength);
		if(stringLength < length) {
			this.Data.Skip(length - stringLength);
		}
		return s;
	}
	,__class__: alphaTab.importer.Gp3To5Importer
});
alphaTab.importer.GpxFile = $hx_exports["alphaTab"]["importer"]["GpxFile"] = function() {
};
alphaTab.importer.GpxFile.__name__ = true;
alphaTab.importer.GpxFile.prototype = {
	__class__: alphaTab.importer.GpxFile
};
alphaTab.importer.GpxFileSystem = $hx_exports["alphaTab"]["importer"]["GpxFileSystem"] = function() {
	this.FileFilter = null;
	this.Files = null;
	var this1 = [];
	this.Files = this1;
	this.FileFilter = function(s) {
		return true;
	};
};
alphaTab.importer.GpxFileSystem.__name__ = true;
alphaTab.importer.GpxFileSystem.prototype = {
	Load: function(s) {
		var src = new alphaTab.io.BitReader(s);
		this.ReadBlock(src);
	}
	,ReadHeader: function(src) {
		return this.GetString(src.ReadBytes(4),0,4);
	}
	,Decompress: function(src,skipHeader) {
		if(skipHeader == null) {
			skipHeader = false;
		}
		var uncompressed = alphaTab.io.ByteBuffer.Empty();
		var buffer;
		var expectedLength = this.GetInteger(src.ReadBytes(4),0);
		try {
			while(uncompressed.get_Length() < expectedLength) {
				var flag = src.ReadBits(1);
				if(flag == 1) {
					var wordSize = src.ReadBits(4);
					var offset = src.ReadBitsReversed(wordSize);
					var size = src.ReadBitsReversed(wordSize);
					var sourcePosition = uncompressed.get_Length() - offset;
					var toRead = Math.min(offset,size);
					buffer = uncompressed.GetBuffer();
					uncompressed.Write(buffer,system.Convert.ToInt32(sourcePosition),toRead);
				} else {
					var size1 = src.ReadBitsReversed(2);
					var i = 0;
					while(i < size1) {
						uncompressed.WriteByte(system.Convert.ToUInt8(src.ReadByte()));
						++i;
					}
				}
			}
		} catch( __e ) {
			if (__e instanceof js._Boot.HaxeError) __e = __e.val;
			if( js.Boot.__instanceof(__e,alphaTab.io.EndOfReaderException) ) {
			} else throw(__e);
		}
		buffer = uncompressed.GetBuffer();
		var resultOffset = skipHeader ? 4 : 0;
		var resultSize = uncompressed.get_Length() - resultOffset;
		var this1 = new Uint8Array(system.Convert.ToInt32(resultSize));
		var result = this1;
		var count = system.Convert.ToInt32(resultSize);
		var i1 = 0;
		while(i1 < count) {
			result[0 + i1] = buffer[resultOffset + i1];
			++i1;
		}
		return result;
	}
	,ReadBlock: function(data) {
		var header = this.ReadHeader(data);
		if(header == "BCFZ") {
			this.ReadUncompressedBlock(this.Decompress(data,true));
		} else if(header == "BCFS") {
			this.ReadUncompressedBlock(data.ReadAll());
		} else {
			throw new js._Boot.HaxeError(new alphaTab.importer.UnsupportedFormatException().UnsupportedFormatException(""));
		}
	}
	,ReadUncompressedBlock: function(data) {
		var sectorSize = 4096;
		var offset = sectorSize;
		while(offset + 3 < data.length) {
			var entryType = this.GetInteger(data,offset);
			if(entryType == 2) {
				var file = new alphaTab.importer.GpxFile();
				file.FileName = this.GetString(data,offset + 4,127);
				file.FileSize = this.GetInteger(data,offset + 140);
				var storeFile = this.FileFilter == null || this.FileFilter(file.FileName);
				if(storeFile) {
					this.Files.push(file);
				}
				var dataPointerOffset = offset + 148;
				var sector = 0;
				var sectorCount = 0;
				var fileData = storeFile ? alphaTab.io.ByteBuffer.WithCapactiy(file.FileSize) : null;
				while(true) {
					sector = this.GetInteger(data,dataPointerOffset + 4 * sectorCount++);
					if(!(sector != 0)) {
						break;
					}
					offset = sector * sectorSize;
					if(storeFile) {
						fileData.Write(data,offset,sectorSize);
					}
				}
				if(storeFile) {
					var a = file.FileSize;
					var b = fileData.get_Length();
					var this1 = new Uint8Array(system.Convert.ToInt32(a < b ? a : b));
					file.Data = this1;
					var raw = fileData.ToArray();
					var dst = file.Data;
					var count = file.Data.length;
					var i = 0;
					while(i < count) {
						dst[0 + i] = raw[0 + i];
						++i;
					}
				}
			}
			offset = offset + sectorSize;
		}
	}
	,GetString: function(data,offset,length) {
		var this1 = "";
		var buf = this1;
		var i = 0;
		while(i < length) {
			var code = data[offset + i] & 255;
			if(code == 0) {
				break;
			}
			buf += String.fromCharCode(code);
			++i;
		}
		return buf;
	}
	,GetInteger: function(data,offset) {
		var this1 = data[offset];
		return data[offset + 3] << 24 | data[offset + 2] << 16 | data[offset + 1] << 8 | this1;
	}
	,__class__: alphaTab.importer.GpxFileSystem
};
alphaTab.importer.GpxImporter = $hx_exports["alphaTab"]["importer"]["GpxImporter"] = function() {
	alphaTab.importer.ScoreImporter.call(this);
};
alphaTab.importer.GpxImporter.__name__ = true;
alphaTab.importer.GpxImporter.__super__ = alphaTab.importer.ScoreImporter;
alphaTab.importer.GpxImporter.prototype = $extend(alphaTab.importer.ScoreImporter.prototype,{
	get_Name: function() {
		return "Guitar Pro 6";
	}
	,ReadScore: function() {
		alphaTab.util.Logger.Info(this.get_Name(),"Loading GPX filesystem",null);
		var fileSystem = new alphaTab.importer.GpxFileSystem();
		fileSystem.FileFilter = function(s) {
			return s == "score.gpif";
		};
		fileSystem.Load(this.Data);
		alphaTab.util.Logger.Info(this.get_Name(),"GPX filesystem loaded",null);
		var data = fileSystem.Files[0].Data;
		var xml = alphaTab.platform.Platform.ToString(data);
		fileSystem.Files = null;
		fileSystem = null;
		alphaTab.util.Logger.Info(this.get_Name(),"Start Parsing score.gpif",null);
		var parser = new alphaTab.importer.GpxParser();
		parser.ParseXml(xml);
		alphaTab.util.Logger.Info(this.get_Name(),"score.gpif parsed",null);
		return parser.Score;
	}
	,__class__: alphaTab.importer.GpxImporter
});
alphaTab.importer.GpxParser = $hx_exports["alphaTab"]["importer"]["GpxParser"] = function() {
};
alphaTab.importer.GpxParser.__name__ = true;
alphaTab.importer.GpxParser.prototype = {
	ParseXml: function(xml) {
		var this1 = {}
		this._masterTrackAutomations = this1;
		var this2 = new Array(0);
		this._tracksMapping = this2;
		var this3 = {}
		this._tracksById = this3;
		var this4 = [];
		this._masterBars = this4;
		var this5 = [];
		this._barsOfMasterBar = this5;
		var this6 = {}
		this._voicesOfBar = this6;
		var this7 = {}
		this._barsById = this7;
		var this8 = {}
		this._voiceById = this8;
		var this9 = {}
		this._beatsOfVoice = this9;
		var this10 = {}
		this._beatById = this10;
		var this11 = {}
		this._rhythmOfBeat = this11;
		var this12 = {}
		this._rhythmById = this12;
		var this13 = {}
		this._notesOfBeat = this13;
		var this14 = {}
		this._noteById = this14;
		var this15 = {}
		this._tappedNotes = this15;
		var this16 = {}
		this._lyricsByTrack = this16;
		var dom;
		try {
			dom = new alphaTab.xml.XmlDocument(xml);
		} catch( __e ) {
			if (__e instanceof js._Boot.HaxeError) __e = __e.val;
			if( js.Boot.__instanceof(__e,system.Exception) ) {
				throw new js._Boot.HaxeError(new alphaTab.importer.UnsupportedFormatException().UnsupportedFormatException(""));
			} else throw(__e);
		}
		this.ParseDom(dom);
		this.BuildModel();
		this.Score.Finish();
		var this17 = this._lyricsByTrack;
		if(Object.keys(this17).length > 0) {
			var this18 = this._lyricsByTrack;
			var trackId = $iterator(Object.keys(this18))();
			while(trackId.hasNext()) {
				var trackId1 = trackId.next();
				var track = this._tracksById[trackId1];
				track.ApplyLyrics(this._lyricsByTrack[trackId1]);
			}
		}
	}
	,ParseDom: function(dom) {
		var root = dom.DocumentElement;
		if(root == null) {
			return;
		}
		if(root.LocalName == "GPIF") {
			this.Score = new alphaTab.model.Score();
			var n = $iterator(root.ChildNodes)();
			while(n.hasNext()) {
				var n1 = n.next();
				if(n1.NodeType == 1) {
					var _g = n1.LocalName;
					switch(_g) {
					case "Bars":
						this.ParseBars(n1);
						break;
					case "Beats":
						this.ParseBeats(n1);
						break;
					case "MasterBars":
						this.ParseMasterBarsNode(n1);
						break;
					case "MasterTrack":
						this.ParseMasterTrackNode(n1);
						break;
					case "Notes":
						this.ParseNotes(n1);
						break;
					case "Rhythms":
						this.ParseRhythms(n1);
						break;
					case "Score":
						this.ParseScoreNode(n1);
						break;
					case "Tracks":
						this.ParseTracksNode(n1);
						break;
					case "Voices":
						this.ParseVoices(n1);
						break;
					default:
					}
				}
			}
		} else {
			throw new js._Boot.HaxeError(new alphaTab.importer.UnsupportedFormatException().UnsupportedFormatException(""));
		}
	}
	,ParseScoreNode: function(element) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Album":
					this.Score.Album = c1.FirstChild.get_InnerText();
					break;
				case "Artist":
					this.Score.Artist = c1.FirstChild.get_InnerText();
					break;
				case "Copyright":
					this.Score.Copyright = c1.FirstChild.get_InnerText();
					break;
				case "Instructions":
					this.Score.Instructions = c1.FirstChild.get_InnerText();
					break;
				case "Music":
					this.Score.Music = c1.FirstChild.get_InnerText();
					break;
				case "Notices":
					this.Score.Notices = c1.FirstChild.get_InnerText();
					break;
				case "SubTitle":
					this.Score.SubTitle = c1.FirstChild.get_InnerText();
					break;
				case "Tabber":
					this.Score.Tab = c1.FirstChild.get_InnerText();
					break;
				case "Title":
					this.Score.Title = c1.FirstChild.get_InnerText();
					break;
				case "Words":
					this.Score.Words = c1.FirstChild.get_InnerText();
					break;
				case "WordsAndMusic":
					if(c1.FirstChild != null && c1.FirstChild.get_InnerText() != "") {
						var wordsAndMusic = c1.FirstChild.get_InnerText();
						var tmp;
						if(!(wordsAndMusic == null || wordsAndMusic.length == 0)) {
							var s = this.Score.Words;
							if(s != null) {
								tmp = s.length == 0;
							} else {
								tmp = true;
							}
						} else {
							tmp = false;
						}
						if(tmp) {
							this.Score.Words = wordsAndMusic;
						}
						var tmp1;
						if(!(wordsAndMusic == null || wordsAndMusic.length == 0)) {
							var s1 = this.Score.Music;
							if(s1 != null) {
								tmp1 = s1.length == 0;
							} else {
								tmp1 = true;
							}
						} else {
							tmp1 = false;
						}
						if(tmp1) {
							this.Score.Music = wordsAndMusic;
						}
					}
					break;
				default:
				}
			}
		}
	}
	,ParseMasterTrackNode: function(node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Automations":
					this.ParseAutomations(c1,this._masterTrackAutomations);
					break;
				case "Tracks":
					var a = c1.get_InnerText();
					var this1 = system.Convert.ToUInt16(32);
					var this2 = this1;
					this._tracksMapping = system._CsString.CsString_Impl_.Split_CharArray(a,[this2]);
					break;
				default:
				}
			}
		}
	}
	,ParseAutomations: function(node,automations) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Automation") {
					this.ParseAutomation(c1,automations);
				}
			}
		}
	}
	,ParseAutomation: function(node,automations) {
		var type = null;
		var isLinear = false;
		var barId = null;
		var ratioPosition = 0;
		var value = 0;
		var reference = 0;
		var text = null;
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Bar":
					barId = c1.get_InnerText();
					break;
				case "Linear":
					isLinear = c1.get_InnerText().toLowerCase() == "true";
					break;
				case "Position":
					var s = c1.get_InnerText();
					ratioPosition = parseFloat(s);
					break;
				case "Text":
					text = c1.get_InnerText();
					break;
				case "Type":
					type = c1.get_InnerText();
					break;
				case "Value":
					var a = c1.get_InnerText();
					var this1 = system.Convert.ToUInt16(32);
					var this2 = this1;
					var parts = system._CsString.CsString_Impl_.Split_CharArray(a,[this2]);
					value = parseFloat(parts[0]);
					reference = alphaTab.platform.Platform.ParseInt(parts[1]);
					break;
				default:
				}
			}
		}
		if(type == null) {
			return;
		}
		var automation = null;
		if(type == "Tempo") {
			automation = alphaTab.model.Automation.BuildTempoAutomation(isLinear,ratioPosition,value,reference);
		}
		if(automation != null) {
			automation.Text = text;
		}
		if(barId != null) {
			if(!automations.hasOwnProperty(barId)) {
				var this3 = [];
				automations[barId] = this3;
			}
			automations[barId].push(automation);
		}
	}
	,ParseTracksNode: function(node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Track") {
					this.ParseTrack(c1);
				}
			}
		}
	}
	,ParseTrack: function(node) {
		var track = new alphaTab.model.Track(1);
		var trackId = node.GetAttribute("id");
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Color":
					var a = c1.get_InnerText();
					var this1 = system.Convert.ToUInt16(32);
					var this2 = this1;
					var parts = system._CsString.CsString_Impl_.Split_CharArray(a,[this2]);
					if(parts.length >= 3) {
						var r = alphaTab.platform.Platform.ParseInt(parts[0]);
						var g = alphaTab.platform.Platform.ParseInt(parts[1]);
						var b = alphaTab.platform.Platform.ParseInt(parts[2]);
						track.Color = new alphaTab.platform.model.Color(system.Convert.ToUInt8(r),system.Convert.ToUInt8(g),system.Convert.ToUInt8(b),255);
					}
					break;
				case "GeneralMidi":
					this.ParseGeneralMidi(track,c1);
					break;
				case "Instrument":
					var instrumentName = c1.GetAttribute("ref");
					if(StringTools.endsWith(instrumentName,"-gs") || StringTools.endsWith(instrumentName,"GrandStaff")) {
						track.EnsureStaveCount(2);
					}
					break;
				case "Lyrics":
					this.ParseLyrics(trackId,c1);
					break;
				case "Name":
					track.Name = c1.get_InnerText();
					break;
				case "PartSounding":
					this.ParsePartSounding(track,c1);
					break;
				case "PlaybackState":
					var state = c1.get_InnerText();
					track.PlaybackInfo.IsSolo = state == "Solo";
					track.PlaybackInfo.IsMute = state == "Mute";
					break;
				case "Properties":
					this.ParseTrackProperties(track,c1);
					break;
				case "ShortName":
					track.ShortName = c1.get_InnerText();
					break;
				default:
				}
			}
		}
		this._tracksById[trackId] = track;
	}
	,ParseLyrics: function(trackId,node) {
		var this1 = [];
		var tracks = this1;
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Line") {
					tracks.push(this.ParseLyricsLine(c1));
				}
			}
		}
		this._lyricsByTrack[trackId] = tracks;
	}
	,ParseLyricsLine: function(node) {
		var lyrics = new alphaTab.model.Lyrics();
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Offset":
					lyrics.StartBar = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "Text":
					lyrics.Text = c1.get_InnerText();
					break;
				default:
				}
			}
		}
		return lyrics;
	}
	,ParseDiagramCollection: function(track,node) {
		var items = node.FindChildElement("Items");
		var c = $iterator(items.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Item") {
					this.ParseDiagramItem(track,c1);
				}
			}
		}
	}
	,ParseDiagramItem: function(track,node) {
		var chord = new alphaTab.model.Chord();
		var chordId = node.GetAttribute("id");
		chord.Name = node.GetAttribute("name");
		track.Chords[chordId] = chord;
		var diagram = node.FindChildElement("Diagram");
		var stringCount = alphaTab.platform.Platform.ParseInt(diagram.GetAttribute("stringCount"));
		var baseFret = alphaTab.platform.Platform.ParseInt(diagram.GetAttribute("baseFret"));
		chord.FirstFret = baseFret + 1;
		var i = 0;
		while(i < stringCount) {
			chord.Strings.push(-1);
			++i;
		}
		var c = $iterator(diagram.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Fingering":
					var this1 = {}
					var existingFingers = this1;
					var p = $iterator(c1.ChildNodes)();
					while(p.hasNext()) {
						var p1 = p.next();
						if(p1.NodeType == 1) {
							var _g1 = p1.LocalName;
							if(_g1 == "Position") {
								var finger = -2;
								var fret = baseFret + alphaTab.platform.Platform.ParseInt(p1.GetAttribute("fret"));
								var _g2 = p1.GetAttribute("finger");
								switch(_g2) {
								case "Index":
									finger = 1;
									break;
								case "Middle":
									finger = 2;
									break;
								case "None":
									break;
								case "Pinky":
									finger = 4;
									break;
								case "Rank":
									finger = 3;
									break;
								case "Thumb":
									finger = 0;
									break;
								default:
								}
								if(finger != -2) {
									if(existingFingers.hasOwnProperty(finger)) {
										chord.BarreFrets.push(fret);
									} else {
										existingFingers[finger] = true;
									}
								}
							}
						}
					}
					break;
				case "Fret":
					var guitarString = alphaTab.platform.Platform.ParseInt(c1.GetAttribute("string"));
					chord.Strings[stringCount - guitarString - 1] = baseFret + alphaTab.platform.Platform.ParseInt(c1.GetAttribute("fret"));
					break;
				default:
				}
			}
		}
	}
	,ParseTrackProperties: function(track,node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Property") {
					this.ParseTrackProperty(track,c1);
				}
			}
		}
	}
	,ParseTrackProperty: function(track,node) {
		var propertyName = node.GetAttribute("name");
		switch(propertyName) {
		case "CapoFret":
			track.Capo = alphaTab.platform.Platform.ParseInt(node.FindChildElement("Fret").get_InnerText());
			break;
		case "ChordCollection":case "DiagramCollection":
			this.ParseDiagramCollection(track,node);
			break;
		case "Tuning":
			var a = node.FindChildElement("Pitches").get_InnerText();
			var this1 = system.Convert.ToUInt16(32);
			var this2 = this1;
			var tuningParts = system._CsString.CsString_Impl_.Split_CharArray(a,[this2]);
			var this3 = new Int32Array(tuningParts.length);
			var tuning = this3;
			var i = 0;
			while(i < tuning.length) {
				tuning[tuning.length - 1 - i] = alphaTab.platform.Platform.ParseInt(tuningParts[i]);
				++i;
			}
			track.Tuning = tuning;
			break;
		default:
		}
	}
	,ParseGeneralMidi: function(track,node) {
		var tmp = node.FindChildElement("Port").get_InnerText();
		track.PlaybackInfo.Port = alphaTab.platform.Platform.ParseInt(tmp);
		var tmp1 = node.FindChildElement("Program").get_InnerText();
		track.PlaybackInfo.Program = alphaTab.platform.Platform.ParseInt(tmp1);
		var tmp2 = node.FindChildElement("PrimaryChannel").get_InnerText();
		track.PlaybackInfo.PrimaryChannel = alphaTab.platform.Platform.ParseInt(tmp2);
		var tmp3 = node.FindChildElement("SecondaryChannel").get_InnerText();
		track.PlaybackInfo.SecondaryChannel = alphaTab.platform.Platform.ParseInt(tmp3);
		track.IsPercussion = node.GetAttribute("table") == "Percussion";
	}
	,ParsePartSounding: function(track,node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "TranspositionPitch") {
					track.DisplayTranspositionPitch = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
				}
			}
		}
	}
	,ParseMasterBarsNode: function(node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "MasterBar") {
					this.ParseMasterBar(c1);
				}
			}
		}
	}
	,ParseMasterBar: function(node) {
		var masterBar = new alphaTab.model.MasterBar();
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "AlternateEndings":
					var a = c1.get_InnerText();
					var this1 = system.Convert.ToUInt16(32);
					var this2 = this1;
					var alternateEndings = system._CsString.CsString_Impl_.Split_CharArray(a,[this2]);
					var i = 0;
					var k = 0;
					while(k < alternateEndings.length) {
						i = i | 1 << -1 + alphaTab.platform.Platform.ParseInt(alternateEndings[k]);
						++k;
					}
					masterBar.AlternateEndings = system.Convert.ToUInt8(i);
					break;
				case "Bars":
					var this3 = this._barsOfMasterBar;
					var a1 = c1.get_InnerText();
					var this4 = system.Convert.ToUInt16(32);
					var this5 = this4;
					this3.push(system._CsString.CsString_Impl_.Split_CharArray(a1,[this5]));
					break;
				case "DoubleBar":
					masterBar.IsDoubleBar = true;
					break;
				case "Key":
					masterBar.KeySignature = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("AccidentalCount").get_InnerText());
					var mode = c1.FindChildElement("Mode");
					if(mode != null) {
						var _g1 = mode.get_InnerText().toLowerCase();
						switch(_g1) {
						case "major":
							masterBar.KeySignatureType = 0;
							break;
						case "minor":
							masterBar.KeySignatureType = 1;
							break;
						default:
						}
					}
					break;
				case "Repeat":
					if(c1.GetAttribute("start").toLowerCase() == "true") {
						masterBar.IsRepeatStart = true;
					}
					if(c1.GetAttribute("end").toLowerCase() == "true" && c1.GetAttribute("count") != null) {
						masterBar.RepeatCount = alphaTab.platform.Platform.ParseInt(c1.GetAttribute("count"));
					}
					break;
				case "Section":
					masterBar.Section = new alphaTab.model.Section();
					masterBar.Section.Marker = c1.FindChildElement("Letter").get_InnerText();
					masterBar.Section.Text = c1.FindChildElement("Text").get_InnerText();
					break;
				case "Time":
					var a2 = c1.get_InnerText();
					var this6 = system.Convert.ToUInt16(47);
					var this7 = this6;
					var timeParts = system._CsString.CsString_Impl_.Split_CharArray(a2,[this7]);
					masterBar.TimeSignatureNumerator = alphaTab.platform.Platform.ParseInt(timeParts[0]);
					masterBar.TimeSignatureDenominator = alphaTab.platform.Platform.ParseInt(timeParts[1]);
					break;
				case "TripletFeel":
					var _g2 = c1.get_InnerText();
					switch(_g2) {
					case "Dotted16th":
						masterBar.TripletFeel = 3;
						break;
					case "Dotted8th":
						masterBar.TripletFeel = 4;
						break;
					case "NoTripletFeel":
						masterBar.TripletFeel = 0;
						break;
					case "Scottish16th":
						masterBar.TripletFeel = 5;
						break;
					case "Scottish8th":
						masterBar.TripletFeel = 6;
						break;
					case "Triplet16th":
						masterBar.TripletFeel = 1;
						break;
					case "Triplet8th":
						masterBar.TripletFeel = 2;
						break;
					default:
					}
					break;
				default:
				}
			}
		}
		this._masterBars.push(masterBar);
	}
	,ParseBars: function(node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Bar") {
					this.ParseBar(c1);
				}
			}
		}
	}
	,ParseBar: function(node) {
		var bar = new alphaTab.model.Bar();
		var barId = node.GetAttribute("id");
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Clef":
					var _g1 = c1.get_InnerText();
					switch(_g1) {
					case "C3":
						bar.Clef = 1;
						break;
					case "C4":
						bar.Clef = 2;
						break;
					case "F4":
						bar.Clef = 3;
						break;
					case "G2":
						bar.Clef = 4;
						break;
					case "Neutral":
						bar.Clef = 0;
						break;
					default:
					}
					break;
				case "Ottavia":
					var _g2 = c1.get_InnerText();
					switch(_g2) {
					case "15ma":
						bar.ClefOttavia = 0;
						break;
					case "15mb":
						bar.ClefOttavia = 4;
						break;
					case "8va":
						bar.ClefOttavia = 1;
						break;
					case "8vb":
						bar.ClefOttavia = 3;
						break;
					default:
					}
					break;
				case "Voices":
					var this1 = this._voicesOfBar;
					var a = c1.get_InnerText();
					var this2 = system.Convert.ToUInt16(32);
					var this3 = this2;
					this1[barId] = system._CsString.CsString_Impl_.Split_CharArray(a,[this3]);
					break;
				default:
				}
			}
		}
		this._barsById[barId] = bar;
	}
	,ParseVoices: function(node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Voice") {
					this.ParseVoice(c1);
				}
			}
		}
	}
	,ParseVoice: function(node) {
		var voice = new alphaTab.model.Voice();
		var voiceId = node.GetAttribute("id");
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Beats") {
					var this1 = this._beatsOfVoice;
					var a = c1.get_InnerText();
					var this2 = system.Convert.ToUInt16(32);
					var this3 = this2;
					this1[voiceId] = system._CsString.CsString_Impl_.Split_CharArray(a,[this3]);
				}
			}
		}
		this._voiceById[voiceId] = voice;
	}
	,ParseBeats: function(node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Beat") {
					this.ParseBeat(c1);
				}
			}
		}
	}
	,ParseBeat: function(node) {
		var beat = new alphaTab.model.Beat();
		var beatId = node.GetAttribute("id");
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Arpeggio":
					if(c1.get_InnerText() == "Up") {
						beat.BrushType = 3;
					} else {
						beat.BrushType = 4;
					}
					break;
				case "Chord":
					beat.ChordId = c1.get_InnerText();
					break;
				case "Dynamic":
					var _g1 = c1.get_InnerText();
					switch(_g1) {
					case "F":
						beat.Dynamic = 5;
						break;
					case "FF":
						beat.Dynamic = 6;
						break;
					case "FFF":
						beat.Dynamic = 7;
						break;
					case "MF":
						beat.Dynamic = 4;
						break;
					case "MP":
						beat.Dynamic = 3;
						break;
					case "P":
						beat.Dynamic = 2;
						break;
					case "PP":
						beat.Dynamic = 1;
						break;
					case "PPP":
						beat.Dynamic = 0;
						break;
					default:
					}
					break;
				case "Fadding":
					if(c1.get_InnerText() == "FadeIn") {
						beat.FadeIn = true;
					}
					break;
				case "FreeText":
					beat.Text = c1.get_InnerText();
					break;
				case "GraceNotes":
					var _g2 = c1.get_InnerText();
					switch(_g2) {
					case "BeforeBeat":
						beat.GraceType = 2;
						break;
					case "OnBeat":
						beat.GraceType = 1;
						break;
					default:
					}
					break;
				case "Hairpin":
					var _g3 = c1.get_InnerText();
					switch(_g3) {
					case "Crescendo":
						beat.Crescendo = 1;
						break;
					case "Decrescendo":
						beat.Crescendo = 2;
						break;
					default:
					}
					break;
				case "Legato":
					if(c1.GetAttribute("origin") == "true") {
						beat.IsLegatoOrigin = true;
					}
					break;
				case "Notes":
					var this1 = this._notesOfBeat;
					var a = c1.get_InnerText();
					var this2 = system.Convert.ToUInt16(32);
					var this3 = this2;
					this1[beatId] = system._CsString.CsString_Impl_.Split_CharArray(a,[this3]);
					break;
				case "Properties":
					this.ParseBeatProperties(c1,beat);
					break;
				case "Rhythm":
					this._rhythmOfBeat[beatId] = c1.GetAttribute("ref");
					break;
				case "Tremolo":
					var _g4 = c1.get_InnerText();
					switch(_g4) {
					case "1/2":
						beat.TremoloSpeed = 8;
						break;
					case "1/4":
						beat.TremoloSpeed = 16;
						break;
					case "1/8":
						beat.TremoloSpeed = 32;
						break;
					default:
					}
					break;
				case "XProperties":
					this.ParseBeatXProperties(c1,beat);
					break;
				default:
				}
			}
		}
		this._beatById[beatId] = beat;
	}
	,ParseBeatXProperties: function(node,beat) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "XProperty") {
					var id = c1.GetAttribute("id");
					if(id == "1124204545") {
						var val = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("Int").get_InnerText());
						beat.InvertBeamDirection = val == 1;
					}
				}
			}
		}
	}
	,ParseBeatProperties: function(node,beat) {
		var isWhammy = false;
		var whammyOrigin = null;
		var whammyMiddleValue = null;
		var whammyMiddleOffset1 = null;
		var whammyMiddleOffset2 = null;
		var whammyDestination = null;
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Property") {
					var name = c1.GetAttribute("name");
					switch(name) {
					case "Brush":
						if(c1.FindChildElement("Direction").get_InnerText() == "Up") {
							beat.BrushType = 1;
						} else {
							beat.BrushType = 2;
						}
						break;
					case "PickStroke":
						if(c1.FindChildElement("Direction").get_InnerText() == "Up") {
							beat.PickStroke = 1;
						} else {
							beat.PickStroke = 2;
						}
						break;
					case "Popped":
						if(c1.FindChildElement("Enable") != null) {
							beat.Pop = true;
						}
						break;
					case "Slapped":
						if(c1.FindChildElement("Enable") != null) {
							beat.Slap = true;
						}
						break;
					case "VibratoWTremBar":
						var _g1 = c1.FindChildElement("Strength").get_InnerText();
						switch(_g1) {
						case "Slight":
							beat.Vibrato = 1;
							break;
						case "Wide":
							beat.Vibrato = 2;
							break;
						default:
						}
						break;
					case "WhammyBar":
						isWhammy = true;
						break;
					case "WhammyBarDestinationOffset":
						if(whammyDestination == null) {
							whammyDestination = new alphaTab.model.BendPoint(0,0);
						}
						var s = c1.FindChildElement("Float").get_InnerText();
						whammyDestination.Offset = this.ToBendOffset(parseFloat(s));
						break;
					case "WhammyBarDestinationValue":
						if(whammyDestination == null) {
							whammyDestination = new alphaTab.model.BendPoint(60,0);
						}
						var s1 = c1.FindChildElement("Float").get_InnerText();
						whammyDestination.Value = this.ToBendValue(parseFloat(s1));
						break;
					case "WhammyBarExtend":
						break;
					case "WhammyBarMiddleOffset1":
						var s2 = c1.FindChildElement("Float").get_InnerText();
						whammyMiddleOffset1 = this.ToBendOffset(parseFloat(s2));
						break;
					case "WhammyBarMiddleOffset2":
						var s3 = c1.FindChildElement("Float").get_InnerText();
						whammyMiddleOffset2 = this.ToBendOffset(parseFloat(s3));
						break;
					case "WhammyBarMiddleValue":
						var s4 = c1.FindChildElement("Float").get_InnerText();
						whammyMiddleValue = this.ToBendValue(parseFloat(s4));
						break;
					case "WhammyBarOriginOffset":
						if(whammyOrigin == null) {
							whammyOrigin = new alphaTab.model.BendPoint(0,0);
						}
						var s5 = c1.FindChildElement("Float").get_InnerText();
						whammyOrigin.Offset = this.ToBendOffset(parseFloat(s5));
						break;
					case "WhammyBarOriginValue":
						if(whammyOrigin == null) {
							whammyOrigin = new alphaTab.model.BendPoint(0,0);
						}
						var s6 = c1.FindChildElement("Float").get_InnerText();
						whammyOrigin.Value = this.ToBendValue(parseFloat(s6));
						break;
					default:
					}
				}
			}
		}
		if(isWhammy) {
			if(whammyOrigin == null) {
				whammyOrigin = new alphaTab.model.BendPoint(0,0);
			}
			if(whammyDestination == null) {
				whammyDestination = new alphaTab.model.BendPoint(60,0);
			}
			var this1 = [];
			var whammy = this1;
			whammy.push(whammyOrigin);
			if(whammyMiddleOffset1 != null && whammyMiddleValue != null) {
				whammy.push(new alphaTab.model.BendPoint(whammyMiddleOffset1,whammyMiddleValue));
			}
			if(whammyMiddleOffset2 != null && whammyMiddleValue != null) {
				whammy.push(new alphaTab.model.BendPoint(whammyMiddleOffset2,whammyMiddleValue));
			}
			if(whammyMiddleOffset1 == null && whammyMiddleOffset2 == null && whammyMiddleValue != null) {
				whammy.push(new alphaTab.model.BendPoint(60 / 2 | 0,whammyMiddleValue));
			}
			whammy.push(whammyDestination);
			beat.WhammyBarPoints = whammy;
		}
	}
	,ParseNotes: function(node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Note") {
					this.ParseNote(c1);
				}
			}
		}
	}
	,ParseNote: function(node) {
		var note = new alphaTab.model.Note();
		var noteId = node.GetAttribute("id");
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "Accent":
					var accentFlags = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					if((accentFlags & 1) != 0) {
						note.IsStaccato = true;
					}
					if((accentFlags & 4) != 0) {
						note.Accentuated = 2;
					}
					if((accentFlags & 8) != 0) {
						note.Accentuated = 1;
					}
					break;
				case "AntiAccent":
					if(c1.get_InnerText().toLowerCase() == "normal") {
						note.IsGhost = true;
					}
					break;
				case "LeftFingering":
					note.IsFingering = true;
					var _g1 = c1.get_InnerText();
					switch(_g1) {
					case "A":
						note.LeftHandFinger = 3;
						break;
					case "C":
						note.LeftHandFinger = 4;
						break;
					case "I":
						note.LeftHandFinger = 1;
						break;
					case "M":
						note.LeftHandFinger = 2;
						break;
					case "P":
						note.LeftHandFinger = 0;
						break;
					default:
					}
					break;
				case "LetRing":
					note.IsLetRing = true;
					break;
				case "Properties":
					this.ParseNoteProperties(c1,note,noteId);
					break;
				case "RightFingering":
					note.IsFingering = true;
					var _g2 = c1.get_InnerText();
					switch(_g2) {
					case "A":
						note.RightHandFinger = 3;
						break;
					case "C":
						note.RightHandFinger = 4;
						break;
					case "I":
						note.RightHandFinger = 1;
						break;
					case "M":
						note.RightHandFinger = 2;
						break;
					case "P":
						note.RightHandFinger = 0;
						break;
					default:
					}
					break;
				case "Tie":
					if(c1.GetAttribute("origin").toLowerCase() == "true") {
						note.IsTieOrigin = true;
					}
					if(c1.GetAttribute("destination").toLowerCase() == "true") {
						note.IsTieDestination = true;
					}
					break;
				case "Trill":
					note.TrillValue = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					note.TrillSpeed = 16;
					break;
				case "Vibrato":
					var _g3 = c1.get_InnerText();
					switch(_g3) {
					case "Slight":
						note.Vibrato = 1;
						break;
					case "Wide":
						note.Vibrato = 2;
						break;
					default:
					}
					break;
				default:
				}
			}
		}
		this._noteById[noteId] = note;
	}
	,ParseNoteProperties: function(node,note,noteId) {
		var isBended = false;
		var bendOrigin = null;
		var bendMiddleValue = null;
		var bendMiddleOffset1 = null;
		var bendMiddleOffset2 = null;
		var bendDestination = null;
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Property") {
					var name = c1.GetAttribute("name");
					switch(name) {
					case "BendDestinationOffset":
						if(bendDestination == null) {
							bendDestination = new alphaTab.model.BendPoint(0,0);
						}
						var s = c1.FindChildElement("Float").get_InnerText();
						bendDestination.Offset = this.ToBendOffset(parseFloat(s));
						break;
					case "BendDestinationValue":
						if(bendDestination == null) {
							bendDestination = new alphaTab.model.BendPoint(60,0);
						}
						var s1 = c1.FindChildElement("Float").get_InnerText();
						bendDestination.Value = this.ToBendValue(parseFloat(s1));
						break;
					case "BendMiddleOffset1":
						var s2 = c1.FindChildElement("Float").get_InnerText();
						bendMiddleOffset1 = this.ToBendOffset(parseFloat(s2));
						break;
					case "BendMiddleOffset2":
						var s3 = c1.FindChildElement("Float").get_InnerText();
						bendMiddleOffset2 = this.ToBendOffset(parseFloat(s3));
						break;
					case "BendMiddleValue":
						var s4 = c1.FindChildElement("Float").get_InnerText();
						bendMiddleValue = this.ToBendValue(parseFloat(s4));
						break;
					case "BendOriginOffset":
						if(bendOrigin == null) {
							bendOrigin = new alphaTab.model.BendPoint(0,0);
						}
						var s5 = c1.FindChildElement("Float").get_InnerText();
						bendOrigin.Offset = this.ToBendOffset(parseFloat(s5));
						break;
					case "BendOriginValue":
						if(bendOrigin == null) {
							bendOrigin = new alphaTab.model.BendPoint(0,0);
						}
						var s6 = c1.FindChildElement("Float").get_InnerText();
						bendOrigin.Value = this.ToBendValue(parseFloat(s6));
						break;
					case "Bended":
						isBended = true;
						break;
					case "Element":
						note.Element = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("Element").get_InnerText());
						break;
					case "Fret":
						note.Fret = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("Fret").get_InnerText());
						break;
					case "HarmonicFret":
						var hfret = c1.FindChildElement("HFret");
						if(hfret != null) {
							var s7 = hfret.get_InnerText();
							note.HarmonicValue = parseFloat(s7);
						}
						break;
					case "HarmonicType":
						var htype = c1.FindChildElement("HType");
						if(htype != null) {
							var _g1 = htype.get_InnerText();
							switch(_g1) {
							case "Artificial":
								note.HarmonicType = 2;
								break;
							case "Feedback":
								note.HarmonicType = 6;
								break;
							case "Natural":
								note.HarmonicType = 1;
								break;
							case "NoHarmonic":
								note.HarmonicType = 0;
								break;
							case "Pinch":
								note.HarmonicType = 3;
								break;
							case "Semi":
								note.HarmonicType = 5;
								break;
							case "Tap":
								note.HarmonicType = 4;
								break;
							default:
							}
						}
						break;
					case "HopoDestination":
						break;
					case "HopoOrigin":
						if(c1.FindChildElement("Enable") != null) {
							note.IsHammerPullOrigin = true;
						}
						break;
					case "Muted":
						if(c1.FindChildElement("Enable") != null) {
							note.IsDead = true;
						}
						break;
					case "Octave":
						note.Octave = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("Number").get_InnerText());
						break;
					case "PalmMuted":
						if(c1.FindChildElement("Enable") != null) {
							note.IsPalmMute = true;
						}
						break;
					case "Slide":
						var slideFlags = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("Flags").get_InnerText());
						if((slideFlags & 1) != 0) {
							note.SlideType = 1;
						}
						if((slideFlags & 2) != 0) {
							note.SlideType = 2;
						}
						if((slideFlags & 4) != 0) {
							note.SlideType = 6;
						}
						if((slideFlags & 8) != 0) {
							note.SlideType = 5;
						}
						if((slideFlags & 16) != 0) {
							note.SlideType = 3;
						}
						if((slideFlags & 32) != 0) {
							note.SlideType = 4;
						}
						break;
					case "String":
						note.String = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("String").get_InnerText()) + 1;
						break;
					case "Tapped":
						this._tappedNotes[noteId] = true;
						break;
					case "Tone":
						note.Tone = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("Step").get_InnerText());
						break;
					case "Variation":
						note.Variation = alphaTab.platform.Platform.ParseInt(c1.FindChildElement("Variation").get_InnerText());
						break;
					default:
					}
				}
			}
		}
		if(isBended) {
			if(bendOrigin == null) {
				bendOrigin = new alphaTab.model.BendPoint(0,0);
			}
			if(bendDestination == null) {
				bendDestination = new alphaTab.model.BendPoint(60,0);
			}
			note.AddBendPoint(bendOrigin);
			if(bendMiddleOffset1 != null && bendMiddleValue != null) {
				note.AddBendPoint(new alphaTab.model.BendPoint(bendMiddleOffset1,bendMiddleValue));
			}
			if(bendMiddleOffset2 != null && bendMiddleValue != null) {
				note.AddBendPoint(new alphaTab.model.BendPoint(bendMiddleOffset2,bendMiddleValue));
			}
			if(bendMiddleOffset1 == null && bendMiddleOffset2 == null && bendMiddleValue != null) {
				note.AddBendPoint(new alphaTab.model.BendPoint(60 / 2 | 0,bendMiddleValue));
			}
			note.AddBendPoint(bendDestination);
		}
	}
	,ToBendValue: function(gpxValue) {
		var converted = gpxValue * 0.04;
		return system.Convert.ToInt32_Single(converted);
	}
	,ToBendOffset: function(gpxOffset) {
		var converted = gpxOffset * 0.6;
		return system.Convert.ToInt32_Single(converted);
	}
	,ParseRhythms: function(node) {
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "Rhythm") {
					this.ParseRhythm(c1);
				}
			}
		}
	}
	,ParseRhythm: function(node) {
		var rhythm = new alphaTab.importer.GpxRhythm();
		var rhythmId = node.GetAttribute("id");
		var c = $iterator(node.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "AugmentationDot":
					rhythm.Dots = alphaTab.platform.Platform.ParseInt(c1.GetAttribute("count"));
					break;
				case "NoteValue":
					var _g1 = c1.get_InnerText();
					switch(_g1) {
					case "128th":
						rhythm.Value = 128;
						break;
					case "16th":
						rhythm.Value = 16;
						break;
					case "256th":
						rhythm.Value = 256;
						break;
					case "32nd":
						rhythm.Value = 32;
						break;
					case "64th":
						rhythm.Value = 64;
						break;
					case "DoubleWhole":
						rhythm.Value = -2;
						break;
					case "Eighth":
						rhythm.Value = 8;
						break;
					case "Half":
						rhythm.Value = 2;
						break;
					case "Long":
						rhythm.Value = -4;
						break;
					case "Quarter":
						rhythm.Value = 4;
						break;
					case "Whole":
						rhythm.Value = 1;
						break;
					default:
					}
					break;
				case "PrimaryTuplet":
					rhythm.TupletNumerator = alphaTab.platform.Platform.ParseInt(c1.GetAttribute("num"));
					rhythm.TupletDenominator = alphaTab.platform.Platform.ParseInt(c1.GetAttribute("den"));
					break;
				default:
				}
			}
		}
		this._rhythmById[rhythmId] = rhythm;
	}
	,BuildModel: function() {
		var i = 0;
		var j = this._masterBars.length;
		while(i < j) {
			var masterBar = this._masterBars[i];
			this.Score.AddMasterBar(masterBar);
			++i;
		}
		var trackId = HxOverrides.iter(this._tracksMapping);
		while(trackId.hasNext()) {
			var trackId1 = trackId.next();
			if(trackId1 == null || trackId1.length == 0) {
				continue;
			}
			var track = this._tracksById[trackId1];
			this.Score.AddTrack(track);
		}
		var masterBarIndex = 0;
		while(masterBarIndex < this._barsOfMasterBar.length) {
			var barIds = this._barsOfMasterBar[masterBarIndex];
			var staveIndex = 0;
			var barIndex = 0;
			var trackIndex = 0;
			while(barIndex < barIds.length && trackIndex < this.Score.Tracks.length) {
				var barId = barIds[barIndex];
				if(barId != "-1") {
					var bar = this._barsById[barId];
					var track1 = this.Score.Tracks[trackIndex];
					track1.AddBarToStaff(staveIndex,bar);
					if(staveIndex == track1.Staves.length - 1) {
						++trackIndex;
						staveIndex = 0;
					} else {
						++staveIndex;
					}
				} else {
					++trackIndex;
				}
				++barIndex;
			}
			++masterBarIndex;
		}
		var this1 = this._barsById;
		var barId1 = $iterator(Object.keys(this1))();
		while(barId1.hasNext()) {
			var barId2 = barId1.next();
			var bar1 = this._barsById[barId2];
			if(this._voicesOfBar.hasOwnProperty(barId2)) {
				var voiceId = HxOverrides.iter(this._voicesOfBar[barId2]);
				while(voiceId.hasNext()) {
					var voiceId1 = voiceId.next();
					if(voiceId1 != "-1") {
						bar1.AddVoice(this._voiceById[voiceId1]);
					} else {
						var voice = new alphaTab.model.Voice();
						bar1.AddVoice(voice);
						var beat = new alphaTab.model.Beat();
						beat.IsEmpty = true;
						beat.Duration = 4;
						voice.AddBeat(beat);
					}
				}
			}
		}
		var this2 = this._beatById;
		var beatId = $iterator(Object.keys(this2))();
		while(beatId.hasNext()) {
			var beatId1 = beatId.next();
			var beat1 = this._beatById[beatId1];
			var rhythmId = this._rhythmOfBeat[beatId1];
			var rhythm = this._rhythmById[rhythmId];
			beat1.Duration = rhythm.Value;
			beat1.Dots = rhythm.Dots;
			beat1.TupletNumerator = rhythm.TupletNumerator;
			beat1.TupletDenominator = rhythm.TupletDenominator;
			if(this._notesOfBeat.hasOwnProperty(beatId1)) {
				var noteId = HxOverrides.iter(this._notesOfBeat[beatId1]);
				while(noteId.hasNext()) {
					var noteId1 = noteId.next();
					if(noteId1 != "-1") {
						beat1.AddNote(this._noteById[noteId1]);
						if(this._tappedNotes.hasOwnProperty(noteId1)) {
							beat1.Tap = true;
						}
					}
				}
			}
		}
		var this3 = this._voiceById;
		var voiceId2 = $iterator(Object.keys(this3))();
		while(voiceId2.hasNext()) {
			var voiceId3 = voiceId2.next();
			var voice1 = this._voiceById[voiceId3];
			if(this._beatsOfVoice.hasOwnProperty(voiceId3)) {
				var beatId2 = HxOverrides.iter(this._beatsOfVoice[voiceId3]);
				while(beatId2.hasNext()) {
					var beatId3 = beatId2.next();
					if(beatId3 != "-1") {
						voice1.AddBeat(this._beatById[beatId3].Clone());
					}
				}
			}
		}
		var this4 = this._masterTrackAutomations;
		var barIndex1 = $iterator(Object.keys(this4))();
		while(barIndex1.hasNext()) {
			var barIndex2 = barIndex1.next();
			var automations = this._masterTrackAutomations[barIndex2];
			var masterBar1 = this.Score.MasterBars[alphaTab.platform.Platform.ParseInt(barIndex2)];
			var i1 = 0;
			var j1 = automations.length;
			while(i1 < j1) {
				var automation = automations[i1];
				if(automation.Type == 0) {
					if(barIndex2 == "0") {
						var tmp = system.Convert.ToInt32_Single(automation.Value);
						this.Score.Tempo = tmp;
						if(automation.Text != null) {
							this.Score.TempoLabel = automation.Text;
						}
					}
					masterBar1.TempoAutomation = automation;
				}
				++i1;
			}
		}
	}
	,__class__: alphaTab.importer.GpxParser
};
alphaTab.importer.GpxRhythm = $hx_exports["alphaTab"]["importer"]["GpxRhythm"] = function() {
	this.Dots = 0;
	this.TupletDenominator = 0;
	this.TupletNumerator = 0;
	this.Value = null;
	this.TupletDenominator = -1;
	this.TupletNumerator = -1;
	this.Value = 4;
};
alphaTab.importer.GpxRhythm.__name__ = true;
alphaTab.importer.GpxRhythm.prototype = {
	__class__: alphaTab.importer.GpxRhythm
};
alphaTab.importer.MixTableChange = $hx_exports["alphaTab"]["importer"]["MixTableChange"] = function() {
	this.Volume = 0;
	this.Balance = 0;
	this.Instrument = 0;
	this.TempoName = null;
	this.Tempo = 0;
	this.Duration = 0;
	this.Volume = -1;
	this.Balance = -1;
	this.Instrument = -1;
	this.TempoName = null;
	this.Tempo = -1;
	this.Duration = 0;
};
alphaTab.importer.MixTableChange.__name__ = true;
alphaTab.importer.MixTableChange.prototype = {
	__class__: alphaTab.importer.MixTableChange
};
alphaTab.importer.MusicXmlImporter = $hx_exports["alphaTab"]["importer"]["MusicXmlImporter"] = function() {
	var this1 = {}
	this._voiceOfStaff = this1;
	alphaTab.importer.ScoreImporter.call(this);
};
alphaTab.importer.MusicXmlImporter.__name__ = true;
alphaTab.importer.MusicXmlImporter.ParseTied = function(element,note) {
	if(note.Beat.GraceType != 0) {
		return;
	}
	if(element.GetAttribute("type") == "start") {
		note.IsTieOrigin = true;
	} else {
		note.IsTieDestination = true;
	}
};
alphaTab.importer.MusicXmlImporter.__super__ = alphaTab.importer.ScoreImporter;
alphaTab.importer.MusicXmlImporter.prototype = $extend(alphaTab.importer.ScoreImporter.prototype,{
	get_Name: function() {
		return "MusicXML";
	}
	,ReadScore: function() {
		var this1 = {}
		this._trackById = this1;
		var xml = alphaTab.platform.Platform.ToString(this.Data.ReadAll());
		var dom;
		try {
			dom = new alphaTab.xml.XmlDocument(xml);
		} catch( __e ) {
			if (__e instanceof js._Boot.HaxeError) __e = __e.val;
			if( js.Boot.__instanceof(__e,system.Exception) ) {
				throw new js._Boot.HaxeError(new alphaTab.importer.UnsupportedFormatException().UnsupportedFormatException(""));
			} else throw(__e);
		}
		this._score = new alphaTab.model.Score();
		this._score.Tempo = 120;
		this.ParseDom(dom);
		this._score.Finish();
		return this._score;
	}
	,ParseDom: function(dom) {
		var root = dom.DocumentElement;
		if(root == null) {
			throw new js._Boot.HaxeError(new alphaTab.importer.UnsupportedFormatException().UnsupportedFormatException(""));
		}
		var _g = root.LocalName;
		switch(_g) {
		case "score-partwise":
			this.ParsePartwise(root);
			break;
		case "score-timewise":
			break;
		default:
			throw new js._Boot.HaxeError(new alphaTab.importer.UnsupportedFormatException().UnsupportedFormatException(""));
		}
	}
	,ParsePartwise: function(element) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "identification":
					this.ParseIdentification(c1);
					break;
				case "movement-title":
					this._score.Title = c1.FirstChild.get_InnerText();
					break;
				case "part":
					this.ParsePart(c1);
					break;
				case "part-list":
					this.ParsePartList(c1);
					break;
				default:
				}
			}
		}
	}
	,ParsePart: function(element) {
		var id = element.GetAttribute("id");
		if(!this._trackById.hasOwnProperty(id)) {
			return;
		}
		var track = this._trackById[id];
		var isFirstMeasure = true;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "measure") {
					if(this.ParseMeasure(c1,track,isFirstMeasure)) {
						isFirstMeasure = false;
					}
				}
			}
		}
	}
	,ParseMeasure: function(element,track,isFirstMeasure) {
		if(element.GetAttribute("implicit") == "yes" && element.GetElementsByTagName("note",false).length == 0) {
			return false;
		}
		var barIndex = 0;
		if(isFirstMeasure) {
			this._divisionsPerQuarterNote = 0;
			this._trackFirstMeasureNumber = alphaTab.platform.Platform.ParseInt(element.GetAttribute("number"));
			if(this._trackFirstMeasureNumber == -2147483648) {
				this._trackFirstMeasureNumber = 0;
			}
			barIndex = 0;
		} else {
			barIndex = alphaTab.platform.Platform.ParseInt(element.GetAttribute("number"));
			if(barIndex == -2147483648) {
				return false;
			}
			barIndex = barIndex - this._trackFirstMeasureNumber;
		}
		if(isFirstMeasure) {
			var attributes = element.GetElementsByTagName("attributes",false);
			if(attributes.length > 0) {
				var stavesElements = attributes[0].GetElementsByTagName("staves",false);
				if(stavesElements.length > 0) {
					var staves = alphaTab.platform.Platform.ParseInt(stavesElements[0].get_InnerText());
					track.EnsureStaveCount(staves);
				}
			}
		}
		var size = track.Staves.length;
		var this1 = new Array(size);
		var bars = this1;
		var masterBar = null;
		var b = track.Staves[0].Bars.length;
		while(b <= barIndex) {
			var s = 0;
			while(s < track.Staves.length) {
				var bar = bars[s] = new alphaTab.model.Bar();
				if(track.Staves[s].Bars.length > 0) {
					var previousBar = track.Staves[s].Bars[track.Staves[s].Bars.length - 1];
					bar.Clef = previousBar.Clef;
				}
				masterBar = this.GetOrCreateMasterBar(barIndex);
				track.AddBarToStaff(s,bar);
				var v = 0;
				while(v < this._maxVoices) {
					var emptyVoice = new alphaTab.model.Voice();
					bar.AddVoice(emptyVoice);
					var _tmp = new alphaTab.model.Beat();
					_tmp.IsEmpty = true;
					var emptyBeat = _tmp;
					emptyVoice.AddBeat(emptyBeat);
					++v;
				}
				++s;
			}
			++b;
		}
		var attributesParsed = false;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "attributes":
					if(!attributesParsed) {
						this.ParseAttributes(c1,bars,masterBar);
						attributesParsed = true;
					}
					break;
				case "barline":
					this.ParseBarline(c1,masterBar);
					break;
				case "direction":
					this.ParseDirection(c1,masterBar);
					break;
				case "forward":
					this.ParseForward(c1,bars);
					break;
				case "harmony":
					this.ParseHarmony(c1,track);
					break;
				case "note":
					this.ParseNoteBeat(c1,bars);
					break;
				case "sound":
					break;
				default:
				}
			}
		}
		return true;
	}
	,GetOrCreateBeat: function(element,bars,chord) {
		var voiceIndex = 0;
		var voiceNodes = element.GetElementsByTagName("voice",false);
		if(voiceNodes.length > 0) {
			voiceIndex = alphaTab.platform.Platform.ParseInt(voiceNodes[0].get_InnerText()) - 1;
		}
		var previousBeatWasPulled = this._previousBeatWasPulled;
		this._previousBeatWasPulled = false;
		var staffElement = element.GetElementsByTagName("staff",false);
		var staff = 1;
		if(staffElement.length > 0) {
			staff = alphaTab.platform.Platform.ParseInt(staffElement[0].get_InnerText());
			if((this._isBeamContinue || previousBeatWasPulled) && this._previousBeat.Voice.Bar.Staff.Index != staff - 1) {
				staff = this._previousBeat.Voice.Bar.Staff.Index + 1;
				this._previousBeatWasPulled = true;
			}
			var staffId = Std.string(bars[0].Staff.Track.Index) + "-" + Std.string(staff);
			if(!this._voiceOfStaff.hasOwnProperty(staffId)) {
				this._voiceOfStaff[staffId] = voiceIndex;
			}
			voiceIndex = voiceIndex - this._voiceOfStaff[staffId];
		}
		var bar = bars[staff - 1];
		var beat;
		var voice = this.GetOrCreateVoice(bar,voiceIndex);
		if(chord || voice.Beats.length == 1 && voice.IsEmpty) {
			beat = voice.Beats[voice.Beats.length - 1];
		} else {
			beat = new alphaTab.model.Beat();
			beat.IsEmpty = false;
			voice.AddBeat(beat);
		}
		this._isBeamContinue = false;
		this._previousBeat = beat;
		return beat;
	}
	,ParseForward: function(element,bars) {
		var beat = this.GetOrCreateBeat(element,bars,false);
		var durationInDivisions = alphaTab.platform.Platform.ParseInt(element.FindChildElement("duration").get_InnerText());
		var duration = durationInDivisions * 4 / js.Boot.__cast(this._divisionsPerQuarterNote , Float);
		var durations = new Int32Array([64,32,16,8,4,2,1]);
		var d = new system.Int32ArrayIterator(durations);
		while(d.hasNext()) {
			var d1 = d.next();
			if(duration >= d1) {
				beat.Duration = js.Boot.__cast(d1 , Int);
				duration = duration - d1;
				break;
			}
		}
		var tmp = duration > 0;
		beat.IsEmpty = false;
	}
	,ParseStaffDetails: function(element,track) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "staff-lines":
					var this1 = new Int32Array(alphaTab.platform.Platform.ParseInt(c1.get_InnerText()));
					track.Tuning = this1;
					break;
				case "staff-tuning":
					this.ParseStaffTuning(c1,track);
					break;
				default:
				}
			}
		}
		if(this.IsEmptyTuning(track.Tuning)) {
			var this2 = new Int32Array(0);
			track.Tuning = this2;
		}
	}
	,ParseStaffTuning: function(element,track) {
		var line = alphaTab.platform.Platform.ParseInt(element.GetAttribute("line"));
		var tuningStep = "C";
		var tuningOctave = "";
		var tuningAlter = 0;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "tuning-alter":
					tuningAlter = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "tuning-octave":
					tuningOctave = c1.get_InnerText();
					break;
				case "tuning-step":
					tuningStep = c1.get_InnerText();
					break;
				default:
				}
			}
		}
		track.Tuning[track.Tuning.length - line] = alphaTab.model.TuningParser.GetTuningForText(tuningStep + tuningOctave) + tuningAlter;
	}
	,ParseHarmony: function(element,track) {
		var root = element.FindChildElement("root");
		var rootStep = root.FindChildElement("root-step").get_InnerText();
		var kind = element.FindChildElement("kind").get_InnerText();
		var chord = new alphaTab.model.Chord();
		chord.Name = rootStep;
		this._currentChord = alphaTab.platform.Platform.NewGuid();
		track.Chords[this._currentChord] = chord;
	}
	,ParseBarline: function(element,masterBar) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "ending":
					this.ParseEnding(c1,masterBar);
					break;
				case "repeat":
					this.ParseRepeat(c1,masterBar);
					break;
				default:
				}
			}
		}
	}
	,ParseEnding: function(element,masterBar) {
		var number = alphaTab.platform.Platform.ParseInt(element.GetAttribute("number"));
		if(number > 0) {
			--number;
			masterBar.AlternateEndings = system.Convert.ToUInt8(masterBar.AlternateEndings | system.Convert.ToUInt8(1 << number));
		}
	}
	,ParseRepeat: function(element,masterBar) {
		var direction = element.GetAttribute("direction");
		var times = alphaTab.platform.Platform.ParseInt(element.GetAttribute("times"));
		if(times < 0) {
			times = 2;
		}
		if(direction == "backward") {
			masterBar.RepeatCount = times;
		} else if(direction == "forward") {
			masterBar.IsRepeatStart = true;
		}
	}
	,ParseNoteBeat: function(element,bars) {
		var chord = element.GetElementsByTagName("chord",false).length > 0;
		var beat = this.GetOrCreateBeat(element,bars,chord);
		beat.ChordId = this._currentChord;
		this._currentChord = null;
		var note = new alphaTab.model.Note();
		beat.Voice.IsEmpty = false;
		beat.IsEmpty = false;
		beat.AddNote(note);
		beat.Dots = 0;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "accidental":
					this.ParseAccidental(c1,note);
					break;
				case "beam":
					var beamMode = c1.get_InnerText();
					if(beamMode == "continue") {
						this._isBeamContinue = true;
					}
					break;
				case "cue":
					break;
				case "dot":
					beat.Dots++;
					break;
				case "duration":
					if(beat.get_IsRest()) {
						var duration = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
						switch(duration) {
						case 1:
							beat.Duration = 1;
							break;
						case 2:
							beat.Duration = 2;
							break;
						case 4:
							beat.Duration = 4;
							break;
						case 8:
							beat.Duration = 8;
							break;
						case 16:
							beat.Duration = 16;
							break;
						case 32:
							beat.Duration = 32;
							break;
						case 64:
							beat.Duration = 64;
							break;
						default:
							beat.Duration = 4;
						}
					}
					break;
				case "grace":
					beat.GraceType = 2;
					beat.Duration = 32;
					break;
				case "instrument":
					break;
				case "lyric":
					this.ParseLyric(c1,beat);
					break;
				case "notations":
					this.ParseNotations(c1,beat,note);
					break;
				case "notehead":
					if(c1.GetAttribute("parentheses") == "yes") {
						note.IsGhost = true;
					}
					break;
				case "pitch":
					this.ParsePitch(c1,note);
					break;
				case "rest":
					beat.IsEmpty = false;
					var this1 = [];
					beat.Notes = this1;
					break;
				case "stem":
					break;
				case "tie":
					alphaTab.importer.MusicXmlImporter.ParseTied(c1,note);
					break;
				case "time-modification":
					this.ParseTimeModification(c1,beat);
					break;
				case "type":
					beat.Duration = this.GetDuration(c1.get_InnerText());
					if(beat.GraceType != 0 && beat.Duration < 16) {
						beat.Duration = 8;
					}
					break;
				case "unpitched":
					this.ParseUnpitched(c1,note);
					break;
				default:
				}
			}
		}
		if(note.get_IsStringed()) {
			var i = 0;
			while(i < beat.Notes.length) {
				if(beat.Notes[i].String == note.String && beat.Notes[i] != note) {
					beat.RemoveNote(note);
					break;
				}
				++i;
			}
		}
	}
	,GetDuration: function(text) {
		switch(text) {
		case "128th":case "256th":case "64th":
			return 64;
		case "16th":
			return 16;
		case "32nd":
			return 32;
		case "breve":case "long":case "whole":
			return 1;
		case "eighth":
			return 8;
		case "half":
			return 2;
		case "quarter":
			return 4;
		default:
		}
		return 4;
	}
	,ParseLyric: function(element,beat) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "text") {
					var s = beat.Text;
					if(!(s == null || s.length == 0)) {
						beat.Text = beat.Text + (" " + c1.get_InnerText());
					} else {
						beat.Text = c1.get_InnerText();
					}
				}
			}
		}
	}
	,ParseAccidental: function(element,note) {
		var _g = element.get_InnerText();
		switch(_g) {
		case "double-sharp":
			break;
		case "flat":
			note.AccidentalMode = 4;
			break;
		case "flat-flat":
			break;
		case "natural":
			note.AccidentalMode = 2;
			break;
		case "natural-flat":
			break;
		case "natural-sharp":
			break;
		case "quarter-flat":
			break;
		case "quarter-sharp":
			break;
		case "sharp":
			note.AccidentalMode = 3;
			break;
		case "sharp-sharp":
			break;
		case "three-quarters-flat":
			break;
		case "three-quarters-sharp":
			break;
		default:
		}
	}
	,ParseNotations: function(element,beat,note) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "articulations":
					this.ParseArticulations(c1,note);
					break;
				case "dynamics":
					this.ParseDynamics(c1,beat);
					break;
				case "glissando":case "slide":
					if(c1.GetAttribute("type") == "start") {
						note.SlideType = 1;
					}
					break;
				case "ornaments":
					this.ParseOrnaments(c1,note);
					break;
				case "slur":
					if(c1.GetAttribute("type") == "start") {
						beat.IsLegatoOrigin = true;
					}
					break;
				case "technical":
					this.ParseTechnical(c1,note);
					break;
				case "tied":
					alphaTab.importer.MusicXmlImporter.ParseTied(c1,note);
					break;
				default:
				}
			}
		}
	}
	,ParseOrnaments: function(element,note) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "tremolo") {
					var tremoloSpeed = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					switch(tremoloSpeed) {
					case 1:
						note.Beat.TremoloSpeed = 8;
						break;
					case 2:
						note.Beat.TremoloSpeed = 16;
						break;
					case 3:
						note.Beat.TremoloSpeed = 32;
						break;
					default:
					}
				}
			}
		}
	}
	,ParseTechnical: function(element,note) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "fret":
					note.Fret = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "string":
					note.String = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					if(note.String != -2147483648) {
						note.String = note.Beat.Voice.Bar.Staff.Track.Tuning.length - note.String + 1;
					}
					break;
				default:
				}
			}
		}
		if(note.String == -2147483648 || note.Fret == -2147483648) {
			note.String = -1;
			note.Fret = -1;
		}
	}
	,ParseArticulations: function(element,note) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			var _g = c1.LocalName;
			switch(_g) {
			case "accent":
				note.Accentuated = 1;
				break;
			case "detached-legato":case "staccato":
				note.IsStaccato = true;
				break;
			case "strong-accent":
				note.Accentuated = 2;
				break;
			default:
			}
		}
	}
	,ParseDynamics: function(element,beat) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "f":
					beat.Dynamic = 5;
					break;
				case "ff":
					beat.Dynamic = 6;
					break;
				case "fff":
					beat.Dynamic = 7;
					break;
				case "mf":
					beat.Dynamic = 4;
					break;
				case "mp":
					beat.Dynamic = 3;
					break;
				case "p":
					beat.Dynamic = 2;
					break;
				case "pp":
					beat.Dynamic = 1;
					break;
				case "ppp":
					beat.Dynamic = 0;
					break;
				default:
				}
			}
		}
	}
	,ParseTimeModification: function(element,beat) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "actual-notes":
					beat.TupletNumerator = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "normal-notes":
					beat.TupletDenominator = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				default:
				}
			}
		}
	}
	,ParseUnpitched: function(element,note) {
		var step = null;
		var semitones = 0;
		var octave = 0;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "display-alter":
					semitones = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "display-octave":
					octave = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "display-step":
					step = c1.get_InnerText();
					break;
				default:
				}
			}
		}
		var value = octave * 12 + alphaTab.model.TuningParser.GetToneForText(step) + semitones;
		note.Octave = value / 12 | 0;
		note.Tone = value - note.Octave * 12;
	}
	,ParsePitch: function(element,note) {
		var step = null;
		var semitones = 0;
		var octave = 0;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "alter":
					var s = c1.get_InnerText();
					semitones = parseFloat(s);
					var this1 = semitones;
					if(isNaN(this1)) {
						semitones = 0;
					}
					break;
				case "octave":
					octave = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "step":
					step = c1.get_InnerText();
					break;
				default:
				}
			}
		}
		var value = octave * 12 + alphaTab.model.TuningParser.GetToneForText(step) + system.Convert.ToInt32_Single(semitones);
		note.Octave = value / 12 | 0;
		note.Tone = value - note.Octave * 12;
	}
	,GetOrCreateVoice: function(bar,index) {
		if(index < bar.Voices.length) {
			return bar.Voices[index];
		}
		var i = bar.Voices.length;
		while(i <= index) {
			bar.AddVoice(new alphaTab.model.Voice());
			++i;
		}
		this._maxVoices = Math.max(this._maxVoices,bar.Voices.length);
		return bar.Voices[index];
	}
	,ParseDirection: function(element,masterBar) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "direction-type":
					var directionType = c1.FirstElement;
					var _g1 = directionType.LocalName;
					switch(_g1) {
					case "metronome":
						this.ParseMetronome(c1.FirstElement,masterBar);
						break;
					case "words":
						masterBar.Section = new alphaTab.model.Section();
						masterBar.Section.Text = directionType.get_InnerText();
						break;
					default:
					}
					break;
				case "sound":
					var tempo = c1.GetAttribute("tempo");
					if(!(tempo == null || tempo.length == 0)) {
						var tempoAutomation = new alphaTab.model.Automation();
						tempoAutomation.IsLinear = true;
						tempoAutomation.Type = 0;
						var this1 = alphaTab.platform.Platform.ParseInt(tempo);
						tempoAutomation.Value = this1;
						masterBar.TempoAutomation = tempoAutomation;
					}
					break;
				default:
				}
			}
		}
	}
	,ParseMetronome: function(element,masterBar) {
		var unit = 4;
		var perMinute = 120;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "beat-unit":
					unit = this.GetDuration(c1.get_InnerText());
					break;
				case "per-minute":
					perMinute = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				default:
				}
			}
		}
		var tempoAutomation = masterBar.TempoAutomation = new alphaTab.model.Automation();
		tempoAutomation.Type = 0;
		var this1 = perMinute * (unit / 4 | 0);
		tempoAutomation.Value = this1;
	}
	,ParseAttributes: function(element,bars,masterBar) {
		var number;
		var hasTime = false;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "clef":
					number = alphaTab.platform.Platform.ParseInt(c1.GetAttribute("number"));
					if(number == -2147483648) {
						number = 1;
					}
					this.ParseClef(c1,bars[number - 1]);
					break;
				case "divisions":
					this._divisionsPerQuarterNote = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "key":
					this.ParseKey(c1,masterBar);
					break;
				case "staff-details":
					number = alphaTab.platform.Platform.ParseInt(c1.GetAttribute("number"));
					if(number == -2147483648) {
						number = 1;
					}
					this.ParseStaffDetails(c1,bars[number - 1].Staff.Track);
					break;
				case "time":
					this.ParseTime(c1,masterBar);
					hasTime = true;
					break;
				default:
				}
			}
		}
		if(!hasTime) {
			masterBar.TimeSignatureCommon = true;
		}
	}
	,ParseClef: function(element,bar) {
		var sign = null;
		var line = 0;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "clef-octave-change":
					var _g1 = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					switch(_g1) {
					case -2:
						bar.ClefOttavia = 4;
						break;
					case -1:
						bar.ClefOttavia = 3;
						break;
					case 1:
						bar.ClefOttavia = 1;
						break;
					case 2:
						bar.ClefOttavia = 4;
						break;
					default:
					}
					break;
				case "line":
					line = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "sign":
					sign = c1.get_InnerText();
					break;
				default:
				}
			}
		}
		switch(sign) {
		case "C":
			if(line == 3) {
				bar.Clef = 1;
			} else {
				bar.Clef = 2;
			}
			break;
		case "F":
			bar.Clef = 3;
			break;
		case "G":
			bar.Clef = 4;
			break;
		case "percussion":
			bar.Clef = 0;
			break;
		default:
			bar.Clef = 4;
		}
	}
	,ParseTime: function(element,masterBar) {
		if(element.GetAttribute("symbol") == "common") {
			masterBar.TimeSignatureCommon = true;
		}
		var beatsParsed = false;
		var beatTypeParsed = false;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var v = c1.get_InnerText();
				var _g = c1.LocalName;
				switch(_g) {
				case "beat-type":
					if(!beatTypeParsed) {
						if(!(v.indexOf("+") != -1)) {
							masterBar.TimeSignatureDenominator = alphaTab.platform.Platform.ParseInt(v);
						} else {
							masterBar.TimeSignatureDenominator = 4;
						}
						beatTypeParsed = true;
					}
					break;
				case "beats":
					if(!beatsParsed) {
						if(!(v.indexOf("+") != -1)) {
							masterBar.TimeSignatureNumerator = alphaTab.platform.Platform.ParseInt(v);
						} else {
							masterBar.TimeSignatureNumerator = 4;
						}
						beatsParsed = true;
					}
					break;
				default:
				}
			}
		}
	}
	,ParseKey: function(element,masterBar) {
		var fifths = -2147483648;
		var keyStep = -2147483648;
		var keyAlter = -2147483648;
		var mode = null;
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "fifths":
					fifths = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "key-alter":
					keyAlter = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "key-step":
					keyStep = alphaTab.platform.Platform.ParseInt(c1.get_InnerText());
					break;
				case "mode":
					mode = c1.get_InnerText();
					break;
				default:
				}
			}
		}
		if(-7 <= fifths && fifths <= 7) {
			masterBar.KeySignature = fifths;
		} else {
			masterBar.KeySignature = 0;
		}
		if(mode == "minor") {
			masterBar.KeySignatureType = 1;
		} else {
			masterBar.KeySignatureType = 0;
		}
	}
	,GetOrCreateMasterBar: function(index) {
		if(index < this._score.MasterBars.length) {
			return this._score.MasterBars[index];
		}
		var i = this._score.MasterBars.length;
		while(i <= index) {
			var mb = new alphaTab.model.MasterBar();
			if(this._score.MasterBars.length > 0) {
				var prev = this._score.MasterBars[this._score.MasterBars.length - 1];
				mb.TimeSignatureDenominator = prev.TimeSignatureDenominator;
				mb.TimeSignatureNumerator = prev.TimeSignatureNumerator;
				mb.KeySignature = prev.KeySignature;
				mb.KeySignatureType = prev.KeySignatureType;
			}
			this._score.AddMasterBar(mb);
			++i;
		}
		return this._score.MasterBars[index];
	}
	,ParseIdentification: function(element) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "creator":
					if(c1.GetAttribute("type") == "composer") {
						this._score.Words = c1.get_InnerText();
					}
					break;
				case "rights":
					var s = this._score.Copyright;
					if(!(s == null || s.length == 0)) {
						this._score.Copyright = this._score.Copyright + "\n";
					}
					var tmp = this._score.Copyright + c1.get_InnerText();
					this._score.Copyright = tmp;
					break;
				default:
				}
			}
		}
	}
	,ParsePartList: function(element) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				if(_g == "score-part") {
					this.ParseScorePart(c1);
				}
			}
		}
	}
	,ParseScorePart: function(element) {
		var id = element.GetAttribute("id");
		var track = new alphaTab.model.Track(1);
		this._trackById[id] = track;
		this._score.AddTrack(track);
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "midi-instrument":
					this.ParseMidiInstrument(c1,track);
					break;
				case "part-abbreviation":
					track.ShortName = c1.get_InnerText();
					break;
				case "part-name":
					track.Name = c1.get_InnerText();
					break;
				default:
				}
			}
		}
		if(this.IsEmptyTuning(track.Tuning)) {
			var this1 = new Int32Array(0);
			track.Tuning = this1;
		}
	}
	,IsEmptyTuning: function(tuning) {
		if(tuning == null) {
			return true;
		}
		var i = 0;
		while(i < tuning.length) {
			if(tuning[i] != 0) {
				return false;
			}
			++i;
		}
		return true;
	}
	,ParseMidiInstrument: function(element,track) {
		var c = $iterator(element.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1.NodeType == 1) {
				var _g = c1.LocalName;
				switch(_g) {
				case "midi-channel":
					var tmp = c1.get_InnerText();
					track.PlaybackInfo.PrimaryChannel = alphaTab.platform.Platform.ParseInt(tmp);
					break;
				case "midi-program":
					var tmp1 = c1.get_InnerText();
					track.PlaybackInfo.Program = alphaTab.platform.Platform.ParseInt(tmp1);
					break;
				case "midi-volume":
					var tmp2 = c1.get_InnerText();
					track.PlaybackInfo.Volume = alphaTab.platform.Platform.ParseInt(tmp2);
					break;
				default:
				}
			}
		}
	}
	,__class__: alphaTab.importer.MusicXmlImporter
});
alphaTab.importer.NoCompatibleReaderFoundException = $hx_exports["alphaTab"]["importer"]["NoCompatibleReaderFoundException"] = function() {
	alphaTab.AlphaTabException.call(this);
};
alphaTab.importer.NoCompatibleReaderFoundException.__name__ = true;
alphaTab.importer.NoCompatibleReaderFoundException.__super__ = alphaTab.AlphaTabException;
alphaTab.importer.NoCompatibleReaderFoundException.prototype = $extend(alphaTab.AlphaTabException.prototype,{
	NoCompatibleReaderFoundException: function() {
		this.AlphaTabException("");
		return this;
	}
	,__class__: alphaTab.importer.NoCompatibleReaderFoundException
});
alphaTab.importer.ScoreLoader = $hx_exports["alphaTab"]["importer"]["ScoreLoader"] = function() {
};
alphaTab.importer.ScoreLoader.__name__ = true;
alphaTab.importer.ScoreLoader.LoadScoreAsync = function(path,success,error) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET",path,true,null,null);
	xhr.responseType = "arraybuffer";
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				try {
					var buffer = xhr.response;
					var reader = new Uint8Array(buffer);
					var score = alphaTab.importer.ScoreLoader.LoadScoreFromBytes(reader);
					success(score);
				} catch( exception ) {
					if (exception instanceof js._Boot.HaxeError) exception = exception.val;
					if( js.Boot.__instanceof(exception,system.Exception) ) {
						error(exception);
					} else throw(exception);
				}
			} else if(xhr.status == 0) {
				var tmp = new alphaTab.importer.FileLoadException().FileLoadException("You are offline!!\n Please Check Your Network.",xhr);
				error(tmp);
			} else if(xhr.status == 404) {
				var tmp1 = new alphaTab.importer.FileLoadException().FileLoadException("Requested URL not found.",xhr);
				error(tmp1);
			} else if(xhr.status == 500) {
				var tmp2 = new alphaTab.importer.FileLoadException().FileLoadException("Internel Server Error.",xhr);
				error(tmp2);
			} else if(xhr.statusText == "parsererror") {
				var tmp3 = new alphaTab.importer.FileLoadException().FileLoadException("Error.\nParsing JSON Request failed.",xhr);
				error(tmp3);
			} else if(xhr.statusText == "timeout") {
				var tmp4 = new alphaTab.importer.FileLoadException().FileLoadException("Request Time out.",xhr);
				error(tmp4);
			} else {
				var tmp5 = new alphaTab.importer.FileLoadException().FileLoadException("Unknow Error: " + xhr.responseText,xhr);
				error(tmp5);
			}
		}
	};
	if(xhr.responseType != "arraybuffer") {
		var vbArr = VbAjaxLoader("GET",path);
		var fileContents = vbArr.toArray();
		var this1 = "";
		var data = this1;
		var i = 0;
		while(i < fileContents.length - 1) {
			data += Std.string(fileContents[i]);
			++i;
		}
		var reader1 = alphaTab.importer.ScoreLoader.GetBytesFromString(data);
		var score1 = alphaTab.importer.ScoreLoader.LoadScoreFromBytes(reader1);
		success(score1);
	}
	xhr.send();
};
alphaTab.importer.ScoreLoader.GetBytesFromString = function(s) {
	var this1 = new Uint8Array(s.length);
	var b = this1;
	var i = 0;
	while(i < s.length) {
		var this2 = system.Convert.ToUInt16(HxOverrides.cca(s,i));
		b[i] = system.Convert.ToUInt8(this2);
		++i;
	}
	return b;
};
alphaTab.importer.ScoreLoader.LoadScoreFromBytes = function(data) {
	var importers = alphaTab.importer.ScoreImporter.BuildImporters();
	alphaTab.util.Logger.Info("ScoreLoader","Loading score from " + data.length + " bytes using " + importers.length + " importers",null);
	var score = null;
	var bb = alphaTab.io.ByteBuffer.FromBuffer(data);
	var importer = HxOverrides.iter(importers);
	while(importer.hasNext()) {
		var importer1 = importer.next();
		bb.Reset();
		try {
			alphaTab.util.Logger.Info("ScoreLoader","Importing using importer " + importer1.get_Name(),null);
			importer1.Init(bb);
			score = importer1.ReadScore();
			alphaTab.util.Logger.Info("ScoreLoader","Score imported using " + importer1.get_Name(),null);
			break;
		} catch( $e0 ) {
			if ($e0 instanceof js._Boot.HaxeError) $e0 = $e0.val;
			if( js.Boot.__instanceof($e0,alphaTab.importer.UnsupportedFormatException) ) {
				var __e = $e0;
				alphaTab.util.Logger.Info("ScoreLoader",importer1.get_Name() + " does not support the file",null);
			} else if( js.Boot.__instanceof($e0,system.Exception) ) {
				var e = $e0;
				alphaTab.util.Logger.Info("ScoreLoader","Score import failed due to unexpected error: " + Std.string(e),null);
				throw new js._Boot.HaxeError(e);
			} else throw($e0);
		}
	}
	if(score != null) {
		return score;
	}
	alphaTab.util.Logger.Error("ScoreLoader","No compatible importer found for file",null);
	throw new js._Boot.HaxeError(new alphaTab.importer.NoCompatibleReaderFoundException().NoCompatibleReaderFoundException());
};
alphaTab.importer.ScoreLoader.prototype = {
	__class__: alphaTab.importer.ScoreLoader
};
alphaTab.importer.UnsupportedFormatException = $hx_exports["alphaTab"]["importer"]["UnsupportedFormatException"] = function() {
	alphaTab.AlphaTabException.call(this);
};
alphaTab.importer.UnsupportedFormatException.__name__ = true;
alphaTab.importer.UnsupportedFormatException.__super__ = alphaTab.AlphaTabException;
alphaTab.importer.UnsupportedFormatException.prototype = $extend(alphaTab.AlphaTabException.prototype,{
	UnsupportedFormatException: function(message) {
		if(message == null) {
			message = "";
		}
		this.AlphaTabException(message);
		return this;
	}
	,__class__: alphaTab.importer.UnsupportedFormatException
});
alphaTab.io = {};
alphaTab.io.BitReader = $hx_exports["alphaTab"]["io"]["BitReader"] = function(source) {
	this._currentByte = 0;
	this._position = 0;
	this._source = null;
	this._source = source;
	this._position = 8;
};
alphaTab.io.BitReader.__name__ = true;
alphaTab.io.BitReader.prototype = {
	ReadByte: function() {
		return this.ReadBits(8);
	}
	,ReadBytes: function(count) {
		var this1 = new Uint8Array(count);
		var bytes = this1;
		var i = 0;
		while(i < count) {
			bytes[i] = system.Convert.ToUInt8(this.ReadByte());
			++i;
		}
		return bytes;
	}
	,ReadBits: function(count) {
		var bits = 0;
		var i = count - 1;
		while(i >= 0) {
			bits = bits | this.ReadBit() << i;
			--i;
		}
		return bits;
	}
	,ReadBitsReversed: function(count) {
		var bits = 0;
		var i = 0;
		while(i < count) {
			bits = bits | this.ReadBit() << i;
			++i;
		}
		return bits;
	}
	,ReadBit: function() {
		if(this._position >= 8) {
			this._currentByte = this._source.ReadByte();
			if(this._currentByte == -1) {
				throw new js._Boot.HaxeError(new alphaTab.io.EndOfReaderException().EndOfReaderException());
			}
			this._position = 0;
		}
		var value = this._currentByte >> 8 - this._position - 1 & 1;
		this._position++;
		return value;
	}
	,ReadAll: function() {
		var all = alphaTab.io.ByteBuffer.Empty();
		try {
			while(true) all.WriteByte(system.Convert.ToUInt8(this.ReadByte()));
		} catch( __e ) {
			if (__e instanceof js._Boot.HaxeError) __e = __e.val;
			if( js.Boot.__instanceof(__e,alphaTab.io.EndOfReaderException) ) {
			} else throw(__e);
		}
		return all.ToArray();
	}
	,__class__: alphaTab.io.BitReader
};
alphaTab.io.IReadable = $hx_exports["alphaTab"]["io"]["IReadable"] = function() { };
alphaTab.io.IReadable.__name__ = true;
alphaTab.io.IReadable.prototype = {
	__class__: alphaTab.io.IReadable
};
alphaTab.io.IWriteable = $hx_exports["alphaTab"]["io"]["IWriteable"] = function() { };
alphaTab.io.IWriteable.__name__ = true;
alphaTab.io.IWriteable.prototype = {
	__class__: alphaTab.io.IWriteable
};
alphaTab.io.ByteBuffer = $hx_exports["alphaTab"]["io"]["ByteBuffer"] = function() {
	this._buffer = null;
	this._position = 0;
	this._length = 0;
	this._capacity = 0;
};
alphaTab.io.ByteBuffer.__name__ = true;
alphaTab.io.ByteBuffer.__interfaces__ = [alphaTab.io.IReadable,alphaTab.io.IWriteable];
alphaTab.io.ByteBuffer.Empty = function() {
	return alphaTab.io.ByteBuffer.WithCapactiy(0);
};
alphaTab.io.ByteBuffer.WithCapactiy = function(capacity) {
	var buffer = new alphaTab.io.ByteBuffer();
	var this1 = new Uint8Array(capacity);
	buffer._buffer = this1;
	buffer._capacity = capacity;
	return buffer;
};
alphaTab.io.ByteBuffer.FromBuffer = function(data) {
	var buffer = new alphaTab.io.ByteBuffer();
	buffer._buffer = data;
	buffer._capacity = buffer._length = data.length;
	return buffer;
};
alphaTab.io.ByteBuffer.prototype = {
	get_Length: function() {
		return this._length;
	}
	,GetBuffer: function() {
		return this._buffer;
	}
	,Reset: function() {
		this._position = 0;
	}
	,Skip: function(offset) {
		this._position = this._position + offset;
	}
	,SetCapacity: function(value) {
		if(value != this._capacity) {
			if(value > 0) {
				var this1 = new Uint8Array(value);
				var newBuffer = this1;
				if(this._length > 0) {
					var src = this._buffer;
					var count = this._length;
					var i = 0;
					while(i < count) {
						newBuffer[0 + i] = src[0 + i];
						++i;
					}
				}
				this._buffer = newBuffer;
			} else {
				this._buffer = null;
			}
			this._capacity = value;
		}
	}
	,ReadByte: function() {
		var n = this._length - this._position;
		if(n <= 0) {
			return -1;
		}
		var this1 = this._buffer[this._position++];
		return this1;
	}
	,Read: function(buffer,offset,count) {
		var n = this._length - this._position;
		if(n > count) {
			n = count;
		}
		if(n <= 0) {
			return 0;
		}
		if(n <= 8) {
			var byteCount = n;
			while(true) {
				--byteCount;
				if(!(byteCount >= 0)) {
					break;
				}
				buffer[offset + byteCount] = this._buffer[this._position + byteCount];
			}
		} else {
			var src = this._buffer;
			var srcOffset = this._position;
			var i = 0;
			while(i < n) {
				buffer[offset + i] = src[srcOffset + i];
				++i;
			}
		}
		this._position = this._position + n;
		return n;
	}
	,WriteByte: function(value) {
		var this1 = new Uint8Array(1);
		var buffer = this1;
		buffer[0] = value;
		this.Write(buffer,0,1);
	}
	,Write: function(buffer,offset,count) {
		var i = this._position + count;
		if(i > this._length) {
			if(i > this._capacity) {
				this.EnsureCapacity(i);
			}
			this._length = i;
		}
		if(count <= 8 && buffer != this._buffer) {
			var byteCount = count;
			while(true) {
				--byteCount;
				if(!(byteCount >= 0)) {
					break;
				}
				this._buffer[this._position + byteCount] = buffer[offset + byteCount];
			}
		} else {
			var dst = this._buffer;
			var dstOffset = this._position;
			var count1 = Math.min(count,buffer.length - offset);
			var i1 = 0;
			while(i1 < count1) {
				dst[dstOffset + i1] = buffer[offset + i1];
				++i1;
			}
		}
		this._position = i;
	}
	,EnsureCapacity: function(value) {
		if(value > this._capacity) {
			var newCapacity = value;
			if(newCapacity < 256) {
				newCapacity = 256;
			}
			if(newCapacity < this._capacity * 2) {
				newCapacity = this._capacity * 2;
			}
			this.SetCapacity(newCapacity);
		}
	}
	,ReadAll: function() {
		return this.ToArray();
	}
	,ToArray: function() {
		var this1 = new Uint8Array(this._length);
		var copy = this1;
		var src = this._buffer;
		var count = this._length;
		var i = 0;
		while(i < count) {
			copy[0 + i] = src[0 + i];
			++i;
		}
		return copy;
	}
	,__class__: alphaTab.io.ByteBuffer
};
alphaTab.io.EndOfReaderException = $hx_exports["alphaTab"]["io"]["EndOfReaderException"] = function() {
	alphaTab.AlphaTabException.call(this);
};
alphaTab.io.EndOfReaderException.__name__ = true;
alphaTab.io.EndOfReaderException.__super__ = alphaTab.AlphaTabException;
alphaTab.io.EndOfReaderException.prototype = $extend(alphaTab.AlphaTabException.prototype,{
	EndOfReaderException: function() {
		this.AlphaTabException("");
		return this;
	}
	,__class__: alphaTab.io.EndOfReaderException
});
alphaTab.model = {};
alphaTab.model._AccentuationType = {};
alphaTab.model._AccentuationType.AccentuationType_Impl_ = $hx_exports["alphaTab"]["model"]["_AccentuationType"]["AccentuationType_Impl_"] = {};
alphaTab.model._AccentuationType.AccentuationType_Impl_.__name__ = true;
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._AccentuationType.AccentuationType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Normal";
	case 2:
		return "Heavy";
	}
	return "";
};
alphaTab.model._AccidentalType = {};
alphaTab.model._AccidentalType.AccidentalType_Impl_ = $hx_exports["alphaTab"]["model"]["_AccidentalType"]["AccidentalType_Impl_"] = {};
alphaTab.model._AccidentalType.AccidentalType_Impl_.__name__ = true;
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._AccidentalType.AccidentalType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Natural";
	case 2:
		return "Sharp";
	case 3:
		return "Flat";
	}
	return "";
};
alphaTab.model.Automation = $hx_exports["alphaTab"]["model"]["Automation"] = function() {
};
alphaTab.model.Automation.__name__ = true;
alphaTab.model.Automation.BuildTempoAutomation = function(isLinear,ratioPosition,value,reference) {
	if(reference < 1 || reference > 5) {
		reference = 2;
	}
	var references = new Float32Array([1,0.5,1.0,1.5,2.0,3.0]);
	var automation = new alphaTab.model.Automation();
	automation.Type = 0;
	automation.IsLinear = isLinear;
	automation.RatioPosition = ratioPosition;
	automation.Value = value * references[reference];
	return automation;
};
alphaTab.model.Automation.CopyTo = function(src,dst) {
	dst.IsLinear = src.IsLinear;
	dst.RatioPosition = src.RatioPosition;
	dst.Text = src.Text;
	dst.Type = src.Type;
	dst.Value = src.Value;
};
alphaTab.model.Automation.prototype = {
	Clone: function() {
		var a = new alphaTab.model.Automation();
		alphaTab.model.Automation.CopyTo(this,a);
		return a;
	}
	,__class__: alphaTab.model.Automation
};
alphaTab.model._AutomationType = {};
alphaTab.model._AutomationType.AutomationType_Impl_ = $hx_exports["alphaTab"]["model"]["_AutomationType"]["AutomationType_Impl_"] = {};
alphaTab.model._AutomationType.AutomationType_Impl_.__name__ = true;
alphaTab.model._AutomationType.AutomationType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._AutomationType.AutomationType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._AutomationType.AutomationType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Tempo";
	case 1:
		return "Volume";
	case 2:
		return "Instrument";
	case 3:
		return "Balance";
	}
	return "";
};
alphaTab.model.Bar = $hx_exports["alphaTab"]["model"]["Bar"] = function() {
	this.Id = 0;
	this.Index = 0;
	this.NextBar = null;
	this.PreviousBar = null;
	this.Clef = null;
	this.ClefOttavia = null;
	this.Staff = null;
	this.Voices = null;
	this.Id = alphaTab.model.Bar.GlobalBarId++;
	var this1 = [];
	this.Voices = this1;
	this.Clef = 4;
	this.ClefOttavia = 2;
};
alphaTab.model.Bar.__name__ = true;
alphaTab.model.Bar.CopyTo = function(src,dst) {
	dst.Id = src.Id;
	dst.Index = src.Index;
	dst.Clef = src.Clef;
	dst.ClefOttavia = src.ClefOttavia;
};
alphaTab.model.Bar.prototype = {
	AddVoice: function(voice) {
		voice.Bar = this;
		voice.Index = this.Voices.length;
		this.Voices.push(voice);
	}
	,get_MasterBar: function() {
		return this.Staff.Track.Score.MasterBars[this.Index];
	}
	,get_IsEmpty: function() {
		var i = 0;
		var j = this.Voices.length;
		while(i < j) {
			if(!this.Voices[i].IsEmpty) {
				return false;
			}
			++i;
		}
		return true;
	}
	,Finish: function() {
		var i = 0;
		var j = this.Voices.length;
		while(i < j) {
			var voice = this.Voices[i];
			voice.Finish();
			++i;
		}
	}
	,__class__: alphaTab.model.Bar
};
alphaTab.model.Beat = $hx_exports["alphaTab"]["model"]["Beat"] = function() {
	this.PreviousBeat = null;
	this.NextBeat = null;
	this.Id = 0;
	this.Index = 0;
	this.Voice = null;
	this.Notes = null;
	this.IsEmpty = false;
	this.IsLegatoOrigin = false;
	this._minNote = null;
	this._maxNote = null;
	this._maxStringNote = null;
	this._minStringNote = null;
	this.Duration = null;
	this.Automations = null;
	this.Dots = 0;
	this.FadeIn = false;
	this.Lyrics = null;
	this.Pop = false;
	this.HasRasgueado = false;
	this.Slap = false;
	this.Tap = false;
	this.Text = null;
	this.BrushType = null;
	this.BrushDuration = 0;
	this.TupletDenominator = 0;
	this.TupletNumerator = 0;
	this.WhammyBarPoints = null;
	this.MaxWhammyPoint = null;
	this.Vibrato = null;
	this.ChordId = null;
	this.GraceType = null;
	this.PickStroke = null;
	this.TremoloSpeed = null;
	this.Crescendo = null;
	this.Start = 0;
	this.Dynamic = null;
	this.InvertBeamDirection = false;
	this.Id = alphaTab.model.Beat.GlobalBeatId++;
	var this1 = [];
	this.WhammyBarPoints = this1;
	var this2 = [];
	this.Notes = this2;
	this.BrushType = 0;
	this.Vibrato = 0;
	this.GraceType = 0;
	this.PickStroke = 0;
	this.Duration = 4;
	this.TremoloSpeed = null;
	var this3 = [];
	this.Automations = this3;
	this.Dots = 0;
	this.Start = 0;
	this.TupletDenominator = -1;
	this.TupletNumerator = -1;
	this.Dynamic = 5;
	this.Crescendo = 0;
	this.InvertBeamDirection = false;
};
alphaTab.model.Beat.__name__ = true;
alphaTab.model.Beat.CopyTo = function(src,dst) {
	dst.Id = src.Id;
	dst.Index = src.Index;
	dst.IsEmpty = src.IsEmpty;
	dst.Duration = src.Duration;
	dst.Dots = src.Dots;
	dst.FadeIn = src.FadeIn;
	if(src.Lyrics != null) {
		var size = src.Lyrics.length;
		var this1 = new Array(size);
		dst.Lyrics = this1;
		var i = 0;
		while(i < src.Lyrics.length) {
			dst.Lyrics[i] = src.Lyrics[i];
			++i;
		}
	}
	dst.Pop = src.Pop;
	dst.HasRasgueado = src.HasRasgueado;
	dst.Slap = src.Slap;
	dst.Tap = src.Tap;
	dst.Text = src.Text;
	dst.BrushType = src.BrushType;
	dst.BrushDuration = src.BrushDuration;
	dst.TupletDenominator = src.TupletDenominator;
	dst.TupletNumerator = src.TupletNumerator;
	dst.Vibrato = src.Vibrato;
	dst.ChordId = src.ChordId;
	dst.GraceType = src.GraceType;
	dst.PickStroke = src.PickStroke;
	dst.TremoloSpeed = src.TremoloSpeed;
	dst.Crescendo = src.Crescendo;
	dst.Start = src.Start;
	dst.Dynamic = src.Dynamic;
	dst.IsLegatoOrigin = src.IsLegatoOrigin;
	dst.InvertBeamDirection = src.InvertBeamDirection;
};
alphaTab.model.Beat.prototype = {
	get_IsLegatoDestination: function() {
		if(this.PreviousBeat != null) {
			return this.PreviousBeat.IsLegatoOrigin;
		} else {
			return false;
		}
	}
	,get_MinNote: function() {
		if(this._minNote == null) {
			this.RefreshNotes();
		}
		return this._minNote;
	}
	,get_MaxNote: function() {
		if(this._maxNote == null) {
			this.RefreshNotes();
		}
		return this._maxNote;
	}
	,get_MaxStringNote: function() {
		if(this._maxStringNote == null) {
			this.RefreshNotes();
		}
		return this._maxStringNote;
	}
	,get_MinStringNote: function() {
		if(this._minStringNote == null) {
			this.RefreshNotes();
		}
		return this._minStringNote;
	}
	,get_IsRest: function() {
		return this.Notes.length == 0;
	}
	,get_HasTuplet: function() {
		if(!(this.TupletDenominator == -1 && this.TupletNumerator == -1)) {
			return !(this.TupletDenominator == 1 && this.TupletNumerator == 1);
		} else {
			return false;
		}
	}
	,get_HasWhammyBar: function() {
		return this.WhammyBarPoints.length > 0;
	}
	,get_HasChord: function() {
		return this.ChordId != null;
	}
	,get_Chord: function() {
		return this.Voice.Bar.Staff.Track.Chords[this.ChordId];
	}
	,get_IsTremolo: function() {
		return this.TremoloSpeed != null;
	}
	,get_AbsoluteStart: function() {
		return this.Voice.Bar.get_MasterBar().Start + this.Start;
	}
	,Clone: function() {
		var beat = new alphaTab.model.Beat();
		var id = beat.Id;
		var i = 0;
		var j = this.WhammyBarPoints.length;
		while(i < j) {
			beat.AddWhammyBarPoint(this.WhammyBarPoints[i].Clone());
			++i;
		}
		var i1 = 0;
		var j1 = this.Notes.length;
		while(i1 < j1) {
			beat.AddNote(this.Notes[i1].Clone());
			++i1;
		}
		alphaTab.model.Beat.CopyTo(this,beat);
		var i2 = 0;
		var j2 = this.Automations.length;
		while(i2 < j2) {
			beat.Automations.push(this.Automations[i2].Clone());
			++i2;
		}
		beat.Id = id;
		return beat;
	}
	,AddWhammyBarPoint: function(point) {
		this.WhammyBarPoints.push(point);
		if(this.MaxWhammyPoint == null || point.Value > this.MaxWhammyPoint.Value) {
			this.MaxWhammyPoint = point;
		}
	}
	,RemoveWhammyBarPoint: function(index) {
		if(index < 0 || index >= this.WhammyBarPoints.length) {
			return;
		}
		if(index != -1) {
			this.WhammyBarPoints.splice(index,1);
		}
		var point = this.WhammyBarPoints[index];
		if(point != this.MaxWhammyPoint) {
			return;
		}
		this.MaxWhammyPoint = null;
		var currentPoint = $iterator(this.WhammyBarPoints)();
		while(currentPoint.hasNext()) {
			var currentPoint1 = currentPoint.next();
			if(this.MaxWhammyPoint == null || currentPoint1.Value > this.MaxWhammyPoint.Value) {
				this.MaxWhammyPoint = currentPoint1;
			}
		}
	}
	,CalculateDuration: function() {
		var ticks = alphaTab.audio.MidiUtils.ToTicks(this.Duration);
		if(this.Dots == 2) {
			ticks = alphaTab.audio.MidiUtils.ApplyDot(ticks,true);
		} else if(this.Dots == 1) {
			ticks = alphaTab.audio.MidiUtils.ApplyDot(ticks,false);
		}
		if(this.TupletDenominator > 0 && this.TupletNumerator >= 0) {
			ticks = alphaTab.audio.MidiUtils.ApplyTuplet(ticks,this.TupletNumerator,this.TupletDenominator);
		}
		return ticks;
	}
	,AddNote: function(note) {
		note.Beat = this;
		note.Index = this.Notes.length;
		this.Notes.push(note);
	}
	,RemoveNote: function(note) {
		var index = this.Notes.indexOf(note);
		if(index >= 0) {
			if(index != -1) {
				this.Notes.splice(index,1);
			}
		}
		if(note == this._minNote || note == this._maxNote || note == this._minStringNote || note == this._maxStringNote) {
			this.RefreshNotes();
		}
	}
	,RefreshNotes: function() {
		var i = 0;
		var j = this.Notes.length;
		while(i < j) {
			var note = this.Notes[i];
			if(this._minNote == null || note.get_RealValue() < this._minNote.get_RealValue()) {
				this._minNote = note;
			}
			if(this._maxNote == null || note.get_RealValue() > this._maxNote.get_RealValue()) {
				this._maxNote = note;
			}
			if(this._minStringNote == null || note.String < this._minStringNote.String) {
				this._minStringNote = note;
			}
			if(this._maxStringNote == null || note.String > this._maxStringNote.String) {
				this._maxStringNote = note;
			}
			++i;
		}
	}
	,GetAutomation: function(type) {
		var i = 0;
		var j = this.Automations.length;
		while(i < j) {
			var automation = this.Automations[i];
			if(automation.Type == type) {
				return automation;
			}
			++i;
		}
		return null;
	}
	,GetNoteOnString: function(string) {
		var i = 0;
		var j = this.Notes.length;
		while(i < j) {
			var note = this.Notes[i];
			if(note.String == string) {
				return note;
			}
			++i;
		}
		return null;
	}
	,Finish: function() {
		if(this.Index == 0) {
			this.Start = 0;
		} else {
			this.Start = this.PreviousBeat.Start + this.PreviousBeat.CalculateDuration();
		}
		var i = 0;
		var j = this.Notes.length;
		while(i < j) {
			this.Notes[i].Finish();
			++i;
		}
	}
	,__class__: alphaTab.model.Beat
};
alphaTab.model.BendPoint = $hx_exports["alphaTab"]["model"]["BendPoint"] = function(offset,value) {
	if(value == null) {
		value = 0;
	}
	if(offset == null) {
		offset = 0;
	}
	this.Offset = 0;
	this.Value = 0;
	this.Offset = offset;
	this.Value = value;
};
alphaTab.model.BendPoint.__name__ = true;
alphaTab.model.BendPoint.CopyTo = function(src,dst) {
	dst.Offset = src.Offset;
	dst.Value = src.Value;
};
alphaTab.model.BendPoint.prototype = {
	Clone: function() {
		var point = new alphaTab.model.BendPoint(0,0);
		alphaTab.model.BendPoint.CopyTo(this,point);
		return point;
	}
	,__class__: alphaTab.model.BendPoint
};
alphaTab.model._BrushType = {};
alphaTab.model._BrushType.BrushType_Impl_ = $hx_exports["alphaTab"]["model"]["_BrushType"]["BrushType_Impl_"] = {};
alphaTab.model._BrushType.BrushType_Impl_.__name__ = true;
alphaTab.model._BrushType.BrushType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._BrushType.BrushType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._BrushType.BrushType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._BrushType.BrushType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._BrushType.BrushType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._BrushType.BrushType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._BrushType.BrushType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._BrushType.BrushType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._BrushType.BrushType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._BrushType.BrushType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._BrushType.BrushType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._BrushType.BrushType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._BrushType.BrushType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "BrushUp";
	case 2:
		return "BrushDown";
	case 3:
		return "ArpeggioUp";
	case 4:
		return "ArpeggioDown";
	}
	return "";
};
alphaTab.model.Chord = $hx_exports["alphaTab"]["model"]["Chord"] = function() {
	this.Name = null;
	this.FirstFret = 0;
	this.Strings = null;
	this.BarreFrets = null;
	var this1 = [];
	this.Strings = this1;
	var this2 = [];
	this.BarreFrets = this2;
};
alphaTab.model.Chord.__name__ = true;
alphaTab.model.Chord.CopyTo = function(src,dst) {
	dst.FirstFret = src.FirstFret;
	dst.Name = src.Name;
	dst.Strings = src.Strings.slice(0);
};
alphaTab.model.Chord.prototype = {
	__class__: alphaTab.model.Chord
};
alphaTab.model._Clef = {};
alphaTab.model._Clef.Clef_Impl_ = $hx_exports["alphaTab"]["model"]["_Clef"]["Clef_Impl_"] = {};
alphaTab.model._Clef.Clef_Impl_.__name__ = true;
alphaTab.model._Clef.Clef_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._Clef.Clef_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._Clef.Clef_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._Clef.Clef_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._Clef.Clef_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._Clef.Clef_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._Clef.Clef_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Clef.Clef_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._Clef.Clef_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Clef.Clef_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._Clef.Clef_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Clef.Clef_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._Clef.Clef_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Neutral";
	case 1:
		return "C3";
	case 2:
		return "C4";
	case 3:
		return "F4";
	case 4:
		return "G2";
	}
	return "";
};
alphaTab.model._ClefOttavia = {};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_ = $hx_exports["alphaTab"]["model"]["_ClefOttavia"]["ClefOttavia_Impl_"] = {};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.__name__ = true;
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "_15ma";
	case 1:
		return "_8va";
	case 2:
		return "Regular";
	case 3:
		return "_8vb";
	case 4:
		return "_15mb";
	}
	return "";
};
alphaTab.model._CrescendoType = {};
alphaTab.model._CrescendoType.CrescendoType_Impl_ = $hx_exports["alphaTab"]["model"]["_CrescendoType"]["CrescendoType_Impl_"] = {};
alphaTab.model._CrescendoType.CrescendoType_Impl_.__name__ = true;
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._CrescendoType.CrescendoType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Crescendo";
	case 2:
		return "Decrescendo";
	}
	return "";
};
alphaTab.model._Duration = {};
alphaTab.model._Duration.Duration_Impl_ = $hx_exports["alphaTab"]["model"]["_Duration"]["Duration_Impl_"] = {};
alphaTab.model._Duration.Duration_Impl_.__name__ = true;
alphaTab.model._Duration.Duration_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._Duration.Duration_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._Duration.Duration_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._Duration.Duration_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._Duration.Duration_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._Duration.Duration_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._Duration.Duration_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Duration.Duration_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._Duration.Duration_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Duration.Duration_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._Duration.Duration_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Duration.Duration_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._Duration.Duration_Impl_.toString = function(this1) {
	switch(this1) {
	case -4:
		return "QuadrupleWhole";
	case -2:
		return "DoubleWhole";
	case 1:
		return "Whole";
	case 2:
		return "Half";
	case 4:
		return "Quarter";
	case 8:
		return "Eighth";
	case 16:
		return "Sixteenth";
	case 32:
		return "ThirtySecond";
	case 64:
		return "SixtyFourth";
	case 128:
		return "OneHundredTwentyEighth";
	case 256:
		return "TwoHundredFiftySixth";
	}
	return "";
};
alphaTab.model._DynamicValue = {};
alphaTab.model._DynamicValue.DynamicValue_Impl_ = $hx_exports["alphaTab"]["model"]["_DynamicValue"]["DynamicValue_Impl_"] = {};
alphaTab.model._DynamicValue.DynamicValue_Impl_.__name__ = true;
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._DynamicValue.DynamicValue_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "PPP";
	case 1:
		return "PP";
	case 2:
		return "P";
	case 3:
		return "MP";
	case 4:
		return "MF";
	case 5:
		return "F";
	case 6:
		return "FF";
	case 7:
		return "FFF";
	}
	return "";
};
alphaTab.model._Fingers = {};
alphaTab.model._Fingers.Fingers_Impl_ = $hx_exports["alphaTab"]["model"]["_Fingers"]["Fingers_Impl_"] = {};
alphaTab.model._Fingers.Fingers_Impl_.__name__ = true;
alphaTab.model._Fingers.Fingers_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._Fingers.Fingers_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._Fingers.Fingers_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._Fingers.Fingers_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._Fingers.Fingers_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._Fingers.Fingers_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._Fingers.Fingers_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Fingers.Fingers_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._Fingers.Fingers_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Fingers.Fingers_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._Fingers.Fingers_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._Fingers.Fingers_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._Fingers.Fingers_Impl_.toString = function(this1) {
	switch(this1) {
	case -2:
		return "Unknown";
	case -1:
		return "NoOrDead";
	case 0:
		return "Thumb";
	case 1:
		return "IndexFinger";
	case 2:
		return "MiddleFinger";
	case 3:
		return "AnnularFinger";
	case 4:
		return "LittleFinger";
	}
	return "";
};
alphaTab.model._GraceType = {};
alphaTab.model._GraceType.GraceType_Impl_ = $hx_exports["alphaTab"]["model"]["_GraceType"]["GraceType_Impl_"] = {};
alphaTab.model._GraceType.GraceType_Impl_.__name__ = true;
alphaTab.model._GraceType.GraceType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._GraceType.GraceType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._GraceType.GraceType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._GraceType.GraceType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._GraceType.GraceType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._GraceType.GraceType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._GraceType.GraceType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._GraceType.GraceType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._GraceType.GraceType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._GraceType.GraceType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._GraceType.GraceType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._GraceType.GraceType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._GraceType.GraceType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "OnBeat";
	case 2:
		return "BeforeBeat";
	}
	return "";
};
alphaTab.model._HarmonicType = {};
alphaTab.model._HarmonicType.HarmonicType_Impl_ = $hx_exports["alphaTab"]["model"]["_HarmonicType"]["HarmonicType_Impl_"] = {};
alphaTab.model._HarmonicType.HarmonicType_Impl_.__name__ = true;
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._HarmonicType.HarmonicType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Natural";
	case 2:
		return "Artificial";
	case 3:
		return "Pinch";
	case 4:
		return "Tap";
	case 5:
		return "Semi";
	case 6:
		return "Feedback";
	}
	return "";
};
alphaTab.model.JsonConverter = $hx_exports["alphaTab"]["model"]["JsonConverter"] = function() {
};
alphaTab.model.JsonConverter.__name__ = true;
alphaTab.model.JsonConverter.prototype = {
	ScoreToJsObject: function(score) {
		var score2 = {}
		alphaTab.model.Score.CopyTo(score,score2);
		var this1 = [];
		score2.MasterBars = this1;
		var this2 = [];
		score2.Tracks = this2;
		var i = 0;
		while(i < score.MasterBars.length) {
			var masterBar = score.MasterBars[i];
			var masterBar2 = {}
			alphaTab.model.MasterBar.CopyTo(masterBar,masterBar2);
			if(masterBar.TempoAutomation != null) {
				masterBar2.TempoAutomation = {}
				alphaTab.model.Automation.CopyTo(masterBar.TempoAutomation,masterBar2.TempoAutomation);
			}
			if(masterBar.VolumeAutomation != null) {
				masterBar2.VolumeAutomation = {}
				alphaTab.model.Automation.CopyTo(masterBar.VolumeAutomation,masterBar2.VolumeAutomation);
			}
			if(masterBar.Section != null) {
				masterBar2.Section = {}
				alphaTab.model.Section.CopyTo(masterBar.Section,masterBar2.Section);
			}
			score2.MasterBars.push(masterBar2);
			++i;
		}
		var t = 0;
		while(t < score.Tracks.length) {
			var track = score.Tracks[t];
			var track2 = {}
			track2.Color = {}
			alphaTab.model.Track.CopyTo(track,track2);
			track2.PlaybackInfo = {}
			alphaTab.model.PlaybackInformation.CopyTo(track.PlaybackInfo,track2.PlaybackInfo);
			var this3 = {}
			track2.Chords = this3;
			var this4 = track.Chords;
			var key = $iterator(Object.keys(this4))();
			while(key.hasNext()) {
				var key1 = key.next();
				var chord = track.Chords[key1];
				var chord2 = {}
				alphaTab.model.Chord.CopyTo(chord,chord2);
				track2.Chords[key1] = chord;
			}
			var this5 = [];
			track2.Staves = this5;
			var s = 0;
			while(s < track.Staves.length) {
				var staff = track.Staves[s];
				var staff2 = {}
				var this6 = [];
				staff2.Bars = this6;
				var b = 0;
				while(b < staff.Bars.length) {
					var bar = staff.Bars[b];
					var bar2 = {}
					alphaTab.model.Bar.CopyTo(bar,bar2);
					var this7 = [];
					bar2.Voices = this7;
					var v = 0;
					while(v < bar.Voices.length) {
						var voice = bar.Voices[v];
						var voice2 = {}
						alphaTab.model.Voice.CopyTo(voice,voice2);
						var this8 = [];
						voice2.Beats = this8;
						var bb = 0;
						while(bb < voice.Beats.length) {
							var beat = voice.Beats[bb];
							var beat2 = {}
							alphaTab.model.Beat.CopyTo(beat,beat2);
							var this9 = [];
							beat2.Automations = this9;
							var a = 0;
							while(a < beat.Automations.length) {
								var automation = {}
								alphaTab.model.Automation.CopyTo(beat.Automations[a],automation);
								beat2.Automations.push(automation);
								++a;
							}
							var this10 = [];
							beat2.WhammyBarPoints = this10;
							var i1 = 0;
							while(i1 < beat.WhammyBarPoints.length) {
								var point = {}
								alphaTab.model.BendPoint.CopyTo(beat.WhammyBarPoints[i1],point);
								beat2.WhammyBarPoints.push(point);
								++i1;
							}
							var this11 = [];
							beat2.Notes = this11;
							var n = 0;
							while(n < beat.Notes.length) {
								var note = beat.Notes[n];
								var note2 = {}
								alphaTab.model.Note.CopyTo(note,note2);
								var this12 = [];
								note2.BendPoints = this12;
								var i2 = 0;
								while(i2 < note.BendPoints.length) {
									var point1 = {}
									alphaTab.model.BendPoint.CopyTo(note.BendPoints[i2],point1);
									note2.BendPoints.push(point1);
									++i2;
								}
								beat2.Notes.push(note2);
								++n;
							}
							voice2.Beats.push(beat2);
							++bb;
						}
						bar2.Voices.push(voice2);
						++v;
					}
					staff2.Bars.push(bar2);
					++b;
				}
				track2.Staves.push(staff2);
				++s;
			}
			score2.Tracks.push(track2);
			++t;
		}
		return score2;
	}
	,JsObjectToScore: function(score) {
		var score2 = new alphaTab.model.Score();
		alphaTab.model.Score.CopyTo(score,score2);
		var i = 0;
		while(i < score.MasterBars.length) {
			var masterBar = score.MasterBars[i];
			var masterBar2 = new alphaTab.model.MasterBar();
			alphaTab.model.MasterBar.CopyTo(masterBar,masterBar2);
			if(masterBar.TempoAutomation != null) {
				masterBar2.TempoAutomation = new alphaTab.model.Automation();
				alphaTab.model.Automation.CopyTo(masterBar.TempoAutomation,masterBar2.TempoAutomation);
			}
			if(masterBar.VolumeAutomation != null) {
				masterBar2.VolumeAutomation = new alphaTab.model.Automation();
				alphaTab.model.Automation.CopyTo(masterBar.VolumeAutomation,masterBar2.VolumeAutomation);
			}
			if(masterBar.Section != null) {
				masterBar2.Section = new alphaTab.model.Section();
				alphaTab.model.Section.CopyTo(masterBar.Section,masterBar2.Section);
			}
			score2.AddMasterBar(masterBar2);
			++i;
		}
		var t = 0;
		while(t < score.Tracks.length) {
			var track = score.Tracks[t];
			var track2 = new alphaTab.model.Track(track.Staves.length);
			alphaTab.model.Track.CopyTo(track,track2);
			score2.AddTrack(track2);
			alphaTab.model.PlaybackInformation.CopyTo(track.PlaybackInfo,track2.PlaybackInfo);
			var this1 = track.Chords;
			var key = $iterator(Object.keys(this1))();
			while(key.hasNext()) {
				var key1 = key.next();
				var chord = track.Chords[key1];
				var chord2 = new alphaTab.model.Chord();
				alphaTab.model.Chord.CopyTo(chord,chord2);
				track2.Chords[key1] = chord2;
			}
			var s = 0;
			while(s < track.Staves.length) {
				var staff = track.Staves[s];
				var b = 0;
				while(b < staff.Bars.length) {
					var bar = staff.Bars[b];
					var bar2 = new alphaTab.model.Bar();
					alphaTab.model.Bar.CopyTo(bar,bar2);
					track2.AddBarToStaff(s,bar2);
					var v = 0;
					while(v < bar.Voices.length) {
						var voice = bar.Voices[v];
						var voice2 = new alphaTab.model.Voice();
						alphaTab.model.Voice.CopyTo(voice,voice2);
						bar2.AddVoice(voice2);
						var bb = 0;
						while(bb < voice.Beats.length) {
							var beat = voice.Beats[bb];
							var beat2 = new alphaTab.model.Beat();
							alphaTab.model.Beat.CopyTo(beat,beat2);
							voice2.AddBeat(beat2);
							var a = 0;
							while(a < beat.Automations.length) {
								var automation = new alphaTab.model.Automation();
								alphaTab.model.Automation.CopyTo(beat.Automations[a],automation);
								beat2.Automations.push(automation);
								++a;
							}
							var i1 = 0;
							while(i1 < beat.WhammyBarPoints.length) {
								var point = new alphaTab.model.BendPoint(0,0);
								alphaTab.model.BendPoint.CopyTo(beat.WhammyBarPoints[i1],point);
								beat2.AddWhammyBarPoint(point);
								++i1;
							}
							var n = 0;
							while(n < beat.Notes.length) {
								var note = beat.Notes[n];
								var note2 = new alphaTab.model.Note();
								alphaTab.model.Note.CopyTo(note,note2);
								beat2.AddNote(note2);
								var i2 = 0;
								while(i2 < note.BendPoints.length) {
									var point1 = new alphaTab.model.BendPoint(0,0);
									alphaTab.model.BendPoint.CopyTo(note.BendPoints[i2],point1);
									note2.AddBendPoint(point1);
									++i2;
								}
								++n;
							}
							++bb;
						}
						++v;
					}
					++b;
				}
				++s;
			}
			++t;
		}
		score2.Finish();
		return score2;
	}
	,__class__: alphaTab.model.JsonConverter
};
alphaTab.model._KeySignatureType = {};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_ = $hx_exports["alphaTab"]["model"]["_KeySignatureType"]["KeySignatureType_Impl_"] = {};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.__name__ = true;
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Major";
	case 1:
		return "Minor";
	}
	return "";
};
alphaTab.model.Lyrics = $hx_exports["alphaTab"]["model"]["Lyrics"] = function() {
};
alphaTab.model.Lyrics.__name__ = true;
alphaTab.model.Lyrics.prototype = {
	Finish: function() {
		var this1 = [];
		var chunks = this1;
		this.Parse(this.Text,0,chunks);
		this.Chunks = chunks;
	}
	,Parse: function(str,p,chunks) {
		if(str == null || str.length == 0) {
			return;
		}
		var state = 1;
		var next = 1;
		var skipSpace = false;
		var start = 0;
		while(p < str.length) {
			var this1 = system.Convert.ToUInt16(HxOverrides.cca(str,p));
			var this2 = this1;
			var c = this2;
			switch(state) {
			case 0:
				switch(c) {
				case 9:case 10:case 13:
					break;
				case 32:
					if(!skipSpace) {
						state = next;
						continue;
					}
					break;
				default:
					skipSpace = false;
					state = next;
					continue;
				}
				break;
			case 1:
				if(c == 91) {
					state = 3;
				} else {
					start = p;
					state = 2;
					continue;
				}
				break;
			case 2:
				switch(c) {
				case 10:case 13:case 32:
					var txt = HxOverrides.substr(str,start,p - start);
					chunks.push(this.PrepareChunk(txt));
					state = 0;
					next = 1;
					break;
				case 45:
					state = 4;
					break;
				default:
				}
				break;
			case 3:
				if(c == 93) {
					state = 1;
				}
				break;
			case 4:
				if(c != 45) {
					var txt1 = HxOverrides.substr(str,start,p - start);
					chunks.push(this.PrepareChunk(txt1));
					skipSpace = true;
					state = 0;
					next = 1;
					continue;
				}
				break;
			default:
			}
			++p;
		}
		if(state == 2) {
			if(p != start) {
				chunks.push(HxOverrides.substr(str,start,p - start));
			}
		}
	}
	,PrepareChunk: function(txt) {
		return StringTools.replace(txt,"+"," ");
	}
	,__class__: alphaTab.model.Lyrics
};
alphaTab.model.Lyrics_LyricsState = $hx_exports["alphaTab"]["model"]["Lyrics_LyricsState"] = function() {
};
alphaTab.model.Lyrics_LyricsState.__name__ = true;
alphaTab.model.Lyrics_LyricsState.prototype = {
	__class__: alphaTab.model.Lyrics_LyricsState
};
alphaTab.model.MasterBar = $hx_exports["alphaTab"]["model"]["MasterBar"] = function() {
	this.AlternateEndings = 0;
	this.NextMasterBar = null;
	this.PreviousMasterBar = null;
	this.Index = 0;
	this.KeySignature = 0;
	this.KeySignatureType = null;
	this.IsDoubleBar = false;
	this.IsRepeatStart = false;
	this.RepeatCount = 0;
	this.RepeatGroup = null;
	this.TimeSignatureNumerator = 0;
	this.TimeSignatureDenominator = 0;
	this.TimeSignatureCommon = false;
	this.TripletFeel = null;
	this.Section = null;
	this.TempoAutomation = null;
	this.VolumeAutomation = null;
	this.Score = null;
	this.Start = 0;
	this.TimeSignatureDenominator = 4;
	this.TimeSignatureNumerator = 4;
	this.TripletFeel = 0;
	this.KeySignatureType = 0;
	this.TimeSignatureCommon = false;
};
alphaTab.model.MasterBar.__name__ = true;
alphaTab.model.MasterBar.CopyTo = function(src,dst) {
	dst.AlternateEndings = src.AlternateEndings;
	dst.Index = src.Index;
	dst.KeySignature = src.KeySignature;
	dst.KeySignatureType = src.KeySignatureType;
	dst.IsDoubleBar = src.IsDoubleBar;
	dst.IsRepeatStart = src.IsRepeatStart;
	dst.RepeatCount = src.RepeatCount;
	dst.TimeSignatureNumerator = src.TimeSignatureNumerator;
	dst.TimeSignatureDenominator = src.TimeSignatureDenominator;
	dst.TimeSignatureCommon = src.TimeSignatureCommon;
	dst.TripletFeel = src.TripletFeel;
	dst.Start = src.Start;
};
alphaTab.model.MasterBar.prototype = {
	get_IsRepeatEnd: function() {
		return this.RepeatCount > 0;
	}
	,get_IsSectionStart: function() {
		return this.Section != null;
	}
	,CalculateDuration: function() {
		return this.TimeSignatureNumerator * alphaTab.audio.MidiUtils.ValueToTicks(this.TimeSignatureDenominator);
	}
	,__class__: alphaTab.model.MasterBar
};
alphaTab.model.ModelUtils = $hx_exports["alphaTab"]["model"]["ModelUtils"] = function() { };
alphaTab.model.ModelUtils.__name__ = true;
alphaTab.model.ModelUtils.GetIndex = function(duration) {
	var index = 0;
	var value = duration;
	if(value < 0) {
		return index;
	}
	var this1 = duration;
	return system.Convert.ToInt32_Single(Math.log2(this1));
};
alphaTab.model.ModelUtils.KeySignatureIsFlat = function(ks) {
	return ks < 0;
};
alphaTab.model.ModelUtils.KeySignatureIsNatural = function(ks) {
	return ks == 0;
};
alphaTab.model.ModelUtils.KeySignatureIsSharp = function(ks) {
	return ks > 0;
};
alphaTab.model.ModelUtils.ApplyPitchOffsets = function(settings,score) {
	var i = 0;
	while(i < score.Tracks.length) {
		if(i < settings.DisplayTranspositionPitches.length) {
			score.Tracks[i].DisplayTranspositionPitch = -settings.DisplayTranspositionPitches[i];
		}
		if(i < settings.TranspositionPitches.length) {
			score.Tracks[i].TranspositionPitch = -settings.TranspositionPitches[i];
		}
		++i;
	}
};
alphaTab.model.Note = $hx_exports["alphaTab"]["model"]["Note"] = function() {
	this.Id = 0;
	this.Index = 0;
	this.Accentuated = null;
	this.BendPoints = null;
	this.MaxBendPoint = null;
	this.Fret = 0;
	this.String = 0;
	this.Octave = 0;
	this.Tone = 0;
	this.Element = 0;
	this.Variation = 0;
	this.IsHammerPullOrigin = false;
	this.HammerPullOrigin = null;
	this.HammerPullDestination = null;
	this.HarmonicValue = 0.0;
	this.HarmonicType = null;
	this.IsGhost = false;
	this.IsLetRing = false;
	this.IsPalmMute = false;
	this.IsDead = false;
	this.IsStaccato = false;
	this.SlideType = null;
	this.SlideTarget = null;
	this.Vibrato = null;
	this.TieOrigin = null;
	this.TieDestination = null;
	this.IsTieDestination = false;
	this.IsTieOrigin = false;
	this.LeftHandFinger = null;
	this.RightHandFinger = null;
	this.IsFingering = false;
	this.TrillValue = 0;
	this.TrillSpeed = null;
	this.DurationPercent = 0.0;
	this.AccidentalMode = null;
	this.Beat = null;
	this.Dynamic = null;
	this.Id = alphaTab.model.Note.GlobalNoteId++;
	var this1 = [];
	this.BendPoints = this1;
	this.Dynamic = 5;
	this.Accentuated = 0;
	this.Fret = -2147483648;
	this.HarmonicType = 0;
	this.SlideType = 0;
	this.Vibrato = 0;
	this.LeftHandFinger = -2;
	this.RightHandFinger = -2;
	this.TrillValue = -1;
	this.TrillSpeed = 32;
	var this2 = 1;
	this.DurationPercent = this2;
	this.Octave = -1;
	this.Tone = -1;
	this.Fret = -1;
	this.String = -1;
	this.Element = -1;
	this.Variation = -1;
};
alphaTab.model.Note.__name__ = true;
alphaTab.model.Note.GetStringTuning = function(track,noteString) {
	if(track.Tuning.length > 0) {
		return track.Tuning[track.Tuning.length - (noteString - 1) - 1];
	}
	return 0;
};
alphaTab.model.Note.CopyTo = function(src,dst) {
	dst.Id = src.Id;
	dst.Accentuated = src.Accentuated;
	dst.Fret = src.Fret;
	dst.String = src.String;
	dst.IsHammerPullOrigin = src.IsHammerPullOrigin;
	dst.HarmonicValue = src.HarmonicValue;
	dst.HarmonicType = src.HarmonicType;
	dst.IsGhost = src.IsGhost;
	dst.IsLetRing = src.IsLetRing;
	dst.IsPalmMute = src.IsPalmMute;
	dst.IsDead = src.IsDead;
	dst.IsStaccato = src.IsStaccato;
	dst.SlideType = src.SlideType;
	dst.Vibrato = src.Vibrato;
	dst.IsTieDestination = src.IsTieDestination;
	dst.LeftHandFinger = src.LeftHandFinger;
	dst.RightHandFinger = src.RightHandFinger;
	dst.IsFingering = src.IsFingering;
	dst.TrillValue = src.TrillValue;
	dst.TrillSpeed = src.TrillSpeed;
	dst.DurationPercent = src.DurationPercent;
	dst.AccidentalMode = src.AccidentalMode;
	dst.Dynamic = src.Dynamic;
	dst.Octave = src.Octave;
	dst.Tone = src.Tone;
	dst.Element = src.Element;
	dst.Variation = src.Variation;
};
alphaTab.model.Note.NextNoteOnSameLine = function(note) {
	var nextBeat = note.Beat.NextBeat;
	while(nextBeat != null && nextBeat.Voice.Bar.Index <= note.Beat.Voice.Bar.Index + 3) {
		var noteOnString = nextBeat.GetNoteOnString(note.String);
		if(noteOnString != null) {
			return noteOnString;
		} else {
			nextBeat = nextBeat.NextBeat;
		}
	}
	return null;
};
alphaTab.model.Note.PreviousNoteOnSameLine = function(note) {
	var previousBeat = note.Beat.PreviousBeat;
	while(previousBeat != null && previousBeat.Voice.Bar.Index >= note.Beat.Voice.Bar.Index - 3) {
		var noteOnString = previousBeat.GetNoteOnString(note.String);
		if(noteOnString != null) {
			return noteOnString;
		} else {
			previousBeat = previousBeat.PreviousBeat;
		}
	}
	return null;
};
alphaTab.model.Note.prototype = {
	get_HasBend: function() {
		return this.BendPoints.length > 0;
	}
	,get_IsStringed: function() {
		if(this.Fret >= 0) {
			return this.String >= 0;
		} else {
			return false;
		}
	}
	,get_IsPiano: function() {
		if(this.get_IsStringed()) {
			return false;
		}
		if(this.Octave >= 0) {
			return this.Tone >= 0;
		} else {
			return false;
		}
	}
	,get_IsPercussion: function() {
		if(this.get_IsStringed()) {
			return false;
		}
		if(this.Element >= 0) {
			return this.Variation >= 0;
		} else {
			return false;
		}
	}
	,get_IsHammerPullDestination: function() {
		return this.HammerPullOrigin != null;
	}
	,get_IsHarmonic: function() {
		return this.HarmonicType != 0;
	}
	,get_TrillFret: function() {
		return this.TrillValue - this.get_StringTuning();
	}
	,get_IsTrill: function() {
		return this.TrillValue >= 0;
	}
	,get_StringTuning: function() {
		return this.Beat.Voice.Bar.Staff.Track.Capo + alphaTab.model.Note.GetStringTuning(this.Beat.Voice.Bar.Staff.Track,this.String);
	}
	,get_RealValue: function() {
		if(this.get_IsPercussion()) {
			return alphaTab.rendering.utils.PercussionMapper.MidiFromElementVariation(this);
		}
		if(this.get_IsStringed()) {
			return this.Fret + this.get_StringTuning() - this.Beat.Voice.Bar.Staff.Track.TranspositionPitch;
		}
		if(this.get_IsPiano()) {
			return this.Octave * 12 + this.Tone - this.Beat.Voice.Bar.Staff.Track.TranspositionPitch;
		}
		return 0;
	}
	,Clone: function() {
		var n = new alphaTab.model.Note();
		alphaTab.model.Note.CopyTo(this,n);
		var i = 0;
		var j = this.BendPoints.length;
		while(i < j) {
			n.AddBendPoint(this.BendPoints[i].Clone());
			++i;
		}
		return n;
	}
	,AddBendPoint: function(point) {
		this.BendPoints.push(point);
		if(this.MaxBendPoint == null || point.Value > this.MaxBendPoint.Value) {
			this.MaxBendPoint = point;
		}
	}
	,Finish: function() {
		var _gthis = this;
		var nextNoteOnLine = new alphaTab.util.Lazy(function() {
			return alphaTab.model.Note.NextNoteOnSameLine(_gthis);
		});
		var prevNoteOnLine = new alphaTab.util.Lazy(function() {
			return alphaTab.model.Note.PreviousNoteOnSameLine(_gthis);
		});
		if(this.IsTieDestination) {
			if(prevNoteOnLine.get_Value() == null) {
				this.IsTieDestination = false;
			} else {
				this.TieOrigin = prevNoteOnLine.get_Value();
				this.TieOrigin.IsTieOrigin = true;
				this.TieOrigin.TieDestination = this;
				this.Fret = this.TieOrigin.Fret;
				this.Octave = this.TieOrigin.Octave;
				this.Tone = this.TieOrigin.Tone;
			}
		}
		if(this.IsHammerPullOrigin) {
			if(nextNoteOnLine.get_Value() == null) {
				this.IsHammerPullOrigin = false;
			} else {
				this.HammerPullDestination = nextNoteOnLine.get_Value();
				this.HammerPullDestination.HammerPullOrigin = this;
			}
		}
		if(this.SlideType != 0) {
			this.SlideTarget = nextNoteOnLine.get_Value();
		}
	}
	,__class__: alphaTab.model.Note
};
alphaTab.model._NoteAccidentalMode = {};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_ = $hx_exports["alphaTab"]["model"]["_NoteAccidentalMode"]["NoteAccidentalMode_Impl_"] = {};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.__name__ = true;
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Default";
	case 1:
		return "SwapAccidentals";
	case 2:
		return "ForceNatural";
	case 3:
		return "ForceSharp";
	case 4:
		return "ForceFlat";
	}
	return "";
};
alphaTab.model._PickStrokeType = {};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_ = $hx_exports["alphaTab"]["model"]["_PickStrokeType"]["PickStrokeType_Impl_"] = {};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.__name__ = true;
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Up";
	case 2:
		return "Down";
	}
	return "";
};
alphaTab.model.PlaybackInformation = $hx_exports["alphaTab"]["model"]["PlaybackInformation"] = function() {
	this.Volume = 0;
	this.Balance = 0;
	this.Port = 0;
	this.Program = 0;
	this.PrimaryChannel = 0;
	this.SecondaryChannel = 0;
	this.IsMute = false;
	this.IsSolo = false;
	this.Volume = 15;
	this.Balance = 8;
	this.Port = 1;
};
alphaTab.model.PlaybackInformation.__name__ = true;
alphaTab.model.PlaybackInformation.CopyTo = function(src,dst) {
	dst.Volume = src.Volume;
	dst.Balance = src.Balance;
	dst.Port = src.Port;
	dst.Program = src.Program;
	dst.PrimaryChannel = src.PrimaryChannel;
	dst.SecondaryChannel = src.SecondaryChannel;
	dst.IsMute = src.IsMute;
	dst.IsSolo = src.IsSolo;
};
alphaTab.model.PlaybackInformation.prototype = {
	__class__: alphaTab.model.PlaybackInformation
};
alphaTab.model.RepeatGroup = $hx_exports["alphaTab"]["model"]["RepeatGroup"] = function() {
	this.MasterBars = null;
	this.Openings = null;
	this.Closings = null;
	this.IsClosed = false;
	var this1 = [];
	this.MasterBars = this1;
	var this2 = [];
	this.Openings = this2;
	var this3 = [];
	this.Closings = this3;
	this.IsClosed = false;
};
alphaTab.model.RepeatGroup.__name__ = true;
alphaTab.model.RepeatGroup.prototype = {
	AddMasterBar: function(masterBar) {
		if(this.Openings.length == 0) {
			this.Openings.push(masterBar);
		}
		this.MasterBars.push(masterBar);
		masterBar.RepeatGroup = this;
		if(masterBar.get_IsRepeatEnd()) {
			this.Closings.push(masterBar);
			this.IsClosed = true;
		} else if(this.IsClosed) {
			this.IsClosed = false;
			this.Openings.push(masterBar);
		}
	}
	,__class__: alphaTab.model.RepeatGroup
};
alphaTab.model.Score = $hx_exports["alphaTab"]["model"]["Score"] = function() {
	this._currentRepeatGroup = null;
	this.Album = null;
	this.Artist = null;
	this.Copyright = null;
	this.Instructions = null;
	this.Music = null;
	this.Notices = null;
	this.SubTitle = null;
	this.Title = null;
	this.Words = null;
	this.Tab = null;
	this.Tempo = 0;
	this.TempoLabel = null;
	this.MasterBars = null;
	this.Tracks = null;
	var this1 = [];
	this.MasterBars = this1;
	var this2 = [];
	this.Tracks = this2;
	this._currentRepeatGroup = new alphaTab.model.RepeatGroup();
	this.Album = this.Artist = this.Copyright = this.Instructions = this.Music = this.Notices = this.SubTitle = this.Title = this.Words = this.Tab = this.TempoLabel = "";
	this.Tempo = 120;
};
alphaTab.model.Score.__name__ = true;
alphaTab.model.Score.CopyTo = function(src,dst) {
	dst.Album = src.Album;
	dst.Artist = src.Artist;
	dst.Copyright = src.Copyright;
	dst.Instructions = src.Instructions;
	dst.Music = src.Music;
	dst.Notices = src.Notices;
	dst.SubTitle = src.SubTitle;
	dst.Title = src.Title;
	dst.Words = src.Words;
	dst.Tab = src.Tab;
	dst.Tempo = src.Tempo;
	dst.TempoLabel = src.TempoLabel;
};
alphaTab.model.Score.prototype = {
	AddMasterBar: function(bar) {
		bar.Score = this;
		bar.Index = this.MasterBars.length;
		if(this.MasterBars.length != 0) {
			bar.PreviousMasterBar = this.MasterBars[this.MasterBars.length - 1];
			bar.PreviousMasterBar.NextMasterBar = bar;
			bar.Start = bar.PreviousMasterBar.Start + bar.PreviousMasterBar.CalculateDuration();
		}
		if(bar.IsRepeatStart || this._currentRepeatGroup.IsClosed && bar.AlternateEndings <= 0) {
			this._currentRepeatGroup = new alphaTab.model.RepeatGroup();
		}
		this._currentRepeatGroup.AddMasterBar(bar);
		this.MasterBars.push(bar);
	}
	,AddTrack: function(track) {
		track.Score = this;
		track.Index = this.Tracks.length;
		this.Tracks.push(track);
	}
	,Finish: function() {
		var i = 0;
		var j = this.Tracks.length;
		while(i < j) {
			this.Tracks[i].Finish();
			++i;
		}
	}
	,__class__: alphaTab.model.Score
};
alphaTab.model.Section = $hx_exports["alphaTab"]["model"]["Section"] = function() {
	this.Marker = null;
	this.Text = null;
	this.Text = this.Marker = "";
};
alphaTab.model.Section.__name__ = true;
alphaTab.model.Section.CopyTo = function(src,dst) {
	dst.Marker = src.Marker;
	dst.Text = src.Text;
};
alphaTab.model.Section.prototype = {
	__class__: alphaTab.model.Section
};
alphaTab.model._SlideType = {};
alphaTab.model._SlideType.SlideType_Impl_ = $hx_exports["alphaTab"]["model"]["_SlideType"]["SlideType_Impl_"] = {};
alphaTab.model._SlideType.SlideType_Impl_.__name__ = true;
alphaTab.model._SlideType.SlideType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._SlideType.SlideType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._SlideType.SlideType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._SlideType.SlideType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._SlideType.SlideType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._SlideType.SlideType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._SlideType.SlideType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._SlideType.SlideType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._SlideType.SlideType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._SlideType.SlideType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._SlideType.SlideType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._SlideType.SlideType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._SlideType.SlideType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Shift";
	case 2:
		return "Legato";
	case 3:
		return "IntoFromBelow";
	case 4:
		return "IntoFromAbove";
	case 5:
		return "OutUp";
	case 6:
		return "OutDown";
	}
	return "";
};
alphaTab.model.Staff = $hx_exports["alphaTab"]["model"]["Staff"] = function() {
	this.Bars = null;
	this.Track = null;
	this.Index = 0;
	var this1 = [];
	this.Bars = this1;
};
alphaTab.model.Staff.__name__ = true;
alphaTab.model.Staff.prototype = {
	Finish: function() {
		var i = 0;
		var j = this.Bars.length;
		while(i < j) {
			this.Bars[i].Finish();
			++i;
		}
	}
	,__class__: alphaTab.model.Staff
};
alphaTab.model.Track = $hx_exports["alphaTab"]["model"]["Track"] = function(staveCount) {
	this.Capo = 0;
	this.TranspositionPitch = 0;
	this.DisplayTranspositionPitch = 0;
	this.Index = 0;
	this.Name = null;
	this.ShortName = null;
	this.Tuning = null;
	this.TuningName = null;
	this.Color = null;
	this.PlaybackInfo = null;
	this.IsPercussion = false;
	this.Score = null;
	this.Staves = null;
	this.Chords = null;
	this.Name = "";
	this.ShortName = "";
	var this1 = new Int32Array(0);
	this.Tuning = this1;
	var this2 = {}
	this.Chords = this2;
	this.PlaybackInfo = new alphaTab.model.PlaybackInformation();
	this.Color = new alphaTab.platform.model.Color(200,0,0,255);
	var this3 = [];
	this.Staves = this3;
	this.EnsureStaveCount(staveCount);
};
alphaTab.model.Track.__name__ = true;
alphaTab.model.Track.CopyTo = function(src,dst) {
	dst.Name = src.Name;
	dst.Capo = src.Capo;
	dst.Index = src.Index;
	dst.ShortName = src.ShortName;
	var array = src.Tuning;
	dst.Tuning = new Int32Array(array);
	dst.Color.Raw = src.Color.Raw;
	dst.Color.RGBA = src.Color.RGBA;
	dst.IsPercussion = src.IsPercussion;
	dst.TranspositionPitch = src.TranspositionPitch;
	dst.DisplayTranspositionPitch = src.DisplayTranspositionPitch;
};
alphaTab.model.Track.prototype = {
	get_IsStringed: function() {
		return this.Tuning.length > 0;
	}
	,EnsureStaveCount: function(staveCount) {
		while(this.Staves.length < staveCount) {
			var staff = new alphaTab.model.Staff();
			staff.Index = this.Staves.length;
			staff.Track = this;
			this.Staves.push(staff);
		}
	}
	,AddBarToStaff: function(staffIndex,bar) {
		var staff = this.Staves[staffIndex];
		var bars = staff.Bars;
		bar.Staff = staff;
		bar.Index = bars.length;
		if(bars.length > 0) {
			bar.PreviousBar = bars[bars.length - 1];
			bar.PreviousBar.NextBar = bar;
		}
		bars.push(bar);
	}
	,Finish: function() {
		var s = this.ShortName;
		if(s == null || s.length == 0) {
			this.ShortName = this.Name;
			if(this.ShortName.length > 10) {
				this.ShortName = HxOverrides.substr(this.ShortName,0,10);
			}
		}
		var i = 0;
		var j = this.Staves.length;
		while(i < j) {
			this.Staves[i].Finish();
			++i;
		}
	}
	,ApplyLyrics: function(lyrics) {
		var lyric = $iterator(lyrics)();
		while(lyric.hasNext()) {
			var lyric1 = lyric.next();
			lyric1.Finish();
		}
		var staff = this.Staves[0];
		var li = 0;
		while(li < lyrics.length) {
			var lyric2 = lyrics[li];
			if(lyric2.StartBar >= 0) {
				var beat = staff.Bars[lyric2.StartBar].Voices[0].Beats[0];
				var ci = 0;
				while(ci < lyric2.Chunks.length && beat != null) {
					while(beat != null && (beat.IsEmpty || beat.get_IsRest())) beat = beat.NextBeat;
					if(beat != null) {
						if(beat.Lyrics == null) {
							var size = lyrics.length;
							var this1 = new Array(size);
							beat.Lyrics = this1;
						}
						beat.Lyrics[li] = lyric2.Chunks[ci];
						beat = beat.NextBeat;
					}
					++ci;
				}
			}
			++li;
		}
	}
	,__class__: alphaTab.model.Track
};
alphaTab.model._TripletFeel = {};
alphaTab.model._TripletFeel.TripletFeel_Impl_ = $hx_exports["alphaTab"]["model"]["_TripletFeel"]["TripletFeel_Impl_"] = {};
alphaTab.model._TripletFeel.TripletFeel_Impl_.__name__ = true;
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._TripletFeel.TripletFeel_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "NoTripletFeel";
	case 1:
		return "Triplet16th";
	case 2:
		return "Triplet8th";
	case 3:
		return "Dotted16th";
	case 4:
		return "Dotted8th";
	case 5:
		return "Scottish16th";
	case 6:
		return "Scottish8th";
	}
	return "";
};
alphaTab.model.Tuning = $hx_exports["alphaTab"]["model"]["Tuning"] = function(name,tuning,isStandard) {
	this.IsStandard = false;
	this.Name = null;
	this.Tunings = null;
	this.IsStandard = isStandard;
	this.Name = name;
	this.Tunings = tuning;
};
alphaTab.model.Tuning.__name__ = true;
alphaTab.model.Tuning.GetTextForTuning = function(tuning,includeOctave) {
	var octave = tuning / 12 | 0;
	var note = tuning % 12;
	var notes = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
	var result = notes[note];
	if(includeOctave) {
		result = result + Std.string(octave - 1);
	}
	return result;
};
alphaTab.model.Tuning.GetDefaultTuningFor = function(stringCount) {
	if(alphaTab.model.Tuning._defaultTunings.hasOwnProperty(stringCount)) {
		return alphaTab.model.Tuning._defaultTunings[stringCount];
	}
	return null;
};
alphaTab.model.Tuning.GetPresetsFor = function(stringCount) {
	switch(stringCount) {
	case 4:
		return alphaTab.model.Tuning._fourStrings;
	case 5:
		return alphaTab.model.Tuning._fiveStrings;
	case 6:
		return alphaTab.model.Tuning._sixStrings;
	case 7:
		return alphaTab.model.Tuning._sevenStrings;
	default:
	}
	var this1 = [];
	return this1;
};
alphaTab.model.Tuning.Initialize = function() {
	var this1 = [];
	alphaTab.model.Tuning._sevenStrings = this1;
	var this2 = [];
	alphaTab.model.Tuning._sixStrings = this2;
	var this3 = [];
	alphaTab.model.Tuning._fiveStrings = this3;
	var this4 = [];
	alphaTab.model.Tuning._fourStrings = this4;
	var this5 = {}
	alphaTab.model.Tuning._defaultTunings = this5;
	alphaTab.model.Tuning._defaultTunings[7] = new alphaTab.model.Tuning("Guitar 7 strings",new Int32Array([64,59,55,50,45,40,35]),true);
	alphaTab.model.Tuning._sevenStrings.push(alphaTab.model.Tuning._defaultTunings[7]);
	alphaTab.model.Tuning._defaultTunings[6] = new alphaTab.model.Tuning("Guitar Standard Tuning",new Int32Array([64,59,55,50,45,40]),true);
	alphaTab.model.Tuning._sixStrings.push(alphaTab.model.Tuning._defaultTunings[6]);
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Tune down � step",new Int32Array([63,58,54,49,44,39]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Tune down 1 step",new Int32Array([62,57,53,48,43,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Tune down 2 step",new Int32Array([60,55,51,46,41,36]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Dropped D Tuning",new Int32Array([64,59,55,50,45,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Dropped D Tuning variant",new Int32Array([64,57,55,50,45,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Double Dropped D Tuning",new Int32Array([62,59,55,50,45,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Dropped E Tuning",new Int32Array([66,61,57,52,47,40]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Dropped C Tuning",new Int32Array([62,57,53,48,43,36]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open C Tuning",new Int32Array([64,60,55,48,43,36]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Cm Tuning",new Int32Array([63,60,55,48,43,36]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open C6 Tuning",new Int32Array([64,57,55,48,43,36]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Cmaj7 Tuning",new Int32Array([64,59,55,52,43,36]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open D Tuning",new Int32Array([62,57,54,50,45,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Dm Tuning",new Int32Array([62,57,53,50,45,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open D5 Tuning",new Int32Array([62,57,50,50,45,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open D6 Tuning",new Int32Array([62,59,54,50,45,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Dsus4 Tuning",new Int32Array([62,57,55,50,45,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open E Tuning",new Int32Array([64,59,56,52,47,40]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Em Tuning",new Int32Array([64,59,55,52,47,40]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Esus11 Tuning",new Int32Array([64,59,55,52,45,40]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open F Tuning",new Int32Array([65,60,53,48,45,41]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open G Tuning",new Int32Array([62,59,55,50,43,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Gm Tuning",new Int32Array([62,58,55,50,43,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open G6 Tuning",new Int32Array([64,59,55,50,43,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Gsus4 Tuning",new Int32Array([62,60,55,50,43,38]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open A Tuning",new Int32Array([64,61,57,52,45,40]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Open Am Tuning",new Int32Array([64,60,57,52,45,40]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Guitar Nashville Tuning",new Int32Array([64,59,67,62,57,52]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Bass 6 Strings Tuning",new Int32Array([48,43,38,33,28,23]),false));
	alphaTab.model.Tuning._sixStrings.push(new alphaTab.model.Tuning("Lute or Vihuela Tuning",new Int32Array([64,59,54,50,45,40]),false));
	alphaTab.model.Tuning._defaultTunings[5] = new alphaTab.model.Tuning("Bass 5 Strings Tuning",new Int32Array([43,38,33,28,23]),true);
	alphaTab.model.Tuning._fiveStrings.push(alphaTab.model.Tuning._defaultTunings[5]);
	alphaTab.model.Tuning._fiveStrings.push(new alphaTab.model.Tuning("Banjo Dropped C Tuning",new Int32Array([62,59,55,48,67]),false));
	alphaTab.model.Tuning._fiveStrings.push(new alphaTab.model.Tuning("Banjo Open D Tuning",new Int32Array([62,57,54,50,69]),false));
	alphaTab.model.Tuning._fiveStrings.push(new alphaTab.model.Tuning("Banjo Open G Tuning",new Int32Array([62,59,55,50,67]),false));
	alphaTab.model.Tuning._fiveStrings.push(new alphaTab.model.Tuning("Banjo G Minor Tuning",new Int32Array([62,58,55,50,67]),false));
	alphaTab.model.Tuning._fiveStrings.push(new alphaTab.model.Tuning("Banjo G Modal Tuning",new Int32Array([62,57,55,50,67]),false));
	alphaTab.model.Tuning._defaultTunings[4] = new alphaTab.model.Tuning("Bass Standard Tuning",new Int32Array([43,38,33,28]),true);
	alphaTab.model.Tuning._fourStrings.push(alphaTab.model.Tuning._defaultTunings[4]);
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Bass Tune down � step",new Int32Array([42,37,32,27]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Bass Tune down 1 step",new Int32Array([41,36,31,26]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Bass Tune down 2 step",new Int32Array([39,34,29,24]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Bass Dropped D Tuning",new Int32Array([43,38,33,26]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Ukulele C Tuning",new Int32Array([45,40,36,43]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Ukulele G Tuning",new Int32Array([52,47,43,38]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Mandolin Standard Tuning",new Int32Array([64,57,50,43]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Mandolin or Violin Tuning",new Int32Array([76,69,62,55]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Viola Tuning",new Int32Array([69,62,55,48]),false));
	alphaTab.model.Tuning._fourStrings.push(new alphaTab.model.Tuning("Cello Tuning",new Int32Array([57,50,43,36]),false));
};
alphaTab.model.Tuning.FindTuning = function(strings) {
	var tunings = alphaTab.model.Tuning.GetPresetsFor(strings.length);
	var t = 0;
	var tc = tunings.length;
	while(t < tc) {
		var tuning = tunings[t];
		var equals = true;
		var i = 0;
		var j = strings.length;
		while(i < j) {
			if(strings[i] != tuning.Tunings[i]) {
				equals = false;
				break;
			}
			++i;
		}
		if(equals) {
			return tuning;
		}
		++t;
	}
	return null;
};
alphaTab.model.Tuning.prototype = {
	__class__: alphaTab.model.Tuning
};
alphaTab.model.TuningParseResult = $hx_exports["alphaTab"]["model"]["TuningParseResult"] = function() {
};
alphaTab.model.TuningParseResult.__name__ = true;
alphaTab.model.TuningParseResult.prototype = {
	get_RealValue: function() {
		return this.Octave * 12 + this.NoteValue;
	}
	,__class__: alphaTab.model.TuningParseResult
};
alphaTab.model.TuningParser = $hx_exports["alphaTab"]["model"]["TuningParser"] = function() { };
alphaTab.model.TuningParser.__name__ = true;
alphaTab.model.TuningParser.IsTuning = function(name) {
	return alphaTab.model.TuningParser.Parse(name) != null;
};
alphaTab.model.TuningParser.Parse = function(name) {
	var note = "";
	var octave = "";
	var i = 0;
	while(i < name.length) {
		var this1 = system.Convert.ToUInt16(HxOverrides.cca(name,i));
		var c = this1;
		if(alphaTab.platform.Platform.IsCharNumber(c,false)) {
			if(note == null || note.length == 0) {
				return null;
			}
			octave = octave + String.fromCharCode(c);
		} else if(c >= 65 && c <= 90 || c >= 97 && c <= 122 || c == 35) {
			note = note + String.fromCharCode(c);
		} else {
			return null;
		}
		++i;
	}
	if(octave == null || octave.length == 0 || (note == null || note.length == 0)) {
		return null;
	}
	var result = new alphaTab.model.TuningParseResult();
	result.Octave = alphaTab.platform.Platform.ParseInt(octave) + 1;
	result.Note = note.toLowerCase();
	result.NoteValue = alphaTab.model.TuningParser.GetToneForText(result.Note);
	return result;
};
alphaTab.model.TuningParser.GetTuningForText = function(str) {
	var result = alphaTab.model.TuningParser.Parse(str);
	if(result == null) {
		return -1;
	}
	return result.get_RealValue();
};
alphaTab.model.TuningParser.GetToneForText = function(note) {
	var b;
	var _g = note.toLowerCase();
	switch(_g) {
	case "a":
		b = 9;
		break;
	case "a#":case "bb":
		b = 10;
		break;
	case "ab":case "g#":
		b = 8;
		break;
	case "b":
		b = 11;
		break;
	case "c":
		b = 0;
		break;
	case "c#":case "db":
		b = 1;
		break;
	case "d":
		b = 2;
		break;
	case "e":
		b = 4;
		break;
	case "d#":case "eb":
		b = 3;
		break;
	case "f":
		b = 5;
		break;
	case "g":
		b = 7;
		break;
	case "f#":case "gb":
		b = 6;
		break;
	default:
		return 0;
	}
	return b;
};
alphaTab.model._VibratoType = {};
alphaTab.model._VibratoType.VibratoType_Impl_ = $hx_exports["alphaTab"]["model"]["_VibratoType"]["VibratoType_Impl_"] = {};
alphaTab.model._VibratoType.VibratoType_Impl_.__name__ = true;
alphaTab.model._VibratoType.VibratoType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.model._VibratoType.VibratoType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.model._VibratoType.VibratoType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Slight";
	case 2:
		return "Wide";
	}
	return "";
};
alphaTab.model.Voice = $hx_exports["alphaTab"]["model"]["Voice"] = function() {
	this.Index = 0;
	this.Bar = null;
	this.Beats = null;
	this.IsEmpty = false;
	var this1 = [];
	this.Beats = this1;
	this.IsEmpty = true;
};
alphaTab.model.Voice.__name__ = true;
alphaTab.model.Voice.CopyTo = function(src,dst) {
	dst.Index = src.Index;
	dst.IsEmpty = src.IsEmpty;
};
alphaTab.model.Voice.prototype = {
	AddBeat: function(beat) {
		beat.Voice = this;
		beat.Index = this.Beats.length;
		this.Beats.push(beat);
		if(!beat.IsEmpty) {
			this.IsEmpty = false;
		}
	}
	,Chain: function(beat) {
		if(this.Bar == null) {
			return;
		}
		if(beat.Index < this.Beats.length - 1) {
			beat.NextBeat = this.Beats[beat.Index + 1];
			beat.NextBeat.PreviousBeat = beat;
		} else if(beat.Index == beat.Voice.Beats.length - 1 && beat.Voice.Bar.NextBar != null) {
			var nextVoice = this.Bar.NextBar.Voices[this.Index];
			if(nextVoice.Beats.length > 0) {
				beat.NextBeat = nextVoice.Beats[0];
				beat.NextBeat.PreviousBeat = beat;
			} else {
				beat.NextBeat.PreviousBeat = beat;
			}
		}
	}
	,AddGraceBeat: function(beat) {
		if(this.Beats.length == 0) {
			this.AddBeat(beat);
			return;
		}
		var lastBeat = this.Beats[this.Beats.length - 1];
		var index = this.Beats.length - 1;
		if(index != -1) {
			this.Beats.splice(index,1);
		}
		this.AddBeat(beat);
		this.AddBeat(lastBeat);
		this.IsEmpty = false;
	}
	,Finish: function() {
		var i = 0;
		var j = this.Beats.length;
		while(i < j) {
			var beat = this.Beats[i];
			this.Chain(beat);
			++i;
		}
		var i1 = 0;
		var j1 = this.Beats.length;
		while(i1 < j1) {
			var beat1 = this.Beats[i1];
			beat1.Finish();
			++i1;
		}
	}
	,__class__: alphaTab.model.Voice
};
alphaTab.platform.javaScript.JsApi = $hx_exports["alphaTab"]["platform"]["javaScript"]["JsApi"] = function(element,options) {
	var _gthis = this;
	this._element = null;
	this._canvasElement = null;
	this._visibilityCheckerInterval = 0;
	this._visibilityCheckerIntervalId = 0;
	this._renderResults = null;
	this._totalResultCount = 0;
	this.Settings = null;
	this.Renderer = null;
	this.Score = null;
	this.TrackIndexes = null;
	this._element = element;
	this._element.classList.add("alphaTab");
	var dataAttributes = this.GetDataAttributes();
	var settings = this.Settings = alphaTab.Settings.FromJson(options,dataAttributes);
	var autoSize = settings.Width < 0;
	var tracksData;
	if(options != null && options.tracks) {
		tracksData = options.tracks;
	} else if(dataAttributes.hasOwnProperty("tracks")) {
		tracksData = dataAttributes["tracks"];
	} else {
		tracksData = 0;
	}
	this.SetTracks(tracksData,false);
	var contents = "";
	if(element != null) {
		if(dataAttributes.hasOwnProperty("tex") && !(!element.innerText)) {
			contents = element.innerHTML;
			element.innerHTML = "";
			contents = StringTools.trim(contents);
		}
		this._canvasElement = window.document.createElement("div");
		this._canvasElement.className = "alphaTabSurface";
		this._canvasElement.style.fontSize = "0";
		this._canvasElement.style.overflow = "hidden";
		this._canvasElement.style.lineHeight = "0";
		element.appendChild(this._canvasElement);
		if(settings.Engine == "default" || settings.Engine == "svg") {
			window.addEventListener("scroll",function() {
				_gthis.ShowSvgsInViewPort();
			},true);
			window.addEventListener("resize",function() {
				_gthis.ShowSvgsInViewPort();
			},true);
		}
		if(autoSize) {
			settings.Width = element.offsetWidth;
			var timeoutId = 0;
			window.addEventListener("resize",function() {
				window.clearTimeout(timeoutId);
				timeoutId = window.setTimeout(function() {
					if(element.offsetWidth != settings.Width) {
						_gthis.TriggerResize();
					}
				},1);
			});
		}
	}
	this.CreateStyleElement(settings);
	if(element != null && autoSize) {
		var initialResizeEventInfo = new alphaTab.platform.javaScript.ResizeEventArgs();
		initialResizeEventInfo.OldWidth = 0;
		initialResizeEventInfo.NewWidth = element.offsetWidth;
		initialResizeEventInfo.Settings = settings;
		this.TriggerEvent("resize",initialResizeEventInfo);
		settings.Width = initialResizeEventInfo.NewWidth;
	}
	var workersUnsupported = !window["Worker"];
	if(settings.UseWebWorker && !workersUnsupported && settings.Engine != "html5") {
		this.Renderer = new alphaTab.platform.javaScript.WorkerScoreRenderer(this,settings);
	} else {
		this.Renderer = new alphaTab.rendering.ScoreRenderer(settings);
	}
	this.Renderer.RenderFinished = system._EventAction1.EventAction1_Impl_.add(this.Renderer.RenderFinished,function(o) {
		_gthis.TriggerEvent("rendered",null);
	});
	this.Renderer.PostRenderFinished = system._EventAction.EventAction_Impl_.add(this.Renderer.PostRenderFinished,function() {
		_gthis._element.classList.remove("loading");
		_gthis._element.classList.remove("rendering");
		_gthis.TriggerEvent("postRendered",null);
	});
	this.Renderer.PreRender = system._EventAction1.EventAction1_Impl_.add(this.Renderer.PreRender,function(result) {
		var this1 = [];
		_gthis._renderResults = this1;
		_gthis._totalResultCount = 0;
		_gthis.AppendRenderResult(result);
	});
	this.Renderer.PartialRenderFinished = system._EventAction1.EventAction1_Impl_.add(this.Renderer.PartialRenderFinished,$bind(this,this.AppendRenderResult));
	this.Renderer.RenderFinished = system._EventAction1.EventAction1_Impl_.add(this.Renderer.RenderFinished,function(r) {
		_gthis.AppendRenderResult(r);
		_gthis.AppendRenderResult(null);
	});
	this.Renderer.Error = system._EventAction2.EventAction2_Impl_.add(this.Renderer.Error,$bind(this,this.Error));
	var initialRender = function() {
		if(autoSize) {
			_gthis.Settings.Width = _gthis._element.offsetWidth;
			_gthis.Renderer.UpdateSettings(settings);
		}
		if(!(contents == null || contents.length == 0)) {
			_gthis.Tex(contents);
		} else if(options && options.file) {
			_gthis.Load(options.file);
		} else if(dataAttributes.hasOwnProperty("file")) {
			_gthis.Load(dataAttributes["file"]);
		}
	};
	this._visibilityCheckerInterval = 500;
	if(options && options.visibilityCheckInterval) {
		this._visibilityCheckerInterval = options.visibilityCheckInterval;
	}
	if(this.get_IsElementVisible()) {
		initialRender();
	} else {
		alphaTab.util.Logger.Warning("Rendering","AlphaTab container is invisible, checking for element visibility in " + this._visibilityCheckerInterval + "ms intervals",null);
		this._visibilityCheckerIntervalId = window.setInterval(function() {
			if(_gthis.get_IsElementVisible()) {
				alphaTab.util.Logger.Info("Rendering","AlphaTab container became visible, triggering initial rendering",null);
				initialRender();
				window.clearInterval(_gthis._visibilityCheckerIntervalId);
				_gthis._visibilityCheckerIntervalId = 0;
			}
		},this._visibilityCheckerInterval);
	}
};
alphaTab.platform.javaScript.JsApi.__name__ = true;
alphaTab.platform.javaScript.JsApi.IsElementInViewPort = function(el) {
	var rect = el.getBoundingClientRect();
	if(rect.top + rect.height >= 0 && rect.top <= window.innerHeight && rect.left + rect.width >= 0) {
		return rect.left <= window.innerWidth;
	} else {
		return false;
	}
};
alphaTab.platform.javaScript.JsApi.prototype = {
	get_IsElementVisible: function() {
		if(!(!(!this._element.offsetWidth) || !(!this._element.offsetHeight))) {
			return !(!this._element.getClientRects().length);
		} else {
			return true;
		}
	}
	,get_Tracks: function() {
		var tracks = this.TrackIndexesToTracks(this.TrackIndexes);
		if(tracks.length == 0 && this.Score.Tracks.length > 0) {
			tracks.push(this.Score.Tracks[0]);
		}
		return tracks;
	}
	,GetDataAttributes: function() {
		var this1 = {}
		var dataAttributes = this1;
		if(this._element.dataset) {
			var json = this._element.dataset;
			var key = HxOverrides.iter(Object.keys(json));
			while(key.hasNext()) {
				var key1 = key.next();
				var value = this._element.dataset[key1];
				try {
					var stringValue = value;
					value = JSON.parse(stringValue);
				} catch( __e ) {
					if(value == "") {
						value = null;
					}
				}
				dataAttributes[key1] = value;
			}
		} else {
			var i = 0;
			while(i < this._element.attributes.length) {
				var attr = this._element.attributes.item(i);
				var nodeName = attr.nodeName;
				if(StringTools.startsWith(nodeName,"data-")) {
					var a = HxOverrides.substr(nodeName,5,null);
					var this2 = system.Convert.ToUInt16(45);
					var this3 = this2;
					var keyParts = system._CsString.CsString_Impl_.Split_CharArray(a,[this3]);
					var key2 = keyParts[0];
					var j = 1;
					while(j < keyParts.length) {
						key2 = key2 + (HxOverrides.substr(keyParts[j],0,1).toUpperCase() + HxOverrides.substr(keyParts[j],1,null));
						++j;
					}
					var value1 = attr.nodeValue;
					try {
						value1 = JSON.parse(value1);
					} catch( __e1 ) {
						if(value1 == "") {
							value1 = null;
						}
					}
					dataAttributes[key2] = value1;
				}
				++i;
			}
		}
		return dataAttributes;
	}
	,TriggerResize: function() {
		if(this.get_IsElementVisible()) {
			if(this._visibilityCheckerIntervalId != 0) {
				alphaTab.util.Logger.Info("Rendering","AlphaTab container became visible again, doing autosizing",null);
				window.clearInterval(this._visibilityCheckerIntervalId);
				this._visibilityCheckerIntervalId = 0;
			}
			var resizeEventInfo = new alphaTab.platform.javaScript.ResizeEventArgs();
			resizeEventInfo.OldWidth = this.Settings.Width;
			resizeEventInfo.NewWidth = this._element.offsetWidth;
			resizeEventInfo.Settings = this.Settings;
			this.TriggerEvent("resize",resizeEventInfo);
			this.Settings.Width = resizeEventInfo.NewWidth;
			this.Renderer.UpdateSettings(this.Settings);
			this.Renderer.Resize(this._element.offsetWidth);
		} else if(this._visibilityCheckerIntervalId == 0) {
			alphaTab.util.Logger.Warning("Rendering","AlphaTab container was invisible while autosizing, checking for element visibility in " + this._visibilityCheckerInterval + "ms intervals",null);
			this._visibilityCheckerIntervalId = window.setInterval($bind(this,this.TriggerResize),this._visibilityCheckerInterval);
		}
	}
	,ShowSvgsInViewPort: function() {
		var placeholders = this._canvasElement.querySelectorAll("[data-lazy=true]");
		var i = 0;
		while(i < placeholders.length) {
			var placeholder = placeholders.item(i);
			if(alphaTab.platform.javaScript.JsApi.IsElementInViewPort(placeholder)) {
				placeholder.outerHTML = placeholder["svg"];
			}
			++i;
		}
	}
	,Print: function(width) {
		var _gthis = this;
		var preview = window.open("","","width=0,height=0");
		var a4 = preview.document.createElement("div");
		if(!(width == null || width.length == 0)) {
			a4.style.width = width;
		} else {
			a4.style.width = "210mm";
		}
		preview.document.write("<!DOCTYPE html><html></head><body></body></html>");
		preview.document.body.appendChild(a4);
		var dualScreenLeft;
		var o = window["ScreenLeft"];
		if(typeof(o) != "undefined") {
			dualScreenLeft = window["ScreenLeft"];
		} else {
			dualScreenLeft = window.screen.left;
		}
		var dualScreenTop;
		var o1 = window["ScreenTop"];
		if(typeof(o1) != "undefined") {
			dualScreenTop = window["ScreenTop"];
		} else {
			dualScreenTop = window.screen.top;
		}
		var screenWidth;
		var o2 = window.innerWidth;
		if(typeof(o2) != "undefined") {
			screenWidth = window.innerWidth;
		} else {
			var o3 = window.document.documentElement.clientWidth;
			if(typeof(o3) != "undefined") {
				screenWidth = window.document.documentElement.clientWidth;
			} else {
				screenWidth = window.screen.width;
			}
		}
		var screenHeight;
		var o4 = window.innerHeight;
		if(typeof(o4) != "undefined") {
			screenHeight = window.innerHeight;
		} else {
			var o5 = window.document.documentElement.clientHeight;
			if(typeof(o5) != "undefined") {
				screenHeight = window.document.documentElement.clientHeight;
			} else {
				screenHeight = window.screen.height;
			}
		}
		var w = a4.offsetWidth + 50;
		var h = window.innerHeight;
		var left = (screenWidth / 2 | 0) - (w / 2 | 0) + dualScreenLeft;
		var top = (screenHeight / 2 | 0) - (h / 2 | 0) + dualScreenTop;
		preview.resizeTo(w,h);
		preview.moveTo(left,top);
		preview.focus();
		var settings = alphaTab.Settings.get_Defaults();
		settings.ScriptFile = this.Settings.ScriptFile;
		settings.FontDirectory = this.Settings.FontDirectory;
		settings.Scale = 0.8;
		settings.StretchForce = 0.8;
		settings.DisableLazyLoading = true;
		settings.UseWebWorker = false;
		var alphaTab1 = new alphaTab.platform.javaScript.JsApi(a4,settings);
		alphaTab1.Renderer.PostRenderFinished = system._EventAction.EventAction_Impl_.add(alphaTab1.Renderer.PostRenderFinished,function() {
			_gthis._canvasElement.style.height = "100%";
			preview.print();
		});
		alphaTab1.SetTracks(this.get_Tracks(),true);
	}
	,AppendRenderResult: function(result) {
		var _gthis = this;
		if(result != null) {
			this._canvasElement.style.width = Std.string(result.TotalWidth) + "px";
			this._canvasElement.style.height = Std.string(result.TotalHeight) + "px";
		}
		if(result == null || result.RenderResult != null) {
			this._renderResults.push(result);
			window.setTimeout(function() {
				while(_gthis._renderResults.length > 0) {
					var renderResult = _gthis._renderResults[0];
					if(true) {
						_gthis._renderResults.splice(0,1);
					}
					if(renderResult == null) {
						while(_gthis._canvasElement.childElementCount > _gthis._totalResultCount) _gthis._canvasElement.removeChild(_gthis._canvasElement.lastChild);
					} else {
						var body = renderResult.RenderResult;
						if(typeof(body) == "string") {
							var placeholder;
							if(_gthis._totalResultCount < _gthis._canvasElement.childElementCount) {
								placeholder = _gthis._canvasElement.childNodes.item(_gthis._totalResultCount);
							} else {
								placeholder = window.document.createElement("div");
								_gthis._canvasElement.appendChild(placeholder);
							}
							placeholder.style.width = Std.string(renderResult.Width) + "px";
							placeholder.style.height = Std.string(renderResult.Height) + "px";
							placeholder.style.display = "inline-block";
							if(alphaTab.platform.javaScript.JsApi.IsElementInViewPort(placeholder) || _gthis.Settings.DisableLazyLoading) {
								var bodyHtml = body;
								placeholder.outerHTML = bodyHtml;
							} else {
								placeholder["svg"] = body;
								placeholder.setAttribute("data-lazy","true");
							}
						} else if(_gthis._totalResultCount < _gthis._canvasElement.childElementCount) {
							_gthis._canvasElement.replaceChild(renderResult.RenderResult,_gthis._canvasElement.childNodes.item(_gthis._totalResultCount));
						} else {
							_gthis._canvasElement.appendChild(renderResult.RenderResult);
						}
						_gthis._totalResultCount++;
					}
				}
			},1);
		}
	}
	,CreateStyleElement: function(settings) {
		var elementDocument = this._element.ownerDocument;
		var styleElement = elementDocument.getElementById("alphaTabStyle");
		if(styleElement == null) {
			var fontDirectory = settings.FontDirectory;
			styleElement = elementDocument.createElement("style");
			styleElement.id = "alphaTabStyle";
			styleElement.type = "text/css";
			var this1 = "";
			var css = this1;
			css = css + ("@font-face {" + "\r\n");
			css = css + ("    font-family: 'alphaTab';" + "\r\n");
			css = css + ("     src: url('" + fontDirectory + "Bravura.eot');" + "\r\n");
			css = css + ("     src: url('" + fontDirectory + "Bravura.eot?#iefix') format('embedded-opentype')" + "\r\n");
			css = css + ("          , url('" + fontDirectory + "Bravura.woff') format('woff')" + "\r\n");
			css = css + ("          , url('" + fontDirectory + "Bravura.otf') format('opentype')" + "\r\n");
			css = css + ("          , url('" + fontDirectory + "Bravura.svg#Bravura') format('svg');" + "\r\n");
			css = css + ("     font-weight: normal;" + "\r\n");
			css = css + ("     font-style: normal;" + "\r\n");
			css = css + ("}" + "\r\n");
			css = css + (".alphaTabSurface * {" + "\r\n");
			css = css + ("    cursor: default;" + "\r\n");
			css = css + ("}" + "\r\n");
			css = css + (".at {" + "\r\n");
			css = css + ("     font-family: 'alphaTab';" + "\r\n");
			css = css + ("     speak: none;" + "\r\n");
			css = css + ("     font-style: normal;" + "\r\n");
			css = css + ("     font-weight: normal;" + "\r\n");
			css = css + ("     font-variant: normal;" + "\r\n");
			css = css + ("     text-transform: none;" + "\r\n");
			css = css + ("     line-height: 1;" + "\r\n");
			css = css + ("     line-height: 1;" + "\r\n");
			css = css + ("     -webkit-font-smoothing: antialiased;" + "\r\n");
			css = css + ("     -moz-osx-font-smoothing: grayscale;" + "\r\n");
			css = css + ("     font-size: 34px;" + "\r\n");
			css = css + ("     overflow: visible !important;" + "\r\n");
			css = css + ("}" + "\r\n");
			styleElement.innerHTML = css;
			elementDocument.getElementsByTagName("head").item(0).appendChild(styleElement);
		}
	}
	,Destroy: function() {
		this._element.innerHTML = "";
		this.Renderer.Destroy();
	}
	,Load: function(data) {
		var _gthis = this;
		this._element.classList.add("loading");
		try {
			if((data instanceof ArrayBuffer)) {
				this.ScoreLoaded(alphaTab.importer.ScoreLoader.LoadScoreFromBytes(new Uint8Array(data)),true);
			} else if((data instanceof Uint8Array)) {
				this.ScoreLoaded(alphaTab.importer.ScoreLoader.LoadScoreFromBytes(data),true);
			} else if(typeof(data) == "string") {
				alphaTab.importer.ScoreLoader.LoadScoreAsync(data,function(s) {
					_gthis.ScoreLoaded(s,true);
				},function(e) {
					_gthis.Error("import",e);
				});
			}
		} catch( e1 ) {
			if (e1 instanceof js._Boot.HaxeError) e1 = e1.val;
			if( js.Boot.__instanceof(e1,system.Exception) ) {
				this.Error("import",e1);
			} else throw(e1);
		}
	}
	,Tex: function(contents) {
		this._element.classList.add("loading");
		try {
			var parser = new alphaTab.importer.AlphaTexImporter();
			var data = alphaTab.io.ByteBuffer.FromBuffer(alphaTab.platform.Platform.StringToByteArray(contents));
			parser.Init(data);
			this.ScoreLoaded(parser.ReadScore(),true);
		} catch( e ) {
			if (e instanceof js._Boot.HaxeError) e = e.val;
			if( js.Boot.__instanceof(e,system.Exception) ) {
				this.Error("import",e);
			} else throw(e);
		}
	}
	,SetTracks: function(tracksData,render) {
		if(render == null) {
			render = true;
		}
		var tmp;
		if(tracksData.length) {
			var o = tracksData[0].Index;
			tmp = typeof(o) == "number";
		} else {
			tmp = false;
		}
		if(tmp) {
			this.Score = tracksData[0].Score;
		} else {
			var o1 = tracksData.Index;
			if(typeof(o1) == "number") {
				this.Score = tracksData.Score;
			}
		}
		this.TrackIndexes = this.ParseTracks(tracksData);
		if(render) {
			this.Render();
		}
	}
	,TrackIndexesToTracks: function(trackIndexes) {
		var this1 = [];
		var tracks = this1;
		var track = new system.Int32ArrayIterator(trackIndexes);
		while(track.hasNext()) {
			var track1 = track.next();
			if(track1 >= 0 && track1 < this.Score.Tracks.length) {
				tracks.push(this.Score.Tracks[track1]);
			}
		}
		return tracks;
	}
	,ParseTracks: function(tracksData) {
		var this1 = [];
		var tracks = this1;
		if(typeof(tracksData) == "string") {
			try {
				tracksData = JSON.parse(tracksData.As());
			} catch( __e ) {
				tracksData = [0];
			}
		}
		if(typeof(tracksData) == "number") {
			tracks.push(tracksData);
		} else if(tracksData.length) {
			var i = 0;
			while(i < tracksData.length) {
				var value;
				if(typeof(tracksData[i]) == "number") {
					value = tracksData[i];
				} else {
					var o = tracksData[i].Index;
					if(typeof(o) == "number") {
						var track = tracksData[i];
						value = track.Index;
					} else {
						value = alphaTab.platform.Platform.ParseInt(tracksData[i].ToString());
					}
				}
				if(value >= 0) {
					tracks.push(value);
				}
				++i;
			}
		} else {
			var o1 = tracksData.Index;
			if(typeof(o1) == "number") {
				tracks.push(tracksData.Index.As());
			}
		}
		return new Int32Array(tracks);
	}
	,ScoreLoaded: function(score,render) {
		if(render == null) {
			render = true;
		}
		alphaTab.model.ModelUtils.ApplyPitchOffsets(this.Settings,score);
		this.Score = score;
		this.TriggerEvent("loaded",score);
		if(render) {
			this.Render();
		}
	}
	,Error: function(type,details) {
		alphaTab.util.Logger.Error(type,"An unexpected error occurred",details);
		this.TriggerEvent("error",{ type : type, details : details});
	}
	,TriggerEvent: function(name,details) {
		if(this._element != null) {
			name = "alphaTab." + name;
			var e = window.document.createEvent("CustomEvent");
			e.initCustomEvent(name,false,false,details);
			this._element.dispatchEvent(e);
			var json = window;
			if((json && "jQuery" in json)) {
				var jquery = window["jQuery"];
				jquery(this._element).trigger(name,details);
			}
		}
	}
	,Render: function() {
		var _gthis = this;
		if(this.Renderer == null) {
			return;
		}
		var renderAction = null;
		renderAction = function() {
			if(!alphaTab.Environment.IsFontLoaded) {
				window.setTimeout(function() {
					renderAction();
				},1000);
			} else {
				_gthis.Renderer.Render(_gthis.Score,_gthis.TrackIndexes);
			}
		};
		renderAction();
	}
	,UpdateLayout: function(json) {
		this.Settings.Layout = alphaTab.Settings.LayoutFromJson(json);
		this.Renderer.UpdateSettings(this.Settings);
		this.Renderer.Invalidate();
	}
	,__class__: alphaTab.platform.javaScript.JsApi
};
alphaTab.platform.javaScript.ResizeEventArgs = $hx_exports["alphaTab"]["platform"]["javaScript"]["ResizeEventArgs"] = function() {
};
alphaTab.platform.javaScript.ResizeEventArgs.__name__ = true;
alphaTab.platform.javaScript.ResizeEventArgs.prototype = {
	__class__: alphaTab.platform.javaScript.ResizeEventArgs
};
alphaTab.rendering.IScoreRenderer = $hx_exports["alphaTab"]["rendering"]["IScoreRenderer"] = function() { };
alphaTab.rendering.IScoreRenderer.__name__ = true;
alphaTab.rendering.IScoreRenderer.prototype = {
	__class__: alphaTab.rendering.IScoreRenderer
};
alphaTab.platform.javaScript.WorkerScoreRenderer = $hx_exports["alphaTab"]["platform"]["javaScript"]["WorkerScoreRenderer"] = function(api,settings) {
	this._api = null;
	this._worker = null;
	this._api = api;
	try {
		this._worker = new Worker(settings.ScriptFile);
	} catch( __e ) {
		try {
			var script = "importScripts('" + settings.ScriptFile + "')";
			var blob = new Blob([script]);
			this._worker = new Worker(URL.createObjectURL(blob));
		} catch( e ) {
			if (e instanceof js._Boot.HaxeError) e = e.val;
			if( js.Boot.__instanceof(e,system.Exception) ) {
				alphaTab.util.Logger.Error("Rendering","Failed to create WebWorker: " + Std.string(e),null);
			} else throw(e);
		}
	}
	this._worker.postMessage({ cmd : "alphaTab.initialize", settings : settings.ToJson()});
	this._worker.addEventListener("message",$bind(this,this.HandleWorkerMessage));
};
alphaTab.platform.javaScript.WorkerScoreRenderer.__name__ = true;
alphaTab.platform.javaScript.WorkerScoreRenderer.__interfaces__ = [alphaTab.rendering.IScoreRenderer];
alphaTab.platform.javaScript.WorkerScoreRenderer.prototype = {
	get_BoundsLookup: function() {
		return this.__BoundsLookup;
	}
	,set_BoundsLookup: function(value) {
		return this.__BoundsLookup = value;
	}
	,Destroy: function() {
		this._worker.terminate();
	}
	,UpdateSettings: function(settings) {
		this._worker.postMessage({ cmd : "alphaTab.updateSettings", settings : settings.ToJson()});
	}
	,Invalidate: function() {
		this._worker.postMessage({ cmd : "alphaTab.invalidate"});
	}
	,Resize: function(width) {
		this._worker.postMessage({ cmd : "alphaTab.resize", width : width});
	}
	,HandleWorkerMessage: function(e) {
		var data = (js.Boot.__cast(e , MessageEvent)).data;
		var cmd = data.cmd;
		switch(cmd) {
		case "alphaTab.error":
			this.OnError(data.type,data.detail);
			break;
		case "alphaTab.partialRenderFinished":
			this.OnPartialRenderFinished(data.result);
			break;
		case "alphaTab.postRenderFinished":
			this.set_BoundsLookup(alphaTab.rendering.utils.BoundsLookup.FromJson(data.boundsLookup,this._api.Score));
			this.OnPostRenderFinished();
			break;
		case "alphaTab.preRender":
			this.OnPreRender(data.result);
			break;
		case "alphaTab.renderFinished":
			this.OnRenderFinished(data.result);
			break;
		default:
		}
	}
	,Render: function(score,trackIndexes) {
		var converter = new alphaTab.model.JsonConverter();
		score = converter.ScoreToJsObject(score);
		this._worker.postMessage({ cmd : "alphaTab.render", score : score, trackIndexes : trackIndexes});
	}
	,add_PreRender: function(value) {
		return this.PreRender = system._EventAction1.EventAction1_Impl_.add(this.PreRender,value);
	}
	,remove_PreRender: function(value) {
		return this.PreRender = system._EventAction1.EventAction1_Impl_.sub(this.PreRender,value);
	}
	,OnPreRender: function(obj) {
		var _e = this.PreRender;
		var handler = function(p) {
			system._EventAction1.EventAction1_Impl_.Invoke(_e,p);
		};
		if(handler != null) {
			handler(obj);
		}
	}
	,add_PartialRenderFinished: function(value) {
		return this.PartialRenderFinished = system._EventAction1.EventAction1_Impl_.add(this.PartialRenderFinished,value);
	}
	,remove_PartialRenderFinished: function(value) {
		return this.PartialRenderFinished = system._EventAction1.EventAction1_Impl_.sub(this.PartialRenderFinished,value);
	}
	,OnPartialRenderFinished: function(obj) {
		var _e = this.PartialRenderFinished;
		var handler = function(p) {
			system._EventAction1.EventAction1_Impl_.Invoke(_e,p);
		};
		if(handler != null) {
			handler(obj);
		}
	}
	,add_RenderFinished: function(value) {
		return this.RenderFinished = system._EventAction1.EventAction1_Impl_.add(this.RenderFinished,value);
	}
	,remove_RenderFinished: function(value) {
		return this.RenderFinished = system._EventAction1.EventAction1_Impl_.sub(this.RenderFinished,value);
	}
	,OnRenderFinished: function(obj) {
		var _e = this.RenderFinished;
		var handler = function(p) {
			system._EventAction1.EventAction1_Impl_.Invoke(_e,p);
		};
		if(handler != null) {
			handler(obj);
		}
	}
	,add_Error: function(value) {
		return this.Error = system._EventAction2.EventAction2_Impl_.add(this.Error,value);
	}
	,remove_Error: function(value) {
		return this.Error = system._EventAction2.EventAction2_Impl_.sub(this.Error,value);
	}
	,OnError: function(type,details) {
		var _e = this.Error;
		var handler = function(p1,p2) {
			system._EventAction2.EventAction2_Impl_.Invoke(_e,p1,p2);
		};
		if(handler != null) {
			handler(type,details);
		}
	}
	,add_PostRenderFinished: function(value) {
		return this.PostRenderFinished = system._EventAction.EventAction_Impl_.add(this.PostRenderFinished,value);
	}
	,remove_PostRenderFinished: function(value) {
		return this.PostRenderFinished = system._EventAction.EventAction_Impl_.sub(this.PostRenderFinished,value);
	}
	,OnPostRenderFinished: function() {
		var _e = this.PostRenderFinished;
		var handler = function() {
			system._EventAction.EventAction_Impl_.Invoke(_e);
		};
		if(handler != null) {
			handler();
		}
	}
	,__class__: alphaTab.platform.javaScript.WorkerScoreRenderer
};
alphaTab.platform.model._FontStyle = {};
alphaTab.platform.model._FontStyle.FontStyle_Impl_ = $hx_exports["alphaTab"]["platform"]["model"]["_FontStyle"]["FontStyle_Impl_"] = {};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.__name__ = true;
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.platform.model._FontStyle.FontStyle_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Plain";
	case 1:
		return "Bold";
	case 2:
		return "Italic";
	}
	return "";
};
alphaTab.platform.model._TextAlign = {};
alphaTab.platform.model._TextAlign.TextAlign_Impl_ = $hx_exports["alphaTab"]["platform"]["model"]["_TextAlign"]["TextAlign_Impl_"] = {};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.__name__ = true;
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.platform.model._TextAlign.TextAlign_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Left";
	case 1:
		return "Center";
	case 2:
		return "Right";
	}
	return "";
};
alphaTab.platform.model._TextBaseline = {};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_ = $hx_exports["alphaTab"]["platform"]["model"]["_TextBaseline"]["TextBaseline_Impl_"] = {};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.__name__ = true;
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Top";
	case 1:
		return "Middle";
	case 2:
		return "Bottom";
	}
	return "";
};
alphaTab.platform.svg.FontSizes = $hx_exports["alphaTab"]["platform"]["svg"]["FontSizes"] = function() {
};
alphaTab.platform.svg.FontSizes.__name__ = true;
alphaTab.platform.svg.FontSizes.MeasureString = function(s,f,size,style) {
	var data;
	var dataSize;
	var factor = 1;
	if((style & 2) != 0) {
		factor = factor * 1.2;
	}
	if((style & 1) != 0) {
		factor = factor * 1.2;
	}
	if(f == 0) {
		data = alphaTab.platform.svg.FontSizes.TimesNewRoman;
		dataSize = 11;
	} else if(f == 1) {
		data = alphaTab.platform.svg.FontSizes.Arial11Pt;
		dataSize = 11;
	} else {
		data = new Uint8Array([8]);
		dataSize = 11;
	}
	var stringSize = 0;
	var i = 0;
	while(i < s.length) {
		var a = data.length - 1;
		var this1 = system.Convert.ToUInt16(HxOverrides.cca(s,i));
		var code = Math.min(a,this1 - 32);
		if(code >= 0) {
			stringSize = stringSize + data[code] * size / dataSize;
		}
		++i;
	}
	return stringSize * factor;
};
alphaTab.platform.svg.FontSizes.prototype = {
	__class__: alphaTab.platform.svg.FontSizes
};
alphaTab.platform.svg._SupportedFonts = {};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_ = $hx_exports["alphaTab"]["platform"]["svg"]["_SupportedFonts"]["SupportedFonts_Impl_"] = {};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.__name__ = true;
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "TimesNewRoman";
	case 1:
		return "Arial";
	}
	return "";
};
alphaTab.rendering.BarRendererBase = $hx_exports["alphaTab"]["rendering"]["BarRendererBase"] = function(renderer,bar) {
	this._preBeatGlyphs = null;
	this._voiceContainers = null;
	this._postBeatGlyphs = null;
	this.Staff = null;
	this.X = 0.0;
	this.Y = 0.0;
	this.Width = 0.0;
	this.Height = 0.0;
	this.Index = 0;
	this.TopOverflow = 0.0;
	this.BottomOverflow = 0.0;
	this.Helpers = null;
	this.Bar = null;
	this.IsLinkedToPrevious = false;
	this.ScoreRenderer = null;
	this._wasFirstOfLine = false;
	this.LayoutingInfo = null;
	this._appliedLayoutingInfo = 0;
	this.IsFinalized = false;
	this.TopPadding = 0.0;
	this.BottomPadding = 0.0;
	this.Bar = bar;
	this.ScoreRenderer = renderer;
	this.Helpers = new alphaTab.rendering.utils.BarHelpers(bar);
};
alphaTab.rendering.BarRendererBase.__name__ = true;
alphaTab.rendering.BarRendererBase.prototype = {
	get_NextRenderer: function() {
		if(this.Bar.NextBar == null) {
			return null;
		}
		return this.ScoreRenderer.Layout.GetRendererForBar(this.Staff.get_StaveId(),this.Bar.NextBar);
	}
	,get_PreviousRenderer: function() {
		if(this.Bar.PreviousBar == null) {
			return null;
		}
		return this.ScoreRenderer.Layout.GetRendererForBar(this.Staff.get_StaveId(),this.Bar.PreviousBar);
	}
	,RegisterOverflowTop: function(topOverflow) {
		if(topOverflow > this.TopOverflow) {
			this.TopOverflow = topOverflow;
		}
	}
	,RegisterOverflowBottom: function(bottomOverflow) {
		if(bottomOverflow > this.BottomOverflow) {
			this.BottomOverflow = bottomOverflow;
		}
	}
	,ScaleToWidth: function(width) {
		var containerWidth = width - this._preBeatGlyphs.Width - this._postBeatGlyphs.Width;
		var this1 = this._voiceContainers;
		var voice = $iterator(Object.keys(this1))();
		while(voice.hasNext()) {
			var voice1 = voice.next();
			var c = this._voiceContainers[voice1];
			c.ScaleToWidth(containerWidth);
		}
		this._postBeatGlyphs.X = this._preBeatGlyphs.X + this._preBeatGlyphs.Width + containerWidth;
		this.Width = width;
	}
	,get_Resources: function() {
		return this.ScoreRenderer.RenderingResources;
	}
	,get_Settings: function() {
		return this.ScoreRenderer.Settings;
	}
	,get_Scale: function() {
		return this.get_Settings().Scale;
	}
	,get_IsFirstOfLine: function() {
		return this.Index == 0;
	}
	,get_IsLast: function() {
		if(this.Staff.StaveGroup.IsLast) {
			return this.Index == this.Staff.BarRenderers.length - 1;
		} else {
			return false;
		}
	}
	,RegisterLayoutingInfo: function() {
		var info = this.LayoutingInfo;
		var preSize = this._preBeatGlyphs.Width;
		if(info.PreBeatSize < preSize) {
			info.PreBeatSize = preSize;
		}
		var this1 = this._voiceContainers;
		var voice = $iterator(Object.keys(this1))();
		while(voice.hasNext()) {
			var voice1 = voice.next();
			var c = this._voiceContainers[voice1];
			c.RegisterLayoutingInfo(info);
		}
		var postSize = this._postBeatGlyphs.Width;
		if(info.PostBeatSize < postSize) {
			info.PostBeatSize = postSize;
		}
	}
	,ApplyLayoutingInfo: function() {
		if(this._appliedLayoutingInfo >= this.LayoutingInfo.Version) {
			return false;
		}
		this._appliedLayoutingInfo = this.LayoutingInfo.Version;
		this._preBeatGlyphs.Width = this.LayoutingInfo.PreBeatSize;
		var voiceEnd = this._preBeatGlyphs.X + this._preBeatGlyphs.Width;
		var this1 = this._voiceContainers;
		var voice = $iterator(Object.keys(this1))();
		while(voice.hasNext()) {
			var voice1 = voice.next();
			var c = this._voiceContainers[voice1];
			c.X = this._preBeatGlyphs.X + this._preBeatGlyphs.Width;
			c.ApplyLayoutingInfo(this.LayoutingInfo);
			var newEnd = c.X + c.Width;
			if(voiceEnd < newEnd) {
				voiceEnd = newEnd;
			}
		}
		this._postBeatGlyphs.X = voiceEnd;
		this._postBeatGlyphs.Width = this.LayoutingInfo.PostBeatSize;
		this.Width = this._postBeatGlyphs.X + this._postBeatGlyphs.Width;
		return true;
	}
	,FinalizeRenderer: function() {
		this.IsFinalized = true;
	}
	,DoLayout: function() {
		this._preBeatGlyphs = new alphaTab.rendering.glyphs.LeftToRightLayoutingGlyphGroup();
		this._preBeatGlyphs.Renderer = this;
		var this1 = {}
		this._voiceContainers = this1;
		this._postBeatGlyphs = new alphaTab.rendering.glyphs.LeftToRightLayoutingGlyphGroup();
		this._postBeatGlyphs.Renderer = this;
		var i = 0;
		while(i < this.Bar.Voices.length) {
			var voice = this.Bar.Voices[i];
			if(this.HasVoiceContainer(voice)) {
				var c = new alphaTab.rendering.glyphs.VoiceContainerGlyph(0,0,voice);
				c.Renderer = this;
				this._voiceContainers[this.Bar.Voices[i].Index] = c;
			}
			++i;
		}
		this.CreatePreBeatGlyphs();
		this.CreateBeatGlyphs();
		this.CreatePostBeatGlyphs();
		this.UpdateSizes();
	}
	,HasVoiceContainer: function(voice) {
		if(!(!voice.IsEmpty)) {
			return voice.Index == 0;
		} else {
			return true;
		}
	}
	,UpdateSizes: function() {
		this.Staff.RegisterStaffTop(this.TopPadding);
		this.Staff.RegisterStaffBottom(this.Height - this.BottomPadding);
		var voiceContainers = this._voiceContainers;
		var beatGlyphsStart = this.get_BeatGlyphsStart();
		var postBeatStart = beatGlyphsStart;
		var voice = $iterator(Object.keys(voiceContainers))();
		while(voice.hasNext()) {
			var voice1 = voice.next();
			var c = voiceContainers[voice1];
			c.X = beatGlyphsStart;
			c.DoLayout();
			var x = c.X + c.Width;
			if(postBeatStart < x) {
				postBeatStart = x;
			}
		}
		this._postBeatGlyphs.X = postBeatStart;
		this.Width = this._postBeatGlyphs.X + this._postBeatGlyphs.Width;
	}
	,AddPreBeatGlyph: function(g) {
		this._preBeatGlyphs.AddGlyph(g);
	}
	,AddBeatGlyph: function(g) {
		g.Renderer = this;
		g.PreNotes.Renderer = this;
		g.OnNotes.Renderer = this;
		g.OnNotes.BeamingHelper = this.Helpers.BeamHelperLookup[g.Beat.Voice.Index][g.Beat.Index];
		this.GetOrCreateVoiceContainer(g.Beat.Voice).AddGlyph(g);
	}
	,GetOrCreateVoiceContainer: function(voice) {
		return this._voiceContainers[voice.Index];
	}
	,GetBeatContainer: function(beat) {
		return this.GetOrCreateVoiceContainer(beat.Voice).BeatGlyphs[beat.Index];
	}
	,GetPreNotesGlyphForBeat: function(beat) {
		return this.GetBeatContainer(beat).PreNotes;
	}
	,GetOnNotesGlyphForBeat: function(beat) {
		return this.GetBeatContainer(beat).OnNotes;
	}
	,Paint: function(cx,cy,canvas) {
		this.PaintBackground(cx,cy,canvas);
		canvas.set_Color(this.get_Resources().MainGlyphColor);
		this._preBeatGlyphs.Paint(cx + this.X,cy + this.Y,canvas);
		var this1 = this._voiceContainers;
		var voice = $iterator(Object.keys(this1))();
		while(voice.hasNext()) {
			var voice1 = voice.next();
			var c = this._voiceContainers[voice1];
			canvas.set_Color(c.Voice.Index == 0 ? this.get_Resources().MainGlyphColor : this.get_Resources().SecondaryGlyphColor);
			c.Paint(cx + this.X,cy + this.Y,canvas);
		}
		canvas.set_Color(this.get_Resources().MainGlyphColor);
		this._postBeatGlyphs.Paint(cx + this.X,cy + this.Y,canvas);
	}
	,PaintBackground: function(cx,cy,canvas) {
	}
	,BuildBoundingsLookup: function(masterBarBounds,cx,cy) {
		var _gthis = this;
		var barBounds = new alphaTab.rendering.utils.BarBounds();
		barBounds.Bar = this.Bar;
		var _tmp = new alphaTab.rendering.utils.Bounds();
		_tmp.X = cx + _gthis.X;
		_tmp.Y = cy + _gthis.Y + _gthis.TopPadding;
		_tmp.W = _gthis.Width;
		_tmp.H = _gthis.Height - _gthis.TopPadding - _gthis.BottomPadding;
		barBounds.VisualBounds = _tmp;
		var _tmp1 = new alphaTab.rendering.utils.Bounds();
		_tmp1.X = cx + _gthis.X;
		_tmp1.Y = cy + _gthis.Y;
		_tmp1.W = _gthis.Width;
		_tmp1.H = _gthis.Height;
		barBounds.RealBounds = _tmp1;
		masterBarBounds.AddBar(barBounds);
		var this1 = this._voiceContainers;
		var voice = $iterator(Object.keys(this1))();
		while(voice.hasNext()) {
			var voice1 = voice.next();
			var c = this._voiceContainers[voice1];
			if(!c.Voice.IsEmpty || this.Bar.get_IsEmpty() && voice1 == 0) {
				var i = 0;
				var j = c.BeatGlyphs.length;
				while(i < j) {
					var bc = c.BeatGlyphs[i];
					var beatBoundings = new alphaTab.rendering.utils.BeatBounds();
					beatBoundings.Beat = bc.Beat;
					var _tmp2 = new alphaTab.rendering.utils.Bounds();
					_tmp2.X = cx + _gthis.X + c.X + bc.X + bc.OnNotes.X;
					_tmp2.Y = barBounds.VisualBounds.Y;
					_tmp2.W = bc.OnNotes.Width;
					_tmp2.H = barBounds.VisualBounds.H;
					beatBoundings.VisualBounds = _tmp2;
					var _tmp3 = new alphaTab.rendering.utils.Bounds();
					_tmp3.X = cx + _gthis.X + c.X + bc.X;
					_tmp3.Y = barBounds.RealBounds.Y;
					_tmp3.W = bc.Width;
					_tmp3.H = barBounds.RealBounds.H;
					beatBoundings.RealBounds = _tmp3;
					barBounds.AddBeat(beatBoundings);
					++i;
				}
			}
		}
	}
	,AddPostBeatGlyph: function(g) {
		this._postBeatGlyphs.AddGlyph(g);
	}
	,CreatePreBeatGlyphs: function() {
		this._wasFirstOfLine = this.get_IsFirstOfLine();
	}
	,CreateBeatGlyphs: function() {
	}
	,CreatePostBeatGlyphs: function() {
		this.AddPostBeatGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,5 * this.get_Scale()));
	}
	,get_BeatGlyphsStart: function() {
		return this._preBeatGlyphs.X + this._preBeatGlyphs.Width;
	}
	,GetNoteX: function(note,onEnd) {
		if(onEnd == null) {
			onEnd = true;
		}
		return 0;
	}
	,GetBeatX: function(beat,requestedPosition) {
		if(requestedPosition == null) {
			requestedPosition = 0;
		}
		var container = this.GetBeatContainer(beat);
		if(container != null) {
			switch(requestedPosition) {
			case 0:
				return container.VoiceContainer.X + container.X + container.PreNotes.X;
			case 1:
				return container.VoiceContainer.X + container.X + container.OnNotes.X;
			case 2:
				return container.VoiceContainer.X + container.X + container.OnNotes.X + container.OnNotes.Width;
			case 3:
				return container.VoiceContainer.X + container.X + container.Width;
			default:
			}
		}
		return 0;
	}
	,GetNoteY: function(note) {
		return 0;
	}
	,ReLayout: function() {
		if(this._wasFirstOfLine && !this.get_IsFirstOfLine() || !this._wasFirstOfLine && this.get_IsFirstOfLine()) {
			this._preBeatGlyphs = new alphaTab.rendering.glyphs.LeftToRightLayoutingGlyphGroup();
			this._preBeatGlyphs.Renderer = this;
			this.CreatePreBeatGlyphs();
		}
		this.UpdateSizes();
		this.RegisterLayoutingInfo();
	}
	,__class__: alphaTab.rendering.BarRendererBase
};
alphaTab.rendering._BeatXPosition = {};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_ = $hx_exports["alphaTab"]["rendering"]["_BeatXPosition"]["BeatXPosition_Impl_"] = {};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.__name__ = true;
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "PreNotes";
	case 1:
		return "OnNotes";
	case 2:
		return "PostNotes";
	case 3:
		return "EndBeat";
	}
	return "";
};
alphaTab.rendering.glyphs = {};
alphaTab.rendering.glyphs.Glyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["Glyph"] = function(x,y) {
	this.X = 0.0;
	this.Y = 0.0;
	this.Width = 0.0;
	this.Renderer = null;
	this.X = x;
	this.Y = y;
};
alphaTab.rendering.glyphs.Glyph.__name__ = true;
alphaTab.rendering.glyphs.Glyph.prototype = {
	get_Scale: function() {
		return this.Renderer.get_Scale();
	}
	,DoLayout: function() {
	}
	,Paint: function(cx,cy,canvas) {
	}
	,__class__: alphaTab.rendering.glyphs.Glyph
};
alphaTab.rendering.EffectBand = $hx_exports["alphaTab"]["rendering"]["EffectBand"] = function(info) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this._uniqueEffectGlyphs = null;
	this._effectGlyphs = null;
	this.IsEmpty = false;
	this.PreviousBand = null;
	this.IsLinkedToPrevious = false;
	this.FirstBeat = null;
	this.LastBeat = null;
	this.Height = 0.0;
	this.Info = null;
	this.Info = info;
	var this1 = [];
	this._uniqueEffectGlyphs = this1;
	var this2 = [];
	this._effectGlyphs = this2;
	this.IsEmpty = true;
};
alphaTab.rendering.EffectBand.__name__ = true;
alphaTab.rendering.EffectBand.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.EffectBand.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.Glyph.prototype.DoLayout.call(this);
		var i = 0;
		while(i < this.Renderer.Bar.Voices.length) {
			var this1 = this._effectGlyphs;
			var this2 = {}
			this1.push(this2);
			var this3 = this._uniqueEffectGlyphs;
			var this4 = [];
			this3.push(this4);
			++i;
		}
	}
	,CreateGlyph: function(beat) {
		if(this.Info.ShouldCreateGlyph(beat) && (!this.Info.get_HideOnMultiTrack() || this.Renderer.Staff.TrackIndex == 0)) {
			this.IsEmpty = false;
			if(this.FirstBeat == null || this.FirstBeat.Index > beat.Index) {
				this.FirstBeat = beat;
			}
			if(this.LastBeat == null || this.LastBeat.Index < beat.Index) {
				this.LastBeat = beat;
			}
			var glyph = this.CreateOrResizeGlyph(this.Info.get_SizingMode(),beat);
			if(glyph.Height > this.Height) {
				this.Height = glyph.Height;
			}
		}
	}
	,CreateOrResizeGlyph: function(sizing,b) {
		var g;
		switch(sizing) {
		case 0:case 1:
			g = this.Info.CreateNewGlyph(this.Renderer,b);
			g.Renderer = this.Renderer;
			g.Beat = b;
			g.DoLayout();
			this._effectGlyphs[b.Voice.Index][b.Index] = g;
			this._uniqueEffectGlyphs[b.Voice.Index].push(g);
			return g;
		case 3:
			if(b.Index > 0 || this.Renderer.Index > 0) {
				var prevBeat = b.PreviousBeat;
				if(this.Info.ShouldCreateGlyph(prevBeat)) {
					var prevEffect = null;
					if(b.Index > 0 && this._effectGlyphs[b.Voice.Index].hasOwnProperty(prevBeat.Index)) {
						prevEffect = this._effectGlyphs[b.Voice.Index][prevBeat.Index];
					} else if(this.Renderer.Index > 0) {
						var previousRenderer = js.Boot.__cast(this.Renderer.get_PreviousRenderer() , alphaTab.rendering.EffectBarRenderer);
						var previousBand = previousRenderer.BandLookup[this.Info.get_EffectId()];
						var voiceGlyphs = previousBand._effectGlyphs[b.Voice.Index];
						if(voiceGlyphs.hasOwnProperty(prevBeat.Index)) {
							prevEffect = voiceGlyphs[prevBeat.Index];
						}
					}
					var newGlyph = this.CreateOrResizeGlyph(1,b);
					if(prevEffect != null && this.Info.CanExpand(prevBeat,b)) {
						prevEffect.NextGlyph = newGlyph;
						newGlyph.PreviousGlyph = prevEffect;
						this.IsLinkedToPrevious = true;
					}
					return newGlyph;
				}
				return this.CreateOrResizeGlyph(1,b);
			}
			return this.CreateOrResizeGlyph(1,b);
		case 4:
			g = this.Info.CreateNewGlyph(this.Renderer,b);
			g.Renderer = this.Renderer;
			g.Beat = b;
			g.DoLayout();
			this._effectGlyphs[b.Voice.Index][b.Index] = g;
			this._uniqueEffectGlyphs[b.Voice.Index].push(g);
			return g;
		default:
		}
		return null;
	}
	,Paint: function(cx,cy,canvas) {
		alphaTab.rendering.glyphs.Glyph.prototype.Paint.call(this,cx,cy,canvas);
		var i = 0;
		var j = this._uniqueEffectGlyphs.length;
		while(i < j) {
			var v = this._uniqueEffectGlyphs[i];
			var k = 0;
			var l = v.length;
			while(k < l) {
				var g = v[k];
				g.Paint(cx + this.X,cy + this.Y,canvas);
				++k;
			}
			++i;
		}
	}
	,AlignGlyphs: function() {
		var v = 0;
		while(v < this._effectGlyphs.length) {
			var this1 = this._effectGlyphs[v];
			var key = $iterator(Object.keys(this1))();
			while(key.hasNext()) {
				var key1 = key.next();
				this.AlignGlyph(this.Info.get_SizingMode(),this.Renderer.Bar.Voices[v].Beats[key1]);
			}
			++v;
		}
	}
	,AlignGlyph: function(sizing,beat) {
		var g = this._effectGlyphs[beat.Voice.Index][beat.Index];
		var pos;
		var container = this.Renderer.GetBeatContainer(beat);
		switch(sizing) {
		case 0:
			pos = container.PreNotes;
			g.X = this.Renderer.get_BeatGlyphsStart() + pos.X + container.X;
			g.Width = pos.Width;
			break;
		case 1:case 3:
			pos = container.OnNotes;
			g.X = this.Renderer.get_BeatGlyphsStart() + pos.X + container.X;
			g.Width = pos.Width;
			break;
		case 4:
			g.Width = this.Renderer.Width;
			break;
		default:
		}
	}
	,__class__: alphaTab.rendering.EffectBand
});
alphaTab.rendering.EffectBandSizingInfo = $hx_exports["alphaTab"]["rendering"]["EffectBandSizingInfo"] = function() {
	this._effectSlot = null;
	this.Slots = null;
	var this1 = [];
	this.Slots = this1;
	var this2 = {}
	this._effectSlot = this2;
};
alphaTab.rendering.EffectBandSizingInfo.__name__ = true;
alphaTab.rendering.EffectBandSizingInfo.prototype = {
	GetOrCreateSlot: function(band) {
		var this1 = this._effectSlot;
		var key = band.Info.get_EffectId();
		if(this1.hasOwnProperty(key)) {
			var slot = this._effectSlot[band.Info.get_EffectId()];
			if(slot.CanBeUsed(band)) {
				return slot;
			}
		}
		var slot1 = $iterator(this.Slots)();
		while(slot1.hasNext()) {
			var slot2 = slot1.next();
			if(slot2.CanBeUsed(band)) {
				return slot2;
			}
		}
		var newSlot = new alphaTab.rendering.EffectBandSlot();
		this.Slots.push(newSlot);
		return newSlot;
	}
	,CopySlots: function(sizingInfo) {
		var slot = $iterator(sizingInfo.Slots)();
		while(slot.hasNext()) {
			var slot1 = slot.next();
			var copy = new alphaTab.rendering.EffectBandSlot();
			copy.Y = slot1.Y;
			copy.Height = slot1.Height;
			copy.UniqueEffectId = slot1.UniqueEffectId;
			this.Slots.push(copy);
			var band = $iterator(slot1.Bands)();
			while(band.hasNext()) {
				var band1 = band.next();
				this._effectSlot[band1.Info.get_EffectId()] = copy;
			}
		}
	}
	,Register: function(effectBand) {
		var freeSlot = this.GetOrCreateSlot(effectBand);
		freeSlot.Update(effectBand);
		this._effectSlot[effectBand.Info.get_EffectId()] = freeSlot;
	}
	,__class__: alphaTab.rendering.EffectBandSizingInfo
};
alphaTab.rendering.EffectBandSlot = $hx_exports["alphaTab"]["rendering"]["EffectBandSlot"] = function() {
	this.Y = 0.0;
	this.Height = 0.0;
	this.FirstBeat = null;
	this.LastBeat = null;
	this.Bands = null;
	this.UniqueEffectId = null;
	var this1 = [];
	this.Bands = this1;
};
alphaTab.rendering.EffectBandSlot.__name__ = true;
alphaTab.rendering.EffectBandSlot.prototype = {
	Update: function(effectBand) {
		if(!effectBand.Info.get_CanShareBand()) {
			this.UniqueEffectId = effectBand.Info.get_EffectId();
		}
		this.Bands.push(effectBand);
		if(effectBand.Height > this.Height) {
			this.Height = effectBand.Height;
		}
		if(this.FirstBeat == null || this.FirstBeat.Index > effectBand.FirstBeat.Index) {
			this.FirstBeat = effectBand.FirstBeat;
		}
		if(this.LastBeat == null || this.LastBeat.Index < effectBand.LastBeat.Index) {
			this.LastBeat = effectBand.LastBeat;
		}
	}
	,CanBeUsed: function(band) {
		if(this.UniqueEffectId == null && band.Info.get_CanShareBand() || band.Info.get_EffectId() == this.UniqueEffectId) {
			if(!(this.FirstBeat == null || this.LastBeat.Index < band.FirstBeat.Index)) {
				return band.LastBeat.Index < this.FirstBeat.Index;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
	,__class__: alphaTab.rendering.EffectBandSlot
};
alphaTab.rendering._EffectBarGlyphSizing = {};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_ = $hx_exports["alphaTab"]["rendering"]["_EffectBarGlyphSizing"]["EffectBarGlyphSizing_Impl_"] = {};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.__name__ = true;
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "SinglePreBeat";
	case 1:
		return "SingleOnBeat";
	case 2:
		return "GroupedBeforeBeat";
	case 3:
		return "GroupedOnBeat";
	case 4:
		return "FullBar";
	}
	return "";
};
alphaTab.rendering.EffectBarRenderer = $hx_exports["alphaTab"]["rendering"]["EffectBarRenderer"] = function(renderer,bar,infos) {
	alphaTab.rendering.BarRendererBase.call(this,renderer,bar);
	this._infos = null;
	this._bands = null;
	this.BandLookup = null;
	this.SizingInfo = null;
	this._infos = infos;
};
alphaTab.rendering.EffectBarRenderer.__name__ = true;
alphaTab.rendering.EffectBarRenderer.__super__ = alphaTab.rendering.BarRendererBase;
alphaTab.rendering.EffectBarRenderer.prototype = $extend(alphaTab.rendering.BarRendererBase.prototype,{
	UpdateSizes: function() {
		this.TopOverflow = 0;
		this.BottomOverflow = 0;
		this.TopPadding = 0;
		this.BottomPadding = 0;
		this.UpdateHeight();
		alphaTab.rendering.BarRendererBase.prototype.UpdateSizes.call(this);
	}
	,UpdateHeight: function() {
		if(this.SizingInfo == null) {
			return;
		}
		var y = 0;
		var slot = $iterator(this.SizingInfo.Slots)();
		while(slot.hasNext()) {
			var slot1 = slot.next();
			slot1.Y = y;
			var band = $iterator(slot1.Bands)();
			while(band.hasNext()) {
				var band1 = band.next();
				band1.Y = y;
				band1.Height = slot1.Height;
			}
			y = y + slot1.Height;
		}
		this.Height = y;
	}
	,ApplyLayoutingInfo: function() {
		if(!alphaTab.rendering.BarRendererBase.prototype.ApplyLayoutingInfo.call(this)) {
			return false;
		}
		this.SizingInfo = new alphaTab.rendering.EffectBandSizingInfo();
		if(this.Index > 0) {
			var previousRenderer = js.Boot.__cast(this.get_PreviousRenderer() , alphaTab.rendering.EffectBarRenderer);
			this.SizingInfo.CopySlots(previousRenderer.SizingInfo);
		}
		var effectBand = HxOverrides.iter(this._bands);
		while(effectBand.hasNext()) {
			var effectBand1 = effectBand.next();
			effectBand1.AlignGlyphs();
			if(!effectBand1.IsEmpty) {
				this.SizingInfo.Register(effectBand1);
			}
		}
		this.UpdateHeight();
		return true;
	}
	,ScaleToWidth: function(width) {
		alphaTab.rendering.BarRendererBase.prototype.ScaleToWidth.call(this,width);
		var effectBand = HxOverrides.iter(this._bands);
		while(effectBand.hasNext()) {
			var effectBand1 = effectBand.next();
			effectBand1.AlignGlyphs();
		}
	}
	,CreateBeatGlyphs: function() {
		var size = this._infos.length;
		var this1 = new Array(size);
		this._bands = this1;
		var this2 = {}
		this.BandLookup = this2;
		var i = 0;
		while(i < this._infos.length) {
			this._bands[i] = new alphaTab.rendering.EffectBand(this._infos[i]);
			this._bands[i].Renderer = this;
			this._bands[i].DoLayout();
			this.BandLookup[this._infos[i].get_EffectId()] = this._bands[i];
			++i;
		}
		var voice = $iterator(this.Bar.Voices)();
		while(voice.hasNext()) {
			var voice1 = voice.next();
			if(this.HasVoiceContainer(voice1)) {
				this.CreateVoiceGlyphs(voice1);
			}
		}
		var effectBand = HxOverrides.iter(this._bands);
		while(effectBand.hasNext()) {
			var effectBand1 = effectBand.next();
			if(effectBand1.IsLinkedToPrevious) {
				this.IsLinkedToPrevious = true;
			}
		}
	}
	,CreateVoiceGlyphs: function(v) {
		var b = $iterator(v.Beats)();
		while(b.hasNext()) {
			var b1 = b.next();
			var container = new alphaTab.rendering.glyphs.BeatContainerGlyph(b1,this.GetOrCreateVoiceContainer(v));
			container.PreNotes = new alphaTab.rendering.glyphs.BeatGlyphBase();
			container.OnNotes = new alphaTab.rendering.glyphs.BeatOnNoteGlyphBase();
			this.AddBeatGlyph(container);
			var effectBand = HxOverrides.iter(this._bands);
			while(effectBand.hasNext()) {
				var effectBand1 = effectBand.next();
				effectBand1.CreateGlyph(b1);
			}
		}
	}
	,Paint: function(cx,cy,canvas) {
		this.PaintBackground(cx,cy,canvas);
		canvas.set_Color(this.get_Resources().MainGlyphColor);
		var effectBand = HxOverrides.iter(this._bands);
		while(effectBand.hasNext()) {
			var effectBand1 = effectBand.next();
			effectBand1.Paint(cx + this.X,cy + this.Y,canvas);
		}
	}
	,__class__: alphaTab.rendering.EffectBarRenderer
});
alphaTab.rendering.RenderFinishedEventArgs = $hx_exports["alphaTab"]["rendering"]["RenderFinishedEventArgs"] = function() {
};
alphaTab.rendering.RenderFinishedEventArgs.__name__ = true;
alphaTab.rendering.RenderFinishedEventArgs.prototype = {
	__class__: alphaTab.rendering.RenderFinishedEventArgs
};
alphaTab.rendering.RenderingResources = $hx_exports["alphaTab"]["rendering"]["RenderingResources"] = function(scale) {
	this.CopyrightFont = null;
	this.TitleFont = null;
	this.SubTitleFont = null;
	this.WordsFont = null;
	this.EffectFont = null;
	this.TablatureFont = null;
	this.GraceFont = null;
	this.StaveLineColor = null;
	this.BarSeperatorColor = null;
	this.BarNumberFont = null;
	this.BarNumberColor = null;
	this.MarkerFont = null;
	this.TabClefFont = null;
	this.MainGlyphColor = null;
	this.SecondaryGlyphColor = null;
	this.Scale = 0.0;
	this.ScoreInfoColor = null;
	this.Init(scale);
};
alphaTab.rendering.RenderingResources.__name__ = true;
alphaTab.rendering.RenderingResources.prototype = {
	Init: function(scale) {
		this.Scale = scale;
		var sansFont = "Arial";
		var serifFont = "Georgia";
		this.EffectFont = new alphaTab.platform.model.Font(serifFont,12 * scale,2);
		this.CopyrightFont = new alphaTab.platform.model.Font(sansFont,12 * scale,1);
		this.TitleFont = new alphaTab.platform.model.Font(serifFont,32 * scale,0);
		this.SubTitleFont = new alphaTab.platform.model.Font(serifFont,20 * scale,0);
		this.WordsFont = new alphaTab.platform.model.Font(serifFont,15 * scale,0);
		this.TablatureFont = new alphaTab.platform.model.Font(sansFont,13 * scale,0);
		this.GraceFont = new alphaTab.platform.model.Font(sansFont,11 * scale,0);
		this.StaveLineColor = new alphaTab.platform.model.Color(0,0,0,255);
		this.BarSeperatorColor = new alphaTab.platform.model.Color(34,34,17,255);
		this.BarNumberFont = new alphaTab.platform.model.Font(sansFont,11 * scale,0);
		this.BarNumberColor = new alphaTab.platform.model.Color(200,0,0,255);
		this.MarkerFont = new alphaTab.platform.model.Font(serifFont,14 * scale,1);
		this.TabClefFont = new alphaTab.platform.model.Font(sansFont,18 * scale,1);
		this.ScoreInfoColor = new alphaTab.platform.model.Color(0,0,0,255);
		this.MainGlyphColor = new alphaTab.platform.model.Color(0,0,0,255);
		this.SecondaryGlyphColor = new alphaTab.platform.model.Color(0,0,0,100);
	}
	,__class__: alphaTab.rendering.RenderingResources
};
alphaTab.rendering.utils = {};
alphaTab.rendering.utils.IBeamYCalculator = $hx_exports["alphaTab"]["rendering"]["utils"]["IBeamYCalculator"] = function() { };
alphaTab.rendering.utils.IBeamYCalculator.__name__ = true;
alphaTab.rendering.utils.IBeamYCalculator.prototype = {
	__class__: alphaTab.rendering.utils.IBeamYCalculator
};
alphaTab.rendering.ScoreBarRenderer = $hx_exports["alphaTab"]["rendering"]["ScoreBarRenderer"] = function(renderer,bar) {
	alphaTab.rendering.BarRendererBase.call(this,renderer,bar);
	this.AccidentalHelper = null;
	this._startSpacing = false;
	this.AccidentalHelper = new alphaTab.rendering.utils.AccidentalHelper();
};
alphaTab.rendering.ScoreBarRenderer.__name__ = true;
alphaTab.rendering.ScoreBarRenderer.__interfaces__ = [alphaTab.rendering.utils.IBeamYCalculator];
alphaTab.rendering.ScoreBarRenderer.PaintSingleBar = function(canvas,x1,y1,x2,y2,size) {
	canvas.BeginPath();
	canvas.MoveTo(x1,y1);
	canvas.LineTo(x2,y2);
	canvas.LineTo(x2,y2 + size);
	canvas.LineTo(x1,y1 + size);
	canvas.ClosePath();
	canvas.Fill();
};
alphaTab.rendering.ScoreBarRenderer.__super__ = alphaTab.rendering.BarRendererBase;
alphaTab.rendering.ScoreBarRenderer.prototype = $extend(alphaTab.rendering.BarRendererBase.prototype,{
	GetBeatDirection: function(beat) {
		var g = js.Boot.__cast(this.GetOnNotesGlyphForBeat(beat) , alphaTab.rendering.glyphs.ScoreBeatGlyph);
		if(g != null) {
			return g.NoteHeads.get_Direction();
		}
		return 0;
	}
	,GetNoteX: function(note,onEnd) {
		if(onEnd == null) {
			onEnd = true;
		}
		var g = js.Boot.__cast(this.GetOnNotesGlyphForBeat(note.Beat) , alphaTab.rendering.glyphs.ScoreBeatGlyph);
		if(g != null) {
			var x = g.Container.VoiceContainer.X + g.Container.X + g.X;
			if(onEnd) {
				x = x + g.Width;
			}
			return x;
		}
		return 0;
	}
	,GetNoteY: function(note) {
		var beat = js.Boot.__cast(this.GetOnNotesGlyphForBeat(note.Beat) , alphaTab.rendering.glyphs.ScoreBeatGlyph);
		if(beat != null) {
			return beat.NoteHeads.GetNoteY(note);
		}
		return 0;
	}
	,get_LineOffset: function() {
		return (8 + 1) * this.get_Scale();
	}
	,UpdateSizes: function() {
		var res = this.get_Resources();
		var this1 = 0.2;
		var glyphOverflow = res.TablatureFont.Size / 2 + res.TablatureFont.Size * this1;
		this.TopPadding = glyphOverflow;
		this.BottomPadding = glyphOverflow;
		this.Height = this.get_LineOffset() * 4 + this.TopPadding + this.BottomPadding;
		alphaTab.rendering.BarRendererBase.prototype.UpdateSizes.call(this);
	}
	,DoLayout: function() {
		alphaTab.rendering.BarRendererBase.prototype.DoLayout.call(this);
		var top = this.GetScoreY(0,0);
		var bottom = this.GetScoreY(8,0);
		var i = 0;
		var j = this.Helpers.BeamHelpers.length;
		while(i < j) {
			var v = this.Helpers.BeamHelpers[i];
			var k = 0;
			var l = v.length;
			while(k < l) {
				var h = v[k];
				var this1 = this.GetNoteLine(h.MaxNote);
				var maxNoteY = this.GetScoreY(this1,0);
				if(h.Direction == 0) {
					maxNoteY = maxNoteY - this.GetStemSize(h);
					maxNoteY = maxNoteY - h.FingeringCount * this.get_Resources().GraceFont.Size;
					if(h.HasTuplet) {
						maxNoteY = maxNoteY - this.get_Resources().EffectFont.Size * 2;
					}
				}
				if(h.HasTuplet) {
					var this2 = 1.5;
					maxNoteY = maxNoteY - this.get_Resources().EffectFont.Size * this2;
				}
				if(maxNoteY < top) {
					this.RegisterOverflowTop(Math.abs(maxNoteY));
				}
				var this3 = this.GetNoteLine(h.MinNote);
				var minNoteY = this.GetScoreY(this3,0);
				if(h.Direction == 1) {
					minNoteY = minNoteY + this.GetStemSize(h);
					minNoteY = minNoteY + h.FingeringCount * this.get_Resources().GraceFont.Size;
				}
				if(minNoteY > bottom) {
					this.RegisterOverflowBottom(Math.abs(minNoteY) - bottom);
				}
				++k;
			}
			++i;
		}
	}
	,Paint: function(cx,cy,canvas) {
		alphaTab.rendering.BarRendererBase.prototype.Paint.call(this,cx,cy,canvas);
		this.PaintBeams(cx,cy,canvas);
		this.PaintTuplets(cx,cy,canvas);
	}
	,PaintTuplets: function(cx,cy,canvas) {
		var i = 0;
		var j = this.Helpers.TupletHelpers.length;
		while(i < j) {
			var v = this.Helpers.TupletHelpers[i];
			var k = 0;
			var l = v.length;
			while(k < l) {
				var h = v[k];
				this.PaintTupletHelper(cx + this.get_BeatGlyphsStart(),cy,canvas,h);
				++k;
			}
			++i;
		}
	}
	,PaintBeams: function(cx,cy,canvas) {
		var i = 0;
		var j = this.Helpers.BeamHelpers.length;
		while(i < j) {
			var v = this.Helpers.BeamHelpers[i];
			var k = 0;
			var l = v.length;
			while(k < l) {
				var h = v[k];
				this.PaintBeamHelper(cx + this.get_BeatGlyphsStart(),cy,canvas,h);
				++k;
			}
			++i;
		}
	}
	,PaintBeamHelper: function(cx,cy,canvas,h) {
		canvas.set_Color(h.Voice.Index == 0 ? this.get_Resources().MainGlyphColor : this.get_Resources().SecondaryGlyphColor);
		if(h.Beats.length == 1) {
			this.PaintFooter(cx,cy,canvas,h);
		} else {
			this.PaintBar(cx,cy,canvas,h);
		}
	}
	,PaintTupletHelper: function(cx,cy,canvas,h) {
		var res = this.get_Resources();
		var oldAlign = canvas.get_TextAlign();
		canvas.set_TextAlign(1);
		if(h.Beats.length == 1 || !h.get_IsFull()) {
			var i = 0;
			var j = h.Beats.length;
			while(i < j) {
				var beat = h.Beats[i];
				var beamingHelper = this.Helpers.BeamHelperLookup[h.VoiceIndex][beat.Index];
				if(beamingHelper == null) {
					++i;
					continue;
				}
				var direction = beamingHelper.Direction;
				var tupletX = beamingHelper.GetBeatLineX(beat) + this.get_Scale();
				var tupletY = cy + this.Y + this.CalculateBeamY(beamingHelper,tupletX);
				var offset;
				if(direction == 0) {
					var this1 = 1.8;
					offset = res.EffectFont.Size * this1;
				} else {
					offset = -3 * this.get_Scale();
				}
				canvas.set_Font(res.EffectFont);
				canvas.FillText(Std.string(h.Tuplet),cx + this.X + tupletX,tupletY - offset);
				++i;
			}
		} else {
			var firstBeat = h.Beats[0];
			var lastBeat = h.Beats[h.Beats.length - 1];
			var firstBeamingHelper = this.Helpers.BeamHelperLookup[h.VoiceIndex][firstBeat.Index];
			var lastBeamingHelper = this.Helpers.BeamHelperLookup[h.VoiceIndex][lastBeat.Index];
			if(firstBeamingHelper != null && lastBeamingHelper != null) {
				var direction1 = firstBeamingHelper.Direction;
				var startX = firstBeamingHelper.GetBeatLineX(firstBeat) + this.get_Scale();
				var endX = lastBeamingHelper.GetBeatLineX(lastBeat) + this.get_Scale();
				canvas.set_Font(res.EffectFont);
				var s = Std.string(h.Tuplet);
				var sw = canvas.MeasureText(s);
				var sp = 3 * this.get_Scale();
				var middleX = (startX + endX) / 2;
				var offset1X = middleX - sw / 2 - sp;
				var offset2X = middleX + sw / 2 + sp;
				var startY = this.CalculateBeamYWithDirection(firstBeamingHelper,startX,firstBeamingHelper.Direction);
				var endY = this.CalculateBeamYWithDirection(lastBeamingHelper,endX,firstBeamingHelper.Direction);
				var k = (endY - startY) / (endX - startX);
				var d = startY - k * startX;
				var offset1Y = k * offset1X + d;
				var middleY = k * middleX + d;
				var offset2Y = k * offset2X + d;
				var offset1 = 10 * this.get_Scale();
				var size = 5 * this.get_Scale();
				if(direction1 == 1) {
					offset1 = offset1 * -1;
					size = size * -1;
				}
				canvas.BeginPath();
				var tmp = cx + this.X + startX;
				var this2 = system.Convert.ToInt32_Single(cy + this.Y + startY - offset1);
				canvas.MoveTo(tmp,this2);
				var tmp1 = cx + this.X + startX;
				var this3 = system.Convert.ToInt32_Single(cy + this.Y + startY - offset1 - size);
				canvas.LineTo(tmp1,this3);
				var tmp2 = cx + this.X + offset1X;
				var this4 = system.Convert.ToInt32_Single(cy + this.Y + offset1Y - offset1 - size);
				canvas.LineTo(tmp2,this4);
				canvas.Stroke();
				canvas.BeginPath();
				var tmp3 = cx + this.X + offset2X;
				var this5 = system.Convert.ToInt32_Single(cy + this.Y + offset2Y - offset1 - size);
				canvas.MoveTo(tmp3,this5);
				var tmp4 = cx + this.X + endX;
				var this6 = system.Convert.ToInt32_Single(cy + this.Y + endY - offset1 - size);
				canvas.LineTo(tmp4,this6);
				var tmp5 = cx + this.X + endX;
				var this7 = system.Convert.ToInt32_Single(cy + this.Y + endY - offset1);
				canvas.LineTo(tmp5,this7);
				canvas.Stroke();
				canvas.FillText(s,cx + this.X + middleX,cy + this.Y + middleY - offset1 - size - res.EffectFont.Size);
			}
		}
		canvas.set_TextAlign(oldAlign);
	}
	,GetStemSize: function(helper) {
		if(helper.Beats.length == 1) {
			return this.GetFooterStemSize(helper.ShortestDuration);
		} else {
			return this.GetBarStemSize(helper.ShortestDuration);
		}
	}
	,GetBarStemSize: function(duration) {
		var size;
		switch(duration) {
		case -4:
			size = 6;
			break;
		case 2:
			size = 6;
			break;
		case 4:
			size = 6;
			break;
		case 8:
			size = 6;
			break;
		case 16:
			size = 6;
			break;
		case 32:
			size = 7;
			break;
		case 64:
			size = 7;
			break;
		case 128:
			size = 9;
			break;
		case 256:
			size = 10;
			break;
		default:
			size = 0;
		}
		var this1 = size;
		return this.GetScoreY(this1,0);
	}
	,GetFooterStemSize: function(duration) {
		var size;
		switch(duration) {
		case -4:
			size = 6;
			break;
		case 2:
			size = 6;
			break;
		case 4:
			size = 6;
			break;
		case 8:
			size = 6;
			break;
		case 16:
			size = 6;
			break;
		case 32:
			size = 6;
			break;
		case 64:
			size = 6;
			break;
		case 128:
			size = 6;
			break;
		case 256:
			size = 6;
			break;
		default:
			size = 0;
		}
		var this1 = size;
		return this.GetScoreY(this1,0);
	}
	,GetYPositionForNote: function(note) {
		var this1 = this.GetNoteLine(note);
		return this.GetScoreY(this1,0);
	}
	,CalculateBeamY: function(h,x) {
		var stemSize = this.GetStemSize(h);
		return h.CalculateBeamY(stemSize,this.get_Scale(),x,this.get_Scale(),this);
	}
	,CalculateBeamYWithDirection: function(h,x,direction) {
		var stemSize = this.GetStemSize(h);
		return h.CalculateBeamYWithDirection(stemSize,this.get_Scale(),x,this.get_Scale(),this,direction);
	}
	,PaintBar: function(cx,cy,canvas,h) {
		var i = 0;
		var j = h.Beats.length;
		while(i < j) {
			var beat = h.Beats[i];
			var isGrace = beat.GraceType != 0;
			var scaleMod = isGrace ? 0.75 : 1;
			var beatLineX = h.GetBeatLineX(beat) + this.get_Scale();
			var direction = h.Direction;
			var y1 = cy + this.Y;
			var y11;
			if(direction == 0) {
				var this1 = this.GetNoteLine(beat.get_MinNote());
				y11 = this.GetScoreY(this1,0);
			} else {
				var this2 = this.GetNoteLine(beat.get_MaxNote());
				y11 = this.GetScoreY(this2,0);
			}
			y1 = y1 + y11;
			var y2 = cy + this.Y;
			y2 = y2 + scaleMod * this.CalculateBeamY(h,beatLineX);
			var this3 = 1.5;
			canvas.set_LineWidth(this3 * this.get_Scale());
			canvas.BeginPath();
			canvas.MoveTo(cx + this.X + beatLineX,y1);
			canvas.LineTo(cx + this.X + beatLineX,y2);
			canvas.Stroke();
			canvas.set_LineWidth(this.get_Scale());
			var fingeringY = y2;
			if(direction == 1) {
				var this4 = 2;
				fingeringY = fingeringY + canvas.get_Font().Size * this4;
			} else if(i != 0) {
				var this5 = 1.5;
				fingeringY = fingeringY - canvas.get_Font().Size * this5;
			}
			this.PaintFingering(canvas,beat,cx + this.X + beatLineX,direction,fingeringY);
			var brokenBarOffset = 6 * this.get_Scale() * scaleMod;
			var barSpacing = 7 * this.get_Scale() * scaleMod;
			var barSize = 8 / 2 * this.get_Scale() * scaleMod;
			var barCount = alphaTab.model.ModelUtils.GetIndex(beat.Duration) - 2;
			var barStart = cy + this.Y;
			if(direction == 1) {
				barSpacing = -barSpacing;
				barSize = -barSize;
			}
			var barIndex = 0;
			while(barIndex < barCount) {
				var barStartX;
				var barEndX;
				var barStartY;
				var barEndY;
				var barY = barStart + barIndex * barSpacing;
				if(i < h.Beats.length - 1) {
					if(alphaTab.rendering.utils.BeamingHelper.IsFullBarJoin(beat,h.Beats[i + 1],barIndex)) {
						barStartX = beatLineX;
						barEndX = h.GetBeatLineX(h.Beats[i + 1]) + this.get_Scale();
					} else if(i == 0 || !alphaTab.rendering.utils.BeamingHelper.IsFullBarJoin(h.Beats[i - 1],beat,barIndex)) {
						barStartX = beatLineX;
						barEndX = barStartX + brokenBarOffset;
					} else {
						++barIndex;
						continue;
					}
					barStartY = barY + this.CalculateBeamY(h,barStartX) * scaleMod;
					barEndY = barY + this.CalculateBeamY(h,barEndX) * scaleMod;
					alphaTab.rendering.ScoreBarRenderer.PaintSingleBar(canvas,cx + this.X + barStartX,barStartY,cx + this.X + barEndX,barEndY,barSize);
				} else if(i > 0 && !alphaTab.rendering.utils.BeamingHelper.IsFullBarJoin(beat,h.Beats[i - 1],barIndex)) {
					barStartX = beatLineX - brokenBarOffset;
					barEndX = beatLineX;
					barStartY = barY + this.CalculateBeamY(h,barStartX) * scaleMod;
					barEndY = barY + this.CalculateBeamY(h,barEndX) * scaleMod;
					alphaTab.rendering.ScoreBarRenderer.PaintSingleBar(canvas,cx + this.X + barStartX,barStartY,cx + this.X + barEndX,barEndY,barSize);
				}
				++barIndex;
			}
			++i;
		}
	}
	,PaintFooter: function(cx,cy,canvas,h) {
		var beat = h.Beats[0];
		var isGrace = beat.GraceType != 0;
		var scaleMod = isGrace ? 0.75 : 1;
		var stemSize = this.GetFooterStemSize(h.ShortestDuration);
		var beatLineX = h.GetBeatLineX(beat) + this.get_Scale();
		var direction = h.Direction;
		var this1 = this.GetNoteLine(beat.get_MaxNote());
		var topY = this.GetScoreY(this1,0);
		var this2 = this.GetNoteLine(beat.get_MinNote());
		var bottomY = this.GetScoreY(this2,0);
		var beamY;
		var fingeringY;
		if(direction == 1) {
			bottomY = bottomY + stemSize * scaleMod;
			beamY = bottomY;
			fingeringY = cy + this.Y + bottomY;
		} else {
			topY = topY - stemSize * scaleMod;
			beamY = topY;
			fingeringY = cy + this.Y + topY;
		}
		this.PaintFingering(canvas,beat,cx + this.X + beatLineX,direction,fingeringY);
		if(beat.Duration == 1 || beat.Duration == -2 || beat.Duration == -4) {
			return;
		}
		var this3 = 1.5;
		canvas.set_LineWidth(this3 * this.get_Scale());
		canvas.BeginPath();
		canvas.MoveTo(cx + this.X + beatLineX,cy + this.Y + topY);
		canvas.LineTo(cx + this.X + beatLineX,cy + this.Y + bottomY);
		canvas.Stroke();
		canvas.set_LineWidth(this.get_Scale());
		if(isGrace) {
			var graceSizeY = 15 * this.get_Scale();
			var graceSizeX = 12 * this.get_Scale();
			canvas.BeginPath();
			if(direction == 1) {
				canvas.MoveTo(cx + this.X + beatLineX - graceSizeX / 2,cy + this.Y + bottomY - graceSizeY);
				canvas.LineTo(cx + this.X + beatLineX + graceSizeX / 2,cy + this.Y + bottomY);
			} else {
				canvas.MoveTo(cx + this.X + beatLineX - graceSizeX / 2,cy + this.Y + topY + graceSizeY);
				canvas.LineTo(cx + this.X + beatLineX + graceSizeX / 2,cy + this.Y + topY);
			}
			canvas.Stroke();
		}
		if(beat.Duration > 4) {
			var this4 = 2;
			var glyph = new alphaTab.rendering.glyphs.BeamGlyph(beatLineX - this.get_Scale() / this4,beamY,beat.Duration,direction,isGrace);
			glyph.Renderer = this;
			glyph.DoLayout();
			glyph.Paint(cx + this.X,cy + this.Y,canvas);
		}
	}
	,PaintFingering: function(canvas,beat,beatLineX,direction,topY) {
		if(direction == 0) {
			beatLineX = beatLineX - 10 * this.get_Scale();
		} else {
			beatLineX = beatLineX + 3 * this.get_Scale();
		}
		var noteList = beat.Notes.slice(0);
		var comparison = function(a,b) {
			return a.get_RealValue() - b.get_RealValue();
		};
		noteList.sort(function(a1,b1) {
			return comparison(a1,b1);
		});
		var n = 0;
		while(n < noteList.length) {
			var note = noteList[n];
			var text = null;
			if(note.LeftHandFinger != -2) {
				text = this.FingerToString(beat,note.LeftHandFinger,true);
			} else if(note.RightHandFinger != -2) {
				text = this.FingerToString(beat,note.RightHandFinger,false);
			}
			if(text == null) {
				++n;
				continue;
			}
			canvas.FillText(text,beatLineX,topY);
			topY = topY - system.Convert.ToInt32_Single(canvas.get_Font().Size);
			++n;
		}
	}
	,FingerToString: function(beat,finger,leftHand) {
		if(this.get_Settings().ForcePianoFingering || alphaTab.audio.GeneralMidi.IsPiano(beat.Voice.Bar.Staff.Track.PlaybackInfo.Program)) {
			switch(finger) {
			case -2:case -1:
				return null;
			case 0:
				return "1";
			case 1:
				return "2";
			case 2:
				return "3";
			case 3:
				return "4";
			case 4:
				return "5";
			default:
				return null;
			}
		} else if(leftHand) {
			switch(finger) {
			case -2:case -1:
				return "0";
			case 0:
				return "T";
			case 1:
				return "1";
			case 2:
				return "2";
			case 3:
				return "3";
			case 4:
				return "4";
			default:
				return null;
			}
		} else {
			switch(finger) {
			case -2:case -1:
				return null;
			case 0:
				return "p";
			case 1:
				return "i";
			case 2:
				return "m";
			case 3:
				return "a";
			case 4:
				return "c";
			default:
				return null;
			}
		}
	}
	,CreatePreBeatGlyphs: function() {
		alphaTab.rendering.BarRendererBase.prototype.CreatePreBeatGlyphs.call(this);
		if(this.Bar.get_MasterBar().IsRepeatStart) {
			this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.RepeatOpenGlyph(0,0,1.5,3));
		}
		if(this.get_IsFirstOfLine() || this.Bar.Clef != this.Bar.PreviousBar.Clef || this.Bar.ClefOttavia != this.Bar.PreviousBar.ClefOttavia) {
			var offset = 0;
			var correction = 0;
			var _g = this.Bar.Clef;
			switch(_g) {
			case 0:
				offset = 6;
				break;
			case 1:
				offset = 6;
				break;
			case 2:
				offset = 4;
				break;
			case 3:
				offset = 4;
				correction = -1;
				break;
			case 4:
				offset = 8;
				break;
			default:
			}
			this.CreateStartSpacing();
			var this1 = offset;
			var this2 = correction;
			this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.ClefGlyph(0,this.GetScoreY(this1,this2),this.Bar.Clef,this.Bar.ClefOttavia));
		}
		if(this.Index == 0 && this.Bar.get_MasterBar().KeySignature != 0 || this.Bar.PreviousBar != null && this.Bar.get_MasterBar().KeySignature != this.Bar.PreviousBar.get_MasterBar().KeySignature) {
			this.CreateStartSpacing();
			this.CreateKeySignatureGlyphs();
		}
		if(this.Bar.PreviousBar == null || this.Bar.PreviousBar != null && this.Bar.get_MasterBar().TimeSignatureNumerator != this.Bar.PreviousBar.get_MasterBar().TimeSignatureNumerator || this.Bar.PreviousBar != null && this.Bar.get_MasterBar().TimeSignatureDenominator != this.Bar.PreviousBar.get_MasterBar().TimeSignatureDenominator) {
			this.CreateStartSpacing();
			this.CreateTimeSignatureGlyphs();
		}
		this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.BarNumberGlyph(0,this.GetScoreY(-0.5,0),this.Bar.Index + 1));
		if(this.Bar.get_IsEmpty()) {
			this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,30 * this.get_Scale()));
		}
	}
	,CreateBeatGlyphs: function() {
		var v = 0;
		while(v < this.Bar.Voices.length) {
			var voice = this.Bar.Voices[v];
			if(this.HasVoiceContainer(voice)) {
				this.CreateVoiceGlyphs(voice);
			}
			++v;
		}
	}
	,CreatePostBeatGlyphs: function() {
		alphaTab.rendering.BarRendererBase.prototype.CreatePostBeatGlyphs.call(this);
		if(this.Bar.get_MasterBar().get_IsRepeatEnd()) {
			this.AddPostBeatGlyph(new alphaTab.rendering.glyphs.RepeatCloseGlyph(this.X,0));
			if(this.Bar.get_MasterBar().RepeatCount > 2) {
				this.AddPostBeatGlyph(new alphaTab.rendering.glyphs.RepeatCountGlyph(0,this.GetScoreY(-1,-3),this.Bar.get_MasterBar().RepeatCount));
			}
		} else if(this.Bar.NextBar == null || !this.Bar.NextBar.get_MasterBar().IsRepeatStart) {
			this.AddPostBeatGlyph(new alphaTab.rendering.glyphs.BarSeperatorGlyph(0,0));
		}
	}
	,CreateStartSpacing: function() {
		if(this._startSpacing) {
			return;
		}
		this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,2 * this.get_Scale()));
		this._startSpacing = true;
	}
	,CreateKeySignatureGlyphs: function() {
		var offsetClef = 0;
		var currentKey = this.Bar.get_MasterBar().KeySignature;
		var previousKey = this.Bar.PreviousBar == null ? 0 : this.Bar.PreviousBar.get_MasterBar().KeySignature;
		var _g = this.Bar.Clef;
		switch(_g) {
		case 0:
			offsetClef = 0;
			break;
		case 1:
			offsetClef = -1;
			break;
		case 2:
			offsetClef = 1;
			break;
		case 3:
			offsetClef = 2;
			break;
		case 4:
			offsetClef = 1;
			break;
		default:
		}
		var this1 = {}
		var newLines = this1;
		var this2 = [];
		var newGlyphs = this2;
		if(alphaTab.model.ModelUtils.KeySignatureIsSharp(currentKey)) {
			var i = 0;
			while(i < Math.abs(currentKey)) {
				var step = alphaTab.rendering.ScoreBarRenderer.SharpKsSteps[i] + offsetClef;
				var this3 = step;
				newGlyphs.push(new alphaTab.rendering.glyphs.SharpGlyph(0,this.GetScoreY(this3,0),false));
				newLines[step] = true;
				++i;
			}
		} else {
			var i1 = 0;
			while(i1 < Math.abs(currentKey)) {
				var step1 = alphaTab.rendering.ScoreBarRenderer.FlatKsSteps[i1] + offsetClef;
				var this4 = step1;
				newGlyphs.push(new alphaTab.rendering.glyphs.FlatGlyph(0,this.GetScoreY(this4,0),false));
				newLines[step1] = true;
				++i1;
			}
		}
		var naturalizeSymbols = Math.abs(previousKey);
		var previousKeyPositions = alphaTab.model.ModelUtils.KeySignatureIsSharp(previousKey) ? alphaTab.rendering.ScoreBarRenderer.SharpKsSteps : alphaTab.rendering.ScoreBarRenderer.FlatKsSteps;
		var i2 = 0;
		while(i2 < naturalizeSymbols) {
			var step2 = previousKeyPositions[i2] + offsetClef;
			if(!newLines.hasOwnProperty(step2)) {
				var this5 = previousKeyPositions[i2] + offsetClef;
				this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.NaturalizeGlyph(0,this.GetScoreY(this5,0),false));
			}
			++i2;
		}
		var newGlyph = $iterator(newGlyphs)();
		while(newGlyph.hasNext()) {
			var newGlyph1 = newGlyph.next();
			this.AddPreBeatGlyph(newGlyph1);
		}
	}
	,CreateTimeSignatureGlyphs: function() {
		this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,5 * this.get_Scale()));
		this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.ScoreTimeSignatureGlyph(0,this.GetScoreY(2,0),this.Bar.get_MasterBar().TimeSignatureNumerator,this.Bar.get_MasterBar().TimeSignatureDenominator,this.Bar.get_MasterBar().TimeSignatureCommon));
	}
	,CreateVoiceGlyphs: function(v) {
		var i = 0;
		var j = v.Beats.length;
		while(i < j) {
			var b = v.Beats[i];
			var container = new alphaTab.rendering.ScoreBeatContainerGlyph(b,this.GetOrCreateVoiceContainer(v));
			container.PreNotes = new alphaTab.rendering.glyphs.ScoreBeatPreNotesGlyph();
			container.OnNotes = new alphaTab.rendering.glyphs.ScoreBeatGlyph();
			this.AddBeatGlyph(container);
			++i;
		}
	}
	,GetNoteLine: function(n) {
		return this.AccidentalHelper.GetNoteLine(n);
	}
	,GetScoreY: function(steps,correction) {
		if(correction == null) {
			correction = 0;
		}
		return this.get_LineOffset() / 2 * steps + correction * this.get_Scale();
	}
	,PaintBackground: function(cx,cy,canvas) {
		alphaTab.rendering.BarRendererBase.prototype.PaintBackground.call(this,cx,cy,canvas);
		var res = this.get_Resources();
		canvas.set_Color(res.StaveLineColor);
		var lineY = cy + this.Y + this.TopPadding;
		var lineOffset = this.get_LineOffset();
		var i = 0;
		while(i < 5) {
			if(i > 0) {
				lineY = lineY + lineOffset;
			}
			var tmp = cx + this.X;
			var this1 = system.Convert.ToInt32_Single(lineY);
			canvas.FillRect(tmp,this1,this.Width,this.get_Scale());
			++i;
		}
		canvas.set_Color(res.MainGlyphColor);
	}
	,__class__: alphaTab.rendering.ScoreBarRenderer
});
alphaTab.rendering.glyphs.BeatContainerGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["BeatContainerGlyph"] = function(beat,voiceContainer) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this.VoiceContainer = null;
	this.Beat = null;
	this.PreNotes = null;
	this.OnNotes = null;
	this.Ties = null;
	this.MinWidth = 0.0;
	this.OnTimeX = 0.0;
	this.Beat = beat;
	var this1 = [];
	this.Ties = this1;
	this.VoiceContainer = voiceContainer;
};
alphaTab.rendering.glyphs.BeatContainerGlyph.__name__ = true;
alphaTab.rendering.glyphs.BeatContainerGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.BeatContainerGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	RegisterLayoutingInfo: function(layoutings) {
		var preBeatStretch = this.PreNotes.Width + this.OnNotes.Width / 2;
		layoutings.AddBeatSpring(this.Beat,this.MinWidth,preBeatStretch);
		layoutings.SetPreBeatSize(this.Beat,this.PreNotes.Width);
		layoutings.SetOnBeatSize(this.Beat,this.OnNotes.Width);
	}
	,ApplyLayoutingInfo: function(info) {
		this.PreNotes.Width = info.GetPreBeatSize(this.Beat);
		this.OnNotes.Width = info.GetOnBeatSize(this.Beat);
		this.OnNotes.X = this.PreNotes.X + this.PreNotes.Width;
		this.OnTimeX = this.OnNotes.X + this.OnNotes.Width / 2;
		this.OnNotes.UpdateBeamingHelper();
	}
	,DoLayout: function() {
		this.PreNotes.X = 0;
		this.PreNotes.Renderer = this.Renderer;
		this.PreNotes.Container = this;
		this.PreNotes.DoLayout();
		this.OnNotes.X = this.PreNotes.X + this.PreNotes.Width;
		this.OnNotes.Renderer = this.Renderer;
		this.OnNotes.Container = this;
		this.OnNotes.DoLayout();
		var i = this.Beat.Notes.length - 1;
		while(i >= 0) this.CreateTies(this.Beat.Notes[i--]);
		this.MinWidth = this.PreNotes.Width + this.OnNotes.Width;
		if(!this.Beat.get_IsRest()) {
			if(this.OnNotes.BeamingHelper.Beats.length == 1) {
				if(this.Beat.Duration >= 8) {
					this.MinWidth = this.MinWidth + 20 * this.get_Scale();
				}
			} else {
				var _g = this.Beat.Duration;
				switch(_g) {
				case 128:case 256:
					this.MinWidth = this.MinWidth + 10 * this.get_Scale();
					break;
				default:
				}
			}
		}
		this.Width = this.MinWidth;
		this.OnTimeX = this.OnNotes.X + this.OnNotes.Width / 2;
	}
	,ScaleToWidth: function(beatWidth) {
		this.OnNotes.UpdateBeamingHelper();
		this.Width = beatWidth;
	}
	,CreateTies: function(n) {
	}
	,Paint: function(cx,cy,canvas) {
		if(this.Beat.Voice.IsEmpty) {
			return;
		}
		var isEmptyGlyph = this.PreNotes.get_IsEmpty() && this.OnNotes.get_IsEmpty() && this.Ties.length == 0;
		if(isEmptyGlyph) {
			return;
		}
		canvas.BeginGroup("b" + this.Beat.Id);
		var oldColor = canvas.get_Color();
		this.PreNotes.Paint(cx + this.X,cy + this.Y,canvas);
		this.OnNotes.Paint(cx + this.X,cy + this.Y,canvas);
		var staffX = cx - this.VoiceContainer.X - this.Renderer.X;
		var staffY = cy - this.VoiceContainer.Y - this.Renderer.Y;
		var i = 0;
		var j = this.Ties.length;
		while(i < j) {
			var t = this.Ties[i];
			t.Renderer = this.Renderer;
			t.Paint(staffX,staffY,canvas);
			++i;
		}
		canvas.EndGroup();
	}
	,__class__: alphaTab.rendering.glyphs.BeatContainerGlyph
});
alphaTab.rendering.ScoreBeatContainerGlyph = $hx_exports["alphaTab"]["rendering"]["ScoreBeatContainerGlyph"] = function(beat,voiceContainer) {
	alphaTab.rendering.glyphs.BeatContainerGlyph.call(this,beat,voiceContainer);
};
alphaTab.rendering.ScoreBeatContainerGlyph.__name__ = true;
alphaTab.rendering.ScoreBeatContainerGlyph.__super__ = alphaTab.rendering.glyphs.BeatContainerGlyph;
alphaTab.rendering.ScoreBeatContainerGlyph.prototype = $extend(alphaTab.rendering.glyphs.BeatContainerGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.BeatContainerGlyph.prototype.DoLayout.call(this);
		if(this.Beat.IsLegatoOrigin) {
			if(this.Beat.PreviousBeat == null || !this.Beat.PreviousBeat.IsLegatoOrigin) {
				var destination = this.Beat.NextBeat;
				while(destination.NextBeat != null && destination.NextBeat.get_IsLegatoDestination()) destination = destination.NextBeat;
				this.Ties.push(new alphaTab.rendering.glyphs.ScoreLegatoGlyph(this.Beat,destination,false));
			}
		} else if(this.Beat.get_IsLegatoDestination()) {
			if(!this.Beat.IsLegatoOrigin) {
				var origin = this.Beat.PreviousBeat;
				while(origin.PreviousBeat != null && origin.PreviousBeat.IsLegatoOrigin) origin = origin.PreviousBeat;
				this.Ties.push(new alphaTab.rendering.glyphs.ScoreLegatoGlyph(origin,this.Beat,true));
			}
		}
	}
	,CreateTies: function(n) {
		if(n.IsTieOrigin) {
			var tie = new alphaTab.rendering.glyphs.ScoreTieGlyph(n,n.TieDestination,false);
			this.Ties.push(tie);
		}
		if(n.IsTieDestination) {
			var tie1 = new alphaTab.rendering.glyphs.ScoreTieGlyph(n.TieOrigin,n,true);
			this.Ties.push(tie1);
		} else if(n.IsHammerPullOrigin) {
			if(n.HammerPullOrigin == null) {
				var destination = n.HammerPullDestination;
				while(destination.HammerPullDestination != null) destination = destination.HammerPullDestination;
				var tie2 = new alphaTab.rendering.glyphs.ScoreTieGlyph(n,destination,false);
				this.Ties.push(tie2);
			}
		} else if(n.get_IsHammerPullDestination()) {
			if(n.HammerPullDestination == null) {
				var origin = n.HammerPullOrigin;
				while(origin.HammerPullOrigin != null) origin = origin.HammerPullOrigin;
				var tie3 = new alphaTab.rendering.glyphs.ScoreTieGlyph(origin,n,true);
				this.Ties.push(tie3);
			}
		} else if(n.SlideType == 2) {
			var tie4 = new alphaTab.rendering.glyphs.ScoreTieGlyph(n,n.SlideTarget,false);
			this.Ties.push(tie4);
		}
		if(n.SlideType != 0) {
			var l = new alphaTab.rendering.glyphs.ScoreSlideLineGlyph(n.SlideType,n,this);
			this.Ties.push(l);
		}
	}
	,__class__: alphaTab.rendering.ScoreBeatContainerGlyph
});
alphaTab.rendering.ScoreRenderer = $hx_exports["alphaTab"]["rendering"]["ScoreRenderer"] = function(settings) {
	this._currentLayoutMode = null;
	this._currentRenderEngine = null;
	this._renderedTracks = null;
	this.Canvas = null;
	this.Score = null;
	this.Tracks = null;
	this.Layout = null;
	this.RenderingResources = null;
	this.Settings = null;
	this.Settings = settings;
	this.RenderingResources = new alphaTab.rendering.RenderingResources(1);
	this.RecreateCanvas();
	this.RecreateLayout();
};
alphaTab.rendering.ScoreRenderer.__name__ = true;
alphaTab.rendering.ScoreRenderer.__interfaces__ = [alphaTab.rendering.IScoreRenderer];
alphaTab.rendering.ScoreRenderer.prototype = {
	get_BoundsLookup: function() {
		return this.__BoundsLookup;
	}
	,set_BoundsLookup: function(value) {
		return this.__BoundsLookup = value;
	}
	,Destroy: function() {
		this.Score = null;
		this.Canvas = null;
		this.Layout = null;
		this.RenderingResources = null;
		this.Settings = null;
		this.set_BoundsLookup(null);
		this.Tracks = null;
	}
	,RecreateCanvas: function() {
		if(this._currentRenderEngine != this.Settings.Engine) {
			if(this.Settings.Engine == null || !alphaTab.Environment.RenderEngines.hasOwnProperty(this.Settings.Engine)) {
				this.Canvas = alphaTab.Environment.RenderEngines["default"]();
			} else {
				this.Canvas = alphaTab.Environment.RenderEngines[this.Settings.Engine]();
			}
			this._currentRenderEngine = this.Settings.Engine;
			return true;
		}
		return false;
	}
	,RecreateLayout: function() {
		if(this._currentLayoutMode != this.Settings.Layout.Mode) {
			if(this.Settings.Layout == null || !alphaTab.Environment.LayoutEngines.hasOwnProperty(this.Settings.Layout.Mode)) {
				this.Layout = alphaTab.Environment.LayoutEngines["default"](this);
			} else {
				this.Layout = alphaTab.Environment.LayoutEngines[this.Settings.Layout.Mode](this);
			}
			this._currentLayoutMode = this.Settings.Layout.Mode;
			return true;
		}
		return false;
	}
	,Render: function(score,trackIndexes) {
		try {
			this.Score = score;
			var this1 = [];
			var tracks = this1;
			var track = new system.Int32ArrayIterator(trackIndexes);
			while(track.hasNext()) {
				var track1 = track.next();
				if(track1 >= 0 && track1 < score.Tracks.length) {
					tracks.push(score.Tracks[track1]);
				}
			}
			if(tracks.length == 0 && score.Tracks.length > 0) {
				tracks.push(score.Tracks[0]);
			}
			this.Tracks = tracks;
			this.Invalidate();
		} catch( e ) {
			if (e instanceof js._Boot.HaxeError) e = e.val;
			if( js.Boot.__instanceof(e,system.Exception) ) {
				this.OnError("render",e);
			} else throw(e);
		}
	}
	,RenderTracks: function(tracks) {
		if(tracks.length == 0) {
			this.Score = null;
		} else {
			this.Score = tracks[0].Score;
		}
		this.Tracks = tracks;
		this.Invalidate();
	}
	,UpdateSettings: function(settings) {
		this.Settings = settings;
	}
	,Invalidate: function() {
		if(this.Settings.Width == 0) {
			alphaTab.util.Logger.Warning("Rendering","AlphaTab skipped rendering because of width=0 (element invisible)",null);
			return;
		}
		this.set_BoundsLookup(new alphaTab.rendering.utils.BoundsLookup());
		if(this.Tracks.length == 0) {
			return;
		}
		this.RecreateCanvas();
		if(this.RenderingResources.Scale != this.Settings.Scale) {
			this.RenderingResources.Init(this.Settings.Scale);
			this.Canvas.set_LineWidth(this.Settings.Scale);
		}
		this.Canvas.set_Resources(this.RenderingResources);
		alphaTab.util.Logger.Info("Rendering","Rendering " + this.Tracks.length + " tracks",null);
		var i = 0;
		while(i < this.Tracks.length) {
			var track = this.Tracks[i];
			alphaTab.util.Logger.Info("Rendering","Track " + i + ": " + track.Name,null);
			++i;
		}
		this.OnPreRender();
		this.RecreateLayout();
		this.LayoutAndRender();
		this._renderedTracks = this.Tracks;
		alphaTab.util.Logger.Info("Rendering","Rendering finished",null);
	}
	,Resize: function(width) {
		if(this.RecreateLayout() || this.RecreateCanvas() || this._renderedTracks != this.Tracks || this.Tracks == null) {
			alphaTab.util.Logger.Info("Rendering","Starting full rerendering due to layout or canvas change",null);
			this.Invalidate();
		} else if(this.Layout.get_SupportsResize()) {
			alphaTab.util.Logger.Info("Rendering","Starting optimized rerendering for resize",null);
			this.set_BoundsLookup(new alphaTab.rendering.utils.BoundsLookup());
			this.OnPreRender();
			this.Settings.Width = width;
			this.Layout.Resize();
			this.Layout.RenderAnnotation();
			this.OnRenderFinished();
			this.OnPostRender();
		} else {
			alphaTab.util.Logger.Warning("Rendering","Current layout does not support dynamic resizing, nothing was done",null);
		}
		alphaTab.util.Logger.Info("Rendering","Resize finished",null);
	}
	,LayoutAndRender: function() {
		alphaTab.util.Logger.Info("Rendering","Rendering at scale " + this.Settings.Scale + " with layout " + this.Layout.get_Name(),null);
		this.Layout.LayoutAndRender();
		this.Layout.RenderAnnotation();
		this.OnRenderFinished();
		this.OnPostRender();
	}
	,add_PreRender: function(value) {
		return this.PreRender = system._EventAction1.EventAction1_Impl_.add(this.PreRender,value);
	}
	,remove_PreRender: function(value) {
		return this.PreRender = system._EventAction1.EventAction1_Impl_.sub(this.PreRender,value);
	}
	,OnPreRender: function() {
		var result = this.Canvas.OnPreRender();
		var _e = this.PreRender;
		var handler = function(p) {
			system._EventAction1.EventAction1_Impl_.Invoke(_e,p);
		};
		var args = new alphaTab.rendering.RenderFinishedEventArgs();
		args.TotalWidth = 0;
		args.TotalHeight = 0;
		args.Width = 0;
		args.Height = 0;
		args.RenderResult = result;
		if(handler != null) {
			handler(args);
		}
	}
	,add_PartialRenderFinished: function(value) {
		return this.PartialRenderFinished = system._EventAction1.EventAction1_Impl_.add(this.PartialRenderFinished,value);
	}
	,remove_PartialRenderFinished: function(value) {
		return this.PartialRenderFinished = system._EventAction1.EventAction1_Impl_.sub(this.PartialRenderFinished,value);
	}
	,OnPartialRenderFinished: function(e) {
		var _e = this.PartialRenderFinished;
		var handler = function(p) {
			system._EventAction1.EventAction1_Impl_.Invoke(_e,p);
		};
		if(handler != null) {
			handler(e);
		}
	}
	,add_RenderFinished: function(value) {
		return this.RenderFinished = system._EventAction1.EventAction1_Impl_.add(this.RenderFinished,value);
	}
	,remove_RenderFinished: function(value) {
		return this.RenderFinished = system._EventAction1.EventAction1_Impl_.sub(this.RenderFinished,value);
	}
	,OnRenderFinished: function() {
		var _gthis = this;
		var result = this.Canvas.OnRenderFinished();
		var _e = this.RenderFinished;
		var handler = function(p) {
			system._EventAction1.EventAction1_Impl_.Invoke(_e,p);
		};
		if(handler != null) {
			var _tmp = new alphaTab.rendering.RenderFinishedEventArgs();
			_tmp.RenderResult = result;
			_tmp.TotalHeight = _gthis.Layout.Height;
			_tmp.TotalWidth = _gthis.Layout.Width;
			handler(_tmp);
		}
	}
	,add_Error: function(value) {
		return this.Error = system._EventAction2.EventAction2_Impl_.add(this.Error,value);
	}
	,remove_Error: function(value) {
		return this.Error = system._EventAction2.EventAction2_Impl_.sub(this.Error,value);
	}
	,OnError: function(type,details) {
		var _e = this.Error;
		var handler = function(p1,p2) {
			system._EventAction2.EventAction2_Impl_.Invoke(_e,p1,p2);
		};
		if(handler != null) {
			handler(type,details);
		}
	}
	,add_PostRenderFinished: function(value) {
		return this.PostRenderFinished = system._EventAction.EventAction_Impl_.add(this.PostRenderFinished,value);
	}
	,remove_PostRenderFinished: function(value) {
		return this.PostRenderFinished = system._EventAction.EventAction_Impl_.sub(this.PostRenderFinished,value);
	}
	,OnPostRender: function() {
		var _e = this.PostRenderFinished;
		var handler = function() {
			system._EventAction.EventAction_Impl_.Invoke(_e);
		};
		if(handler != null) {
			handler();
		}
	}
	,__class__: alphaTab.rendering.ScoreRenderer
};
alphaTab.rendering.TabBarRenderer = $hx_exports["alphaTab"]["rendering"]["TabBarRenderer"] = function(renderer,bar) {
	alphaTab.rendering.BarRendererBase.call(this,renderer,bar);
	this.ShowTimeSignature = false;
	this.ShowRests = false;
	this.ShowTiedNotes = false;
	this.RenderRhythm = false;
	this.RhythmHeight = 0.0;
	this.RhythmBeams = false;
	this._startSpacing = false;
	this.RhythmHeight = 15 * renderer.Layout.get_Scale();
	this.RhythmBeams = true;
};
alphaTab.rendering.TabBarRenderer.__name__ = true;
alphaTab.rendering.TabBarRenderer.PaintSingleBar = function(canvas,x1,y1,x2,y2,size) {
	canvas.BeginPath();
	canvas.MoveTo(x1,y1);
	canvas.LineTo(x2,y2);
	canvas.LineTo(x2,y2 - size);
	canvas.LineTo(x1,y1 - size);
	canvas.ClosePath();
	canvas.Fill();
};
alphaTab.rendering.TabBarRenderer.__super__ = alphaTab.rendering.BarRendererBase;
alphaTab.rendering.TabBarRenderer.prototype = $extend(alphaTab.rendering.BarRendererBase.prototype,{
	get_LineOffset: function() {
		return (10 + 1) * this.get_Scale();
	}
	,GetNoteX: function(note,onEnd) {
		if(onEnd == null) {
			onEnd = true;
		}
		var beat = js.Boot.__cast(this.GetOnNotesGlyphForBeat(note.Beat) , alphaTab.rendering.glyphs.TabBeatGlyph);
		if(beat != null) {
			return beat.Container.X + beat.Container.VoiceContainer.X + beat.X + beat.NoteNumbers.GetNoteX(note,onEnd);
		}
		return 0;
	}
	,GetNoteY: function(note) {
		var beat = js.Boot.__cast(this.GetOnNotesGlyphForBeat(note.Beat) , alphaTab.rendering.glyphs.TabBeatGlyph);
		if(beat != null) {
			return beat.NoteNumbers.GetNoteY(note);
		}
		return 0;
	}
	,UpdateSizes: function() {
		var res = this.get_Resources();
		var this1 = 0.2;
		var numberOverflow = res.TablatureFont.Size / 2 + res.TablatureFont.Size * this1;
		this.TopPadding = numberOverflow;
		this.BottomPadding = numberOverflow;
		this.Height = this.get_LineOffset() * (this.Bar.Staff.Track.Tuning.length - 1) + numberOverflow * 2;
		if(this.RenderRhythm) {
			this.Height = this.Height + this.RhythmHeight;
			this.BottomPadding = this.BottomPadding + this.RhythmHeight;
		}
		alphaTab.rendering.BarRendererBase.prototype.UpdateSizes.call(this);
	}
	,CreatePreBeatGlyphs: function() {
		alphaTab.rendering.BarRendererBase.prototype.CreatePreBeatGlyphs.call(this);
		if(this.Bar.get_MasterBar().IsRepeatStart) {
			this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.RepeatOpenGlyph(0,0,1.5,3));
		}
		if(this.get_IsFirstOfLine()) {
			var this1 = 2;
			var center = (this.Bar.Staff.Track.Tuning.length + 1) / this1;
			this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.TabClefGlyph(5 * this.get_Scale(),this.GetTabY(center,0)));
		}
		if(this.ShowTimeSignature && (this.Bar.PreviousBar == null || this.Bar.PreviousBar != null && this.Bar.get_MasterBar().TimeSignatureNumerator != this.Bar.PreviousBar.get_MasterBar().TimeSignatureNumerator || this.Bar.PreviousBar != null && this.Bar.get_MasterBar().TimeSignatureDenominator != this.Bar.PreviousBar.get_MasterBar().TimeSignatureDenominator)) {
			this.CreateStartSpacing();
			this.CreateTimeSignatureGlyphs();
		}
		this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.BarNumberGlyph(0,this.GetTabY(-0.5,0),this.Bar.Index + 1));
		if(this.Bar.get_IsEmpty()) {
			this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,30 * this.get_Scale()));
		}
	}
	,CreateStartSpacing: function() {
		if(this._startSpacing) {
			return;
		}
		this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,2 * this.get_Scale()));
		this._startSpacing = true;
	}
	,CreateTimeSignatureGlyphs: function() {
		this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,5 * this.get_Scale()));
		this.AddPreBeatGlyph(new alphaTab.rendering.glyphs.TabTimeSignatureGlyph(0,this.GetTabY(0,0),this.Bar.get_MasterBar().TimeSignatureNumerator,this.Bar.get_MasterBar().TimeSignatureDenominator,this.Bar.get_MasterBar().TimeSignatureCommon));
	}
	,CreateBeatGlyphs: function() {
		var v = 0;
		while(v < this.Bar.Voices.length) {
			var voice = this.Bar.Voices[v];
			if(this.HasVoiceContainer(voice)) {
				this.CreateVoiceGlyphs(this.Bar.Voices[v]);
			}
			++v;
		}
	}
	,CreateVoiceGlyphs: function(v) {
		var i = 0;
		var j = v.Beats.length;
		while(i < j) {
			var b = v.Beats[i];
			var container = new alphaTab.rendering.glyphs.TabBeatContainerGlyph(b,this.GetOrCreateVoiceContainer(v));
			container.PreNotes = new alphaTab.rendering.glyphs.TabBeatPreNotesGlyph();
			container.OnNotes = new alphaTab.rendering.glyphs.TabBeatGlyph();
			this.AddBeatGlyph(container);
			++i;
		}
	}
	,CreatePostBeatGlyphs: function() {
		alphaTab.rendering.BarRendererBase.prototype.CreatePostBeatGlyphs.call(this);
		if(this.Bar.get_MasterBar().get_IsRepeatEnd()) {
			this.AddPostBeatGlyph(new alphaTab.rendering.glyphs.RepeatCloseGlyph(this.X,0));
			if(this.Bar.get_MasterBar().RepeatCount > 2) {
				this.AddPostBeatGlyph(new alphaTab.rendering.glyphs.RepeatCountGlyph(0,this.GetTabY(-0.5,-3),this.Bar.get_MasterBar().RepeatCount));
			}
		} else if(this.Bar.NextBar == null || !this.Bar.NextBar.get_MasterBar().IsRepeatStart) {
			this.AddPostBeatGlyph(new alphaTab.rendering.glyphs.BarSeperatorGlyph(0,0));
		}
	}
	,GetTabY: function(line,correction) {
		if(correction == null) {
			correction = 0;
		}
		return this.get_LineOffset() * line + correction * this.get_Scale();
	}
	,PaintBackground: function(cx,cy,canvas) {
		alphaTab.rendering.BarRendererBase.prototype.PaintBackground.call(this,cx,cy,canvas);
		var res = this.get_Resources();
		canvas.set_Color(res.StaveLineColor);
		var lineY = cy + this.Y + this.TopPadding;
		var padding = this.get_Scale();
		var this1 = [];
		var tabNotes = this1;
		var i = 0;
		var j = this.Bar.Staff.Track.Tuning.length;
		while(i < j) {
			var this2 = [];
			tabNotes.push(this2);
			++i;
		}
		var voice = $iterator(this.Bar.Voices)();
		while(voice.hasNext()) {
			var voice1 = voice.next();
			if(this.HasVoiceContainer(voice1)) {
				var vc = this.GetOrCreateVoiceContainer(voice1);
				var bg = $iterator(vc.BeatGlyphs)();
				while(bg.hasNext()) {
					var bg1 = bg.next();
					var notes = js.Boot.__cast(bg1.OnNotes , alphaTab.rendering.glyphs.TabBeatGlyph);
					var noteNumbers = notes.NoteNumbers;
					if(noteNumbers != null) {
						var this3 = noteNumbers.NotesPerString;
						var s = $iterator(Object.keys(this3))();
						while(s.hasNext()) {
							var s1 = s.next();
							var noteNumber = noteNumbers.NotesPerString[s1];
							if(!noteNumber.IsEmpty) {
								tabNotes[this.Bar.Staff.Track.Tuning.length - s1].push(new Float32Array([vc.X + bg1.X + notes.X + noteNumbers.X,noteNumbers.Width + padding]));
							}
						}
					}
				}
			}
		}
		var line = $iterator(tabNotes)();
		while(line.hasNext()) {
			var line1 = line.next();
			line1.sort((function(comparison) {
				return function(a,b) {
					return comparison[0](a,b);
				};
			})([(function() {
				return function(a1,b1) {
					if(a1[0] > b1[0]) {
						return 1;
					} else if(a1[0] < b1[0]) {
						return -1;
					} else {
						return 0;
					}
				};
			})()]));
		}
		var lineOffset = this.get_LineOffset();
		var i1 = 0;
		var j1 = this.Bar.Staff.Track.Tuning.length;
		while(i1 < j1) {
			if(i1 > 0) {
				lineY = lineY + lineOffset;
			}
			var lineX = 0;
			var line2 = $iterator(tabNotes[i1])();
			while(line2.hasNext()) {
				var line3 = line2.next();
				var tmp = cx + this.X + lineX;
				var this4 = system.Convert.ToInt32_Single(lineY);
				var tmp1 = this.get_Scale();
				canvas.FillRect(tmp,this4,line3[0] - lineX,tmp1);
				lineX = line3[0] + line3[1];
			}
			var tmp2 = cx + this.X + lineX;
			var this5 = system.Convert.ToInt32_Single(lineY);
			canvas.FillRect(tmp2,this5,this.Width - lineX,this.get_Scale());
			++i1;
		}
		canvas.set_Color(res.MainGlyphColor);
	}
	,Paint: function(cx,cy,canvas) {
		alphaTab.rendering.BarRendererBase.prototype.Paint.call(this,cx,cy,canvas);
		if(this.RenderRhythm) {
			this.PaintBeams(cx,cy,canvas);
		}
	}
	,PaintBeams: function(cx,cy,canvas) {
		var i = 0;
		var j = this.Helpers.BeamHelpers.length;
		while(i < j) {
			var v = this.Helpers.BeamHelpers[i];
			var k = 0;
			var l = v.length;
			while(k < l) {
				var h = v[k];
				this.PaintBeamHelper(cx + this.get_BeatGlyphsStart(),cy,canvas,h);
				++k;
			}
			++i;
		}
	}
	,PaintBeamHelper: function(cx,cy,canvas,h) {
		canvas.set_Color(h.Voice.Index == 0 ? this.get_Resources().MainGlyphColor : this.get_Resources().SecondaryGlyphColor);
		if(h.Beats.length == 1 || !this.RhythmBeams) {
			this.PaintFooter(cx,cy,canvas,h);
		} else {
			this.PaintBar(cx,cy,canvas,h);
		}
	}
	,PaintBar: function(cx,cy,canvas,h) {
		var i = 0;
		var j = h.Beats.length;
		while(i < j) {
			var beat = h.Beats[i];
			if(h.HasBeatLineX(beat)) {
				var beatLineX = h.GetBeatLineX(beat);
				var y1 = cy + this.Y;
				var y2 = cy + this.Y + this.Height;
				var startGlyph = js.Boot.__cast(this.GetOnNotesGlyphForBeat(beat) , alphaTab.rendering.glyphs.TabBeatGlyph);
				if(startGlyph.NoteNumbers == null) {
					y1 = y1 + (this.Height - this.RhythmHeight);
				} else {
					y1 = y1 + (startGlyph.NoteNumbers.GetNoteY(startGlyph.NoteNumbers.MinStringNote) + this.get_LineOffset() / 2);
				}
				if(h.Direction == 0) {
					var this1 = 2;
					beatLineX = beatLineX - startGlyph.Width / this1;
				} else {
					var this2 = 2;
					beatLineX = beatLineX + startGlyph.Width / this2;
				}
				canvas.BeginPath();
				canvas.MoveTo(cx + this.X + beatLineX,y1);
				canvas.LineTo(cx + this.X + beatLineX,y2);
				canvas.Stroke();
				var brokenBarOffset = 6 * this.get_Scale();
				var barSpacing = 6 * this.get_Scale();
				var barSize = 3 * this.get_Scale();
				var barCount = alphaTab.model.ModelUtils.GetIndex(beat.Duration) - 2;
				var barStart = cy + this.Y;
				barSpacing = -barSpacing;
				barStart = barStart + this.Height;
				var barIndex = 0;
				while(barIndex < barCount) {
					var barStartX;
					var barEndX;
					var barStartY;
					var barEndY;
					var barY = barStart + barIndex * barSpacing;
					if(h.Beats.length == 1) {
						barStartX = beatLineX;
						barEndX = beatLineX + brokenBarOffset;
						barStartY = barY;
						barEndY = barY;
						alphaTab.rendering.TabBarRenderer.PaintSingleBar(canvas,cx + this.X + barStartX,barStartY,cx + this.X + barEndX,barEndY,barSize);
					} else if(i < h.Beats.length - 1) {
						if(alphaTab.rendering.utils.BeamingHelper.IsFullBarJoin(beat,h.Beats[i + 1],barIndex)) {
							barStartX = beatLineX;
							barEndX = h.GetBeatLineX(h.Beats[i + 1]) + this.get_Scale();
							var endGlyph = this.GetOnNotesGlyphForBeat(h.Beats[i + 1]);
							if(h.Direction == 0) {
								var this3 = 2;
								barEndX = barEndX - endGlyph.Width / this3;
							} else {
								var this4 = 2;
								barEndX = barEndX + endGlyph.Width / this4;
							}
						} else if(i == 0 || !alphaTab.rendering.utils.BeamingHelper.IsFullBarJoin(h.Beats[i - 1],beat,barIndex)) {
							barStartX = beatLineX;
							barEndX = barStartX + brokenBarOffset;
						} else {
							++barIndex;
							continue;
						}
						barStartY = barY;
						barEndY = barY;
						alphaTab.rendering.TabBarRenderer.PaintSingleBar(canvas,cx + this.X + barStartX,barStartY,cx + this.X + barEndX,barEndY,barSize);
					} else if(i > 0 && !alphaTab.rendering.utils.BeamingHelper.IsFullBarJoin(beat,h.Beats[i - 1],barIndex)) {
						barStartX = beatLineX - brokenBarOffset;
						barEndX = beatLineX;
						barStartY = barY;
						barEndY = barY;
						alphaTab.rendering.TabBarRenderer.PaintSingleBar(canvas,cx + this.X + barStartX,barStartY,cx + this.X + barEndX,barEndY,barSize);
					}
					++barIndex;
				}
			}
			++i;
		}
	}
	,PaintFooter: function(cx,cy,canvas,h) {
		var beat = $iterator(h.Beats)();
		while(beat.hasNext()) {
			var beat1 = beat.next();
			if(beat1.Duration == 1 || beat1.Duration == -2 || beat1.Duration == -4) {
				return;
			}
			var beatLineX = h.GetBeatLineX(beat1);
			var y1 = cy + this.Y;
			var y2 = cy + this.Y + this.Height;
			var startGlyph = js.Boot.__cast(this.GetOnNotesGlyphForBeat(beat1) , alphaTab.rendering.glyphs.TabBeatGlyph);
			if(startGlyph.NoteNumbers == null) {
				y1 = y1 + (this.Height - this.RhythmHeight);
			} else {
				y1 = y1 + (startGlyph.NoteNumbers.GetNoteY(startGlyph.NoteNumbers.MinStringNote) + this.get_LineOffset() / 2);
			}
			if(h.Direction == 0) {
				var this1 = 2;
				beatLineX = beatLineX - startGlyph.Width / this1;
			} else {
				var this2 = 2;
				beatLineX = beatLineX + startGlyph.Width / this2;
			}
			canvas.BeginPath();
			canvas.MoveTo(cx + this.X + beatLineX,y1);
			canvas.LineTo(cx + this.X + beatLineX,y2);
			canvas.Stroke();
			if(beat1.Duration > 4) {
				var glyph = new alphaTab.rendering.glyphs.BeamGlyph(0,0,beat1.Duration,1,false);
				glyph.Renderer = this;
				glyph.DoLayout();
				glyph.Paint(cx + this.X + beatLineX,y2,canvas);
			}
		}
	}
	,__class__: alphaTab.rendering.TabBarRenderer
});
alphaTab.rendering.glyphs.EffectGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["EffectGlyph"] = function(x,y) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this.Beat = null;
	this.NextGlyph = null;
	this.PreviousGlyph = null;
	this.Height = 0.0;
};
alphaTab.rendering.glyphs.EffectGlyph.__name__ = true;
alphaTab.rendering.glyphs.EffectGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.EffectGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	__class__: alphaTab.rendering.glyphs.EffectGlyph
});
alphaTab.rendering.glyphs.MusicFontGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["MusicFontGlyph"] = function(x,y,glyphScale,symbol) {
	alphaTab.rendering.glyphs.EffectGlyph.call(this,x,y);
	this.GlyphScale = 0.0;
	this._symbol = null;
	this.GlyphScale = glyphScale;
	this._symbol = symbol;
};
alphaTab.rendering.glyphs.MusicFontGlyph.__name__ = true;
alphaTab.rendering.glyphs.MusicFontGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.MusicFontGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	Paint: function(cx,cy,canvas) {
		canvas.FillMusicFontSymbol(cx + this.X,cy + this.Y,this.GlyphScale * this.get_Scale(),this._symbol);
	}
	,__class__: alphaTab.rendering.glyphs.MusicFontGlyph
});
alphaTab.rendering.glyphs.AccentuationGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["AccentuationGlyph"] = function(x,y,accentuation) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,1,alphaTab.rendering.glyphs.AccentuationGlyph.GetSymbol(accentuation));
};
alphaTab.rendering.glyphs.AccentuationGlyph.__name__ = true;
alphaTab.rendering.glyphs.AccentuationGlyph.GetSymbol = function(accentuation) {
	switch(accentuation) {
	case 0:
		return -1;
	case 1:
		return 58528;
	case 2:
		return 58540;
	default:
		return -1;
	}
};
alphaTab.rendering.glyphs.AccentuationGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.AccentuationGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 9 * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.AccentuationGlyph
});
alphaTab.rendering.glyphs.GlyphGroup = $hx_exports["alphaTab"]["rendering"]["glyphs"]["GlyphGroup"] = function(x,y) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this.Glyphs = null;
};
alphaTab.rendering.glyphs.GlyphGroup.__name__ = true;
alphaTab.rendering.glyphs.GlyphGroup.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.GlyphGroup.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	get_IsEmpty: function() {
		if(this.Glyphs != null) {
			return this.Glyphs.length == 0;
		} else {
			return true;
		}
	}
	,DoLayout: function() {
		if(this.Glyphs == null || this.Glyphs.length == 0) {
			this.Width = 0;
			return;
		}
		var w = 0;
		var i = 0;
		var j = this.Glyphs.length;
		while(i < j) {
			var g = this.Glyphs[i];
			g.Renderer = this.Renderer;
			g.DoLayout();
			w = Math.max(w,g.Width);
			++i;
		}
		this.Width = w;
	}
	,AddGlyph: function(g) {
		if(this.Glyphs == null) {
			var this1 = [];
			this.Glyphs = this1;
		}
		this.Glyphs.push(g);
	}
	,Paint: function(cx,cy,canvas) {
		var glyphs = this.Glyphs;
		if(glyphs == null || glyphs.length == 0) {
			return;
		}
		var g = $iterator(glyphs)();
		while(g.hasNext()) {
			var g1 = g.next();
			g1.Paint(cx + this.X,cy + this.Y,canvas);
		}
	}
	,__class__: alphaTab.rendering.glyphs.GlyphGroup
});
alphaTab.rendering.glyphs.AccidentalGroupGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["AccidentalGroupGlyph"] = function() {
	alphaTab.rendering.glyphs.GlyphGroup.call(this,0,0);
};
alphaTab.rendering.glyphs.AccidentalGroupGlyph.__name__ = true;
alphaTab.rendering.glyphs.AccidentalGroupGlyph.__super__ = alphaTab.rendering.glyphs.GlyphGroup;
alphaTab.rendering.glyphs.AccidentalGroupGlyph.prototype = $extend(alphaTab.rendering.glyphs.GlyphGroup.prototype,{
	DoLayout: function() {
		if(this.Glyphs == null) {
			this.Width = 0;
			return;
		}
		var comparison = function(a,b) {
			if(a.Y < b.Y) {
				return -1;
			}
			if(a.Y > b.Y) {
				return 1;
			}
			return 0;
		};
		this.Glyphs.sort(function(a1,b1) {
			return comparison(a1,b1);
		});
		var this1 = [];
		var columns = this1;
		var this2 = -3000;
		columns.push(this2);
		var accidentalSize = 21 * this.get_Scale();
		var i = 0;
		var j = this.Glyphs.length;
		while(i < j) {
			var g = this.Glyphs[i];
			g.Renderer = this.Renderer;
			g.DoLayout();
			var gColumn = 0;
			while(columns[gColumn] > g.Y) {
				++gColumn;
				if(gColumn == columns.length) {
					var this3 = -3000;
					columns.push(this3);
				}
			}
			var this4 = gColumn;
			g.X = this4;
			columns[gColumn] = g.Y + accidentalSize;
			++i;
		}
		var columnWidth = 8 * this.get_Scale();
		var padding = 2 * this.get_Scale();
		if(this.Glyphs.length == 0) {
			this.Width = 0;
		} else {
			this.Width = padding + columnWidth * columns.length;
		}
		var i1 = 0;
		var j1 = this.Glyphs.length;
		while(i1 < j1) {
			var g1 = this.Glyphs[i1];
			g1.X = padding + (this.Width - (g1.X + 1) * columnWidth);
			++i1;
		}
	}
	,__class__: alphaTab.rendering.glyphs.AccidentalGroupGlyph
});
alphaTab.rendering.glyphs.AlternateEndingsGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["AlternateEndingsGlyph"] = function(x,y,alternateEndings) {
	alphaTab.rendering.glyphs.EffectGlyph.call(this,x,y);
	this._endings = null;
	this._endingsString = null;
	var this1 = [];
	this._endings = this1;
	var i = 0;
	while(i < 8) {
		if((alternateEndings & 1 << i) != 0) {
			this._endings.push(i);
		}
		++i;
	}
};
alphaTab.rendering.glyphs.AlternateEndingsGlyph.__name__ = true;
alphaTab.rendering.glyphs.AlternateEndingsGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.AlternateEndingsGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.EffectGlyph.prototype.DoLayout.call(this);
		this.Height = this.Renderer.get_Resources().WordsFont.Size + (3 * this.get_Scale() + 2);
		var this1 = "";
		var endingsStrings = this1;
		var i = 0;
		var j = this._endings.length;
		while(i < j) {
			endingsStrings += Std.string(this._endings[i] + 1);
			endingsStrings += Std.string(". ");
			++i;
		}
		this._endingsString = endingsStrings;
	}
	,Paint: function(cx,cy,canvas) {
		alphaTab.rendering.glyphs.EffectGlyph.prototype.Paint.call(this,cx,cy,canvas);
		if(this._endings.length > 0) {
			var res = this.Renderer.get_Resources();
			canvas.set_Font(res.WordsFont);
			canvas.MoveTo(cx + this.X,cy + this.Y + this.Height);
			canvas.LineTo(cx + this.X,cy + this.Y);
			canvas.LineTo(cx + this.X + this.Width,cy + this.Y);
			canvas.Stroke();
			canvas.FillText(this._endingsString,cx + this.X + 3 * this.get_Scale(),cy + this.Y * this.get_Scale());
		}
	}
	,__class__: alphaTab.rendering.glyphs.AlternateEndingsGlyph
});
alphaTab.rendering.glyphs.BarNumberGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["BarNumberGlyph"] = function(x,y,number) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this._number = 0;
	this._number = number;
};
alphaTab.rendering.glyphs.BarNumberGlyph.__name__ = true;
alphaTab.rendering.glyphs.BarNumberGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.BarNumberGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Renderer.ScoreRenderer.Canvas.set_Font(this.Renderer.get_Resources().BarNumberFont);
		this.Width = this.Renderer.ScoreRenderer.Canvas.MeasureText(Std.string(this._number)) + 5 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		if(!this.Renderer.Staff.IsFirstInAccolade) {
			return;
		}
		var res = this.Renderer.get_Resources();
		canvas.set_Color(res.BarNumberColor);
		canvas.set_Font(res.BarNumberFont);
		canvas.FillText(Std.string(this._number),cx + this.X,cy + this.Y);
		canvas.set_Color(res.MainGlyphColor);
	}
	,__class__: alphaTab.rendering.glyphs.BarNumberGlyph
});
alphaTab.rendering.glyphs.BarSeperatorGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["BarSeperatorGlyph"] = function(x,y) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
};
alphaTab.rendering.glyphs.BarSeperatorGlyph.__name__ = true;
alphaTab.rendering.glyphs.BarSeperatorGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.BarSeperatorGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 8 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var blockWidth = 4 * this.get_Scale();
		var top = cy + this.Y + this.Renderer.TopPadding;
		var bottom = cy + this.Y + this.Renderer.Height - this.Renderer.BottomPadding;
		var left = system.Convert.ToInt32_Single(cx + this.X);
		var h = bottom - top;
		if(this.Renderer.get_IsLast()) {
			var this1 = left;
			canvas.FillRect(this1,top,this.get_Scale(),h);
			canvas.FillRect(left + this.Width - blockWidth,top,blockWidth,h);
		} else {
			canvas.FillRect(left + this.Width,top,this.get_Scale(),h);
			if(this.Renderer.Bar.get_MasterBar().IsDoubleBar) {
				canvas.FillRect(left + this.Width - 5 * this.get_Scale(),top,this.get_Scale(),h);
			}
		}
	}
	,__class__: alphaTab.rendering.glyphs.BarSeperatorGlyph
});
alphaTab.rendering.glyphs.BeamGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["BeamGlyph"] = function(x,y,duration,direction,isGrace) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,alphaTab.rendering.glyphs.BeamGlyph.GetSymbol(duration,direction,isGrace));
};
alphaTab.rendering.glyphs.BeamGlyph.__name__ = true;
alphaTab.rendering.glyphs.BeamGlyph.GetSymbol = function(duration,direction,isGrace) {
	if(direction == 0) {
		switch(duration) {
		case 8:
			return 57920;
		case 16:
			return 57922;
		case 32:
			return 57924;
		case 64:
			return 57926;
		case 128:
			return 57928;
		case 256:
			return 57930;
		default:
			return 57920;
		}
	} else {
		switch(duration) {
		case 8:
			return 57921;
		case 16:
			return 57923;
		case 32:
			return 57925;
		case 64:
			return 57927;
		case 128:
			return 57929;
		case 256:
			return 57929;
		default:
			return 57921;
		}
	}
};
alphaTab.rendering.glyphs.BeamGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.BeamGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 0;
	}
	,__class__: alphaTab.rendering.glyphs.BeamGlyph
});
alphaTab.rendering.glyphs.BeatGlyphBase = $hx_exports["alphaTab"]["rendering"]["glyphs"]["BeatGlyphBase"] = function() {
	alphaTab.rendering.glyphs.GlyphGroup.call(this,0,0);
	this.Container = null;
};
alphaTab.rendering.glyphs.BeatGlyphBase.__name__ = true;
alphaTab.rendering.glyphs.BeatGlyphBase.__super__ = alphaTab.rendering.glyphs.GlyphGroup;
alphaTab.rendering.glyphs.BeatGlyphBase.prototype = $extend(alphaTab.rendering.glyphs.GlyphGroup.prototype,{
	DoLayout: function() {
		var w = 0;
		if(this.Glyphs != null) {
			var i = 0;
			var j = this.Glyphs.length;
			while(i < j) {
				var g = this.Glyphs[i];
				g.X = w;
				g.Renderer = this.Renderer;
				g.DoLayout();
				w = w + g.Width;
				++i;
			}
		}
		this.Width = w;
	}
	,NoteLoop: function(action) {
		var i = this.Container.Beat.Notes.length - 1;
		while(i >= 0) {
			action(this.Container.Beat.Notes[i]);
			--i;
		}
	}
	,__class__: alphaTab.rendering.glyphs.BeatGlyphBase
});
alphaTab.rendering.glyphs.BeatOnNoteGlyphBase = $hx_exports["alphaTab"]["rendering"]["glyphs"]["BeatOnNoteGlyphBase"] = function() {
	alphaTab.rendering.glyphs.BeatGlyphBase.call(this);
};
alphaTab.rendering.glyphs.BeatOnNoteGlyphBase.__name__ = true;
alphaTab.rendering.glyphs.BeatOnNoteGlyphBase.__super__ = alphaTab.rendering.glyphs.BeatGlyphBase;
alphaTab.rendering.glyphs.BeatOnNoteGlyphBase.prototype = $extend(alphaTab.rendering.glyphs.BeatGlyphBase.prototype,{
	UpdateBeamingHelper: function() {
	}
	,__class__: alphaTab.rendering.glyphs.BeatOnNoteGlyphBase
});
alphaTab.rendering.glyphs.BendGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["BendGlyph"] = function(n,bendValueHeight) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this._note = null;
	this._bendValueHeight = 0.0;
	this._note = n;
	this._bendValueHeight = bendValueHeight;
};
alphaTab.rendering.glyphs.BendGlyph.__name__ = true;
alphaTab.rendering.glyphs.BendGlyph.GetFractionSign = function(steps) {
	switch(steps) {
	case 1:
		return "¼";
	case 2:
		return "½";
	case 3:
		return "¾";
	default:
		return Std.string(steps) + "/ 4";
	}
};
alphaTab.rendering.glyphs.BendGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.BendGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	Paint: function(cx,cy,canvas) {
		var dX = this.Width / 60;
		var maxValue = 0;
		var i = 0;
		var j = this._note.BendPoints.length;
		while(i < j) {
			if(this._note.BendPoints[i].Value > maxValue) {
				maxValue = this._note.BendPoints[i].Value;
			}
			++i;
		}
		cx = cx + this.X;
		cy = cy + this.Y;
		canvas.BeginPath();
		var i1 = 0;
		var j1 = this._note.BendPoints.length - 1;
		while(i1 < j1) {
			var firstPt = this._note.BendPoints[i1];
			var secondPt = this._note.BendPoints[i1 + 1];
			if(i1 == 0 && firstPt.Value != 0 && !this._note.IsTieDestination) {
				this.PaintBend(new alphaTab.model.BendPoint(0,0),firstPt,cx,cy,dX,canvas);
			}
			if(firstPt.Value == secondPt.Value && i1 == this._note.BendPoints.length - 2) {
				++i1;
				continue;
			}
			this.PaintBend(firstPt,secondPt,cx,cy,dX,canvas);
			++i1;
		}
	}
	,PaintBend: function(firstPt,secondPt,cx,cy,dX,canvas) {
		var r = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		var res = this.Renderer.get_Resources();
		var overflowOffset = r.get_LineOffset() / 2;
		var x1 = cx + dX * firstPt.Offset;
		var y1 = cy - this._bendValueHeight * firstPt.Value;
		if(firstPt.Value == 0) {
			y1 = y1 + r.GetNoteY(this._note);
		} else {
			y1 = y1 + overflowOffset;
		}
		var x2 = cx + dX * secondPt.Offset;
		var y2 = cy - this._bendValueHeight * secondPt.Value;
		if(secondPt.Value == 0) {
			y2 = y2 + r.GetNoteY(this._note);
		} else {
			y2 = y2 + overflowOffset;
		}
		var arrowOffset = 0;
		var arrowSize = 6 * this.get_Scale();
		if(secondPt.Value > firstPt.Value) {
			canvas.BeginPath();
			canvas.MoveTo(x2,y2);
			var this1 = 0.5;
			canvas.LineTo(x2 - arrowSize * this1,y2 + arrowSize);
			var this2 = 0.5;
			canvas.LineTo(x2 + arrowSize * this2,y2 + arrowSize);
			canvas.ClosePath();
			canvas.Fill();
			arrowOffset = arrowSize;
		} else if(secondPt.Value != firstPt.Value) {
			canvas.BeginPath();
			canvas.MoveTo(x2,y2);
			var this3 = 0.5;
			canvas.LineTo(x2 - arrowSize * this3,y2 - arrowSize);
			var this4 = 0.5;
			canvas.LineTo(x2 + arrowSize * this4,y2 - arrowSize);
			canvas.ClosePath();
			canvas.Fill();
			arrowOffset = -arrowSize;
		}
		canvas.Stroke();
		if(firstPt.Value == secondPt.Value) {
			canvas.MoveTo(x1,y1);
			canvas.LineTo(x2,y2);
			canvas.Stroke();
		} else if(x2 > x1) {
			canvas.MoveTo(x1,y1);
			canvas.BezierCurveTo(x2,y1,x2,y2 + arrowOffset,x2,y2 + arrowOffset);
			canvas.Stroke();
		} else {
			canvas.MoveTo(x1,y1);
			canvas.LineTo(x2,y2);
			canvas.Stroke();
		}
		if(secondPt.Value != 0) {
			var dV = secondPt.Value;
			var up = secondPt.Value > firstPt.Value;
			dV = Math.abs(dV);
			var s = "";
			if(dV == 4 && up) {
				s = "full";
				dV = dV - 4;
			} else if(dV >= 4 || dV <= -4) {
				var steps = dV / 4 | 0;
				s = s + Std.string(steps);
				dV = dV - steps * 4;
			}
			if(dV > 0) {
				s = s + alphaTab.rendering.glyphs.BendGlyph.GetFractionSign(dV);
			}
			if(s != "") {
				if(!up) {
					s = "-" + s;
				}
				canvas.set_Font(res.TablatureFont);
				var size = canvas.MeasureText(s);
				var y = up ? y2 - res.TablatureFont.Size - 2 * this.get_Scale() : y2 + 2 * this.get_Scale();
				var x = x2 - size / 2;
				canvas.FillText(s,x,y);
			}
		}
	}
	,__class__: alphaTab.rendering.glyphs.BendGlyph
});
alphaTab.rendering.glyphs.ChineseCymbalGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ChineseCymbalGlyph"] = function(x,y,isGrace) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57564);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.ChineseCymbalGlyph.__name__ = true;
alphaTab.rendering.glyphs.ChineseCymbalGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.ChineseCymbalGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 9 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.ChineseCymbalGlyph
});
alphaTab.rendering.glyphs.CircleGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["CircleGlyph"] = function(x,y,size) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this._size = 0.0;
	this._size = size;
};
alphaTab.rendering.glyphs.CircleGlyph.__name__ = true;
alphaTab.rendering.glyphs.CircleGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.CircleGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = this._size + 3 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		canvas.FillCircle(cx + this.X,cy + this.Y,this._size);
	}
	,__class__: alphaTab.rendering.glyphs.CircleGlyph
});
alphaTab.rendering.glyphs.ClefGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ClefGlyph"] = function(x,y,clef,clefOttavia) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,1,alphaTab.rendering.glyphs.ClefGlyph.GetSymbol(clef));
	this._clef = null;
	this._clefOttavia = null;
	this._clef = clef;
	this._clefOttavia = clefOttavia;
};
alphaTab.rendering.glyphs.ClefGlyph.__name__ = true;
alphaTab.rendering.glyphs.ClefGlyph.GetSymbol = function(clef) {
	switch(clef) {
	case 0:
		return 57449;
	case 1:
		return 57436;
	case 2:
		return 57436;
	case 3:
		return 57442;
	case 4:
		return 57424;
	default:
		return -1;
	}
};
alphaTab.rendering.glyphs.ClefGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.ClefGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		var _g = this._clef;
		switch(_g) {
		case 0:
			this.Width = 15 * this.get_Scale();
			break;
		case 1:case 2:case 3:case 4:
			this.Width = 28 * this.get_Scale();
			break;
		default:
		}
	}
	,Paint: function(cx,cy,canvas) {
		alphaTab.rendering.glyphs.MusicFontGlyph.prototype.Paint.call(this,cx,cy,canvas);
		var numberGlyph;
		var top = false;
		var _g = this._clefOttavia;
		switch(_g) {
		case 0:
			numberGlyph = new alphaTab.rendering.glyphs.NumberGlyph(this.Width / 2,0,15,0.5);
			top = true;
			break;
		case 1:
			numberGlyph = new alphaTab.rendering.glyphs.NumberGlyph(0,0,8,0.5);
			top = true;
			break;
		case 3:
			numberGlyph = new alphaTab.rendering.glyphs.NumberGlyph(0,0,8,0.5);
			break;
		case 4:
			numberGlyph = new alphaTab.rendering.glyphs.NumberGlyph(0,0,15,0.5);
			break;
		default:
			return;
		}
		var offset;
		var _g1 = this._clef;
		switch(_g1) {
		case 0:
			if(top) {
				offset = -25;
			} else {
				offset = 10;
			}
			break;
		case 1:
			if(top) {
				offset = -30;
			} else {
				offset = 20;
			}
			break;
		case 2:
			if(top) {
				offset = -30;
			} else {
				offset = 20;
			}
			break;
		case 3:
			if(top) {
				offset = -25;
			} else {
				offset = 20;
			}
			break;
		case 4:
			if(top) {
				offset = -50;
			} else {
				offset = 25;
			}
			break;
		default:
			return;
		}
		numberGlyph.Renderer = this.Renderer;
		numberGlyph.DoLayout();
		var x = (this.Width - numberGlyph.Width) / 2;
		numberGlyph.Paint(cx + this.X + x,cy + this.Y + offset * this.get_Scale(),canvas);
	}
	,__class__: alphaTab.rendering.glyphs.ClefGlyph
});
alphaTab.rendering.glyphs.GroupedEffectGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["GroupedEffectGlyph"] = function(endPosition) {
	alphaTab.rendering.glyphs.EffectGlyph.call(this,0,0);
	this._endPosition = null;
	this._endPosition = endPosition;
};
alphaTab.rendering.glyphs.GroupedEffectGlyph.__name__ = true;
alphaTab.rendering.glyphs.GroupedEffectGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.GroupedEffectGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	get_IsLinkedWithPrevious: function() {
		if(this.PreviousGlyph != null) {
			return this.PreviousGlyph.Renderer.Staff.StaveGroup == this.Renderer.Staff.StaveGroup;
		} else {
			return false;
		}
	}
	,get_IsLinkedWithNext: function() {
		if(this.NextGlyph != null && this.NextGlyph.Renderer.IsFinalized) {
			return this.NextGlyph.Renderer.Staff.StaveGroup == this.Renderer.Staff.StaveGroup;
		} else {
			return false;
		}
	}
	,Paint: function(cx,cy,canvas) {
		if(this.get_IsLinkedWithPrevious()) {
			return;
		}
		if(!this.get_IsLinkedWithNext()) {
			this.PaintNonGrouped(cx,cy,canvas);
			return;
		}
		var lastLinkedGlyph = js.Boot.__cast(this.NextGlyph , alphaTab.rendering.glyphs.GroupedEffectGlyph);
		while(lastLinkedGlyph.get_IsLinkedWithNext()) lastLinkedGlyph = js.Boot.__cast(lastLinkedGlyph.NextGlyph , alphaTab.rendering.glyphs.GroupedEffectGlyph);
		var cxRenderer = cx - this.Renderer.X;
		var endRenderer = lastLinkedGlyph.Renderer;
		var endBeatX = endRenderer.GetBeatX(lastLinkedGlyph.Beat,this._endPosition);
		var endX = cxRenderer + endRenderer.X + endBeatX;
		this.PaintGrouped(cx,cy,endX,canvas);
	}
	,PaintNonGrouped: function(cx,cy,canvas) {
		var endBeatX = this.Renderer.GetBeatX(this.Beat,3);
		var endX = cx + endBeatX;
		this.PaintGrouped(cx,cy,endX,canvas);
	}
	,PaintGrouped: function(cx,cy,endX,canvas) {
		throw new js._Boot.HaxeError("abstract");
	}
	,__class__: alphaTab.rendering.glyphs.GroupedEffectGlyph
});
alphaTab.rendering.glyphs.CrescendoGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["CrescendoGlyph"] = function(x,y,crescendo) {
	alphaTab.rendering.glyphs.GroupedEffectGlyph.call(this,3);
	this._crescendo = null;
	this._crescendo = crescendo;
	this.X = x;
	this.Y = y;
};
alphaTab.rendering.glyphs.CrescendoGlyph.__name__ = true;
alphaTab.rendering.glyphs.CrescendoGlyph.__super__ = alphaTab.rendering.glyphs.GroupedEffectGlyph;
alphaTab.rendering.glyphs.CrescendoGlyph.prototype = $extend(alphaTab.rendering.glyphs.GroupedEffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.GroupedEffectGlyph.prototype.DoLayout.call(this);
		this.Height = 17 * this.get_Scale();
	}
	,PaintGrouped: function(cx,cy,endX,canvas) {
		var startX = cx + this.X;
		var height = this.Height * this.get_Scale();
		canvas.BeginPath();
		if(this._crescendo == 1) {
			canvas.MoveTo(endX,cy + this.Y);
			canvas.LineTo(startX,cy + this.Y + height / 2);
			canvas.LineTo(endX,cy + this.Y + height);
		} else {
			canvas.MoveTo(cx + this.X,cy + this.Y);
			canvas.LineTo(endX,cy + this.Y + height / 2);
			canvas.LineTo(cx + this.X,cy + this.Y + height);
		}
		canvas.Stroke();
	}
	,__class__: alphaTab.rendering.glyphs.CrescendoGlyph
});
alphaTab.rendering.glyphs.DeadNoteHeadGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["DeadNoteHeadGlyph"] = function(x,y,isGrace) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57514);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.DeadNoteHeadGlyph.__name__ = true;
alphaTab.rendering.glyphs.DeadNoteHeadGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.DeadNoteHeadGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 9 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.DeadNoteHeadGlyph
});
alphaTab.rendering.glyphs.DiamondNoteHeadGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["DiamondNoteHeadGlyph"] = function(x,y,isGrace) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57564);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.DiamondNoteHeadGlyph.__name__ = true;
alphaTab.rendering.glyphs.DiamondNoteHeadGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.DiamondNoteHeadGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 9 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.DiamondNoteHeadGlyph
});
alphaTab.rendering.glyphs.DigitGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["DigitGlyph"] = function(x,y,digit,scale) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,scale,alphaTab.rendering.glyphs.DigitGlyph.GetSymbol(digit));
	this._digit = 0;
	this._scale = 0.0;
	this._digit = digit;
	this._scale = scale;
};
alphaTab.rendering.glyphs.DigitGlyph.__name__ = true;
alphaTab.rendering.glyphs.DigitGlyph.GetSymbol = function(digit) {
	switch(digit) {
	case 0:
		return 57472;
	case 1:
		return 57473;
	case 2:
		return 57474;
	case 3:
		return 57475;
	case 4:
		return 57476;
	case 5:
		return 57477;
	case 6:
		return 57478;
	case 7:
		return 57479;
	case 8:
		return 57480;
	case 9:
		return 57481;
	default:
		return -1;
	}
};
alphaTab.rendering.glyphs.DigitGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.DigitGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Y = this.Y + 7 * this.get_Scale();
		this.Width = this.GetDigitWidth(this._digit) * this.get_Scale() * this._scale;
	}
	,GetDigitWidth: function(digit) {
		switch(digit) {
		case 1:
			return 10;
		case 0:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:
			return 14;
		default:
			return 0;
		}
	}
	,__class__: alphaTab.rendering.glyphs.DigitGlyph
});
alphaTab.rendering.glyphs.DrumSticksGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["DrumSticksGlyph"] = function(x,y,isGrace) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57513);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.DrumSticksGlyph.__name__ = true;
alphaTab.rendering.glyphs.DrumSticksGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.DrumSticksGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 9 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.DrumSticksGlyph
});
alphaTab.rendering.glyphs.DynamicsGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["DynamicsGlyph"] = function(x,y,dynamics) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,0.6,alphaTab.rendering.glyphs.DynamicsGlyph.GetSymbol(dynamics));
};
alphaTab.rendering.glyphs.DynamicsGlyph.__name__ = true;
alphaTab.rendering.glyphs.DynamicsGlyph.GetSymbol = function(dynamics) {
	switch(dynamics) {
	case 0:
		return 58666;
	case 1:
		return 58667;
	case 2:
		return 58656;
	case 3:
		return 58668;
	case 4:
		return 58669;
	case 5:
		return 58658;
	case 6:
		return 58672;
	case 7:
		return 58672;
	default:
		return -1;
	}
};
alphaTab.rendering.glyphs.DynamicsGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.DynamicsGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.MusicFontGlyph.prototype.DoLayout.call(this);
		this.Height = 17 * this.get_Scale();
		this.Y = this.Y + this.Height / 2;
	}
	,__class__: alphaTab.rendering.glyphs.DynamicsGlyph
});
alphaTab.rendering.glyphs.FadeInGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["FadeInGlyph"] = function(x,y) {
	alphaTab.rendering.glyphs.EffectGlyph.call(this,x,y);
};
alphaTab.rendering.glyphs.FadeInGlyph.__name__ = true;
alphaTab.rendering.glyphs.FadeInGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.FadeInGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.EffectGlyph.prototype.DoLayout.call(this);
		this.Height = 17 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var size = 6 * this.get_Scale();
		var width = Math.max(this.Width,14 * this.get_Scale());
		var offset = this.Height / 2;
		canvas.BeginPath();
		canvas.MoveTo(cx + this.X,cy + this.Y + offset);
		canvas.QuadraticCurveTo(cx + this.X + width / 2,cy + this.Y + offset,cx + this.X + width,cy + this.Y + offset - size);
		canvas.MoveTo(cx + this.X,cy + this.Y + offset);
		canvas.QuadraticCurveTo(cx + this.X + width / 2,cy + this.Y + offset,cx + this.X + width,cy + this.Y + offset + size);
		canvas.Stroke();
	}
	,__class__: alphaTab.rendering.glyphs.FadeInGlyph
});
alphaTab.rendering.glyphs.FlatGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["FlatGlyph"] = function(x,y,isGrace) {
	if(isGrace == null) {
		isGrace = false;
	}
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57952);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.FlatGlyph.__name__ = true;
alphaTab.rendering.glyphs.FlatGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.FlatGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 8 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.FlatGlyph
});
alphaTab.rendering.glyphs.HiHatGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["HiHatGlyph"] = function(x,y,isGrace) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57523);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.HiHatGlyph.__name__ = true;
alphaTab.rendering.glyphs.HiHatGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.HiHatGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 9 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.HiHatGlyph
});
alphaTab.rendering.glyphs.LeftToRightLayoutingGlyphGroup = $hx_exports["alphaTab"]["rendering"]["glyphs"]["LeftToRightLayoutingGlyphGroup"] = function() {
	alphaTab.rendering.glyphs.GlyphGroup.call(this,0,0);
	var this1 = [];
	this.Glyphs = this1;
};
alphaTab.rendering.glyphs.LeftToRightLayoutingGlyphGroup.__name__ = true;
alphaTab.rendering.glyphs.LeftToRightLayoutingGlyphGroup.__super__ = alphaTab.rendering.glyphs.GlyphGroup;
alphaTab.rendering.glyphs.LeftToRightLayoutingGlyphGroup.prototype = $extend(alphaTab.rendering.glyphs.GlyphGroup.prototype,{
	AddGlyph: function(g) {
		g.X = this.Glyphs.length == 0 ? 0 : this.Glyphs[this.Glyphs.length - 1].X + this.Glyphs[this.Glyphs.length - 1].Width;
		g.Renderer = this.Renderer;
		g.DoLayout();
		this.Width = g.X + g.Width;
		alphaTab.rendering.glyphs.GlyphGroup.prototype.AddGlyph.call(this,g);
	}
	,__class__: alphaTab.rendering.glyphs.LeftToRightLayoutingGlyphGroup
});
alphaTab.rendering.glyphs.LineRangedGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["LineRangedGlyph"] = function(label) {
	alphaTab.rendering.glyphs.GroupedEffectGlyph.call(this,2);
	this._label = null;
	this._label = label;
};
alphaTab.rendering.glyphs.LineRangedGlyph.__name__ = true;
alphaTab.rendering.glyphs.LineRangedGlyph.__super__ = alphaTab.rendering.glyphs.GroupedEffectGlyph;
alphaTab.rendering.glyphs.LineRangedGlyph.prototype = $extend(alphaTab.rendering.glyphs.GroupedEffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.GroupedEffectGlyph.prototype.DoLayout.call(this);
		this.Height = this.Renderer.get_Resources().EffectFont.Size;
	}
	,PaintNonGrouped: function(cx,cy,canvas) {
		var res = this.Renderer.get_Resources();
		canvas.set_Font(res.EffectFont);
		canvas.set_TextAlign(0);
		canvas.FillText(this._label,cx + this.X,cy + this.Y);
	}
	,PaintGrouped: function(cx,cy,endX,canvas) {
		this.PaintNonGrouped(cx,cy,canvas);
		var lineSpacing = 3 * this.get_Scale();
		var textWidth = canvas.MeasureText(this._label);
		var startX = cx + this.X + textWidth + lineSpacing;
		var lineY = cy + this.Y + 8 * this.get_Scale();
		var lineSize = 8 * this.get_Scale();
		if(endX > startX) {
			var lineX = startX;
			while(lineX < endX) {
				canvas.BeginPath();
				var this1 = system.Convert.ToInt32_Single(lineY);
				canvas.MoveTo(lineX,this1);
				var tmp = Math.min(lineX + lineSize,endX);
				var this2 = system.Convert.ToInt32_Single(lineY);
				canvas.LineTo(tmp,this2);
				lineX = lineX + (lineSize + lineSpacing);
				canvas.Stroke();
			}
			canvas.BeginPath();
			var this3 = system.Convert.ToInt32_Single(lineY - 6 * this.get_Scale());
			canvas.MoveTo(endX,this3);
			var this4 = system.Convert.ToInt32_Single(lineY + 6 * this.get_Scale());
			canvas.LineTo(endX,this4);
			canvas.Stroke();
		}
	}
	,__class__: alphaTab.rendering.glyphs.LineRangedGlyph
});
alphaTab.rendering.glyphs.LyricsGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["LyricsGlyph"] = function(x,y,lines,font,textAlign) {
	if(textAlign == null) {
		textAlign = 1;
	}
	alphaTab.rendering.glyphs.EffectGlyph.call(this,x,y);
	this._lines = null;
	this.Font = null;
	this.TextAlign = null;
	this._lines = lines;
	this.Font = font;
	this.TextAlign = textAlign;
};
alphaTab.rendering.glyphs.LyricsGlyph.__name__ = true;
alphaTab.rendering.glyphs.LyricsGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.LyricsGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.EffectGlyph.prototype.DoLayout.call(this);
		this.Height = this.Font.Size * this._lines.length;
	}
	,Paint: function(cx,cy,canvas) {
		canvas.set_Font(this.Font);
		var old = canvas.get_TextAlign();
		canvas.set_TextAlign(this.TextAlign);
		var i = 0;
		while(i < this._lines.length) {
			if(this._lines[i] != null) {
				canvas.FillText(this._lines[i],cx + this.X,cy + this.Y + i * this.Font.Size);
			}
			++i;
		}
		canvas.set_TextAlign(old);
	}
	,__class__: alphaTab.rendering.glyphs.LyricsGlyph
});
alphaTab.rendering.glyphs._MusicFontSymbol = {};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_ = $hx_exports["alphaTab"]["rendering"]["glyphs"]["_MusicFontSymbol"]["MusicFontSymbol_Impl_"] = {};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.__name__ = true;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.toString = function(this1) {
	switch(this1) {
	case -1:
		return "None";
	case 57424:
		return "ClefG";
	case 57436:
		return "ClefC";
	case 57442:
		return "ClefF";
	case 57449:
		return "ClefNeutral";
	case 57453:
		return "ClefTab";
	case 57454:
		return "ClefTabSmall";
	case 57472:
		return "Num0";
	case 57473:
		return "Num1";
	case 57474:
		return "Num2";
	case 57475:
		return "Num3";
	case 57476:
		return "Num4";
	case 57477:
		return "Num5";
	case 57478:
		return "Num6";
	case 57479:
		return "Num7";
	case 57480:
		return "Num8";
	case 57481:
		return "Num9";
	case 57482:
		return "TimeSignatureCommon";
	case 57483:
		return "TimeSignatureCutCommon";
	case 57504:
		return "NoteDoubleWhole";
	case 57505:
		return "NoteQuadrupleWhole";
	case 57506:
		return "NoteWhole";
	case 57507:
		return "NoteHalf";
	case 57508:
		return "NoteQuarter";
	case 57513:
		return "NoteSideStick";
	case 57514:
		return "NoteDead";
	case 57523:
		return "NoteHiHat";
	case 57564:
		return "NoteHarmonic";
	case 57566:
		return "NoteRideCymbal";
	case 57591:
		return "NoteHiHatHalf";
	case 57593:
		return "NoteChineseCymbal";
	case 57813:
		return "Tempo";
	case 57815:
		return "GraceUp";
	case 57816:
		return "GraceDown";
	case 57888:
		return "TremoloPickingEighth";
	case 57889:
		return "TremoloPickingSixteenth";
	case 57890:
		return "TremoloPickingThirtySecond";
	case 57920:
		return "FooterUpEighth";
	case 57921:
		return "FooterDownEighth";
	case 57922:
		return "FooterUpSixteenth";
	case 57923:
		return "FooterDownSixteenth";
	case 57924:
		return "FooterUpThirtySecond";
	case 57925:
		return "FooterDownThirtySecond";
	case 57926:
		return "FooterUpSixtyFourth";
	case 57927:
		return "FooterDownSixtyFourth";
	case 57928:
		return "FooterUpOneHundredTwentyEighth";
	case 57929:
		return "FooterDownOneHundredTwentyEighth";
	case 57930:
		return "FooterUpTwoHundredFiftySixth";
	case 57931:
		return "FooterDownTwoHundredFiftySixth";
	case 57952:
		return "AccidentalFlat";
	case 57953:
		return "AccidentalNatural";
	case 57954:
		return "AccidentalSharp";
	case 58528:
		return "Accentuation";
	case 58540:
		return "HeavyAccentuation";
	case 58593:
		return "RestQuadrupleWhole";
	case 58594:
		return "RestDoubleWhole";
	case 58595:
		return "RestWhole";
	case 58596:
		return "RestHalf";
	case 58597:
		return "RestQuarter";
	case 58598:
		return "RestEighth";
	case 58599:
		return "RestSixteenth";
	case 58600:
		return "RestThirtySecond";
	case 58601:
		return "RestSixtyFourth";
	case 58602:
		return "RestOneHundredTwentyEighth";
	case 58603:
		return "RestTwoHundredFiftySixth";
	case 58656:
		return "DynamicP";
	case 58658:
		return "DynamicF";
	case 58666:
		return "DynamicPPP";
	case 58667:
		return "DynamicPP";
	case 58668:
		return "DynamicMP";
	case 58669:
		return "DynamicMF";
	case 58671:
		return "DynamicFF";
	case 58672:
		return "DynamicFFF";
	case 58726:
		return "Trill";
	case 58896:
		return "PickStrokeDown";
	case 58898:
		return "PickStrokeUp";
	case 60068:
		return "WaveHorizontal";
	}
	return "";
};
alphaTab.rendering.glyphs.NaturalizeGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["NaturalizeGlyph"] = function(x,y,isGrace) {
	if(isGrace == null) {
		isGrace = false;
	}
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57953);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.NaturalizeGlyph.__name__ = true;
alphaTab.rendering.glyphs.NaturalizeGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.NaturalizeGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 8 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.NaturalizeGlyph
});
alphaTab.rendering.glyphs.NoteHeadGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["NoteHeadGlyph"] = function(x,y,duration,isGrace) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,alphaTab.rendering.glyphs.NoteHeadGlyph.GetSymbol(duration));
	this._isGrace = false;
	this._duration = null;
	this._isGrace = isGrace;
	this._duration = duration;
};
alphaTab.rendering.glyphs.NoteHeadGlyph.__name__ = true;
alphaTab.rendering.glyphs.NoteHeadGlyph.GetSymbol = function(duration) {
	switch(duration) {
	case -4:
		return 57505;
	case -2:
		return 57504;
	case 1:
		return 57506;
	case 2:
		return 57507;
	default:
		return 57508;
	}
};
alphaTab.rendering.glyphs.NoteHeadGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.NoteHeadGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		var _g = this._duration;
		switch(_g) {
		case -4:
			this.Width = 14 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
			break;
		case -2:
			this.Width = 14 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
			break;
		case 1:
			this.Width = 14 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
			break;
		default:
			this.Width = 9 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
		}
	}
	,__class__: alphaTab.rendering.glyphs.NoteHeadGlyph
});
alphaTab.rendering.glyphs.NoteNumberGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["NoteNumberGlyph"] = function(x,y,n) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this._noteString = null;
	this._noteStringWidth = 0.0;
	this._trillNoteString = null;
	this._trillNoteStringWidth = 0.0;
	this.IsEmpty = false;
	if(!n.IsTieDestination) {
		this._noteString = n.IsDead ? "x" : Std.string(n.Fret - n.Beat.Voice.Bar.Staff.Track.TranspositionPitch);
		if(n.IsGhost) {
			this._noteString = "(" + this._noteString + ")";
		}
	} else if(n.Beat.Index == 0 || n.get_HasBend()) {
		this._noteString = "(" + (n.TieOrigin.Fret - n.Beat.Voice.Bar.Staff.Track.TranspositionPitch) + ")";
	} else {
		this._noteString = "";
	}
	if(n.get_IsTrill()) {
		this._trillNoteString = "(" + (n.get_TrillFret() - n.Beat.Voice.Bar.Staff.Track.TranspositionPitch) + ")";
	} else {
		this._trillNoteString = "";
	}
};
alphaTab.rendering.glyphs.NoteNumberGlyph.__name__ = true;
alphaTab.rendering.glyphs.NoteNumberGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.NoteNumberGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		var tmp;
		var s = this._noteString;
		if(s == null || s.length == 0) {
			var s1 = this._trillNoteString;
			if(s1 != null) {
				tmp = s1.length == 0;
			} else {
				tmp = true;
			}
		} else {
			tmp = false;
		}
		this.IsEmpty = tmp;
		if(!this.IsEmpty) {
			this.Renderer.ScoreRenderer.Canvas.set_Font(this.Renderer.get_Resources().TablatureFont);
			this._noteStringWidth = this.Renderer.ScoreRenderer.Canvas.MeasureText(this._noteString);
			this._trillNoteStringWidth = this.Renderer.ScoreRenderer.Canvas.MeasureText(this._trillNoteString);
			this.Width = this._noteStringWidth + this._trillNoteStringWidth;
		}
	}
	,Paint: function(cx,cy,canvas) {
		if(this.IsEmpty) {
			return;
		}
		var textWidth = this._noteStringWidth + this._trillNoteStringWidth;
		var x = cx + this.X + (this.Width - textWidth) / 2;
		canvas.FillText(this._noteString,x,cy + this.Y);
		canvas.FillText(this._trillNoteString,x + this._noteStringWidth,cy + this.Y);
	}
	,__class__: alphaTab.rendering.glyphs.NoteNumberGlyph
});
alphaTab.rendering.glyphs.NumberGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["NumberGlyph"] = function(x,y,number,scale) {
	if(scale == null) {
		scale = 1.0;
	}
	alphaTab.rendering.glyphs.GlyphGroup.call(this,x,y);
	this._number = 0;
	this._scale = 0.0;
	this._number = number;
	this._scale = scale;
};
alphaTab.rendering.glyphs.NumberGlyph.__name__ = true;
alphaTab.rendering.glyphs.NumberGlyph.__super__ = alphaTab.rendering.glyphs.GlyphGroup;
alphaTab.rendering.glyphs.NumberGlyph.prototype = $extend(alphaTab.rendering.glyphs.GlyphGroup.prototype,{
	DoLayout: function() {
		var i = this._number;
		while(i > 0) {
			var num = i % 10;
			var gl = new alphaTab.rendering.glyphs.DigitGlyph(0,0,num,this._scale);
			this.AddGlyph(gl);
			i = i / 10 | 0;
		}
		this.Glyphs.reverse();
		var cx = 0;
		var j = 0;
		var k = this.Glyphs.length;
		while(j < k) {
			var g = this.Glyphs[j];
			g.X = cx;
			g.Y = 0;
			g.Renderer = this.Renderer;
			g.DoLayout();
			cx = cx + g.Width;
			++j;
		}
		this.Width = cx;
	}
	,__class__: alphaTab.rendering.glyphs.NumberGlyph
});
alphaTab.rendering.glyphs.PickStrokeGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["PickStrokeGlyph"] = function(x,y,pickStroke) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,0.75,alphaTab.rendering.glyphs.PickStrokeGlyph.GetSymbol(pickStroke));
};
alphaTab.rendering.glyphs.PickStrokeGlyph.__name__ = true;
alphaTab.rendering.glyphs.PickStrokeGlyph.GetSymbol = function(pickStroke) {
	switch(pickStroke) {
	case 1:
		return 58898;
	case 2:
		return 58896;
	default:
		return -1;
	}
};
alphaTab.rendering.glyphs.PickStrokeGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.PickStrokeGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 9 * this.get_Scale();
		this.Height = 10 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		alphaTab.rendering.glyphs.MusicFontGlyph.prototype.Paint.call(this,cx,cy + this.Height,canvas);
	}
	,__class__: alphaTab.rendering.glyphs.PickStrokeGlyph
});
alphaTab.rendering.glyphs.RepeatCloseGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["RepeatCloseGlyph"] = function(x,y) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
};
alphaTab.rendering.glyphs.RepeatCloseGlyph.__name__ = true;
alphaTab.rendering.glyphs.RepeatCloseGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.RepeatCloseGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 11 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var blockWidth = 4 * this.get_Scale();
		var top = cy + this.Y + this.Renderer.TopPadding;
		var bottom = cy + this.Y + this.Renderer.Height - this.Renderer.BottomPadding;
		var left = cx + this.X;
		var h = bottom - top;
		var this1 = 1.5;
		var circleSize = this1 * this.get_Scale();
		var middle = (top + bottom) / 2;
		var dotOffset = 3;
		canvas.FillCircle(left,middle - circleSize * dotOffset,circleSize);
		canvas.FillCircle(left,middle + circleSize * dotOffset,circleSize);
		left = left + 4 * this.get_Scale();
		canvas.BeginPath();
		canvas.MoveTo(left,top);
		canvas.LineTo(left,bottom);
		canvas.Stroke();
		var this2 = 0.5;
		left = left + (3 * this.get_Scale() + this2);
		canvas.FillRect(left,top,blockWidth,h);
	}
	,__class__: alphaTab.rendering.glyphs.RepeatCloseGlyph
});
alphaTab.rendering.glyphs.RepeatCountGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["RepeatCountGlyph"] = function(x,y,count) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this._count = 0;
	this._count = count;
};
alphaTab.rendering.glyphs.RepeatCountGlyph.__name__ = true;
alphaTab.rendering.glyphs.RepeatCountGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.RepeatCountGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 0;
	}
	,Paint: function(cx,cy,canvas) {
		var res = this.Renderer.get_Resources();
		var oldAlign = canvas.get_TextAlign();
		canvas.set_Font(res.BarNumberFont);
		canvas.set_TextAlign(2);
		var s = "x" + this._count;
		var this1 = 1.5;
		var w = canvas.MeasureText(s) / this1;
		canvas.FillText(s,cx + this.X - w,cy + this.Y);
		canvas.set_TextAlign(oldAlign);
	}
	,__class__: alphaTab.rendering.glyphs.RepeatCountGlyph
});
alphaTab.rendering.glyphs.RepeatOpenGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["RepeatOpenGlyph"] = function(x,y,circleSize,dotOffset) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this._dotOffset = 0.0;
	this._circleSize = 0.0;
	this._dotOffset = dotOffset;
	this._circleSize = circleSize;
};
alphaTab.rendering.glyphs.RepeatOpenGlyph.__name__ = true;
alphaTab.rendering.glyphs.RepeatOpenGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.RepeatOpenGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 13 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var blockWidth = 4 * this.get_Scale();
		var top = cy + this.Y + this.Renderer.TopPadding;
		var bottom = cy + this.Y + this.Renderer.Height - this.Renderer.BottomPadding;
		var this1 = 0.5;
		var left = cx + this.X + this1;
		var h = bottom - top;
		canvas.FillRect(left,top,blockWidth,h);
		var this2 = 0.5;
		left = left + (blockWidth * 2 - this2);
		canvas.BeginPath();
		canvas.MoveTo(left,top);
		canvas.LineTo(left,bottom);
		canvas.Stroke();
		left = left + 3 * this.get_Scale();
		var circleSize = this._circleSize * this.get_Scale();
		var middle = (top + bottom) / 2;
		canvas.FillCircle(left,middle - circleSize * this._dotOffset,circleSize);
		canvas.FillCircle(left,middle + circleSize * this._dotOffset,circleSize);
	}
	,__class__: alphaTab.rendering.glyphs.RepeatOpenGlyph
});
alphaTab.rendering.glyphs.RideCymbalGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["RideCymbalGlyph"] = function(x,y,isGrace) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57566);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.RideCymbalGlyph.__name__ = true;
alphaTab.rendering.glyphs.RideCymbalGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.RideCymbalGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 9 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.RideCymbalGlyph
});
alphaTab.rendering.glyphs.ScoreBeatGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreBeatGlyph"] = function() {
	alphaTab.rendering.glyphs.BeatOnNoteGlyphBase.call(this);
};
alphaTab.rendering.glyphs.ScoreBeatGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreBeatGlyph.__super__ = alphaTab.rendering.glyphs.BeatOnNoteGlyphBase;
alphaTab.rendering.glyphs.ScoreBeatGlyph.prototype = $extend(alphaTab.rendering.glyphs.BeatOnNoteGlyphBase.prototype,{
	UpdateBeamingHelper: function() {
		if(this.NoteHeads != null) {
			this.NoteHeads.UpdateBeamingHelper(this.Container.X + this.X);
		} else if(this.RestGlyph != null) {
			this.RestGlyph.UpdateBeamingHelper(this.Container.X + this.X);
		}
	}
	,DoLayout: function() {
		var sr = js.Boot.__cast(this.Renderer , alphaTab.rendering.ScoreBarRenderer);
		if(!this.Container.Beat.IsEmpty) {
			if(!this.Container.Beat.get_IsRest()) {
				this.NoteHeads = new alphaTab.rendering.glyphs.ScoreNoteChordGlyph();
				this.NoteHeads.Beat = this.Container.Beat;
				this.NoteHeads.BeamingHelper = this.BeamingHelper;
				var note = $iterator(this.Container.Beat.Notes)();
				while(note.hasNext()) {
					var note1 = note.next();
					this.CreateNoteGlyph(note1);
				}
				this.AddGlyph(this.NoteHeads);
				if(this.Container.Beat.Dots > 0) {
					this.AddGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,5 * this.get_Scale()));
					var i = 0;
					while(i < this.Container.Beat.Dots) {
						var group = new alphaTab.rendering.glyphs.GlyphGroup(0,0);
						var note2 = $iterator(this.Container.Beat.Notes)();
						while(note2.hasNext()) {
							var note3 = note2.next();
							this.CreateBeatDot(sr.GetNoteLine(note3),group);
						}
						this.AddGlyph(group);
						++i;
					}
				}
			} else {
				var dotLine = 0;
				var line = 0;
				var offset = 0;
				var _g = this.Container.Beat.Duration;
				switch(_g) {
				case -4:
					line = 6;
					dotLine = 5;
					break;
				case -2:
					line = 6;
					dotLine = 5;
					break;
				case 1:
					line = 4;
					dotLine = 5;
					break;
				case 2:
					line = 6;
					dotLine = 5;
					break;
				case 4:
					line = 6;
					offset = -2;
					dotLine = 5;
					break;
				case 8:
					line = 6;
					dotLine = 5;
					break;
				case 16:
					line = 6;
					dotLine = 5;
					break;
				case 32:
					line = 6;
					dotLine = 3;
					break;
				case 64:
					line = 6;
					dotLine = 3;
					break;
				case 128:
					line = 6;
					dotLine = 3;
					break;
				case 256:
					line = 6;
					dotLine = 3;
					break;
				default:
				}
				var this1 = line;
				var this2 = offset;
				var y = sr.GetScoreY(this1,this2);
				this.RestGlyph = new alphaTab.rendering.glyphs.ScoreRestGlyph(0,y,this.Container.Beat.Duration);
				this.RestGlyph.Beat = this.Container.Beat;
				this.RestGlyph.BeamingHelper = this.BeamingHelper;
				this.AddGlyph(this.RestGlyph);
				if(this.Container.Beat.Dots > 0) {
					this.AddGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,5 * this.get_Scale()));
					var i1 = 0;
					while(i1 < this.Container.Beat.Dots) {
						var group1 = new alphaTab.rendering.glyphs.GlyphGroup(0,0);
						this.CreateBeatDot(dotLine,group1);
						this.AddGlyph(group1);
						++i1;
					}
				}
			}
		}
		alphaTab.rendering.glyphs.BeatOnNoteGlyphBase.prototype.DoLayout.call(this);
	}
	,CreateBeatDot: function(line,group) {
		var sr = js.Boot.__cast(this.Renderer , alphaTab.rendering.ScoreBarRenderer);
		var this1 = line;
		var this2 = 1.5;
		group.AddGlyph(new alphaTab.rendering.glyphs.CircleGlyph(0,sr.GetScoreY(this1,0),this2 * this.get_Scale()));
	}
	,CreateNoteHeadGlyph: function(n) {
		var isGrace = this.Container.Beat.GraceType != 0;
		if(n.Beat.Voice.Bar.Staff.Track.IsPercussion) {
			var value = n.get_RealValue();
			if(value <= 30 || value >= 67 || alphaTab.rendering.glyphs.ScoreBeatGlyph.NormalKeys.hasOwnProperty(value)) {
				return new alphaTab.rendering.glyphs.NoteHeadGlyph(0,0,4,isGrace);
			}
			if(alphaTab.rendering.glyphs.ScoreBeatGlyph.XKeys.hasOwnProperty(value)) {
				return new alphaTab.rendering.glyphs.DrumSticksGlyph(0,0,isGrace);
			}
			if(value == 46) {
				return new alphaTab.rendering.glyphs.HiHatGlyph(0,0,isGrace);
			}
			if(value == 49 || value == 57) {
				return new alphaTab.rendering.glyphs.DiamondNoteHeadGlyph(0,0,isGrace);
			}
			if(value == 52) {
				return new alphaTab.rendering.glyphs.ChineseCymbalGlyph(0,0,isGrace);
			}
			if(value == 51 || value == 53 || value == 59) {
				return new alphaTab.rendering.glyphs.RideCymbalGlyph(0,0,isGrace);
			}
			return new alphaTab.rendering.glyphs.NoteHeadGlyph(0,0,4,isGrace);
		}
		if(n.IsDead) {
			return new alphaTab.rendering.glyphs.DeadNoteHeadGlyph(0,0,isGrace);
		}
		if(n.HarmonicType == 0) {
			return new alphaTab.rendering.glyphs.NoteHeadGlyph(0,0,n.Beat.Duration,isGrace);
		}
		return new alphaTab.rendering.glyphs.DiamondNoteHeadGlyph(0,0,isGrace);
	}
	,CreateNoteGlyph: function(n) {
		var sr = js.Boot.__cast(this.Renderer , alphaTab.rendering.ScoreBarRenderer);
		var noteHeadGlyph = this.CreateNoteHeadGlyph(n);
		var line = sr.GetNoteLine(n);
		var this1 = line;
		noteHeadGlyph.Y = sr.GetScoreY(this1,0);
		this.NoteHeads.AddNoteGlyph(noteHeadGlyph,n,line);
		if(n.IsStaccato && !this.NoteHeads.BeatEffects.hasOwnProperty("Staccato")) {
			this.NoteHeads.BeatEffects["Staccato"] = new alphaTab.rendering.glyphs.CircleGlyph(0,0,1.5);
		}
		if(n.Accentuated == 1 && !this.NoteHeads.BeatEffects.hasOwnProperty("Accent")) {
			this.NoteHeads.BeatEffects["Accent"] = new alphaTab.rendering.glyphs.AccentuationGlyph(0,0,1);
		}
		if(n.Accentuated == 2 && !this.NoteHeads.BeatEffects.hasOwnProperty("HAccent")) {
			this.NoteHeads.BeatEffects["HAccent"] = new alphaTab.rendering.glyphs.AccentuationGlyph(0,0,2);
		}
	}
	,__class__: alphaTab.rendering.glyphs.ScoreBeatGlyph
});
alphaTab.rendering.glyphs.ScoreBeatPreNotesGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreBeatPreNotesGlyph"] = function() {
	alphaTab.rendering.glyphs.BeatGlyphBase.call(this);
};
alphaTab.rendering.glyphs.ScoreBeatPreNotesGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreBeatPreNotesGlyph.__super__ = alphaTab.rendering.glyphs.BeatGlyphBase;
alphaTab.rendering.glyphs.ScoreBeatPreNotesGlyph.prototype = $extend(alphaTab.rendering.glyphs.BeatGlyphBase.prototype,{
	DoLayout: function() {
		if(!this.Container.Beat.get_IsRest()) {
			if(this.Container.Beat.BrushType != 0) {
				this.AddGlyph(new alphaTab.rendering.glyphs.ScoreBrushGlyph(this.Container.Beat));
				this.AddGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,4 * this.get_Scale()));
			}
			var accidentals = new alphaTab.rendering.glyphs.AccidentalGroupGlyph();
			var note = $iterator(this.Container.Beat.Notes)();
			while(note.hasNext()) {
				var note1 = note.next();
				this.CreateAccidentalGlyph(note1,accidentals);
			}
			if(!accidentals.get_IsEmpty()) {
				this.AddGlyph(accidentals);
				this.AddGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,4 * (this.Container.Beat.GraceType != 0 ? 0.75 : 1) * this.get_Scale()));
			}
		}
		alphaTab.rendering.glyphs.BeatGlyphBase.prototype.DoLayout.call(this);
	}
	,CreateAccidentalGlyph: function(n,accidentals) {
		var sr = js.Boot.__cast(this.Renderer , alphaTab.rendering.ScoreBarRenderer);
		var accidental = sr.AccidentalHelper.ApplyAccidental(n);
		var noteLine = sr.GetNoteLine(n);
		var isGrace = this.Container.Beat.GraceType != 0;
		switch(accidental) {
		case 1:
			var this1 = noteLine;
			accidentals.AddGlyph(new alphaTab.rendering.glyphs.NaturalizeGlyph(0,sr.GetScoreY(this1,0),isGrace));
			break;
		case 2:
			var this2 = noteLine;
			accidentals.AddGlyph(new alphaTab.rendering.glyphs.SharpGlyph(0,sr.GetScoreY(this2,0),isGrace));
			break;
		case 3:
			var this3 = noteLine;
			accidentals.AddGlyph(new alphaTab.rendering.glyphs.FlatGlyph(0,sr.GetScoreY(this3,0),isGrace));
			break;
		default:
		}
	}
	,__class__: alphaTab.rendering.glyphs.ScoreBeatPreNotesGlyph
});
alphaTab.rendering.glyphs.ScoreBrushGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreBrushGlyph"] = function(beat) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this._beat = null;
	this._beat = beat;
};
alphaTab.rendering.glyphs.ScoreBrushGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreBrushGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.ScoreBrushGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 10 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var scoreBarRenderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.ScoreBarRenderer);
		var lineSize = scoreBarRenderer.get_LineOffset();
		var startY = cy + this.Y + (scoreBarRenderer.GetNoteY(this._beat.get_MaxNote()) - lineSize / 2);
		var endY = cy + this.Y + scoreBarRenderer.GetNoteY(this._beat.get_MinNote()) + lineSize;
		var arrowX = cx + this.X + this.Width / 2;
		var arrowSize = 8 * this.get_Scale();
		if(this._beat.BrushType != 0) {
			if(this._beat.BrushType == 3) {
				canvas.BeginPath();
				canvas.MoveTo(arrowX,endY);
				canvas.LineTo(arrowX + arrowSize / 2,endY - arrowSize);
				canvas.LineTo(arrowX - arrowSize / 2,endY - arrowSize);
				canvas.ClosePath();
				canvas.Fill();
			} else if(this._beat.BrushType == 4) {
				canvas.BeginPath();
				canvas.MoveTo(arrowX,startY);
				canvas.LineTo(arrowX + arrowSize / 2,startY + arrowSize);
				canvas.LineTo(arrowX - arrowSize / 2,startY + arrowSize);
				canvas.ClosePath();
				canvas.Fill();
			}
		}
	}
	,__class__: alphaTab.rendering.glyphs.ScoreBrushGlyph
});
alphaTab.rendering.glyphs.TieGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TieGlyph"] = function(startBeat,endBeat,forEnd) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this.StartBeat = null;
	this.EndBeat = null;
	this.YOffset = 0.0;
	this._forEnd = false;
	this.StartBeat = startBeat;
	this.EndBeat = endBeat;
	this._forEnd = forEnd;
};
alphaTab.rendering.glyphs.TieGlyph.__name__ = true;
alphaTab.rendering.glyphs.TieGlyph.PaintTie = function(canvas,scale,x1,y1,x2,y2,down) {
	if(down == null) {
		down = false;
	}
	if(x1 == x2 && y1 == y2) {
		return;
	}
	if(x2 < x1) {
		var t = x1;
		x1 = x2;
		x2 = t;
		t = y1;
		y1 = y2;
		y2 = t;
	}
	var offset = 22 * scale;
	var size = 4 * scale;
	var normalVectorX = y2 - y1;
	var normalVectorY = x2 - x1;
	var length = js.Boot.__cast(Math.sqrt(normalVectorX * normalVectorX + normalVectorY * normalVectorY) , Float);
	if(down) {
		normalVectorX = normalVectorX * -1;
	} else {
		normalVectorY = normalVectorY * -1;
	}
	normalVectorX = normalVectorX / length;
	normalVectorY = normalVectorY / length;
	var centerX = (x2 + x1) / 2;
	var centerY = (y2 + y1) / 2;
	var cp1X = centerX + offset * normalVectorX;
	var cp1Y = centerY + offset * normalVectorY;
	var cp2X = centerX + (offset - size) * normalVectorX;
	var cp2Y = centerY + (offset - size) * normalVectorY;
	canvas.BeginPath();
	canvas.MoveTo(x1,y1);
	canvas.QuadraticCurveTo(cp1X,cp1Y,x2,y2);
	canvas.QuadraticCurveTo(cp2X,cp2Y,x1,y1);
	canvas.ClosePath();
};
alphaTab.rendering.glyphs.TieGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.TieGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 0;
	}
	,Paint: function(cx,cy,canvas) {
		if(this.EndBeat == null) {
			return;
		}
		var startNoteRenderer = this.Renderer.ScoreRenderer.Layout.GetRendererForBar(this.Renderer.Staff.get_StaveId(),this.StartBeat.Voice.Bar);
		var endNoteRenderer = this.Renderer.ScoreRenderer.Layout.GetRendererForBar(this.Renderer.Staff.get_StaveId(),this.EndBeat.Voice.Bar);
		var startX = 0;
		var endX = 0;
		var startY = 0;
		var endY = 0;
		var shouldDraw = false;
		var direction = this.GetBeamDirection(this.StartBeat,startNoteRenderer);
		if(!this._forEnd) {
			if(startNoteRenderer != endNoteRenderer) {
				startX = cx + startNoteRenderer.X + this.GetStartX(startNoteRenderer);
				startY = cy + startNoteRenderer.Y + this.GetStartY(startNoteRenderer,direction) + this.YOffset;
				if(endNoteRenderer == null || startNoteRenderer.Staff != endNoteRenderer.Staff) {
					endX = cx + startNoteRenderer.X + startNoteRenderer.Width;
					endY = startY;
				} else {
					endX = cx + endNoteRenderer.X + this.GetEndX(endNoteRenderer);
					endY = cy + endNoteRenderer.Y + this.GetEndY(endNoteRenderer,direction) + this.YOffset;
				}
			} else {
				startX = cx + startNoteRenderer.X + this.GetStartX(startNoteRenderer);
				endX = cx + endNoteRenderer.X + this.GetEndX(endNoteRenderer);
				startY = cy + startNoteRenderer.Y + this.GetStartY(startNoteRenderer,direction) + this.YOffset;
				endY = cy + endNoteRenderer.Y + this.GetEndY(endNoteRenderer,direction) + this.YOffset;
			}
			shouldDraw = true;
		} else if(startNoteRenderer.Staff != endNoteRenderer.Staff) {
			startX = cx + endNoteRenderer.X;
			endX = cx + endNoteRenderer.X + this.GetEndX(endNoteRenderer);
			startY = cy + endNoteRenderer.Y + this.GetEndY(endNoteRenderer,direction) + this.YOffset;
			endY = startY;
			shouldDraw = true;
		}
		if(shouldDraw) {
			alphaTab.rendering.glyphs.TieGlyph.PaintTie(canvas,this.get_Scale(),startX,startY,endX,endY,direction == 1);
			canvas.Fill();
		}
	}
	,GetBeamDirection: function(beat,noteRenderer) {
		return 1;
	}
	,GetStartY: function(noteRenderer,direction) {
		return 0;
	}
	,GetEndY: function(noteRenderer,direction) {
		return 0;
	}
	,GetStartX: function(noteRenderer) {
		return 0;
	}
	,GetEndX: function(noteRenderer) {
		return 0;
	}
	,__class__: alphaTab.rendering.glyphs.TieGlyph
});
alphaTab.rendering.glyphs.ScoreLegatoGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreLegatoGlyph"] = function(startBeat,endBeat,forEnd) {
	if(forEnd == null) {
		forEnd = false;
	}
	alphaTab.rendering.glyphs.TieGlyph.call(this,startBeat,endBeat,forEnd);
};
alphaTab.rendering.glyphs.ScoreLegatoGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreLegatoGlyph.__super__ = alphaTab.rendering.glyphs.TieGlyph;
alphaTab.rendering.glyphs.ScoreLegatoGlyph.prototype = $extend(alphaTab.rendering.glyphs.TieGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.TieGlyph.prototype.DoLayout.call(this);
		this.YOffset = 9 / 2;
	}
	,GetBeamDirection: function(beat,noteRenderer) {
		if(beat.get_IsRest()) {
			return 0;
		}
		var _g = (js.Boot.__cast(noteRenderer , alphaTab.rendering.ScoreBarRenderer)).GetBeatDirection(beat);
		if(_g == 0) {
			return 1;
		} else {
			return 0;
		}
	}
	,GetStartY: function(noteRenderer,direction) {
		if(this.StartBeat.get_IsRest()) {
			return (js.Boot.__cast(noteRenderer , alphaTab.rendering.ScoreBarRenderer)).GetScoreY(9,0);
		}
		if(direction == 0) {
			return noteRenderer.GetNoteY(this.StartBeat.get_MinNote());
		} else {
			return noteRenderer.GetNoteY(this.StartBeat.get_MaxNote());
		}
	}
	,GetEndY: function(noteRenderer,direction) {
		if(this.EndBeat.get_IsRest()) {
			if(direction == 0) {
				return (js.Boot.__cast(noteRenderer , alphaTab.rendering.ScoreBarRenderer)).GetScoreY(9,0);
			} else {
				return (js.Boot.__cast(noteRenderer , alphaTab.rendering.ScoreBarRenderer)).GetScoreY(0,0);
			}
		}
		if(direction == 0) {
			return (js.Boot.__cast(noteRenderer , alphaTab.rendering.ScoreBarRenderer)).GetNoteY(this.EndBeat.get_MinNote());
		} else {
			return (js.Boot.__cast(noteRenderer , alphaTab.rendering.ScoreBarRenderer)).GetNoteY(this.EndBeat.get_MaxNote());
		}
	}
	,GetStartX: function(noteRenderer) {
		if(this.StartBeat.get_IsRest()) {
			return noteRenderer.GetBeatX(this.StartBeat,0);
		} else {
			return noteRenderer.GetNoteX(this.StartBeat.get_MinNote(),true);
		}
	}
	,GetEndX: function(noteRenderer) {
		if(this.EndBeat.get_IsRest()) {
			return noteRenderer.GetBeatX(this.EndBeat,0);
		} else {
			return noteRenderer.GetNoteX(this.EndBeat.get_MinNote(),false);
		}
	}
	,__class__: alphaTab.rendering.glyphs.ScoreLegatoGlyph
});
alphaTab.rendering.glyphs.ScoreNoteChordGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreNoteChordGlyph"] = function() {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this._infos = null;
	this._noteLookup = null;
	this._tremoloPicking = null;
	this._noteHeadPadding = 0.0;
	this.MinNote = null;
	this.MaxNote = null;
	this.SpacingChanged = null;
	this.UpLineX = 0.0;
	this.DownLineX = 0.0;
	this.BeatEffects = null;
	this.Beat = null;
	this.BeamingHelper = null;
	var this1 = [];
	this._infos = this1;
	var this2 = {}
	this.BeatEffects = this2;
	var this3 = {}
	this._noteLookup = this3;
};
alphaTab.rendering.glyphs.ScoreNoteChordGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreNoteChordGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.ScoreNoteChordGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	get_Direction: function() {
		return this.BeamingHelper.Direction;
	}
	,GetNoteX: function(note,onEnd) {
		if(onEnd == null) {
			onEnd = true;
		}
		if(this._noteLookup.hasOwnProperty(note.String)) {
			var n = this._noteLookup[note.String];
			var pos = this.X + n.X;
			if(onEnd) {
				pos = pos + n.Width;
			}
			return pos;
		}
		return 0;
	}
	,GetNoteY: function(note) {
		if(this._noteLookup.hasOwnProperty(note.String)) {
			return this.Y + this._noteLookup[note.String].Y;
		}
		return 0;
	}
	,AddNoteGlyph: function(noteGlyph,note,noteLine) {
		var info = new alphaTab.rendering.glyphs.ScoreNoteGlyphInfo(noteGlyph,noteLine,note);
		this._infos.push(info);
		this._noteLookup[note.String] = noteGlyph;
		if(this.MinNote == null || this.MinNote.Line > info.Line) {
			this.MinNote = info;
		}
		if(this.MaxNote == null || this.MaxNote.Line < info.Line) {
			this.MaxNote = info;
		}
	}
	,UpdateBeamingHelper: function(cx) {
		if(this.BeamingHelper != null) {
			this.BeamingHelper.RegisterBeatLineX("score",this.Beat,cx + this.X + this.UpLineX,cx + this.X + this.DownLineX);
		}
	}
	,get_HasTopOverflow: function() {
		if(this.MinNote != null) {
			return this.MinNote.Line < 0;
		} else {
			return false;
		}
	}
	,get_HasBottomOverflow: function() {
		if(this.MaxNote != null) {
			return this.MaxNote.Line > 8;
		} else {
			return false;
		}
	}
	,DoLayout: function() {
		var comparison = function(a,b) {
			return system._Int32.Int32_Impl_.CompareTo_Int32(a.Line,b.Line);
		};
		this._infos.sort(function(a1,b1) {
			return comparison(a1,b1);
		});
		var padding = 0;
		var displacedX = 0;
		var lastDisplaced = false;
		var lastLine = 0;
		var anyDisplaced = false;
		var direction = this.get_Direction();
		var w = 0;
		var i = 0;
		var j = this._infos.length;
		while(i < j) {
			var g = this._infos[i].Glyph;
			g.Renderer = this.Renderer;
			g.DoLayout();
			var displace = false;
			if(i == 0) {
				displacedX = g.Width + padding;
			} else if(Math.abs(lastLine - this._infos[i].Line) <= 1) {
				if(!lastDisplaced) {
					displace = true;
					g.X = displacedX - this.get_Scale();
					anyDisplaced = true;
					lastDisplaced = true;
				} else {
					lastDisplaced = false;
				}
			} else {
				lastDisplaced = false;
			}
			if(direction == 1) {
				var tmp;
				if(displace) {
					var this1 = padding;
					tmp = this1;
				} else {
					tmp = displacedX;
				}
				g.X = tmp;
			} else {
				var tmp1;
				if(displace) {
					tmp1 = displacedX;
				} else {
					var this2 = padding;
					tmp1 = this2;
				}
				g.X = tmp1;
			}
			lastLine = this._infos[i].Line;
			w = Math.max(w,g.X + g.Width);
			++i;
		}
		if(anyDisplaced) {
			this._noteHeadPadding = 0;
			this.UpLineX = displacedX;
			this.DownLineX = displacedX;
		} else {
			this._noteHeadPadding = direction == 1 ? -displacedX : 0;
			w = w + this._noteHeadPadding;
			this.UpLineX = w;
			var this3 = padding;
			this.DownLineX = this3;
		}
		var this4 = this.BeatEffects;
		var effectKey = $iterator(Object.keys(this4))();
		while(effectKey.hasNext()) {
			var effectKey1 = effectKey.next();
			var effect = this.BeatEffects[effectKey1];
			effect.Renderer = this.Renderer;
			effect.DoLayout();
		}
		if(this.Beat.get_IsTremolo()) {
			var offset;
			var baseNote = direction == 0 ? this.MinNote : this.MaxNote;
			var tremoloX = direction == 0 ? displacedX : 0;
			var speed = this.Beat.TremoloSpeed;
			switch(speed) {
			case 8:
				if(direction == 0) {
					offset = -10;
				} else {
					offset = 10;
				}
				break;
			case 16:
				if(direction == 0) {
					offset = -12;
				} else {
					offset = 15;
				}
				break;
			case 32:
				if(direction == 0) {
					offset = -15;
				} else {
					offset = 15;
				}
				break;
			default:
				if(direction == 0) {
					offset = -10;
				} else {
					offset = 15;
				}
			}
			this._tremoloPicking = new alphaTab.rendering.glyphs.TremoloPickingGlyph(tremoloX,baseNote.Glyph.Y + offset * this.get_Scale(),this.Beat.TremoloSpeed);
			this._tremoloPicking.Renderer = this.Renderer;
			this._tremoloPicking.DoLayout();
		}
		this.Width = w + padding;
	}
	,Paint: function(cx,cy,canvas) {
		cx = cx + this.X;
		cy = cy + this.Y;
		var scoreRenderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.ScoreBarRenderer);
		var effectY;
		if(this.BeamingHelper.Direction == 0) {
			var this1 = this.MaxNote.Line;
			var this2 = 1.5;
			effectY = scoreRenderer.GetScoreY(this1,this2 * 9);
		} else {
			var this3 = this.MinNote.Line;
			effectY = scoreRenderer.GetScoreY(this3,-1.0 * 9);
		}
		var effectSpacing = this.BeamingHelper.Direction == 0 ? 7 * this.get_Scale() : -7 * this.get_Scale();
		var this4 = this.BeatEffects;
		var effectKey = $iterator(Object.keys(this4))();
		while(effectKey.hasNext()) {
			var effectKey1 = effectKey.next();
			var g = this.BeatEffects[effectKey1];
			g.Y = effectY;
			g.X = this.Width / 2;
			g.Paint(cx,cy,canvas);
			effectY = effectY + effectSpacing;
		}
		var linePadding = 3 * this.get_Scale();
		var lineWidth = this.Width + linePadding * 2;
		if(this.get_HasTopOverflow()) {
			var color = canvas.get_Color();
			canvas.set_Color(this.Renderer.ScoreRenderer.RenderingResources.StaveLineColor);
			var l = -1;
			while(l >= this.MinNote.Line) {
				var this5 = l;
				var lY = cy + scoreRenderer.GetScoreY(this5,0);
				canvas.FillRect(cx - linePadding,lY,lineWidth,this.get_Scale());
				l = l - 2;
			}
			canvas.set_Color(color);
		}
		if(this.get_HasBottomOverflow()) {
			var color1 = canvas.get_Color();
			canvas.set_Color(this.Renderer.ScoreRenderer.RenderingResources.StaveLineColor);
			var l1 = 12;
			while(l1 <= this.MaxNote.Line) {
				var this6 = l1;
				var lY1 = cy + scoreRenderer.GetScoreY(this6,0);
				canvas.FillRect(cx - linePadding,lY1,lineWidth,this.get_Scale());
				l1 = l1 + 2;
			}
			canvas.set_Color(color1);
		}
		if(this._tremoloPicking != null) {
			this._tremoloPicking.Paint(cx,cy,canvas);
		}
		var infos = this._infos;
		var x = cx + this._noteHeadPadding;
		var g1 = $iterator(infos)();
		while(g1.hasNext()) {
			var g2 = g1.next();
			g2.Glyph.Renderer = this.Renderer;
			g2.Glyph.Paint(x,cy,canvas);
		}
	}
	,__class__: alphaTab.rendering.glyphs.ScoreNoteChordGlyph
});
alphaTab.rendering.glyphs.ScoreNoteGlyphInfo = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreNoteGlyphInfo"] = function(glyph,line,note) {
	this.Glyph = null;
	this.Line = 0;
	this.Note = null;
	this.Glyph = glyph;
	this.Line = line;
};
alphaTab.rendering.glyphs.ScoreNoteGlyphInfo.__name__ = true;
alphaTab.rendering.glyphs.ScoreNoteGlyphInfo.prototype = {
	__class__: alphaTab.rendering.glyphs.ScoreNoteGlyphInfo
};
alphaTab.rendering.glyphs.ScoreRestGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreRestGlyph"] = function(x,y,duration) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,1,alphaTab.rendering.glyphs.ScoreRestGlyph.GetSymbol(duration));
	this._duration = null;
	this.BeamingHelper = null;
	this._duration = duration;
};
alphaTab.rendering.glyphs.ScoreRestGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreRestGlyph.GetSymbol = function(duration) {
	switch(duration) {
	case -4:
		return 58593;
	case -2:
		return 58594;
	case 1:
		return 58595;
	case 2:
		return 58596;
	case 4:
		return 58597;
	case 8:
		return 58598;
	case 16:
		return 58599;
	case 32:
		return 58600;
	case 64:
		return 58601;
	case 128:
		return 58602;
	case 256:
		return 58603;
	default:
		return -1;
	}
};
alphaTab.rendering.glyphs.ScoreRestGlyph.GetSize = function(duration) {
	switch(duration) {
	case -4:case -2:case 1:case 2:case 4:case 8:case 16:
		return 9;
	case 32:
		return 12;
	case 64:
		return 14;
	case 128:case 256:
		return 20;
	default:
	}
	return 10;
};
alphaTab.rendering.glyphs.ScoreRestGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.ScoreRestGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = alphaTab.rendering.glyphs.ScoreRestGlyph.GetSize(this._duration) * this.get_Scale();
	}
	,UpdateBeamingHelper: function(cx) {
		if(this.BeamingHelper != null) {
			this.BeamingHelper.RegisterBeatLineX("score",this.Beat,cx + this.X + this.Width / 2,cx + this.X + this.Width / 2);
		}
	}
	,__class__: alphaTab.rendering.glyphs.ScoreRestGlyph
});
alphaTab.rendering.glyphs.ScoreSlideLineGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreSlideLineGlyph"] = function(type,startNote,parent) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this._startNote = null;
	this._type = null;
	this._parent = null;
	this._type = type;
	this._startNote = startNote;
	this._parent = parent;
};
alphaTab.rendering.glyphs.ScoreSlideLineGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreSlideLineGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.ScoreSlideLineGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 0;
	}
	,Paint: function(cx,cy,canvas) {
		var r = js.Boot.__cast(this.Renderer , alphaTab.rendering.ScoreBarRenderer);
		cx = cx + r.X;
		cy = cy + r.Y;
		var sizeX = 12 * this.get_Scale();
		var offsetX = this.get_Scale();
		var startX;
		var startY;
		var endX;
		var endY;
		var _g = this._type;
		switch(_g) {
		case 1:case 2:
			startX = cx + r.GetNoteX(this._startNote,true) + offsetX;
			startY = cy + r.GetNoteY(this._startNote) + 9 / 2;
			if(this._startNote.SlideTarget != null) {
				endX = cx + r.GetNoteX(this._startNote.SlideTarget,false) - offsetX;
				endY = cy + r.GetNoteY(this._startNote.SlideTarget) + 9 / 2;
			} else {
				endX = cx + this._parent.X;
				endY = startY;
			}
			break;
		case 3:
			endX = cx + r.GetNoteX(this._startNote,false) - offsetX;
			endY = cy + r.GetNoteY(this._startNote) + 9 / 2;
			startX = endX - sizeX;
			startY = cy + r.GetNoteY(this._startNote) + 9;
			break;
		case 4:
			endX = cx + r.GetNoteX(this._startNote,false) - offsetX;
			endY = cy + r.GetNoteY(this._startNote) + 9 / 2;
			startX = endX - sizeX;
			startY = cy + r.GetNoteY(this._startNote);
			break;
		case 5:
			startX = cx + r.GetNoteX(this._startNote,true) + offsetX;
			startY = cy + r.GetNoteY(this._startNote) + 9 / 2;
			endX = startX + sizeX;
			endY = cy + r.GetNoteY(this._startNote);
			break;
		case 6:
			startX = cx + r.GetNoteX(this._startNote,true) + offsetX;
			startY = cy + r.GetNoteY(this._startNote) + 9 / 2;
			endX = startX + sizeX;
			endY = cy + r.GetNoteY(this._startNote) + 9;
			break;
		default:
			return;
		}
		canvas.BeginPath();
		canvas.MoveTo(startX,startY);
		canvas.LineTo(endX,endY);
		canvas.Stroke();
	}
	,__class__: alphaTab.rendering.glyphs.ScoreSlideLineGlyph
});
alphaTab.rendering.glyphs.ScoreTieGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreTieGlyph"] = function(startNote,endNote,forEnd) {
	if(forEnd == null) {
		forEnd = false;
	}
	alphaTab.rendering.glyphs.TieGlyph.call(this,startNote == null ? null : startNote.Beat,endNote == null ? null : endNote.Beat,forEnd);
	this._startNote = null;
	this._endNote = null;
	this._startNote = startNote;
	this._endNote = endNote;
};
alphaTab.rendering.glyphs.ScoreTieGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreTieGlyph.__super__ = alphaTab.rendering.glyphs.TieGlyph;
alphaTab.rendering.glyphs.ScoreTieGlyph.prototype = $extend(alphaTab.rendering.glyphs.TieGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.TieGlyph.prototype.DoLayout.call(this);
		this.YOffset = 9 / 2;
	}
	,GetBeamDirection: function(beat,noteRenderer) {
		var _g = (js.Boot.__cast(noteRenderer , alphaTab.rendering.ScoreBarRenderer)).GetBeatDirection(beat);
		if(_g == 0) {
			return 1;
		} else {
			return 0;
		}
	}
	,GetStartY: function(noteRenderer,direction) {
		return noteRenderer.GetNoteY(this._startNote);
	}
	,GetEndY: function(noteRenderer,direction) {
		return noteRenderer.GetNoteY(this._endNote);
	}
	,GetStartX: function(noteRenderer) {
		return noteRenderer.GetNoteX(this._startNote,true);
	}
	,GetEndX: function(noteRenderer) {
		return noteRenderer.GetNoteX(this._endNote,false);
	}
	,__class__: alphaTab.rendering.glyphs.ScoreTieGlyph
});
alphaTab.rendering.glyphs.TimeSignatureGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TimeSignatureGlyph"] = function(x,y,numerator,denominator,isCommon) {
	alphaTab.rendering.glyphs.GlyphGroup.call(this,x,y);
	this._numerator = 0;
	this._denominator = 0;
	this._isCommon = false;
	this._numerator = numerator;
	this._denominator = denominator;
	this._isCommon = isCommon;
};
alphaTab.rendering.glyphs.TimeSignatureGlyph.__name__ = true;
alphaTab.rendering.glyphs.TimeSignatureGlyph.__super__ = alphaTab.rendering.glyphs.GlyphGroup;
alphaTab.rendering.glyphs.TimeSignatureGlyph.prototype = $extend(alphaTab.rendering.glyphs.GlyphGroup.prototype,{
	get_CommonY: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,get_NumeratorY: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,get_DenominatorY: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,get_CommonScale: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,get_NumberScale: function() {
		throw new js._Boot.HaxeError("abstract");
	}
	,DoLayout: function() {
		if(this._isCommon && this._numerator == 2 && this._denominator == 2) {
			var common = new alphaTab.rendering.glyphs.MusicFontGlyph(0,this.get_CommonY(),this.get_CommonScale(),57483);
			common.Width = 14 * this.get_Scale();
			this.AddGlyph(common);
			alphaTab.rendering.glyphs.GlyphGroup.prototype.DoLayout.call(this);
		} else if(this._isCommon && this._numerator == 4 && this._denominator == 4) {
			var common1 = new alphaTab.rendering.glyphs.MusicFontGlyph(0,this.get_CommonY(),this.get_CommonScale(),57482);
			common1.Width = 14 * this.get_Scale();
			this.AddGlyph(common1);
			alphaTab.rendering.glyphs.GlyphGroup.prototype.DoLayout.call(this);
		} else {
			var numerator = new alphaTab.rendering.glyphs.NumberGlyph(0,this.get_NumeratorY(),this._numerator,this.get_NumberScale());
			var denominator = new alphaTab.rendering.glyphs.NumberGlyph(0,this.get_DenominatorY(),this._denominator,this.get_NumberScale());
			this.AddGlyph(numerator);
			this.AddGlyph(denominator);
			alphaTab.rendering.glyphs.GlyphGroup.prototype.DoLayout.call(this);
			var i = 0;
			var j = this.Glyphs.length;
			while(i < j) {
				var g = this.Glyphs[i];
				g.X = (this.Width - g.Width) / 2;
				++i;
			}
		}
	}
	,__class__: alphaTab.rendering.glyphs.TimeSignatureGlyph
});
alphaTab.rendering.glyphs.ScoreTimeSignatureGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["ScoreTimeSignatureGlyph"] = function(x,y,numerator,denominator,isCommon) {
	alphaTab.rendering.glyphs.TimeSignatureGlyph.call(this,x,y,numerator,denominator,isCommon);
};
alphaTab.rendering.glyphs.ScoreTimeSignatureGlyph.__name__ = true;
alphaTab.rendering.glyphs.ScoreTimeSignatureGlyph.__super__ = alphaTab.rendering.glyphs.TimeSignatureGlyph;
alphaTab.rendering.glyphs.ScoreTimeSignatureGlyph.prototype = $extend(alphaTab.rendering.glyphs.TimeSignatureGlyph.prototype,{
	get_CommonY: function() {
		var renderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.ScoreBarRenderer);
		return renderer.GetScoreY(4,0);
	}
	,get_NumeratorY: function() {
		return 2 * this.get_Scale();
	}
	,get_DenominatorY: function() {
		return 20 * this.get_Scale();
	}
	,get_CommonScale: function() {
		return 1;
	}
	,get_NumberScale: function() {
		return 1;
	}
	,__class__: alphaTab.rendering.glyphs.ScoreTimeSignatureGlyph
});
alphaTab.rendering.glyphs.SharpGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["SharpGlyph"] = function(x,y,isGrace) {
	if(isGrace == null) {
		isGrace = false;
	}
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,isGrace ? 0.75 : 1,57954);
	this._isGrace = false;
	this._isGrace = isGrace;
};
alphaTab.rendering.glyphs.SharpGlyph.__name__ = true;
alphaTab.rendering.glyphs.SharpGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.SharpGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 8 * (this._isGrace ? 0.75 : 1) * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.SharpGlyph
});
alphaTab.rendering.glyphs.SpacingGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["SpacingGlyph"] = function(x,y,width) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this.Width = width;
};
alphaTab.rendering.glyphs.SpacingGlyph.__name__ = true;
alphaTab.rendering.glyphs.SpacingGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.SpacingGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	__class__: alphaTab.rendering.glyphs.SpacingGlyph
});
alphaTab.rendering.glyphs.TabBeatContainerGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabBeatContainerGlyph"] = function(beat,voiceContainer) {
	alphaTab.rendering.glyphs.BeatContainerGlyph.call(this,beat,voiceContainer);
	this._bendGlyphs = null;
};
alphaTab.rendering.glyphs.TabBeatContainerGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabBeatContainerGlyph.__super__ = alphaTab.rendering.glyphs.BeatContainerGlyph;
alphaTab.rendering.glyphs.TabBeatContainerGlyph.prototype = $extend(alphaTab.rendering.glyphs.BeatContainerGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.BeatContainerGlyph.prototype.DoLayout.call(this);
		var this1 = [];
		this._bendGlyphs = this1;
		var i = 0;
		while(i < this.Beat.Notes.length) {
			var n = this.Beat.Notes[i];
			if(n.get_HasBend()) {
				var bendValueHeight = 6;
				var bendHeight = n.MaxBendPoint.Value * bendValueHeight;
				var this2 = bendHeight;
				this.Renderer.RegisterOverflowTop(this2);
				var this3 = bendValueHeight;
				var bend = new alphaTab.rendering.glyphs.BendGlyph(n,this3);
				bend.X = this.OnNotes.X + this.OnNotes.Width;
				bend.Renderer = this.Renderer;
				this._bendGlyphs.push(bend);
			}
			++i;
		}
	}
	,ScaleToWidth: function(beatWidth) {
		alphaTab.rendering.glyphs.BeatContainerGlyph.prototype.ScaleToWidth.call(this,beatWidth);
		var i = 0;
		while(i < this._bendGlyphs.length) {
			var g = this._bendGlyphs[i];
			g.Width = beatWidth - g.X;
			++i;
		}
	}
	,CreateTies: function(n) {
		var renderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		if(n.IsTieOrigin && renderer.ShowTiedNotes) {
			var tie = new alphaTab.rendering.glyphs.TabTieGlyph(n,n.TieDestination,false,false);
			this.Ties.push(tie);
		}
		if(n.IsTieDestination && renderer.ShowTiedNotes) {
			var tie1 = new alphaTab.rendering.glyphs.TabTieGlyph(n.TieOrigin,n,false,true);
			this.Ties.push(tie1);
		} else if(n.IsHammerPullOrigin) {
			if(n.HammerPullOrigin == null) {
				var destination = n.HammerPullDestination;
				while(destination.HammerPullDestination != null) destination = destination.HammerPullDestination;
				var tie2 = new alphaTab.rendering.glyphs.TabTieGlyph(n,destination,false,false);
				this.Ties.push(tie2);
			}
		} else if(n.get_IsHammerPullDestination()) {
			if(n.HammerPullDestination == null) {
				var origin = n.HammerPullOrigin;
				while(origin.HammerPullOrigin != null) origin = origin.HammerPullOrigin;
				var tie3 = new alphaTab.rendering.glyphs.TabTieGlyph(origin,n,false,true);
				this.Ties.push(tie3);
			}
		} else if(n.SlideType == 2) {
			var tie4 = new alphaTab.rendering.glyphs.TabTieGlyph(n,n.SlideTarget,true,false);
			this.Ties.push(tie4);
		}
		if(n.SlideType != 0) {
			var l = new alphaTab.rendering.glyphs.TabSlideLineGlyph(n.SlideType,n,this);
			this.Ties.push(l);
		}
	}
	,Paint: function(cx,cy,canvas) {
		alphaTab.rendering.glyphs.BeatContainerGlyph.prototype.Paint.call(this,cx,cy,canvas);
		var i = 0;
		while(i < this._bendGlyphs.length) {
			var g = this._bendGlyphs[i];
			g.Paint(cx + this.X,cy + this.Y,canvas);
			++i;
		}
	}
	,__class__: alphaTab.rendering.glyphs.TabBeatContainerGlyph
});
alphaTab.rendering.glyphs.TabBeatGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabBeatGlyph"] = function() {
	alphaTab.rendering.glyphs.BeatOnNoteGlyphBase.call(this);
};
alphaTab.rendering.glyphs.TabBeatGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabBeatGlyph.__super__ = alphaTab.rendering.glyphs.BeatOnNoteGlyphBase;
alphaTab.rendering.glyphs.TabBeatGlyph.prototype = $extend(alphaTab.rendering.glyphs.BeatOnNoteGlyphBase.prototype,{
	DoLayout: function() {
		var tabRenderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		if(!this.Container.Beat.get_IsRest()) {
			this.NoteNumbers = new alphaTab.rendering.glyphs.TabNoteChordGlyph(0,0,this.Container.Beat.GraceType != 0);
			this.NoteNumbers.Beat = this.Container.Beat;
			this.NoteNumbers.BeamingHelper = this.BeamingHelper;
			var note = $iterator(this.Container.Beat.Notes)();
			while(note.hasNext()) {
				var note1 = note.next();
				this.CreateNoteGlyph(note1);
			}
			this.AddGlyph(this.NoteNumbers);
			if(this.Container.Beat.get_HasWhammyBar() && !this.NoteNumbers.BeatEffects.hasOwnProperty("Whammy")) {
				this.NoteNumbers.BeatEffects["Whammy"] = new alphaTab.rendering.glyphs.WhammyBarGlyph(this.Container.Beat,this.Container);
				var whammyValueHeight = 60.0 * this.get_Scale() / 24;
				var whammyHeight = this.Container.Beat.MaxWhammyPoint.Value * whammyValueHeight;
				this.Renderer.RegisterOverflowTop(whammyHeight);
			}
			if(this.Container.Beat.get_IsTremolo() && !this.NoteNumbers.BeatEffects.hasOwnProperty("Tremolo")) {
				var offset = 0;
				var speed = this.Container.Beat.TremoloSpeed;
				switch(speed) {
				case 8:
					offset = 0;
					break;
				case 16:
					offset = 5;
					break;
				case 32:
					offset = 10;
					break;
				default:
				}
				this.NoteNumbers.BeatEffects["Tremolo"] = new alphaTab.rendering.glyphs.TremoloPickingGlyph(5 * this.get_Scale(),offset * this.get_Scale(),this.Container.Beat.TremoloSpeed);
			}
			if(this.Container.Beat.Dots > 0 && tabRenderer.RenderRhythm) {
				this.AddGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,5 * this.get_Scale()));
				var i = 0;
				while(i < this.Container.Beat.Dots) {
					var this1 = 1.5;
					this.AddGlyph(new alphaTab.rendering.glyphs.CircleGlyph(0,tabRenderer.get_LineOffset() * tabRenderer.Bar.Staff.Track.Tuning.length + tabRenderer.RhythmHeight,this1 * this.get_Scale()));
					++i;
				}
			}
		} else {
			var line = 0;
			var offset1 = 0;
			var _g = this.Container.Beat.Duration;
			switch(_g) {
			case -4:
				line = 3;
				break;
			case -2:
				line = 3;
				break;
			case 1:
				line = 2;
				break;
			case 2:
				line = 3;
				break;
			case 4:
				line = 3;
				break;
			case 8:
				line = 2;
				offset1 = 5;
				break;
			case 16:
				line = 2;
				offset1 = 5;
				break;
			case 32:
				line = 3;
				break;
			case 64:
				line = 3;
				break;
			case 128:
				line = 3;
				break;
			case 256:
				line = 3;
				break;
			default:
			}
			var this2 = offset1;
			var y = tabRenderer.GetTabY(line,this2);
			this.RestGlyph = new alphaTab.rendering.glyphs.TabRestGlyph(0,y,tabRenderer.ShowRests,this.Container.Beat.Duration);
			this.RestGlyph.Beat = this.Container.Beat;
			this.RestGlyph.BeamingHelper = this.BeamingHelper;
			this.AddGlyph(this.RestGlyph);
			if(this.Container.Beat.Dots > 0 && tabRenderer.ShowRests) {
				this.AddGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,5 * this.get_Scale()));
				var i1 = 0;
				while(i1 < this.Container.Beat.Dots) {
					var this3 = 1.5;
					this.AddGlyph(new alphaTab.rendering.glyphs.CircleGlyph(0,y,this3 * this.get_Scale()));
					++i1;
				}
			}
		}
		if(this.Glyphs == null) {
			return;
		}
		var w = 0;
		var i2 = 0;
		var j = this.Glyphs.length;
		while(i2 < j) {
			var g = this.Glyphs[i2];
			g.X = w;
			g.Renderer = this.Renderer;
			g.DoLayout();
			w = w + g.Width;
			++i2;
		}
		this.Width = w;
	}
	,UpdateBeamingHelper: function() {
		if(!this.Container.Beat.get_IsRest()) {
			this.NoteNumbers.UpdateBeamingHelper(this.Container.X + this.X);
		} else {
			this.RestGlyph.UpdateBeamingHelper(this.Container.X + this.X);
		}
	}
	,CreateNoteGlyph: function(n) {
		var tr = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		var noteNumberGlyph = new alphaTab.rendering.glyphs.NoteNumberGlyph(0,0,n);
		var l = n.Beat.Voice.Bar.Staff.Track.Tuning.length - n.String + 1;
		var this1 = l;
		noteNumberGlyph.Y = tr.GetTabY(this1,-2);
		noteNumberGlyph.Renderer = this.Renderer;
		noteNumberGlyph.DoLayout();
		this.NoteNumbers.AddNoteGlyph(noteNumberGlyph,n);
	}
	,__class__: alphaTab.rendering.glyphs.TabBeatGlyph
});
alphaTab.rendering.glyphs.TabBeatPreNotesGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabBeatPreNotesGlyph"] = function() {
	alphaTab.rendering.glyphs.BeatGlyphBase.call(this);
};
alphaTab.rendering.glyphs.TabBeatPreNotesGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabBeatPreNotesGlyph.__super__ = alphaTab.rendering.glyphs.BeatGlyphBase;
alphaTab.rendering.glyphs.TabBeatPreNotesGlyph.prototype = $extend(alphaTab.rendering.glyphs.BeatGlyphBase.prototype,{
	DoLayout: function() {
		if(this.Container.Beat.BrushType != 0 && !this.Container.Beat.get_IsRest()) {
			this.AddGlyph(new alphaTab.rendering.glyphs.TabBrushGlyph(this.Container.Beat));
			this.AddGlyph(new alphaTab.rendering.glyphs.SpacingGlyph(0,0,4 * this.get_Scale()));
		}
		alphaTab.rendering.glyphs.BeatGlyphBase.prototype.DoLayout.call(this);
	}
	,__class__: alphaTab.rendering.glyphs.TabBeatPreNotesGlyph
});
alphaTab.rendering.glyphs.TabBrushGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabBrushGlyph"] = function(beat) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this._beat = null;
	this._beat = beat;
};
alphaTab.rendering.glyphs.TabBrushGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabBrushGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.TabBrushGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 10 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var tabBarRenderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		var res = this.Renderer.get_Resources();
		var startY = cy + this.X + (tabBarRenderer.GetNoteY(this._beat.get_MaxNote()) - res.TablatureFont.Size / 2);
		var endY = cy + this.Y + tabBarRenderer.GetNoteY(this._beat.get_MinNote()) + res.TablatureFont.Size / 2;
		var arrowX = system.Convert.ToInt32_Single(cx + this.X + this.Width / 2);
		var arrowSize = 8 * this.get_Scale();
		if(this._beat.BrushType != 0) {
			if(this._beat.BrushType == 1 || this._beat.BrushType == 2) {
				canvas.BeginPath();
				var this1 = arrowX;
				canvas.MoveTo(this1,startY);
				var this2 = arrowX;
				canvas.LineTo(this2,endY);
				canvas.Stroke();
			}
			if(this._beat.BrushType == 1 || this._beat.BrushType == 3) {
				canvas.BeginPath();
				var this3 = arrowX;
				canvas.MoveTo(this3,endY);
				canvas.LineTo(arrowX + arrowSize / 2,endY - arrowSize);
				canvas.LineTo(arrowX - arrowSize / 2,endY - arrowSize);
				canvas.ClosePath();
				canvas.Fill();
			} else {
				canvas.BeginPath();
				var this4 = arrowX;
				canvas.MoveTo(this4,startY);
				canvas.LineTo(arrowX + arrowSize / 2,startY + arrowSize);
				canvas.LineTo(arrowX - arrowSize / 2,startY + arrowSize);
				canvas.ClosePath();
				canvas.Fill();
			}
		}
	}
	,__class__: alphaTab.rendering.glyphs.TabBrushGlyph
});
alphaTab.rendering.glyphs.TabClefGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabClefGlyph"] = function(x,y) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
};
alphaTab.rendering.glyphs.TabClefGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabClefGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.TabClefGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 28 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var strings = this.Renderer.Bar.Staff.Track.Tuning.length;
		var this1 = 0.5;
		var correction = strings * this.get_Scale() * this1;
		var symbol = strings <= 4 ? 57454 : 57453;
		var scale;
		if(strings <= 4) {
			var this2 = 4.5;
			scale = strings / this2;
		} else {
			var this3 = 6.5;
			scale = strings / this3;
		}
		canvas.FillMusicFontSymbol(cx + this.X + 5 * this.get_Scale(),cy + this.Y - correction,scale * this.get_Scale(),symbol);
	}
	,__class__: alphaTab.rendering.glyphs.TabClefGlyph
});
alphaTab.rendering.glyphs.TabNoteChordGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabNoteChordGlyph"] = function(x,y,isGrace) {
	alphaTab.rendering.glyphs.Glyph.call(this,x,y);
	this._notes = null;
	this._isGrace = false;
	this.Beat = null;
	this.BeamingHelper = null;
	this.MinStringNote = null;
	this.BeatEffects = null;
	this.NotesPerString = null;
	this._isGrace = isGrace;
	var this1 = [];
	this._notes = this1;
	var this2 = {}
	this.BeatEffects = this2;
	var this3 = {}
	this.NotesPerString = this3;
};
alphaTab.rendering.glyphs.TabNoteChordGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabNoteChordGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.TabNoteChordGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	GetNoteX: function(note,onEnd) {
		if(onEnd == null) {
			onEnd = true;
		}
		if(this.NotesPerString.hasOwnProperty(note.String)) {
			var n = this.NotesPerString[note.String];
			var pos = this.X + n.X;
			if(onEnd) {
				pos = pos + n.Width;
			}
			return pos;
		}
		return 0;
	}
	,GetNoteY: function(note) {
		if(this.NotesPerString.hasOwnProperty(note.String)) {
			return this.Y + this.NotesPerString[note.String].Y;
		}
		return 0;
	}
	,DoLayout: function() {
		var w = 0;
		var i = 0;
		var j = this._notes.length;
		while(i < j) {
			var g = this._notes[i];
			g.Renderer = this.Renderer;
			g.DoLayout();
			if(g.Width > w) {
				w = g.Width;
			}
			++i;
		}
		var tabHeight = this.Renderer.get_Resources().TablatureFont.Size;
		var effectY = this.GetNoteY(this.MinStringNote) + tabHeight / 2;
		var effectSpacing = 7 * this.get_Scale();
		var this1 = this.BeatEffects;
		var beatEffectKey = $iterator(Object.keys(this1))();
		while(beatEffectKey.hasNext()) {
			var beatEffectKey1 = beatEffectKey.next();
			var g1 = this.BeatEffects[beatEffectKey1];
			g1.Y = g1.Y + effectY;
			g1.X = g1.X + this.Width / 2;
			g1.Renderer = this.Renderer;
			effectY = effectY + effectSpacing;
			g1.DoLayout();
		}
		this.Width = w;
	}
	,AddNoteGlyph: function(noteGlyph,note) {
		this._notes.push(noteGlyph);
		this.NotesPerString[note.String] = noteGlyph;
		if(this.MinStringNote == null || note.String < this.MinStringNote.String) {
			this.MinStringNote = note;
		}
	}
	,Paint: function(cx,cy,canvas) {
		cx = cx + this.X;
		cy = cy + this.Y;
		var res = this.Renderer.get_Resources();
		var oldBaseLine = canvas.get_TextBaseline();
		canvas.set_TextBaseline(1);
		canvas.set_Font(this._isGrace ? res.GraceFont : res.TablatureFont);
		var notes = this._notes;
		var w = this.Width;
		var g = $iterator(notes)();
		while(g.hasNext()) {
			var g1 = g.next();
			g1.Renderer = this.Renderer;
			g1.Width = w;
			g1.Paint(cx,cy,canvas);
		}
		canvas.set_TextBaseline(oldBaseLine);
		var this1 = this.BeatEffects;
		var beatEffectKey = $iterator(Object.keys(this1))();
		while(beatEffectKey.hasNext()) {
			var beatEffectKey1 = beatEffectKey.next();
			var g2 = this.BeatEffects[beatEffectKey1];
			g2.Paint(cx,cy,canvas);
		}
	}
	,UpdateBeamingHelper: function(cx) {
		if(this.BeamingHelper != null && this.BeamingHelper.IsPositionFrom("tab",this.Beat)) {
			this.BeamingHelper.RegisterBeatLineX("tab",this.Beat,cx + this.X + this.Width,cx + this.X);
		}
	}
	,__class__: alphaTab.rendering.glyphs.TabNoteChordGlyph
});
alphaTab.rendering.glyphs.TabRestGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabRestGlyph"] = function(x,y,isVisibleRest,duration) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,1,alphaTab.rendering.glyphs.ScoreRestGlyph.GetSymbol(duration));
	this._isVisibleRest = false;
	this._duration = null;
	this.BeamingHelper = null;
	this._isVisibleRest = isVisibleRest;
	this._duration = duration;
};
alphaTab.rendering.glyphs.TabRestGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabRestGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.TabRestGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		if(this._isVisibleRest) {
			this.Width = alphaTab.rendering.glyphs.ScoreRestGlyph.GetSize(this._duration) * this.get_Scale();
		} else {
			this.Width = 10 * this.get_Scale();
		}
	}
	,UpdateBeamingHelper: function(cx) {
		if(this.BeamingHelper != null && this.BeamingHelper.IsPositionFrom("tab",this.Beat)) {
			this.BeamingHelper.RegisterBeatLineX("tab",this.Beat,cx + this.X + this.Width,cx + this.X);
		}
	}
	,Paint: function(cx,cy,canvas) {
		if(this._isVisibleRest) {
			alphaTab.rendering.glyphs.MusicFontGlyph.prototype.Paint.call(this,cx,cy,canvas);
		}
	}
	,__class__: alphaTab.rendering.glyphs.TabRestGlyph
});
alphaTab.rendering.glyphs.TabSlideLineGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabSlideLineGlyph"] = function(type,startNote,parent) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this._startNote = null;
	this._type = null;
	this._parent = null;
	this._type = type;
	this._startNote = startNote;
	this._parent = parent;
};
alphaTab.rendering.glyphs.TabSlideLineGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabSlideLineGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.TabSlideLineGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		this.Width = 0;
	}
	,Paint: function(cx,cy,canvas) {
		var r = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		cx = cx + r.X;
		cy = cy + r.Y;
		var sizeX = 12 * this.get_Scale();
		var sizeY = 3 * this.get_Scale();
		var startX;
		var startY;
		var endX;
		var endY;
		var _g = this._type;
		switch(_g) {
		case 1:case 2:
			var startOffsetY;
			var endOffsetY;
			if(this._startNote.SlideTarget == null) {
				startOffsetY = 0;
				endOffsetY = 0;
			} else if(this._startNote.SlideTarget.Fret > this._startNote.Fret) {
				startOffsetY = sizeY;
				endOffsetY = sizeY * -1;
			} else {
				startOffsetY = sizeY * -1;
				endOffsetY = sizeY;
			}
			startX = cx + r.GetNoteX(this._startNote,true);
			startY = cy + r.GetNoteY(this._startNote) + startOffsetY;
			if(this._startNote.SlideTarget != null) {
				endX = cx + r.GetNoteX(this._startNote.SlideTarget,false);
				endY = cy + r.GetNoteY(this._startNote.SlideTarget) + endOffsetY;
			} else {
				endX = cx + this._parent.X;
				endY = startY;
			}
			break;
		case 3:
			endX = cx + r.GetNoteX(this._startNote,false);
			endY = cy + r.GetNoteY(this._startNote);
			startX = endX - sizeX;
			startY = cy + r.GetNoteY(this._startNote) + sizeY;
			break;
		case 4:
			endX = cx + r.GetNoteX(this._startNote,false);
			endY = cy + r.GetNoteY(this._startNote);
			startX = endX - sizeX;
			startY = cy + r.GetNoteY(this._startNote) - sizeY;
			break;
		case 5:
			startX = cx + r.GetNoteX(this._startNote,true);
			startY = cy + r.GetNoteY(this._startNote);
			endX = startX + sizeX;
			endY = cy + r.GetNoteY(this._startNote) - sizeY;
			break;
		case 6:
			startX = cx + r.GetNoteX(this._startNote,true);
			startY = cy + r.GetNoteY(this._startNote);
			endX = startX + sizeX;
			endY = cy + r.GetNoteY(this._startNote) + sizeY;
			break;
		default:
			return;
		}
		canvas.BeginPath();
		canvas.MoveTo(startX,startY);
		canvas.LineTo(endX,endY);
		canvas.Stroke();
	}
	,__class__: alphaTab.rendering.glyphs.TabSlideLineGlyph
});
alphaTab.rendering.glyphs.TabTieGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabTieGlyph"] = function(startNote,endNote,forSlide,forEnd) {
	if(forEnd == null) {
		forEnd = false;
	}
	alphaTab.rendering.glyphs.TieGlyph.call(this,startNote.Beat,endNote.Beat,forEnd);
	this._startNote = null;
	this._endNote = null;
	this._forSlide = false;
	this._startNote = startNote;
	this._endNote = endNote;
	this._forSlide = forSlide;
};
alphaTab.rendering.glyphs.TabTieGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabTieGlyph.__super__ = alphaTab.rendering.glyphs.TieGlyph;
alphaTab.rendering.glyphs.TabTieGlyph.prototype = $extend(alphaTab.rendering.glyphs.TieGlyph.prototype,{
	get_Offset: function() {
		if(this._forSlide) {
			return 5 * this.get_Scale();
		} else {
			return 0;
		}
	}
	,GetBeamDirection: function(beat,noteRenderer) {
		if(this._startNote.String > 3) {
			return 1;
		} else {
			return 0;
		}
	}
	,GetStartY: function(noteRenderer,direction) {
		return noteRenderer.GetNoteY(this._startNote) - this.get_Offset();
	}
	,GetEndY: function(noteRenderer,direction) {
		return noteRenderer.GetNoteY(this._endNote) - this.get_Offset();
	}
	,GetStartX: function(noteRenderer) {
		return noteRenderer.GetNoteX(this._startNote,true);
	}
	,GetEndX: function(noteRenderer) {
		return noteRenderer.GetNoteX(this._endNote,false);
	}
	,__class__: alphaTab.rendering.glyphs.TabTieGlyph
});
alphaTab.rendering.glyphs.TabTimeSignatureGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TabTimeSignatureGlyph"] = function(x,y,numerator,denominator,isCommon) {
	alphaTab.rendering.glyphs.TimeSignatureGlyph.call(this,x,y,numerator,denominator,isCommon);
};
alphaTab.rendering.glyphs.TabTimeSignatureGlyph.__name__ = true;
alphaTab.rendering.glyphs.TabTimeSignatureGlyph.__super__ = alphaTab.rendering.glyphs.TimeSignatureGlyph;
alphaTab.rendering.glyphs.TabTimeSignatureGlyph.prototype = $extend(alphaTab.rendering.glyphs.TimeSignatureGlyph.prototype,{
	get_CommonY: function() {
		var renderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		return renderer.GetTabY(0,0);
	}
	,get_NumeratorY: function() {
		var renderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		var offset;
		if(renderer.Bar.Staff.Track.Tuning.length <= 4) {
			var this1 = 4;
			offset = 1 / this1;
		} else {
			var this2 = 3;
			offset = 1 / this2;
		}
		return renderer.get_LineOffset() * renderer.Bar.Staff.Track.Tuning.length * offset * this.get_Scale();
	}
	,get_DenominatorY: function() {
		var renderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		var offset;
		if(renderer.Bar.Staff.Track.Tuning.length <= 4) {
			var this1 = 5;
			offset = 3 / this1;
		} else {
			var this2 = 5;
			offset = 3 / this2;
		}
		return renderer.get_LineOffset() * renderer.Bar.Staff.Track.Tuning.length * offset * this.get_Scale();
	}
	,get_CommonScale: function() {
		return 1;
	}
	,get_NumberScale: function() {
		var renderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		if(renderer.Bar.Staff.Track.Tuning.length <= 4) {
			return 0.75;
		} else {
			return 1;
		}
	}
	,__class__: alphaTab.rendering.glyphs.TabTimeSignatureGlyph
});
alphaTab.rendering.glyphs.TempoGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TempoGlyph"] = function(x,y,tempo) {
	alphaTab.rendering.glyphs.EffectGlyph.call(this,x,y);
	this._tempo = 0;
	this._tempo = tempo;
};
alphaTab.rendering.glyphs.TempoGlyph.__name__ = true;
alphaTab.rendering.glyphs.TempoGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.TempoGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.EffectGlyph.prototype.DoLayout.call(this);
		this.Height = 25 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var res = this.Renderer.get_Resources();
		canvas.set_Font(res.MarkerFont);
		var this1 = 0.8;
		canvas.FillMusicFontSymbol(cx + this.X,cy + this.Y + this.Height * this1,0.75,57813);
		canvas.FillText("= " + this._tempo,cx + this.X + this.Height / 2,cy + this.Y + canvas.get_Font().Size / 2);
	}
	,__class__: alphaTab.rendering.glyphs.TempoGlyph
});
alphaTab.rendering.glyphs.TextGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TextGlyph"] = function(x,y,text,font,textAlign) {
	if(textAlign == null) {
		textAlign = 0;
	}
	alphaTab.rendering.glyphs.EffectGlyph.call(this,x,y);
	this._text = null;
	this.Font = null;
	this.TextAlign = null;
	this._text = text;
	this.Font = font;
	this.TextAlign = textAlign;
};
alphaTab.rendering.glyphs.TextGlyph.__name__ = true;
alphaTab.rendering.glyphs.TextGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.TextGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.EffectGlyph.prototype.DoLayout.call(this);
		this.Height = this.Font.Size;
	}
	,Paint: function(cx,cy,canvas) {
		canvas.set_Font(this.Font);
		var old = canvas.get_TextAlign();
		canvas.set_TextAlign(this.TextAlign);
		canvas.FillText(this._text,cx + this.X,cy + this.Y);
		canvas.set_TextAlign(old);
	}
	,__class__: alphaTab.rendering.glyphs.TextGlyph
});
alphaTab.rendering.glyphs.TremoloPickingGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TremoloPickingGlyph"] = function(x,y,duration) {
	alphaTab.rendering.glyphs.MusicFontGlyph.call(this,x,y,1,alphaTab.rendering.glyphs.TremoloPickingGlyph.GetSymbol(duration));
};
alphaTab.rendering.glyphs.TremoloPickingGlyph.__name__ = true;
alphaTab.rendering.glyphs.TremoloPickingGlyph.GetSymbol = function(duration) {
	switch(duration) {
	case 8:
		return 57888;
	case 16:
		return 57889;
	case 32:
		return 57890;
	default:
		return -1;
	}
};
alphaTab.rendering.glyphs.TremoloPickingGlyph.__super__ = alphaTab.rendering.glyphs.MusicFontGlyph;
alphaTab.rendering.glyphs.TremoloPickingGlyph.prototype = $extend(alphaTab.rendering.glyphs.MusicFontGlyph.prototype,{
	DoLayout: function() {
		this.Width = 12 * this.get_Scale();
	}
	,__class__: alphaTab.rendering.glyphs.TremoloPickingGlyph
});
alphaTab.rendering.glyphs.TrillGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TrillGlyph"] = function(x,y) {
	alphaTab.rendering.glyphs.EffectGlyph.call(this,x,y);
};
alphaTab.rendering.glyphs.TrillGlyph.__name__ = true;
alphaTab.rendering.glyphs.TrillGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.TrillGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.EffectGlyph.prototype.DoLayout.call(this);
		this.Height = 20 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		var res = this.Renderer.get_Resources();
		canvas.set_Font(res.MarkerFont);
		var textw = canvas.MeasureText("tr");
		canvas.FillText("tr",cx + this.X,cy + this.Y + canvas.get_Font().Size / 2);
		var startX = textw + 3 * this.get_Scale();
		var endX = this.Width - startX;
		var waveScale = 1.2;
		var step = 11 * this.get_Scale() * waveScale;
		var loops = Math.max(1,(endX - startX) / step);
		var loopX = startX;
		var loopY = cy + this.Y + this.Height;
		var i = 0;
		while(i < loops) {
			canvas.FillMusicFontSymbol(cx + this.X + loopX,loopY,waveScale,60068);
			loopX = loopX + step;
			++i;
		}
	}
	,__class__: alphaTab.rendering.glyphs.TrillGlyph
});
alphaTab.rendering.glyphs.TripletFeelGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TripletFeelGlyph"] = function(tripletFeel) {
	alphaTab.rendering.glyphs.EffectGlyph.call(this,0,0);
	this._tripletFeel = null;
	this._tripletFeel = tripletFeel;
};
alphaTab.rendering.glyphs.TripletFeelGlyph.__name__ = true;
alphaTab.rendering.glyphs.TripletFeelGlyph.__super__ = alphaTab.rendering.glyphs.EffectGlyph;
alphaTab.rendering.glyphs.TripletFeelGlyph.prototype = $extend(alphaTab.rendering.glyphs.EffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.EffectGlyph.prototype.DoLayout.call(this);
		this.Height = 25 * this.get_Scale();
	}
	,Paint: function(cx,cy,canvas) {
		cx = cx + this.X;
		cy = cy + this.Y;
		var this1 = 0.75;
		var noteY = cy + this.Height * this1;
		canvas.set_Font(this.Renderer.get_Resources().EffectFont);
		var this2 = 0.3;
		canvas.FillText("(",cx,cy + this.Height * this2);
		var leftNoteX = cx + 10 * this.get_Scale();
		var rightNoteX = cx + 40 * this.get_Scale();
		var _g = this._tripletFeel;
		switch(_g) {
		case 0:
			this.RenderBarNote(leftNoteX,noteY,0.40,canvas,[0]);
			this.RenderBarNote(rightNoteX,noteY,0.40,canvas,[0]);
			break;
		case 1:
			this.RenderBarNote(leftNoteX,noteY,0.40,canvas,[0,0]);
			this.RenderBarNote(rightNoteX,noteY,0.40,canvas,[0,2]);
			this.RenderTriplet(rightNoteX,cy,canvas);
			break;
		case 2:
			this.RenderBarNote(leftNoteX,noteY,0.40,canvas,[0]);
			canvas.FillMusicFontSymbol(rightNoteX,noteY,0.40,57813);
			canvas.FillMusicFontSymbol(rightNoteX + 12 * this.get_Scale(),noteY,0.40,57815);
			this.RenderTriplet(rightNoteX,cy,canvas);
			break;
		case 3:
			this.RenderBarNote(leftNoteX,noteY,0.40,canvas,[0,0]);
			this.RenderBarNote(rightNoteX,noteY,0.40,canvas,[0,0,2]);
			canvas.FillCircle(rightNoteX + 9 * this.get_Scale(),noteY,this.get_Scale());
			break;
		case 4:
			this.RenderBarNote(leftNoteX,noteY,0.40,canvas,[0]);
			this.RenderBarNote(rightNoteX,noteY,0.40,canvas,[0,2]);
			canvas.FillCircle(rightNoteX + 9 * this.get_Scale(),noteY,this.get_Scale());
			break;
		case 5:
			this.RenderBarNote(leftNoteX,noteY,0.40,canvas,[0,0]);
			this.RenderBarNote(rightNoteX,noteY,0.40,canvas,[0,0,1]);
			canvas.FillCircle(rightNoteX + 12 * this.get_Scale() + 8 * this.get_Scale(),noteY,this.get_Scale());
			break;
		case 6:
			this.RenderBarNote(leftNoteX,noteY,0.40,canvas,[0]);
			this.RenderBarNote(rightNoteX,noteY,0.40,canvas,[0,1]);
			canvas.FillCircle(rightNoteX + 12 * this.get_Scale() + 8 * this.get_Scale(),noteY,this.get_Scale());
			break;
		default:
		}
		canvas.FillText("=",cx + 30 * this.get_Scale(),cy + 5 * this.get_Scale());
		var this3 = 0.3;
		canvas.FillText(")",cx + 65 * this.get_Scale(),cy + this.Height * this3);
	}
	,RenderBarNote: function(cx,noteY,noteScale,canvas,bars) {
		canvas.FillMusicFontSymbol(cx,noteY,noteScale,57813);
		var this1 = 2;
		var partialBarWidth = 12 / this1 * this.get_Scale();
		var i = 0;
		while(i < bars.length) {
			var _g = bars[i];
			switch(_g) {
			case 0:
				canvas.FillRect(cx + 4 * this.get_Scale(),noteY - 12 * this.get_Scale() + 3 * this.get_Scale() * i,12 * this.get_Scale(),2 * this.get_Scale());
				break;
			case 1:
				canvas.FillRect(cx + 4 * this.get_Scale(),noteY - 12 * this.get_Scale() + 3 * this.get_Scale() * i,partialBarWidth,2 * this.get_Scale());
				break;
			case 2:
				canvas.FillRect(cx + 4 * this.get_Scale() + partialBarWidth,noteY - 12 * this.get_Scale() + 3 * this.get_Scale() * i,partialBarWidth,2 * this.get_Scale());
				break;
			default:
			}
			++i;
		}
		canvas.FillMusicFontSymbol(cx + 12 * this.get_Scale(),noteY,noteScale,57813);
	}
	,RenderTriplet: function(cx,cy,canvas) {
		cy = cy + 2 * this.get_Scale();
		var font = this.Renderer.get_Resources().EffectFont;
		var this1 = 0.8;
		canvas.set_Font(new alphaTab.platform.model.Font(font.Family,font.Size * this1,font.Style));
		var rightX = cx + 12 * this.get_Scale() + 3 * this.get_Scale();
		canvas.BeginPath();
		canvas.MoveTo(cx,cy + 3 * this.get_Scale());
		canvas.LineTo(cx,cy);
		canvas.LineTo(cx + 5 * this.get_Scale(),cy);
		canvas.MoveTo(rightX + 5 * this.get_Scale(),cy + 3 * this.get_Scale());
		canvas.LineTo(rightX + 5 * this.get_Scale(),cy);
		canvas.LineTo(rightX,cy);
		canvas.Stroke();
		canvas.FillText("3",cx + 7 * this.get_Scale(),cy - 10 * this.get_Scale());
		canvas.set_Font(font);
	}
	,__class__: alphaTab.rendering.glyphs.TripletFeelGlyph
});
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType = {};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_ = $hx_exports["alphaTab"]["rendering"]["glyphs"]["_TripletFeelGlyph_BarType"]["TripletFeelGlyph_BarType_Impl_"] = {};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.__name__ = true;
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Full";
	case 1:
		return "PartialLeft";
	case 2:
		return "PartialRight";
	}
	return "";
};
alphaTab.rendering.glyphs.TuningGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["TuningGlyph"] = function(x,y,scale,resources,tuning) {
	alphaTab.rendering.glyphs.GlyphGroup.call(this,x,y);
	this._scale = 0.0;
	this._resources = null;
	this.Height = 0.0;
	this._scale = scale;
	this._resources = resources;
	this.CreateGlyphs(tuning);
};
alphaTab.rendering.glyphs.TuningGlyph.__name__ = true;
alphaTab.rendering.glyphs.TuningGlyph.__super__ = alphaTab.rendering.glyphs.GlyphGroup;
alphaTab.rendering.glyphs.TuningGlyph.prototype = $extend(alphaTab.rendering.glyphs.GlyphGroup.prototype,{
	CreateGlyphs: function(tuning) {
		this.AddGlyph(new alphaTab.rendering.glyphs.TextGlyph(0,0,tuning.Name,this._resources.EffectFont,0));
		this.Height = this.Height + 15 * this._scale;
		if(!tuning.IsStandard) {
			var this1 = Math.ceil(tuning.Tunings.length / 2.0);
			var stringsPerColumn = system.Convert.ToInt32_Double(this1);
			var currentX = 0;
			var currentY = this.Height;
			var i = 0;
			var j = tuning.Tunings.length;
			while(i < j) {
				var str = "(" + (i + 1) + ") = " + alphaTab.model.Tuning.GetTextForTuning(tuning.Tunings[i],false);
				this.AddGlyph(new alphaTab.rendering.glyphs.TextGlyph(currentX,currentY,str,this._resources.EffectFont,0));
				currentY = currentY + this.Height;
				if(i == stringsPerColumn - 1) {
					currentY = this.Height;
					currentX = currentX + 43 * this._scale;
				}
				++i;
			}
			this.Height = this.Height + stringsPerColumn * (15 * this._scale);
		}
	}
	,__class__: alphaTab.rendering.glyphs.TuningGlyph
});
alphaTab.rendering.glyphs.VibratoGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["VibratoGlyph"] = function(x,y,scale) {
	if(scale == null) {
		scale = 1.2;
	}
	alphaTab.rendering.glyphs.GroupedEffectGlyph.call(this,3);
	this._scale = 0.0;
	this._scale = scale;
	this.X = x;
	this.Y = y;
};
alphaTab.rendering.glyphs.VibratoGlyph.__name__ = true;
alphaTab.rendering.glyphs.VibratoGlyph.__super__ = alphaTab.rendering.glyphs.GroupedEffectGlyph;
alphaTab.rendering.glyphs.VibratoGlyph.prototype = $extend(alphaTab.rendering.glyphs.GroupedEffectGlyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.GroupedEffectGlyph.prototype.DoLayout.call(this);
		this.Height = 10 * this.get_Scale() * this._scale;
	}
	,PaintGrouped: function(cx,cy,endX,canvas) {
		var startX = cx + this.X;
		var width = endX - startX;
		var step = 9 * this.get_Scale() * this._scale;
		var loops = system.Convert.ToInt32_Single(Math.max(1,width / step));
		var h = this.Height;
		var loopX = 0;
		var i = 0;
		while(i < loops) {
			canvas.FillMusicFontSymbol(cx + this.X + loopX,cy + this.Y + h,this._scale,60068);
			loopX = loopX + step;
			++i;
		}
	}
	,__class__: alphaTab.rendering.glyphs.VibratoGlyph
});
alphaTab.rendering.glyphs.VoiceContainerGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["VoiceContainerGlyph"] = function(x,y,voice) {
	alphaTab.rendering.glyphs.GlyphGroup.call(this,x,y);
	this.BeatGlyphs = null;
	this.Voice = null;
	this.MinWidth = 0.0;
	this.Voice = voice;
	var this1 = [];
	this.BeatGlyphs = this1;
};
alphaTab.rendering.glyphs.VoiceContainerGlyph.__name__ = true;
alphaTab.rendering.glyphs.VoiceContainerGlyph.__super__ = alphaTab.rendering.glyphs.GlyphGroup;
alphaTab.rendering.glyphs.VoiceContainerGlyph.prototype = $extend(alphaTab.rendering.glyphs.GlyphGroup.prototype,{
	ScaleToWidth: function(width) {
		var force = this.Renderer.LayoutingInfo.SpaceToForce(width);
		this.ScaleToForce(force);
	}
	,ScaleToForce: function(force) {
		this.Width = this.Renderer.LayoutingInfo.CalculateVoiceWidth(force);
		var positions = this.Renderer.LayoutingInfo.BuildOnTimePositions(force);
		var beatGlyphs = this.BeatGlyphs;
		var i = 0;
		var j = beatGlyphs.length;
		while(i < j) {
			var currentBeatGlyph = beatGlyphs[i];
			var time = currentBeatGlyph.Beat.get_AbsoluteStart();
			currentBeatGlyph.X = positions[time] - currentBeatGlyph.OnTimeX;
			if(i > 0) {
				var beatWidth = currentBeatGlyph.X - beatGlyphs[i - 1].X;
				beatGlyphs[i - 1].ScaleToWidth(beatWidth);
			}
			if(i == j - 1) {
				var beatWidth1 = this.Width - beatGlyphs[beatGlyphs.length - 1].X;
				currentBeatGlyph.ScaleToWidth(beatWidth1);
			}
			++i;
		}
	}
	,RegisterLayoutingInfo: function(info) {
		info.UpdateVoiceSize(this.Width);
		var beatGlyphs = this.BeatGlyphs;
		var b = $iterator(beatGlyphs)();
		while(b.hasNext()) {
			var b1 = b.next();
			b1.RegisterLayoutingInfo(info);
		}
	}
	,ApplyLayoutingInfo: function(info) {
		var beatGlyphs = this.BeatGlyphs;
		var b = $iterator(beatGlyphs)();
		while(b.hasNext()) {
			var b1 = b.next();
			b1.ApplyLayoutingInfo(info);
		}
		this.ScaleToForce(Math.max(this.Renderer.get_Settings().StretchForce,info.MinStretchForce));
	}
	,AddGlyph: function(g) {
		g.X = this.BeatGlyphs.length == 0 ? 0 : this.BeatGlyphs[this.BeatGlyphs.length - 1].X + this.BeatGlyphs[this.BeatGlyphs.length - 1].Width;
		g.Renderer = this.Renderer;
		g.DoLayout();
		this.BeatGlyphs.push(js.Boot.__cast(g , alphaTab.rendering.glyphs.BeatContainerGlyph));
		this.Width = g.X + g.Width;
	}
	,DoLayout: function() {
		this.MinWidth = this.Width;
	}
	,Paint: function(cx,cy,canvas) {
		canvas.set_Color(this.Voice.Index == 0 ? this.Renderer.ScoreRenderer.RenderingResources.MainGlyphColor : this.Renderer.ScoreRenderer.RenderingResources.SecondaryGlyphColor);
		var i = 0;
		var j = this.BeatGlyphs.length;
		while(i < j) {
			this.BeatGlyphs[i].Paint(cx + this.X,cy + this.Y,canvas);
			++i;
		}
	}
	,__class__: alphaTab.rendering.glyphs.VoiceContainerGlyph
});
alphaTab.rendering.glyphs.WhammyBarGlyph = $hx_exports["alphaTab"]["rendering"]["glyphs"]["WhammyBarGlyph"] = function(beat,parent) {
	alphaTab.rendering.glyphs.Glyph.call(this,0,0);
	this._beat = null;
	this._parent = null;
	this._beat = beat;
	this._parent = parent;
};
alphaTab.rendering.glyphs.WhammyBarGlyph.__name__ = true;
alphaTab.rendering.glyphs.WhammyBarGlyph.__super__ = alphaTab.rendering.glyphs.Glyph;
alphaTab.rendering.glyphs.WhammyBarGlyph.prototype = $extend(alphaTab.rendering.glyphs.Glyph.prototype,{
	DoLayout: function() {
		alphaTab.rendering.glyphs.Glyph.prototype.DoLayout.call(this);
		var minY = 0;
		var maxY = 0;
		var sizeY = 60.0 * this.get_Scale();
		if(this._beat.WhammyBarPoints.length >= 2) {
			var dy = sizeY / 24;
			var i = 0;
			var j = this._beat.WhammyBarPoints.length;
			while(i < j) {
				var pt = this._beat.WhammyBarPoints[i];
				var ptY = 0 - dy * pt.Value;
				if(ptY > maxY) {
					maxY = ptY;
				}
				if(ptY < minY) {
					minY = ptY;
				}
				++i;
			}
		}
		var tabBarRenderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		var track = this.Renderer.Bar.Staff.Track;
		var tabTop = tabBarRenderer.GetTabY(0,-2);
		var this1 = track.Tuning.length;
		var tabBottom = tabBarRenderer.GetTabY(this1,-2);
		var absMinY = minY + tabTop;
		var absMaxY = maxY - tabBottom;
		if(absMinY < 0) {
			tabBarRenderer.RegisterOverflowTop(Math.abs(absMinY));
		}
		if(absMaxY > 0) {
			tabBarRenderer.RegisterOverflowBottom(Math.abs(absMaxY));
		}
	}
	,Paint: function(cx,cy,canvas) {
		var tabBarRenderer = js.Boot.__cast(this.Renderer , alphaTab.rendering.TabBarRenderer);
		var res = this.Renderer.get_Resources();
		var startX = cx + this.X + this._parent.OnNotes.Width / 2;
		var endX = this._beat.NextBeat == null || this._beat.Voice != this._beat.NextBeat.Voice ? cx + this.X + this._parent.Width : cx + tabBarRenderer.GetBeatX(this._beat.NextBeat,0);
		var startY = cy;
		var sizeY = 60.0 * this.get_Scale();
		var old = canvas.get_TextAlign();
		canvas.set_TextAlign(1);
		if(this._beat.WhammyBarPoints.length >= 2) {
			var dx = (endX - startX) / 60;
			var dy = sizeY / 24;
			canvas.BeginPath();
			var i = 0;
			var j = this._beat.WhammyBarPoints.length - 1;
			while(i < j) {
				var pt1 = this._beat.WhammyBarPoints[i];
				var pt2 = this._beat.WhammyBarPoints[i + 1];
				if(pt1.Value == pt2.Value && i == this._beat.WhammyBarPoints.length - 2) {
					++i;
					continue;
				}
				var pt1X = startX + dx * pt1.Offset;
				var pt1Y = startY - dy * pt1.Value;
				var pt2X = startX + dx * pt2.Offset;
				var pt2Y = startY - dy * pt2.Value;
				canvas.MoveTo(pt1X,pt1Y);
				canvas.LineTo(pt2X,pt2Y);
				if(pt2.Value != 0) {
					var dv = pt2.Value;
					var s = "";
					if(dv >= 4 || dv <= -4) {
						var steps = dv / 4 | 0;
						s = s + Std.string(steps);
						dv = dv - steps * 4;
					}
					if(dv > 0) {
						s = s + alphaTab.rendering.glyphs.BendGlyph.GetFractionSign(dv);
					}
					if(s != "") {
						canvas.set_Font(res.GraceFont);
						var sy = pt2Y;
						if(pt2Y < pt1Y) {
							sy = sy - canvas.get_Font().Size;
						} else {
							sy = sy + 3 * this.get_Scale();
						}
						var sx = pt2X;
						canvas.FillText(s,sx,sy);
					}
				}
				++i;
			}
			canvas.Stroke();
		}
		canvas.set_TextAlign(old);
	}
	,__class__: alphaTab.rendering.glyphs.WhammyBarGlyph
});
alphaTab.rendering.layout._HeaderFooterElements = {};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_ = $hx_exports["alphaTab"]["rendering"]["layout"]["_HeaderFooterElements"]["HeaderFooterElements_Impl_"] = {};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.__name__ = true;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Title";
	case 2:
		return "SubTitle";
	case 4:
		return "Artist";
	case 8:
		return "Album";
	case 16:
		return "Words";
	case 32:
		return "Music";
	case 64:
		return "WordsAndMusic";
	case 128:
		return "Copyright";
	case 256:
		return "PageNumber";
	case 511:
		return "All";
	}
	return "";
};
alphaTab.rendering.layout.HorizontalScreenLayoutPartialInfo = $hx_exports["alphaTab"]["rendering"]["layout"]["HorizontalScreenLayoutPartialInfo"] = function() {
	this.Width = 0.0;
	this.MasterBars = null;
	var this1 = [];
	this.MasterBars = this1;
};
alphaTab.rendering.layout.HorizontalScreenLayoutPartialInfo.__name__ = true;
alphaTab.rendering.layout.HorizontalScreenLayoutPartialInfo.prototype = {
	__class__: alphaTab.rendering.layout.HorizontalScreenLayoutPartialInfo
};
alphaTab.rendering.staves = {};
alphaTab.rendering.staves.BarLayoutingInfo = $hx_exports["alphaTab"]["rendering"]["staves"]["BarLayoutingInfo"] = function() {
	this._timeSortedSprings = null;
	this._xMin = 0.0;
	this._onTimePositionsForce = 0.0;
	this._onTimePositions = null;
	this.Version = 0;
	this.PreBeatSizes = null;
	this.OnBeatSizes = null;
	this.PreBeatSize = 0.0;
	this.PostBeatSize = 0.0;
	this.VoiceSize = 0.0;
	this.MinStretchForce = 0.0;
	this.TotalSpringConstant = 0.0;
	this.Springs = null;
	this.SmallestDuration = 0;
	var this1 = {}
	this.PreBeatSizes = this1;
	var this2 = {}
	this.OnBeatSizes = this2;
	this.VoiceSize = 0;
	var this3 = {}
	this.Springs = this3;
	this.Version = 0;
};
alphaTab.rendering.staves.BarLayoutingInfo.__name__ = true;
alphaTab.rendering.staves.BarLayoutingInfo.prototype = {
	UpdateVoiceSize: function(size) {
		if(size > this.VoiceSize) {
			this.VoiceSize = size;
			this.Version++;
		}
	}
	,SetPreBeatSize: function(beat,size) {
		if(!this.PreBeatSizes.hasOwnProperty(beat.Index) || this.PreBeatSizes[beat.Index] < size) {
			this.PreBeatSizes[beat.Index] = size;
			this.Version++;
		}
	}
	,GetPreBeatSize: function(beat) {
		if(this.PreBeatSizes.hasOwnProperty(beat.Index)) {
			return this.PreBeatSizes[beat.Index];
		}
		return 0;
	}
	,SetOnBeatSize: function(beat,size) {
		if(!this.OnBeatSizes.hasOwnProperty(beat.Index) || this.OnBeatSizes[beat.Index] < size) {
			this.OnBeatSizes[beat.Index] = size;
			this.Version++;
		}
	}
	,GetOnBeatSize: function(beat) {
		if(this.OnBeatSizes.hasOwnProperty(beat.Index)) {
			return this.OnBeatSizes[beat.Index];
		}
		return 0;
	}
	,UpdateMinStretchForce: function(force) {
		if(this.MinStretchForce < force) {
			this.MinStretchForce = force;
			this.Version++;
		}
	}
	,AddSpring: function(start,duration,springSize,preSpringSize) {
		this.Version++;
		var spring;
		if(!this.Springs.hasOwnProperty(start)) {
			spring = new alphaTab.rendering.staves.Spring();
			spring.TimePosition = start;
			spring.SmallestDuration = duration;
			spring.LongestDuration = duration;
			spring.SpringWidth = springSize;
			spring.PreSpringWidth = preSpringSize;
			this.Springs[start] = spring;
		} else {
			spring = this.Springs[start];
			if(spring.SpringWidth < springSize) {
				spring.SpringWidth = springSize;
			}
			if(spring.PreSpringWidth < preSpringSize) {
				spring.PreSpringWidth = preSpringSize;
			}
			if(duration < spring.SmallestDuration) {
				spring.SmallestDuration = duration;
			}
			if(duration > spring.LongestDuration) {
				spring.LongestDuration = duration;
			}
		}
		if(duration < this.SmallestDuration) {
			this.SmallestDuration = duration;
		}
		return spring;
	}
	,AddBeatSpring: function(beat,beatSize,preBeatSize) {
		return this.AddSpring(beat.get_AbsoluteStart(),beat.CalculateDuration(),beatSize,preBeatSize);
	}
	,Finish: function() {
		this.CalculateSpringConstants();
		this.Version++;
	}
	,CalculateSpringConstants: function() {
		var this1 = [];
		var sortedSprings = this._timeSortedSprings = this1;
		this._xMin = 0;
		var springs = this.Springs;
		var time = $iterator(Object.keys(springs))();
		while(time.hasNext()) {
			var time1 = time.next();
			var spring = springs[time1];
			sortedSprings.push(spring);
			if(spring.SpringWidth < this._xMin) {
				this._xMin = spring.SpringWidth;
			}
		}
		var comparison = function(a,b) {
			if(a.TimePosition < b.TimePosition) {
				return -1;
			}
			if(a.TimePosition > b.TimePosition) {
				return 1;
			}
			return 0;
		};
		sortedSprings.sort(function(a1,b1) {
			return comparison(a1,b1);
		});
		var totalSpringConstant = 0;
		var i = 0;
		while(i < sortedSprings.length) {
			var currentSpring = sortedSprings[i];
			var duration;
			if(i == sortedSprings.length - 1) {
				duration = currentSpring.LongestDuration;
			} else {
				var nextSpring = sortedSprings[i + 1];
				duration = nextSpring.TimePosition - currentSpring.TimePosition;
			}
			var this2 = duration;
			currentSpring.SpringConstant = this.CalculateSpringConstant(currentSpring,this2);
			totalSpringConstant = totalSpringConstant + 1 / currentSpring.SpringConstant;
			++i;
		}
		this.TotalSpringConstant = 1 / totalSpringConstant;
		var i1 = 0;
		while(i1 < sortedSprings.length) {
			var force = sortedSprings[i1].SpringWidth * sortedSprings[i1].SpringConstant;
			this.UpdateMinStretchForce(force);
			++i1;
		}
	}
	,CalculateSpringConstant: function(spring,duration) {
		var this1 = spring.SmallestDuration;
		var minDuration = this1;
		if(spring.SmallestDuration == 0) {
			minDuration = duration;
		}
		var this2 = 0.6;
		var phi = 1 + this2 * Math.log2(duration / js.Boot.__cast(30 , Float));
		return minDuration / duration / (phi * 10);
	}
	,SpaceToForce: function(space) {
		return space * this.TotalSpringConstant;
	}
	,CalculateVoiceWidth: function(force) {
		return this.CalculateWidth(force,this.TotalSpringConstant);
	}
	,CalculateWidth: function(force,springConstant) {
		return force / springConstant;
	}
	,BuildOnTimePositions: function(force) {
		if(Math.abs(this._onTimePositionsForce - force) < 0.00001 && this._onTimePositions != null) {
			return this._onTimePositions;
		}
		this._onTimePositionsForce = force;
		var this1 = {}
		var positions = this._onTimePositions = this1;
		var sortedSprings = this._timeSortedSprings;
		if(sortedSprings.length == 0) {
			return positions;
		}
		var springX = sortedSprings[0].PreSpringWidth;
		var i = 0;
		while(i < sortedSprings.length) {
			positions[sortedSprings[i].TimePosition] = springX;
			springX = springX + this.CalculateWidth(force,sortedSprings[i].SpringConstant);
			++i;
		}
		return positions;
	}
	,__class__: alphaTab.rendering.staves.BarLayoutingInfo
};
alphaTab.rendering.staves.MasterBarsRenderers = $hx_exports["alphaTab"]["rendering"]["staves"]["MasterBarsRenderers"] = function() {
	this.Width = 0.0;
	this.IsLinkedToPrevious = false;
	this.MasterBar = null;
	this.Renderers = null;
	this.LayoutingInfo = null;
	var this1 = [];
	this.Renderers = this1;
};
alphaTab.rendering.staves.MasterBarsRenderers.__name__ = true;
alphaTab.rendering.staves.MasterBarsRenderers.prototype = {
	__class__: alphaTab.rendering.staves.MasterBarsRenderers
};
alphaTab.rendering.staves.Spring = $hx_exports["alphaTab"]["rendering"]["staves"]["Spring"] = function() {
};
alphaTab.rendering.staves.Spring.__name__ = true;
alphaTab.rendering.staves.Spring.prototype = {
	__class__: alphaTab.rendering.staves.Spring
};
alphaTab.rendering.staves.Staff = $hx_exports["alphaTab"]["rendering"]["staves"]["Staff"] = function(trackIndex,staff,factory) {
	this._factory = null;
	this.StaveTrackGroup = null;
	this.StaveGroup = null;
	this.BarRenderers = null;
	this.X = 0.0;
	this.Y = 0.0;
	this.Height = 0.0;
	this.Index = 0;
	this.StaffIndex = 0;
	this.TrackIndex = 0;
	this.ModelStaff = null;
	this.StaveTop = 0.0;
	this.TopSpacing = 0.0;
	this.BottomSpacing = 0.0;
	this.StaveBottom = 0.0;
	this.IsFirstInAccolade = false;
	this.IsLastInAccolade = false;
	var this1 = [];
	this.BarRenderers = this1;
	this.TrackIndex = trackIndex;
	this.ModelStaff = staff;
	this._factory = factory;
	this.TopSpacing = 15;
	this.BottomSpacing = 5;
	this.StaveTop = 0;
	this.StaveBottom = 0;
};
alphaTab.rendering.staves.Staff.__name__ = true;
alphaTab.rendering.staves.Staff.prototype = {
	get_StaveId: function() {
		return this._factory.get_StaffId();
	}
	,get_IsInAccolade: function() {
		return this._factory.IsInAccolade;
	}
	,RegisterStaffTop: function(offset) {
		this.StaveTop = offset;
	}
	,RegisterStaffBottom: function(offset) {
		this.StaveBottom = offset;
	}
	,AddBarRenderer: function(renderer) {
		renderer.Staff = this;
		renderer.Index = this.BarRenderers.length;
		renderer.ReLayout();
		this.BarRenderers.push(renderer);
		this.StaveGroup.Layout.RegisterBarRenderer(this.get_StaveId(),renderer);
	}
	,AddBar: function(bar,layoutingInfo) {
		var renderer;
		if(bar == null) {
			renderer = new alphaTab.rendering.BarRendererBase(this.StaveGroup.Layout.Renderer,bar);
		} else {
			renderer = this._factory.Create(this.StaveGroup.Layout.Renderer,bar,this.StaveGroup.Layout.Renderer.Settings.Staves);
		}
		renderer.Staff = this;
		renderer.Index = this.BarRenderers.length;
		renderer.LayoutingInfo = layoutingInfo;
		renderer.DoLayout();
		renderer.RegisterLayoutingInfo();
		this.BarRenderers.push(renderer);
		if(bar != null) {
			this.StaveGroup.Layout.RegisterBarRenderer(this.get_StaveId(),renderer);
		}
	}
	,RevertLastBar: function() {
		var lastBar = this.BarRenderers[this.BarRenderers.length - 1];
		var index = this.BarRenderers.length - 1;
		if(index != -1) {
			this.BarRenderers.splice(index,1);
		}
		this.StaveGroup.Layout.UnregisterBarRenderer(this.get_StaveId(),lastBar);
	}
	,ScaleToWidth: function(width) {
		var difference = width - this.StaveGroup.Width;
		var spacePerBar = difference / this.BarRenderers.length;
		var i = 0;
		var j = this.BarRenderers.length;
		while(i < j) {
			this.BarRenderers[i].ScaleToWidth(this.BarRenderers[i].Width + spacePerBar);
			++i;
		}
	}
	,get_TopOverflow: function() {
		var m = 0;
		var i = 0;
		var j = this.BarRenderers.length;
		while(i < j) {
			var r = this.BarRenderers[i];
			if(r.TopOverflow > m) {
				m = r.TopOverflow;
			}
			++i;
		}
		return m;
	}
	,get_BottomOverflow: function() {
		var m = 0;
		var i = 0;
		var j = this.BarRenderers.length;
		while(i < j) {
			var r = this.BarRenderers[i];
			if(r.BottomOverflow > m) {
				m = r.BottomOverflow;
			}
			++i;
		}
		return m;
	}
	,FinalizeStave: function() {
		var x = 0;
		this.Height = 0;
		var topOverflow = this.get_TopOverflow();
		var bottomOverflow = this.get_BottomOverflow();
		var i = 0;
		while(i < this.BarRenderers.length) {
			this.BarRenderers[i].X = x;
			this.BarRenderers[i].Y = this.TopSpacing + topOverflow;
			this.Height = Math.max(this.Height,this.BarRenderers[i].Height);
			this.BarRenderers[i].FinalizeRenderer();
			x = x + this.BarRenderers[i].Width;
			++i;
		}
		if(this.Height > 0) {
			this.Height = this.Height + (this.TopSpacing + topOverflow + bottomOverflow + this.BottomSpacing);
		}
	}
	,Paint: function(cx,cy,canvas,startIndex,count) {
		if(this.Height == 0 || count == 0) {
			return;
		}
		var i = startIndex;
		var j = Math.min(startIndex + count,this.BarRenderers.length);
		while(i < j) {
			this.BarRenderers[i].Paint(cx + this.X,cy + this.Y,canvas);
			++i;
		}
	}
	,__class__: alphaTab.rendering.staves.Staff
};
alphaTab.rendering.staves.StaveGroup = $hx_exports["alphaTab"]["rendering"]["staves"]["StaveGroup"] = function() {
	this._allStaves = null;
	this._firstStaffInAccolade = null;
	this._lastStaffInAccolade = null;
	this.X = 0.0;
	this.Y = 0.0;
	this.Index = 0;
	this._accoladeSpacingCalculated = false;
	this.AccoladeSpacing = 0.0;
	this.IsFull = false;
	this.Width = 0.0;
	this.IsLast = false;
	this.MasterBarsRenderers = null;
	this.Staves = null;
	this.Layout = null;
	var this1 = [];
	this.MasterBarsRenderers = this1;
	var this2 = [];
	this.Staves = this2;
	var this3 = [];
	this._allStaves = this3;
	this.Width = 0;
	this.Index = 0;
	this._accoladeSpacingCalculated = false;
	this.AccoladeSpacing = 0;
};
alphaTab.rendering.staves.StaveGroup.__name__ = true;
alphaTab.rendering.staves.StaveGroup.prototype = {
	get_FirstBarIndex: function() {
		return this.MasterBarsRenderers[0].MasterBar.Index;
	}
	,get_LastBarIndex: function() {
		return this.MasterBarsRenderers[this.MasterBarsRenderers.length - 1].MasterBar.Index;
	}
	,AddMasterBarRenderers: function(tracks,renderers) {
		if(tracks.length == 0) {
			return null;
		}
		this.MasterBarsRenderers.push(renderers);
		this.CalculateAccoladeSpacing(tracks);
		renderers.LayoutingInfo.PreBeatSize = 0;
		var src = 0;
		var i = 0;
		var j = this.Staves.length;
		while(i < j) {
			var g = this.Staves[i];
			var k = 0;
			var l = g.Staves.length;
			while(k < l) {
				var s = g.Staves[k];
				var renderer = renderers.Renderers[src++];
				s.AddBarRenderer(renderer);
				++k;
			}
			++i;
		}
		this.UpdateWidth();
		return renderers;
	}
	,AddBars: function(tracks,barIndex) {
		if(tracks.length == 0) {
			return null;
		}
		var result = new alphaTab.rendering.staves.MasterBarsRenderers();
		result.LayoutingInfo = new alphaTab.rendering.staves.BarLayoutingInfo();
		result.MasterBar = tracks[0].Score.MasterBars[barIndex];
		this.MasterBarsRenderers.push(result);
		this.CalculateAccoladeSpacing(tracks);
		var barLayoutingInfo = result.LayoutingInfo;
		var g = $iterator(this.Staves)();
		while(g.hasNext()) {
			var g1 = g.next();
			var s = $iterator(g1.Staves)();
			while(s.hasNext()) {
				var s1 = s.next();
				s1.AddBar(g1.Track.Staves[s1.ModelStaff.Index].Bars[barIndex],barLayoutingInfo);
				var renderer = s1.BarRenderers[s1.BarRenderers.length - 1];
				result.Renderers.push(renderer);
				if(renderer.IsLinkedToPrevious) {
					result.IsLinkedToPrevious = true;
				}
			}
		}
		barLayoutingInfo.Finish();
		result.Width = this.UpdateWidth();
		return result;
	}
	,RevertLastBar: function() {
		if(this.MasterBarsRenderers.length > 1) {
			var index = this.MasterBarsRenderers.length - 1;
			if(index != -1) {
				this.MasterBarsRenderers.splice(index,1);
			}
			var w = 0;
			var i = 0;
			var j = this._allStaves.length;
			while(i < j) {
				var s = this._allStaves[i];
				w = Math.max(w,s.BarRenderers[s.BarRenderers.length - 1].Width);
				s.RevertLastBar();
				++i;
			}
			this.Width = this.Width - w;
		}
	}
	,UpdateWidth: function() {
		var realWidth = 0;
		var i = 0;
		var j = this._allStaves.length;
		while(i < j) {
			var s = this._allStaves[i];
			s.BarRenderers[s.BarRenderers.length - 1].ApplyLayoutingInfo();
			if(s.BarRenderers[s.BarRenderers.length - 1].Width > realWidth) {
				realWidth = s.BarRenderers[s.BarRenderers.length - 1].Width;
			}
			++i;
		}
		this.Width = this.Width + realWidth;
		return realWidth;
	}
	,CalculateAccoladeSpacing: function(tracks) {
		if(!this._accoladeSpacingCalculated && this.Index == 0) {
			this._accoladeSpacingCalculated = true;
			if(this.Layout.Renderer.Settings.Layout.Get("hideTrackNames",false)) {
				this.AccoladeSpacing = 0;
			} else {
				var canvas = this.Layout.Renderer.Canvas;
				var res = this.Layout.Renderer.RenderingResources.EffectFont;
				canvas.set_Font(res);
				var i = 0;
				while(i < tracks.length) {
					this.AccoladeSpacing = Math.max(this.AccoladeSpacing,canvas.MeasureText(tracks[i].ShortName));
					++i;
				}
				this.AccoladeSpacing = this.AccoladeSpacing + 2 * 10;
				this.Width = this.Width + this.AccoladeSpacing;
			}
		}
	}
	,GetStaveTrackGroup: function(track) {
		var i = 0;
		var j = this.Staves.length;
		while(i < j) {
			var g = this.Staves[i];
			if(g.Track == track) {
				return g;
			}
			++i;
		}
		return null;
	}
	,AddStaff: function(track,staff) {
		var group = this.GetStaveTrackGroup(track);
		if(group == null) {
			group = new alphaTab.rendering.staves.StaveTrackGroup(this,track);
			this.Staves.push(group);
		}
		staff.StaveTrackGroup = group;
		staff.StaveGroup = this;
		staff.Index = this._allStaves.length;
		this._allStaves.push(staff);
		group.Staves.push(staff);
		if(staff.get_IsInAccolade()) {
			if(this._firstStaffInAccolade == null) {
				this._firstStaffInAccolade = staff;
				staff.IsFirstInAccolade = true;
			}
			if(group.FirstStaffInAccolade == null) {
				group.FirstStaffInAccolade = staff;
			}
			if(this._lastStaffInAccolade == null) {
				this._lastStaffInAccolade = staff;
				staff.IsLastInAccolade = true;
			}
			if(this._lastStaffInAccolade != null) {
				this._lastStaffInAccolade.IsLastInAccolade = false;
			}
			this._lastStaffInAccolade = staff;
			this._lastStaffInAccolade.IsLastInAccolade = true;
			group.LastStaffInAccolade = staff;
		}
	}
	,get_Height: function() {
		return this._allStaves[this._allStaves.length - 1].Y + this._allStaves[this._allStaves.length - 1].Height;
	}
	,ScaleToWidth: function(width) {
		var i = 0;
		var j = this._allStaves.length;
		while(i < j) {
			this._allStaves[i].ScaleToWidth(width);
			++i;
		}
		this.Width = width;
	}
	,Paint: function(cx,cy,canvas) {
		this.PaintPartial(cx + this.X,cy + this.Y,canvas,0,this.MasterBarsRenderers.length);
	}
	,PaintPartial: function(cx,cy,canvas,startIndex,count) {
		this.BuildBoundingsLookup(cx,cy);
		var i = 0;
		var j = this._allStaves.length;
		while(i < j) {
			this._allStaves[i].Paint(cx,cy,canvas,startIndex,count);
			++i;
		}
		var res = this.Layout.Renderer.RenderingResources;
		if(this.Staves.length > 0 && startIndex == 0) {
			if(this._firstStaffInAccolade != null && this._lastStaffInAccolade != null) {
				var firstStart = cy + this._firstStaffInAccolade.Y + this._firstStaffInAccolade.StaveTop + this._firstStaffInAccolade.TopSpacing + this._firstStaffInAccolade.get_TopOverflow();
				var lastEnd = cy + this._lastStaffInAccolade.Y + this._lastStaffInAccolade.TopSpacing + this._lastStaffInAccolade.get_TopOverflow() + this._lastStaffInAccolade.StaveBottom;
				var acooladeX = cx + this._firstStaffInAccolade.X;
				canvas.set_Color(res.BarSeperatorColor);
				canvas.BeginPath();
				canvas.MoveTo(acooladeX,firstStart);
				canvas.LineTo(acooladeX,lastEnd);
				canvas.Stroke();
			}
			canvas.set_Font(res.EffectFont);
			var i1 = 0;
			var j1 = this.Staves.length;
			while(i1 < j1) {
				var g = this.Staves[i1];
				if(g.FirstStaffInAccolade != null && g.LastStaffInAccolade != null) {
					var firstStart1 = cy + g.FirstStaffInAccolade.Y + g.FirstStaffInAccolade.StaveTop + g.FirstStaffInAccolade.TopSpacing + g.FirstStaffInAccolade.get_TopOverflow();
					var lastEnd1 = cy + g.LastStaffInAccolade.Y + g.LastStaffInAccolade.TopSpacing + g.LastStaffInAccolade.get_TopOverflow() + g.LastStaffInAccolade.StaveBottom;
					var acooladeX1 = cx + g.FirstStaffInAccolade.X;
					var barSize = 3 * this.Layout.Renderer.Settings.Scale;
					var barOffset = barSize;
					var accoladeStart = firstStart1 - barSize * 4;
					var accoladeEnd = lastEnd1 + barSize * 4;
					if(this.Index == 0 && !this.Layout.Renderer.Settings.Layout.Get("hideTrackNames",false)) {
						canvas.FillText(g.Track.ShortName,cx + 10 * this.Layout.get_Scale(),firstStart1);
					}
					canvas.FillRect(acooladeX1 - barOffset - barSize,accoladeStart,barSize,accoladeEnd - accoladeStart);
					var spikeStartX = acooladeX1 - barOffset - barSize;
					var spikeEndX = acooladeX1 + barSize * 2;
					canvas.BeginPath();
					canvas.MoveTo(spikeStartX,accoladeStart);
					canvas.BezierCurveTo(spikeStartX,accoladeStart,spikeStartX,accoladeStart,spikeEndX,accoladeStart - barSize);
					canvas.BezierCurveTo(acooladeX1,accoladeStart + barSize,spikeStartX,accoladeStart + barSize,spikeStartX,accoladeStart + barSize);
					canvas.ClosePath();
					canvas.Fill();
					canvas.BeginPath();
					canvas.MoveTo(spikeStartX,accoladeEnd);
					canvas.BezierCurveTo(spikeStartX,accoladeEnd,acooladeX1,accoladeEnd,spikeEndX,accoladeEnd + barSize);
					canvas.BezierCurveTo(acooladeX1,accoladeEnd - barSize,spikeStartX,accoladeEnd - barSize,spikeStartX,accoladeEnd - barSize);
					canvas.ClosePath();
					canvas.Fill();
				}
				++i1;
			}
		}
	}
	,FinalizeGroup: function() {
		var currentY = 0;
		var staff = $iterator(this._allStaves)();
		while(staff.hasNext()) {
			var staff1 = staff.next();
			staff1.X = this.AccoladeSpacing;
			staff1.Y = currentY;
			staff1.FinalizeStave();
			currentY = currentY + staff1.Height;
		}
	}
	,BuildBoundingsLookup: function(cx,cy) {
		var _gthis = this;
		if(this.Layout.Renderer.get_BoundsLookup().IsFinished) {
			return;
		}
		if(this._firstStaffInAccolade == null || this._lastStaffInAccolade == null) {
			return;
		}
		var visualTop = cy + this.Y + this._firstStaffInAccolade.Y;
		var visualBottom = cy + this.Y + this._lastStaffInAccolade.Y + this._lastStaffInAccolade.Height;
		var realTop = cy + this.Y + this._allStaves[0].Y;
		var realBottom = cy + this.Y + this._allStaves[this._allStaves.length - 1].Y + this._allStaves[this._allStaves.length - 1].Height;
		var visualHeight = visualBottom - visualTop;
		var realHeight = realBottom - realTop;
		var x = this.X + this._firstStaffInAccolade.X;
		var staveGroupBounds = new alphaTab.rendering.utils.StaveGroupBounds();
		var _tmp = new alphaTab.rendering.utils.Bounds();
		_tmp.X = cx;
		_tmp.Y = cy + _gthis.Y;
		_tmp.W = _gthis.Width;
		_tmp.H = _gthis.get_Height();
		staveGroupBounds.VisualBounds = _tmp;
		var _tmp1 = new alphaTab.rendering.utils.Bounds();
		_tmp1.X = cx;
		_tmp1.Y = cy + _gthis.Y;
		_tmp1.W = _gthis.Width;
		_tmp1.H = _gthis.get_Height();
		staveGroupBounds.RealBounds = _tmp1;
		this.Layout.Renderer.get_BoundsLookup().AddStaveGroup(staveGroupBounds);
		var this1 = [];
		var masterBarBoundsLookup = this1;
		var i = 0;
		while(i < this.Staves.length) {
			var j = 0;
			var k = this.Staves[i].FirstStaffInAccolade.BarRenderers.length;
			while(j < k) {
				var renderer = this.Staves[i].FirstStaffInAccolade.BarRenderers[j];
				if(i == 0) {
					var masterBarBounds = new alphaTab.rendering.utils.MasterBarBounds();
					masterBarBounds.IsFirstOfLine = renderer.get_IsFirstOfLine();
					var _tmp2 = new alphaTab.rendering.utils.Bounds();
					_tmp2.X = x + renderer.X;
					_tmp2.Y = realTop;
					_tmp2.W = renderer.Width;
					_tmp2.H = realHeight;
					masterBarBounds.RealBounds = _tmp2;
					var _tmp3 = new alphaTab.rendering.utils.Bounds();
					_tmp3.X = x + renderer.X;
					_tmp3.Y = visualTop;
					_tmp3.W = renderer.Width;
					_tmp3.H = visualHeight;
					masterBarBounds.VisualBounds = _tmp3;
					this.Layout.Renderer.get_BoundsLookup().AddMasterBar(masterBarBounds);
					masterBarBoundsLookup.push(masterBarBounds);
				}
				renderer.BuildBoundingsLookup(masterBarBoundsLookup[j],x,cy + this.Y + this._firstStaffInAccolade.Y);
				++j;
			}
			++i;
		}
	}
	,GetBarX: function(index) {
		if(this._firstStaffInAccolade == null || this.Layout.Renderer.Tracks.length == 0) {
			return 0;
		}
		var bar = this.Layout.Renderer.Tracks[0].Staves[0].Bars[index];
		var renderer = this.Layout.GetRendererForBar(this._firstStaffInAccolade.get_StaveId(),bar);
		return renderer.X;
	}
	,__class__: alphaTab.rendering.staves.StaveGroup
};
alphaTab.rendering.staves.StaveTrackGroup = $hx_exports["alphaTab"]["rendering"]["staves"]["StaveTrackGroup"] = function(staveGroup,track) {
	this.Track = null;
	this.StaveGroup = null;
	this.Staves = null;
	this.FirstStaffInAccolade = null;
	this.LastStaffInAccolade = null;
	this.StaveGroup = staveGroup;
	this.Track = track;
	var this1 = [];
	this.Staves = this1;
};
alphaTab.rendering.staves.StaveTrackGroup.__name__ = true;
alphaTab.rendering.staves.StaveTrackGroup.prototype = {
	__class__: alphaTab.rendering.staves.StaveTrackGroup
};
alphaTab.rendering.utils.AccidentalHelper = $hx_exports["alphaTab"]["rendering"]["utils"]["AccidentalHelper"] = function() {
	this._registeredAccidentals = null;
	this._appliedScoreLines = null;
	var this1 = {}
	this._registeredAccidentals = this1;
	var this2 = {}
	this._appliedScoreLines = this2;
};
alphaTab.rendering.utils.AccidentalHelper.__name__ = true;
alphaTab.rendering.utils.AccidentalHelper.prototype = {
	ApplyAccidental: function(note) {
		var noteValue = note.get_RealValue();
		var ks = note.Beat.Voice.Bar.get_MasterBar().KeySignature;
		var ksi = ks + 7;
		var index = noteValue % 12;
		var accidentalToSet = 0;
		var line = this.RegisterNoteLine(note);
		if(!note.Beat.Voice.Bar.Staff.Track.IsPercussion) {
			var keySignatureAccidental = ksi < 7 ? 3 : 2;
			var hasNoteAccidentalForKeySignature = alphaTab.rendering.utils.AccidentalHelper.KeySignatureLookup[ksi][index];
			var isAccidentalNote = alphaTab.rendering.utils.AccidentalHelper.AccidentalNotes[index];
			var isAccidentalRegistered = this._registeredAccidentals.hasOwnProperty(line);
			if(hasNoteAccidentalForKeySignature != isAccidentalNote && !isAccidentalRegistered) {
				this._registeredAccidentals[line] = true;
				if(isAccidentalNote) {
					accidentalToSet = keySignatureAccidental;
				} else {
					accidentalToSet = 1;
				}
			} else if(hasNoteAccidentalForKeySignature == isAccidentalNote && isAccidentalRegistered) {
				var this1 = this._registeredAccidentals;
				delete this1[line];
				if(isAccidentalNote) {
					accidentalToSet = keySignatureAccidental;
				} else {
					accidentalToSet = 1;
				}
			}
		}
		return accidentalToSet;
	}
	,RegisterNoteLine: function(n) {
		var track = n.Beat.Voice.Bar.Staff.Track;
		var value = track.IsPercussion ? alphaTab.rendering.utils.PercussionMapper.MapNoteForDisplay(n) : n.get_RealValue() - track.DisplayTranspositionPitch;
		var ks = n.Beat.Voice.Bar.get_MasterBar().KeySignature;
		var clef = n.Beat.Voice.Bar.Clef;
		var index = value % 12;
		var octave = (value / 12 | 0) - 1;
		var steps = alphaTab.rendering.utils.AccidentalHelper.OctaveSteps[clef];
		steps = steps - octave * 7;
		var stepList = alphaTab.model.ModelUtils.KeySignatureIsSharp(ks) || alphaTab.model.ModelUtils.KeySignatureIsNatural(ks) ? alphaTab.rendering.utils.AccidentalHelper.SharpNoteSteps : alphaTab.rendering.utils.AccidentalHelper.FlatNoteSteps;
		var offset = 0;
		var _g = n.AccidentalMode;
		offset = stepList[index];
		steps = steps - stepList[index];
		this._appliedScoreLines[n.Id] = steps;
		return steps;
	}
	,GetNoteLine: function(n) {
		return this._appliedScoreLines[n.Id];
	}
	,__class__: alphaTab.rendering.utils.AccidentalHelper
};
alphaTab.rendering.utils.BarBounds = $hx_exports["alphaTab"]["rendering"]["utils"]["BarBounds"] = function() {
	this.MasterBarBounds = null;
	this.VisualBounds = null;
	this.RealBounds = null;
	this.Bar = null;
	this.Beats = null;
	var this1 = [];
	this.Beats = this1;
};
alphaTab.rendering.utils.BarBounds.__name__ = true;
alphaTab.rendering.utils.BarBounds.prototype = {
	AddBeat: function(bounds) {
		bounds.BarBounds = this;
		this.Beats.push(bounds);
		this.MasterBarBounds.AddBeat(bounds);
	}
	,FindBeatAtPos: function(x) {
		var beat = null;
		var i = 0;
		while(i < this.Beats.length) {
			if(beat == null || this.Beats[i].RealBounds.X < x) {
				beat = this.Beats[i];
			} else if(this.Beats[i].RealBounds.X > x) {
				break;
			}
			++i;
		}
		return beat;
	}
	,__class__: alphaTab.rendering.utils.BarBounds
};
alphaTab.rendering.utils.BarHelpers = $hx_exports["alphaTab"]["rendering"]["utils"]["BarHelpers"] = function(bar) {
	this.BeamHelpers = null;
	this.BeamHelperLookup = null;
	this.TupletHelpers = null;
	var this1 = [];
	this.BeamHelpers = this1;
	var this2 = [];
	this.BeamHelperLookup = this2;
	var this3 = [];
	this.TupletHelpers = this3;
	var currentBeamHelper = null;
	var currentTupletHelper = null;
	if(bar != null) {
		var i = 0;
		var j = bar.Voices.length;
		while(i < j) {
			var v = bar.Voices[i];
			var this4 = this.BeamHelpers;
			var this5 = [];
			this4.push(this5);
			var this6 = this.BeamHelperLookup;
			var this7 = {}
			this6.push(this7);
			var this8 = this.TupletHelpers;
			var this9 = [];
			this8.push(this9);
			var k = 0;
			var l = v.Beats.length;
			while(k < l) {
				var b = v.Beats[k];
				var forceNewTupletHelper = false;
				if(!b.get_IsRest()) {
					if(currentBeamHelper == null || !currentBeamHelper.CheckBeat(b)) {
						if(currentBeamHelper != null) {
							currentBeamHelper.Finish();
							forceNewTupletHelper = currentBeamHelper.Beats.length > 1;
						} else {
							forceNewTupletHelper = true;
						}
						currentBeamHelper = new alphaTab.rendering.utils.BeamingHelper(bar.Staff.Track);
						currentBeamHelper.CheckBeat(b);
						this.BeamHelpers[v.Index].push(currentBeamHelper);
					}
				}
				if(b.get_HasTuplet()) {
					var previousBeat = b.PreviousBeat;
					if(previousBeat != null && previousBeat.Voice != b.Voice) {
						previousBeat = null;
					}
					if(forceNewTupletHelper && currentTupletHelper != null) {
						currentTupletHelper.Finish();
					}
					if(previousBeat == null || currentTupletHelper == null || !currentTupletHelper.Check(b)) {
						currentTupletHelper = new alphaTab.rendering.utils.TupletHelper(v.Index);
						currentTupletHelper.Check(b);
						this.TupletHelpers[v.Index].push(currentTupletHelper);
					}
				}
				this.BeamHelperLookup[v.Index][b.Index] = currentBeamHelper;
				++k;
			}
			if(currentBeamHelper != null) {
				currentBeamHelper.Finish();
			}
			if(currentTupletHelper != null) {
				currentTupletHelper.Finish();
			}
			currentBeamHelper = null;
			currentTupletHelper = null;
			++i;
		}
	}
};
alphaTab.rendering.utils.BarHelpers.__name__ = true;
alphaTab.rendering.utils.BarHelpers.prototype = {
	__class__: alphaTab.rendering.utils.BarHelpers
};
alphaTab.rendering.utils._BeamDirection = {};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_ = $hx_exports["alphaTab"]["rendering"]["utils"]["_BeamDirection"]["BeamDirection_Impl_"] = {};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.__name__ = true;
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Up";
	case 1:
		return "Down";
	}
	return "";
};
alphaTab.rendering.utils.BeamingHelper = $hx_exports["alphaTab"]["rendering"]["utils"]["BeamingHelper"] = function(track) {
	this._lastBeat = null;
	this._track = null;
	this._beatLineXPositions = null;
	this.Voice = null;
	this.Beats = null;
	this.ShortestDuration = null;
	this.FingeringCount = 0;
	this.HasTuplet = false;
	this.FirstMinNote = null;
	this.FirstMaxNote = null;
	this.LastMinNote = null;
	this.LastMaxNote = null;
	this.MinNote = null;
	this.MaxNote = null;
	this.InvertBeamDirection = false;
	this.Direction = null;
	this._track = track;
	var this1 = [];
	this.Beats = this1;
	var this2 = {}
	this._beatLineXPositions = this2;
	this.ShortestDuration = -4;
};
alphaTab.rendering.utils.BeamingHelper.__name__ = true;
alphaTab.rendering.utils.BeamingHelper.CanJoin = function(b1,b2) {
	if(b1 == null || b2 == null || b1.get_IsRest() || b2.get_IsRest() || b1.GraceType != b2.GraceType) {
		return false;
	}
	var m1 = b1.Voice.Bar;
	var m2 = b1.Voice.Bar;
	if(m1 != m2) {
		return false;
	}
	var start1 = b1.Start;
	var start2 = b2.Start;
	if(!alphaTab.rendering.utils.BeamingHelper.CanJoinDuration(b1.Duration) || !alphaTab.rendering.utils.BeamingHelper.CanJoinDuration(b2.Duration)) {
		return start1 == start2;
	}
	var divisionLength = 960;
	var _g = m1.get_MasterBar().TimeSignatureDenominator;
	if(_g == 8) {
		if(m1.get_MasterBar().TimeSignatureNumerator % 3 == 0) {
			divisionLength = divisionLength + (960 / 2 | 0);
		}
	}
	var division1 = (divisionLength + start1) / divisionLength | 0 | 0;
	var division2 = (divisionLength + start2) / divisionLength | 0 | 0;
	return division1 == division2;
};
alphaTab.rendering.utils.BeamingHelper.CanJoinDuration = function(d) {
	switch(d) {
	case 1:case 2:case 4:
		return false;
	default:
		return true;
	}
};
alphaTab.rendering.utils.BeamingHelper.IsFullBarJoin = function(a,b,barIndex) {
	if(alphaTab.model.ModelUtils.GetIndex(a.Duration) - 2 - barIndex > 0) {
		return alphaTab.model.ModelUtils.GetIndex(b.Duration) - 2 - barIndex > 0;
	} else {
		return false;
	}
};
alphaTab.rendering.utils.BeamingHelper.prototype = {
	GetValue: function(n) {
		if(this._track.IsPercussion) {
			return alphaTab.rendering.utils.PercussionMapper.MapNoteForDisplay(n);
		} else {
			return n.get_RealValue() - this._track.DisplayTranspositionPitch;
		}
	}
	,GetBeatLineX: function(beat) {
		if(this.HasBeatLineX(beat)) {
			if(this.Direction == 0) {
				return this._beatLineXPositions[beat.Index].Up;
			}
			return this._beatLineXPositions[beat.Index].Down;
		}
		return 0;
	}
	,HasBeatLineX: function(beat) {
		return this._beatLineXPositions.hasOwnProperty(beat.Index);
	}
	,RegisterBeatLineX: function(staffId,beat,up,down) {
		this._beatLineXPositions[beat.Index] = new alphaTab.rendering.utils.BeatLinePositions(staffId,up,down);
	}
	,Finish: function() {
		this.Direction = this.CalculateDirection();
	}
	,CalculateDirection: function() {
		if(this.Voice.Index > 0) {
			return this.Invert(1);
		}
		if(this.Voice.Bar.Voices.length > 1) {
			var v = 1;
			while(v < this.Voice.Bar.Voices.length) {
				if(!this.Voice.Bar.Voices[v].IsEmpty) {
					return this.Invert(0);
				}
				++v;
			}
		}
		if(this.Beats.length == 1 && (this.Beats[0].Duration == 1 || this.Beats[0].Duration == -2)) {
			return this.Invert(0);
		}
		if(this.Beats[0].GraceType != 0) {
			return this.Invert(0);
		}
		var avg = (this.GetValue(this.MaxNote) + this.GetValue(this.MinNote)) / 2 | 0;
		return this.Invert(avg < alphaTab.rendering.utils.BeamingHelper.ScoreMiddleKeys[this._lastBeat.Voice.Bar.Clef] ? 0 : 1);
	}
	,Invert: function(direction) {
		if(!this.InvertBeamDirection) {
			return direction;
		}
		switch(direction) {
		case 0:
			return 1;
		case 1:
			return 0;
		default:
		}
		return 0;
	}
	,CheckBeat: function(beat) {
		if(beat.InvertBeamDirection) {
			this.InvertBeamDirection = true;
		}
		if(this.Voice == null) {
			this.Voice = beat.Voice;
		}
		var add = false;
		if(this.Beats.length == 0) {
			add = true;
		} else if(alphaTab.rendering.utils.BeamingHelper.CanJoin(this._lastBeat,beat)) {
			add = true;
		}
		if(add) {
			this._lastBeat = beat;
			this.Beats.push(beat);
			if(beat.get_HasTuplet()) {
				this.HasTuplet = true;
			}
			var fingeringCount = 0;
			var n = 0;
			while(n < beat.Notes.length) {
				var note = beat.Notes[n];
				if(note.LeftHandFinger != -2 || note.RightHandFinger != -2) {
					++fingeringCount;
				}
				++n;
			}
			if(fingeringCount > this.FingeringCount) {
				this.FingeringCount = fingeringCount;
			}
			this.CheckNote(beat.get_MinNote());
			this.CheckNote(beat.get_MaxNote());
			if(this.ShortestDuration < beat.Duration) {
				this.ShortestDuration = beat.Duration;
			}
			if(beat.get_HasTuplet()) {
				this.HasTuplet = true;
			}
		}
		return add;
	}
	,CheckNote: function(note) {
		var value = this.GetValue(note);
		if(this.FirstMinNote == null || note.Beat.Start < this.FirstMinNote.Beat.Start) {
			this.FirstMinNote = note;
		} else if(note.Beat.Start == this.FirstMinNote.Beat.Start) {
			if(value < this.GetValue(this.FirstMinNote)) {
				this.FirstMinNote = note;
			}
		}
		if(this.FirstMaxNote == null || note.Beat.Start < this.FirstMaxNote.Beat.Start) {
			this.FirstMaxNote = note;
		} else if(note.Beat.Start == this.FirstMaxNote.Beat.Start) {
			if(value > this.GetValue(this.FirstMaxNote)) {
				this.FirstMaxNote = note;
			}
		}
		if(this.LastMinNote == null || note.Beat.Start > this.LastMinNote.Beat.Start) {
			this.LastMinNote = note;
		} else if(note.Beat.Start == this.LastMinNote.Beat.Start) {
			if(value < this.GetValue(this.LastMinNote)) {
				this.LastMinNote = note;
			}
		}
		if(this.LastMaxNote == null || note.Beat.Start > this.LastMaxNote.Beat.Start) {
			this.LastMaxNote = note;
		} else if(note.Beat.Start == this.LastMaxNote.Beat.Start) {
			if(value > this.GetValue(this.LastMaxNote)) {
				this.LastMaxNote = note;
			}
		}
		if(this.MaxNote == null || value > this.GetValue(this.MaxNote)) {
			this.MaxNote = note;
		}
		if(this.MinNote == null || value < this.GetValue(this.MinNote)) {
			this.MinNote = note;
		}
	}
	,CalculateBeamY: function(stemSize,xCorrection,xPosition,scale,yPosition) {
		return this.CalculateBeamYWithDirection(stemSize,xCorrection,xPosition,scale,yPosition,this.Direction);
	}
	,CalculateBeamYWithDirection: function(stemSize,xCorrection,xPosition,scale,yPosition,direction) {
		if(this.Beats.length == 1) {
			if(direction == 0) {
				return yPosition.GetYPositionForNote(this.MaxNote) - stemSize;
			}
			return yPosition.GetYPositionForNote(this.MinNote) + stemSize;
		}
		var maxDistance = 10 * scale;
		if(direction == 1 && this.MinNote != this.FirstMinNote && this.MinNote != this.LastMinNote) {
			return yPosition.GetYPositionForNote(this.MinNote) + stemSize;
		}
		if(direction == 0 && this.MaxNote != this.FirstMaxNote && this.MaxNote != this.LastMaxNote) {
			return yPosition.GetYPositionForNote(this.MaxNote) - stemSize;
		}
		var startX = this.GetBeatLineX(this.FirstMinNote.Beat) + xCorrection;
		var startY = direction == 0 ? yPosition.GetYPositionForNote(this.FirstMaxNote) - stemSize : yPosition.GetYPositionForNote(this.FirstMinNote) + stemSize;
		var endX = this.GetBeatLineX(this.LastMaxNote.Beat) + xCorrection;
		var endY = direction == 0 ? yPosition.GetYPositionForNote(this.LastMaxNote) - stemSize : yPosition.GetYPositionForNote(this.LastMinNote) + stemSize;
		if(direction == 1 && startY > endY && startY - endY > maxDistance) {
			endY = startY - maxDistance;
		}
		if(direction == 1 && endY > startY && endY - startY > maxDistance) {
			startY = endY - maxDistance;
		}
		if(direction == 0 && startY < endY && endY - startY > maxDistance) {
			endY = startY + maxDistance;
		}
		if(direction == 0 && endY < startY && startY - endY > maxDistance) {
			startY = endY + maxDistance;
		}
		if(startX == endX) {
			return startY;
		}
		return (endY - startY) / (endX - startX) * (xPosition - startX) + startY;
	}
	,IsPositionFrom: function(staffId,beat) {
		if(!this._beatLineXPositions.hasOwnProperty(beat.Index)) {
			return true;
		}
		return this._beatLineXPositions[beat.Index].StaffId == staffId;
	}
	,__class__: alphaTab.rendering.utils.BeamingHelper
};
alphaTab.rendering.utils.BeatBounds = $hx_exports["alphaTab"]["rendering"]["utils"]["BeatBounds"] = function() {
};
alphaTab.rendering.utils.BeatBounds.__name__ = true;
alphaTab.rendering.utils.BeatBounds.prototype = {
	__class__: alphaTab.rendering.utils.BeatBounds
};
alphaTab.rendering.utils.BeatLinePositions = $hx_exports["alphaTab"]["rendering"]["utils"]["BeatLinePositions"] = function(staffId,up,down) {
	this.StaffId = null;
	this.Up = 0.0;
	this.Down = 0.0;
	this.StaffId = staffId;
	this.Up = up;
	this.Down = down;
};
alphaTab.rendering.utils.BeatLinePositions.__name__ = true;
alphaTab.rendering.utils.BeatLinePositions.prototype = {
	__class__: alphaTab.rendering.utils.BeatLinePositions
};
alphaTab.rendering.utils.Bounds = $hx_exports["alphaTab"]["rendering"]["utils"]["Bounds"] = function() {
};
alphaTab.rendering.utils.Bounds.__name__ = true;
alphaTab.rendering.utils.Bounds.prototype = {
	__class__: alphaTab.rendering.utils.Bounds
};
alphaTab.rendering.utils.BoundsLookup = $hx_exports["alphaTab"]["rendering"]["utils"]["BoundsLookup"] = function() {
	this._beatLookup = null;
	this._currentStaveGroup = null;
	this.StaveGroups = null;
	this.IsFinished = false;
	var this1 = [];
	this.StaveGroups = this1;
	var this2 = {}
	this._beatLookup = this2;
};
alphaTab.rendering.utils.BoundsLookup.__name__ = true;
alphaTab.rendering.utils.BoundsLookup.FromJson = function(json,score) {
	var lookup = new alphaTab.rendering.utils.BoundsLookup();
	var staveGroups = json["StaveGroups"];
	var staveGroup = $iterator(staveGroups)();
	while(staveGroup.hasNext()) {
		var staveGroup1 = staveGroup.next();
		var sg = new alphaTab.rendering.utils.StaveGroupBounds();
		sg.VisualBounds = staveGroup1.VisualBounds;
		sg.RealBounds = staveGroup1.RealBounds;
		lookup.AddStaveGroup(sg);
		var masterBar = $iterator(staveGroup1.Bars)();
		while(masterBar.hasNext()) {
			var masterBar1 = masterBar.next();
			var mb = new alphaTab.rendering.utils.MasterBarBounds();
			mb.IsFirstOfLine = masterBar1.IsFirstOfLine;
			mb.VisualBounds = masterBar1.VisualBounds;
			mb.RealBounds = masterBar1.RealBounds;
			sg.AddBar(mb);
			var bar = $iterator(masterBar1.Bars)();
			while(bar.hasNext()) {
				var bar1 = bar.next();
				var b = new alphaTab.rendering.utils.BarBounds();
				b.VisualBounds = bar1.VisualBounds;
				b.RealBounds = bar1.RealBounds;
				mb.AddBar(b);
				var beat = $iterator(bar1.Beats)();
				while(beat.hasNext()) {
					var beat1 = beat.next();
					var bb = new alphaTab.rendering.utils.BeatBounds();
					bb.VisualBounds = beat1.VisualBounds;
					bb.RealBounds = beat1.RealBounds;
					bb.Beat = score.Tracks[beat1["TrackIndex"]].Staves[beat1["StaffIndex"]].Bars[beat1["BarIndex"]].Voices[beat1["VoiceIndex"]].Beats[beat1["BeatIndex"]];
					b.AddBeat(bb);
				}
			}
		}
	}
	return lookup;
};
alphaTab.rendering.utils.BoundsLookup.prototype = {
	ToJson: function() {
		var json = {}
		var this1 = [];
		var staveGroups = this1;
		json.StaveGroups = staveGroups;
		var group = $iterator(this.StaveGroups)();
		while(group.hasNext()) {
			var group1 = group.next();
			var g = {}
			g.VisualBounds = this.BoundsToJson(group1.VisualBounds);
			g.RealBounds = this.BoundsToJson(group1.RealBounds);
			var this2 = [];
			g.Bars = this2;
			var masterBar = $iterator(group1.Bars)();
			while(masterBar.hasNext()) {
				var masterBar1 = masterBar.next();
				var mb = {}
				mb.VisualBounds = this.BoundsToJson(masterBar1.VisualBounds);
				mb.RealBounds = this.BoundsToJson(masterBar1.RealBounds);
				var this3 = [];
				mb.Bars = this3;
				var bar = $iterator(masterBar1.Bars)();
				while(bar.hasNext()) {
					var bar1 = bar.next();
					var b = {}
					b.VisualBounds = this.BoundsToJson(bar1.VisualBounds);
					b.RealBounds = this.BoundsToJson(bar1.RealBounds);
					var this4 = [];
					b.Beats = this4;
					var beat = $iterator(bar1.Beats)();
					while(beat.hasNext()) {
						var beat1 = beat.next();
						var bb = {}
						bb.VisualBounds = this.BoundsToJson(beat1.VisualBounds);
						bb.RealBounds = this.BoundsToJson(beat1.RealBounds);
						bb.BeatIndex = beat1.Beat.Index;
						bb.VoiceIndex = beat1.Beat.Voice.Index;
						bb.BarIndex = beat1.Beat.Voice.Bar.Index;
						bb.StaffIndex = beat1.Beat.Voice.Bar.Staff.Index;
						bb.TrackIndex = beat1.Beat.Voice.Bar.Staff.Track.Index;
						b.Beats.push(bb);
					}
					mb.Bars.push(b);
				}
				g.Bars.push(mb);
			}
			staveGroups.push(g);
		}
		return json;
	}
	,BoundsToJson: function(bounds) {
		var json = {}
		json.X = bounds.X;
		json.Y = bounds.Y;
		json.W = bounds.W;
		json.H = bounds.H;
		return json;
	}
	,Finish: function() {
		var i = 0;
		while(i < this.StaveGroups.length) {
			this.StaveGroups[i].Finish();
			++i;
		}
		this.IsFinished = true;
	}
	,AddStaveGroup: function(bounds) {
		bounds.Index = this.StaveGroups.length;
		bounds.BoundsLookup = this;
		this.StaveGroups.push(bounds);
		this._currentStaveGroup = bounds;
	}
	,AddMasterBar: function(bounds) {
		bounds.StaveGroupBounds = this._currentStaveGroup;
		this._currentStaveGroup.AddBar(bounds);
	}
	,AddBeat: function(bounds) {
		this._beatLookup[bounds.Beat.Id] = bounds;
	}
	,FindBeat: function(beat) {
		var id = beat.Id;
		if(this._beatLookup.hasOwnProperty(id)) {
			return this._beatLookup[id];
		}
		return null;
	}
	,GetBeatAtPos: function(x,y) {
		var bottom = 0;
		var top = this.StaveGroups.length - 1;
		var staveGroupIndex = -1;
		while(bottom <= top) {
			var middle = (top + bottom) / 2 | 0;
			var group = this.StaveGroups[middle];
			if(y >= group.RealBounds.Y && y <= group.RealBounds.Y + group.RealBounds.H) {
				staveGroupIndex = middle;
				break;
			}
			if(y < group.RealBounds.Y) {
				top = middle - 1;
			} else {
				bottom = middle + 1;
			}
		}
		if(staveGroupIndex == -1) {
			return null;
		}
		var staveGroup = this.StaveGroups[staveGroupIndex];
		var bar = staveGroup.FindBarAtPos(x);
		if(bar != null) {
			return bar.FindBeatAtPos(x,y);
		}
		return null;
	}
	,__class__: alphaTab.rendering.utils.BoundsLookup
};
alphaTab.rendering.utils.MasterBarBounds = $hx_exports["alphaTab"]["rendering"]["utils"]["MasterBarBounds"] = function() {
	this.IsFirstOfLine = false;
	this.VisualBounds = null;
	this.RealBounds = null;
	this.Bars = null;
	this.StaveGroupBounds = null;
	var this1 = [];
	this.Bars = this1;
};
alphaTab.rendering.utils.MasterBarBounds.__name__ = true;
alphaTab.rendering.utils.MasterBarBounds.prototype = {
	AddBar: function(bounds) {
		bounds.MasterBarBounds = this;
		this.Bars.push(bounds);
	}
	,FindBeatAtPos: function(x,y) {
		var beat = null;
		var i = 0;
		while(i < this.Bars.length) {
			var b = this.Bars[i].FindBeatAtPos(x);
			if(b != null && (beat == null || beat.RealBounds.X < b.RealBounds.X)) {
				beat = b;
			}
			++i;
		}
		if(beat == null) {
			return null;
		} else {
			return beat.Beat;
		}
	}
	,Finish: function() {
		var comparison = function(a,b) {
			if(a.RealBounds.Y < b.RealBounds.Y) {
				return -1;
			}
			if(a.RealBounds.Y > b.RealBounds.Y) {
				return 1;
			}
			if(a.RealBounds.X < b.RealBounds.X) {
				return -1;
			}
			if(a.RealBounds.X > b.RealBounds.X) {
				return 1;
			}
			return 0;
		};
		this.Bars.sort(function(a1,b1) {
			return comparison(a1,b1);
		});
	}
	,AddBeat: function(bounds) {
		this.StaveGroupBounds.BoundsLookup.AddBeat(bounds);
	}
	,__class__: alphaTab.rendering.utils.MasterBarBounds
};
alphaTab.rendering.utils.PercussionMapper = $hx_exports["alphaTab"]["rendering"]["utils"]["PercussionMapper"] = function() {
};
alphaTab.rendering.utils.PercussionMapper.__name__ = true;
alphaTab.rendering.utils.PercussionMapper.MidiFromElementVariation = function(note) {
	return alphaTab.rendering.utils.PercussionMapper.ElementVariationToMidi[note.Element][note.Variation];
};
alphaTab.rendering.utils.PercussionMapper.MapNoteForDisplay = function(note) {
	var value = note.get_RealValue();
	if(value == 61 || value == 66) {
		return 50;
	} else if(value == 60 || value == 65) {
		return 52;
	} else if(value >= 35 && value <= 36 || value == 44) {
		return 53;
	} else if(value == 41 || value == 64) {
		return 55;
	} else if(value == 43 || value == 62) {
		return 57;
	} else if(value == 45 || value == 63) {
		return 59;
	} else if(value == 47 || value == 54) {
		return 62;
	} else if(value == 48 || value == 56) {
		return 64;
	} else if(value == 50) {
		return 65;
	} else if(value == 42 || value == 46 || value >= 49 && value <= 53 || value == 57 || value == 59) {
		return 67;
	}
	return 60;
};
alphaTab.rendering.utils.PercussionMapper.prototype = {
	__class__: alphaTab.rendering.utils.PercussionMapper
};
alphaTab.rendering.utils.StaveGroupBounds = $hx_exports["alphaTab"]["rendering"]["utils"]["StaveGroupBounds"] = function() {
	this.Index = 0;
	this.VisualBounds = null;
	this.RealBounds = null;
	this.Bars = null;
	this.BoundsLookup = null;
	var this1 = [];
	this.Bars = this1;
	this.Index = 0;
};
alphaTab.rendering.utils.StaveGroupBounds.__name__ = true;
alphaTab.rendering.utils.StaveGroupBounds.prototype = {
	Finish: function() {
		var i = 0;
		while(i < this.Bars.length) {
			this.Bars[i].Finish();
			++i;
		}
	}
	,AddBar: function(bounds) {
		bounds.StaveGroupBounds = this;
		this.Bars.push(bounds);
	}
	,FindBarAtPos: function(x) {
		var b = null;
		var i = 0;
		while(i < this.Bars.length) {
			if(b == null || this.Bars[i].RealBounds.X < x) {
				b = this.Bars[i];
			} else if(x > this.Bars[i].RealBounds.X + this.Bars[i].RealBounds.W) {
				break;
			}
			++i;
		}
		return b;
	}
	,__class__: alphaTab.rendering.utils.StaveGroupBounds
};
alphaTab.rendering.utils.TupletHelper = $hx_exports["alphaTab"]["rendering"]["utils"]["TupletHelper"] = function(voice) {
	this._isFinished = false;
	this.Beats = null;
	this.VoiceIndex = 0;
	this.Tuplet = 0;
	this.VoiceIndex = voice;
	var this1 = [];
	this.Beats = this1;
};
alphaTab.rendering.utils.TupletHelper.__name__ = true;
alphaTab.rendering.utils.TupletHelper.prototype = {
	get_IsFull: function() {
		return this.Beats.length == this.Tuplet;
	}
	,Finish: function() {
		this._isFinished = true;
	}
	,Check: function(beat) {
		if(this.Beats.length == 0) {
			this.Tuplet = beat.TupletNumerator;
		} else if(beat.Voice.Index != this.VoiceIndex || beat.TupletNumerator != this.Tuplet || this.get_IsFull() || this._isFinished) {
			return false;
		}
		this.Beats.push(beat);
		return true;
	}
	,__class__: alphaTab.rendering.utils.TupletHelper
};
alphaTab.util.Lazy = $hx_exports["alphaTab"]["util"]["Lazy"] = function(factory) {
	this._factory = null;
	this._created = false;
	this._value = null;
	this._factory = factory;
};
alphaTab.util.Lazy.__name__ = true;
alphaTab.util.Lazy.prototype = {
	get_Value: function() {
		if(!this._created) {
			this._value = this._factory();
			this._created = true;
		}
		return this._value;
	}
	,__class__: alphaTab.util.Lazy
};
alphaTab.util._LogLevel = {};
alphaTab.util._LogLevel.LogLevel_Impl_ = $hx_exports["alphaTab"]["util"]["_LogLevel"]["LogLevel_Impl_"] = {};
alphaTab.util._LogLevel.LogLevel_Impl_.__name__ = true;
alphaTab.util._LogLevel.LogLevel_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.util._LogLevel.LogLevel_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.util._LogLevel.LogLevel_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Debug";
	case 2:
		return "Info";
	case 3:
		return "Warning";
	case 4:
		return "Error";
	}
	return "";
};
alphaTab.xml = {};
alphaTab.xml.XmlNode = $hx_exports["alphaTab"]["xml"]["XmlNode"] = function() {
	this.NodeType = null;
	this.LocalName = null;
	this.Value = null;
	this.ChildNodes = null;
	this.Attributes = null;
	this.FirstChild = null;
	this.FirstElement = null;
	var this1 = {}
	this.Attributes = this1;
	var this2 = [];
	this.ChildNodes = this2;
};
alphaTab.xml.XmlNode.__name__ = true;
alphaTab.xml.XmlNode.prototype = {
	AddChild: function(node) {
		this.ChildNodes.push(node);
		this.FirstChild = node;
		if(node.NodeType == 1) {
			this.FirstElement = node;
		}
	}
	,GetAttribute: function(name) {
		if(this.Attributes.hasOwnProperty(name)) {
			return this.Attributes[name];
		}
		return "";
	}
	,GetElementsByTagName: function(name,recursive) {
		if(recursive == null) {
			recursive = false;
		}
		var this1 = [];
		var tags = this1;
		this.SearchElementsByTagName(this.ChildNodes,tags,name,recursive);
		return tags;
	}
	,SearchElementsByTagName: function(all,result,name,recursive) {
		if(recursive == null) {
			recursive = false;
		}
		var c = $iterator(all)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1 != null && c1.NodeType == 1 && c1.LocalName == name) {
				result.push(c1);
			}
			if(recursive) {
				this.SearchElementsByTagName(c1.ChildNodes,result,name,true);
			}
		}
	}
	,FindChildElement: function(name) {
		var c = $iterator(this.ChildNodes)();
		while(c.hasNext()) {
			var c1 = c.next();
			if(c1 != null && c1.NodeType == 1 && c1.LocalName == name) {
				return c1;
			}
		}
		return null;
	}
	,get_InnerText: function() {
		if(this.NodeType == 1 || this.NodeType == 9) {
			var this1 = "";
			var txt = this1;
			var c = $iterator(this.ChildNodes)();
			while(c.hasNext()) {
				var c1 = c.next();
				txt += Std.string(c1.get_InnerText());
			}
			return StringTools.trim(txt);
		}
		return this.Value;
	}
	,__class__: alphaTab.xml.XmlNode
};
alphaTab.xml.XmlDocument = $hx_exports["alphaTab"]["xml"]["XmlDocument"] = function(xml) {
	alphaTab.xml.XmlNode.call(this);
	this.DocumentElement = null;
	this.NodeType = 9;
	alphaTab.xml.XmlParser.Parse(xml,0,this);
	var child = $iterator(this.ChildNodes)();
	while(child.hasNext()) {
		var child1 = child.next();
		if(child1.NodeType == 1) {
			this.DocumentElement = child1;
			break;
		}
	}
};
alphaTab.xml.XmlDocument.__name__ = true;
alphaTab.xml.XmlDocument.__super__ = alphaTab.xml.XmlNode;
alphaTab.xml.XmlDocument.prototype = $extend(alphaTab.xml.XmlNode.prototype,{
	__class__: alphaTab.xml.XmlDocument
});
alphaTab.xml.XmlException = $hx_exports["alphaTab"]["xml"]["XmlException"] = function() {
	alphaTab.AlphaTabException.call(this);
};
alphaTab.xml.XmlException.__name__ = true;
alphaTab.xml.XmlException.__super__ = alphaTab.AlphaTabException;
alphaTab.xml.XmlException.prototype = $extend(alphaTab.AlphaTabException.prototype,{
	XmlException: function(message,xml,pos) {
		this.AlphaTabException(message);
		this.Xml = null;
		this.Pos = 0;
		this.Xml = xml;
		this.Pos = pos;
		return this;
	}
	,__class__: alphaTab.xml.XmlException
});
alphaTab.xml._XmlNodeType = {};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_ = $hx_exports["alphaTab"]["xml"]["_XmlNodeType"]["XmlNodeType_Impl_"] = {};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.__name__ = true;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToBoolean_IFormatProvider = function(this1,provider) {
	return this1 != 0;
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToChar_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToSByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt8(this1);
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToByte_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt8(this1);
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToInt16(this1);
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToUInt16_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt16(this1);
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToInt32_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToUInt32_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToInt64_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToUInt64_IFormatProvider = function(this1,provider) {
	return system.Convert.ToUInt32(this1);
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToSingle_IFormatProvider = function(this1,provider) {
	return this1;
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ToDouble_IFormatProvider = function(this1,provider) {
	var this2 = this1;
	return this2;
};
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "None";
	case 1:
		return "Element";
	case 2:
		return "Attribute";
	case 3:
		return "Text";
	case 4:
		return "CDATA";
	case 5:
		return "EntityReference";
	case 6:
		return "Entity";
	case 7:
		return "ProcessingInstruction";
	case 8:
		return "Comment";
	case 9:
		return "Document";
	case 10:
		return "DocumentType";
	case 11:
		return "DocumentFragment";
	case 12:
		return "Notation";
	case 13:
		return "Whitespace";
	case 14:
		return "SignificantWhitespace";
	case 15:
		return "EndElement";
	case 16:
		return "EndEntity";
	case 17:
		return "XmlDeclaration";
	}
	return "";
};
alphaTab.xml.XmlParser = $hx_exports["alphaTab"]["xml"]["XmlParser"] = function() {
};
alphaTab.xml.XmlParser.__name__ = true;
alphaTab.xml.XmlParser.Parse = function(str,p,parent) {
	var this1 = system.Convert.ToUInt16(HxOverrides.cca(str,p));
	var this2 = this1;
	var c = this2;
	var state = 1;
	var next = 1;
	var start = 0;
	var this3 = "";
	var buf = this3;
	var escapeNext = 1;
	var xml = null;
	var aname = null;
	var nbrackets = 0;
	var attrValQuote = 0;
	while(p < str.length) {
		var this4 = system.Convert.ToUInt16(HxOverrides.cca(str,p));
		c = this4;
		switch(state) {
		case 0:
			switch(c) {
			case 9:case 10:case 13:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			if(c == 60) {
				state = 0;
				next = 2;
			} else {
				start = p;
				state = 13;
				continue;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				var this5 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 1));
				if(this5 == 91) {
					p = p + 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") {
						throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected <![CDATA[",str,p));
					}
					p = p + 5;
					state = 17;
					start = p + 1;
				} else {
					var tmp;
					var this6 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 1));
					if(!(this6 == 68)) {
						var this7 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 1));
						tmp = this7 == 100;
					} else {
						tmp = true;
					}
					if(tmp) {
						if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") {
							throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected <!DOCTYPE",str,p));
						}
						p = p + 8;
						state = 16;
						start = p + 1;
					} else {
						var tmp1;
						var this8 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 1));
						if(!(this8 != 45)) {
							var this9 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 2));
							tmp1 = this9 != 45;
						} else {
							tmp1 = true;
						}
						if(tmp1) {
							throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected <!--",str,p));
						} else {
							p = p + 2;
							state = 15;
							start = p + 1;
						}
					}
				}
				break;
			case 47:
				if(parent == null) {
					throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected node name",str,p));
				}
				start = p + 1;
				state = 0;
				next = 10;
				break;
			case 63:
				state = 14;
				start = p;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!alphaTab.xml.XmlParser.IsValidChar(c)) {
				if(p == start) {
					throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected node name",str,p));
				}
				xml = new alphaTab.xml.XmlNode();
				xml.NodeType = 1;
				xml.LocalName = HxOverrides.substr(str,start,p - start);
				parent.AddChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				break;
			case 62:
				state = 9;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!alphaTab.xml.XmlParser.IsValidChar(c)) {
				if(start == p) {
					throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected attribute name",str,p));
				}
				var tmp2 = HxOverrides.substr(str,start,p - start);
				aname = tmp2;
				if(xml.Attributes.hasOwnProperty(aname)) {
					throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Duplicate attribute [" + aname + "]",str,p));
				}
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			if(c == 61) {
				state = 0;
				next = 7;
			} else {
				throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected =",str,p));
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				var this10 = "";
				buf = this10;
				state = 8;
				start = p + 1;
				attrValQuote = c;
				break;
			default:
			}
			break;
		case 8:
			if(c == 38) {
				buf += Std.string(HxOverrides.substr(str,start,p - start));
				state = 18;
				escapeNext = 8;
				start = p + 1;
			} else if(c == attrValQuote) {
				buf += Std.string(HxOverrides.substr(str,start,p - start));
				var val = buf;
				var this11 = "";
				buf = this11;
				xml.Attributes[aname] = val;
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = alphaTab.xml.XmlParser.Parse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 10:
			if(!alphaTab.xml.XmlParser.IsValidChar(c)) {
				if(start == p) {
					throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected node name",str,p));
				}
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.LocalName) {
					var tmp3 = "Expected </" + parent.LocalName + ">";
					throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException(tmp3,str,p));
				}
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 11:
			if(c == 62) {
				state = 1;
			} else {
				throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected >",str,p));
			}
			break;
		case 12:
			if(c == 62) {
				return p;
			} else {
				throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Expected >",str,p));
			}
			break;
		case 13:
			if(c == 60) {
				buf += Std.string(HxOverrides.substr(str,start,p - start));
				var child = new alphaTab.xml.XmlNode();
				child.NodeType = 3;
				child.Value = buf;
				var this12 = "";
				buf = this12;
				parent.AddChild(child);
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf += Std.string(HxOverrides.substr(str,start,p - start));
				state = 18;
				escapeNext = 13;
				start = p + 1;
			}
			break;
		case 14:
			var tmp4;
			if(c == 63) {
				var this13 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 1));
				tmp4 = this13 == 62;
			} else {
				tmp4 = false;
			}
			if(tmp4) {
				++p;
				state = 1;
			}
			break;
		case 15:
			var tmp5;
			var tmp6;
			if(c == 45) {
				var this14 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 1));
				tmp6 = this14 == 45;
			} else {
				tmp6 = false;
			}
			if(tmp6) {
				var this15 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 2));
				tmp5 = this15 == 62;
			} else {
				tmp5 = false;
			}
			if(tmp5) {
				p = p + 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) {
				++nbrackets;
			} else if(c == 93) {
				--nbrackets;
			} else if(c == 62 && nbrackets == 0) {
				var node = new alphaTab.xml.XmlNode();
				node.NodeType = 10;
				node.Value = HxOverrides.substr(str,start,p - start);
				parent.AddChild(node);
				state = 1;
			}
			break;
		case 17:
			var tmp7;
			var tmp8;
			if(c == 93) {
				var this16 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 1));
				tmp8 = this16 == 93;
			} else {
				tmp8 = false;
			}
			if(tmp8) {
				var this17 = system.Convert.ToUInt16(HxOverrides.cca(str,p + 2));
				tmp7 = this17 == 62;
			} else {
				tmp7 = false;
			}
			if(tmp7) {
				var child1 = new alphaTab.xml.XmlNode();
				child1.NodeType = 4;
				child1.Value = HxOverrides.substr(str,start,p - start);
				parent.AddChild(child1);
				p = p + 2;
				state = 1;
			}
			break;
		case 18:
			var this18 = system.Convert.ToUInt16(59);
			if(c == this18) {
				var s = HxOverrides.substr(str,start,p - start);
				var this19 = system.Convert.ToUInt16(HxOverrides.cca(s,0));
				if(this19 == 35) {
					var code;
					var this20 = system.Convert.ToUInt16(HxOverrides.cca(s,1));
					if(this20 == 120) {
						code = alphaTab.platform.Platform.ParseInt("0" + HxOverrides.substr(s,1,s.length - 1));
					} else {
						code = alphaTab.platform.Platform.ParseInt(HxOverrides.substr(s,1,s.length - 1));
					}
					buf += String.fromCharCode(code);
				} else if(alphaTab.xml.XmlParser.Escapes.hasOwnProperty(s)) {
					buf += Std.string(alphaTab.xml.XmlParser.Escapes[s]);
				} else {
					buf += Std.string("&" + s + ";");
				}
				start = p + 1;
				state = escapeNext;
			} else if(!alphaTab.xml.XmlParser.IsValidChar(c) && c != 35) {
				buf += Std.string("&");
				buf += Std.string(HxOverrides.substr(str,start,p - start));
				--p;
				start = p + 1;
				state = escapeNext;
			}
			break;
		default:
		}
		++p;
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start) {
			buf += Std.string(HxOverrides.substr(str,start,p - start));
			var node1 = new alphaTab.xml.XmlNode();
			node1.NodeType = 3;
			node1.Value = buf;
			parent.AddChild(node1);
		}
		return p;
	}
	if(state == 18 && escapeNext == 13) {
		buf += Std.string("&");
		buf += Std.string(HxOverrides.substr(str,start,p - start));
		var node2 = new alphaTab.xml.XmlNode();
		node2.NodeType = 3;
		node2.Value = buf;
		parent.AddChild(node2);
		return p;
	}
	throw new js._Boot.HaxeError(new alphaTab.xml.XmlException().XmlException("Unexpected end",str,p));
};
alphaTab.xml.XmlParser.IsValidChar = function(c) {
	if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95)) {
		return c == 45;
	} else {
		return true;
	}
};
alphaTab.xml.XmlParser.prototype = {
	__class__: alphaTab.xml.XmlParser
};
alphaTab.xml.XmlParser_XmlState = $hx_exports["alphaTab"]["xml"]["XmlParser_XmlState"] = function() {
};
alphaTab.xml.XmlParser_XmlState.__name__ = true;
alphaTab.xml.XmlParser_XmlState.prototype = {
	__class__: alphaTab.xml.XmlParser_XmlState
};
haxe._Int64 = {};
haxe._Int64.___Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe._Int64.___Int64.__name__ = true;
haxe._Int64.___Int64.prototype = {
	__class__: haxe._Int64.___Int64
};
haxe.io = {};
haxe.io.FPHelper = function() { };
haxe.io.FPHelper.__name__ = true;
haxe.io.FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) {
		return 0.0;
	}
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe.io.FPHelper.floatToI32 = function(f) {
	if(f == 0) {
		return 0;
	}
	var af = f < 0 ? -f : f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) {
		exp = -127;
	} else if(exp > 128) {
		exp = 128;
	}
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608);
	if(sig == 8388608 && exp < 128) {
		sig = 0;
		++exp;
	}
	return (f < 0 ? -2147483648 : 0) | exp + 127 << 23 | sig;
};
haxe.io.FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) {
		return 0.0;
	}
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe.io.FPHelper.doubleToI64 = function(v) {
	var i64 = haxe.io.FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else if(!isFinite(v)) {
		if(v > 0) {
			i64.low = 0;
			i64.high = 2146435072;
		} else {
			i64.low = 0;
			i64.high = -1048576;
		}
	} else {
		var av = v < 0 ? -v : v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig = Math.round((av / Math.pow(2,exp) - 1) * 4503599627370496.);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0 ? -2147483648 : 0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
js._Boot = {};
js._Boot.HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js._Boot.HaxeError);
	}
};
js._Boot.HaxeError.__name__ = true;
js._Boot.HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js._Boot.HaxeError(val);
	}
};
js._Boot.HaxeError.__super__ = Error;
js._Boot.HaxeError.prototype = $extend(Error.prototype,{
	__class__: js._Boot.HaxeError
});
js.html = {};
js.html.compat = {};
js.html.compat.ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g1 = 0;
		var _g = len;
		while(_g1 < _g) {
			var i = _g1++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
js.html.compat.ArrayBuffer.__name__ = true;
js.html.compat.ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null ? null : end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js.html.compat.ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js.html.compat.ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js.html.compat.ArrayBuffer
};
js.html.compat.Float32Array = function() { };
js.html.compat.Float32Array.__name__ = true;
js.html.compat.Float32Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		var _g2 = [];
		var _g21 = 0;
		var _g11 = arr.length << 2;
		while(_g21 < _g11) {
			var i1 = _g21++;
			_g2.push(0);
		}
		arr.buffer = new js.html.compat.ArrayBuffer(_g2);
	} else if(js.Boot.__instanceof(arg1,js.html.compat.ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset >> 2;
		}
		arr = [];
		var _g12 = 0;
		var _g3 = length;
		while(_g12 < _g3) {
			var i2 = _g12++;
			var val = buffer.a[offset++] | buffer.a[offset++] << 8 | buffer.a[offset++] << 16 | buffer.a[offset++] << 24;
			arr.push(haxe.io.FPHelper.i32ToFloat(val));
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		var buffer1 = [];
		var _g4 = 0;
		while(_g4 < arr.length) {
			var f = arr[_g4];
			++_g4;
			var i3 = haxe.io.FPHelper.floatToI32(f);
			buffer1.push(i3 & 255);
			buffer1.push(i3 >> 8 & 255);
			buffer1.push(i3 >> 16 & 255);
			buffer1.push(i3 >>> 24);
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		arr.buffer = new js.html.compat.ArrayBuffer(buffer1);
	} else {
		throw new js._Boot.HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js.html.compat.Float32Array._subarray;
	arr.set = js.html.compat.Float32Array._set;
	return arr;
};
js.html.compat.Float32Array._set = function(arg,offset) {
	if(js.Boot.__instanceof(arg.buffer,js.html.compat.ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js._Boot.HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js._Boot.HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js._Boot.HaxeError("TODO");
	}
};
js.html.compat.Float32Array._subarray = function(start,end) {
	var a = js.html.compat.Float32Array._new(this.slice(start,end));
	a.byteOffset = start * 4;
	return a;
};
js.html.compat.Float64Array = function() { };
js.html.compat.Float64Array.__name__ = true;
js.html.compat.Float64Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length << 3;
		arr.byteOffset = 0;
		var _g2 = [];
		var _g21 = 0;
		var _g11 = arr.length << 3;
		while(_g21 < _g11) {
			var i1 = _g21++;
			_g2.push(0);
		}
		arr.buffer = new js.html.compat.ArrayBuffer(_g2);
	} else if(js.Boot.__instanceof(arg1,js.html.compat.ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset >> 3;
		}
		arr = [];
		var _g12 = 0;
		var _g3 = length;
		while(_g12 < _g3) {
			var i2 = _g12++;
			var val1 = buffer.a[offset++] | buffer.a[offset++] << 8 | buffer.a[offset++] << 16 | buffer.a[offset++] << 24;
			var val2 = buffer.a[offset++] | buffer.a[offset++] << 8 | buffer.a[offset++] << 16 | buffer.a[offset++] << 24;
			arr.push(haxe.io.FPHelper.i64ToDouble(val1,val2));
		}
		arr.byteLength = arr.length << 3;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		var buffer1 = [];
		var _g4 = 0;
		while(_g4 < arr.length) {
			var f = arr[_g4];
			++_g4;
			var v = haxe.io.FPHelper.doubleToI64(f);
			var i3 = v.low;
			buffer1.push(i3 & 255);
			buffer1.push(i3 >> 8 & 255);
			buffer1.push(i3 >> 16 & 255);
			buffer1.push(i3 >>> 24);
			var i4 = v.high;
			buffer1.push(i4 & 255);
			buffer1.push(i4 >> 8 & 255);
			buffer1.push(i4 >> 16 & 255);
			buffer1.push(i4 >>> 24);
		}
		arr.byteLength = arr.length << 3;
		arr.byteOffset = 0;
		arr.buffer = new js.html.compat.ArrayBuffer(buffer1);
	} else {
		throw new js._Boot.HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js.html.compat.Float64Array._subarray;
	arr.set = js.html.compat.Float64Array._set;
	return arr;
};
js.html.compat.Float64Array._set = function(arg,offset) {
	if(js.Boot.__instanceof(arg.buffer,js.html.compat.ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js._Boot.HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js._Boot.HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js._Boot.HaxeError("TODO");
	}
};
js.html.compat.Float64Array._subarray = function(start,end) {
	var a = js.html.compat.Float64Array._new(this.slice(start,end));
	a.byteOffset = start * 8;
	return a;
};
js.html.compat.Uint8Array = function() { };
js.html.compat.Uint8Array.__name__ = true;
js.html.compat.Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js.html.compat.ArrayBuffer(arr);
	} else if(js.Boot.__instanceof(arg1,js.html.compat.ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset;
		}
		if(offset == 0) {
			arr = buffer.a;
		} else {
			arr = buffer.a.slice(offset,offset + length);
		}
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js.html.compat.ArrayBuffer(arr);
	} else {
		throw new js._Boot.HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js.html.compat.Uint8Array._subarray;
	arr.set = js.html.compat.Uint8Array._set;
	return arr;
};
js.html.compat.Uint8Array._set = function(arg,offset) {
	if(js.Boot.__instanceof(arg.buffer,js.html.compat.ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js._Boot.HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js._Boot.HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js._Boot.HaxeError("TODO");
	}
};
js.html.compat.Uint8Array._subarray = function(start,end) {
	var a = js.html.compat.Uint8Array._new(this.slice(start,end));
	a.byteOffset = start;
	return a;
};
system.collections = {};
system.collections.generic = {};
system.collections.generic.IEnumerable = function() { };
system.collections.generic.IEnumerable.__name__ = true;
system._CsString = {};
system._CsString.CsString_Impl_ = {};
system._CsString.CsString_Impl_.__name__ = true;
system._CsString.CsString_Impl_.Split_CharArray = function(this1,chars) {
	var strings = [];
	var startPos = 0;
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		var cc = HxOverrides.cca(this1,i);
		if(chars.indexOf(cc) >= 0) {
			var endPos = i;
			if(endPos < startPos) {
				strings.push("");
			} else {
				strings.push(this1.substring(startPos,endPos));
			}
			startPos = i + 1;
		}
	}
	if(startPos < this1.length) {
		strings.push(this1.substring(startPos,this1.length));
	}
	return strings;
};
system._EventAction = {};
system._EventAction.EventAction_Impl_ = {};
system._EventAction.EventAction_Impl_.__name__ = true;
system._EventAction.EventAction_Impl_.add = function(lhs,rhs) {
	if(lhs == null) {
		var this1 = rhs == null ? null : [rhs];
		lhs = this1;
	} else {
		lhs.push(rhs);
	}
	return lhs;
};
system._EventAction.EventAction_Impl_.sub = function(lhs,rhs) {
	var raw = lhs;
	var index = raw.indexOf(rhs);
	if(index != -1) {
		raw.splice(index,1);
		if(raw.length == 0) {
			return null;
		}
	}
	return lhs;
};
system._EventAction.EventAction_Impl_.Invoke = function(this1) {
	if(this1 == null) {
		return;
	}
	var _g = 0;
	while(_g < this1.length) {
		var x = this1[_g];
		++_g;
		x();
	}
};
system._EventAction1 = {};
system._EventAction1.EventAction1_Impl_ = {};
system._EventAction1.EventAction1_Impl_.__name__ = true;
system._EventAction1.EventAction1_Impl_.add = function(lhs,rhs) {
	if(lhs == null) {
		var this1 = rhs == null ? null : [rhs];
		lhs = this1;
	} else {
		lhs.push(rhs);
	}
	return lhs;
};
system._EventAction1.EventAction1_Impl_.sub = function(lhs,rhs) {
	var raw = lhs;
	var index = raw.indexOf(rhs);
	if(index != -1) {
		raw.splice(index,1);
		if(raw.length == 0) {
			return null;
		}
	}
	return lhs;
};
system._EventAction1.EventAction1_Impl_.Invoke = function(this1,p) {
	if(this1 == null) {
		return;
	}
	var _g = 0;
	while(_g < this1.length) {
		var x = this1[_g];
		++_g;
		x(p);
	}
};
system._EventAction2 = {};
system._EventAction2.EventAction2_Impl_ = {};
system._EventAction2.EventAction2_Impl_.__name__ = true;
system._EventAction2.EventAction2_Impl_.add = function(lhs,rhs) {
	if(lhs == null) {
		var this1 = rhs == null ? null : [rhs];
		lhs = this1;
	} else {
		lhs.push(rhs);
	}
	return lhs;
};
system._EventAction2.EventAction2_Impl_.sub = function(lhs,rhs) {
	var raw = lhs;
	var index = raw.indexOf(rhs);
	if(index != -1) {
		raw.splice(index,1);
		if(raw.length == 0) {
			return null;
		}
	}
	return lhs;
};
system._EventAction2.EventAction2_Impl_.Invoke = function(this1,p1,p2) {
	if(this1 == null) {
		return;
	}
	var _g = 0;
	while(_g < this1.length) {
		var x = this1[_g];
		++_g;
		x(p1,p2);
	}
};
system.IFormatProvider = function() { };
system.IFormatProvider.__name__ = true;
system._Int32 = {};
system._Int32.Int32_Impl_ = {};
system._Int32.Int32_Impl_.__name__ = true;
system._Int32.Int32_Impl_.CompareTo_Int32 = function(this1,other) {
	if(this1 < other) {
		return -1;
	}
	if(this1 > other) {
		return 1;
	}
	return 0;
};
system.Int32ArrayIterator = function(array) {
	this._array = array;
	this._i = 0;
};
system.Int32ArrayIterator.__name__ = true;
system.Int32ArrayIterator.prototype = {
	hasNext: function() {
		return this._i < this._array.length;
	}
	,next: function() {
		return this._array[this._i++];
	}
	,__class__: system.Int32ArrayIterator
};
system.OverflowException = function(message) {
	if(message == null) {
		message = "";
	}
	system.Exception.call(this);
	this.Exception_CsString(message);
};
system.OverflowException.__name__ = true;
system.OverflowException.__super__ = system.Exception;
system.OverflowException.prototype = $extend(system.Exception.prototype,{
	__class__: system.OverflowException
});
system.collections.generic.IterableEnumerable = function(i) {
	this._iterable = i;
};
system.collections.generic.IterableEnumerable.__name__ = true;
system.collections.generic.IterableEnumerable.__interfaces__ = [system.collections.generic.IEnumerable];
system.collections.generic.IterableEnumerable.prototype = {
	__class__: system.collections.generic.IterableEnumerable
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
alphaTab.util.Logger.LogLevel = null;
alphaTab.util.Logger.LogLevel = 2;
alphaTab.Environment.ScriptFile = null;
alphaTab.Environment.IsFontLoaded = false;
alphaTab.Environment.RenderEngines = null;
alphaTab.Environment.LayoutEngines = null;
alphaTab.Environment.StaveProfiles = null;
alphaTab.Environment.Init();
alphaTab.model.Tuning._sevenStrings = null;
alphaTab.model.Tuning._sixStrings = null;
alphaTab.model.Tuning._fiveStrings = null;
alphaTab.model.Tuning._fourStrings = null;
alphaTab.model.Tuning._defaultTunings = null;
alphaTab.model.Tuning.Initialize();
alphaTab.rendering.glyphs.ScoreBeatGlyph.NormalKeys = null;
alphaTab.rendering.glyphs.ScoreBeatGlyph.XKeys = null;
var this1 = {}
alphaTab.rendering.glyphs.ScoreBeatGlyph.NormalKeys = this1;
var normalKeyNotes = new Int32Array([32,34,35,36,38,39,40,41,43,45,47,48,50,55,56,58,60,61]);
var i = 0;
while(i < normalKeyNotes.length) {
	alphaTab.rendering.glyphs.ScoreBeatGlyph.NormalKeys[normalKeyNotes[i]] = true;
	++i;
}
var this2 = {}
alphaTab.rendering.glyphs.ScoreBeatGlyph.XKeys = this2;
var xKeyNotes = new Int32Array([31,33,37,42,44,54,62,63,64,65,66]);
var i1 = 0;
while(i1 < xKeyNotes.length) {
	alphaTab.rendering.glyphs.ScoreBeatGlyph.XKeys[xKeyNotes[i1]] = true;
	++i1;
}
alphaTab.xml.XmlParser.Escapes = null;
var this1 = {}
alphaTab.xml.XmlParser.Escapes = this1;
alphaTab.xml.XmlParser.Escapes["lt"] = "<";
alphaTab.xml.XmlParser.Escapes["gt"] = ">";
alphaTab.xml.XmlParser.Escapes["amp"] = "&";
alphaTab.xml.XmlParser.Escapes["quot"] = "\"";
alphaTab.xml.XmlParser.Escapes["apos"] = "'";
var ArrayBuffer = $global.ArrayBuffer || js.html.compat.ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js.html.compat.ArrayBuffer.sliceImpl;
}
var Float32Array = $global.Float32Array || js.html.compat.Float32Array._new;
var Float64Array = $global.Float64Array || ($global.Float32Array ? "notsupported" : null) || js.html.compat.Float64Array._new;
var Uint8Array = $global.Uint8Array || js.html.compat.Uint8Array._new;
alphaTab.platform.svg.SvgCanvas.BlurCorrection = 0;
alphaTab.platform.model.Color.BlackRgb = "#000000";
system.Convert._conversionBuffer = new ArrayBuffer(8);
system.Convert._int8Buffer = new Int8Array(system.Convert._conversionBuffer);
system.Convert._uint8Buffer = new Uint8Array(system.Convert._conversionBuffer);
system.Convert._int16Buffer = new Int16Array(system.Convert._conversionBuffer);
system.Convert._uint16Buffer = new Uint16Array(system.Convert._conversionBuffer);
system.Convert._int32Buffer = new Int32Array(system.Convert._conversionBuffer);
system.Convert._uint32Buffer = new Uint32Array(system.Convert._conversionBuffer);
js.Boot.__toStr = ({ }).toString;
alphaTab.rendering.layout.PageViewLayout.PagePadding = new Float32Array([40,40,40,40]);
alphaTab.rendering.layout.PageViewLayout.GroupSpacing = 20;
alphaTab.rendering.layout.HorizontalScreenLayout.PagePadding = new Float32Array([20,20,20,20]);
alphaTab.rendering.layout.HorizontalScreenLayout.GroupSpacing = 20;
alphaTab.Environment.StaveProfileScoreTab = "score-tab";
alphaTab.Environment.StaveProfileTab = "tab";
alphaTab.Environment.StaveProfileScore = "score";
alphaTab.audio.MidiUtils.QuarterTime = 960;
alphaTab.audio.MidiUtils.PercussionChannel = 9;
alphaTab.audio.MidiUtils.MinVelocity = 15;
alphaTab.audio.MidiUtils.VelocityIncrement = 16;
alphaTab.audio.generator.MidiFileGenerator.DefaultBend = 64;
alphaTab.audio.generator.MidiFileGenerator.DefaultBendSemitone = 2.75;
alphaTab.audio.generator.MidiFileHandler.DefaultMetronomeKey = 37;
alphaTab.audio.generator.MidiFileHandler.DefaultDurationDead = 30;
alphaTab.audio.generator.MidiFileHandler.DefaultDurationPalmMute = 80;
alphaTab.audio.generator.MidiFileHandler.RestMessage = 0;
alphaTab.audio.model._MidiController.MidiController_Impl_.DataEntryCoarse = 6;
alphaTab.audio.model._MidiController.MidiController_Impl_.VolumeCoarse = 7;
alphaTab.audio.model._MidiController.MidiController_Impl_.PanCoarse = 10;
alphaTab.audio.model._MidiController.MidiController_Impl_.ExpressionControllerCoarse = 11;
alphaTab.audio.model._MidiController.MidiController_Impl_.DataEntryFine = 38;
alphaTab.audio.model._MidiController.MidiController_Impl_.RegisteredParameterFine = 100;
alphaTab.audio.model._MidiController.MidiController_Impl_.RegisteredParameterCourse = 101;
alphaTab.importer.AlphaTexImporter.Eof = 0;
alphaTab.importer.AlphaTexImporter.TrackChannels = new Int32Array([0,1]);
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.No = 0;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.Eof = 1;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.Number = 2;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.DoubleDot = 3;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.Dot = 4;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.String = 5;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.Tuning = 6;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.LParensis = 7;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.RParensis = 8;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.LBrace = 9;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.RBrace = 10;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.Pipe = 11;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.MetaCommand = 12;
alphaTab.importer._AlphaTexSymbols.AlphaTexSymbols_Impl_.Multiply = 13;
alphaTab.importer.Gp3To5Importer.VersionString = "FICHIER GUITAR PRO ";
alphaTab.importer.Gp3To5Importer.BendStep = 25;
alphaTab.importer.GpxFileSystem.HeaderBcFs = "BCFS";
alphaTab.importer.GpxFileSystem.HeaderBcFz = "BCFZ";
alphaTab.importer.GpxFileSystem.ScoreGpif = "score.gpif";
alphaTab.importer.GpxParser.InvalidId = "-1";
alphaTab.importer.GpxParser.BendPointPositionFactor = 0.6;
alphaTab.importer.GpxParser.BendPointValueFactor = 0.04;
alphaTab.io.BitReader.ByteSize = 8;
alphaTab.model._AccentuationType.AccentuationType_Impl_.None = 0;
alphaTab.model._AccentuationType.AccentuationType_Impl_.Normal = 1;
alphaTab.model._AccentuationType.AccentuationType_Impl_.Heavy = 2;
alphaTab.model._AccidentalType.AccidentalType_Impl_.None = 0;
alphaTab.model._AccidentalType.AccidentalType_Impl_.Natural = 1;
alphaTab.model._AccidentalType.AccidentalType_Impl_.Sharp = 2;
alphaTab.model._AccidentalType.AccidentalType_Impl_.Flat = 3;
alphaTab.model._AutomationType.AutomationType_Impl_.Tempo = 0;
alphaTab.model._AutomationType.AutomationType_Impl_.Volume = 1;
alphaTab.model._AutomationType.AutomationType_Impl_.Instrument = 2;
alphaTab.model._AutomationType.AutomationType_Impl_.Balance = 3;
alphaTab.model.Bar.GlobalBarId = 0;
alphaTab.model.Beat.WhammyBarMaxPosition = 60;
alphaTab.model.Beat.WhammyBarMaxValue = 24;
alphaTab.model.Beat.GlobalBeatId = 0;
alphaTab.model.BendPoint.MaxPosition = 60;
alphaTab.model.BendPoint.MaxValue = 12;
alphaTab.model._BrushType.BrushType_Impl_.None = 0;
alphaTab.model._BrushType.BrushType_Impl_.BrushUp = 1;
alphaTab.model._BrushType.BrushType_Impl_.BrushDown = 2;
alphaTab.model._BrushType.BrushType_Impl_.ArpeggioUp = 3;
alphaTab.model._BrushType.BrushType_Impl_.ArpeggioDown = 4;
alphaTab.model._Clef.Clef_Impl_.Neutral = 0;
alphaTab.model._Clef.Clef_Impl_.C3 = 1;
alphaTab.model._Clef.Clef_Impl_.C4 = 2;
alphaTab.model._Clef.Clef_Impl_.F4 = 3;
alphaTab.model._Clef.Clef_Impl_.G2 = 4;
alphaTab.model._ClefOttavia.ClefOttavia_Impl_._15ma = 0;
alphaTab.model._ClefOttavia.ClefOttavia_Impl_._8va = 1;
alphaTab.model._ClefOttavia.ClefOttavia_Impl_.Regular = 2;
alphaTab.model._ClefOttavia.ClefOttavia_Impl_._8vb = 3;
alphaTab.model._ClefOttavia.ClefOttavia_Impl_._15mb = 4;
alphaTab.model._CrescendoType.CrescendoType_Impl_.None = 0;
alphaTab.model._CrescendoType.CrescendoType_Impl_.Crescendo = 1;
alphaTab.model._CrescendoType.CrescendoType_Impl_.Decrescendo = 2;
alphaTab.model._Duration.Duration_Impl_.QuadrupleWhole = -4;
alphaTab.model._Duration.Duration_Impl_.DoubleWhole = -2;
alphaTab.model._Duration.Duration_Impl_.Whole = 1;
alphaTab.model._Duration.Duration_Impl_.Half = 2;
alphaTab.model._Duration.Duration_Impl_.Quarter = 4;
alphaTab.model._Duration.Duration_Impl_.Eighth = 8;
alphaTab.model._Duration.Duration_Impl_.Sixteenth = 16;
alphaTab.model._Duration.Duration_Impl_.ThirtySecond = 32;
alphaTab.model._Duration.Duration_Impl_.SixtyFourth = 64;
alphaTab.model._Duration.Duration_Impl_.OneHundredTwentyEighth = 128;
alphaTab.model._Duration.Duration_Impl_.TwoHundredFiftySixth = 256;
alphaTab.model._DynamicValue.DynamicValue_Impl_.PPP = 0;
alphaTab.model._DynamicValue.DynamicValue_Impl_.PP = 1;
alphaTab.model._DynamicValue.DynamicValue_Impl_.P = 2;
alphaTab.model._DynamicValue.DynamicValue_Impl_.MP = 3;
alphaTab.model._DynamicValue.DynamicValue_Impl_.MF = 4;
alphaTab.model._DynamicValue.DynamicValue_Impl_.F = 5;
alphaTab.model._DynamicValue.DynamicValue_Impl_.FF = 6;
alphaTab.model._DynamicValue.DynamicValue_Impl_.FFF = 7;
alphaTab.model._Fingers.Fingers_Impl_.Unknown = -2;
alphaTab.model._Fingers.Fingers_Impl_.NoOrDead = -1;
alphaTab.model._Fingers.Fingers_Impl_.Thumb = 0;
alphaTab.model._Fingers.Fingers_Impl_.IndexFinger = 1;
alphaTab.model._Fingers.Fingers_Impl_.MiddleFinger = 2;
alphaTab.model._Fingers.Fingers_Impl_.AnnularFinger = 3;
alphaTab.model._Fingers.Fingers_Impl_.LittleFinger = 4;
alphaTab.model._GraceType.GraceType_Impl_.None = 0;
alphaTab.model._GraceType.GraceType_Impl_.OnBeat = 1;
alphaTab.model._GraceType.GraceType_Impl_.BeforeBeat = 2;
alphaTab.model._HarmonicType.HarmonicType_Impl_.None = 0;
alphaTab.model._HarmonicType.HarmonicType_Impl_.Natural = 1;
alphaTab.model._HarmonicType.HarmonicType_Impl_.Artificial = 2;
alphaTab.model._HarmonicType.HarmonicType_Impl_.Pinch = 3;
alphaTab.model._HarmonicType.HarmonicType_Impl_.Tap = 4;
alphaTab.model._HarmonicType.HarmonicType_Impl_.Semi = 5;
alphaTab.model._HarmonicType.HarmonicType_Impl_.Feedback = 6;
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.Major = 0;
alphaTab.model._KeySignatureType.KeySignatureType_Impl_.Minor = 1;
alphaTab.model.Lyrics.CharCodeLF = 10;
alphaTab.model.Lyrics.CharCodeTab = 9;
alphaTab.model.Lyrics.CharCodeCR = 13;
alphaTab.model.Lyrics.CharCodeSpace = 32;
alphaTab.model.Lyrics.CharCodeBrackedClose = 93;
alphaTab.model.Lyrics.CharCodeBrackedOpen = 91;
alphaTab.model.Lyrics.CharCodeDash = 45;
alphaTab.model.Lyrics_LyricsState.IGNORE_SPACES = 0;
alphaTab.model.Lyrics_LyricsState.BEGIN = 1;
alphaTab.model.Lyrics_LyricsState.TEXT = 2;
alphaTab.model.Lyrics_LyricsState.COMMENT = 3;
alphaTab.model.Lyrics_LyricsState.DASH = 4;
alphaTab.model.MasterBar.MaxAlternateEndings = 8;
alphaTab.model.Note.GlobalNoteId = 0;
alphaTab.model.Note.MaxOffsetForSameLineSearch = 3;
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.Default = 0;
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.SwapAccidentals = 1;
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ForceNatural = 2;
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ForceSharp = 3;
alphaTab.model._NoteAccidentalMode.NoteAccidentalMode_Impl_.ForceFlat = 4;
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.None = 0;
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.Up = 1;
alphaTab.model._PickStrokeType.PickStrokeType_Impl_.Down = 2;
alphaTab.model._SlideType.SlideType_Impl_.None = 0;
alphaTab.model._SlideType.SlideType_Impl_.Shift = 1;
alphaTab.model._SlideType.SlideType_Impl_.Legato = 2;
alphaTab.model._SlideType.SlideType_Impl_.IntoFromBelow = 3;
alphaTab.model._SlideType.SlideType_Impl_.IntoFromAbove = 4;
alphaTab.model._SlideType.SlideType_Impl_.OutUp = 5;
alphaTab.model._SlideType.SlideType_Impl_.OutDown = 6;
alphaTab.model.Track.ShortNameMaxLength = 10;
alphaTab.model._TripletFeel.TripletFeel_Impl_.NoTripletFeel = 0;
alphaTab.model._TripletFeel.TripletFeel_Impl_.Triplet16th = 1;
alphaTab.model._TripletFeel.TripletFeel_Impl_.Triplet8th = 2;
alphaTab.model._TripletFeel.TripletFeel_Impl_.Dotted16th = 3;
alphaTab.model._TripletFeel.TripletFeel_Impl_.Dotted8th = 4;
alphaTab.model._TripletFeel.TripletFeel_Impl_.Scottish16th = 5;
alphaTab.model._TripletFeel.TripletFeel_Impl_.Scottish8th = 6;
alphaTab.model._VibratoType.VibratoType_Impl_.None = 0;
alphaTab.model._VibratoType.VibratoType_Impl_.Slight = 1;
alphaTab.model._VibratoType.VibratoType_Impl_.Wide = 2;
alphaTab.platform.model._FontStyle.FontStyle_Impl_.Plain = 0;
alphaTab.platform.model._FontStyle.FontStyle_Impl_.Bold = 1;
alphaTab.platform.model._FontStyle.FontStyle_Impl_.Italic = 2;
alphaTab.platform.model._TextAlign.TextAlign_Impl_.Left = 0;
alphaTab.platform.model._TextAlign.TextAlign_Impl_.Center = 1;
alphaTab.platform.model._TextAlign.TextAlign_Impl_.Right = 2;
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.Top = 0;
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.Middle = 1;
alphaTab.platform.model._TextBaseline.TextBaseline_Impl_.Bottom = 2;
alphaTab.platform.svg.FontSizes.TimesNewRoman = new Uint8Array([3,4,5,6,6,9,9,2,4,4,6,6,3,4,3,3,6,6,6,6,6,6,6,6,6,6,3,3,6,6,6,5,10,8,7,7,8,7,6,7,8,4,4,8,7,10,8,8,7,8,7,5,8,8,7,11,8,8,7,4,3,4,5,6,4,5,5,5,5,5,4,5,6,3,3,6,3,9,6,6,6,5,4,4,4,5,6,7,6,6,5,5,2,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,6,6,6,6,2,5,4,8,4,6,6,0,8,6,4,6,3,3,4,5,5,4,4,3,3,6,8,8,8,5,8,8,8,8,8,8,11,7,7,7,7,7,4,4,4,4,8,8,8,8,8,8,8,6,8,8,8,8,8,8,6,5,5,5,5,5,5,5,8,5,5,5,5,5,3,3,3,3,6,6,6,6,6,6,6,6,6,5,5,5,5,6,6]);
alphaTab.platform.svg.FontSizes.Arial11Pt = new Uint8Array([3,3,4,6,6,10,7,2,4,4,4,6,3,4,3,3,6,6,6,6,6,6,6,6,6,6,3,3,6,6,6,6,11,7,7,8,8,7,7,9,8,3,6,7,6,9,8,9,7,9,8,7,7,8,7,10,7,7,7,3,3,3,5,6,4,6,6,6,6,6,3,6,6,2,2,6,2,9,6,6,6,6,4,6,3,6,6,8,6,6,6,4,3,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,6,6,6,6,3,6,4,8,4,6,6,0,8,6,4,6,4,4,4,6,6,4,4,4,4,6,9,9,9,7,7,7,7,7,7,7,11,8,7,7,7,7,3,3,3,3,8,8,9,9,9,9,9,6,9,8,8,8,8,7,7,7,6,6,6,6,6,6,10,6,6,6,6,6,3,3,3,3,6,6,6,6,6,6,6,6,7,6,6,6,6,6,6]);
alphaTab.platform.svg.FontSizes.ControlChars = 32;
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.TimesNewRoman = 0;
alphaTab.platform.svg._SupportedFonts.SupportedFonts_Impl_.Arial = 1;
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.PreNotes = 0;
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.OnNotes = 1;
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.PostNotes = 2;
alphaTab.rendering._BeatXPosition.BeatXPosition_Impl_.EndBeat = 3;
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.SinglePreBeat = 0;
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.SingleOnBeat = 1;
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.GroupedBeforeBeat = 2;
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.GroupedOnBeat = 3;
alphaTab.rendering._EffectBarGlyphSizing.EffectBarGlyphSizing_Impl_.FullBar = 4;
alphaTab.rendering.ScoreBarRenderer.StaffId = "score";
alphaTab.rendering.ScoreBarRenderer.SharpKsSteps = new Int32Array([1,4,0,3,6,2,5]);
alphaTab.rendering.ScoreBarRenderer.FlatKsSteps = new Int32Array([5,2,6,3,7,4,8]);
alphaTab.rendering.ScoreBarRenderer.LineSpacing = 8;
alphaTab.rendering.TabBarRenderer.StaffId = "tab";
alphaTab.rendering.TabBarRenderer.LineSpacing = 10;
alphaTab.rendering.glyphs.AccidentalGroupGlyph.NonReserved = -3000;
alphaTab.rendering.glyphs.AlternateEndingsGlyph.Padding = 3;
alphaTab.rendering.glyphs.LineRangedGlyph.LineSpacing = 3;
alphaTab.rendering.glyphs.LineRangedGlyph.LineTopPadding = 8;
alphaTab.rendering.glyphs.LineRangedGlyph.LineTopOffset = 6;
alphaTab.rendering.glyphs.LineRangedGlyph.LineSize = 8;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.None = -1;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ClefG = 57424;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ClefC = 57436;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ClefF = 57442;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ClefNeutral = 57449;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ClefTab = 57453;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.ClefTabSmall = 57454;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestQuadrupleWhole = 58593;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestDoubleWhole = 58594;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestWhole = 58595;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestHalf = 58596;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestQuarter = 58597;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestEighth = 58598;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestSixteenth = 58599;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestThirtySecond = 58600;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestSixtyFourth = 58601;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestOneHundredTwentyEighth = 58602;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.RestTwoHundredFiftySixth = 58603;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.GraceUp = 57815;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.GraceDown = 57816;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Trill = 58726;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num0 = 57472;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num1 = 57473;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num2 = 57474;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num3 = 57475;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num4 = 57476;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num5 = 57477;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num6 = 57478;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num7 = 57479;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num8 = 57480;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Num9 = 57481;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.TimeSignatureCommon = 57482;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.TimeSignatureCutCommon = 57483;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteQuadrupleWhole = 57505;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteDoubleWhole = 57504;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteWhole = 57506;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteHalf = 57507;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteQuarter = 57508;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteDead = 57514;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteHarmonic = 57564;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteRideCymbal = 57566;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteHiHat = 57523;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteSideStick = 57513;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteHiHatHalf = 57591;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteChineseCymbal = 57593;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterUpEighth = 57920;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterDownEighth = 57921;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterUpSixteenth = 57922;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterDownSixteenth = 57923;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterUpThirtySecond = 57924;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterDownThirtySecond = 57925;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterUpSixtyFourth = 57926;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterDownSixtyFourth = 57927;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterUpOneHundredTwentyEighth = 57928;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterDownOneHundredTwentyEighth = 57929;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterUpTwoHundredFiftySixth = 57930;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.FooterDownTwoHundredFiftySixth = 57931;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.DynamicPPP = 58666;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.DynamicPP = 58667;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.DynamicP = 58656;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.DynamicMP = 58668;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.DynamicMF = 58669;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.DynamicF = 58658;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.DynamicFF = 58671;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.DynamicFFF = 58672;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Accentuation = 58528;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.HeavyAccentuation = 58540;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.WaveHorizontal = 60068;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.PickStrokeDown = 58896;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.PickStrokeUp = 58898;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.TremoloPickingThirtySecond = 57890;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.TremoloPickingSixteenth = 57889;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.TremoloPickingEighth = 57888;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.Tempo = 57813;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.NoteEighth = 57815;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.AccidentalFlat = 57952;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.AccidentalNatural = 57953;
alphaTab.rendering.glyphs._MusicFontSymbol.MusicFontSymbol_Impl_.AccidentalSharp = 57954;
alphaTab.rendering.glyphs.NoteHeadGlyph.GraceScale = 0.75;
alphaTab.rendering.glyphs.NoteHeadGlyph.NoteHeadHeight = 9;
alphaTab.rendering.glyphs.TripletFeelGlyph.NoteScale = 0.40;
alphaTab.rendering.glyphs.TripletFeelGlyph.NoteHeight = 12;
alphaTab.rendering.glyphs.TripletFeelGlyph.NoteSeparation = 12;
alphaTab.rendering.glyphs.TripletFeelGlyph.BarHeight = 2;
alphaTab.rendering.glyphs.TripletFeelGlyph.BarSeparation = 3;
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.Full = 0;
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.PartialLeft = 1;
alphaTab.rendering.glyphs._TripletFeelGlyph_BarType.TripletFeelGlyph_BarType_Impl_.PartialRight = 2;
alphaTab.rendering.glyphs.VoiceContainerGlyph.KeySizeBeat = "Beat";
alphaTab.rendering.glyphs.WhammyBarGlyph.WhammyMaxOffset = 60.0;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.None = 0;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.Title = 1;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.SubTitle = 2;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.Artist = 4;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.Album = 8;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.Words = 16;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.Music = 32;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.WordsAndMusic = 64;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.Copyright = 128;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.PageNumber = 256;
alphaTab.rendering.layout._HeaderFooterElements.HeaderFooterElements_Impl_.All = 511;
alphaTab.rendering.staves.BarLayoutingInfo.MinDuration = 30;
alphaTab.rendering.staves.BarLayoutingInfo.MinDurationWidth = 10;
alphaTab.rendering.staves.StaveGroup.AccoladeLabelSpacing = 10;
alphaTab.rendering.utils.AccidentalHelper.KeySignatureLookup = [[true,true,true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,false,true,true,true,true,true,true],[false,true,true,true,true,false,true,true,true,true,true,true],[false,true,true,true,true,false,false,false,true,true,true,true],[false,false,false,true,true,false,false,false,true,true,true,true],[false,false,false,true,true,false,false,false,false,false,true,true],[false,false,false,false,false,false,false,false,false,false,true,true],[false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,true,false,false,false,false,false],[true,true,false,false,false,true,true,false,false,false,false,false],[true,true,false,false,false,true,true,true,true,false,false,false],[true,true,true,true,false,true,true,true,true,false,false,false],[true,true,true,true,false,true,true,true,true,true,true,false],[true,true,true,true,true,true,true,true,true,true,true,false],[true,true,true,true,true,true,true,true,true,true,true,true]];
alphaTab.rendering.utils.AccidentalHelper.AccidentalNotes = [false,true,false,true,false,false,true,false,true,false,true,false];
alphaTab.rendering.utils.AccidentalHelper.StepsPerOctave = 7;
alphaTab.rendering.utils.AccidentalHelper.OctaveSteps = new Int32Array([40,34,32,28,40]);
alphaTab.rendering.utils.AccidentalHelper.SharpNoteSteps = new Int32Array([0,0,1,1,2,3,3,4,4,5,5,6]);
alphaTab.rendering.utils.AccidentalHelper.FlatNoteSteps = new Int32Array([0,1,1,2,2,3,4,4,5,5,6,6]);
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.Up = 0;
alphaTab.rendering.utils._BeamDirection.BeamDirection_Impl_.Down = 1;
alphaTab.rendering.utils.BeamingHelper.ScoreMiddleKeys = new Int32Array([60,60,57,50,71]);
alphaTab.rendering.utils.PercussionMapper.ElementVariationToMidi = [new Int32Array([35,35,35]),new Int32Array([38,38,37]),new Int32Array([56,56,56]),new Int32Array([56,56,56]),new Int32Array([56,56,56]),new Int32Array([41,41,41]),new Int32Array([43,43,43]),new Int32Array([45,45,45]),new Int32Array([47,47,47]),new Int32Array([48,48,48]),new Int32Array([42,46,46]),new Int32Array([44,44,44]),new Int32Array([49,49,49]),new Int32Array([57,57,57]),new Int32Array([55,55,55]),new Int32Array([51,59,53]),new Int32Array([52,52,52])];
alphaTab.util._LogLevel.LogLevel_Impl_.None = 0;
alphaTab.util._LogLevel.LogLevel_Impl_.Debug = 1;
alphaTab.util._LogLevel.LogLevel_Impl_.Info = 2;
alphaTab.util._LogLevel.LogLevel_Impl_.Warning = 3;
alphaTab.util._LogLevel.LogLevel_Impl_.Error = 4;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.None = 0;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.Element = 1;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.Attribute = 2;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.Text = 3;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.CDATA = 4;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.EntityReference = 5;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.Entity = 6;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.ProcessingInstruction = 7;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.Comment = 8;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.Document = 9;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.DocumentType = 10;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.DocumentFragment = 11;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.Notation = 12;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.Whitespace = 13;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.SignificantWhitespace = 14;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.EndElement = 15;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.EndEntity = 16;
alphaTab.xml._XmlNodeType.XmlNodeType_Impl_.XmlDeclaration = 17;
alphaTab.xml.XmlParser.CharCodeLF = 10;
alphaTab.xml.XmlParser.CharCodeTab = 9;
alphaTab.xml.XmlParser.CharCodeCR = 13;
alphaTab.xml.XmlParser.CharCodeSpace = 32;
alphaTab.xml.XmlParser.CharCodeLowerThan = 60;
alphaTab.xml.XmlParser.CharCodeAmp = 38;
alphaTab.xml.XmlParser.CharCodeBrackedClose = 93;
alphaTab.xml.XmlParser.CharCodeBrackedOpen = 91;
alphaTab.xml.XmlParser.CharCodeGreaterThan = 62;
alphaTab.xml.XmlParser.CharCodeExclamation = 33;
alphaTab.xml.XmlParser.CharCodeUpperD = 68;
alphaTab.xml.XmlParser.CharCodeLowerD = 100;
alphaTab.xml.XmlParser.CharCodeMinus = 45;
alphaTab.xml.XmlParser.CharCodeQuestion = 63;
alphaTab.xml.XmlParser.CharCodeSlash = 47;
alphaTab.xml.XmlParser.CharCodeEquals = 61;
alphaTab.xml.XmlParser.CharCodeDoubleQuote = 34;
alphaTab.xml.XmlParser.CharCodeSingleQuote = 39;
alphaTab.xml.XmlParser.CharCodeSharp = 35;
alphaTab.xml.XmlParser.CharCodeLowerX = 120;
alphaTab.xml.XmlParser.CharCodeLowerA = 97;
alphaTab.xml.XmlParser.CharCodeLowerZ = 122;
alphaTab.xml.XmlParser.CharCodeUpperA = 65;
alphaTab.xml.XmlParser.CharCodeUpperZ = 90;
alphaTab.xml.XmlParser.CharCode0 = 48;
alphaTab.xml.XmlParser.CharCode9 = 57;
alphaTab.xml.XmlParser.CharCodeColon = 58;
alphaTab.xml.XmlParser.CharCodeDot = 46;
alphaTab.xml.XmlParser.CharCodeUnderscore = 95;
alphaTab.xml.XmlParser_XmlState.IGNORE_SPACES = 0;
alphaTab.xml.XmlParser_XmlState.BEGIN = 1;
alphaTab.xml.XmlParser_XmlState.BEGIN_NODE = 2;
alphaTab.xml.XmlParser_XmlState.TAG_NAME = 3;
alphaTab.xml.XmlParser_XmlState.BODY = 4;
alphaTab.xml.XmlParser_XmlState.ATTRIB_NAME = 5;
alphaTab.xml.XmlParser_XmlState.EQUALS = 6;
alphaTab.xml.XmlParser_XmlState.ATTVAL_BEGIN = 7;
alphaTab.xml.XmlParser_XmlState.ATTRIB_VAL = 8;
alphaTab.xml.XmlParser_XmlState.CHILDS = 9;
alphaTab.xml.XmlParser_XmlState.CLOSE = 10;
alphaTab.xml.XmlParser_XmlState.WAIT_END = 11;
alphaTab.xml.XmlParser_XmlState.WAIT_END_RET = 12;
alphaTab.xml.XmlParser_XmlState.PCDATA = 13;
alphaTab.xml.XmlParser_XmlState.HEADER = 14;
alphaTab.xml.XmlParser_XmlState.COMMENT = 15;
alphaTab.xml.XmlParser_XmlState.DOCTYPE = 16;
alphaTab.xml.XmlParser_XmlState.CDATA = 17;
alphaTab.xml.XmlParser_XmlState.ESCAPE = 18;
haxe.io.FPHelper.i64tmp = (function($this) {
	var $r;
	var this1 = new haxe._Int64.___Int64(0,0);
	$r = this1;
	return $r;
}(this));
js.html.compat.Float32Array.BYTES_PER_ELEMENT = 4;
js.html.compat.Float64Array.BYTES_PER_ELEMENT = 8;
js.html.compat.Uint8Array.BYTES_PER_ELEMENT = 1;
alphaTab.Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
