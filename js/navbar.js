const navSlide = () => {
  // Get the burger menu and nav links
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //Toggle the nav
    nav.classList.toggle('nav-active');

    //Animate navigation
    navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.52}s`;
    }
    }); 
    //Burger lines to X
    burger.classList.toggle('toggle');
  });
}

navSlide();
