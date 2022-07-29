# Women & Men Release Bundle Repository
In this repository you can find the releases (you will be able to find the basic sources somewhere else) for the women &amp; men digital publication made by [Eurostat](http://ec.europa.eu/eurostat).

This digital publication is hosted in Eurostat (latest version available under [Current Release](https://ec.europa.eu/eurostat/cache/infographs/womenmen/), but can also be fully translated and hosted by an NSI for example.

## Development
The file structure of publication:
When you open the folder in which you've unzipped the file you should see the following structure: 

Folder structure overview
```
- v0.9x
|-- womenmen
|   |-- l10n
|   |   |--  en.json
|   |   |--  de.json
|   |   |--  fr.json
|   |   |--  localisations.js
...
|-- |-- vis
|   |   |-- 00_00_00
|   |   |-- 00_01_01
|   |   |-- 01_02_02
|   |   |-- |-- l10n
|   |   |-- |-- |-- en.json
|   |   |-- |-- |-- de.json
|   |   |-- |-- |-- fr.json
|   |   |-- |-- |-- localisations.js
|   |   |-- fonts
...
```
The main navigation part is located under **womenmen**, which is also the home for the publication itself!

The __vis__ folder contains all the visualisation tools, currently those are:
```
basebubblechart: Women per 100 men
cod : Causes of death
education:Education levels
employmentpattern: Employment rate by number of children
habits: Cultural habits and social relations
household: Household types
internetactivities: Internet activities
internetpurchase: Internet purchases
lifeline: Lifeline of men and women in the EU
monthlywages: Monthly wages by profession
nutrition: Nutrition habits
selfperceived: Selfperceived health
quiz: publication quiz
```

The "svg" folder contains all visualisation tools, based on "pure SVG image". Currently those are:
```
dailyChildcare: Daily child care
dailyCooking: Daily cooking
genderPayGap: Gender pay gap
managers: Managers
partTimeWorkers: Part time workers
umemployment: Umemployment
```

## Translating

In order to build a fully translated version, you would have to first download one release bundle. This will be available via the folder **releases**.

How to find the localisation folder
The following steps have to be done for all visualisations contained in the "vis" folder and for the main navigation part in <womenmen>. 

To start with the translation process, we recommend to first translate the publication itself. All visualisations and the publication itself, have their own folder "l10n" which contains the files, that we have to work with.

Start with locating the "l10n" folder inside <womenmen> and then follow the described steps below. 



Folder structure for **womenmen**
```
- v0.9x
|-- womenmen
    |-- css
    |-- js
    |-- l10n
        |-- de.json
        |-- en.json
        |-- fr.json
        |-- localisations.js
   |-- vis
...
``` 

After that, repeat for all visualisations located in the **womenmen/vis/** folder, see "Folder structure for lifeline" below for an example of the Lifeline visualisation (it will be the same for all visualisations):
```
Folder structure for lifeline
- v0.9x
|-- womenmen
...
    |-- vis
        |--cod
        |--household
        |-- lifeline
            |-- l10n
            |-- fonts
            |-- css
            |-- js
            index.html
...
```

The most important folder for the translation would be the **l10n** folder

Step-by-step guide to add a language
For demonstration purpose, we will do it for the Lifeline visualisation, which can be found shown in "Folder structure for lifeline" above:

Open the file: "localisation.js" in the corresponding "l10n" of lifeline visualisation. All work which we will be doing now, is in this folder "l10n"!
The content of this file looks like this:

Content of localisations.js
1
2
3
4
5
6
7
8
9
10
11
12
13
14
//set value 'en' to default language to be used in your environment
window.defaultLanguage = 'en';
 
//add your language file to this list
window.availableLanguages = {
    'en': 'l10n/en.json',
    'de': 'l10n/de.json',
    'fr': 'l10n/fr.json'   
};
 
//set the initial selected country to display
//only available countries in data should be chosen
//country code in uppercase, i.e. DE, LU
window.countrySelected = 'EU28';




Add a new language to the application by modifying the block window.availableLanguages.

Let's say we want to add Spanish, then we have to add a line with the language code ("es") and the location of the file containing the translations ("l10n/es.json")
Be careful with the commas, all lines have a comma at the end, except for the last line.
Properly formatted, it looks like this: 

New language location
4
5
6
7
8
9
window.availableLanguages = {
    'en': 'l10n/en.json',
    'de': 'l10n/de.json',
    'fr': 'l10n/fr.json',
    'es': 'l10n/es.json'
};
Here we copy the file "en.json" to a file with the same name as the language code we've added under point (2), in our case we copy the file "en.json" to "es.json".


Next, we want to translate the content of the new "es.json" file.

For the lifeline tool, the original json file looks like this:

```
Localisation block
{
    "**** CONTENT ********": "*******DO NO TRANSLATE THIS LINE********",       
    "document.title": "Lifeline",
    "title_eu": "Lifeline of women and men in the",
    "title": "Lifeline of women and men in ",
    "number_delimiter": ".",
    "AGE_ELEM": "Start of compulsory education",
    "AGE_ELEM_TITLE": "Age at official entrance to compulsory education, 2015",
    "AGE_EMPLOY": "Start of first employment",
    "AGE_EMPLOY_TITLE": "Age at start of first employment, 2015",
    "AGE_LEAVEHOME": "Leaving parental home",
    "AGE_LEAVEHOME_TITLE": "Age at leaving parental home, 2015",
    "AGE_CHILD": "Birth of first child",
    "AGE_CHILD_TITLE": "Age at birth of first child, 2015",
    "AGE_MARRIAGE": "First marriage",
    "AGE_MARRIAGE_TITLE": "Age at first marriage, 2015",
    "AGE_MARRIAGE_FOOTNOTE": "Italy: data refer to 2014. United Kingdom: data refer to 2013.",
    "AGE_RETIRE": "Retirement",
    "AGE_RETIRE_TITLE": "Age at retirement, 2012",
    "LIFE_EXP": "Life expectancy",
    "LIFE_EXP_TITLE": "Life expectancy, years, 2015",
    "informations-header": "Information",
    "**** USER INTERFACE LABELS ********": "*******DO NO TRANSLATE THIS LINE********",
    "instructions0": "Select a Member State or an EFTA country to see the lifeline.",
    "instructions1": "Click on the images to get a comparison by country.",
    "instructions2": "Select a category to see the comparison between women and men for the EU and the Member States.",
    "instructions3": "In order to select data for only women or only men, uncheck/check in the legend below.",
    "instructions4_part1": "In order to compare the result between women and men, rank by clicking on the arrow (",
    "instructions4_part2": ") in the legend at the bottom.",   
    "instructions-header": "Instructions",
    "instruction_and_information": "Instructions and informations",
    "information0": "Italy: data refer to 2014 for the marriage indicator. United Kingdom: data refer to 2013 for the marriage indicator",
    "dataset-header": "Click on link to get to dataset",
    "dataset-icon": "Get link to dataset",
    "embed-icon": "Embed",
    "twitter-icon": "Twitter",
    "facebook-icon": "Facebook",
    "embed": "Embed this chart",       
    "close": "Close",     
    "F": "Women",
    "M": "Men",
    "btn_axis_0": "Expand to full scale",
    "btn_axis_1": "Shrink to reduced scale",
    "tooltip_barchart": "years",
    "back": "&#215; Back",
    "**** COUNTRIES ********": "*******DO NO TRANSLATE THIS LINE********",           
    "EU28": "EU",
    "AT": "Austria",
    "BE": "Belgium",
    "BG": "Bulgaria",
    "CH": "Switzerland",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DE": "Germany",
    "DK": "Denmark",
    "EE": "Estonia",
    "EL": "Greece",
    "ES": "Spain", 
    "FI": "Finland",
    "FR": "France",
    "HR": "Croatia",
    "HU": "Hungary",
    "IE": "Ireland",
    "IS": "Iceland",
    "IT": "Italy",
    "IT_footnote": "Italy: data refer to 2014 for the marriage indicator",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "MT": "Malta",
    "NL": "Netherlands",
    "NO": "Norway",
    "PL": "Poland",
    "PT": "Portugal",
    "RO": "Romania",
    "SE": "Sweden",
    "SI": "Slovenia",
    "SK": "Slovakia",
    "UK": "United Kingdom",
    "UK_footnote": "United Kingdom: data refer to 2013 for the marriage indicator"
}
```


You can open the file in an editor of your choice but we recommend to use this online editor http://www.jsoneditoronline.org/ 
Using this editor is quite easy, simply copy/paste the content of the json file in the left pane (or open the file from disk) , then click on the right arrow and translate the English text in the panel on the right.
After translation, click on the left arrow then save your file and the json file will be updated.

The relevant parts of the interface are marked with a red frame in the screenshot below.

The editor has also on on-line help button http://www.jsoneditoronline.org/doc/index.html

When this file is loaded into the online editor it look like the screenshot below, simply translate the English text in the right hand pane. See highlighted selection as an example.
 





IMPORTANT: If you choose to use notepad, please make sure, that the file will be saved in "UTF-8" format (if you use another editor, which is capable of saving the file in either 'UTF-8 without BOM' or 'UTF-8 with BOM', please choose 'UTF-8 without BOM'!), otherwise special character will be broken when the publication is opened in a Browser. The original "en.json" file, which we have copied is already in this correct format!
For example in "Notepad.exe" the "Save"-dialog should look like this: (click on image to enlarge)





Now the "l10n" folder for the lifeline visualisation should look like this:
```
Folder structure
|-- lifeline
    |-- l10n
        |-- en.json
        |-- es.json
        |-- de.json
        |-- fr.json
        |-- localisation.js
    |-- fonts
...
```
Before we can see the translations, we have to change the default language. Please follow the Step-by-step instructions "Changing default language" below.
IMPORTANT: The next instruction only works with Firefox Browser, all other browser will not display the page correctly. To use another browser the publication has to be served by a webserver! 
Once the default language has been changed, double click the "index.html" file and the tool should show the new default language.

You can also force any configured language to be shown by adding a parameter to the URL. But this will only work if the files are served by a web server and not if you open the index.html directly with a browser from your desktop.

To force the spanish language from a webserver simply add the lang parameter to the URL as follows:
htttp://\<domain\>/index.html?lang=es" 