var k = '';
var t;
var i = 0;
var z;
$(".number-input").on('keyup', function (e) {
    t = Number($(".number-input").attr("maxlength"));
    t = t + 1;
    t = t.toString();
    if (e.key == ' ') {
        $(".number-input").attr("maxlength", t);
    }
    // console.log("t"+t);
});
$(".name-input").on('keyup', function () {
    this.value = this.value.toUpperCase();
    $(".cname").text($(".name-input").val());
    if ($(this).val().length === 0) {
        $(".cname").text("PAVAN MANISH");
    }
});
$(".number-input").on('keyup', function (e) {
    var regex = new RegExp("^[a-z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str) && k.length<16) {
        k = k.concat(e.key);
        for (let i = 1; i <= Math.ceil((k.length) / 4); i++) {
            $(".card-no").eq(i - 1).text(k.slice(i * 4 - 4, i * 4));
        }
    }
    else if (e.key === 'Backspace') {
        k = k.slice(0, -1);
    }
    
    if ($(this).val().length === 0) {
        $(".card-no").text("0000");
        k='';
    }
    console.log("k"+k.length);
});
$(".date-input").eq(0).on('keyup', function () {
    $(".month").text($(".date-input").eq(0).val());
    if ($(this).val().length === 0) {
        $(".month").text("00");
    }
});
$(".date-input").eq(1).on('keyup', function () {
    $(".year").text($(".date-input").eq(1).val());
    if ($(this).val().length === 0) {
        $(".year").text("00");
    }
});
$(".cvc-input").on('keyup', function () {
    $(".cvc").text($(".cvc-input").val());
    if ($(this).val().length === 0) {
        $(".cvc").text("000");
    }
});
$(".button1").on('click', function () {
    var w = 0;
    
    if(k.length<16){
        $('.number-input').addClass("error-class");
    }
    else{
        w=w+1;
        $('.number-input').removeClass("error-class");
    }
    if($('.name-input').val() === ''){
        $('.name-input').addClass("error-class");
    }
    else{
        w=w+1;
        $('.name-input').removeClass("error-class");
    }
    if ($('.cvc-input').val() === '' || $('.cvc-input').val().length !== 3) {
        $('.cvc-input').addClass("error-class");
    }
    else{
        w=w+1;
        $('.cvc-input').removeClass("error-class");
    }
    if($('.d1').val() === ''){
        $('.d1').addClass("error-class");
    }
    else{
        w=w+1;
        $('.d1').removeClass("error-class");
    }
    if($('.d2').val() === ''){
        $('.d2').addClass("error-class");
    }
    else{
        w=w+1;
        $('.d2').removeClass("error-class");
    }
    if(w === 5) {
        $(".container2").addClass("hidden");
        $(".container3").removeClass("hidden");
    }
});
$(".button2").on('click', function () {
    $(".container2").removeClass("hidden");
    $(".container3").addClass("hidden");
    location.reload();
});