const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
// const icon = document.querySelector('i');
const right = document.querySelector('.right');
const changeImage = document.querySelector('[data-action="change"]');
const img = changeImage.querySelector('.map');

body.style.backgroundImage = 'url(../images/vietnam-travel.jpg)';
body.style.backgroundSize = 'cover';
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundAttachment = 'fixed';
body.style.backgroundPosition = 'center';

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
    body.style.backgroundColor = '';
    body.style.backgroundImage = 'url(../images/vietnam-travel.jpg)';
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed';
    body.style.backgroundPosition = 'center';
    body.style.color = 'black';
    body.classList.remove('dark-mode');
    // body.style.transition = '2s';
    img.setAttribute('src', '../images/sun.png');
    console.log('Light mode is enabled.');
    // Save the preference for the mode
    localStorage.setItem('mode', 'light');
  } else {
    toggle.style.color = '#1a193a';
    nav.style.backgroundColor = '#4c3bbe';
    nav.style.transition = '1s';
    body.style.background = '#1a193a';
    body.style.color = 'black';
    body.classList.add('dark-mode');
    // body.style.transition = '2s';
    img.setAttribute('src', '../images/moon.png');
    console.log('Dark mode is enabled.');
    // Save the preference for the mode
    localStorage.setItem('mode', 'dark');
  }
}


const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear()