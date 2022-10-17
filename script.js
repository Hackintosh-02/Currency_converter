// currency-onemptied, currency-two, amount-one, amount-two;

const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate(){
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/5eaa175819fa922bdf922f3a/latest/${currOne}`)
    .then(res => res.json())    
    .then(data => {
        console.log("HI");
        console.log(data);
        const rateE = data.conversion_rates[currTwo];
        rate.innerText = `1 ${currOne} = ${rateE} ${currencyTwo}`;
        amountTwo.value = (amountOne.value * rateE).toFixed(2);
    });
}

currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
amountTwo.addEventListener('input',calculate);

// calculate();
swap.addEventListener('click',()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    currencTwo.value = temp;
    calculate();
})
