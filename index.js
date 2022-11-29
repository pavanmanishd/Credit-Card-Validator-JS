var i = 0;
var numberInputString = '';
var numberInputMaxLength = 0;

const numberInput = document.getElementById("numberInput");
const numberOutput = document.querySelectorAll(".card-no");
const nameInput = document.getElementById("nameInput");
const nameOutput = document.querySelector(".cname");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const monthOutput = document.querySelector(".month");
const yearOutput = document.querySelector(".year");
const cvcInput = document.querySelector(".cvc-input");
const cvcOutput = document.querySelector(".cvc");


numberInput.addEventListener('keyup', function (e) {
    numberInputMaxLength = Number(numberInput.getAttribute("maxlength"));
    numberInputMaxLength = numberInputMaxLength + 1;
    numberInputMaxLength = numberInputMaxLength.toString();
    if (e.key === ' ') {
        numberInput.setAttribute("maxlength", t);
    }
});



nameInput.addEventListener('keyup', function () {
    console.log(this.value);
    this.value = this.value.toUpperCase();
    nameOutput.textContent = nameInput.value;
    if (this.value.length === 0) {
        nameOutput.textContent = "PAVAN MANISH";
    }
});



numberInput.addEventListener('keyup', function (e) {
    var regex = new RegExp("^[a-z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str) && numberInputString.length<16) {
        numberInputString = numberInputString.concat(e.key);
        for (let i = 1; i <= Math.ceil((numberInputString.length) / 4); i++) {
            numberOutput[i - 1].textContent = numberInputString.slice(i * 4 - 4, i * 4);
        }
    }

    else if (e.key === 'Backspace') {
        numberInputString = numberInputString.slice(0, -1);
    }
    



    if (this.value.length === 0) {
        numberOutput[0].textContent = "0000";
        numberOutput[1].textContent = "0000";
        numberOutput[2].textContent = "0000";
        numberOutput[3].textContent = "0000";
        numberInputString='';
    }
});


monthInput.addEventListener('keyup', function () {
    monthOutput.textContent = monthInput.value;
    if (this.value.length === 0) {
        monthOutput.textContent = "00";
    }
});



yearInput.addEventListener('keyup', function () {
    yearOutput.textContent = yearInput.value;
    if (this.value.length === 0) {
        yearOutput.textContent = "00";
    }
});



cvcInput.addEventListener('keyup', function () {
    cvcOutput.textContent = cvcInput.value;
    if (this.value.length === 0) {
        cvcOutput.textContent = "000";
    }
});


document.querySelector(".button1").addEventListener('click', function () {
    var w = 0;
    
    if(numberInputString.length<16){
        numberInput.classList.add("error-class");
    }
    else{
        w=w+1;
        numberInput.classList.remove("error-class");
    }
    if(nameInput.value === ''){
        nameInput.classList.add("error-class");
    }
    else{
        w=w+1;
        nameInput.classList.remove("error-class");
    }
    if (cvcInput.value === '' || cvcInput.value.length !== 3) {
        cvcInput.classList.add("error-class");
    }
    else{
        w=w+1;
        cvcInput.classList.remove("error-class");
    }
    if(monthInput.value === ''){
        monthInput.classList.add("error-class");
    }
    else{
        w=w+1;
        monthInput.classList.remove("error-class");
    }
    if(yearInput.value === ''){
        yearInput.classList.add("error-class");
    }
    else{
        w=w+1;
        yearInput.classList.remove("error-class");
    }
    if(w === 5) {
        document.querySelector(".container2").classList.add("hidden");
        document.querySelector(".container3").classList.remove("hidden");
    }
});


document.querySelector(".button2").addEventListener('click', function () {
    document.querySelector(".container2").classList.remove("hidden");
    document.querySelector(".container3").classList.add("hidden");
    location.reload();
});