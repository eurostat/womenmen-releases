window.appData = 
{
   "ageing" : /* Ageing Europe */
      
          {
        "components":["barchart", "pie", "legend", "sorting"],
        "texts": {
            "titleDocumentKey" : "ageing.document.title",
            "titleKey" : "ageing.title",
            "subtitleKey": "",
            "subtitleUnitKey": "ageing.secondTitleLegend", 
            "tooltip_unit": "ageing.tooltip.unit",   

            "footerNoteDataNA" : "ageing.footerNoteDataNA",
            "footerNoteKey1" : "ageing.footerNote1",
            "footerNoteKey2" : "ageing.footerNote2",
            "footerNoteKey3" : "ageing.footerNote3",         
        },
        "bookmarkLink": "https://ec.europa.eu/eurostat/databrowser/bookmark/6c2d0049-a080-4071-b873-75cbe2b8ded9?lang=en",
        "nomenclatureLink":"",
        "sharing": {
            "twitter_hashtag":"Eurostat #elderly",
            "twitter_textKey":"ageing.sharing.twitter"
        },
        "useBarPattern":true,
        "publication": "Ageing Europe",
        "publicationId": "Ageing",
        "chapter" : "1.1 1",
        "time" : "2019",
        "table" : "hlth_silc_01",
        "urlParams":"hlth_silc_01?sex=F&sex=M&unit=PC&wstatus=POP&levels=B_VB&levels=FAIR&levels=VG_G&age=Y_GE65&time=2019",
        "params" : {
          "sex" : [ "F","M" ],
          "unit" : ["PC"],
          "status" : ["POP"],
          "levels" : ["B_VB", "FAIR", "VG_G"],
          "age": ["Y_GE65"]
        },
        "levels": {
            "paramName":"levels",
            "levels":{
                "ValueLow": 
                        {
                            "paramName":"B_VB",
                            "textShortKey":"ageing.valueLowShort",
                            "textLongKey":"ageing.valueLowLong",
                            "color":"#E6E6E6",
                        },
                "ValueMedium":
                        {   "paramName":"FAIR",
                            "textShortKey":"ageing.valueMediumShort",
                            "textLongKey":"ageing.valueMediumLong",
                            "color":"#E6E6E6",
                        },
                "ValueHigh":
                        {   "paramName":"VG_G",
                            "textShortKey":"ageing.valueHighShort",
                            "textLongKey":"ageing.valueHighLong",
                            "color":"#E6E6E6",
                        }
                        
                }
        },
        "sides": {
            "paramName":"sex",
            "sides":{
                "Left":
                    {
                        "paramName":"F",
                        "textKey":"ageing.title.women",
                        "hide_key":"ageing.hide_F",
                        "show_key":"ageing.show_F",
                        "sort_key":"ageing.sort_F",
                        "tooltip_key": "ageing.F",
                        "color": "#F26522",
                        "colorSelected": "url(#patternLeft)",
                        "icon":"img/First-employment_W.png"

                    },
                "Right":
                    {
                        "paramName":"M",
                        "textKey":"ageing.title.men",
                        "hide_key":"ageing.hide_M",
                        "show_key":"ageing.show_M",
                        "sort_key":"ageing.sort_M",
                        "tooltip_key": "ageing.M",
                        "color": "#286FB7",
                        "colorSelected": "url(#patternRight)",
                        "icon":"img/First-employment_M.png"

                    }
            }
        }
    },
    "womenmen" : /* Ageing Europe */
    {
        "components":["barchart", "pie", "legend", "sorting"],
        "texts": {
            "titleDocumentKey" : "womenmen.document.title",
            "titleKey" : "womenmen.title",
            "subtitleKey": "",
            "subtitleUnitKey": "womenmen.secondTitleLegend",    
            "tooltip_unit": "womenmen.tooltip.unit",

            "footerNoteDataNA" : "womenmen.footerNoteDataNA",
            "footerNoteKey1" : "womenmen.footerNote1",
            "footerNoteKey2" : "womenmen.footerNote2",
            "footerNoteKey3" : "womenmen.footerNote3",         
        },
        "bookmarkLink": "https://ec.europa.eu/eurostat/databrowser/bookmark/1e41534c-23a1-48a7-a6b3-cd69444d3001?lang=en",
        "nomenclatureLink":"http://ec.europa.eu/eurostat/ramon/other_documents/isced_2011/index.cfm?TargetUrl=DSP_ISCED_2011",
        "sharing": {
            "twitter_hashtag":"Eurostat",
            "twitter_textKey":"womenmen.sharing.twitter"
        },
        "useBarPattern":false,
        "publication": "Women & Men",
        "publicationId": "Womenmen",
        "chapter" : "1.1 1",
        "period" : "2020",
        "table" : "hlth_silc_01",
        "urlParams":"edat_lfse_03?sex=F&sex=M&sex=T&unit=PC&time=2020&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8&age=Y25-64",
        "params" : {
            "sex" : [ "F","M" ],
            "unit" : ["PC"],
            "isced11" : ["ED0-2", "ED3_4", "ED5-8"],
            "age": ["Y25-64"]
        },
        "levels": {
            "paramName":"isced11",
            "levels":{
                "ValueLow": 
                        {
                            "paramName":"ED5-8",
                            "textShortKey":"womenmen.valueLowShort",
                            "textLongKey":"womenmen.valueLowLong",
                            "color":"#E6E6E6",
                        },
                "ValueMedium":
                        {   "paramName":"ED3_4",
                            "textShortKey":"womenmen.valueMediumShort",
                            "textLongKey":"womenmen.valueMediumLong",
                            "color":"#E6E6E6",
                        },
                "ValueHigh":
                        {   "paramName":"ED0-2",
                            "textShortKey":"womenmen.valueHighShort",
                            "textLongKey":"womenmen.valueHighLong",
                            "color":"#E6E6E6",
                        }
                }
        },
        "sides": {
            "paramName":"sex",
            "sides":{
                "Left":
                    {
                        "paramName":"F",
                        "textKey":"womenmen.title.women",
                        "hide_key":"womenmen.hide_F",
                        "show_key":"womenmen.show_F",
                        "sort_key":"womenmen.sort_F",
                        "tooltip_key": "womenmen.F",
                        "color": "#F7A700",
                        "colorSelected": "#faca66",
                        "icon":"img/First-employment_W_WM.png"

                    },
                "Right":
                    {
                        "paramName":"M",
                        "textKey":"womenmen.title.men",
                        "hide_key":"womenmen.hide_M",
                        "show_key":"womenmen.show_M",
                        "sort_key":"womenmen.sort_M",
                        "tooltip_key": "womenmen.M",
                        "color": "#2C69B2",
                        "colorSelected": "#aac3e0",
                        "icon":"img/First-employment_M_WM.png"

                    }
            }
        }
    },   
    "hie_01_02_01" : /* Housing in Europe */
    {
        "components":["barchart"],
        "texts": {
            "titleDocumentKey" : "hie_01_02_01.document.title",
            "titleKey" : "hie_01_02_01.title",
            "tooltip_unit": "hie_01_02_01.tooltip.unit",
            "subtitleKey": "",
            "subtitleUnitKey": "hie_01_02_01.secondTitleLegend",    

            "footerNoteDataNA" : "hie_01_02_01.footerNoteDataNA",
            "footerNoteKey1" : "hie_01_02_01.footerNote1",
            "footerNoteKey2" : "hie_01_02_01.footerNote2",
            "footerNoteKey3" : "hie_01_02_01.footerNote3",         
        },
        "bookmarkLink": "https://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-057104_QID_6E22A722_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;UNIT,L,Z,0;BUILDING,L,Z,1;TENURE,L,Z,2;INDICATORS,C,Z,3;&zSelection=DS-057104INDICATORS,OBS_FLAG;DS-057104BUILDING,TOTAL;DS-057104TENURE,TOTAL;DS-057104UNIT,AVG;&rankName1=BUILDING_1_2_-1_2&rankName2=UNIT_1_2_-1_2&rankName3=INDICATORS_1_2_-1_2&rankName4=TENURE_1_2_-1_2&rankName5=TIME_1_0_0_0&rankName6=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23",
        "nomenclatureLink":"",
        "sharing": {
            "twitter_hashtag":"Eurostat #housing",
            "twitter_textKey":"hie_01_02_01.sharing.twitter"
        },
        "useBarPattern":false,
        "publication": "Housing In Europe",
        "publicationId": "hie",
        "chapter" : "1.1 1",
        "period" : "2018",
        "table" : "ilc_lvho03",
        "urlParams":"ilc_lvho03?building=TOTAL&unit=AVG&tenure=TOTAL",
        "params" : {
            "time" : [ "2018" ],
            "building" : ["TOTAL"],
            "tenure" : ["TOTAL"],

        },
        "levels": {
            "paramName":"na_item",
            "levels":{
                "ValueHigh": 
                        {
                            "paramName":"PLI_EU27_2020",
                            "textShortKey":"hie_01_02_01.valueLowShort",
                            "textLongKey":"hie_01_02_01.valueLowLong",
                            "color":"#286FB7",
                        }
                }
        },
        "sides": {
            "paramName":"tenure",
            "sides":{
                "Left":
                    {
                        "paramName":"TOTAL",
                        "textKey":"hie_01_02_01.title.men",
                        "hide_key":"hie_01_02_01.hide_M",
                        "show_key":"hie_01_02_01.show_M",
                        "sort_key":"hie_01_02_01.sort_M",
                        "color": "#FAA61A",
                        "colorSelected": "#aac3e0",
                        "icon":"img/First-employment_M_WM.png"

                    },
               
            },
            
        }
    },     
    "hie_01_02_02" : /* Housing in Europe */
    {
        "components":["barchart"],
        "texts": {
            "titleDocumentKey" : "hie_01_02_02.document.title",
            "titleKey" : "hie_01_02_02.title",
            "tooltip_unit": "hie_01_02_02.tooltip.unit",
            "subtitleKey": "",
            "subtitleUnitKey": "hie_01_02_02.secondTitleLegend",    

            "footerNoteDataNA" : "hie_01_02_02.footerNoteDataNA",
            "footerNoteKey1" : "hie_01_02_02.footerNote1",
            "footerNoteKey2" : "hie_01_02_02.footerNote2",
            "footerNoteKey3" : "hie_01_02_02.footerNote3",         
        },
        "bookmarkLink": "https://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-057120_QID_6BC80614_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;UNIT,L,Z,0;INDICATORS,C,Z,1;&zSelection=DS-057120UNIT,AVG;DS-057120INDICATORS,OBS_FLAG;&rankName1=UNIT_1_2_-1_2&rankName2=INDICATORS_1_2_-1_2&rankName3=TIME_1_0_0_0&rankName4=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23",
        "nomenclatureLink":"",
        "sharing": {
            "twitter_hashtag":"Eurostat #housing",
            "twitter_textKey":"hie_01_02_02.sharing.twitter"
        },
        "useBarPattern":false,
        "publication": "Housing In Europe",
        "publicationId": "hie",
        "chapter" : "1.1 1",
        "period" : "2018",
        "table" : "ilc_lvph01",
        "urlParams":"ilc_lvph01?unit=AVG",
        "params" : {
            "time" : [ "2018" ],
            "unit" : ["AVG"]
        },
        "levels": {
            "paramName":"na_item",
            "levels":{
                "ValueHigh": 
                        {
                            "paramName":"PLI_EU27_2020",
                            "textShortKey":"hie_01_02_02.valueLowShort",
                            "textLongKey":"hie_01_02_02.valueLowLong",
                            "color":"#286FB7",
                        }
                }
        },
        "sides": {
            "paramName":"unit",
            "sides":{
                "Left":
                    {
                        "paramName":"AVG",
                        "color": "#286FB7",
                        "colorSelected": "#aac3e0"
                    },
               
            },
            
        }
    },
    "hie_01_03_03" : /* Housing in Europe */
    [
        {
            "components":["barchart"],
            "texts": {
                "titleDocumentKey" : "hie_01_03_03_1.document.title",
                "titleKey" : "hie_01_03_03_1.title",
                "listKey" : "hie_01_03_03_1.list.title",
                "tooltip_unit": "hie_01_03_03_1.tooltip.unit",
                "subtitleKey": "",
                "subtitleUnitKey": "hie_01_03_03_1.secondTitleLegend",    

                "footerNoteDataNA" : "hie_01_03_03_1.footerNoteDataNA",
                "footerNoteKey1" : "hie_01_03_03_1.footerNote1",
                "footerNoteKey2" : "hie_01_03_03_1.footerNote2",
                "footerNoteKey3" : "hie_01_03_03_1.footerNote3",         
            },
            "bookmarkLink": "https://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-057120_QID_6BC80614_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;UNIT,L,Z,0;INDICATORS,C,Z,1;&zSelection=DS-057120UNIT,AVG;DS-057120INDICATORS,OBS_FLAG;&rankName1=UNIT_1_2_-1_2&rankName2=INDICATORS_1_2_-1_2&rankName3=TIME_1_0_0_0&rankName4=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23",
            "nomenclatureLink":"",
            "sharing": {
                "twitter_hashtag":"Eurostat #housing",
                "twitter_textKey":"hie_01_03_03.sharing.twitter"
            },
            "useBarPattern":false,
            "publication": "Housing In Europe",
            "publicationId": "hie",
            "chapter" : "1.1 1",
            "period" : "2018",
            "table" : "ilc_mdho01",
            "urlParams":"ilc_mdho01?hhtyp=TOTAL&sex=T&incgrp=TOTAL&unit=PC&age=TOTAL",
            "params" : {
                "time" : [ "2018" ],
                "hhtyp" : ["TOTAL"]
            },
            "levels": {
                "paramName":"hhtyp",
                "levels":{
                    "ValueHigh": 
                            {
                                "paramName":"TOTAL",
                                "textShortKey":"hie_01_03_03_1.valueLowShort",
                                "textLongKey":"hie_01_03_03_1.valueLowLong",
                                "color":"#286FB7",
                            }
                    }
            },
            "sides": {
                "paramName":"hhtyp",
                "sides":{
                    "Left":
                        {
                            "paramName":"TOTAL",
                            "color": "#286FB7",
                            "colorSelected": "#aac3e0"
                        },
                
                },
                
            }
        },
        {
            "components":["barchart"],
            "texts": {
                "titleDocumentKey" : "hie_01_03_03_2.document.title",
                "titleKey" : "hie_01_03_03_2.title",
                "listKey" : "hie_01_03_03_2.list.title",
                "tooltip_unit": "hie_01_03_03_2.tooltip.unit",
                "subtitleKey": "",
                "subtitleUnitKey": "hie_01_03_03_2.secondTitleLegend",    

                "footerNoteDataNA" : "hie_01_03_03_2.footerNoteDataNA",
                "footerNoteKey1" : "hie_01_03_03_2.footerNote1",
                "footerNoteKey2" : "hie_01_03_03_2.footerNote2",
                "footerNoteKey3" : "hie_01_03_03_2.footerNote3",         
            },
            "bookmarkLink": "https://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-057120_QID_6BC80614_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;UNIT,L,Z,0;INDICATORS,C,Z,1;&zSelection=DS-057120UNIT,AVG;DS-057120INDICATORS,OBS_FLAG;&rankName1=UNIT_1_2_-1_2&rankName2=INDICATORS_1_2_-1_2&rankName3=TIME_1_0_0_0&rankName4=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23",
            "nomenclatureLink":"",
            "sharing": {
                "twitter_hashtag":"Eurostat #housing",
                "twitter_textKey":"hie_01_03_03.sharing.twitter"
            },
            "useBarPattern":false,
            "publication": "Housing In Europe",
            "publicationId": "hie",
            "chapter" : "1.1 1",
            "period" : "2018",
            "table" : "ilc_mdho05",
            "urlParams":"ilc_mdho05?hhtyp=TOTAL&sex=T&incgrp=TOTAL&unit=PC&age=TOTAL",
            "params" : {
                "time" : [ "2018" ],
                "hhtyp" : ["TOTAL"]
            },
            "levels": {
                "paramName":"incgrp",
                "levels":{
                    "ValueHigh": 
                            {
                                "paramName":"TOTAL",
                                "textShortKey":"hie_01_03_03_2.valueLowShort",
                                "textLongKey":"hie_01_03_03_2.valueLowLong",
                                "color":"#286FB7",
                            }
                    }
            },
            "sides": {
                "paramName":"incgrp",
                "sides":{
                    "Left":
                        {
                            "paramName":"TOTAL",
                            "color": "#286FB7",
                            "colorSelected": "#aac3e0"
                        },
                
                },
                
            }
        },
        {
            "components":["barchart"],
            "texts": {
                "titleDocumentKey" : "hie_01_03_03_3.document.title",
                "titleKey" : "hie_01_03_03_3.title",
                "listKey" : "hie_01_03_03_3.list.title",
                "tooltip_unit": "hie_01_03_03_3.tooltip.unit",
                "subtitleKey": "",
                "subtitleUnitKey": "hie_01_03_03_3.secondTitleLegend",    

                "footerNoteDataNA" : "hie_01_03_03_3.footerNoteDataNA",
                "footerNoteKey1" : "hie_01_03_03_3.footerNote1",
                "footerNoteKey2" : "hie_01_03_03_3.footerNote2",
                "footerNoteKey3" : "hie_01_03_03_3.footerNote3",         
            },
            "bookmarkLink": "https://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-057120_QID_6BC80614_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;UNIT,L,Z,0;INDICATORS,C,Z,1;&zSelection=DS-057120UNIT,AVG;DS-057120INDICATORS,OBS_FLAG;&rankName1=UNIT_1_2_-1_2&rankName2=INDICATORS_1_2_-1_2&rankName3=TIME_1_0_0_0&rankName4=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23",
            "nomenclatureLink":"",
            "sharing": {
                "twitter_hashtag":"Eurostat #housing",
                "twitter_textKey":"hie_01_03_03.sharing.twitter"
            },
            "useBarPattern":false,
            "publication": "Housing In Europe",
            "publicationId": "hie",
            "chapter" : "1.1 1",
            "period" : "2018",
            "table" : "ilc_mdes01",
            "urlParams":"ilc_mdes01?hhtyp=TOTAL&incgrp=TOTAL&unit=PC",
            "params" : {
                "time" : [ "2018" ],
                "hhtyp" : ["TOTAL"]
            },
            "levels": {
                "paramName":"hhtyp",
                "levels":{
                    "ValueHigh": 
                            {
                                "paramName":"TOTAL",
                                "textShortKey":"hie_01_03_03_3.valueLowShort",
                                "textLongKey":"hie_01_03_03_3.valueLowLong",
                                "color":"#286FB7",
                            }
                    }
            },
            "sides": {
                "paramName":"hhtyp",
                "sides":{
                    "Left":
                        {
                            "paramName":"TOTAL",
                            "color": "#286FB7",
                            "colorSelected": "#aac3e0"
                        },
                
                },
                
            }
        }
    ],
    "hie_02_01_01" : /* Housing in Europe */
    {
        "components":["barchart", "sorting"],
        "texts": {
            "titleDocumentKey" : "hie_02_01_01.document.title",
            "titleKey" : "hie_02_01_01.title",
            "tooltip_unit": "hie_02_01_01.tooltip.unit",
            "subtitleKey": "",
            "subtitleUnitKey": "hie_02_01_01.secondTitleLegend",    

            "footerNoteDataNA" : "hie_02_01_01.footerNoteDataNA",
            "footerNoteKey1" : "hie_02_01_01.footerNote1",
            "footerNoteKey2" : "hie_02_01_01.footerNote2",
            "footerNoteKey3" : "hie_02_01_01.footerNote3",         
        },
        "bookmarkLink": "https://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-057120_QID_6BC80614_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;UNIT,L,Z,0;INDICATORS,C,Z,1;&zSelection=DS-057120UNIT,AVG;DS-057120INDICATORS,OBS_FLAG;&rankName1=UNIT_1_2_-1_2&rankName2=INDICATORS_1_2_-1_2&rankName3=TIME_1_0_0_0&rankName4=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23",
        "nomenclatureLink":"",
        "sharing": {
            "twitter_hashtag":"Eurostat #housing",
            "twitter_textKey":"hie_02_01_01.sharing.twitter"
        },
        "useBarPattern":false,
        "publication": "Housing In Europe",
        "publicationId": "hie",
        "chapter" : "1.1 1",
        "period" : "2018",
        "table" : "prc_ppp_ind",
        "urlParams":"prc_ppp_ind?na_item=PLI_EU27_2020&ppp_cat=A0104",
        "params" : {
            "time" : [ "2009", "2018" ],
            "unit" : ["AVG"]
        },
        "levels": {
            "paramName":"na_item",
            "levels":{
                "ValueHigh": 
                        {
                            "paramName":"PLI_EU27_2020",
                            "textShortKey":"hie_02_01_01.valueLowShort",
                            "textLongKey":"hie_02_01_01.valueLowLong",
                            "color":"#286FB7",
                        }
                }
        },
        "sides": {
            "paramName":"time",
            "sides":{
                "Left":
                {
                    "paramName":"2009",
                    "color": "#FAA61A",
                    "colorSelected": "#aac3e0",
                    "textKey":"hie_01_02_01.title.left",
                    "tooltip_key": "hie_01_02_01.title.left",
                    "hide_key":"hie_01_02_01.hide_L",
                    "show_key":"hie_01_02_01.show_L",
                    "sort_key":"hie_01_02_01.sort_L"
                },
                "Right":
                {
                    "paramName":"2018",
                    "color": "#286FB7",
                    "colorSelected": "#aac3e0",
                    "textKey":"hie_01_02_01.title.right",
                    "tooltip_key": "hie_01_02_01.title.right",
                    "hide_key":"hie_01_02_01.hide_R",
                    "show_key":"hie_01_02_01.show_R",
                    "sort_key":"hie_01_02_01.sort_R"
                },
               
            },
            
        }
    },
}  
