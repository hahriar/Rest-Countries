const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countryHTML = countries.map(country => 
        getcountryHTML(country));
        console.log(countryHTML[0]);
}

const getcountryHTML = country => {
    return `
    <div>
        <h2>${country.name}</h2>
        <p>Capital: ${country.capital}</p>
        <img> src="${country.flag}"</img>
    </div>
    `
}
loadCountries();