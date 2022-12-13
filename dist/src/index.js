const menu = document.querySelector(".menu")
const menuButton = document.querySelector(".menu-button")
const menuNav = document.querySelector(".menu-navigation")
const menuPortrait = document.querySelector(".menu-portrait")
const navItems = document.querySelectorAll(".navigation-item")
const hamburgerLines = document.querySelectorAll(".button-line")

let showMenu = false;

menuButton.addEventListener("click",function(){
    if(showMenu == false){
        menuButton.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuPortrait.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));
        showMenu = true;
    }
    else{
        menuButton.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuPortrait.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));
        showMenu = false;
    }
})