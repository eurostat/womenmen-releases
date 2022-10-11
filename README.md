# Women & Men Release Bundle Repository
In this repository you can find the releases (you will be able to find the basic sources somewhere else) for the women &amp; men digital publication made by [Eurostat](http://ec.europa.eu/eurostat).

This digital publication is hosted in Eurostat (latest version available under [Current Release](https://ec.europa.eu/eurostat/cache/infographs/womenmen/), but can also be fully translated and hosted by an NSI for example.
## Previous editions
Previous editions which were actually translated can be found here:

[2021 Edition](https://ec.europa.eu/eurostat/de/web/products-interactive-publications/product/-/asset_publisher/TrNFsyxI58VZ/content/ks-04-20-395?_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_TrNFsyxI58VZ_assetEntryId=11157158&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_TrNFsyxI58VZ)


## Development

## Downloading / Retrieval
The current release (2021) would be available under the folder **releases/v2021**

In order to download the current release, you would need to 

## File and folder structure

When you open the folder in which you've downloaded (cloned) the current release folder you should see the following structure: 

Folder structure overview
```
- v2021
|-- assets
|-- css
|-- images
|-- img
|-- js
|-- l10n
|   |--  en.json
|   |--  de.json
|   |--  fr.json
|   |--  localisations.js
|-- sass
|-- vis
|   |-- 00_00_00
|   |-- 00_01_01
|   |-- 01_02_02
|   |-- |-- l10n
|   |-- |-- |-- en.json
|   |-- |-- |-- de.json
|   |-- |-- |-- fr.json
|   |-- |-- |-- localisations.js
|   |-- fonts
files
...
```
The main navigation part is located under **womenmen**, which is also the home for the publication itself!

The __vis__ and __svg__ folder contains all the visualisation tools, currently those are:
```
00_00_00: Quiz
01_01_01: Lifeline 
01_02_01: Women per 100 men
01_02_02: Household types
01_03_01: Self-perceived health
01_03_02: Causes of death (currently disabled)
01_04_01: Overall life satisfaction
02_01_01: Education levels
02_02_01: Employment rate
02_02_02: Part-time workers
02_02_03: Unemployment
02_03_01: Managers
02_04_01: Gender pay gap
02_04_02: Mean hourly wages
03_01_01: nutrition habits and sports practice
03_02_01: Cultural habits and social relations (currently not shown)
03_03_01: Internet activities
03_03_02: online shopping
03_04_01: daily childcare
03_04_02: daily cooking
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

### How to find the localisation folder
The following steps have to be done for all visualisations contained in the **"vis"** folder, the **"svg"** folder and for the main navigation part in <womenmen> top level. 

To start with the translation process, we recommend to first translate the publication itself (folder ./l10n/). All visualisations and the publication itself, have their own folder "l10n" which contains the files, that we have to work with.

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

After that, repeat for all visualisations located in the **womenmen/vis/** folder and located under **womenmen/svg/**, see "Folder structure for lifeline" below for an example of the Lifeline visualisation (it will be the same for all visualisations):
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
    |-- svg
        |--dailyChildCare
        |...
...
```

The most important folder for the translation would be the **l10n** folder

### Step-by-step guide to add a language
For demonstration purpose, we will do it for the Lifeline visualisation, which can be found shown in "Folder structure for lifeline" above:

Open the file: "localisation.js" in the corresponding "l10n" of lifeline visualisation. All work which we will be doing now, is in this folder "l10n"!
The content of this file looks like this:

Content of localisations.js
```js
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
window.countrySelected = 'EU27_2020';
```

Add a new language to the application by modifying the block window.availableLanguages.

Let's say we want to add Spanish, then we have to add a line with the language code ("es") and the location of the file containing the translations ("l10n/es.json")
Be careful with the commas, all lines have a comma at the end, except for the last line.
Properly formatted, it looks like this: 

New language location
```js
window.availableLanguages = {
    'en': 'l10n/en.json',
    'de': 'l10n/de.json',
    'fr': 'l10n/fr.json',
    'es': 'l10n/es.json'
};
```
Here we copy the file "en.json" to a file with the same name as the language code we've added under point (2), in our case we copy the file "en.json" to "es.json".


Next, we want to translate the content of the new "es.json" file.

For the lifeline tool, the original json file looks like this:

```json
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

**IMPORTANT**: If you choose to use notepad, please make sure, that the file will be saved in "UTF-8" format (if you use another editor, which is capable of saving the file in either 'UTF-8 without BOM' or 'UTF-8 with BOM', please choose 'UTF-8 without BOM'!), otherwise special character will be broken when the publication is opened in a Browser. The original "en.json" file, which we have copied is already in this correct format!
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

### Translation specialty for quiz

The quiz has some structural differences compared to the visualisations. It has a dot-separated structure for the keys.

Example:

```json
"questions.1_1.question": "At what age do young women and men leave their parental home?",
"questions.1_1.choices.0": "Women at the age of 25, men at the age of 27",
"questions.1_1.choices.1":"Men at the age of 20, women at the age of 22",
"questions.1_1.choices.2":"Both at the age of 21",
...
}
```

In order to translate a question, you would have to translate the question and each choice. The choices are in the specified order. Please keep the order!

## Images containing text
Creating **"translated images"**
The various visualisation tools are accessed by clicking on an image in the publication.
The majority of these images contain text in English.

If you prefer to have the images with the text in the translated language, you will have to make screenshots of the translated visualisations.

You can use "Snipping tool" on Windows or any other tool you're familiar with to make the screenshot and save the result in .png format.
Regarding the size of the picture, the main parameter to take in account is the width.
Except for bloc-1a and bloc-2c, the width has been fixed to 1200 px in order to suit most screen sizes. The height of the image is given as reference only, but please try to match it.

To optimise download time of the images, we recommend a 72dpi resolution for the images as a higher resolution will also increase the file size.

The **"translated images"** will have to be stored in the location mentioned in the table below.
Make sure to use the correct language code in the file name when saving the images:

As an example, if the file name in English is bloc1a-lifeLine_en.png the file name of the Croatian version of the image has to be bloc1a-lifeLine_hr.png


The table below lists the images containing English text.
The icons and pictures without texts are not listed as they don't have to be re-done.

<womenmen> references the top directory of the publication

 Note: the texts contained in bloc-3.1 infographics are superposed on the image and are taken from the translation files, therefore they are not listed.


| Page url | Location and filename of the images | Size (px) |
| -------------|-----------------------------|--------|
| bloc-1a.html | <womenmen>/images/bloc-1/bloc1a-lifeLine_en.png            | 1400 x 596  |
| bloc-1b.html | <womenmen>/images/bloc-1/bloc1b-womenPer100Men_en.png      | 1200 x 726  |
| bloc-1b.html | <womenmen>/images/bloc-1/bloc1b-householTypes_en.png       | 1200 x 686  |
| bloc-1c.html | <womenmen>/images/bloc-1/bloc1c-causesOfDeath_en.png       | 1200 x 494  |
| bloc-1d.html | <womenmen>/images/bloc-1/bloc1d-overallSatisfaction_en.png | 1200 x 741  |
| bloc-2a.html | <womenmen>/images/bloc-2/bloc2a-educationLevels_en.png     | 1200 x 723  |
| bloc-2b.html | <womenmen>/images/bloc-2/bloc2b-employmentRates_en.png     | 1200 x 688  |
| bloc-2b.html | <womenmen>/images/bloc-2/bloc2b-partTimeWorkers_en.png     | 1200 x 648  |
| bloc-2b.html | <womenmen>/images/bloc-2/bloc2b-unemploymentRate_en.png    | 1200 x 659  |
| bloc-2c.html | <womenmen>/images/bloc-2/bloc2c-manager_en.jpg             | 1000 x 1582 |
| bloc-2d.html | <womenmen>/images/bloc-2/bloc2d-genderPayGap_en.png        | 1200 x 650  |
| bloc-2d.html | <womenmen>/images/bloc-2/bloc2d-meanHourlyWages_en.png     | 1200 x 982  |
| bloc-3b.html | <womenmen>/images/bloc-3/bloc3b-culturalHabits_en.png      | 1200 x 671  |
| bloc-3c.html | <womenmen>/images/bloc-3/bloc3c-internetActivities_en.png  | 1200 x 611  |
| bloc-3c.html | <womenmen>/images/bloc-3/bloc3c-onlineShopping_en.png      | 1200 x 638  |
| bloc-3d.html | <womenmen>/images/bloc-3/bloc3d-dailyChildcare_en.jpg      | 1200 x 903  |
| bloc-3d.html | <womenmen>/images/bloc-3/bloc3d-dailyCooking_en.jpg        | 1200 x 903  |


## Adding logo or name of NSI

Each page of the publication has a placeholder to either add the logo or the name of your NSI. The height of the logo image is fixed to 60 pixels.

To add the logo in the Spanish version:

copy the logo image in the directory <womenmen>/images/icones
edit the file <womenmen>/l10n/es.json
change the parameter: "imgYourLogo": "<img id=\"yourlogo\" src=\"images/icones/yourLogo.png\" />" and replace yourLogo.png with the file name of the NSI logo image
To add the name of NSI in Spanish version

edit the file <womenmen>/l10n/es.json
change the parameter: "imgYourLogo": "<img id=\"yourlogo\" src=\"images/icones/yourLogo.png\" />" and replace it with the name of the NSI:  "imgYourLogo": "Instituto Nacional de Estadistica"

## Changing default language 
Step-by-step guide to change the standard language to be displayed
If you plan to change the standard language from "en" to the language we just have added, follow those steps:

Once again, we have to open the "localisation.js" file contained in the l10n folder.
Change in Line 1 'en' to 'es'. The result should like this:

### Spanish as default language
```js
window.defaultLanguage = 'es';
```
Now you can open up the publication in a Browser and it should be using your newly added Spanish language by default.

### Static infographs - Change size
It can occur that your text doesn’t fit the designated area (picture 1)

In this case, you have the possibility to overide the default font size (picture 2).

In the svg folder structure :

Folder structure
```
|-- womenenmen
    |-- svg
        |-- dayliChildCare (or other one)
            |-- js   
                |-- constants.js
                ...
            ...
         ...
    ...
...
```
  
Open the constant.js in a text editor.

To locate the text you want to change, it is the item where the text (or texts ) key will contein the text key in the json file. 

For example, this configuration node who is handeling the "subtitle1" text :

```js
{
  type:"single",
  yPosition:93,
  xPosition:33,
  align:"left",
  class:"st9 st17 st19",
  text:"subtitle1",
  overridFontSize:"20px"  ==> Uncomment this line (remove "//" ) and set the desirated size
 },

is relative to the text from the json file « your_langage.json »

"subtitle1"     : "How are women and men involved?",

To preview the change, refresh the page and test it.

## Generating a full new quiz

On this page, we explain step by step how you can create custom questions and answers in the Women & Men Quiz.

For this, you need the newest package of the women & Men release (2018) - v2. This is only possible in the newest release due to some technical changes that were only performed for this release.

To customize the quiz questions and answers you have to go through two steps:

You have to configure some parameters for each question (see A below)
You have to add or translate the text for the questions and the proposed answers (see B below)
### Configure the questions

The configuration only defines the question code, the position of the correct answer in the list of proposed choices, the icon, an information link and the number of choices for this question.
The real text for the question and proposed answers is stored in the translation file (see B below)

Locate the questions configuration file. The file is residing here: "./config/questions.js". 
In this file, you have the following structure:
```js
window.questions = [{
        "question-key": "questions.1_1",
        "correct-answer-index": 0,
        "icon": "milestones.svg",
        "informationLink": "bloc-1a.html",
        "choices": 3
},
{
        "question-key": "questions.1_2",
        "correct-answer-index": 1,
        "icon": "household.svg",
        "informationLink": "bloc-1b.html",
        "choices": 2
} ... ]
```

In this example, we only list two questions for the sake of brevity and clarity.

Each question is one object in the array. If you want to add questions, make sure to create a new full object (one question) and separate each question object with a comma.

> In the following table, you will find the properties with explanations

| Property | Explanation | Possible Values|
|----------| ----------- | ---------------|
| question-key | *\[TEXT\]* This is the key of the question. This is used in the translation file ("./l10n/\[language_code\].json") to identify the question and give the translation for the question itself and the answers. You need to make sure to keep the structure: questions.*\[section_code\]*. You can have more or less questions per section, and you can even have a different number of sections.|	questions.1_1 |
| correct-answer-index | *\[NUMBER]* This indicates, which is the correct answer for the given question. Please note, that this is a zero-based number. If the first answer is the correct one, this would have to be "0". |	0, 2 etc. |
|icon	| [TEXT] This is the icon to be used for the question. Can be any image in the image folder. If needed, you can even add images there. |	milestones.svg |
|informationLink | [TEXT] This is the link, where you can read more information. It is only possible to link to a page within the publication itself. Just give the name of the html page you want to link to.	|bloc-2a.html|
|choices	| [NUMBER] This indicates the total number of choices for this question. |	3 |

<br/>
You can add / remove / edit any number of question in the array window.questions. It is just important to know, that the order of questions will be the same order as in the array. It does not use the section or index to order the questions. If you want to squeeze a question in between, simply put the object between two existing question objects.|

### Translate question and answers
You need to locate the translation file for your language. ("./l10n/[language].json) - for example "./l10n/en.json" for the english translation and add or remove what is needed:

add a line for your new question with the key "blocks.[section_code].title"="Translation of the question header title here"
add a line with the key "questions.[section_code].question"="Translation of your question here"
add a line with the key "questions.[section_code].choices.[index].answer" = "Translation of choice here" 

Example for the question configured as questions.1_1 and questions.1_2 from the code example above:
```json
[...]
"blocks.1_1.title": "Important milestones in life",
"questions.1_1.question": "At what age do young women and men leave their parental home?",
"questions.1_1.choices.0.answer": "Women at the age of 25, men at the age of 27",
"questions.1_1.choices.1.answer":"Men at the age of 20, women at the age of 22",
"questions.1_1.choices.2.answer":"Both at the age of 21",
"blocks.1_2.title": "Living together",
"questions.1_2.question": "In the EU, there are more young men aged up to 18 than women. This sentence is:",
"questions.1_2.choices.0.answer": "Wrong",
"questions.1_2.choices.1.answer": "Right",
[...]
```
