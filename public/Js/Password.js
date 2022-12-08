var password1 = document.getElementById("psw1")
var password2 = document.getElementById("psw2")

document.getElementsByClassName('signupbtn').onclick = function() {
if(password1.value.length <= 5) {
    alert("Password must be a Minimum of 6 Characters")
}}

document.getElementsByClassName('signupbtn').onclick = function() {
if(password1 != password2) {
    alert("Password does not match, please re-enter password")
}}

