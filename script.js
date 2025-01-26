
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

const modalContainer = document.getElementById('resumeViewModal')
console.log(modalContainer)
const modalCloseBtn = document.getElementById('modalCloseBtn')
const modalBtn = document.getElementById('modalBtn')

// Listening For Open Click Event
modalBtn.addEventListener('click', ()=>{
    modalContainer.style.display = 'block'
})

// Listening For Close Click Event
modalCloseBtn.addEventListener('click', ()=>{
  modalContainer.style.display = 'none'
})

// Listening For Outside Click Event
window.addEventListener('click', (e)=>{
  if(e.target == modalContainer){
    modalContainer.style.display = 'none'
  }
})