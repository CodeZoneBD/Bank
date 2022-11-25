document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('click');
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmmount = parseFloat(depositInputText)

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmmount = parseFloat(depositTotalText);

    // balance upadate
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmmount + depositInputAmmount


    // upadte
    depositTotal.innerText = depositInputAmmount + depositTotalAmmount;

    // clear
    depositInput.value = '';

})

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('click');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmmount = parseFloat(withdrawInputText)


    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmmount = parseFloat(withdrawTotalText);


    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmmount - withdrawInputAmmount;


    // upadte
    withdrawTotal.innerText = withdrawInputAmmount + withdrawTotalAmmount;

    // clear
    withdrawInput.value = '';

})



