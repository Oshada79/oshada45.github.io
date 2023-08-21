
const form = document.querySelector('#create-payment');
const cnameInput = document.querySelector('#cname');
const ccnumInput = document.querySelector('#ccnum');
const expmonthInput = document.querySelector('#expmonth');
const expyearInput = document.querySelector('#expyear');
const cvvInput = document.querySelector('#cvv');

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
    const inputContainers = form.querySelectorAll('.input-group1');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //CNAME
    if(cnameInput.value.trim()==''){
        setError(cnameInput, 'Card Name can not be empty');
    }else if(cnameInput.value.trim().length <4 || cnameInput.value.trim().length > 6){
        setError(cnameInput, 'Name contains invalid characters');
    }else {
        setSuccess(cnameInput);
    }

     //CCNUM
     if(ccnumInput.value.trim()==''){
        setError(ccnumInput, 'Card Number can not be empty');
    }else if(ccnumInput.value.trim().length <16 || ccnumInput.value.trim().length > 16){
        setError(ccnumInput, ' Incomplete field');
    }else {
        setSuccess(ccnumInput);
    }

      //EXPMONTH
      if(expmonthInput.value.trim()==''){
        setError(expmonthInput, 'Exp month can not be empty');
    }else if(expmonthInput.value.trim().length <3 || expmonthInput.value.trim().length > 9){
        setError(expmonthInput, ' Incomplete field');
    }else {
        setSuccess(expmonthInput);
    }

    //EXPYEAR
    if(expyearInput.value.trim()==''){
        setError(expyearInput, 'Exp Year can not be empty');
    }else if(expyearInput.value.trim().length <4 || expyearInput.value.trim().length > 4){
        setError(expyearInput, ' Incomplete field');
    }else {
        setSuccess(expyearInput);
    }

    //CVV
    if(cvvInput.value.trim()==''){
        setError(cvvInput, 'CVV can not be empty');
    }else if(cvvInput.value.trim().length <3 || cvvInput.value.trim().length > 3){
        setError(cvvInput, ' Incomplete field');
    }else {
        setSuccess(cvvInput);
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

