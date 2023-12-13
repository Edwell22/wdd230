const countryURL = "https://lenorastevens.github.io/wdd230/scoots/data/countries.json"

async function getCountry() {
    try {
        const response = await fetch(countryURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            createCountries(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getCountry();

function createCountries(data) {
    const stateSelect = document.getElementById('country');

    stateSelect.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Select';
    stateSelect.add(defaultOption);

    for (const abbreviation in data) {
        const optionElement = document.createElement('option');
        optionElement.value = abbreviation;
        optionElement.text = data[abbreviation];
        stateSelect.add(optionElement);
    }
}

