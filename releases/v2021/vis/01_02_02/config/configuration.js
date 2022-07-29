window.configuration = {
  active: 0,
  orderBy: "F",
  toggledBar: "",
  showFullAxis: false,
  showExpandButton: [true, false, false, true, false, true],
  yAxisStartFrom: [30, 0, 0, 30, 0, 50],
  //     constants : {
  data: {
    url_dev: "//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/",
    url_acc: "//www.acceptance.ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/",
    url_prod: "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/",
    url_local: "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/",
    year: "2020",
    sex: [
      { id: "0", abbr: "M", indi_abbr: "M_Y16_74", label: "Male" },
      { id: "1", abbr: "F", indi_abbr: "F_Y16_74", label: "Female" },
    ],
    //     countries : [
    //             'EU28', 'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE',
    //             'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'HR', 'HU',
    //             'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL',
    //             'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK', 'UK'
    //     ],
    countriesEu: ["EU27_2020"],
    countriesOthers: [
      "AT",
      "BE",
      "BG",
      "CY",
      "CZ",
      "DE",
      "DK",
      "EE",
      "EL",
      "ES",
      "FI",
      "FR",
      "HR",
      "HU",
      "IE",
      "IT",
      "LT",
      "LU",
      "LV",
      "MT",
      "NL",
      "PL",
      "PT",
      "RO",
      "SE",
      "SI",
      "SK",
    ],
    countriesNonMembers: [],/*"UK"*/
    countriesEfta: [
      // 'NO', 'CH', 'IS'
    ],
    paramObj: [
      {
        // geo: 'dynamically constructed',
        // sex: 'dynamically constructed',
        age: "Y18-24",
        hhcomp: "HHC_20",
        wstatus: "POP",
        time: "2020",
        freq: "A",
      },
      {
        age: "Y25-49",
        hhcomp: "HHC_21",
        wstatus: "POP",
        time: "2020",
        freq: "A",
      },
      {
        age: "Y25-49",
        hhcomp: "HHC_22",
        wstatus: "POP",
        time: "2020",
        freq: "A",
      },
      {
        age: "Y_GE65",
        hhcomp: "HHC_20",
        wstatus: "POP",
        time: "2020",
        freq: "A",
      },
      {
        age: "Y_GE18",
        hhcomp: "HIC_30",
        wstatus: "POP",
        time: "2020",
        freq: "A",
      },
    ],
    lang: "en",
    bookmarkLink:
      "https://ec.europa.eu/eurostat/databrowser/view/LFST_HHINDWS__custom_2840857/default/table?lang=en",
    dataUrls: [
      "lfst_hhindws?format=JSON&lang=EN&wstatus=POP&hhcomp=TOTAL&sex=F&sex=M&sex=T&hhcomp=HHC_20&freq=A&age=Y18-24",
      "lfst_hhindws?format=JSON&lang=EN&wstatus=POP&hhcomp=TOTAL&sex=F&sex=M&sex=T&hhcomp=HHC_21&freq=A&age=Y25-49",
      "lfst_hhindws?format=JSON&lang=EN&wstatus=POP&hhcomp=TOTAL&sex=F&sex=M&sex=T&hhcomp=HHC_22&freq=A&age=Y25-49",
      "lfst_hhindws?format=JSON&lang=EN&wstatus=POP&hhcomp=TOTAL&sex=F&sex=M&sex=T&hhcomp=HHC_20&freq=A&age=Y_GE65",
      "lfst_hhindws?format=JSON&lang=EN&wstatus=POP&hhcomp=TOTAL&sex=F&sex=M&sex=T&hhcomp=HIC_30&freq=A&age=Y_GE18",
    ],
  },
};
