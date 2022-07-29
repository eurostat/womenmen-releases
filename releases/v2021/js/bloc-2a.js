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

document.title = _("bloc2atitle");

localizeHTMLTag("bloc2atitle");
localizeHTMLTag("bloc2btitle");
localizeHTMLTag("bloc2abloctextheading1");
localizeHTMLTag("bloc2abloctextp1");;
localizeHTMLTag("bloc2abloctextp2");
localizeHTMLTag("bloc2abloctextp3");
localizeHTMLTag("bloc2abloctextp4");
localizeHTMLTag("bloc1dtitle");
$("#bloc2aVis").attr('title',_('altBloc2aInfographics'));
