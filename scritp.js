let btn = document.querySelector('.btn-toggle button')
let menu = document.querySelector('.menu-mobile')
btn.addEventListener('click', ()=>{
  menu.classList.toggle('open')
})
