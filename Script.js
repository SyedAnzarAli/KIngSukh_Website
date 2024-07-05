document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});




document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.rating-value');
    const speed = 200; 

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-value');
            const data = +counter.innerText;
            
            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        };

        animate();
});
});







// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let slides = document.querySelectorAll(".slide");
//     slides.forEach(slide => slide.style.display = "none");
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 3000); 
// }

// function plusSlides(n) {
//     showSlides(slideIndex+=n);
// }


let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    
    if (n >= slides.length) {slideIndex = 0}    
    if (n < 0) {slideIndex = slides.length - 1}
    
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots[index].className = dots[index].className.replace(" active", "");
    });

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}


setInterval(() => {
    showSlides(slideIndex +=1);
},5000);