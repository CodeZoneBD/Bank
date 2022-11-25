function getInput(inputId) {
    debugger
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmmount = parseFloat(inputText);

    //clear
    inputField.value = '';
    return inputAmmount;
}

function updateTotal(updateId, newdepositAmmount) {
    const depositTotal = document.getElementById(updateId);
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositAmmont = parseFloat(priviousDepositText)
    // privious ammount + new input ammount add
    depositTotal.innerText = priviousDepositAmmont + newdepositAmmount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balace-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText)
    return balanceTotalAmmount;
}


function updateBalance(ammount, isAdd) {
    const balanceTotal = document.getElementById('balace-input');
    const balanceTotalAmmount = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmmount + ammount;
    } else {
        balanceTotal.innerText = balanceTotalAmmount - ammount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const newdepositAmmount = getInput('deposit-input')
    if (newdepositAmmount > 9) {
        updateTotal('deposit-total', newdepositAmmount);
        updateBalance(newdepositAmmount, true)
        const error = document.getElementById('error1');
        error.innerText ='';

    }
    else{
        const error = document.getElementById('error1');
        error.innerText ='Minimum Deposit Required $10.00.';
    }
  

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmmount = getInput('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawInputAmmount > 4 && withdrawInputAmmount < currentBalance) {
        updateTotal('withdraw-total', withdrawInputAmmount);
        updateBalance(withdrawInputAmmount, false)
        const error = document.getElementById('error');
        error.innerText ='';
   
    }
    else if (withdrawInputAmmount > currentBalance) {
        const error = document.getElementById('error');
        error.innerText ='Sorry! Minimum Account Balance Required $10.00.';
        
    }
    else {
        const error = document.getElementById('error');
        error.innerText ='Please Enter at least $ 5.00';
    }
});




