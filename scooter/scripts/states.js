const statesURL = "https://lenorastevens.github.io/wdd230/scoots/data/states.json"

async function getStates() {
    try {
        const response = await fetch(statesURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            createStates(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getStates();

function createStates(data) {
    const stateSelect = document.getElementById('state');

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

