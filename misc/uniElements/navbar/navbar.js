document.addEventListener('DOMContentLoaded', () => {
  fetch('misc/uniElements/navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbarTemplate').innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});