// Popup Contact Form Script
function openContactForm() {
    document.body.style.overflow = 'hidden';
    document.getElementById("contactForm").style.display = "flex";

    setTimeout(() => {
        document.getElementById("contactForm").style.opacity = "1";
    }, 10);
}

function closeForm() {
    document.body.style.overflow = 'auto';
    document.getElementById("contactForm").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("contactForm").style.display = "none";
    }, 500);
}