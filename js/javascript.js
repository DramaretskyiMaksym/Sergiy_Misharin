document.querySelector('.burger').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open')
  document.querySelector("body").classList.toggle("lock");
})

// let offset = 0;
// const sliderLine = document.querySelector('.human__slider')

// document.querySelector('.arrow__right').addEventListener('click',function(){
//   offset = offset + 100;
//   if (offset > 768){
//     offset = 0;
//   }
//   sliderLine.style.left = -offset + '%'
// });
// document.querySelector('.arrow__left').addEventListener('click',function(){
//   offset = offset - 100;
//   if (offset < 0){
//     offset = 768;
//   }
//   sliderLine.style.left = -offset + '%'
// });

// document.querySelector('.arrow__right-modile').addEventListener('click',function(){
//   offset = offset + 106;
//   if (offset > 954){
//     offset = 0;
//   }
//   sliderLine.style.left = -offset + '%'
// });
// document.querySelector('.arrow__left-modile').addEventListener('click',function(){
//   offset = offset - 106;
//   if (offset < 0){
//     offset = 954;
//   }
//   sliderLine.style.left = -offset + '%'
// });

// const images = document.querySelectorAll('.slider');
// const sliderLine = document.querySelector('.slider-line');
// let count = 0;
// let width;

// function init(){
//   console.log('resize');
//   width = document.querySelector('.slider').offsetWidth;
//   sliderLine.style.width = width * images.length + 'px';
//   images.forEach(item =>{
//     item.style.width = width + 'px';
//     item.style.height = 'auto';
//   })
// }
// window.addEventListener('resize',init);
// init()

// document.querySelector('slider-right').addEventListener('click',function(){
//   count++;
//   rollSlider();
// });

// function rollSlider(){
//   sliderLine.style.transform = 'translate(-'+count * width + 'px)'
// }

var swiper = new Swiper(".slide-content", {
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