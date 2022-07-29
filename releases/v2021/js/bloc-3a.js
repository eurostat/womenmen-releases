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

document.title = _("bloc3atitle");

localizeHTMLTag("bloc3atitle");
localizeHTMLTag("bloc3btitle");
localizeHTMLTag("bloc3abloctextheading1");
localizeHTMLTag("bloc3abloctextp1");
localizeHTMLTag("bloc3abloctextp2");
localizeHTMLTag("bloc3abloctextp3");
localizeHTMLTag("bloc3abloctextp4");
localizeHTMLTag("bloc3abloctextheading2");
localizeHTMLTag("bloc3abloctextp5");
localizeHTMLTag("bloc3abloctextheading3");
localizeHTMLTag("bloc3abloctextp6part1");
localizeHTMLTag("bloc3abloctextp6part2");
localizeHTMLTag("bloc3abloctextp6part3");
localizeHTMLTag("bloc2dtitle");
$("#bloc3aVis").attr('title',_('altBloc3aInfographics'));



