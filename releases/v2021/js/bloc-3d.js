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

document.title = _("bloc3dtitle");

localizeHTMLTag("bloc3ctitle");
localizeHTMLTag("bloc3dtitle");
localizeHTMLTag("bloc3dbloctextheading");
localizeHTMLTag("bloc3dbloctextp1");
localizeHTMLTag("bloc3dbloctextp2");
$("#bloc3dVis1").attr('title',_('altBloc3dInfographics1'));
$("#bloc3dVis2").attr('title',_('altBloc3dInfographics2'));
