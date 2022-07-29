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

document.title = _("bloc2ctitle");

localizeHTMLTag("bloc2btitle");
localizeHTMLTag("bloc2ctitle");
localizeHTMLTag("bloc2dtitle");
localizeHTMLTag("bloc2cbloctextheading1");
localizeHTMLTag("bloc2cbloctextp1part1");
localizeHTMLTag("bloc2cbloctextp1part2");
localizeHTMLTag("bloc2cbloctextp1part3");
$("#bloc2cVis").attr('title',_('altBloc2cInfographics'));

