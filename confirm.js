
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

const giveName = localStorage.getItem("username");
document.getElementById("giveName").innerHTML = giveName;

const giveEmail = localStorage.getItem("email");
document.getElementById("giveEmail").innerHTML = giveEmail;

const givenumber = localStorage.getItem("phonenumber");
document.getElementById("givenumber").innerHTML = givenumber;

const gender = localStorage.getItem("gender");
document.getElementById("gender").innerHTML = gender;