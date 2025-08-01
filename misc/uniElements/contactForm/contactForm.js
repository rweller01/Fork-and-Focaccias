document.addEventListener('DOMContentLoaded', () => {
fetch('/misc/uniElements/contactForm/contactForm.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('contactFormTemplate').innerHTML = data;
    })
    .catch(error => console.error("Error loading contact form:", error));
});