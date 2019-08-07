const portfolio = document.querySelector('#port-btn');
const textBox = document.querySelector('#text-box');
const logo = document.querySelector('.ba-logo')
const overlay = document.querySelector('#overlay');

portfolio.addEventListener('click', function() {
  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
    logo.classList.add('hidden');
  } else {
    overlay.classList.add('hidden');
    logo.classList.remove('hidden');
  }
});

