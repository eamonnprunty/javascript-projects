function displayType(country) {
    var countryType = country.getAttribute("data-country-type");
    alert(countryType + " is from " + country.innerHTML + country.id); 
}