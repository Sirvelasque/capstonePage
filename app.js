const bars = document.getElementById('bars');
const menu = document.getElementById('mobile_nav');
const bars_icon = document.getElementById('barsIcon');

function toggleNavManu() {
  menu.classList.toggle('active');
  menu.classList.toggle('noactive');
  bars.classList.toggle('x_Icon')
  bars_icon.classList.toggle('fa-times');
  bars_icon.classList.toggle('fa-bars');
}

bars.addEventListener('click', toggleNavManu);