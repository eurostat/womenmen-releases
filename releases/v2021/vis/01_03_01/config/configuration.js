window.configuration = {
  active: 0,
  orderBy: 'F',
  toggledBar: '',
  showFullAxis: false,
  showExpandButton: [true, false, false],
  yAxisStartFrom: [50, 0, 0],
  data: {
    url_dev: '//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
    url_acc: '//www.acceptance.ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
    url_prod: '//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
    url_local: '//ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
    year: '2020',
    sex: [
      { id: '0', abbr: 'M', label: 'Male' },
      { id: '1', abbr: 'F', label: 'Female' },
    ],
    countriesEu: ['EU27_2020'],
    countriesOthers: [
      'AT',
      'BE',
      'BG',
      'CY',
      'CZ',
      'DE',
      'DK',
      'EE',
      'EL',
      'ES',
      'FI',
      'FR',
      'HR',
      'HU',
      'IE',
      'IT',
      'LT',
      'LU',
      'LV',
      'MT',
      'NL',
      'PL',
      'PT',
      'RO',
      'SE',
      'SI',
      'SK',
    ],/*
    countriesNonMembers: ['UK'],*/
    countriesNonMembers: [],
    countriesEfta: ['NO', 'CH'],
    paramObj: [
      {
        // geo: 'dynamically constructed',
        // sex: 'dynamically constructed',
        age: 'Y16-44',
        unit: 'PC',
        wstatus: 'POP',
        levels: 'VG_G',
        time: '2020',
      },
      {
        age: 'Y45-64',
        unit: 'PC',
        wstatus: 'POP',
        levels: 'VG_G',
        time: '2020',
      },
      {
        age: 'Y_GE65',
        unit: 'PC',
        wstatus: 'POP',
        levels: 'VG_G',
        time: '2020',
      },
    ],
    dataUrlMapping: [0, 0, 0], //which rawdata/url to use for the different categories
    lang: 'en',
    bookmarkLink:
      'https://ec.europa.eu/eurostat/databrowser/bookmark/8eef1c57-8bae-4423-bf25-8118435f99c5?lang=en&page=time:2020',
    dataUrls: [
      'hlth_silc_01?time=2020&time=2019&wstatus=POP&sex=F&sex=M&geo=AT&geo=BE&geo=BG&geo=CH&geo=CY&geo=CZ&geo=DE&geo=DK&geo=EE&geo=EL&geo=ES&geo=EU28&geo=FI&geo=FR&geo=HR&geo=HU&geo=IE&geo=IS&geo=IT&geo=LT&geo=LU&geo=LV&geo=MT&geo=NL&geo=NO&geo=PL&geo=PT&geo=RO&geo=SE&geo=SI&geo=SK&precision=1&levels=VG_G&age=Y16-44&age=Y45-64&age=Y_GE65',
    ],
  },
}
