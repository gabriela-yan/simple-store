const menuLink = document.getElementById('menuLink');
const menu = document.getElementById('menu');

menuLink.addEventListener('click', () => {
    
    if(menu.classList.contains('navigation__container')){
        menu.classList.remove('navigation__container');
    } else {
        menu.classList.add('navigation__container');
    }
    
})