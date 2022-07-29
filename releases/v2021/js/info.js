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

document.title = _("document.title");

localizeHTMLTag("blocInfotexttitle");
localizeHTMLTag("blocInfotextp1part1");
localizeHTMLTag("blocInfotextp1part2");
localizeHTMLTag("blocInfotextp2");
localizeHTMLTag("blocInfotextp3part1");
localizeHTMLTag("blocInfotextp3part2");
localizeHTMLTag("blocInfotextp3part3");
localizeHTMLTag("blocInfotextp4");
localizeHTMLTag("blocInfotextp5part1");
localizeHTMLTag("blocInfotextp5part2");
localizeHTMLTag("blocInfotextp6");
localizeHTMLTag("blocInfotextp7part1");
localizeHTMLTag("blocInfotextp7part2");
localizeHTMLTag("blocInfotextp7part3");
localizeHTMLTag("blocInfotextp8");
localizeHTMLTag("blocInfotextp9");
localizeHTMLTag("blocInfotextp10part1");
localizeHTMLTag("blocInfotextp10part2");
localizeHTMLTag("blocInfotextp10part3");
localizeHTMLTag("translationInfo");
localizeHTMLTag("blocInfotextp11part1");
localizeHTMLTag("blocInfotextp11part2");
localizeHTMLTag("blocInfotextp11part3");
localizeHTMLTag("blocInfotextp12part1");
localizeHTMLTag("blocInfotextp12part2");
localizeHTMLTag("blocInfotextp13");
localizeHTMLTag("blocInfotextp14");
localizeHTMLTag("blocInfotextp15");
localizeHTMLTag("blocInfotextpENp1");
localizeHTMLTag("blocInfotextpENp2");
localizeHTMLTag("blocInfotextpENp31");
localizeHTMLTag("blocInfotextpENp32");
localizeHTMLTag("translationInfo");
