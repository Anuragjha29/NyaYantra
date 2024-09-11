let slideIndex = 0;
showSlides();

// Function to show slides automatically
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides initially
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    // Reset the slide index if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Make the current slide visible
    slides[slideIndex - 1].style.display = "block";
    
    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Add the "active" class to the current dot
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000);

    // Change slide every 1 second (1000 ms)
  
}


    
