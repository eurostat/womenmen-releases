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

document.title = _("bloc2dtitle");

localizeHTMLTag("bloc2ctitle");
localizeHTMLTag("bloc2dtitle");
localizeHTMLTag("bloc2dbloctextheading1");
localizeHTMLTag("bloc2dbloctextp1");
localizeHTMLTag("bloc2dbloctextheading2");
localizeHTMLTag("bloc2dbloctextp3");
localizeHTMLTag("bloc3atitle");
$("#bloc2dVis1").attr('title',_('altBloc2dInfographics1'));
$("#bloc2dVis2").attr('title',_('altBloc2dInfographics2'));

