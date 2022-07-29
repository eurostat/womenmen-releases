var arc;
var arcOver;

/**************** function to handle pieChart. ****************************/
function pieChart(pD) {

    /* DIRTY DIRTY Tempory Fix for re ordering */
    //pD = sortPieData(pD);
    pC = {}, pieDim = {
        w: 670,
        h: 160
    };

    pieDim.r = Math.min(pieDim.w, pieDim.h) / 2;
    pieDim.r *= mobileMode ? 0.8 : 1;
    if (mobileMode) {
        $("img.men, img.women").css("height","130px");
    }
    // create svg for pie chart.
    var piesvgLeft = d3.select("#pieLeft")
        .append("svg")
        .attr("class","active")
        .append("g")
        .attr("transform", "translate(86,80)")
        .attr("id", "pieLeft");

    var piesvgRight = d3.select("#pieRight")
        .append("svg")
        .attr("class","active")
        .append("g")
        .attr("transform", "translate(86,80)")
        .attr("id", "pieRight");

    // create function to draw the arcs of the pie slices.
    arc = d3.svg.arc().outerRadius(pieDim.r - 10).innerRadius(0);
    arcOver = d3.svg.arc().outerRadius(pieDim.r - 3).innerRadius(0);

    // create a function to compute the pie slice angles.
    //var pieRight = d3.layout.pie().sort(null).value(function(d) { return d.freqM; });
    var pieRight = d3.layout.pie().sort(null).value(function(d) {
        showRight = display.indexOf("Right") !== -1;
        return showRight ? d.valuesRight : (d.type == "ValueHigh" ? 100 : 0);
    })
    //var pieLeft = d3.layout.pie().sort(null).value(function(d) { return d.valuesF; });
    var pieLeft = d3.layout.pie().sort(null).value(function(d) {
        showLeft = display.indexOf("Left") !== -1;
        return showLeft ? d.valuesLeft : (d.type == "ValueHigh" ? 100 : 0);
    });
    // Draw the pie slices.

    piesvgLeft.selectAll("path").data(pieLeft(pD)).enter().append("path").attr("d",arc)
        .each(function(d) {
            this._current = d;
        })
        .attr("class", function(d) {
            return "pieElem " + d.data.type;
        })
        .on("click",clickPie)
        .append("title")
        .text(function(d) {
            return (formatValue(d.data.valuesLeft) + " %");
        })

    // Draw the pie slices.
        
        
    piesvgRight.selectAll("path").data(pieRight(pD)).enter()
        .append("path")
        .attr("d", arc)
        .each(function(d) {
            this._current = d;
        })
        .attr("class", function(d) {
            return "pieElem " + d.data.type;
        })
        .on("click",clickPie)
        .append("title")
        .text(function(d) {
            return (formatValue(d.data.valuesRight) + " %");
        })


    // create function to update pie-chart. This will be used by histogram.
    pC.update = function(nD) {
        showLeft = display.indexOf("Left") !== -1;
        showRight = display.indexOf("Right") !== -1;
        piesvgLeft.selectAll("path").data(pieLeft(nD))
            .transition().duration(500).attrTween("d", arcTween)
            .attr("opacity",
                function (d) {
                    return showLeft ? 1 : (d.data.type == "ValueHigh" ? 1 : 0) 
            })
        piesvgRight.selectAll("path").data(pieRight(nD))
            .transition().duration(500).attrTween("d", arcTween)
            .attr("opacity",
                function (d) {
                    return showRight ? 1 : (d.data.type == "ValueHigh" ? 1 : 0) 
            }) 
    }

    function clickPie(d) {
        currentLevel = d.data.type;
        leg.updateDisplay();
        updateBarChart();
    }

    // Utility function to be called on mouseover a pie slice.
    function mouseover(_this, d, side) {
        alert('to remove');
        return;
        type = d.data.type;
        // call the update function of histogram with new data.					
        d3.select(_this).transition()
            .duration(200)
            .attr("d", arcOver);
        prvarc = d3.select(_this);

        fData = processData(freqData, side, type);

        hG.update(fData, type);

    }

    //Utility function to be called on mouseout a pie slice.
    function mouseout(d) {
        alert("To remove 2");
        // call the update function of histogram with all data.
        d3.select(this).transition()
            .duration(200)
            .attr("d", arc);
    }

    // Animating the pie-slice requiring a custom function which specifies
    // how the intermediate paths should be drawn.
    function arcTween(a) {
        var i = d3.interpolate(this._current, a);
        this._current = i(0);
        return function(t) {
            return a.data.type == currentLevel ? arcOver(i(t)) : arc(i(t));
        };
    }
    return pC;
    }
