const radios = document.querySelectorAll('input[type="radio"]');
const resetBtn = document.querySelector('button');
const billElement = document.getElementById('bill');
const peopleElement = document.getElementById('people');
const customTipElement = document.querySelector(".tip-input-number");
const personTipElement = document.getElementById('person-tip');
const totalPerPersonElement = document.getElementById('total-per-person');


customTipElement.addEventListener('focus', () => {
    clearTipInputs()
})

customTipElement.addEventListener('input', () => {
    showResults();
})

billElement.addEventListener('input', showResults)

peopleElement.addEventListener('input', showResults)


resetBtn.addEventListener('click', () => {
    clearTipInputs();
    billElement.value = '';
    peopleElement.value = '';
    personTipElement.innerText = '0.00';
    totalPerPersonElement.innerText = '0.00';
})


radios.forEach(function (radio) {
    radio.addEventListener('change', function () {

        selectedRadio(radio);
        showResults();

    });
});

function showResults() {
    if (peopleElement.value === '') {
        personTipElement.innerText = '0.00';
        totalPerPersonElement.innerText = '0.00';
    } else {
        personTipElement.innerText = tipPerPerson();
        totalPerPersonElement.innerText = totalPerPerson();
    }
}

function selectedRadio(radio) {
    clearTipInputs()

    // Adiciona a classe 'selected' ao elemento pai do input de rádio selecionado
    radio.parentNode.classList.add('selected');
}

function clearTipInputs() {
    document.querySelectorAll('.tip-container').forEach(function (container) {
        container.classList.remove('selected');
    })
    customTipElement.value = '';
}

function calculateTip() {
    let billString = billElement.value.replace(',', '.')
    let bill = Number(billString);
    let selectedRadioContainer = document.querySelector('.selected');
    let tipValue = selectedRadioContainer ? Number(selectedRadioContainer.childNodes[3].value) : null;
    let customTip = Number(customTipElement.value);
    let tipRate = (tipValue ? tipValue : customTip) / 100;
    let tip = bill * tipRate;

    return tip;
}

function tipPerPerson() {
    let people = Number(peopleElement.value);
    return (calculateTip() / people).toFixed(2);
}

function totalPerPerson() {
    let billString = billElement.value.replace(',', '.')
    let bill = Number(billString);
    let people = Number(peopleElement.value);
    let totalPerPerson = (bill + calculateTip()) / people;
    return totalPerPerson.toFixed(2);
}