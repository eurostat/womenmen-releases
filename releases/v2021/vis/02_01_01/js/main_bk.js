var x;
var barSize;
var hGsvg ;
var leg;
var pC;
var hG;
var display = ["Left", "Right"];
var boolShowRight = true;
var orderByDefault = "Left";
var orderBy = orderByDefault;
var freqData;
var arrayNoData = [];
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var mobileMode = $("#pieCentral").width() < 500;
var defaultAppId = "ageing";
var appId = getParameterValue('appId') ? getParameterValue('appId') : defaultAppId;
var indicator = window.appData[appId];


function initInfograph() {
    $("body").addClass(appId);
    colorLeft = indicator.sides.sides.Left.color;
    colorRight = indicator.sides.sides.Right.color;
    patterns = {patternRight : colorRight, patternLeft: colorLeft};

    $("#leftIcon").attr("src", indicator.sides.sides.Left.icon);
    $("#rigthIcon").attr("src", indicator.sides.sides.Right.icon);

    document.title = _(indicator.texts.titleDocumentKey);
    $("#title").html(_(indicator.texts.titleKey));
    
    $("#footerNoteDataNA").html(_(indicator.texts.footerNoteDataNA));
    $("#footerNote1").html(_(indicator.texts.footerNoteKey1));
    $("#footerNote2").html(_(indicator.texts.footerNoteKey2));
    if (indicator.nomenclatureLink) {
        $("nomenclatureLink").attr("href",indicator.nomenclatureLink);
        $("nomenclatureText").html( _("nomenclatureText"));      
    }
    //$("#footerNote3").html(_(indicator.texts.footerNoteKey3));   

    const link = _("footerSource");
    let areaLink = document.createElement('a'),
    areaLinkText = document.createTextNode(_("footerLinkToDataset"));

    let areaLinkLink = 'bookmarklink';

    areaLink.setAttribute('target', '_blank');
    areaLink.setAttribute('href', indicator.bookmarkLink);
    areaLink.setAttribute('class', 'infolink');
    areaLink.appendChild(areaLinkText);
        

    let linkContainer = document.getElementById('bookmark-link');
    linkContainer.innerHTML = link;
    linkContainer.appendChild(areaLink);

}

// String.defaultLocale = window.defaultLanguage;
String.locale = window.defaultLanguage;
String.toLocaleString(window.availableLanguages);
let lang = getParameterValue('lang');
if (lang !== '' && lang !== "") {
    for (var value in window.availableLanguages) {
        if ( value === lang) {
            String.locale = lang;
        }
    } 
}
let country = getParameterValue('country');
selectedCountry = country != "" ? country : selectedCountry;

function valueWithSeparator(value) {
	return "VA";
}

function xPositionForData(d) {
    xPosition = 0;
    var tmp =  d[0];
    return x(tmp) + xPosition;
}

function forcemouseoverbar(d) {
    updatePieAndLegend(d[0]);
}
function createdashboard(id, fData, opt) {
	$(".loader").hide();

    /****************  function to handle histogram.*********************/
    hG = {}, hGDim = {
        t: 100,
        r: 10,
        b: 20,
        l: 35
    };


    /**************** function to handle legend. ****************************/

    var st = fData.filter(function(s) {
        return s.State == selectedCountry;
    })[0];
    // calculate total frequency by segment for all state.
    tF = d3.keys(st.valuesRight).map(function(s) {
        return {
            type: s,
            valuesRight: st.valuesRight[s],
            valuesLeft: st.valuesLeft[s]
        }
    });

    var sF = processData(fData, defaultSide, currentLevel);

    tF = sortPieData(tF);
    pC = pieChart(tF); // create the pie-chart.	
    hG = histoGram(sF); // create the histogram.
    leg = legend(id, tF); // create the legend.	
    leg.updateDisplay();

}

function sortPieData (data) {

    data.reverse();
    /*
    var pieLow = data.filter(function(e) {return e.type == "ValueLow";}).shift();
    var pieMedium = data.filter(function(e) {return e.type == "ValueMedium";}).shift();;    
    var pieHigh = data.filter(function(e) {return e.type == "ValueHigh";}).shift();; 

    data = [pieHigh, pieMedium, pieLow];
*/
    return data;
}

function processData(arr, side, type) {
    //console.log(arr);
    var nbDataMS = 0;
    var dataProcessedGroupped = [];
    $(countriesGroupped).each(function (indexGrp) {
        var arrayCountries = this;
        var dataProcessed = [];
        $(this).each(function (indexCntr) {
            var index = arr.map(function(e) {
                return e.State;
            }).indexOf(arrayCountries[indexCntr]);
            if (index !== -1) {
                dataProcessed.push(arr[index]);
            }
        })
        dataProcessedGroupped = dataProcessedGroupped.concat(sortData(dataProcessed, side, type));

        if (indexGrp != countriesGroupped.length - 1 && this.length > 0) {
            dataProcessedGroupped.push({
                State: "spc"+indexGrp,
            });
        }
    });
    var arrResult = dataProcessedGroupped.map(function(v) {
        return v.valuesRight ? [v.State, v.valuesRight[type], v.valuesLeft[type]] : [v.State,0,0];
    })
    //console.log(arrResult);
    return arrResult;

}

function sortData(arr, side, type) {
    //console.log("side = "+side+"  type = "+type);
    //console.log(arr);
    type = type;
    arr.sort(function(a, b) {
        if (a["values"+side][type] > b["values"+side][type]) {
            return -1;
        } else if (a["values"+side][type] < b["values"+side][type]) {
            return 1;
        }
        return 0;
    });

    return arr;
}


function loadData() {
    JSONstat(rootWSUrl + indicator.urlParams,
        function() {
            var dataset = this;
            if (dataset.Dataset(0) == null) {
                alert(_("dataError"));

            } else {
                var params = indicator.params;
                var sides = indicator.sides;
                delete params[sides.paramName];

                freqData = [];
                arrayNoData = [];
                var time = indicator.period;
                countries.forEach((function(code) {

                    paramObj = {},
                    paramObj.geo = code;
                    paramObj.time = time;

                    Object.keys(params).forEach(function(paramName) {
                        var param = params[paramName];
                        if ( param.length == 1) {
                            paramObj[paramName] = param[0]; 
                        }

                    })
   
                    var hasNoValue = 0;
                    var objResult = {State:code, Label:_(code), valuesLeft:{}, valuesRight:{}};


                    ( Object.keys(sides.sides) ).forEach((function(sideKey) {
                        (Object.keys(indicator.levels.levels)).forEach((function(level, key) {
                            var side = sides.sides[sideKey];
                            //console.log("Side = "+sideKey);
                            var value = indicator.levels.levels[level];
                            paramObj[indicator.levels.paramName] = value.paramName;
                            paramObj[sides.paramName] = side.paramName;
                            var valueTmp = dataset.Dataset(0).Data(paramObj).value;
                            /*
                            console.log("Param Obj");
                            console.log(paramObj);
                            console.log("Value = "+valueTmp);
                            */
                            if (valueTmp == null || valueTmp == undefined) {
                                hasNoValue++;
                            }else {
                                //console.log("Level "+level);
                                objResult["values"+sideKey][level]=valueTmp;
                            }

                        }));
                    }));
                    //console.log(objResult);
                    if (hasNoValue == 0) {
                        freqData.push(objResult);
                    }else {
                        arrayNoData.push(code);
                        if (selectedCountry == code) {
                            if (window.parent !== window && window.parent.displayChartAlert) {
                                parent.displayChartAlert("noData", selectedCountry);
                              }
                            selectedCountry = "EU28";

                        }

                    }
                }))

                createdashboard('#dashboard1', freqData, 1);
                if (window.parent !== window && window.parent.disableCountries) { 
                    window.parent.disableCountries(arrayNoData)
                  }
                
            }
        })

}

$(document).ready(function() {
	initInfograph();
    $("#infoBtn").attr("title",_("infoBtn"));

	loadData();
	
	var hGsvg = d3.select("#barChart");
    drawSortBoxes(hGsvg,orderBy);

})
function updatePieAndLegend(country) {

    var st = freqData.filter(function(s) {
        return s.State == country;
    })[0],
    nD = d3.keys(st.valuesRight).map(function(s) {
        return {
            type: s,
            valuesRight: st.valuesRight[s],
            valuesLeft: st.valuesLeft[s]
        }
    });

    // call update functions of pie-chart and legend.  
    nD = sortPieData(nD);

    leg.updateValues(nD, _(country));
    leg.updateDisplay();
    pC.update(nD);

}

function updateBarChart(side, type) {
    fData = processData(freqData, side, type);
    hG.update(fData, side+type);
}

function updateDisplay (animated) {
    //console.log(display);
    /*
    var animationDuration = animated ? 400 : 0;
    var fullSize = barSize;
    
    showLeft = display.indexOf("Left") !== -1;
    showRight = display.indexOf("Right") !== -1;
    console.log("ShowLeft = "+showLeft);
    console.log("ShowRight = "+showRight);
    orderBy = display.length > 1 ? orderByDefault : display[0];

    widthRight = showLeft && showRight ? fullSize / 2 : (showRight ? fullSize - 1 : 0.1);
    widthLeft = showLeft && showRight ? fullSize / 2 : (showLeft ? fullSize - 1 : 0.1);
    //console.log("Width Right = "+widthRight+"  left = "+widthLeft);
    opacityRight = showRight ? 1 : 0;
    opacityLeft = showLeft ? 1 : 0;

    var bars = d3.selectAll(".bar");
    // transition the height and color of rectangles.
    bars.select(".left").transition().duration(animationDuration).attr("width", widthLeft + "px").attr("opacity", opacityLeft);
    bars.select(".right").transition().duration(animationDuration).attr("width", widthRight + "px").attr("x", function() {
        return showLeft == false ? parseFloat($(this).attr("sx")) : parseFloat($(this).attr("sx")) + fullSize / 2;
    }).attr("opacity", opacityRight);
*/
    updatePieAndLegend([selectedCountry]);
}

function changeSorting (side) {
	orderBy = side;	
	$(".clickable").each(function(index,elem) {
		if ($(elem).attr("style").indexOf("font-weight:bold") !== -1
		|| $(elem).attr("style").indexOf("font-weight: bold") !== -1) {
			var type = $(elem).attr("id");
            var sideType = side+type;
			fData = processData(freqData, side, type);
		    hG.update(fData, sideType);
			drawSortBoxes(hGsvg, orderBy);
		}
	})
	
}

$( window ).resize(function() {
    if (windowHeight == $(window).height() && windowWidth == $(window).width()) {
        return;
    }

        mobileMode = $("#pieCentral").width() < 500;

        if (freqData.length != 0) {
            $("#barChart,#pieRight,#pieLeft,#dashboard1").html("");
            createdashboard('#dashboard1', freqData, 1);
            var hGsvg = d3.select("#barChart");
            drawSortBoxes(hGsvg, orderBy);
       
        }
   
        windowHeight = $(window).height();
        windowWidth = $(window).width();
});

$("#nomenclatureLink").click(function() {
        var link = $(this).attr("href");
	
    let langUsed = '';
    if (String.locale === 'de') {
        langUsed = 'DE';
    } else if (String.locale === 'fr') {
        langUsed = 'FR';
    } else {
        langUsed = 'EN';
    }
    
    link += '&StrLanguageCode=' + langUsed;
	window.open(link);
	return false;
})

function hoverOnOffBar(bar, opacity) {

    d3.select(bar.parentNode).selectAll("rect").attr("fill", 
    function (d) {
        var strClass = $(this).attr("class");
        return barFillColor(strClass, d)
    }).style("opacity", opacity);
}

function injectPatterns () {

    defsConteiner = document.getElementById("defs");

    for (var sideKey in indicator.sides.sides) {
        var side = indicator.sides.sides[sideKey];
        var pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        pattern.setAttribute("patternUnits", "userSpaceOnUse");
        pattern.setAttribute("patternTransform", "rotate(30)");
        pattern.setAttribute("id", "pattern"+sideKey);
        pattern.setAttribute("x", "0");
        pattern.setAttribute("y", "0");
        pattern.setAttribute("width", "8");
        pattern.setAttribute("height", "8");
        pattern.setAttribute("fill", "none");

        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("width", "6");
        rect.setAttribute("height", "8");
        rect.setAttribute("style", "stroke:none;fill:"+side.color);

        pattern.appendChild(rect);

        defsConteiner.appendChild(pattern);
     }
}
