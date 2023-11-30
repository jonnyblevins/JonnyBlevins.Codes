/*IntersectionObserver is going to watch for the event of scrolling over something*/
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

/*When hidden (element) stuff shows up, it adds the show class*/
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/*This makes the fade-in happen seamlessly*/
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el) => observer.observe(el));