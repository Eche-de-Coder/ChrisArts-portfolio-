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


document.getElementById("sendBtn").addEventListener("click", function() {
        let name = document.getElementById("name").value.trim();
        let message = document.getElementById("message").value.trim();
        
        if (name === "" || message === "") {
            alert("Please enter your name and message.");
            return;
        }
        
        let phoneNumber = "2348022839391"; // Replace with your WhatsApp number in international format (e.g., 234XXXXXXXXXX for Nigeria)
        let whatsappURL = `https://wa.me/${phoneNumber}?text=Hello, my name is ${encodeURIComponent(name)}.%0A${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
});
    
