// currency-onemptied, currency-two, amount-one, amount-two;

const currencyOne = document.getElementById('currency-one');
const currencTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate(){
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch('https://api.exchangeratesapi.io/latest?base=${currOne}')

    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
amountTwo.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencTwo.value;
    currencTwo.value = temp;
    calculate();
})