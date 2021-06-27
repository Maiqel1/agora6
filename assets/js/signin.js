const loginForm = document.forms["login-form"]
loginForm.addEventListener("btn", submitLoginForm);

function submitLoginForm(event) {  
    const loginData = {}; 
    loginData.email = loginForm.email.value; 
    loginData.password = loginForm.password.value;  
    alert(JSON.stringify(loginData));   
    event.preventDefault();


}

var state = false;

function toggle() {
    if (state) {
        document.getElementById("passkey").setAttribute("type", "password");
        document.getElementById("eye").style.color = '#7a797e';
        state = false;
    } else {
        document.getElementById("passkey").setAttribute("type", "text");
        document.getElementById("eye").style.color = '#1f7fb2E';

        state = true;
    }
}