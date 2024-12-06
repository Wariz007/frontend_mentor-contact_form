const submitBtn = document.getElementById("submit");
const firstName = document.getElementById("first-name");
const firstNameErrorMessage = document.getElementById("firstName-error-message");

const lastName = document.getElementById("last-name");
const lastNameErrorMessage = document.getElementById("lastName-error-message");

const emailAddress = document.getElementById("email");
const emailErrorMessage = docuemt.getElementById("email-error-message")




submitBtn.addEventListener('click', function(event){
    event.preventDefault();

    //validation for firstName
    if(firstName.value.trim() === ""){
        firstName.style.borderColor = "#ff0000";
        firstNameErrorMessage.style.display = "block";
    } else {
        firstName.style.borderColor = "";
        firstNameErrorMessage.style.display = "none";
    }

    
    
});