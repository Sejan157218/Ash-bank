// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposit
    const amountInput  = document.getElementById('input-deposit');
    const amountValue = amountInput.value;
    
    // console.log(amountValue);
    const amountDeposit  = document.getElementById('total-deposit');
    
    // console.log(amountDeposit);
    const previousAmount = amountDeposit.innerText;
    const newAmountDeposit = parseFloat(previousAmount) + parseFloat(amountValue);
    amountDeposit.innerText = newAmountDeposit;
    // console.log(newAmountDeposit); 
    // with total
    const totalAmount = document.getElementById('total-amount');
    const previousTotal = totalAmount.innerText;
    const newTotal = parseFloat(previousTotal) + parseFloat(amountValue);
    totalAmount.innerText = newTotal;
    // console.log(totalAmount);
    // clear input
    amountInput.value = '';
})


// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click',function(){
    
    const amountWithdraw = document.getElementById('input-withdraw');
    const amountWithdrawvalue = amountWithdraw.value;
    // console.log(amountWithdrawvalue);
    const totalWithdraw = document.getElementById('totl-withdraw');
    const totalWithdrawInnertext = totalWithdraw.innerText;
    const totalWithdrawAmount = parseFloat(amountWithdrawvalue) + parseFloat(totalWithdrawInnertext);
    totalWithdraw.innerText = totalWithdrawAmount; 
    // console.log(totalWithdraw);
    // total balance after withdraw
    const totalblanceAfterWithfraw = document.getElementById('total-amount');
    const WithfrawBalanceInnertext = totalblanceAfterWithfraw.innerText;
    const blanceAfterWithfraw = parseFloat(WithfrawBalanceInnertext) - parseFloat(amountWithdrawvalue);
    // console.log(blanceAfterWithfraw);
    totalblanceAfterWithfraw.innerText = blanceAfterWithfraw;
    // clear input
    amountWithdraw.value = '';
})