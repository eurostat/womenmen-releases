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

document.title = _("bloc3btitle");

localizeHTMLTag("bloc3btitle");
localizeHTMLTag("bloc3atitle");
localizeHTMLTag("bloc3ctitle");
localizeHTMLTag("bloc3bbloctextheading1");
localizeHTMLTag("bloc3bbloctextp1part1");
localizeHTMLTag("bloc3bbloctextp1part2");
localizeHTMLTag("bloc3bbloctextp2");
localizeHTMLTag("bloc3bbloctextp3");
localizeHTMLTag("bloc3bbloctextp4");
localizeHTMLTag("bloc3bbloctextheading2");
localizeHTMLTag("bloc3bbloctextp4part1");
localizeHTMLTag("bloc3bbloctextp4part2");
localizeHTMLTag("bloc3bbloctextp4part3");
localizeHTMLTag("bloc3bbloctextp5");
$("#bloc3bVis1").attr('title',_('altBloc3bInfographics1'));
$("#bloc3bVis2").attr('title',_('altBloc3bInfographics2'));


