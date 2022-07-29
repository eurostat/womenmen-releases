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

document.title = _("bloc3ctitle");

localizeHTMLTag("bloc3ctitle");
localizeHTMLTag("bloc3btitle");
localizeHTMLTag("bloc3cbloctextheading");
localizeHTMLTag("bloc3cbloctextp1");
localizeHTMLTag("bloc3cbloctextp2");
$("#bloc3cVis1").attr('title',_('altBloc3cInfographics1'));
$("#bloc3cVis2").attr('title',_('altBloc3cInfographics2'));
