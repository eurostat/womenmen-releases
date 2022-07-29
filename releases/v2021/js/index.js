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
localizeHTMLTag("titlepart2");
localizeHTMLTag("subtitle");
localizeHTMLTag("datetitle");
localizeHTMLTag("introtitle");
localizeHTMLTag("introtextp1");
localizeHTMLTag("introtextp2part1");
localizeHTMLTag("introtextp2part2");
localizeHTMLTag("introtextp2part3");
localizeHTMLTag("introtextp3");
localizeHTMLTag("introtextli1title");
localizeHTMLTag("introtextli1text");
localizeHTMLTag("introtextli2title");
localizeHTMLTag("introtextli2text");
localizeHTMLTag("introtextli3title");
localizeHTMLTag("introtextli3text");
localizeHTMLTag("introtextp4");

