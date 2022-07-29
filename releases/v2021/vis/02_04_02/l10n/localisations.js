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