var chartWidth = 1000;
var chartHeight = 600;
var chartBubbleSizeMin = chartWidth/1000;
var chartBubbleSizeMax = chartWidth/200;

var chartBubbleSizeMin = 15;
var chartBubbleSizeMax = 15;
var chartBubbleRadius = 30;

var chartYPadding = 10;
var bubbleDelta = 0.03;

var chartDatasetLink = "https://ec.europa.eu/eurostat/databrowser/bookmark/5ad9a64b-1ca5-4dcb-9599-d4c568b4f5fa?lang=en";

var styleClass = "a";
var strClass = "nrg_100a";
var simple = false; // Param to decide if share buttons are shown;

var countries = ['EU27_2020', 'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL','ES', 'FI', 'FR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
var eftaCntry = ['IS', 'LI', 'NO', 'CH'];

var indiData=[

	{
		id: 0,
		icon: "wm-total-icon.svg",
		name: "ind1",
		backgroundGradiantMin:"#E4BA74",
		backgroundGradiantMax:"#C48726"
	},

	{
		id: 1,
		icon: "wm-017-icon.svg",
		name: "ind2",
		backgroundGradiantMin:"#E4BA74",
		backgroundGradiantMax:"#C48726"
	},
	
	{
		id: 2,
		icon: "wm-65-icon.svg",
		name: "ind3",
		backgroundGradiantMin:"#E4BA74",
		backgroundGradiantMax:"#C48726"
	}
	
];
