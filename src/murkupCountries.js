export const murkupCountries = (array) => {
    return array.map(({ flags, name }) =>
        // console.log(flags);
        // console.log(element.name);
        `<li class="country-item"><img src="${flags.svg}" alt="${name.common} flag" class="country-flag"/><p class ="country-name">${name.common}</p>`
    ).join('');
}

export const markupCountri = ([{ name, capital, population, flags, languages }]) => {



    const values = Object.values(languages);

    return `<div class = "wrapper"><img src="${flags.svg}" alt="${name.common} flag" class="country-flag"/><p class ="country-name">${name.official}</p></div><p><span class="info">Capital: </span>${capital}</p><p><span class="info">Populationl: </span>${population}<p><span class="info">Languages: </span>${values}</p>`;
};

