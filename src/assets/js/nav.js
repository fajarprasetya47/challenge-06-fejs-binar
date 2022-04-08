export default function NavToggle(){
    const navToggle = document.querySelector('.nav-toggle')
    const navToggleClose = document.querySelector('.nav-toggle-close')
    const nav = document.querySelector('nav')
    
    navToggle.addEventListener('click', ()=>{
        nav.classList.toggle('toggled')
    })

    navToggleClose.addEventListener('click', ()=>{
        nav.classList.remove('toggled')
    })
}
