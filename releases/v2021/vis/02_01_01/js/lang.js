function _ (string) {
    'use strict';
    return string.toLocaleString();
}
 
function localizeHTMLTag(tagId, useLabel) {
    'use strict';
    let tag = document.getElementById(tagId);
    if (tag && tag.src) {
        tag.title = _(tag.title);
    } else {
        if (!useLabel) {
        tag.innerHTML = _(tag.innerHTML);
    } else {
        tag.innerHTML = _(useLabel);
    }
    }
}
 
function getParameterValue(parameter) {
    'use strict';
    parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    let regexS = "[\\?&]" + parameter + "=([^&#]*)";
    let regex = new RegExp(regexS);
    let results = regex.exec(window.location.href);
    if(results === null) {
        return '';
    } else {
        return results[1];
    }        
}