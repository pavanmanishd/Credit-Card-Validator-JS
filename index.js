var i = 0;
var k = '';
var t = 0;

document.querySelector(".number-input").addEventListener('keyup', function (e) {
    t = Number(document.querySelector(".number-input").getAttribute("maxlength"));
    t = t + 1;
    t = t.toString();
    if (e.key === ' ') {
        document.querySelector(".number-input").setAttribute("maxlength", t);
    }
});
document.querySelector(".name-input").addEventListener('keyup', function () {
    console.log(this.value);
    this.value = this.value.toUpperCase();
    document.querySelector(".cname").textContent = document.querySelector(".name-input").value;
    if (this.value.length === 0) {
        document.querySelector(".cname").textContent = "PAVAN MANISH";
    }
});
document.querySelector(".number-input").addEventListener('keyup', function (e) {
    var regex = new RegExp("^[a-z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str) && k.length<16) {
        k = k.concat(e.key);
        for (let i = 1; i <= Math.ceil((k.length) / 4); i++) {
            document.querySelectorAll(".card-no")[i - 1].textContent = k.slice(i * 4 - 4, i * 4);
        }
    }
    else if (e.key === 'Backspace') {
        k = k.slice(0, -1);
    }
    
    if (this.value.length === 0) {
        document.querySelector(".card-no").textContent = "0000";
        k='';
    }
    console.log("k"+k.length);
});
document.querySelectorAll(".date-input")[0].addEventListener('keyup', function () {
    document.querySelector(".month").textContent = document.querySelectorAll(".date-input")[0].value;
    if (this.value.length === 0) {
        document.querySelector(".month").textContent = "00";
    }
});
document.querySelectorAll(".date-input")[1].addEventListener('keyup', function () {
    document.querySelector(".year").textContent = document.querySelectorAll(".date-input")[1].value;
    if (this.value.length === 0) {
        document.querySelector(".year").textContent = "00";
    }
});
document.querySelector(".cvc-input").addEventListener('keyup', function () {
    document.querySelector(".cvc").textContent = document.querySelector(".cvc-input").value;
    if (this.value.length === 0) {
        document.querySelector(".cvc").textContent = "000";
    }
});
document.querySelector(".button1").addEventListener('click', function () {
    var w = 0;
    
    if(k.length<16){
        document.querySelector('.number-input').classList.add("error-class");
    }
    else{
        w=w+1;
        document.querySelector('.number-input').classList.remove("error-class");
    }
    if(document.querySelector('.name-input').value === ''){
        document.querySelector('.name-input').classList.add("error-class");
    }
    else{
        w=w+1;
        document.querySelector('.name-input').classList.remove("error-class");
    }
    if (document.querySelector('.cvc-input').value === '' || document.querySelector('.cvc-input').value.length !== 3) {
        document.querySelector('.cvc-input').classList.add("error-class");
    }
    else{
        w=w+1;
        document.querySelector('.cvc-input').classList.remove("error-class");
    }
    if(document.querySelector('.d1').value === ''){
        document.querySelector('.d1').classList.add("error-class");
    }
    else{
        w=w+1;
        document.querySelector('.d1').classList.remove("error-class");
    }
    if(document.querySelector('.d2').value === ''){
        document.querySelector('.d2').classList.add("error-class");
    }
    else{
        w=w+1;
        document.querySelector('.d2').classList.remove("error-class");
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