const portfolio = document.querySelector('#port-btn');
const textBox = document.querySelector('#text-box');
const logo = document.querySelector('.ba-logo')
const portfolioBtn = document.querySelector('#port-btn')
const overlay = document.querySelector('.overlay');
const overlayClose = document.querySelector('.overlay-close')

// -- open overlay w/ nav button -- //

portfolio.addEventListener('click', function() {
  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
    portfolioBtn.classList.add('hidden');
  } else {
    overlay.classList.add('hidden');
  }
});


// -- close the overlay -- //

document.addEventListener('click', (e) => {
  if (e.target.className == 'overlay' || e.target.className == 'overlay-close') {
    overlay.classList.add('hidden');
    portfolioBtn.classList.remove('hidden');
  }
});

document.addEventListener('keydown', (e) =>{
  if (e.key === "Escape") {
    overlay.classList.add('hidden');
    portfolioBtn.classList.remove('hidden');
  }
});