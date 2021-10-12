const button_menu = document.getElementById("button-menu")

button_menu.addEventListener('click', e => {
    const menu_section = document.querySelector('#menu-section')
    menu_section.classList.toggle("hidden")
 })