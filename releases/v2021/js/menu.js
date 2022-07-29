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


localizeHTMLTag("menuHome");
localizeHTMLTag("bloc1title-menu");
localizeHTMLTag("bloc1atitle-menu");
localizeHTMLTag("bloc1btitle-menu");
localizeHTMLTag("bloc1ctitle-menu");
localizeHTMLTag("bloc1dtitle-menu");
localizeHTMLTag("bloc2title-menu");
localizeHTMLTag("bloc2atitle-menu");
localizeHTMLTag("bloc2btitle-menu");
localizeHTMLTag("bloc2ctitle-menu");
localizeHTMLTag("bloc2dtitle-menu");
localizeHTMLTag("bloc3title-menu");
localizeHTMLTag("bloc3atitle-menu");
localizeHTMLTag("bloc3btitle-menu");
localizeHTMLTag("bloc3ctitle-menu");
localizeHTMLTag("menuQuiz");
localizeHTMLTag("menuInfo");
localizeHTMLTag("menuPdf");
localizeHTMLTag("imgYourLogo");

localizeHTMLTag("menuHome-mobile");
localizeHTMLTag("bloc1title-menu-mobile");
localizeHTMLTag("bloc1atitle-menu-mobile");
localizeHTMLTag("bloc1btitle-menu-mobile");
localizeHTMLTag("bloc1ctitle-menu-mobile");
localizeHTMLTag("bloc1dtitle-menu-mobile");
localizeHTMLTag("bloc2title-menu-mobile");
localizeHTMLTag("bloc2atitle-menu-mobile");
localizeHTMLTag("bloc2btitle-menu-mobile");
localizeHTMLTag("bloc2ctitle-menu-mobile");
localizeHTMLTag("bloc2dtitle-menu-mobile");
localizeHTMLTag("bloc3title-menu-mobile");
localizeHTMLTag("bloc3atitle-menu-mobile");
localizeHTMLTag("bloc3btitle-menu-mobile");
localizeHTMLTag("bloc3ctitle-menu-mobile");
localizeHTMLTag("menuQuiz-mobile");
localizeHTMLTag("menuInfo-mobile");
localizeHTMLTag("menuPdf-mobile");
localizeHTMLTag("copyPasteText");
localizeHTMLTag("imgYourLogoRes");


