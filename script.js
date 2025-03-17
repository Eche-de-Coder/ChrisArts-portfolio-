// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dropdown Menu for Mobile
document.querySelector('.dropdown > a').addEventListener('click', function(e) {
    e.preventDefault();
    let menu = document.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Testimonials Carousel
let testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 3000);