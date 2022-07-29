d3.selection.prototype.moveToFront = function() {
    return this.each(function() {
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
Array.prototype.move = function(x, y) {
    this.splice(y, 0, this.splice(x, 1)[0]);
    return this;
};
Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};
Array.prototype.remove = function() {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
function isInt(n) {
   return n % 1 === 0;
}
function formatValue(value) {
	var separator = _("decimal_separator");

	if (isInt(value)) {
		value =  value+separator+"0";
	}
	
	var strValue = String(value);
		//	console.log(value);
	//return value;
	return strValue.replace(".",separator);
	//return parseFloat(Math.round(value * 100) / 100).toFixed(1);
}

// Function to get a piece of the data array 
function getArrayRange(start, end, array) {
    var arr = new Array();
    for (var i = start; i <= end; i++) {
        arr.push(array[i]);
    }
    return arr;
}
function toggleArrayItem(a, v) {
    var i = a.indexOf(v);
    if (i === -1)
        a.push(v);
    else
        a.splice(i,1);
}
function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}