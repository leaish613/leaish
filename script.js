window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        footer.style.display = 'block'; // Show the footer
    } else {
        footer.style.display = 'none'; // Hide the footer
    }
});


        // Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
