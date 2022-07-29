function appendCountries(selectTag, countries) {
    var a,
        n = countries.length,       
        sortedCountries = [];

    //add full name in selected locale
    for(a = 0, n = countries.length; a < n; a += 1) {
        var arr = [];
        arr[0] = countries[a];
        arr[1] = _(countries[a]);
        sortedCountries.push(arr);
    }
    sortedCountries.sort(function (a, b) {
        if (a[1] < b[1]) //sort string ascending
            return -1;
        if (a[1] > b[1])
            return 1;
        return 0;
    });

    for (a = 0; a < n; a +=1) {
        var opt = document.createElement('option');
        opt.setAttribute('value', sortedCountries[a][0]);
        if (sortedCountries[a][0] === countrySelected) {
            opt.setAttribute('selected', 'selected');
        }
        opt.setAttribute('data-content', '<img src="images/flags/' + sortedCountries[a][0] + '.png"> ' + sortedCountries[a][1]);
        opt.setAttribute('class', 'opt-countries');
        selectTag.appendChild(opt);
    }
}

function fillCountries() {
    var selectTag = document.getElementById('countries'),
    divider = document.createElement('option');

    divider.setAttribute('data-divider', 'true');
    divider.setAttribute('class', 'opt-countries');

    appendCountries(selectTag, countriesEu);
    selectTag.appendChild(divider.cloneNode(true)); 
    appendCountries(selectTag, countriesOthers);
    selectTag.appendChild(divider); 
    appendCountries(selectTag, countriesEfta);
}

/* When a country is selected in the dropdown list */
function updateCountry(country){
    countrySelected = country;

    localizeTitle(true, country);
    localizeFootnote(country);

   // if (barchartVisible) {
        drawBarchart(orderBy, active, false);
   // }

    printLifeline(lifebarWidth);
    
}
