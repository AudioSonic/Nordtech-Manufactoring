'use strict';

/* Burger Menu */
let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* Kontaktformular */ 

let nameField = document.getElementById("contact-name");
let email = document.getElementById("contact-email");
let betreff = document.getElementById("contact-betreff");
let nachricht = document.getElementById("contact-nachricht");
let button = document.getElementById("contact-button");
let nameChecked = false;
let mailChecked = false;
let referenceChecked = false;
let messageChecked = false;

nameField.addEventListener("input", () => {
    CheckName();
});

email.addEventListener("input", () => {
    CheckEmail();
});

betreff.addEventListener("change", () => {
    CheckBetreff();
});

nachricht.addEventListener("input", () => {
    CheckNachricht();
});

button.addEventListener("click", () => {
    event.preventDefault();
    SubmitMessage();
});

function CheckName(){
    if(nameField.value.trim() === ""){
        document.getElementById("name-error").textContent = 
        "Es muss ein Name eingetragen werden!";
        nameChecked = false;
    }

    else{
        document.getElementById("name-error").textContent =
        "";
        nameChecked = true;
    }
}

console.log(button);
function CheckEmail(){

    if(email.value.trim() === ""){
        document.getElementById("mail-error").textContent =
        "Es muss eine E-Mail Adresse angegeben werden!";

        mailChecked = false;
    }

    else if(!email.value.includes("@") || !email.value.includes(".")){
        document.getElementById("mail-error").textContent =
        "Es muss eine gültige E-Mail Adresse eingetragen werden!";

        mailChecked = false;
    }

    else{
        document.getElementById("mail-error").textContent =
        "";

        mailChecked = true;
    }
}

function CheckNachricht(){
    if(nachricht.value.trim() === ""){
        document.getElementById("message-error").textContent = 
        "Es muss eine Nachricht eingegeben werden!";
        messageChecked = false;
    }

    else{
        document.getElementById("message-error").textContent = 
        "";
        messageChecked = true;
    }
}

function CheckBetreff(){

    if(betreff.value === ""){
        document.getElementById("reference-error").textContent =
        "Bitte einen Betreff auswählen!";

        referenceChecked = false;
    }
    else{
        document.getElementById("reference-error").textContent =
        "";

        referenceChecked = true;
    }
}

function SubmitMessage(){
    CheckName();
    CheckEmail();
    CheckBetreff();
    CheckNachricht();

    if(nameChecked && mailChecked && referenceChecked && messageChecked){
        alert("Die Nachricht wurde versendet!");
    }
    else{
        alert("Alle Felder müssen gefüllt sein!");
    }
}

