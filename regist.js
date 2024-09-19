var nameError = document.getElementById('name-lol');
var emailError = document.getElementById('email-lol');
var numberError = document.getElementById('number-lol');
var passwordError = document.getElementById('password-lol');
var countryError = document.getElementById('country-error');

function validateName() {
    var name = document.getElementById('name').value;

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Please write your full name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validateCountry() {
    var name = document.getElementById('country').value;

    if (name.length === 0) {
        nameError.innerHTML = 'Country is required';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    
    var emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = 'Invalid email';
        return false;
    }

    emailError.innerHTML = '';
    return true;
}

function validatePassword() {
    var password = document.getElementById('password').value;

    if (password.length === 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if (!password.match(/^[A-Za-z0-9]+$/)) {
        passwordError.innerHTML = 'Please insert a valid password';
        return false;
    }
    passwordError.innerHTML = '';
    return true;
}

function validateNumber(){
    var number = document.getElementById('number').value;
    if(number.length === 0){
        numberError.innerHTML = 'Phone Number is required';
        return false;
    }
    if(number.length !== 12){
        numberError.innerHTML = 'Phone number should be 12 digits';
        return false;
    }
    numberError.innerHTML = '';
    return true;
}
