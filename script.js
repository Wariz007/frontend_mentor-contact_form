//assign elements to variables
//firstName section
const submitBtn = document.getElementById("submit");
const firstNameContainer = document.getElementById("first-name");
const firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
const form = document.getElementById("form");

//lastName section
const lastNameContainer = document.getElementById("last-name");
const lastNameErrorMessage = document.getElementById("lastNameErrorMessage");

//email section
const emailContainer = document.getElementById("email");
const emailErrorMessage = document.getElementById("emailErrorMessage");

//query section
const queryErrorMessage = document.getElementById("queryErrorMessage");
const queries = document.querySelector('input[type="radio"]');

//message section
const messageElement = document.getElementById("message");
const messageErrorMessage = document.getElementById("messageErrorMessage");

//checkBox section
const checkbox = document.querySelector('input[type="checkbox"]');
const checkboxErrorMessage = document.getElementById("checkboxErrorMessage");



//add event listener to submit button
submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(firstNameContainer.value.trim() === ""){
        firstNameContainer.style.borderColor = "red";
        firstNameErrorMessage.style.display = "block";
    } else {
        firstNameContainer.style.borderColor = "";
        firstNameErrorMessage.style.display = "none";
    }

    if(lastNameContainer.value.trim() === ""){
        lastNameContainer.style.borderColor = "red";
        lastNameErrorMessage.style.display = "block";
    } else {
        lastNameContainer.style.borderColor = "";
        lastNameErrorMessage.style.display = "none";
    }

    if(emailContainer.value.trim() === ""){
        emailContainer.style.borderColor = "red";
        emailErrorMessage.style.display = "block";
    } else {
        emailContainer.style.borderColor = "";
        emailErrorMessage.style.display = "none";
    }

    if(!queries.checked) {
        queryErrorMessage.style.display = "block";
    } else {
        queryErrorMessage.style.display = "none";
    }

    const message = messageElement.value.trim();
    if(message === ""){
        messageErrorMessage.style.display = "block";
    } else {
        messageErrorMessage.style.display = "none";
    }

    if(!checkbox.checked){
        checkboxErrorMessage.style.display = "block";
    } else {
        checkboxErrorMessage.style.display = "none";
    }



})