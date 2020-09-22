const form = dcoument.getElementById('form');
const username = dcoument.getElementById('username');
const email = document.getElementById('email');
const password = dcoument.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
}

if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
} else {
    setSuccessFor(username);
}
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
}