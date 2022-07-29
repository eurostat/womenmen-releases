function drawSortBoxes (chart) {
    var sides = indicator.sides.sides;
    var sides = Object.keys(sides).map(function(key) {
        return [key, sides[key]];
      });
    var orderList = ['Left', 'Right'];
	document.getElementById('legend-container').innerHTML = '';
    d3.select('#legend-container')
    .insert('div', '.chart')
    .attr('class', 'legend')
    .selectAll('span')
    .data(sides)
    .enter()
    .append('div')
    .attr('data-id', function (id) { 
         return id[0];
    })
    .attr('class', 'legend-block')
    .html(function (arrData) {
        var id = arrData[0];
        var obj = arrData[1];
        var title = _(obj.textKey);
        let legendDiv = '';
        //console.log("toggledBar = "+toggledBar);

        if (display.length == sides.length && sides.length > 1 ) {           
			legendDiv+= '<i id="checkbox-' + id + '" class="fa fa-check-square-o checkbox"  aria-hidden="true"  data-tooltip="tooltip" data-placement="bottom" title="' + _(obj.hide_key) +'"></i>';
		} else {
            if (display.indexOf(id) == -1) {          
				legendDiv+= '<i id="checkbox-' + id + '" class="fa fa-square-o checkbox"  aria-hidden="true"  data-tooltip="tooltip" data-placement="bottom" title="' + _(obj.show_key) +'"></i>';
			} else  {
                legendDiv += '<div class="placeholder"></div>';
            }          
        }
        legendDiv += '<div class="box box_' + id + '" style="background-color:'+obj.color+'"></div>';        
        legendDiv += '<small class="legend-text">' + title + '</small>';
        if (orderBy === id || (display.length < sides.length)) {
            legendDiv += '<span id="darrgif" class="fa fa-caret-down fa-2x unuseable"></span>';
        } else {
			legendDiv+= '<span id="nogif" class="fa fa-caret-down fa-2x useable" data-tooltip="tooltip" data-placement="bottom" title="" data-sortTo="'+id+'" data-original-title="'+_(obj.sort_key)+'"></span>';
        }
        return legendDiv;
    })
    .on('mouseover', function (id) {
        //chart.focus(id);
    })
    .on('mouseout', function (id) {
        //chart.revert();
    });

    $(".checkbox").click(function() {
        var id = $(this).attr("id").replace("checkbox-","");
        toggleArrayItem(display,id);
        orderBy = display.length > 1 ? defaultSideOrder : display[0];
        $(".pieItem").each(function() {
            var id = $(this).attr("id").replace("pie","");
            $("svg", this).attr("class", display.indexOf(id) ===-1 ? "notActive" : "active");
        })

        drawSortBoxes(chart);
        updateDisplay(true);
        updateBarChart();
        
    });
	if ($('#nogif').length) {
        $('#nogif').click(function () {
		    changeSorting($(this).attr("data-sortTo"));
        });
    }
    jQuery('[data-tooltip="tooltip"]').tooltip();
}
