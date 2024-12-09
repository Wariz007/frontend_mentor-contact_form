//assign elements to variables
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const successMessage = document.getElementById("success-parent");

//first name 
const firstNameContainer = document.getElementById("first-name");
const firstNameErrorMessage = document.getElementById("firstNameErrorMessage");

//last name
const lastNameContainer = document.getElementById("last-name");
const lastNameErrorMessage = document.getElementById("lastNameErrorMessage");

//email
const emailContainer = document.getElementById("email");
const emailErrorMessage = document.getElementById("emailErrorMessage");

//queries
const queries = document.querySelectorAll('input[name="query"]');
const queryErrorMessage = document.getElementById("queryErrorMessage");

//message
const messageContainer = document.getElementById("message");
const messageErrorMessage = document.getElementById("messageErrorMessage");

//checkbox
const checkbox = document.getElementById("checkbox");
const checkboxErrorMessage = document.getElementById("checkboxErrorMessage");


//encapsulate logic in functions
const validFirstName = () => {
    if(firstNameContainer.value.trim() === ""){
        firstNameContainer.style.borderColor = "red";
        firstNameErrorMessage.style.display = "block";
        return false;
    } else {
        firstNameContainer.style.borderColor = "";
        firstNameErrorMessage.style.display = "none";
        return true;
    }
}
const validLastName = () => {
    if(lastNameContainer.value.trim() === ""){
        lastNameContainer.style.borderColor = "red";
        lastNameErrorMessage.style.display = "block";
        return false;
    } else {
        lastNameContainer.style.borderColor = "";
        lastNameErrorMessage.style.display = "none";
        return true;
    }
}
const validEmail = () => {
    if(emailContainer.value.trim() === ""){
        emailContainer.style.borderColor = "red";
        emailErrorMessage.style.display = "block";
        return false;
    } else {
        emailContainer.style.borderColor = "";
        emailErrorMessage.style.display = "none";
        return true;
    }
}
const validQuery = () => {
    if(![...queries].some(query => query.checked)){
        queryErrorMessage.style.display = "block";
        return false;
    } else {
        queryErrorMessage.style.display = "none";
        return true;
    }
}
const validMessage = () => {
    if(messageContainer.value.trim() === ""){
        messageErrorMessage.style.display = "block";
        return false;
    } else {
        messageErrorMessage.style.display = "none";
        return true;
    }
}
const validCheckbox = () => {
    if(!checkbox.checked){
        checkboxErrorMessage.style.display = "block";
        return false;
    }
    checkboxErrorMessage.style.display = "none";
    return true;
}


//this prevents the form from submitting unless all conditions are met
form.addEventListener("submit", function(event){
    event.preventDefault();
})

//submit button
submit.addEventListener("click", () => {

    const isFirstNameValid = validFirstName();
    const isLastNameValid = validLastName();
    const isEmailValid = validEmail();
    const isQueryValid = validQuery();
    const isMessageValid = validMessage();
    const isCheckBoxValid = validCheckbox();

    if( isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isQueryValid &&
        isMessageValid &&
        isCheckBoxValid 
    ){
        successMessage.style.display = "block"
        form.reset();

        //clears success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none"
        }, 3000);
    } else {
        successMessage.style.display = "none";
    }

})