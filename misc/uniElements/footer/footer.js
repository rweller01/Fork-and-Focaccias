document.addEventListener('DOMContentLoaded', () => {
fetch('/misc/uniElements/footer/footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footerTemplate').innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});




