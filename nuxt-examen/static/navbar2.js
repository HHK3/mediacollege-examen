// Selecting DOM Items
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuNav = document.querySelector(".menu-nav");
let navItems = document.querySelectorAll(".nav-item");

// Open/Close Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);


function toggleMenu() {

    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        // Set Menu State
        showMenu = true;
    }

    else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        // Set Menu State
        showMenu = false;
    }
}


