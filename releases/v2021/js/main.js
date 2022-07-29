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


document.title = _("document.title");

localizeHTMLTag("titlepart1");
localizeHTMLTag("subtitle");
localizeHTMLTag("introtextp1part1");
localizeHTMLTag("introtextp1part2");
localizeHTMLTag("introtextp1part3");
localizeHTMLTag("introtextp2");
localizeHTMLTag("introtextp3");
localizeHTMLTag("introtextli1title");
localizeHTMLTag("introtextli1text");
localizeHTMLTag("introtextli2title");
localizeHTMLTag("introtextli2text");
localizeHTMLTag("introtextli3title");
localizeHTMLTag("introtextli3text");
localizeHTMLTag("introtextp3part1");
localizeHTMLTag("introtextp3part2");



   
$(document).ready(function () {
    /*
    $(window).resize(function(){
            if(window.innerWidth < 1024) {
                $("#videoContainer").remove();
                $("#animation").remove();
            }
    });
    */
        
    $(function () {

        $("a").attr('href', function (i, h) {
            if (h === undefined) return h;
            return h + (h.indexOf('?') !== -1 ? "&lang=" + String.locale : "?lang=" + String.locale);
        });
    });
    
});