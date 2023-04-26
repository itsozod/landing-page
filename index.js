'use strict'
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const changeImage = document.querySelector('[data-action="change"]');
const img = changeImage.querySelector('.map');

// Check if there is a saved preference for the mode
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  toggleDarkMode();
}

toggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  toggle.classList.toggle('bi-moon-fill');
  const isDarkMode = toggle.classList.toggle('bi-brightness-high-fill');
  if (isDarkMode) {
    toggle.style.color = 'goldenrod';
    nav.style.backgroundColor = '#3e65da';
    nav.style.transition = '1s';
    body.style.background = 'lightblue';
    body.style.color = 'black';
    body.classList.remove('dark-mode');
    // body.style.transition = '2s';
    img.setAttribute('src', 'images/sun.png');
    console.log('Light mode is enabled.');
    // Save the preference for the mode
    localStorage.setItem('mode', 'light');
  } else {
    toggle.style.color = '#1a193a';
    nav.style.backgroundColor = '#4c3bbe';
    nav.style.transition = '1s';
    body.style.background = '#1a193a';
    body.style.color = 'white';
    body.classList.add('dark-mode');
    // body.style.transition = '2s';
    img.setAttribute('src', 'images/moon.png');
    console.log('Dark mode is enabled.');
    // Save the preference for the mode
    localStorage.setItem('mode', 'dark');
  }
}

const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear()





