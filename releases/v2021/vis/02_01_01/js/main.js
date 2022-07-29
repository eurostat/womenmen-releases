var x;
var barSize;
var hGsvg ;
var leg;
var pC;
var hG;
var display = [];
var boolShowRight = true;
var orderBy = defaultSideOrder;
var freqData;
var arrayNoData = [];
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var chartHeight = 300;
var mobileMode = $("#mainConteiner").width() < 500;
var defaultAppId = "womenmen";
var appId = getParameterValue('appId') ? getParameterValue('appId') : defaultAppId;
var indicator = Array.isArray(window.appData[appId]) ? window.appData[appId][0] : window.appData[appId];

console.log(indicator);
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

function addNSILogo () {
	if (_("imgYourLogo").length > 0) { // In case of NSI Integration
   		var img = _("imgYourLogo");
   		var height = $("#estatLogo").height() *0.6; // * 0.6 a ratio apply because the eurostat logo (at least my version) has space up and down.
   	 	$("#nsiConteiner").html(img);
   	 	$("#nsiConteiner img").css("height", height);
	}else {
    	$("#logo-desktop").attr("href", "");   
	}
}

$(document).ready(function() {
    if (getParameterValue('simple') == "true") {
        $("#social-container, .logo, #logo-desktop, .toolbar").hide();
    }
    buildIndicatorList();
    initInfograph();
    addNSILogo()
    $("#infoBtn").attr("title",_("infoBtn"));

	loadData();

})

function buildIndicatorList () {
    $('#indSelect').unbind("change");
    $('#indSelect').empty();
    if (Array.isArray(window.appData[appId])) {
        var array = Array.isArray(window.appData[appId]);
        var selectTag = document.getElementById('indSelect');
        for (i = 0; i < window.appData[appId].length; i++) {
            var indicatorTmp = window.appData[appId][i]
            var opt = document.createElement('option');
            opt.setAttribute('value', i );
            opt.setAttribute('data-content',_(indicatorTmp.texts.listKey) );
            selectTag.appendChild(opt);
        }

        $("#indSelectConteiner").show();
        $('#indSelect').selectpicker();
        $("#indSelect").on("change", function() {
            var selectedIndex = $(this).val();
            indicator = window.appData[appId][selectedIndex];

            initInfograph();
            loadData();

        })
    }
}

$( window ).resize(function() {
    if (windowHeight == $(window).height() && windowWidth == $(window).width()) {
        return;
    }

        mobileMode = $("#mainConteiner").width() < 500;

        if (freqData.length != 0) {
            $("#barChart,#pieRight,#pieLeft,#dashboard1").html("");
            createdashboard('#dashboard1', freqData, 1);
            if (indicator.components.indexOf("sorting")  !== -1) {
                var hGsvg = d3.select("#barChart");
                drawSortBoxes(hGsvg);
            };
       
        }
   
        windowHeight = $(window).height();
        windowWidth = $(window).width();
});

function initInfograph() {
    display = [];

    if (indicator.components.indexOf("pie") === -1
    && indicator.components.indexOf("legend") === -1) {
        chartHeight = windowHeight*0.8;
        $("#pies_legend, #titleConteiner").hide();
        $("#barChartTitles").css("margin-top", "-20px");
    }

    var showRight = indicator.sides.sides.Right;
    var showLeft = indicator.sides.sides.Left;
    
    if (indicator.sides.sides.Left) {
        display.push("Left")
    }
    if (indicator.sides.sides.Right) {
        display.push("Right")
    }
    
    defaultSideOrder = (indicator.sides.sides.Left && ! indicator.sides.sides.Right) ? "Left" : (! indicator.sides.sides.Left &&  indicator.sides.sides.Right) ? "Right" : defaultSideOrder;

    $("body").addClass(indicator.publicationId);
    colorLeft = indicator.sides.sides.Left ? indicator.sides.sides.Left.color : "";
    colorRight = indicator.sides.sides.Right ? indicator.sides.sides.Right.color : "";
    patterns = {patternRight : colorRight, patternLeft: colorLeft};

    $("#leftIcon").attr("src", indicator.sides.sides.Left ? indicator.sides.sides.Left.icon : "");
    $("#rigthIcon").attr("src", indicator.sides.sides.Right ? indicator.sides.sides.Right.icon : "");

    document.title = _(indicator.texts.titleDocumentKey);
    $("#title").html(_(indicator.texts.titleKey));
    
    $("#footerNoteDataNA").html(_(indicator.texts.footerNoteDataNA));
    $("#footerNote1").html(_(indicator.texts.footerNoteKey1));
    $("#footerNote2").html(_(indicator.texts.footerNoteKey2));
    if (indicator.nomenclatureLink) {
        $("#nomenclatureLink").attr("href",indicator.nomenclatureLink);
        $("#nomenclatureText").html( _("nomenclatureText"));      
    }
    $("#footerNote3").html(_(indicator.texts.footerNoteKey3));   

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


function createdashboard(id, fData, opt) {
    $('#barChart').empty();
    /****************  function to handle histogram.*********************/
    hG = {}, hGDim = {
        t: 100,
        r: 10,
        b: 20,
        l: 35
    };


    /**************** function to handle legend. ****************************/
//console.log(fData);
//console.log(selectedCountry);
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
    tF = sortPieData(tF);
    if (indicator.components.indexOf("pie") !== -1) {
        pC = pieChart(tF); // create the pie-chart.	
    }
    if (indicator.components.indexOf("legend") !== -1) {
        leg = legend(id, tF); // create the legend.	
    }


    var sF = processData(fData, defaultSideOrder, currentLevel);
    hG = histoGram(sF); // create the histogram.

    if (indicator.components.indexOf("legend") !== -1) {
        leg.updateDisplay();
    }else if (Object.keys(indicator.levels.levels).length === 1) {
        var levels = indicator.levels.levels;
        currentLevel = Object.keys(indicator.levels.levels)[0];
        $("#secondTitle").html(_(levels[currentLevel].textLongKey));
        $("#secondTitleLegend").html(_(indicator.texts.subtitleUnitKey));
    }
    if (indicator.components.indexOf("sorting")  !== -1) {
        var hGsvg = d3.select("#barChart");
        drawSortBoxes(hGsvg);
    }

}


function loadData() {
    $(".loader").show();
    var url = rootWSUrl + indicator.urlParams + roorWSUrlSettings ;
    JSONstat(url,
        function() {
            $(".loader").hide();
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

function sortPieData (data) {
    data.reverse();
    return data;
}

function processData(arr, side, type) {
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
        return v.valuesRight ? [v.State, v.valuesLeft[type], v.valuesRight[type]] : [v.State,0,0];
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

function updateDisplay (animated) {
    updatePieAndLegend([selectedCountry]);
}

function updatePieAndLegend(country) {  
    if (indicator.components.indexOf("pie") === -1) {
        //updateBarChart();
        return;
    }
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

function updateBarChart() {
    /*
    console.log("Update Bar Chart 1 : Side "+orderBy+"  level = "+type);
    console.log(display);
    orderBy = display.length > 1 ? defaultSide : display[0];
    console.log("Update Bar Chart 2 : Side "+orderBy+"  level = "+type);
    */
    fData = processData(freqData, orderBy, currentLevel);
    hG.update(fData, orderBy+currentLevel);
}


function changeSorting (side) {
	orderBy = side;	

	fData = processData(freqData, side, currentLevel);
	hG.update(fData, side+currentLevel);
	drawSortBoxes(hGsvg);

	
}


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
