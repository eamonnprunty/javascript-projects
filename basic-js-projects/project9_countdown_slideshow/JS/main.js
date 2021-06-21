var slideIndex=1;
showSlides(slideIndex); //creates instance of slide at index 1.

function plusSlides(n) { //function to iterate using arrows
    showSlides(slideIndex +=n);
}

function currentSlide(n) { //function to iterate using dots
    showSlides(slideIndex =n);
}

function showSlides(n) { //function to iterate through the images
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex=1}
    if (n<1) {slideIndex=slide.length}
    for (i= 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i =0; i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
}



function countdown() { //function to create timer popup
    var seconds =document.getElementById("seconds").value;

    function tick() {
        seconds =seconds-1;
        TimeRanges.innerHTML=seconds;
        setTimeout(tick,3000);
    if(seconds== -1){
        alert("Time has expired");
    }
        }
    tick();
}
