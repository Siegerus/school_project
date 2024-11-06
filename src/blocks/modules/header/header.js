"use strict";
window.addEventListener("DOMContentLoaded", function() {
    let menu = this.document.querySelector(".header__nav-wrapper"),
        hamburger = this.document.querySelector(".header__hamburger"),
        itemsParent = this.document.querySelector(".header__nav-list"),
        items = this.document.querySelectorAll(".header__nav-list li a"),
        close = this.document.querySelector(".header__close");

    console.log(items,itemsParent);

    hamburger.addEventListener("click", () => {
        menu.classList.add("header__nav-wrapper_active");
    });

    close.addEventListener("click", () => {
        menu.classList.remove("header__nav-wrapper_active");
    });

    
    itemsParent.addEventListener("click", function (e) {
        if (menu.classList.contains("header__nav-wrapper_active")) {
            if (e.target || e.target.classList.contains("header__nav-list li a")) {
                menu.classList.remove("header__nav-wrapper_active");
            }
        }
    });
    

});

