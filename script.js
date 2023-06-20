//Select the navigation bar element
const navbar = document.getElementById('navbar');

// Change the background color of the navigation bar when scrolling
window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});
