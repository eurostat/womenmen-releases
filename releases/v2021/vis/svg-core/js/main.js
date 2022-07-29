var fontPath = "../../svg-core/fonts"
// String.defaultLocale = window.defaultLanguage;
String.locale = window.defaultLanguage;
String.toLocaleString(window.availableLanguages);
let lang = getParameterValue('lang');
if (lang !== '' && lang !== "") {
    for ( value in window.availableLanguages) {
        if ( value === lang) {
            String.locale = lang;
        }
    } 
}
function randomInRange(from, to) {
  var r = Math.random();
  return Math.floor(r * (to - from) + from);
}
var simpleMode = (getParameterValue("simple") != null && getParameterValue("simple") === "true");

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function checkFont () {
	$(".loading").show();
	fontSpy('MyriadPro-Cond', {
	success: function() {
		$("#loader").hide();
	},
	failure: function() {
		alert("error");
	//$('#lobster-result').html("failed to load");
	}
	});
}
if (simpleMode && parent.onloadedFrame) {
	$("body").css("overflow-y","hidden");
}
$('embed').on('load', function()
{
	//console.log("embed loaded")
	init();
}); 

/*
var random = randomInRange(500,1000);
random = (uniqueID == "cooking") || (uniqueID == "cooking")  ? 400 : 1500;
console.log(random);
random = 1300;
setTimeout(function() {
	//init();
}, random);
*/
function init () {
	addFont();
    parseAndEraseSVGTexts(layers);
	drawTexts();
	checkFont();
	handleDatabrowserLink();
	if (simpleMode) {
		$("#social-container").hide();
	}
	if (parent.onloadedFrame) {
		parent.onloadedFrame(window.location.href);
		$("body").css("overflow-y","hidden");
		
	}
}

function handleDatabrowserLink () {
	if (typeof linkDatabrowser !== 'undefined' && linkDatabrowser.length > 0) {
		$("#bookmark-container").show();
		$("#bookmark-link span").html(_("linkSource"));
		$("#bookmark-link a").html(_("linkText"));
		$("#bookmark-link a").attr("href",linkDatabrowser);
	}else {
		$("#bookmark-container").remove();
	}
}

function addFont () {
	/*
	console.log(document.getElementById(uniqueID).getSVGDocument());
	if (document.getElementById(uniqueID).getSVGDocument() == null) {
		init();
		console.log("Error");
		return;
	}*/
	var doc = document.getElementById(uniqueID).getSVGDocument().documentElement;
   	var svg = d3.select(doc);
	svg.append("style")
	.attr("type","text/css")
	.text(
   	"	@font-face {"+
   	"	   font-family: 'MyriadPro-BoldCond';"+
   	"	   src: url('"+fontPath+"/myriad/MyriadPro-BoldCond.eot');"+
   	"	   src: url('"+fontPath+"/myriad/MyriadPro-BoldCond.eot?#iefix') format('embedded-opentype'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-BoldCond.woff') format('woff'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-BoldCond.ttf') format('truetype'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-BoldCond.svg#open_sansregular') format('svg');	"+
    ""+
    "	}"+
    "	@font-face {"+
    "	    font-family: 'MyriadPro-Cond';"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-Cond.eot');"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-Cond.eot?#iefix') format('embedded-opentype'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-Cond.woff') format('woff'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-Cond.ttf') format('truetype'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-Cond.svg#open_sansregular') format('svg');	"+
    ""+
    "	}"+
    "	@font-face {"+
    "	    font-family: 'MyriadPro-BoldSemiCn';"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.eot');"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.eot?#iefix') format('embedded-opentype'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.woff') format('woff'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.ttf') format('truetype'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.svg#open_sansregular') format('svg');	"+
    ""+
    "	}"+
    "	@font-face {"+
    "	    font-family: 'MyriadPro-SemiboldCond';"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.eot');"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.eot?#iefix') format('embedded-opentype'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.woff') format('woff'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.ttf') format('truetype'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-SemiBoldCond.svg#open_sansregular') format('svg');	"+
    ""+
    "	}"+
    "	@font-face {"+
    "	    font-family: 'MyriadPro-SemiCn';"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-SemiCn.eot?#iefix') format('embedded-opentype'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-SemiCn.woff') format('woff'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-SemiCn.ttf') format('truetype')"+
    ""+
    "	}"+
    "	@font-face {"+
    "	    font-family: 'MyriadPro-Regular';"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-Regular.eot');"+
    "	    src: url('"+fontPath+"/myriad/MyriadPro-Regular.eot?#iefix') format('embedded-opentype'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-Regular.woff') format('woff'),"+
    "	         url('"+fontPath+"/myriad/MyriadPro-Regular.ttf') format('truetype'),"+
	"	         url('"+fontPath+"/myriad/MyriadPro-Regular.svg#open_sansregular') format('svg');	"+
    ""+
    "	}"+
   	"	@font-face {"+
   	"	   font-family: 'MyriadPro-Bold';"+
   	"	   src: url('"+fontPath+"/myriad/MyriadPro-BoldCond.eot');"+
   	"	   src: url('"+fontPath+"/myriad/MyriadPro-BoldCond.eot?#iefix') format('embedded-opentype'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-BoldCond.woff') format('woff'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-BoldCond.ttf') format('truetype'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-BoldCond.svg#open_sansregular') format('svg');	"+
    ""+
    "	}"+
   	"	@font-face {"+
   	"	   font-family: 'MyriadPro-CondIt';"+
   	"	   src: url('"+fontPath+"/myriad/MyriadPro-CondIt.eot');"+
   	"	   src: url('"+fontPath+"/myriad/MyriadPro-CondIt.eot?#iefix') format('embedded-opentype'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-CondIt.woff') format('woff'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-CondIt.ttf') format('truetype'),"+
   	"	        url('"+fontPath+"/myriad/MyriadPro-CondIt.svg#open_sansregular') format('svg');	"+
    ""+
    "	}"+
		"	 ");
	
	
}


function parseChildrens (parentNode) {
	var temp = $(parentNode);
	if (temp.length > 0) {
    for (var i = 0; i < parentNode.length; i++) {
        var tableChild = parentNode[i];
		if (tableChild.childNodes.length > 0) {
			parseChildrens($(tableChild.childNodes));
		}else {
			translateElem($(tableChild));
		}
		
    }	
}
	
}

function parseAndEraseSVGTexts(layers) {
	for (var i = 0; i < layers.length; i++) {
		var layer = layers[i];
		
	    children = document.querySelector("#"+uniqueID).getSVGDocument().getElementById(layer).childNodes;
		parseChildrens(children);		
		
	}
	
}

function translateElem(elem) {
	if (mappingTextKey[elem.text()]) {
		var mappingKey = mappingTextKey[elem.text()];
		//if (mappingKey != _(mappingKey)) {
			temp = $(elem)[0];
			temp.data = "";
			//}
	}else {
		changeValueSeparator(elem);
	}
}

function changeValueSeparator (elem) {
	var text = elem.text();
	if (text.indexOf(".") != -1) {
		text = text.replace(".",_("decimal_separator"));
		temp = $(elem)[0];
		temp.data = text;
	}
}

function drawTexts () {

	var svg = document.getElementById(uniqueID).getSVGDocument().documentElement;
	var conteiner = d3.select(svg).append("g");
	conteiner.attr("id","conteiner");

	for (var i = 0; i < mappingTextPosition.length; i++) {
		var obj = mappingTextPosition[i];
		var objSize = mappingTextFontSize[i];
		if (obj.type == "collection") {
			var texts = obj.texts;
			var yPosition = obj.yPosition;
			for (var j = 0;j < texts.length; j++ ) {
		        var text = conteiner.append('text');				
				if (typeof texts[j] == "string") {
					var currentTextKey = texts[j];
					var xPosition = obj.xPosition;
					var strClass = obj.class;
				}else {
					var objText = texts[j]
					var currentTextKey = objText.textKey;
					var xPosition = obj.xPosition + objText.textPaddingX;
					var strClass = objText.hasOwnProperty("textClass") ? objText["textClass"] : obj.class;
					
				}
				text.text(_(currentTextKey))
				text.attr("class", strClass)
				if (! obj.rotate) {
					text.attr("x",function () {return obj.rotate ? yPosition : xPosition})
					text.attr("y",function () {return obj.rotate ? xPosition : yPosition})	
				}			
				text.attr("transform",function() {
					if (obj.rotate) {
						return "translate("+yPosition+","+xPosition+") rotate(-90)";
					}
					return "";
				})
				text.attr("style",function () {
					var style;
					if (obj.align == "center") {
						style = "text-anchor:middle;";
					}else if (obj.align == "left") {
						if (obj.rotate) {
							style = "text-anchor:end;";	
						}else {
							style = "text-anchor:start;";
						}
					}else {
						if (obj.rotate) {
							style = "text-anchor:start;";	
						}else {
							style = "text-anchor:end;";
						}
					}
					if (objSize.overridFontSize && objSize.overridFontSize.length > 0) {
						style+="font-size:"+objSize.overridFontSize+";";
					}
					if (obj.rotate) {
						//style+="writing-mode: sideways-lr;"
					}
					return style;
				})
				yPosition+= obj.yPadding;
				
			}
		}else if (obj.type == "single") {
	        var text = conteiner.append('text');
			text.text(_(obj.text))
			text.attr("class", obj.class)
			text.attr("x",obj.xPosition)
			text.attr("y",obj.yPosition)
			text.attr("style",function () {
				var style;
				if (obj.align == "center") {
					style = "text-anchor:middle;";
				}else if (obj.align == "left") {
					style = "text-anchor:start;";
				}else {
					style = "text-anchor:end;";
				}
				if (objSize.overridFontSize && objSize.overridFontSize.length > 0) {
					style+="font-size:"+objSize.overridFontSize;
				}
				return style;
			})
			
		}
		
	}
	
}

