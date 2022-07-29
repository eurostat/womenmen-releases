function histoGram(fD) {
    width = $("#barChart").width() - hGDim.l - hGDim.r;
    heightTmp = chartHeight - hGDim.t - hGDim.b;
    height = chartHeight - 50;

    showLeft = display.indexOf("Left") !== -1;
    showRight = display.indexOf("Right") !== -1;

    hGDim.h = heightTmp;
    hGDim.w = width;
    widthSvg = width;

    if (mobileMode) {
        height = width;
        hGDim.h = width-50, 
        hGDim.w = height ;
        widthSvg = height + 20;	
    }
    $(".d3-tip").remove();
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .attr('id', 'd3-tipID')
        .style('display', 'block')
        .offset([80, 200])
        .html(function(d, side) {
            var leftText = indicator.sides.sides["Left"] && indicator.sides.sides["Left"].tooltip_key ? _(indicator.sides.sides["Left"].tooltip_key) : null;
            var rightText = indicator.sides.sides["Right"] && indicator.sides.sides["Right"].tooltip_key ? _(indicator.sides.sides["Right"].tooltip_key) : null;
            var st = fD.filter(function(s) {
                return s[0] == d[0];
            })[0],
            country = _(st[0]);
            var html =  "<div class=\"c3-tooltip-container\" style=\" pointer-events: none;width:300px;\">"+
            "<table class=\"c3-tooltip\" style=\"background-color:black\">"+
            "<tbody><tr><th colspan=\"2\">"+country+"</th></tr>";
            var valueUnit = indicator.texts.tooltip_unit ? _(indicator.texts.tooltip_unit) : "";
            html+= showLeft ? "<tr class=\"c3-tooltip-name--F\">" + (leftText ? "<td class=\"name\"><span style=\"background-color:"+colorLeft+"\"></span>"+leftText+"</td>" : "") + "<td class=\"value\">"+formatValue(d[histogramLeftDataIndex])+" "+valueUnit+" </td></tr>" : "";
            html+= showRight ? "<tr class=\"c3-tooltip-name--M\">" + (rightText ? "<td class=\"name\"><span style=\"background-color:"+colorRight+"\"></span>"+rightText+"</td>" : "") + "<td class=\"value\">"+formatValue(d[histogramRightDataIndex])+" "+valueUnit+" </td></tr>" : "";

            html+= "</tbody></table></div>";

            return html;

        });
        //alert("Rebuild = "+hGDim.w);
    d3.select("#barChartTitles").append("h3").attr("id", "secondTitle")
    d3.select("#barChartTitles").append("h5").attr("id", "secondTitleLegend");
    //create svg for histogram.
    hGsvg = d3.select("#barChart").append("svg").attr("id", "main")
        .attr("width", widthSvg)
        .attr("height", height).append("g")
        .attr("transform", "translate(0,40)");
        var defs = d3.select("#main").append("defs").attr("id","defs");
        if (indicator.useBarPattern) {
            injectPatterns();
        }

    if (mobileMode) {
        svgContainer = hGsvg;
        svgContainer.attr('transform',function(){
            var me;
            var x1;
            var y1;
            /*
            me = svgContainer.node()
            x1 = me.getBBox().x + me.getBBox().width/2;//the center x about which you want to rotate
            y1 = me.getBBox().y + me.getBBox().height/2;//the center y about which you want to rotate
            */
            x1 = 300;
            y1 = 0;
            halfWidth = width ;

            return "translate("+halfWidth+",0) rotate(90)";//rotate 180 degrees about x and y

        }); 
    }


    // create function for x-axis mapping.
    $("#footerNoteDataNA").hide();
    x = d3.scale.ordinal().rangeRoundBands([hGDim.l, hGDim.w], 0.1)
        .domain(fD.map(function(d) {
            if ((showLeft && d[histogramLeftDataIndex] == null) ||
            (showRight && d[histogramRightDataIndex] == null) ) {
                $("#footerNoteDataNA").show();
                return d[0]+" *";
            }else {
                return d[0];
            }

        }));

    // Add x-axis to the histogram svg.
    hGsvg.append("g").attr("id", "axisXLabels").attr("class", "x axis")
        .attr("transform", "translate(0," + hGDim.h + ")")
        .call(d3.svg.axis().scale(x).orient("bottom"));

    // Create function for y-axis map.
    var y = d3.scale.linear().range([hGDim.h, 0])
        .domain([0, d3.max(fD, function(d) {
            if (showLeft && !showRight) {
                 return d[histogramLeftDataIndex];
            }else if (showRight && ! showLeft) {
                return d[histogramRightDataIndex];
            }else {
                return Math.max(d[histogramLeftDataIndex], d[histogramRightDataIndex]);
            }
        })]);


        
    // Create bars for histogram to contain rectangles and freq labels.
    var bars = hGsvg.selectAll(".bar").data(fD).enter()
        .append("g").attr("class", "bar");

    var ticks = y.ticks(),
    lastTick = ticks[ticks.length-1],
    newLastTick1 = lastTick + (ticks[1] - ticks[0]);
    newLastTick2 = newLastTick1 + (ticks[1] - ticks[0]);
    if (lastTick<y.domain()[1]){
        ticks.push(newLastTick1);	
    }
    //ticks.push(newLastTick2);  
    var yScale = d3.scale.linear()
        .domain([0, d3.max(fD, function(d) {
            if (showLeft && !showRight) {
                return d[histogramLeftDataIndex];
           }else if (showRight && ! showLeft) {
               return d[histogramRightDataIndex];
           }else {
               return Math.max(d[histogramLeftDataIndex], d[histogramRightDataIndex]);
           }
        })])
        .range([hGDim.h, 0]);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .innerTickSize(-hGDim.w + 40)
        .outerTickSize(0)
        .tickValues(ticks)
        .tickPadding(10);

    hGsvg.append("g")
    .attr("id", "axisYcountries")
    .attr("class", "y axis")
    .attr("transform", "translate(" + hGDim.l + ", 0)")
    .call(yAxis)

    hGsvg.selectAll("#axisXLabels .tick text")
    .html(function(d) {
        var code = d;
        return  countryShortCode(code);
    })

    hGsvg.call(tip);
    barSize = x.rangeBand();
 
    var xPosOther = 20;

    //create the rectangles.
    //if (showRight) {
        bars.append("rect")
            .attr("x", function(d) {
                //console.log("X position = "+xPositionForData(d));
                return xPositionForData(d) +x.rangeBand() / 2;
            })
            .attr("sx", function(d) {
                return xPositionForData(d);
            })
            .attr("y", function(d) {
                return y(d[histogramRightDataIndex]);
            })
            .attr("class", "right")
            .attr("width", function () {return showRight ? barSize/display.length : 0})
            .attr("height", function(d) {
               // console.log("Height = "+(hGDim.h - y(d[histogramRightDataIndex])))
                return hGDim.h - y(d[histogramRightDataIndex]);
            })
            .attr('fill', function(d) {
                return barFillColor("Right", d);
            })
            .attr("x", function() {
                return showLeft == false ? parseFloat($(this).attr("sx")) : parseFloat($(this).attr("sx")) + barSize / 2;
            })
            .on("click", click)
            .on('mouseover', function(d) {
                tip.show(d, _("M"));
                hoverOnOffBar(this, opacityHover);
            })
            .on('mouseout', function(d) {
                tip.hide(d);
                hoverOnOffBar(this, opacityDefault);
            });
    //}
    //if (showLeft) {
        //create the rectangles.
        bars.append("rect")
            .attr("x", function(d) {
                //console.log("X position = "+xPositionForData(d));
                return xPositionForData(d);
            })
            .attr("y", function(d) {
                return y(d[histogramLeftDataIndex]);
            })
            .attr("class", "left")
            .attr("width", function () {return showLeft ? barSize/display.length : 0})
            .attr("height", function(d) {
                //console.log("Height = "+(hGDim.h - y(d[histogramLeftDataIndex])))
                return hGDim.h - y(d[histogramLeftDataIndex]);
            })
            .attr('fill', function(d) {
                return barFillColor("Left", d);
            })
            .on("click", click)
            .on('mouseover', function(d) {
                tip.show(d, _("F"));
                hoverOnOffBar(this, opacityHover);
            })
            .on('mouseout', function(d) {
                tip.hide(d);
                hoverOnOffBar(this,opacityDefault);
            });
    //}
    bars = hGsvg.selectAll(".tick").data(fD);
    bars.select("text").attr("style",
    function(d) {
        return "text-anchor: middle;" + (d[0] == selectedCountry ? "font-weight:bold;fill:"+colorXAxisSelected : "cursor:pointer");
    }).on("click", function(d) {
        click(d);
    });
    bars.attr("style", function(d) {
        return d[histogramRightDataIndex] == 0 ? "opacity:0" : "opacity:1";
    });
    /* DISABLING Vertical legend */
    if (mobileMode) {
        hGsvg.selectAll("#axisXLabels .tick text").data(fD)
        .attr("dx", "-2.0em")
        .attr("dy", "-.65em")
        .attr("transform", "rotate(-90)" )
        
        hGsvg.selectAll("#axisYcountries .tick text").data(fD)
        .attr("transform", "rotate(-90)" )
        .attr("dx", function (d) {
            return $(this).html() == "100" ? "1.4em": "1.3em";
        })
        .attr("dy", "-1.2em")
        hGsvg.selectAll("#axisYcountries .tick line").data(fD)
        .attr("x1", "-30" )
        .attr("x2", "-765" )
    }
    d3.select("#axisYcountries").moveToBack();
    function selectCountryBars(selectedCountry) {
        var bars = d3.selectAll(".tick");
        // transition the height and color of rectangles.
        bars.select("text").attr("style",
            function(d) {
                return "text-anchor: middle;" + (d[0] == selectedCountry ? "cursor:pointer;font-weight:bold;fill:"+colorXAxisSelected : "cursor:pointer");
            });
        
        var bars = hGsvg.selectAll(".bar");

        // transition the height and color of rectangles.
        bars.select(".left")
            .attr('fill', function(d) {
                return barFillColor("Left", d);
            })
        // transition the height and color of rectangles.
        bars.select(".right")
            .attr('fill', function(d) {
                return barFillColor("Right", d);
        })   
    }
    window.updateCountry = function (countryCode) {
        if (arrayNoData.indexOf(countryCode) !== -1) {
            if (window.parent !== window && window.parent.displayChartAlert) {
                parent.displayChartAlert("noData", countryCode);
              }
        }else if (countryCode != "" ) {
            selectedCountry = countryCode.toUpperCase();
            selectCountryBars(selectedCountry);
            updatePieAndLegend(selectedCountry);
        }
      
    }
    if (mobileMode) {
        $(".bar").click(function(e) {

        var x = e.pageX;
        var y = e.pageY;
        console.log("X: " + x + " Y: " + y); 
/*
        var top = $("#d3-tipID").css("top");
        var left = $("#d3-tipID").css("left");	
        */
        $("#d3-tipID").css("top", y);
        $("#d3-tipID").css("left", x);

        //event.preventdefault();
        })
    }
    function click(de) {
        selectedCountry = de[0];
        selectCountryBars(selectedCountry);
        updatePieAndLegend(selectedCountry);

    }

    function mouseover(d) { // utility function to be called on mouseover.			
        selectedCountry
    }

    function mouseout(d) { // utility function to be called on mouseout.
        // reset the pie-chart and legend.    
        alert('mouse out');
        pC.update(tF);
        leg.updateValues(tF);
        updatePieAndLegend(d[0]);
    
    }

    // create function to update the bars. This will be used by pie-chart.
    hG.update = function(nD, type) {
        showLeft = display.indexOf("Left") !== -1;
        showRight = display.indexOf("Right") !== -1;

        //return;
        // update the domain of the y-axis map to reflect change in frequencies.
        y.domain([0, d3.max(nD, function(d) {
            return Math.max(d[histogramRightDataIndex], d[histogramLeftDataIndex]);
            return d[histogramLeftDataIndex];
        })]);

      var ticks = y.ticks(),
        lastTick = ticks[ticks.length-1],
        newLastTick1 = lastTick + (ticks[1] - ticks[0]);
        newLastTick2 = newLastTick1 + (ticks[1] - ticks[0]);
      if (lastTick<y.domain()[1]){
        ticks.push(newLastTick1);	
        //ticks.push(newLastTick2);
    }
        var yScale = d3.scale.linear()
            .domain([0, d3.max(nD, function(d) {
                return Math.max(d[histogramRightDataIndex], d[histogramLeftDataIndex]);
                return d[histogramLeftDataIndex];
            })])
            .range([hGDim.h, 0]);

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .innerTickSize(-hGDim.w + 40)
            .outerTickSize(0)
            .tickValues(ticks)
            .tickPadding(10);

        $("#axisYcountries").remove();
        hGsvg.append("g").attr("id", "axisYcountries").attr("class", "y axis")
            .attr("transform", "translate(" + hGDim.l + ", 0)")
            .call(yAxis)

        // Attach the new data to the bars.
        var bars = hGsvg.selectAll(".bar").data(nD);

        // transition the height and color of rectangles.
        bars.select(".left").transition().duration(500)
            .attr("y", function(d) {
                return y(d[histogramLeftDataIndex]);
            })
            .attr("height", function(d) {
                return hGDim.h - y(d[histogramLeftDataIndex]);
            }).attr("width", function () {return showLeft ? barSize/display.length : 0});
        bars.select(".left").attr('fill', function(d) {
            return barFillColor("Left", d);
        })
        // transition the height and color of rectangles.
        bars.select(".right").transition().duration(500)
            .attr("y", function(d) {
                return y(d[histogramRightDataIndex]);
            })
            .attr("height", function(d) {
                return hGDim.h - y(d[histogramRightDataIndex]);
            })
            .attr("width", function () {return showRight ? barSize/display.length : 0})
            .attr("x", function() {
                return showLeft == false ? parseFloat($(this).attr("sx")) : parseFloat($(this).attr("sx")) + barSize / 2;
            })
        bars.select(".right").attr('fill', function(d) {
            return barFillColor("Right", d);
        })

        // transition the frequency labels location and change value.
        bars.select("text.right").transition().duration(500)
            .text(function(d) {
                return (d[histogramRightDataIndex] == 0 ? "" : d[histogramRightDataIndex] + " %")
            })
            .attr("y", function(d) {
                return y(d[histogramRightDataIndex]) - 5;
            });

        bars.select("text.left").transition().duration(500)
            .text(function(d) {
                return (d[histogramLeftDataIndex] == 0 ? "" : d[histogramLeftDataIndex] + " %")
            })
            .attr("y", function(d) {
                return y(d[histogramLeftDataIndex]) - 5;
            });

        //fD = processData(freqData, type);
        fD = nD;

        // create function for x-axis mapping.
        $("#footerNoteDataNA").hide();
        x = d3.scale.ordinal().rangeRoundBands([hGDim.l, hGDim.w], 0.1)
            .domain(fD.map(function(d) {
                if (d[histogramRightDataIndex] == null) {
                    $("#footerNoteDataNA").show();
                    return d[0]+" *";
                }else {
                    return d[0];
                }

            }));
    
        d3.select("#axisXLabels").selectAll("*").remove();

        hGsvg.select("#axisXLabels")
            .call(d3.svg.axis().scale(x).orient("bottom"))
            .selectAll("text")
            .style("text-anchor", "end")
        ;
        /* DISABLING Vertical legend */
        if (mobileMode) {
            hGsvg.selectAll("#axisXLabels .tick text").data(fD)
            .attr("dx", "-2.0em")
            .attr("dy", "-.65em")
            .attr("transform", "rotate(-90)" )
            
            hGsvg.selectAll("#axisYcountries .tick text").data(fD)
            .attr("transform", "rotate(-90)" )
            .attr("dx", function (d) {
                return $(this).html() == "100" ? "1.4em": "1.3em";
            })
            .attr("dy", "-1.2em")
            hGsvg.selectAll("#axisYcountries .tick line").data(fD)
            .attr("x1", "-30" )
            .attr("x2", "-765" )
        }
        hGsvg.selectAll("#axisXLabels .tick text")
        .html(function(d) {
            var code = d;
            return  countryShortCode(code);
        })
        bars = hGsvg.selectAll(".tick").data(nD);
        // transition the height and color of rectangles.

        bars.attr("style", function(d) {
            return d[histogramRightDataIndex] == 0 ? "opacity:0" : "opacity:1";
        });
        bars.select("text").attr("style",
            function(d) {
                return "text-anchor: middle;" + (d[0] == selectedCountry ? "font-weight:bold;fill:"+colorXAxisSelected : "cursor:pointer");
            }).on("click", function(d) {
            click(d);
        });

        d3.select("#axisYcountries").moveToBack();
    }

    return hG;
}
function xPositionForData(d) {
    xPosition = 0;
    var tmp =  d[0];
    return x(tmp) + xPosition;
}
function barFillColor (side, d) {
    side = side.charAt(0).toUpperCase() + side.slice(1)
    var colorKey = d[0] == selectedCountry ? "colorSelected" : "color";

    return indicator.sides.sides[side] ? indicator.sides.sides[side][colorKey] : "yellow";
}
function hoverOnOffBar(bar, opacity) {

    d3.select(bar.parentNode).selectAll("rect").attr("fill", 
    function (d) {
        var strClass = $(this).attr("class");
        return barFillColor(strClass, d)
    }).style("opacity", opacity);
}
function countryShortCode(code) {
	return code == "EU27_2020" ? EU27_CodeDisplayed : code;
}
