function compareString(a, b) {
    if (a.countryNameEn < b.countryNameEn)
        return -1;
    else if (a.countryNameEn > b.countryNameEn)
        return 1;
    else
        return 0;
}
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
function numberWithCommas(x) {
    if ((x > 1000) || (x < -1000)) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return x;
}
function isInt(n) {
   return n % 1 === 0;
}
function formatLegendValue(value) {
    value = numberWithCommas(value);
	return value;
}
function formatValue(value) {
    value = numberWithCommas(value);
	return parseFloat(Math.round(value * 100) / 100).toFixed(2);
}
d3.selection.prototype.moveToFront = function() {  
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};
d3.selection.prototype.moveToBack = function() {  
    return this.each(function() { 
        var firstChild = this.parentNode.firstChild; 
        if (firstChild) { 
            this.parentNode.insertBefore(this, firstChild); 
        } 
    });
};