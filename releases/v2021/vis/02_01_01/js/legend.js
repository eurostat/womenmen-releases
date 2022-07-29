    /**************** function to handle legend. ****************************/
function legend(id, lD) {
    var leg = {};
    legendItem = d3.select(id).append("table").attr('class', 'legend');

    var title = legendItem.append('caption');
    title.attr('class', 'labeltext');
    title.text(_(selectedCountry));
    title.attr('fill', 'black')
    title.attr("font-family", "verdana")
    title.attr("font-size", "12px");

    // create one row per segment.
    var tr = legendItem.append("tbody").selectAll("tr").data(lD).enter().append("tr");

    tr.on("click", function(d) {
        console.log("Click Level:  Side "+orderBy+"  level = "+currentLevel);
        currentLevel = d.type;
        leg.updateDisplay();
        updateBarChart();
    });
    // create the first column for each segment.
    tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect")
        .attr("width", '16').attr("height", '16');

    // create the third column for each segment.
    tr.append("td").attr("class", 'legendFreqF')
        .text(function(d) {
            return (formatValue(d.valuesLeft) + " %");
        });

    // create the second column for each segment.
    tr.append("td").text(function(d) {
        var levels = indicator.levels.levels;
           return _(levels[d.type].textShortKey);
        })
        .attr("id", function(d) {
            return d.type;
        })
        .attr("class", "clickable")
        .attr("title",_("clickToSelect"))

    // create the third column for each segment.
    tr.append("td").attr("class", 'legendFreqM')
        .text(function(d) {
            return (formatValue(d.valuesRight) + " %");
        });
    tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect")
        .attr("width", '16').attr("height", '16');
        //legendItem.append("tr").attr("height", 40);


    // Utility function to be used to update the legend.
    leg.updateValues = function(nD, label) {
        // update the data attached to the row elements.
        var l = legendItem.select("tbody").selectAll("tr").data(nD);

        // update the frequencies.				
        l.select(".legendFreqM").text(function(d) {
            return (formatValue(d.valuesRight) + " %");
        });
        l.select(".legendFreqF").text(function(d) {
            return (formatValue(d.valuesLeft) + " %");
        });
 
        d3.select("#pieRight").selectAll("path title").data(nD).text(function(d) {
            return (formatValue(d.valuesRight) + " %");
        });
        d3.select("#pieLeft").selectAll("path title").data(nD).text(function(d) {
            return (formatValue(d.valuesLeft) + " %");
        });

        title.text(label);


    }
    leg.updateDisplay = function () {

            $(".clickable").attr("style", "text-decoration:none;font-weight:normal");
            var currentLevelElem = $("#"+currentLevel);
            currentLevelElem.attr("style", "font-weight:bold");

            var showLeft = display.indexOf("Left") !== -1;
            var showRight = display.indexOf("Right") !== -1;

            var levels = indicator.levels.levels;

            $("#secondTitle").html(_(levels[currentLevel].textLongKey));
            $("#secondTitleLegend").html(_(indicator.texts.subtitleUnitKey));

            d3.selectAll(".active path:not(.domain)").transition()
                .duration(200)
                .attr("d", function(elem) {
                    return elem.data.type == currentLevel ? arcOver(elem) : arc(elem);
                });
              
            d3.selectAll(".notActive path.pieElem")[0].forEach(function(elem) {
                $(elem).attr("style", "fill:" + colorDisabled);
            });
            
            $(".legend tr td svg rect").attr("fill", colorsInactive);

            var iterator = 0;
            d3.selectAll("#pieLeft path.pieElem")[0].forEach(function(elem) {
                var type = $(elem).attr("class").replace("pieElem ", "");
                var color;
                if (type == currentLevel) {
                    if (showLeft) {
                        $(".active #pieLeft ." + type).attr("style", "fill:" + colorLeft);
                        $("td:nth-child(1) svg rect", $("td#" + type).parent("tr")).attr("fill", colorLeft);
                        $(".legend td:nth-child(1),.legend td:nth-child(2)").attr("style", "opacity:1");
                    } else {
                        $(".legend td:nth-child(1),.legend td:nth-child(2)").attr("style", "opacity:0");
                    }
                    if (showRight) {
                        $(".active #pieRight ." + type).attr("style", "fill:" + colorRight);
                        $("td:nth-child(5) svg rect", $("td#" + type).parent("tr")).attr("fill", colorRight);
                        $(".legend td:nth-child(4),.legend td:nth-child(5)").attr("style", "opacity:1");
                    } else {
                        $(".legend td:nth-child(4),.legend td:nth-child(5)").attr("style", "opacity:0");
                    }

                } else {
                    
                    color = colorsInactive[iterator];
                    $(elem).attr("style", "fill:" + color);

                    iterator++;
    
                    colorTmp = showRight ? color : colorDisabled;
                    $("#pieRight ." + type).attr("style", "fill:" + colorTmp);
                    $("td:nth-child(5) svg rect", $("td#" + type).parent("tr")).attr("fill", colorTmp);

                    colorTmp = showLeft ? color : colorDisabled;
                    $("#pieLeft ." + type).attr("style", "fill:" + colorTmp);
                    $("td:nth-child(1) svg rect", $("td#" + type).parent("tr")).attr("fill", colorTmp);
                    

                }
            })
    }

    return leg;
}

