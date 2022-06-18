let btn = document.querySelector('.btn-toggle button')
let menu = document.querySelector('.menu-mobile')
let overlay = document.querySelector('.bg-overlay')
btn.addEventListener('click', ()=>{
  menu.classList.add('open')
  document.body.classList.add('no-scroll')
  if(menu.classList.contains('open') && document.body.classList.contains('no-scroll')){
    overlay.addEventListener('click',()=>{
      menu.classList.remove('open')
      document.body.classList.remove('no-scroll')
    })
  }
})
