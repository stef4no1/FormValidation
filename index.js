const form = document.getElementById("form");
const username = document.getElementById("username");
const wand = document.getElementById("wand");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const password2 = document.getElementById("pass2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

//* Regex:
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

wand.selectedIndex = -1;

const validate = () => {
    const user = username.value.trim();
    const mail = email.value.trim();
    const pass = password.value.trim();
    const pass2 = password2.value.trim();
    const userWand = wand.value;

    if (user === "") {
        let errorMessage = "El user no puede estar vacío";
        inputError(username, errorMessage);
    } else if (user.length < 2 || user.length > 30) {
        let errorMessage =
        "El nombre de usuario debe tener entre 2 y 30 caracteres";
        inputError(username, errorMessage);
    } else {
        inputSuccess(username);
    }

    if(mail === "") {
        let errorMessage = "El email no puede estar vacío";
        inputError(email, errorMessage);
    } else if(!emailRegex.text(mail)){
        let errorMessage = "El email no es válido";
        inputError(email, errorMessage);
    } else {
        inputSuccess(email);
    }

    if(userWand === ""){
        let errorMessage = "Selecciona tu varita";
        inputError(wand, errorMessage);
    } else {
        inputSuccess(wand);
    }

    if(pass === "") {
        let errorMessage = "La contraseña no puede estar vacío";
        inputError(password, errorMessage);
    } else if(!passRegex.text(pass)){
        let errorMessage = "La contraseña no es válida, debe tener mayúscula, minúscula, números";
        inputError(password, errorMessage);
    } else {
        inputSuccess(password);
    }

    if(pass2 === "") {
        let errorMessage = "La contraseña no puede estar vacío";
        inputError(password2, errorMessage);
    } else if(pass2 !== pass){
        let errorMessage = "Las contraseñas no coinciden";
        inputError(password2, errorMessage);
    } else {
        inputSuccess(password2);
    }
};


const inputSuccess = (input) => {
    const inputParent = input.parentElement;
    const small = inputParent.querySelector("small");
    inputParent.classList.add("success");
    inputParent.classList.remove("error");
    small.innerHTML = "";
};


const inputError = (input, message) => {

    const inputParent = input.parentElement;

    const small = inputParent.querySelector("small");
    inputParent.classList.add("error");
    inputParent.classList.remove("success");

    small.classList.add("error");
    small.innerHTML = message;
};






