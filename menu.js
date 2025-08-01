let activePopup = null;
let currentIndex = 0;

function openMenuPopup(popupId) {
  // Hide all popups first
  document.querySelectorAll('.popupItem').forEach(p => p.style.display = 'none');

  // Show the selected popup
  activePopup = document.getElementById(popupId);
  document.getElementById("menuProductPopups").style.display = 'flex';

  setTimeout(() => {
    document.getElementById("menuProductPopups").style.opacity = '1';
  }, 10);
  activePopup.style.display = 'flex';

  currentIndex = 0;
  showSlide(currentIndex);
}


function showSlide(index) {
  if (!activePopup) return;

  const slides = activePopup.querySelectorAll('.imageDisplay');
  slides.forEach((slide, i) => {
    slide.classList.remove('imageDisplayActive');
    if (i === index) {
      slide.classList.add('imageDisplayActive');
    }
  });
}


function showSlide(index) {
  if (!activePopup) return;

  const slides = activePopup.querySelectorAll('.imageDisplay');
  slides.forEach((slide, i) => {
    slide.classList.remove('imageDisplayActive');
    if (i === index) {
      slide.classList.add('imageDisplayActive');
    }
  });
}


function nextSlide() {
  if (!activePopup) return;

  const slides = activePopup.querySelectorAll('.imageDisplay');
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  if (!activePopup) return;

  const slides = activePopup.querySelectorAll('.imageDisplay');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}


function closeMenuPopup() {
  if (activePopup) {
    activePopup.style.display = 'none';
    document.getElementById("menuProductPopups").style.opacity = '0';
    setTimeout(() => {
      document.getElementById("menuProductPopups").style.display = 'none';
    }, 400);

    activePopup = null;
  }
}
