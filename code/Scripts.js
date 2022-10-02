// JavaScript
function validateNS() {
    var x = document.forms["newsletter"]["email"].value;
    if (x == "") {
        alert("Please provide Your email adress");
        return false;
    }
        else { return true; }
}
function showMenu() {
    var x = document.getElementById("menu");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
function joinDown() {
    document.getElementById("joinAction").style.backgroundColor = 'rgb(68, 73, 90)';
}
function joinUp() {
    document.getElementById("joinAction").style.backgroundColor = '#4B5061';
}
// jQuery
$(document).ready(function(){
    $(".icon-row").click(function(){
        alert("Link currently unavailable");
    });
});

