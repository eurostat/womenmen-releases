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

document.title = _("bloc1atitle");


localizeHTMLTag("bloc1atitle");
localizeHTMLTag("bloc1abloctextheading1");
localizeHTMLTag("bloc1abloctextp1");
localizeHTMLTag("bloc1abloctextp2");
localizeHTMLTag("bloc1abloctextheading2");
localizeHTMLTag("bloc1abloctextp3");
localizeHTMLTag("bloc1btitle");
$("#bloc1aVis").attr('title',_('altBloc1aInfographics'));


