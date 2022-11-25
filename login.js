document.getElementById("submit-button").addEventListener("click", function () {
  // get email by user form
  const userEmailField = document.getElementById("user-email");
  const userEmail = userEmailField.value;
  // console.log(userEmail);

  // get user Password by user form
  const userPasswordField = document.getElementById("user-password");
  const userPassword = userPasswordField.value;
  // console.log(userPassword);


  // validation check
  if (
     userEmail == ("admin@admin.com".toLowerCase()) && userPassword == 12345
  ) {
    window.location.href = "banking.html";
  }
  else{
    const error = document.getElementById('error');
        error.innerText = 'Sorry! Please Enter Correct Email/Password'
    


  }
});
