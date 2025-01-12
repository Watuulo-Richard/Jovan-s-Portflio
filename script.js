
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

const hamburgBtn = document.getElementById('hamburgBtn')
const navLinksContainer = document.querySelector('.nav-links')
hamburgBtn.addEventListener('click', function(){
  navLinksContainer.classList.toggle('navbar-active')
})