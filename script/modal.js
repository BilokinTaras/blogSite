//Popup

let popup = document.getElementById('popup');
let basket = document.getElementById("shopping-popup");
let close = document.getElementById("popup__close");
let bodypopup = document.getElementById("popup__body");

basket.onclick = function() { 
   popup.style.display = "block";
}
close.onclick = function(){
   popup.style.display = "none";
}
window.onclick = function(e){
   console.log(e.target);
   if(e.target == popup){
      popup.style.display = "none";
      popup.style.display = "none";
}
}

//Menu-hamburger

document.getElementById("menu__btn").onclick = function() {
   open()
 };
 
 function open() {
   document.getElementById("menu-box").classList.toggle("show");
 }