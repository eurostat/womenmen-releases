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

document.title = _("bloc1ctitle");

localizeHTMLTag("bloc1ctitle");
localizeHTMLTag("bloc1cbloctextheading1");
localizeHTMLTag("bloc1cbloctextp1part1");
localizeHTMLTag("bloc1cbloctextp1part2");
localizeHTMLTag("bloc1btitle");
localizeHTMLTag("bloc1dtitle");
$("#bloc1cVis1").attr('title',_('altBloc1cInfographics1'));
