document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,  // Adjusting for fixed header height
                behavior: "smooth"
            });
        });
    }
});
