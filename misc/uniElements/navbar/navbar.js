document.addEventListener('DOMContentLoaded', () => {
  fetch('/misc/uniElements/navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbarTemplate').innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});


//overflow hidden when navbar expanded on small screens
function scrollLock(){
  const toggle = document.getElementById('menu-toggle');

  toggle.addEventListener('change', () => {
    document.body.classList.toggle('no-scroll', toggle.checked);
  });
}



