/* const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); */

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            // Unobserve the element to ensure the animation only occurs once
            observer.unobserve(entry.target);
        }
    });
});

// Observe elements with the class '.hidden'
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Observe images with the class '.fade-in'
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el) => observer.observe(el));