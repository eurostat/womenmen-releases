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

document.title = _("bloc1dtitle");

localizeHTMLTag("bloc1ctitle");
localizeHTMLTag("bloc1dtitle");
localizeHTMLTag("bloc1dbloctextheading1");
localizeHTMLTag("bloc1dbloctextp1");
localizeHTMLTag("bloc2atitle");
$("#bloc1dVis").attr('title',_('altBloc1dInfographics'));


