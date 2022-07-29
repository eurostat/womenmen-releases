var chartWidth = 1000;
var chartHeight = 600;
var chartBubbleSizeMin = chartWidth/1000;
var chartBubbleSizeMax = chartWidth/200;

var chartBubbleSizeMin = 15;
var chartBubbleSizeMax = 15;
var chartBubbleRadius = 30;

var chartYPadding = 10;
var bubbleDelta = 0.03;

var chartDatasetLink = "https://ec.europa.eu/eurostat/databrowser/bookmark/59a9b0af-09a8-45af-a819-74879de46c56?lang=en";

var styleClass = "a";
var strClass = "ilc_pw01";
var rootUrl  = "" ;
var simple = false; // Param to decide if share buttons are shown;

var countries = ['EU27_2020', 'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT' ,'RO', 'SE', 'SI', 'SK'];
var eftaCntry = ['IS', 'LI', 'NO', 'CH'];

var indiData=[

	{
		id: 0,
		icon: "smile-women.svg",
		name: "ind1",
		backgroundGradiantMin:"#E4BA74",
		backgroundGradiantMax:"#C48726",
		ws:""
	},
	
	{
		id: 1,
		icon: "smile-men.svg",
		name: "ind2",
		backgroundGradiantMin:"#87cefa",
		backgroundGradiantMax:"#4682b4",
		ws:""
	}
	
];
