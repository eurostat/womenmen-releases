window.configuration = {
  active: 0,
  orderBy: "F",
  toggledBar: "",
  showFullAxis: false,
  showExpandButton: [true, false, false, true, false, true],
  yAxisStartFrom: [30, 0, 0, 30, 0, 50],
  data: {
    url_dev: "//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/",
    url_acc: "//www.acceptance.ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/",
    url_prod: "//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/",
    url_local: "//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/",
    year: "2015",
    sex: [
      { id: "0", abbr: "M", label: "Male" },
      { id: "1", abbr: "F", label: "Female" },
    ],
    colorBars: ["#F7A700", "#2C69B2"],
    colorBarsSelected: ["#faca66", "#aac3e0"],
    countriesEu: ["EU27_2020"],
    countriesOthers: [
      "BE",
      "BG",
      "CZ",
      "DK",
      "DE",
      "EE",
      "IE",
      "EL",
      "ES",
      "FR",
      "HR",
      "IT",
      "CY",
      "LV",
      "LT",
      "LU",
      "HU",
      "MT",
      "NL",
      "AT",
      "PL",
      "PT",
      "RO",
      "SI",
      "SK",
      "FI",
      "SE",
    ],
    countriesNonMembers: [], /*
    countriesNonMembers: ["UK"],*/
    countriesEfta: ["CH", "IS", "NO"],
    paramObj: [
      {}, // static data , AGE_ELEM 
      {}, // static data , AGE_EMPLOY
      {
        // geo: 'dynamically constructed',
        // sex: 'dynamically constructed',
        time: "2020", // AGE_LEAVEHOME ,
        unit: "AVG",
      },
      {
        time: "2019", //AGE_CHILD,
        indic_de: "AGEMOTH1",
      },
      {
        time: "2019", //AGE_MARRIAGE,
        indic_de: ["MAGEMAR1", "FAGEMAR1"],
      },
      {
        time: "2012", //AGE_RETIRE,
        unit: "YR",
        statinfo: "AVG",
        age: "Y50-69",
      },
      { 
        time: "2020", //LIFE_EXP,
        unit: "YR",
        age: "Y_LT1",
      },
    ],
    dataUrlMapping: [0, 0, 0, 1, 2, 3, 4], // which rawdata/url to use for the different categories
    lang: "en",
    bookmarkLink_0:  // AGE_LEAVEHOME ,
      "https://ec.europa.eu/eurostat/databrowser/bookmark/2fe33a19-b5b5-4f21-b755-21fe404e2abe?lang=en",
    bookmarkLink_1:  // AGE_MARRIAGE 
      "https://ec.europa.eu/eurostat/databrowser/bookmark/c0d08205-3343-4679-8161-c59579707c2f?lang=en",
    bookmarkLink_2:  //AGE_CHILD,
      "https://ec.europa.eu/eurostat/databrowser/bookmark/64f0d51d-4327-4707-95fb-ba8b02294a39?lang=en",
    bookmarkLink_3:  // AGE_RETIRE
      "https://ec.europa.eu/eurostat/databrowser/bookmark/7e76c152-6357-4f2d-a327-ab1d7599f059?lang=en",
    bookmarkLink_4:  // LIFE_EXP
      "https://ec.europa.eu/eurostat/databrowser/bookmark/074129dc-8507-4077-b3b3-43dbd2519005?lang=en",
    indicators: [
      "AGE_ELEM",
      "AGE_EMPLOY",
      "AGE_LEAVEHOME",
      "AGE_CHILD",
      "AGE_MARRIAGE",
      "AGE_RETIRE",
      "LIFE_EXP",
    ],
    dataUrls: [
      // static data for compulsory start
      "",
      // static data for first employment
      "",
      // leaving home
      "yth_demo_030?sex=F&sex=M&precision=1&unit=AVG&time=2020",
      // 1st child
      "demo_find?precision=1&indic_de=AGEMOTH1&time=2019&time=2018&time=2017&time=2016&time=2015&time=2014",
      // marriage
      "demo_nind?indic_de=MAGEMAR1&indic_de=FAGEMAR1&time=2019&time=2018&time=2017&time=2016&time=2015&time=2014&time=2013&time=2012&time=2012",
      // retirement
      "lfso_12agepens?sex=M&sex=F&statinfo=AVG&time=2012",
      // life expectancy
      "demo_mlexpec?sex=F&sex=M&precision=1&age=Y_LT1&time=2020&time=2019",
    ],
  },
};
