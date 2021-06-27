<<<<<<< HEAD
"use strict";

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navLinks = document.getElementsByClassName('nav-links')[0]

// toggleButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     navLinks.classList.toggle('active')
// })

// hide password

const togglePassword = document.querySelector("#togglePassword");
const passOne = document.querySelector("#password");
const passTwo = document.querySelector("#password-sec");

const submit = document.querySelector("#reg-btn");

togglePassword.addEventListener("click", toggle);

function toggle() {
  if (passOne.type === "password") {
    passOne.type = "text";
  } else {
    passOne.type = "password";
  }
}

// validate password
// check if the two passwords are the same

submit.addEventListener("click", validatePassword);

const acceptedValue = /^[0-9a-zA-Z]+$/;

function validatePassword() {
  if (passOne.value.match(acceptedValue)) {
    if (passOne.value !== passTwo.value) {
      passTwo.setCustomValidity("Passwords do not match");
    } else {
      passTwo.setCustomValidity("");
    }
  } else {
    alert("Password  is invalid!");
  }
=======
const registerForm = document.forms["register-form"]
registerForm.addEventListener("submit",submitRegisterForm);
function submitRegisterForm(event){
    const registerData = {};
    registerData.name = registerForm.name.value;
    registerData.email = registerForm.email.value;
    registerData.password = registerForm.password.value;
    registerData.conPassword = registerForm.conPassword.value;
    if(registerForm.conPassword.value !== registerForm.password.value){
        event.preventDefault();
        alert("check password")
    }else{
        alert(JSON.stringify(registerData));
    }
    //const url = "http://localhost:8080/login";
    // const fetchOptions = {
    //     body: JSON.stringify(registerData),
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // };

    // fetch(url, fetchOptions)
    // .then(response => response.json())
    // .then(data =>  {
    //     alert(data.message);
    // })
    // .catch(error => console.log(error));
>>>>>>> 305771c251cf6f21c3772418eab6300a88de7b64
}
