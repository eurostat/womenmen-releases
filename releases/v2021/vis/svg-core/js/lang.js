var _ = function (string) {
    var str = string.toLocaleString();
    return string.toLocaleString();
};
 
function localizeHTMLTag(tagId, useLabel) {
    tag = document.getElementById(tagId);
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
 
function getParameterValue(parameter)
{
    parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + parameter + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null)
        return "";
    else
        return results[1];
}