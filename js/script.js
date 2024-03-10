var navbar = document.querySelector('.navBar-linkss');

window.addEventListener('scroll', function() {
        if (window.scrollY > 350) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });