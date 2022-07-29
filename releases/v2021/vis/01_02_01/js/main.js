
var windowWidth = widthForScreen();
var windowOrientation = window.orientation;

function isMobileSafari () {
	var userAgent = window.navigator.userAgent;
	if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
		return true;
	}
	else {
		return false;
	}
	return false;
}

function widthForContent () {
	var width;
	if (isMobileSafari()) {
		if (window.orientation  == 0) {
			width =  screen.width;
		}else {
			width =  screen.height;
		}
		return width*0.90;
	}
	return $("body").width();
}

function widthForScreen () {
	var width;
	if (isMobileSafari()) {
		if (window.orientation  == 0) {
			width =  screen.width;
		}else {
			width =  screen.height;
		}
		return width*0.90;
	}
	return $("body").width();
}

function compareString(a, b) {
    if (a.indShortName < b.indShortName)
        return -1;
    else if (a.indShortName > b.indShortName)
        return 1;
    else
        return 0;
}

function ieVersion() {
    var ua = window.navigator.userAgent;
    if (ua.indexOf("Trident/7.0") > 0)
        return 11;
    else if (ua.indexOf("Trident/6.0") > 0)
        return 10;
    else if (ua.indexOf("Trident/5.0") > 0)
        return 9;
    else
        return 0; // not IE9, 10 or 11
}

function numberWithSpace(x) {
    if ((x > 1000) || (x < -1000)) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return x;
}

function isAndroid() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

}

function roundNumberForTable(number, table) {
    var wasFloat = isInt(number) == false;
    var value;

    if (table.indexOf("ten00117") > -1) {
        value = Math.round(number * 10000) / 10000;
    } else if (table.indexOf("rd_e_gerdtot") > -1) {
        value = Math.round(number * 100) / 100;
    } else if (table.indexOf("tps00003") > -1) {
        value = parseInt(Math.round(number * 1) / 1);
        return value;
    } else if (table.indexOf("env_wasmun") > -1) {
        value = parseInt(Math.round(number * 1) / 1);
    } else if (table.indexOf("pat_ep_ntec") > -1) {
        value = parseInt(Math.round(number * 1) / 1);
        return value;
    } else if (table.indexOf("tps00180") > -1) {
        value = number;
    } else if (isInt(number)) {
        value = number;
    }
    if (value == null) {

        value = Math.round(number * 10) / 10;

    }
    if (wasFloat && isInt(value)) {
        value += ".0";
    }

    return value;

}

function transformValueForTable(number, table) {

    return roundNumberForTable(number, table);

}

function removeAccents(str) {
	
	var accent = [
	
		/[\300-\306]/g, /[\340-\346]/g, // A, a
		/[\310-\313]/g, /[\350-\353]/g, // E, e
		/[\314-\317]/g, /[\354-\357]/g, // I, i
		/[\322-\330]/g, /[\362-\370]/g, // O, o
		/[\331-\334]/g, /[\371-\374]/g, // U, u
		/[\321]/g, /[\361]/g, // N, n
		/[\307]/g, /[\347]/g, // C, c
		
	];
	
	var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

	for (var i = 0; i < accent.length; i++){
		
		str = str.replace(accent[i], noaccent[i]);
		
	}
	
	return str;
	
}

function compareCode(a, b) {

    if (parseInt(a.idCountry) < parseInt(b.idCountry))
        return -1;
    if (parseInt(a.idCountry) > parseInt(b.idCountry))
        return 1;
    return 0;
}


function setupSizes () {

	var frame = window.frameElement;
	var frame1 = $(frame);
	frame1.css("overflow","scroll");	

	var ratio = 2.2;
	var width = Math.min(widthForScreen(),1024);
	var height = $("body").height();
	var heightRatio = width/ratio;
	height = Math.min(heightRatio,535); 

	var height = Math.min(height,$("body").height()-205);

	$("#svg_vis,#gates_tooltip").remove();
	$("#icons").html("<ul></ul>");
	$("#scaleWrapper, #shareDisplay").html("");
	
	var x = d3.scale.linear()
        .domain([0,1500])
        .range([10,35]);
	chartBubbleRadius = parseInt(x(width));

	chartYPadding = 0;
	if (width < 400 || height < 300) {
		chartBubbleRadius = 10;
		//chartYPadding = 0;
	}else if (width < 600) {
		chartBubbleRadius = 15;
		//chartYPadding = 100;
	}else if (width >= 600 && width < 800) {
		chartBubbleRadius = 20;
		//chartYPadding = 50;
	}else if (width >= 800 && width < 1000) {
		//chartYPadding = 50;
		chartBubbleRadius = 25;
	}

	chartWidth = width;
	chartHeight = height;
	chart = null;
	/*
	console.log(width);
	console.log(chartYPadding);
	console.log(chartBubbleRadius);
	*/
}

function resize() {
	//alert('resize');
	setupSizes();
	initChart();
	$("#scaleWrapper,#main").css("width",chartWidth);
	if (window.frameElement && isMobileSafari()) {
	}else {
		$("#container").css("width",chartWidth);		
	}
	$("#scaleWrapper,#main").css("height",chartHeight);
}

var chartIconWrapperHeight = 50;
var chartIconWrapperMargin = 5;
var currentClass = "";
//initForSize();

var rtime;
var timeout = false;
var delta = 200;

window.onorientationchange = function () {
   setTimeout(resizeend, delta);

}

$(window).on('resize', function(){

    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
     if (widthForScreen() != windowWidth || window.orientation != windowOrientation) {
         windowWidth = widthForScreen();
		 windowOrientation = window.orientation;

		 resize();

     }
	   
   }
               
}

function getDecimalSeparator(val){

	var separators = {
		
		"point":".",
		"comma":","
		
	};
	
	val = val.toString();
	
	var keys = Object.keys(separators);
	
	for (var x = 0; x < keys.length; x++) {

		if (val.indexOf(separators[keys[x]]) > -1) {
			
			val = val.replace(separators[keys[x]], _("decimal_separator"));

		} 
		
	}
	
	return val;
		
}

$(document).ready(function() {

	// String.defaultLocale = window.defaultLanguage;
	String.locale = window.defaultLanguage;
	String.toLocaleString(window.availableLanguages);
	var lang = getParameterValue('lang'); 
	if (lang !== '' && lang !== "") {
		for (var value in window.availableLanguages) {
			if ( value === lang) {
				String.locale = lang;
			}
		} 
	}
		
	selectedLang = window.countrySelected.toLowerCase();
	simple = getParameterValue('simple');

	document.title = _("document.title");

	$("#titleHighlightMS").html( _('gearButtonLabel_1') ).css("margin-left", "10px");
	$("#titleHighlightEA").html( _('gearButtonLabel_2') ).css("margin-left", "10px");

    setTimeout("$(\"#randomTxt span\").toggle();", 9000);
    $("#infoConteiner").draggable({
        cancel: '.content'
    });
	
	var title = _('bubbleOrderDescLine1');
	
	var bubbleOrderTitle = _('bubbleOrderDescLine1');
	var bubbleOrderDesc  = "<br><br><p>" + _('bubbleOrderDescLine1') + "</p><p>" + _('bubbleOrderDescLine2') + "</p>";
	var datasetLink = _('datasetLabel') + '<a href="' + chartDatasetLink + '" target="_blank">' + _('linkToDataset') + '</a>';
	
	$(".data-bookmark").html(datasetLink);1
	
	$('#ie18nRandomTitle').prop('title', bubbleOrderTitle);
	$('#ie18nRandom').html(bubbleOrderDesc);
    $("#infoConteiner").hide();
    $("#countriesConteiner").draggable();
    $("#countriesConteiner").resizable();
    $("#infoClosebutton a").click(function() {
        $("#infoConteiner").toggle('slow');
    });
    $("#countriesClosebutton").click(function() {
        $("#countriesConteiner").toggle('slow');
    });

    $(document).bind('touchmove', false);
    $("#randomTxt img").click(function() {
        $("#randomTxt span").toggle();
    });

    if (navigator.userAgent.match(/iPad/i) != null) {
        $("#icons").css('margin-top', '-7px');
    }
	
	resize();

});
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    sPageUrl = sPageURL.replace("%23", "#");
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
var BubbleChart, root,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };


function isInt(n) {
    return n % 1 === 0;
}

function calculateTicks(min, max, tickCount) {
    var span = max - min,
        step = Math.pow(10, Math.floor(Math.log(span / tickCount) / Math.LN10)),
        err = tickCount / span * step;

    // Filter ticks to get closer to the desired count.
    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    // Round start and stop values to step interval.
    var tstart = Math.ceil(min / step) * step,
        tstop = Math.floor(max / step) * step + step * .5,
        ticks = [],
        x;

    if (isInt(tstart)) {
        var i = parseInt(tstart);
    } else {
        var i = parseFloat(tstart);
    }
    if (isInt(tstop)) {
        tstop = parseInt(tstop);
    } else {
        tstop = parseFloat(tstop).toFixed(2);
    }

    var result;

    while (i < tstop) {
        if (isInt(step)) {
            result = parseInt(i) + parseInt(step);
        } else {
            result = parseFloat(i) + parseFloat(step);
            result = result.toFixed(2);
        }
        i = result;

        if (result < tstop) {
            ticks.push(result);
        }
    }
    for (iterator = 0; iterator < ticks.length; iterator++) {
        var temp = ticks[iterator];
        if (isInt(temp)) {
            temp = parseInt(temp);
        } else {
            // If terminate with ",00", we remove the ",00
            if (temp.substring(temp.length - 3, temp.length) == ".00") {
                temp = temp.substring(0, temp.length - 3);
            }

            if (temp.substring(temp.length - 1, temp.length) == "0" && temp.length > 1) {
                temp = temp.substring(0, temp.length - 1);
            }
        }
        if (temp == "-0.00" || temp == "0.00") {
            temp = "0";
        }
        ticks[iterator] = temp;
    }
    return ticks;
}

function sortObject(obj){

	obj.sort(function(a, b) {
		
		var cntry_a = removeAccents(a.countryName.toUpperCase());
		var cntry_b = removeAccents(b.countryName.toUpperCase());
		
		return (cntry_a < cntry_b) ? -1 : (cntry_a > cntry_b) ? 1 : 0;
		
	});
	
}

function getCountryContainer(cntry){
	
	return (eftaCntry.indexOf(cntry) !== - 1) ? "estatContent" : "memberStateContent";
	
}

BubbleChart = (function() {
    function BubbleChart(data) {
        this.eu27Color = '#0B50A0';
        this.hide_details = __bind(this.hide_details, this);
        this.show_details = __bind(this.show_details, this);
        this.display_years = __bind(this.display_years, this);
        this.move_towards_center = __bind(this.move_towards_center, this);
        this.display_group_all = __bind(this.display_group_all, this);
        this.start = __bind(this.start, this);
        this.create_vis = __bind(this.create_vis, this);
        this.create_nodes = __bind(this.create_nodes, this);
        this.max_amount = null;
        this.data = data;
        this.width = getUrlParameter('width') != null ? getUrlParameter('width') : chartWidth;
        this.height = getUrlParameter('height') != null ? getUrlParameter('height') : chartHeight;
        this.bubbleRadiusMin = chartBubbleSizeMin;
        this.bubbleRadiusMax = chartBubbleSizeMax;
        this.tooltip = CustomTooltip("gates_tooltip", 300);
        this.center = {
            x: this.width / 2,
            y: this.height / 2
        };
        this.layout_gravity = -0.01;
        this.damper = 0.04; // Espacement entre les bulles en vertical
        this.vis = null;
        this.nodes = [];
        this.force = null;
        this.circles = null;
        this.max_amount = d3.max(this.data, function(d) {
            return parseInt(d.pop);
        });
        this.min_amount = null;
        this.radius_scale = null; //d3.scale.pow().exponent(0.5).domain([-1.2, 2.3]).range([this.bubbleRadiusMin, this.bubbleRadiusMax]);
        this.xPosition_scale = d3.scale.pow().exponent(0.5).domain([0, this.max_amount]).range([0, this.width]);
        this.create_nodes();
        this.create_vis();
        this.emptyBubble = 0;
        this.graphX = null;
        this.graphxAxis = null;
        this.graphGx = null;
        this.themas = [];
        this.dataCountries = [];
        this.isTablet = navigator.userAgent.match(/iPad/i) != null;
        this.selectedCountry = [];
        this.ecCountries = [];
        this.msCountries = [];
        this.countriesNoData = [];
        this.selectedThema = null;
    }

    BubbleChart.prototype.initMenu = function(chart) {
        $(".wrap").css("width", this.width);

        var data = chart.data;
        var countries = new Array();
        var htmlColumn1;
        var htmlColumn2;
        var MSCountries = new Array();
        var ECCountries = new Array()

        data.forEach((function(_this) {
            countries[_this.countryCode] = _this;
            MSCountries.push(_this);
        }));		
		
		var arrCntryList = [];
		var arrEuList  = [];
		var arrMsList    = [];
		var arrEftaList  = [];
		
		MSCountries.forEach((function(_this) {

			var obj = {};
			var cntryCode = _this.countryCode.toUpperCase().trim();
			var codeMatch = cntryCode.match(/EU27_2020/g);
		
			obj["countryCode"] =  cntryCode;
			obj["countryName"] =  _(cntryCode);
			
			if(codeMatch === null){

				if (eftaCntry.indexOf(cntryCode) === -1){

					arrMsList.push(obj);
					
				}
				else{
					
					arrEftaList.push(obj);
					
				}

			}
			else{
				
				arrEuList.push(obj);
				
			}
			
		}));
		
		sortObject(arrMsList);
		sortObject(arrEftaList);
		
		arrCntryList.push(arrEuList);
		arrCntryList.push(arrMsList);		
		arrCntryList.push(arrEftaList);
		
        $.each(Object.keys(arrCntryList), function (i, v) {
		   
		   $.each(Object.keys(arrCntryList[i]), function (ind, val) {
		
				var cntryCode = arrCntryList[i][ind].countryCode;
				var iso2Code  = cntryCode === "EU27_2020" ? "" :  " (" + cntryCode + ")";

				$("#countriesConteiner #" + getCountryContainer(cntryCode)).append("<li class=\"" + cntryCode.toLowerCase() + "\"><span class=\"selectCountryMS\" >" + _(cntryCode) + "</span>" + iso2Code + "</li>");
				
			});
			
        });

        this.ecCountries = ECCountries;
        this.msCountries = MSCountries;		

        chart.dataCountries = countries;
		
		chart.selectedCountry = countries["eu27_2020"];
		
        $(".selectCountryES, .selectCountryMS").click(function() {

            var shouldUnselect = false;
            var selectedClass = $(this).attr("class");
			
			$("#countriesClosebutton").trigger("click");

            $(".selectCountryES, .selectCountryMS").css("text-decoration", "none");
            $(".selectCountryES, .selectCountryMS").css("font-weight", "normal");

            var countryCode = $(this).parents("li").attr("class");
            var selectedCode;
            if (chart.selectedCountry) {
                selectedCode = chart.selectedCountry.countryCode;
            }
            if (selectedCode && selectedCode == countryCode) {
                shouldUnselect = true;
                chart.selectedCountry = [];
                selectedCode = "**";
            } else {
                shouldUnselect = false;
                //$(this).css("text-decoration", "underline");
                //$(this).css("font-weight", "bold");
            }

            var country;

            var i = 0;
            var country = null;
            if (shouldUnselect == false) {
                country = countries[countryCode];
                chart.selectedCountry = country;
				chart.countryClick(country);
				
				$(this).css("text-decoration", "underline");
                $(this).css("font-weight", "bold");
				
            }

            chart.circles.selectAll("image").attr("xlink:href", function(d) {
                var image = $("#bubbleImage_" + d.countryCode);
                var imageUrl;
                if (d.value == "NA") {
                    if (chart.selectedCountry && d.countryCode == chart.selectedCountry.countryCode) {
                        imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                    } else {
                        imageUrl = "icons/countries/not_selected/" + d.countryCode + ".png";
                    }
                } else {
                    if (chart.selectedCountry && d.countryCode == chart.selectedCountry.countryCode) {
                        imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                    } else {
                        imageUrl = "icons/countries/" + d.countryCode + ".png";
                    }
                }
                return imageUrl;
            });
        });

    }

    BubbleChart.prototype.initThema = function(chart) {

		var themas = new Array();
		indiData.forEach((function(_this) {
			themas[_this.id] = _this;
		}));

		var size = (themas.length*50)+((themas.length+1)*5);
		$("#icons").css("width",size+"px");
		
		// graphs one and two

		chart.themas = themas;
		chart.themas.forEach((function(_this, i) {

		var color = _this.color;
		var image = "icons/" + _this.icon;
		var imageSelected = image.replace(".png", "_selected.png");
		imageSelected = image;

		var btnId = "value_" + (i + 1);

		$("#icons ul").append("<li id='" + btnId + "' class='themaIcon "+currentClass+"'><a href=\"#\" title=\"" + _('indiBtnTooltip_' + _this.id) + "\" ><img class=\"icon\" width='40px' src='" + image + "'><img width='100px;' class=\"iconSelected\" style=\"display:none\"  src='" + imageSelected + "'></a>" +
			"</li>");
		}));

		$(".themaIcon").click(function() {

			var index = parseInt($(this).index());
			var thema = chart.themas[index];
			chart.selectedThema = thema;

			$(".themaIcon").css("background-color", "#4682b4");
			$(this).css("background-color", "white");

			if (isAndroid()) {
				$("#scaleWrapper").css({
					background: "-webkit-gradient(linear, left top, left bottom, from(" + thema.backgroundGradiantMin + "), to(" + thema.backgroundGradiantMax + "))"
				}).css({
					background: "-moz-linear-gradient(top, black, white)"
				});

			} else if (ieVersion() == 9) {
				$("#scaleWrapper").css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + thema.backgroundGradiantMin + ", endColorstr=" + thema.backgroundGradiantMax + ", gradientType='1')");
			} else {
				$("#scaleWrapper").css("background", "linear-gradient(to right, " + thema.backgroundGradiantMin + "," + thema.backgroundGradiantMax + ")");
			}

			var elemKey = this.id; // clicked button id used as column id to get relevant data values

			/* *************** Get chart data values **************** */

			chart.data.forEach((function(elem) {

				var code = elem.countryCode.toUpperCase();

				paramObj = {},
				paramObj.geo = code;

				var val = elem[elemKey];

				if (val == undefined || val == null) {

					elem[strClass] = "NA";

				} else {

					elem[strClass] = val;

				}

			}))


			/* **************************************************************************************************************************** */

			var currentUrl = window.location.href;
			currentUrl = currentUrl.split("?");
			currentUrl = String(currentUrl[0]);

			currentUrl = currentUrl.replace("index.html", "");
			currentUrl = currentUrl.replace("#", "");
			
			$("#indicatorName").html( _('mainTitle') +
			"<span id=\"settingDisplay\" title=\"" + _('gearButtonLabel') + "\"><img class=\"iconButton\" src=\"icons/gear.png\"></span>");

			$("#indicatorName").css("margin-left","0px");

			$("#infoDisplay").off();
			$("#settingDisplay").off();

			$("#infoDisplay").click(function() {
				$("#infoConteiner").toggle('slow', function() {
					if ($("#infoConteiner").css('display') == "block") {
						if ($("#countriesConteiner").css('display') == "block") {
							$("#countriesConteiner").hide();
						};
					}
				});
			});
			$("#settingDisplay").click(function() {
				$("#countriesConteiner").toggle('slow', function() {
					if ($("#infoConteiner").css('display') == "block") {
						if ($("#countriesConteiner").css('display') == "block") {
							$("#infoConteiner").hide();
						};
					}
				});

			});

			/* **************************************************************************************************************************** */

			toggle_indicator(strClass);

			var originalPositionNoData = 580;

			$("#noData").css("top", originalPositionNoData);

			var firstIndicator = $(".indicator")[0];

			$(firstIndicator).trigger('click');

			return false;
		});
	   
	    var intOriginalWidth = 180;
		var urlToTableChart  = window.location.href;

		var popoverContent  = "<ul id=\"shareConteiner\">";
		
			popoverContent += "<li style='position:relative;display:inlne;'><span class='tooltip-btm'>" + _('infoLabel') + "</span><a class=\"info\" href=\"#\"><i class=\"fa fa-info share-btn\"></i></a></li>";
			
			if (!simple){
			
				popoverContent += "<li style='position:relative;display:inlne;'><span class='tooltip-btm'>" + _('buttonEmbedTitle') + "</span><a class=\"embed\" href=\"#\"><i class=\"fa fa-code share-btn\"></i></a></li>";
				popoverContent += "<li style='position:relative;display:inlne;'><span class='tooltip-btm'>" + _('buttonTwitterTitle') + "</span><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter share-btn\"></i></a></li>";
				popoverContent += "<li style='position:relative;display:inlne;'><span class='tooltip-btm'>" + _('buttonFacebookTitle') + "</span><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook-f share-btn\"></i></a></li>";
			
			}
			
			popoverContent += "</ul>";
		
		$("#shareDisplay").append(popoverContent);
								
		var urlToShare = window.location.href;
		
		$("#shareConteiner .info").click(function() {
			
			var popupTitle   = _('infoLabel');
			var popupContent = _('indicatorInfo_' + chart.selectedThema.id);
			
			modalStyle["top"] = "0px";
			modalStyle["width"] = "40%";
			
			clickedIcon = $(this).find("i")[0].className;
			
			openPopup(modalStyle, popupTitle, popupContent);

			return false;
			
		});

		$("#shareConteiner .embed").click(function() {
			
			var popupContent = "";
			var popupTitle   = _('embedText');
			var chartEmbed   = "&lt;iframe src=\"" + location.href + "\" height=\"768\" width=\"1000\"&gt;&lt;/iframe&gt;";
			
			popupContent += "<p class='embed-code'>" + chartEmbed + "</p>";
			
			modalStyle["top"] = "0px";
			modalStyle["width"] = "40%";
			
			clickedIcon = $(this).find("i")[0].className;
			
			openPopup(modalStyle, popupTitle, popupContent);

			return false;
			
		});
		
		$('#shareConteiner .twitter').click(function () {
			
			var u = urlToTableChart.replace("#", "");
			var t = "#Eurostat: " +_('mainTitle');
			
			if (chart.isTablet == false) {

				window.open("https://twitter.com/intent/tweet?&original_referer="+encodeURIComponent(u)+"&ref_src=twsrc%5Etfw&text="+encodeURIComponent(t)+"&tw_p=tweetbutton&url="+encodeURIComponent(u), "sharer_twitter", "toolbar=0,status=0,width=626,height=436;");
				
			} else {
				
				window.location.href = "twitter:https://twitter.com/intent/tweet?&original_referer="+encodeURIComponent(u)+"&ref_src=twsrc%5Etfw&text="+encodeURIComponent(t)+"&tw_p=tweetbutton&url="+encodeURIComponent(u), "sharer_twitter", "toolbar=0,status=0,width=626,height=436;";

			}

			return false;
			
		});
		
		$("#shareConteiner .facebook").click(function() {

			u = urlToShare;
			t = _('mainTitle');

			if (chart.isTablet == false) {
				
				var popup = window.open("https://www.facebook.com/sharer/sharer.php?u=" + urlToShare, "sharer", "toolbar=0,status=0,width=626,height=436");
			
			
			} else {
				
				window.location.href = "facebook:" + "entrypoints/" + this.indCode + "_" + chart.lg + ".html?redirect=facebook";

			}

			return false;
			
		});
		
		$(".share-btn").on("mouseenter", function(event){
			
			var shareBtn = $(this).parent().parent();
			var tooltip  = $(shareBtn).find(".tooltip-btm");
			
            var wdt = $(tooltip).css("width");
				wdt = parseInt(wdt.replace("px", ""));
			
			var leftPos = wdt/2;
				leftPos += 2;
			
			$(tooltip).css("left", -leftPos + "px");
			
            tooltip.fadeIn(200);
				
        });
		
		$(".share-btn").on("mouseleave", function(){
			
            var shareBtn = $(this).parent().parent();
			var tooltip  = $(shareBtn).find(".tooltip-btm");
			
            tooltip.fadeOut(100);
				
        });
	   
    }

    BubbleChart.prototype.create_nodes = function() {

        this.data.forEach((function(_this) {

            return function(d, i) {

				var node;

				node = {

					id: parseInt(d.id) - 1,
					name: _(d.countryCode),
					countryCode : d.countryCode,
					value1 : d.value_1,
					value2 : d.value_2,
					value3 : d.value_3,
					value  : d.value_1

				};

				return _this.nodes.push(node);

            };

        })(this));

        return this.nodes.sort(function(a, b) {

            return b.value - a.value;

        });

    };

    BubbleChart.prototype.create_vis = function() {

        var that;
        d3.select("#vis").attr("style", "width:" + this.width + "px;height:" + this.height + "px");
        this.vis = d3.select("#vis").append("svg").attr("width", this.width).attr("height", this.height).attr("id", "svg_vis");
        if ($("#indicatorInfos").css("opacity") == "0") {
            $("#vis").css("opacity", 0);
        }
        this.circles = this.vis.selectAll("g").data(this.nodes, function(d) {
            return d.id;
        });
        that = this;
        var g = this.circles.enter().append("g").attr("transform", "translate(70,80)").attr("id", function(d) {
            return "bubble_" + d.name;
        });
        g.append("image").attr("width", 10)
            .attr("height", 10)
            .attr("x", 0)
            .attr("y", 0)
			.attr("cursor", "pointer")
            .attr("xlink:href", function(d, i) {
                return "icons/countries/" + d.countryCode + ".png";
            }).attr("id", function(d, i) {
                return "bubbleImage_" + d.countryCode;
            }).on("mouseenter", function(d, i) {
                return that.show_details(d, i, this);
			}).on("mousemove", function(d, i) {
                return that.show_details(d, i, this);
            }).on("click", function(d, i) {
                return that.countryClick(d, i, this);
            }).on("mouseleave", function(d, i) {
                return that.hide_details(d, i, this);
            })

        if (ieVersion() == 9) {
            $("#scaleWrapper").css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=#9AD6EF, endColorstr=#1377BC, gradientType='1')");
        } else {
            $("#scaleWrapper").css("background", "linear-gradient(to right, #9AD6EF , #1377BC)");
        }

        return this.circles.selectAll("circle").transition().duration(2000).attr("r", function(d) {
            return d.radius;
        })
        return this.circles.selectAll("circle").transition().duration(2000).attr("r", function(d) {
            return d.radius;
        })
    };

    BubbleChart.prototype.charge = function(d) {
        return -Math.pow(d.radius, 2.0) / 3; // PReviously 8
    };

    BubbleChart.prototype.start = function() {
        return this.force = d3.layout.force().nodes(this.nodes).size([this.width, this.height]);
    };

    BubbleChart.prototype.display_group_all = function() {
        this.force.gravity(this.layout_gravity).charge(this.charge).friction(0.4).on("tick", (function(_this) {
            return function(e) {
                return _this.circles.each(_this.move_towards_center(e.alpha)).attr("transform", function(d) {
                    if (d.value == "NA") {
                        return "translate(" + (d.x) + "," + d.y + ")";
                    } else {
						if (isNaN(d.x) == false) {

                        return "translate(" + (d.x) + "," + d.y + ")";
					}
                    }
                })
            };
        })(this));
        return this.force.start();

    };

    BubbleChart.prototype.move_towards_center = function(alpha) {
        return (function(_this) {
            return function(d) {
                if (d.value == "NA") {
                    var heightConteiner = parseInt($("#svg_vis").attr("height"));
                    heightConteiner -= 30;
                    d.x = d.x + (d.pos - d.x) * (_this.damper + 0.02);
                    return d.y = d.y + (heightConteiner - d.y) * (_this.damper + 0.02);
                } else if (d.value == "DD") {
                    d.x = d.x + (900 - d.x) * (_this.damper + 0.02);
                    return d.y = d.y + (-50 - d.y) * (_this.damper + 0.02);
                } else {
                    var heightConteiner = parseInt($("#svg_vis").attr("height"));
                    var diff = 535 - heightConteiner;
                    heightConteiner -= 350;
                    d.x = d.x + ((_this.xPosition_scale(d.value)) - d.x) * (_this.damper + 0.02);
                    return d.y = d.y + ((_this.center.y - chartYPadding) - d.y) * (_this.damper + 0.04) * alpha;
					/* Mettre le 80 Ã  10 */
                }

                return d.y = d.y + (_this.center.y - d.y) * (_this.damper + 0.02) * alpha;
            };
			
        })(this);
		
    };

    BubbleChart.prototype.initGraph = function() {

        return;

        var margin_left = 10;
        var margin_right = 10;

        var margin = {
                top: 20,
                right: margin_right,
                bottom: 10,
                left: margin_left
            },
            width = this.width - margin.left - margin.right,
            height = this.height - margin.top - margin.bottom;

        this.graphX = d3.scale.linear()
            .domain([0, 0])
            .range([0, width]);

        this.graphxAxis = d3.svg.axis()
            .scale(this.graphX)
            .tickSize(-this.height + 100, this.height - 100)
            .orient("top");

        var svg = this.vis;

        this.graphGx = svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(" + margin_left + ",30)")
            .call(this.graphxAxis);
    }

    BubbleChart.prototype.display_years = function() {

        var max2 = this.max_amount * 1.03;
        var ticks = new Array();

        ticks = calculateTicks(this.min_amount, this.max_amount, 8);
        spaceBetweenTicks = parseInt((this.width - this.bubbleRadiusMax) - this.bubbleRadiusMax) / ticks.length;

        var range = this.max_amount - max2;
        var scaleValue = parseInt(this.width) / range;
        var x = d3.scale.linear().domain([this.min_amount, max2]);

        ticks = x.ticks(10);
        xPosition = 0;

        var marginTop = "-20";

        $('.thick').hide();
        $('.label').hide();

        var hasFloat = false;
        var floatLength = 0;

        for (iterator = 0; iterator < ticks.length; iterator++) {
            var isFloat = false;
            if (isInt(ticks[iterator]) == false) {
                hasFloat = true;
            }
            var tempFloat = ticks[iterator].toString().replace("-", "");
            if (floatLength < tempFloat.length) {
                floatLength = tempFloat.length;
            }

        }
        if (hasFloat) {
            for (iterator = 0; iterator < ticks.length; iterator++) {
                if (isInt(ticks[iterator])) {
                    ticks[iterator] = ticks[iterator] + ".0";
                } else {
                    var val;
					val = ticks[iterator].toFixed(1);
                    ticks[iterator] = val;

                }

            }
        }

        for (iterator = 0; iterator < ticks.length; iterator++) {
            xPosition = this.xPosition_scale(ticks[iterator]);
            var value = ticks[iterator];
			
            value = value.toString();			
			value = getDecimalSeparator(value);

            if ((parseInt(xPosition)) < this.width) {
                if (ieVersion() == 9) {
                    marginTop = "-17px";
                }

                var e = $("<div class=\"label\" style=\"margin-left:0px;margin-top:" + parseInt(marginTop) + "px;\">" + value + "</div>");
                $('#scaleWrapper').append(e);
                e.animate({
                    marginLeft: parseInt((xPosition) - 27)
                }, 1000, function() {});

                var f = $("<div class=\"thick\" style=\"margin-left:0px;margin-top:" + (parseInt(marginTop) + parseInt(15)) + "px;\"></div>");
                $('#scaleWrapper').append(f);
                f.animate({
                    marginLeft: parseInt(xPosition)
                }, 1000, function() {});
            }
        }

    }
	BubbleChart.prototype.roundValue = function (value) {
		return Math.round(value * 10) / 10;

	}

    BubbleChart.prototype.countryClick = function(data, i, element) {

        $(".selectCountryES, .selectCountryMS").css("text-decoration", "none");
        $(".selectCountryES, .selectCountryMS").css("font-weight", "normal");

        var panelElem = $("."+data.countryCode+" a");
		panelElem.css("text-decoration", "underline");
        panelElem.css("font-weight", "bold");


		this.selectedCountry = this.dataCountries[data.countryCode];

		var chart = this;
        chart.circles.selectAll("image").attr("xlink:href", function(d) {
            var image = $("#bubbleImage_" + d.countryCode);
            var imageUrl;
            if (d.value == "NA") {
                if (chart.selectedCountry && d.countryCode == chart.selectedCountry.countryCode) {
                    imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                } else {
                    imageUrl = "icons/countries/not_selected/" + d.countryCode + ".png";
                }
            } else {
                if (chart.selectedCountry && d.countryCode == chart.selectedCountry.countryCode) {
                    imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                } else {
                    imageUrl = "icons/countries/" + d.countryCode + ".png";
                }
            }
            return imageUrl;
        });

	}

    BubbleChart.prototype.show_details = function(data, i, element) {
		var content;
		var unit = "";
		var cntryCode = data.countryCode.toUpperCase();
        var obj = this.dataCountries[data.countryCode];
        var value = this.roundValue(obj.nrg_100a).toFixed(1);
		
		cntryCode = (cntryCode === "EU27_2020") ? "EU" : cntryCode;
		
		value = getDecimalSeparator(value);

        content = "<div style=\"height:20px\"><span class=\"name\">" + _('bubbleTooltipCntryLabel') + ": </span><span class=\"value\" style=\"font-weight:bold\"> " + _(cntryCode) + "</div>";
        content += "<span class=\"name\">" + _('bubbleTooltipValLabel') + ": </span><span class=\"value\"> " + value + " "+unit+"</span><br/>";
        return this.tooltip.showTooltip(content, d3.event);
    };

    BubbleChart.prototype.hide_details = function(data, i, element) {
        return this.tooltip.hideTooltip();
    };
    return BubbleChart;

})();

root = typeof exports !== "undefined" && exports !== null ? exports : this;

$(function() {
	
	
	
});

function initChart() {
    var chart, render_vis;
    chart = null;
    render_vis = function(csv) {
        chart = new BubbleChart(csv);
        chart.start();
        chart.initGraph();
        chart.initMenu(chart);
        chart.initThema(chart);
        root.display_all();
        jQuery.data(document.body, "bubbleChart", chart);
		
		var defaultSelection = $(".themaIcon")[0];
        $(defaultSelection).trigger('click');
    };

    root.display_all = (function(_this) {
        return function() {
            return chart.display_group_all();
        };
    })(this);

    root.displaytpsIndicator = (function(_this) {

        return function(indicator_code) {
            var indicatorObj;
            var excludeEU = false;
            chart.emptyBubble = 0;

            chart.max_amount = d3.max(chart.data, function(d) {
                if (d.countryCode == "eu27_2020" && excludeEU) {
                    return null;
                }
                return parseFloat(d[indicator_code]);
            });
            chart.min_amount = d3.min(chart.data, function(d) {
                if (d.countryCode == "eu27_2020" && excludeEU) {
                    return null;
                }
                return parseFloat(d[indicator_code]);
            });
			var delta = chart.max_amount - chart.min_amount;
			chart.min_amount -= delta*bubbleDelta;
			chart.max_amount += delta*bubbleDelta;
            chart.radius_scale = d3.scale.pow().exponent(0.5).domain([chart.min_amount, chart.max_amount]).range([parseInt(chart.bubbleRadiusMin), parseInt(chart.bubbleRadiusMax)]);
            chart.countriesNoData = [];

            chart.nodes.forEach((function(_this) {
                if (chart.data[_this.id][indicator_code] != "NA") {

					var object = $.grep(chart.data, function(e){ return e.countryCode == _this.countryCode; });
					if (object.length) {

						var valueTmp = object[0][indicator_code];

					}

					_this.value = transformValueForTable(valueTmp, indicator_code);

                }

                _this.radius = chart.radius_scale(_this.value);
                _this.radius = chartBubbleRadius;
                if (_this.countryCode == "eu27_2020" && excludeEU && _this.value != "NA") {
                    var value = _this.value;

                    if (isInt(value) == false) {
                        value = transformValueForTable(value, indicator_code);
                    }
                    value = numberWithSpace(value);
                    if (value == "100.0" && (indicatorObj.indUnit.indexOf("%") > -1)) {
                        value = "100%";
                    }
                    _this.value = 0;
                    _this.radius = chart.bubbleRadiusMax;
                    _this.pos = -100;
                } else if (_this.countryCode == "eu27_2020" && excludeEU && _this.value == "NA") {
                    $("#euBubble").hide();
                }

                if (_this.value == "NA") {
                    _this.pos = 80 + ((chart.emptyBubble + 1) * 40);
                    var country = chart.dataCountries[_this.countryCode];

                    if (country) {
                        _this.idCountry = country.id;
                    }

                    chart.countriesNoData.push(_this);

                } else {
                    if (_this.countryCode == "eu27_2020" && excludeEU && _this.value != "NA") {
                        _this.value = "DD";
                        _this.pos = -100;
                    } else {
                        _this.pos = 0;
                    }
                }

            }));

            chart.countriesNoData.sort(compareCode);

            chart.emptyBubble = 0;
            chart.countriesNoData.forEach((function(_this) {
                _this.pos = 80 + ((chart.emptyBubble + 1) * 40);
                chart.emptyBubble += 1;
            }));

            if (parseInt(chart.emptyBubble) > 0) {
                $("#noData").show();
            } else {
                $("#noData").hide();
            }


            chart.xPosition_scale = d3.scale.pow().domain([(chart.min_amount), chart.max_amount]).range([chart.bubbleRadiusMax, chart.width - chart.bubbleRadiusMax]);
            chart.circles.selectAll("circle").transition().duration(1000).attr("fill", function(d) {
                if (d.value == "NA") {
                    return "#e1e1e1";
                } else if (d.countryCode == "eu27_2020") {
                    return chart.eu27Color;
                }
                return "#fff";
                return chart.colorForValue(d.value);
            }).attr("visibility", function(d) {
                return d.value == "NA" ? "visible" : "visible";
            }).attr("r", function(d) {
                return d.value == "NA" ? 20 : d.radius;
            });
			
            chart.circles.selectAll("text").transition().duration(1000).attr("visibility", function(d) {

            }).attr("fill", function(d) {
                if (d.value == "NA") {
                    return "#OOO";
                }
                return d.countryCode == "eu27_2020" ? "#FFF" : "#OOO";
            }).attr("style", function(d) {
                size = fontSizeForCircle(d.radius, d.name);
                return "cursor:default;font-family: Helvetica;font-size:" + size + "px;font-weight: bold;";
            });
            chart.circles.selectAll("image").transition().duration(1000).attr("width", function(d) {
                var value = d.value == "NA" ? 20 : d.radius;
                return value * 2;

            }).attr("height", function(d) {
                var value = d.value == "NA" ? 20 : d.radius;
                return value * 2;
            }).attr("x", function(d) {
                var value = d.value == "NA" ? 20 : d.radius;
                return -value;
            }).attr("y", function(d) {
                var value = d.value == "NA" ? 20 : d.radius;
                return -value;
            }).attr("opacity", function(d) {
                d.value == "NA" ? 1 : d.radius;
            }).attr("xlink:href", function(d) {
                var image = $("#bubbleImage_" + d.countryCode);
                var imageUrl;
                if (d.value == "NA") {
                    if (d.countryCode == chart.selectedCountry.countryCode) {
                        imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                    } else {
                        imageUrl = "icons/countries/not_selected/" + d.countryCode + ".png";
                    }

                } else {
					
					selectedLang = selectedLang == "en" ? "uk" : selectedLang;
					selectedLang = chart.selectedCountry.countryCode == "eu27_2020" ? selectedLang : chart.selectedCountry.countryCode;
					
                    if (d.countryCode == chart.selectedCountry.countryCode || d.countryCode == selectedLang) {
                        imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                    } else {
                        imageUrl = "icons/countries/" + d.countryCode + ".png";
                    }
                }
                return imageUrl;
            });

            chart.display_years();
            chart.force.start();
			
			$('#loader').css('display', 'none');
			$('#container').css('display', 'block');

        };

    })(this);

    root.toggle_indicator = (function(_this) {
        return function(indicator_code) {
            return root.displaytpsIndicator(indicator_code);
        };
    })(this);
    return d3.csv("data/data.csv", render_vis);
}
