/* General settings */
var debug = 0;
var colorWomen = "#F7A700";
var colorMen = "#2C69B2";
var colorAverage = "#696969";
var colorNotHighlighted = "#d4d4d4";
var yOffset = 0;
var lg = "en";
var csvFile = "data/data.csv";
var rootUrl = "//ec.europa.eu/eurostat/wdds/rest/data/v1.1/json/" + lg + "/";
var params = "earn_ses_monthly?nace_r2=B-S_X_O&indic_se=ERN_MN_EUR&sex=F&sex=T&sex=M&precision=1&time=2014&age=TOTAL&worktime=FT";
var types = "&isco08=OC1&isco08=OC2&isco08=OC3&isco08=OC4&isco08=OC5&isco08=OC6&isco08=OC7&isco08=OC8&isco08=OC9&isco08=TOTAL";
var typesSupported = ["OC1", "OC2", "OC3", "OC4", "OC5", "OC7", "OC8", "OC9", "TOTAL"];


var twitter_hashtag = "Eurostat";

var linkDatabrowser = "https://ec.europa.eu/eurostat/databrowser/bookmark/64191d3a-2b23-4894-99bc-72466cd4579f?lang=en";
var furtherDetailLink = "http://ec.europa.eu/eurostat/ramon/nomenclatures/index.cfm?TargetUrl=LST_NOM_DTL&StrNom=CL_ISCO08&IntPcKey=&StrLayoutCode=HIERARCHIC";

//"&geo=AT&geo=BE&geo=BG&geo=CH&geo=CY&geo=CZ&geo=DE&geo=DK&geo=EE&geo=EL&geo=ES&geo=EU28&geo=FI&geo=FR&geo=HR&geo=HU&geo=IE&geo=IS&geo=IT&geo=LT&geo=LU&geo=LV&geo=MT&geo=NL&geo=NO&geo=PL&geo=PT&geo=RO&geo=RS&geo=SE&geo=SI&geo=SK&geo=TR&geo=UK";
var averageId = "TOTAL";
countries = ['EU27_2020', 'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL','ES',  
        'FI', 'FR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 
        'RO', 'SE', 'SI', 'SK'];

countriesEu = ['EU27_2020'];
countriesOthers = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL','ES',  
        'FI', 'FR',  'HR','HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 
        'RO', 'SE', 'SI', 'SK'];
countriesEfta = ['CH', 'IS', 'NO'];