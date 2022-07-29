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

document.title = _("bloc2btitle");

localizeHTMLTag("bloc2atitle");
localizeHTMLTag("bloc2btitle");
localizeHTMLTag("bloc2ctitle");
localizeHTMLTag("bloc2bbloctextheading1");
localizeHTMLTag("bloc2bbloctextp1part1");
localizeHTMLTag("bloc2bbloctextp1part2");
localizeHTMLTag("bloc2bbloctextp1part3");
localizeHTMLTag("bloc2bbloctextheading2");
localizeHTMLTag("bloc2bbloctextp2");
localizeHTMLTag("bloc2bbloctextheading3");
localizeHTMLTag("bloc2bbloctextp3part1");
localizeHTMLTag("bloc2bbloctextp3part2");
localizeHTMLTag("bloc2bbloctextp3part3");
$("#bloc2bVis1").attr('title',_('altBloc2bInfographics1'));
$("#bloc2bVis2").attr('title',_('altBloc2bInfographics2'));
$("#bloc2bVis3").attr('title',_('altBloc2bInfographics3'));