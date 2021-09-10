/*responsive menu*/
let menu = document.querySelector('.main_menu');
let btn = document.querySelector('.btns');
let hamMenu = document.querySelector('.hamburger_menu');
hamMenu.addEventListener("click",()=>{
    menu.classList.toggle('show')
    btn.classList.toggle('show')
})