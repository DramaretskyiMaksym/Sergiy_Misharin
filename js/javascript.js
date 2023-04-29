document.querySelector('.burger').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open')
})

let offset = 0;
const sliderLine = document.querySelector('.human__slider')

document.querySelector('.arrow__right').addEventListener('click',function(){
  offset = offset + 100;
  if (offset > 768){
    offset = 0;
  }
  sliderLine.style.left = -offset + '%'
});
document.querySelector('.arrow__left').addEventListener('click',function(){
  offset = offset - 100;
  if (offset < 0){
    offset = 768;
  }
  sliderLine.style.left = -offset + '%'
});

document.querySelector('.arrow__right-modile').addEventListener('click',function(){
  offset = offset + 106;
  if (offset > 954){
    offset = 0;
  }
  sliderLine.style.left = -offset + '%'
});
document.querySelector('.arrow__left-modile').addEventListener('click',function(){
  offset = offset - 106;
  if (offset < 0){
    offset = 954;
  }
  sliderLine.style.left = -offset + '%'
});