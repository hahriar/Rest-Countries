const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => 
        getcountryHTML(country));
    container.innerHTML = countryHTML;
        console.log(countryHTML);
}

const getcountryHTML = country => {
    return `
    <div>
        <h2>${country.name}</h2>
        <p>Capital: ${country.capital}</p>
        <img src="${country.flag}">
    </div>
    `
}
loadCountries();