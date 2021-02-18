// When the user scrolls down 20px from the top of the document, slide down the navbar
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
$(document).ready(function(){
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('orange');
        $('.navbar-brand').addClass('orange');
        $('ul').addClass('orange');
        $('.abc').addClass('scroll');
  }

  else {
        $('nav').removeClass('orange');
        $('.navbar-brand').removeClass('orange');
        $('ul').removeClass('orange');
        $('.abc').removeClass('scroll');

  }
});

//check if the mobile number valid    ^[2-9]\d{9}$     /^[0-9a-zA-Z]{11}$/
var moblie = document.getElementById("mobNumber");

function validNumber(){
  if((moblie.value.match(/^0+1+[0-9]*$/)) && moblie.value.match(/^[0-9]{11}$/)){
    moblie.setCustomValidity('');
  }else{
    moblie.setCustomValidity("Unvalid number");
  }
}

moblie.onchange = validNumber;
moblie.onkeyup = validNumber;

//check if the passowrd is confirmed right
var password = document.getElementById("password")
, confirm_password = document.getElementById("confirmPassword");

function validatePassword(){
if(password.value != confirm_password.value) {
  confirm_password.setCustomValidity("Passwords Don't Match");
} else {
  confirm_password.setCustomValidity('');
}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//the password must be 8 characters

function rightPassword(){
  if(password.value.match(/^(?=.*\d)[0-9a-zA-Z]{8,}$/)){
    password.setCustomValidity('');
  }else{
    password.setCustomValidity('The password must be at least 8 character from (a-z), (A-Z) or(0-9)');
  }
}
  
password.onchange = rightPassword;
password.onkeyup = rightPassword;
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//alert on submission
$(".col-md-6").submit(function(){
  alert("Your information has been sent, thanks");
});
$(".msg").submit(function(){
  alert("Your message has been sent");
});
});






  