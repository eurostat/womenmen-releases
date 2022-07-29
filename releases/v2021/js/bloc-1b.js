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

document.title = _("bloc1btitle");

localizeHTMLTag("bloc1atitle");
localizeHTMLTag("bloc1ctitle");
localizeHTMLTag("bloc1btitle");
localizeHTMLTag("bloc1bbloctextheading1");
localizeHTMLTag("bloc1bbloctextp1");
localizeHTMLTag("bloc1bbloctextp2");
localizeHTMLTag("bloc1bbloctextheading2");
localizeHTMLTag("bloc1bbloctextp3");
localizeHTMLTag("bloc1bbloctextp4");
localizeHTMLTag("bloc1bbloctextp5");
$("#bloc1bVis1").attr('title',_('altBloc1bInfographics1'));
$("#bloc1bVis2").attr('title',_('altBloc1bInfographics2'));
