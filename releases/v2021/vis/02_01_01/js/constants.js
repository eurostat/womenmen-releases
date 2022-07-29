var colorLeft;
var colorRight;
var histogramLeftDataIndex = 1;
var histogramRightDataIndex = 2;
var opacityHover = "0.6";
var opacityDefault = "1";
var colorXAxisSelected = "black";
var colorsInactive = [
    "#CED4D6","#898D8F","#E0E1E1"
]
/*
var colorInactive1 = "#CED4D6";
var colorInactive2 = "#898D8F";
*/
var colorDisabled = "#f6f6f6";
var currentLevel = "ValueHigh"; //ValueMedium or ValueLow
var defaultSideOrder = "Left";

var lg = "en";
var rootWSUrl = "//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/" + lg + "/";
rootWSUrl = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/";
roorWSUrlSettings = "&format=JSON&lang=EN"
var selectedCountry = "EU28";

var EU27_Code = "EU27_2020";
var EU27_CodeDisplayed = "EU";
var selectedCountry = EU27_Code;

countriesEU = [EU27_Code];
countriesMS = ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL','ES',  
'FI', 'FR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 
'RO', 'SE', 'SI', 'SK'];
countriesOthers = [];
countriesEfta = ['CH', 'IS','NO'];
countries = countriesEU.concat(countriesMS).concat(countriesOthers).concat(countriesEfta);
countriesGroupped = [countriesEU, countriesMS, countriesOthers, countriesEfta];
