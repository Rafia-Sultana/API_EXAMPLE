const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries();
const countriesDiv = document.getElementById('countries')

const displayCountries = (data) => {
    //console.log(data);
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = ` <h3> ${country.subregion}</h3>
        <p> ${country.capital} </p>
        <button onclick='loadCountryByName('${country.subregion}')> details </button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerText = country.subregion;
        // const p = document.createElement('p');
        // p.innerText = country.capital;

        // div.appendChild(h3);
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    })
    const loadCountryByName = name => {
        const url = `https://restcountries.com/v3.1/name/${name}`
        console.log(name);
    }
}