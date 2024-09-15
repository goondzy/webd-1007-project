/******w***********
    
    Project 3 Website Development & Deployment
    Name: Danielle Gundayao
    Date: December 28, 2022
    Description: Website Development & Deployment

******************/

function validate(e){

    if(formHasErrors()){
        e.preventDefault();
        return false;
    }

    return true;
}

function resetForm(e){
    if(confirm('Reset form?')){

        hideErrors();

        document.getElementById("name").focus();

        return true;
    }

    e.preventDefault();

    return false;
}

function formHasErrors(){
    let errorFlag = false;

    let name = document.getElementById("name");

    if(name.value.trim() == ""){
        document.getElementById("name_error").style.display = "block";

        if(!errorFlag){
            name.focus();
        }
        
        errorFlag = true;

    } else {
        document.getElementById("name_error").style.display = "none";
    }

    let phone = document.getElementById("phone");
    let regexPhoneFormat = new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);

    if(phone.value.trim() == ""){
        document.getElementById("phone_error").style.display = "block";

        if(!errorFlag){
            phone.focus();
        }

        errorFlag = true;

    } else {
        document.getElementById("phone_error").style.display = "none";
    }

    if(!regexPhoneFormat.test(phone.value)){
        document.getElementById("phoneformat_error").style.display = "block";
        
        if(!errorFlag){
            phone.focus();
            phone.select();
        }

        errorFlag = true;
    
    } else {
        document.getElementById("phoneformat_error").style.display = "none";
    }

    let email = document.getElementById("email");
    let regexEmailFormat = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);

    if(email.value.trim() == ""){
        document.getElementById("email_error").style.display = "block";

        if(!errorFlag){
            email.focus();
        }

        errorFlag = true;

    } else {
        document.getElementById("email_error").style.display = "none";
    }

    if(!regexEmailFormat.test(email.value)){
        document.getElementById("emailformat_error").style.display = "block";

        if(!errorFlag){
            email.focus();
            email.select();
        }

        errorFlag = true;

    } else {
        document.getElementById("emailformat_error").style.display = "none";
    }

    let message = document.getElementById("message");

    if(message.value.trim() == ""){
        document.getElementById("message_error").style.display = "block";

        if(!errorFlag){
            message.focus();
        }

        errorFlag = true;

    } else {
        document.getElementById("message_error").style.display = "none";
    }

    return errorFlag;
}

function hideErrors(){
    let error = document.getElementsByClassName("error");

    for(let i=0; i<error.length; i++){
        error[i].style.display = "none";
    }
}

function load(){

    hideErrors();

    document.getElementById("contactform").addEventListener("submit", validate);

    document.getElementById("contactform").reset();

    document.getElementById("contactform").addEventListener("reset", resetForm);
}

document.addEventListener("DOMContentLoaded", load);





