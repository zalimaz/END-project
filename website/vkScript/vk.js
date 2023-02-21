let counter = 0;
slideShow();
function slideShow(){
    let i;
    var slides = document.getElementsByClassName("slides");
    for(i = 0; i< slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    counter++;
    if(counter >slides.length){
        counter = 1;
    }
    slides[counter -1].style.display = "block";
    setTimeout(slideShow,4000);
}


const dialog = document.getElementById("popup-dialog"); 
const container = document.getElementById("container");
var loggin = document.getElementById("loggin-info");
var gallery = document.getElementById("galleryContainer");
window.onclick = function(event) {
    console.log(event); 
    if (event.target == loggin) {
        alert("test");
        dialog.style.display = "none";
    }
    if (event.target == gallery) {
        alert("test");
        dialog.style.display = "none";
    }
}
function showDialog() { 
    dialog.show(); 
  } 




