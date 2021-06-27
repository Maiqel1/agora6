//1 - In your html, give your form a name attribute like so: <form name="login-form"

//2 - In your html, give your email input a name attribute like so: <input name="email"

//3 - In your html, give your password input a name attribute like so: <input name="password"

//get the form in javascript by the name attribute
const loginForm = document.forms["login-form"]

//add event listener to the form to target the submission
loginForm.addEventListener("submit",submitLoginForm);

function submitLoginForm(event){
//create an empty object
    const loginData = {};
//get the email in javascript by the name attribute and add it to the object using the key "email"
    loginData.email = loginForm.email.value;
//get the password in javascript by the name attribute and add it to the object using the key "password"
    loginData.password = loginForm.password.value;
//turn the whole data to json
    alert(JSON.stringify(loginData));
//prevent the form from submitting
        event.preventDefault();
}