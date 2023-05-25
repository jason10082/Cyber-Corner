const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

setInterval(() => {
  slide.style.transition = 'transform 1s ease-in-out';
  counter++;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 5000);

slide.addEventListener('transitionend', () => {
  if (images[counter].id === 'lastClone') {
    slide.style.transition = 'none';
    counter = images.length - 2;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (images[counter].id === 'firstClone') {
    slide.style.transition = 'none';
    counter = images.length - counter;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("show-menu");
}

var showDetailsBtn = document.getElementById('showDetailsBtn');
var details = document.getElementById('details');

showDetailsBtn.addEventListener('click', function() {
  if (details.style.display === 'none') {
    details.style.display = 'block';
    showDetailsBtn.textContent = 'Hide Details';
  } else {
    details.style.display = 'none';
    showDetailsBtn.textContent = 'Show Details';
  }
});

