
//details page

const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const confirmEmailInput = document.querySelector('#confirm-Email');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
      event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');
    }else if(usernameInput.value.trim().length <1 || usernameInput.value.trim().length > 50){
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(usernameInput);
    }

     //PHONE
     if(phoneInput.value.trim()==''){
        setError(phoneInput, 'Number can not be empty');
    }else if(phoneInput.value.trim().length <10 || phoneInput.value.trim().length > 10){
        setError(phoneInput, 'Add a valid mobile number');
    }else {
        setSuccess(phoneInput);
    }
   
    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Add a valid email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Add a valid email address');
    }

    //CONFIRM EMAIL
    if(confirmEmailInput.value.trim()==''){
        setError(confirmEmailInput, 'Add a valid email address');
    }else if(confirmEmailInput.value !== emailInput.value){
        setError(confirmEmailInput, 'Email does not match');
    }else {
        setSuccess(confirmEmailInput);
    }
}


function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}


function saveToLocal(){
    const username = document.getElementById("username").value;
    localStorage.setItem("username" ,username);

    const emailname = document.getElementById("email").value;
    localStorage.setItem("email" , emailname);

    const phonenumber = document.getElementById("phone").value;
    localStorage.setItem("phonenumber" , phonenumber);

    const confirmemail = document.getElementById("confirm-email").value;
    localStorage.setItem("confirm" , confirmemail);

    const  gender = document.getElementById("gender").value;
    localStorage.setItem("gender" ,gender);
}

const selectedDate = localStorage.getItem("selectedDate");
document.getElementById("selectedDate").innerHTML = selectedDate;

const hourStart = localStorage.getItem("hourStart");
const hourEnd = localStorage.getItem("hourEnd");
document.getElementById("selectedTime").innerHTML = `${hourStart} - ${hourEnd}`

const selectedHours = localStorage.getItem("selectedValue");
const selectedPeaks = localStorage.getItem("numOfPeakHours");
const selectedNormal = localStorage.getItem("numOfNormalHours");
document.getElementById("selectedDuration").innerHTML = `${selectedHours} Hours ${selectedNormal} Normal ${selectedPeaks} Peaks`;

const selectedSLAdult = localStorage.getItem("SL Adult");
document.getElementById("selectedSLAdult").innerHTML = selectedSLAdult;

const selectedSLChild = localStorage.getItem("SL Child");
document.getElementById("selectedSLChild").innerHTML = selectedSLChild;

const selectedForeignerAdult = localStorage.getItem("Foreigner Adult");
document.getElementById("selectedForeignerAdult").innerHTML = selectedForeignerAdult;

const selectedForeignerChild = localStorage.getItem("Foreigner Child");
document.getElementById("selectedForeignerChild").innerHTML = selectedForeignerChild;

const selectedtotalPayable = localStorage.getItem("totalPayable");
document.getElementById("selectedtotalPayable").innerHTML = selectedtotalPayable;


var input = document.querySelector("#phone");
window.intlTelInput(input, {
    separateDialCode: true,
    excludeCountries: ["in", "il"],
    preferredCountries: ["ru", "jp", "pk", "no"]
});

