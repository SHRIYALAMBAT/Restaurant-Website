const form = document.getElementById("form");
const username = documet.getElementById("username");
const form = document.getElementById("email");
const username = document.getElementById("password");
const form = document.getElementById("c-password");

//Show Error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "input error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
//Successful
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.add("success");
}
//Required
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
};
//getfieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//checkinputlength
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be less than {$max}
            characters `);
    } else {
        showSuccess(input);
    }
}
//emailvalidation
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Invalid Email");
    }
}
//password match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");

    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, cPassword]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email);
    checkPasswordMatch(password, cPassword);
});
