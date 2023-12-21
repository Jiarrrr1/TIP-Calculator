const totalBill = document.querySelector('#totalBill');
const satisfaction = document.querySelector('#status');
const guestValue = document.querySelector('#totalGuest');
const calcTip = document.querySelector('.calc-tip');
const outputReset = document.querySelector('.reset');
const tipPercent = document.querySelector('.percentage');
const tipTotal = document.querySelector('.tip-value');
const total = document.querySelector('.total-amount');

calcTip.addEventListener('click', function () {
    const bill = Math.fround(totalBill.value);
    const percent = satisfaction.value;
    const guestNumber = guestValue.value;
    
    const tipAmount = calcTipValue(percent, bill);
    const totalGuest = Math.fround(tipAmount / guestNumber);
    const totalAmount = tipAmount + bill;

    tipPercent.textContent = `$ ${tipAmount}`;
    tipTotal.textContent = `$ ${totalGuest}`;
    total.textContent = `$ ${totalAmount}`;
    console.log(tipAmount);
    console.log(totalGuest);
    console.log(totalAmount);

});

outputReset.addEventListener('click', function () {
    tipPercent.textContent = ``;
    tipTotal.textContent = ``;
    total.textContent = ``;

    totalBill.value = ``;
    satisfaction.value = 25;
    guestValue.value = ``;
});



function calcTipValue(percent, bill) {
    
    if (percent == 25) {
        return 0.25 * bill;
    } else if (percent == 20) {
        return 0.20 * bill;
    } else if (percent == 15) {
        return 0.15 * bill;
    } else if (percent == 10) {
        return 0.10 * bill;
    } else {
        return 0.05 * bill;
    }
}