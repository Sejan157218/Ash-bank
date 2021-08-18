document.getElementById('login-button').addEventListener('click',function(){
    // get user email
    const userEmailField = document.getElementById('input-email');
    const userEmail = userEmailField.value;
    // console.log(userEmail);
    // get user password
    const userPassField = document.getElementById('input-password');
    const userPass = userPassField.value;
    // console.log(userPass);
    // check email password
    if (userEmail == 'sejan157218@gmail.com' && userPass=='ash7090'){
        window.location.href = 'bankingpage.html';
    }
    
})