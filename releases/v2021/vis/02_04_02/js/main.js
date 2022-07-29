var timeline;
var dummyText;
var nodes;
var linkLayer;
var labelLayer;
var dotLayer;
var legendLayer;
var renderer;
var timeScale;
var highlighted = "";
var y;
var savedData;
var dataFile;
var hasDecimals;
var doneLoading = false;
var windowWidth = $(window).width();
var windowOrientation = window.orientation;
var innerHeight;

var sizeMin = 500;
var sizeMedium = 800;

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

setupScales();
var colorScale = d3.scale.category10();

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
function isIE(userAgent) {
  userAgent = userAgent || navigator.userAgent;
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
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

function opacityForGender () {
	var screenWidth = widthForScreen();
	//alert ("width = "+screenWidth);
	return "0.4";
	return (innerHeight < 320 || screenWidth < sizeMedium) ? "0.4" : "1";
	
}
function xPositionForGender (gender) {
	var screenWidth = widthForScreen();
	if (screenWidth < sizeMin) {
		return gender == "W" ? -300 : -110;
	}else if (screenWidth >= sizeMin && screenWidth < sizeMedium) {
		return gender == "W" ? -395 : 15;		
	}else {
		return gender == "W" ? -475 : 80;			
	}
}
function xPositionForGender2 (gender) {
	var screenWidth = widthForScreen();
	if (screenWidth < sizeMin) {
		return gender == "W" ? -190 : 8;
	}else if (screenWidth >= sizeMin && screenWidth < sizeMedium) {
		return gender == "W" ? -285 : 134;		
	}else {
		return gender == "W" ? -365 : 197;			
	}
}
function xPositionForBoxes (gender) {
	var screenWidth = widthForScreen();	
	if (screenWidth < sizeMin) {
		return gender == "W" ? 300 : 40;
	}else if (screenWidth >= sizeMin && screenWidth < sizeMedium) {
		return gender == "W" ? 330 : 70;		
	}else {
		return gender == "W" ? 360 : 100;			
	}
}

function xPositionForBoxesLinks (gender) {
	var screenWidth = widthForScreen();
	if (screenWidth < sizeMin) {
		return gender == "W" ? -50 : 0;
	}else if (screenWidth >= sizeMin && screenWidth < sizeMedium) {
		return gender == "W" ? -80 : 0;		
	}else {
		return gender == "W" ? -110 : 0;			
	}
}

function yPaddingForTextBoxes () {
	var screenWidth = widthForScreen();
	
	if (screenWidth < sizeMin) {
		return 7;
	}else if (screenWidth >= sizeMin && screenWidth < sizeMedium) {
		return 10;		
	}else {
		return 12;			
	}
}

function setupScales () {
	var screenWidth = widthForScreen();
	var height = (getUrlParameter("height") == null || getUrlParameter("height") == undefined || getUrlParameter("height")  == "" ) ? $(window).height()-220 : getUrlParameter("height");
	options = {
	    margin: {
	        left: screenWidth/2,
	        right: 20,
	        top: 20,
	        bottom: 20
	    },
	    initialWidth: screenWidth,
	    initialHeight: height   // returns width of browser viewport
	};
	

	/*
	alert(getUrlParameter("height"));
	alert($(window).height());
	alert(height);
	*/

	innerWidth = options.initialWidth - options.margin.left - options.margin.right;
	innerHeight = options.initialHeight - options.margin.top - options.margin.bottom;

}
var rtime;
var timeout = false;
var delta = 200;


$(window).on('resize', function(){
	    rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(resizeend, delta);
	    }
});
window.onorientationchange = function () {
	//alert('orientation changed');
  /*
    rtime = new Date();
    if (timeout === false) {
        timeout = true;*/
        setTimeout(resizeend, delta);
		//resize();
		//}
}
function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
	 //alert("Old width ="+windowWidth+"  new ="+screen.width);
	 //alert("Old orientation = "+window.orientation+" new Orientation = "+window.orientation);
      // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
     if ($(window).width() != windowWidth ) {
		 //alert("Resize");
	 	//alert("Old width ="+windowWidth+"  new ="+screen.width);		 
         // Update the window width for next time
         windowWidth = $(window).width();
		 windowOrientation = window.orientation;

		 resize();
         // Do stuff here

     }
	   
   }
               
}
/*
$(window).on('resize', function(){
 	resize();
	
})*/
function resize () {
	setupScales();
	colorScale = d3.scale.category10();
	$("#timeline").html("");
	buildWithData(savedData);
	
}


function splitAndArrangeNodes(nodes) {
    var nodesM = nodes.filter(function(d) {
        return d.data.gender == "F"
    });
    var nodesF = nodes.filter(function(d) {
        return d.data.gender == "M"
    });

    var forceM = new labella.Force({
            minPos: -10
        })
        .nodes(nodesM)
        .compute();

    var forceF = new labella.Force({
            minPos: -10
        })
        .nodes(nodesF)
        .compute();

    var arrayAll = $.merge(forceM.nodes(), forceF.nodes());

    return arrayAll;

}


function color(d, i) {
	if (d.data.id == averageId) {
		return colorAverage;
	}
	strColor = d.data.gender == "M" ? colorMen : colorWomen;
	if (highlighted == "") {
		return strColor;
	}
	return (d.data.id == highlighted) ? strColor : colorNotHighlighted;
}

function labelText(d) {
    return d.label;
}
function initNodesAndScales (data) {
    var min = d3.extent(data, function(d) {
        return d.value;
    })[1] /* * 1*/ ;
    var max = d3.extent(data, function(d) {
        return d.value;
    })[0] /* * 0.7*/ ;
    timeScale = d3.scale.linear()
        .domain([min, max])
        .range([0, innerHeight])
        .nice();
    dummyText = timeline.append('text');

    nodes = data.map(function(item) {
        var bbox = dummyText.text(labelText(item))[0][0].getBBox();
        item.h = bbox.height;
        item.w = bbox.width;
        return new labella.Node(timeScale(item.value), item.h + 4, item);
    });
	dummyText.remove();
	
	return nodes;
}
function buildTooltips(nodes) {

    $(".legend").remove();
    var legends = legendLayer.selectAll()
        .data(nodes)
        .enter()
        .append("g")
        .attr('transform', function(d) {
            var x = d.data.gender == "M" ? 40 : -90;
            var y = d.getRoot().idealPos + 5;
            y = (d.y - d.dy / 2) + 14;
            return 'translate(' + (x) + ',' + (y) + ')';
        })
        .attr("id", function(d) {
            return "legend" + d.data.id + d.data.gender;
        }).attr("style", function (d) {
			//return "display:none";
        	return d.data.id == highlighted ? "" : "display:none";
        })
        .attr("class", "legend");

    legends.append('rect')
        .attr("fill", "white")
        .attr("width", "40")
        .attr("heigth", "20")
        .attr('width', function(d) {
            return 50;
        })
        .attr('height', function(d) {
            return 20;
        })
        .attr('rx', 2)
        .attr('ry', 2)
        .attr('y', -14)
        .attr("style", function(d) {return "stroke:"+color(d)+";stroke-width:1px"})

    legends.append('text')
        .attr('x', 3)
        .text(function(d) {
            return formatValue(d.data.value) + "€";

        }).attr('width', function(d) {
            return 50;
        })
        .attr("fill", "#3A3A3A");
}

function buildAxisTicks(timeScale) {
	var nbTicks = innerHeight < 320 ? 6 : 18;
    $(".axis").fadeOut("slow", function() {
        $(this).remove()
    });
	var hasFloat = false;
    var yAxis = d3.svg.axis()
        .scale(timeScale)
        .orient("left")
        .ticks(nbTicks)
        .tickFormat(function(d) {
			if (hasFloat && isInt(d)) {
				return formatLegendValue(d)+".00";
			}else if (hasFloat && isInt(d) == false) {
				return formatLegendValue(d)+"0";
			}else {
            	return formatLegendValue(d);
			}
        });

	arrayTicks = yAxis.scale().ticks(nbTicks);
	for (i=0; i< arrayTicks.length; i++) {
		var item = arrayTicks[i];
		if ((isInt(item)==false) && hasFloat == false) {
			hasFloat = true;
		}
	}
	//console.log("Has float = "+hasFloat);
	//console.log("all the points",arrayTicks );	
		
    var maxLegend = timeScale.ticks(nbTicks)[timeScale.ticks(nbTicks).length - 1];
    var padding = hasFloat ? 30 : 17;
    timeline.append("g")
        .attr("class", "y axis")
        .attr('transform', 'translate(' + (padding) + ',0)')
        .call(yAxis);

}

function buildDots(nodes, duration) {
    $("circle.dot").remove();
    dotLayer.selectAll('circle.dot')
        .data(nodes)
        .enter().append('circle')
        .attr('class', function(d) {
            return "dot " + d.data.gender;
        })
        .attr('fill', color)
        .attr('r', 0)
        .attr('cx', function(d) {
            return d.data.gender == "M" ? 30 : -30;
        })
        .attr('cy', function(d) {
            return d.getRoot().idealPos;
        })
        .attr("cursor", "pointer")
        .attr("id", function(d) {
            return "circle" + d.data.gender + d.data.id;
        }).on("mouseover", function(d, i) {
            var id = "#legend" + d.data.id + d.data.gender;
            $(".legend").not(".selected").hide();

            $(id).show();
        }).on("mouseout", function(d, i) {
            $(".legend").not(".selected").hide();
        })
        .transition().duration(500).delay(800)
        .attr("r", 3);
}

function buildLinks() {
    $("path.link").remove();
    linkLayer.selectAll('path.link')
        .data(nodes)
        .enter().append('path')
        .attr("class", function(d) {
            return "link " + d.data.id + " " + d.data.gender
        })
        .attr('d', function(d) {
            return d.data.gender == "M" ? renderer.M.generatePath(d) : renderer.F.generatePath(d);
        })
        .style('stroke',color)
        .style('stroke-width', 2)
        .style('opacity', 0.6)
        .style('fill', 'none')
        .on("mouseover", function(d, i) {
            var id = "#legend" + d.data.id + d.data.gender;
            $(".legend").not(".selected").hide();

            $(id).show();
        }).on("mouseout", function(d, i) {
            $(".legend").not(".selected").delay(2000).hide(0);

        });
    $("path").each(function() {
        var strClass = "." + $(this).attr("class").split(" ").join(".");;

        var path = document.querySelector(strClass);
        var length = path.getTotalLength();
        // Clear any previous transition
        path.style.transition = path.style.WebkitTransition =
            'none';
        // Set up the starting positions
        path.style.strokeDasharray = length + ' ' + length;
        /* Important  Set -length or length depending the orientation you want */
        path.style.strokeDashoffset = -length;
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        path.getBoundingClientRect();
        // Define our transition
        path.style.transition = path.style.WebkitTransition =
            'stroke-dashoffset 1s ease-in-out';
        // Go!
        path.style.strokeDashoffset = '0';
    });

}

function initSelect(country) {
	
    countries.forEach((function(code) {
        var selected = country == code ? "selected=\"selected\"" : "";
        $("#countries").append("<option value=\"" + code + "\" " + selected + " data-thumbnail=\"img/flags/" + code.toUpperCase() + ".png\" >" + _(code) + "</option>");
    }));
    $('#countries').selectpicker({
        caretIcon: 'glyphicon glyphicon-menu-down'
    });
	
    $("#countries").change(function() {
        loadData($(this).val());
    });
	

}

function getRenderer(nodes, gap, direction, gender) {
    var renderer = new labella.Renderer({
        layerGap: gap,
        nodeHeight: nodes[0].width,
        direction: direction
    });

    renderer.layout(nodes.filter(function(d) {
        return d.data.gender == gender
    }));
    return renderer;
}

function buildWithData(data) {
	var heightTmp = options.initialHeight*1.2;
	//heightTmp = options.initialHeight*0.8;
	//alert(heightTmp);
    timeline = d3.select('#timeline')
        .append('svg')
        .attr("id", "svg")
        .attr('width', options.initialWidth)
        .attr('height', heightTmp)
        .append('g')
        .attr('transform', 'translate(' + (options.margin.left) + ',' + (options.margin.top + 30) + ')')
        .attr('class', "#main");
    // compute labels dimension
    //dummyText = timeline.append('text');
    var g = d3.select('#main');
	nodes = initNodesAndScales(data);


    // ---------------------------------------------------
    // Draw dots on the timeline
    // ---------------------------------------------------

    timeline.append('line')
        .classed('timeline', true)
        .attr('y1', -40)
        .attr('y2', innerHeight + 20);

    linkLayer = timeline.append('g').attr("class", "links");
    labelLayer = timeline.append('g').attr("class", "labels");
    legendLayer = timeline.append('g').attr("class", "legends");
    dotLayer = timeline.append('g').attr("class", "circles");

    timeline.append("text")
        .text("EUR")
        .attr("style", "font-weight:bold;font-size:10px")
        .attr("x", -15)
        .attr("y", -20);

    var imageWidth = 400;
    var imageHeight = 200;
    var yPos = -40;
	
    timeline.append("image").
		attr("width", 180)
       	.attr("height", 203)
//		.attr("opacity", function () {return opacityForGender()})
        .attr("y", yPos)
        .attr("x",  function () {return xPositionForGender2("W")})
        .attr("xlink:href", "images/First-employment_W.png")
		.attr("class","imgGender")
		.moveToBack();

    timeline
		.append("image")
		.attr("width", 166)
        .attr("height", 203)
//		.attr("opacity", function () {return opacityForGender()})
        .attr("y", yPos)
        .attr("x",  function () {return xPositionForGender2("M")})
        .attr("xlink:href", "images/First-employment_M.png")
		.attr("class","imgGender")
		.moveToBack();

    buildAxisTicks(timeScale);

    //---------------------------------------------------
    // Labella has utility to help rendering
    //---------------------------------------------------
    renderer = {
        F: getRenderer(nodes, xPositionForBoxes("W"), 'left', 'F'),
        M: getRenderer(nodes, xPositionForBoxes("M"), 'right', 'M')
    };


    function draw(nodes) {

        // Add x,y,dx,dy to node
        renderer.F.layout(nodes.filter(function(d) {
            return d.data.gender == "F"
        }));
        renderer.M.layout(nodes.filter(function(d) {
            return d.data.gender == "M"
        }));

        // Draw label rectangles
        var sEnter = labelLayer.selectAll('rect.flag')
            .data(nodes)
            .enter().append('g')
            .attr("class", function(d) {
                var strClass = d.data.gender + " " + d.data.id;
                if (d.data.value == null) {
                    strClass = strClass + " boxHidden";
                }
                return strClass;
            })
            .attr('transform', function(d) {
                if (d.data.gender == "F") {
                    var x = xPositionForBoxesLinks("W") - d.data.w;
                } else {
                    var x = d.x - xPositionForBoxesLinks("M");
                }
				yOffset = d.y > yOffset ? d.y : yOffset;
                return 'translate(' + (x) + ',' + (d.y - d.dy / 2) + ')';
            });
        sEnter
            .append('rect')
            .classed('flag', true)
            .attr('width', function(d) {
                return d.data.w + 9;
            })
            .attr('height', function(d) {
                return d.dy;
            })
            .attr('rx', 2)
            .attr('ry', 2)
            .style('fill', color);

        sEnter.append('text')
            .attr('x', 4)
            .attr('y', function () {return yPaddingForTextBoxes()})
            .style('fill', '#fff')
            .text(function(d) {
                return labelText(d.data);
            })
            .on("click", function(d, i) {
                if (debug == 1) {
                    return;
                }
                var parent = $(this).parent("g");
                var elem = $("rect", parent)
                if (elem.attr("class").indexOf("highligted") !== -1) {
                    $(".F .flag,.dot.F").css("fill", colorWomen);
                    $(".M .flag,.dot.M").css("fill", colorMen);
 				   	$(".TOTAL .flag,.dot.TOTAL").css("fill", colorAverage);

                    $(".link.F").css("stroke", colorWomen);
                    $(".link.M").css("stroke", colorMen);
					$(".link.TOTAL").css("stroke", colorAverage);
					
                    $(".highligted").attr("class", "flag");

                    $(".legend").hide();
                    $(".legend").attr("class", "legend");

					highlighted = "";
                } else {
					var colorM = d.data.id == "TOTAL" ? colorAverage :colorMen;
					var colorW = d.data.id == "TOTAL" ? colorAverage :colorWomen;
					
					
                    $(".flag,.dot").css("fill", colorNotHighlighted);
                    $(".link").css("stroke", colorNotHighlighted);

                    $("#circleF" + d.data.id).css("fill", colorW);
                    $("#circleM" + d.data.id).css("fill", colorM);

                    $(".F." + d.data.id + ".link").css("stroke", colorW);
                    $(".M." + d.data.id + ".link").css("stroke", colorM);

                    $(".F." + d.data.id + " .flag").css("fill", colorW);
                    $(".M." + d.data.id + " .flag").css("fill", colorM);

                    $(".F." + d.data.id + " .flag").attr("class", "flag highligted");
                    $(".M." + d.data.id + " .flag").attr("class", "flag highligted");

                    $(".legend").hide();
                    $(".legend").attr("class", "legend");

                    var ids = "#legend" + d.data.id + "F" + "," + "#legend" + d.data.id + "M";
                    $(ids).attr("class", "legend selected");
                    //$(ids).show();
					if ($("body").width() > sizeMin) {
						$(ids).show();
					}
					
					highlighted = d.data.id;
                }
            }).on("mouseover", function(d, i) {
                var id = "#legend" + d.data.id + d.data.gender;
                $(".legend").not(".selected").hide();
				if ($("body").width() > sizeMin) {
					$(id).show();
				}
                
            }).on("mouseout", function(d, i) {
                $(".legend").not(".selected").hide();

            })
            .attr("cursor", "pointer");
        // Draw path from point on the timeline to the label rectangle
        $(".boxHidden").hide();

        buildTooltips(nodes);
        buildDots(nodes, 0);
        buildLinks();
    }

    //---------------------------------------------------
    // Use labella.Force to place the labels
    //---------------------------------------------------
    var arrayAll = splitAndArrangeNodes(nodes);
    draw(arrayAll);
}

function updateData(data) {
	yOffset = 0;
	nodes = initNodesAndScales(data);
	
    nodes = splitAndArrangeNodes(nodes);
    renderer = {
        F: getRenderer(nodes, xPositionForBoxes("W"), 'left', 'F'),
        M: getRenderer(nodes, xPositionForBoxes("M"), 'right', 'M')
    };

    var duration = 600;
    d3.select('#svg').selectAll("g.M,g.F")
        .data(nodes)
        .transition()
        .duration(function(d){
			var wasHidden = $(this).attr("class").indexOf("boxHidden") !== -1;
			if (wasHidden) {return 0};
            var gender = $(this).attr("class").split(" ")[0];
            var id = $(this).attr("class").replace(gender + " ", "").replace(" boxHidden", "");
            var result = $.grep(nodes, function(e) {
                return e.data.id == id && e.data.gender == gender;
            });

            if (result.length == 0) {
                return 0;
            }
			var d = result[0];
            if (d != undefined) {
				return 600;
            }
			return 0;
		}) //1000
        .attr('transform', function() {
            var gender = $(this).attr("class").split(" ")[0];
            var xPos = gender == "M" ? 60 : -360;
            var id = $(this).attr("class").replace(gender + " ", "").replace(" boxHidden", "");
            var result = $.grep(nodes, function(e) {
                return e.data.id == id && e.data.gender == gender;
            });

            if (result.length == 0) {
                $(this).hide();
                return 'translate(' + (xPos) + ',' + (0) + ')';
            }
            var d = result[0];
            if (d != undefined) {
                $(this).show();
                if (d.data.gender == "F") {
                    var xPos = xPositionForBoxesLinks("W") - d.data.w;
                } else {
                    var xPos = d.x - xPositionForBoxesLinks("M");
                }
				yOffset = d.y > yOffset ? d.y : yOffset;
                return 'translate(' + (xPos) + ',' + (d.y - d.dy / 2) + ')';
            }
            return $(this).attr('translate');
            return 'translate(' + (xPos) + ',' + (0) + ')';
        }).attr("style", function(d) {
            var id = $(this).attr("class").split(" ")[1];
            var gender = $(this).attr("class").split(" ")[0]
            var result = $.grep(nodes, function(e) {
                return e.data.id == id && e.data.gender == gender;
            });
            d = result[0];
            if (d.data.value == null) {
                return "display:none";
            } else {
                return "display:block";
            }
            return style;
        }).each("end", checkOverlapping);

    $("g.labels g").each(function() {
        $(this).attr("class", $(this).attr("class").replace(" boxHidden", ""));
    });

    buildLinks();
    buildAxisTicks(timeScale);
    buildTooltips(nodes);
    buildDots(nodes, duration);
}

function loadDataWS(code) {
    var code = code.toUpperCase();
    JSONstat(rootUrl + params + types + "&geo="+code,
        function() {
            var dataset = this;
            if (dataset.Dataset(0) == null) {
                alert('Ooooppps something went wrong !');

            } else {
                var data = [];
                var ids = dataset.Dataset(0).Dimension("isco08").id;
                var nbUndefined = 0;
                for (var i = 0; i < (ids).length; i++) {
                    ["M", "F"].forEach(function(gender) {
						
                        //var label1 = eval("translation_isco08_"+ids[i]) ;
						var label = dataset.Dataset(0).Dimension("isco08").Category(i).label;
						label = _("isco08_"+ids[i]) ;
						//label = "Average";
                        paramObj = {},
                            paramObj.geo = code;
                        paramObj.time = "2014";
                        paramObj.isco08 = ids[i];
                        paramObj.sex = gender;

                        var value = dataset.Dataset(0).Data(paramObj).value;
                        /* Check that we have data */
                        if (value == undefined || value == null) {
                            nbUndefined++;
                        }
                        data.push({
                            value: value,
                            gender: gender,
                            label: label,
                            id: ids[i]
                        });
                    })
                }
                if (data.length == nbUndefined) {
                    alert(_("dataNotAvailable"));
                } else {
					savedData = data;
                    if ($("#timeline svg").length > 0) {
                        updateData(data);
                    } else {
                        buildWithData(data);
                    }
                }
            }
        })
}
function loadDataFile(code) {
    d3.csv(csvFile, function(data) {
		dataFile = {};
        data.forEach((function(_this) {
            //datas.push({ _this.countryCode :_this});
			var code = _this.countryCode;
			//console.log(_this.countryCode);
			dataFile[code] = _this;
        }));
		loadDataFromFile(code);
	    });
	
	
}


function loadData (code) {
	if (dataFile == null) {
		loadDataFile(code);
	}else {
		loadDataFromFile(code);
	}
	
}

function loadDataFromFile(code) {
    var data = [];
    var nbUndefined = 0;
	for (var i = 0; i < (typesSupported).length; i++) {
		var type = typesSupported[i];
		//console.log("*** Type = "+type);

            ["M", "F"].forEach(function(gender) {

				label = _("isco08_"+type) ;

				var key = type+"_"+gender;
				var dataType = dataFile[code];
                var value = dataType[key];
				value = parseFloat(value.replace(",","."));
				//console.log("Value = "+value);
                /* Check that we have data */
                if (value == undefined || value == null) {
                    nbUndefined++;
                }
                data.push({
                    value: value,
                    gender: gender,
                    label: label,
                    id: type
                });
            })
        }
        if (data.length == nbUndefined) {
            alert(_("dataNotAvailable"));
        } else {
			savedData = data;
            if ($("#timeline svg").length > 0) {
                updateData(data);
            } else {
                buildWithData(data);
            }
       	$(".loader").hide();
		
	}
	
}
function showInfo() {
    $('#infoConteiner').css('display', 'block').css('width', 400).css('height', 180);
    $('#infoConteiner').css('display', 'block').css('left', (innerWidth - 290) / 2);
    $('#dashboard').css('opacity', 0.1);
    $('#d3-tipID').css('display', 'none');
    $('#d3-tipIDS').css('display', 'none');
}

function showCode() {
    $('#screenEmbed').css('display', 'block').css('width', innerWidth).css('height', innerHeight);
    $('#codeEmbed').css('display', 'block').css('left', (innerWidth - 290) / 2);
    $('#dashboard').css('opacity', 0.1);
    $('#d3-tipID').css('display', 'none');
    $('#d3-tipIDS').css('display', 'none');
}

function hideCode() {
    $('#screenEmbed').css('display', 'none').css('width', 0).css('height', 0);
    $('#codeEmbed,#infoConteiner').css('display', 'none');
    $('#dashboard').css('opacity', 1);
    $('#d3-tipID').css('display', 'block');
    $('#d3-tipIDS').css('display', 'block');
}
$(document).ready(function() {
    if (getParameterValue('simple') == "true") {
        $("#social-container, .logo").hide();
    }
	fillCountries();
    $('#countries').selectpicker({
        caretIcon: 'glyphicon glyphicon-menu-down'
    });
	$("#twtBtn").click(function() {
		window.open(url_share_twitter,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		return false;
	});
    $("#bookmark-container").show();
    $("#bookmark-link span").html(_("linkSource"));
    $("#bookmark-link a").html(_("linkText"));
    $("#bookmark-link a").attr("href",linkDatabrowser);
	/* Loading the translations */
	document.title = _("document.title");
	localizeHTMLTag("footnote1");
	localizeHTMLTag("mainTitle");
	localizeHTMLTag("footnote1");
	localizeHTMLTag("furtherDetail");
	
	$("#linkFurtherDetail").attr("title",_("linkFurtherDetail"));
	$("#countries").attr("title",_("countriesTitle"));
	
    $("#countries").hide();
	var country = getUrlParameter('country') != null ? getUrlParameter('country') : window.countrySelected;
	
    loadData(country);
	
	setTimeout(checkOverlapping, 800);
   
})
function updateCountry (code) {
	$("#footnote1").css("display", function() {
		return code == "EU28" ? "block" : "none";
	})
	loadData(code);
}
function checkOverlapping () {
	  var elems = $(".imgGender").collision(".flag");
	  var opacity = elems.length > 0 ? 0.4 : 1;
	  $( ".imgGender" ).fadeTo( "fast" , opacity);
}

$("#linkFurtherDetail").click(function() {
	var link = furtherDetailLink;
	
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