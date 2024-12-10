"use strict";
import $ from "jquery";
import { tns } from "tiny-slider";

let slider = tns({
    container: ".reviews__wrapper",
    items: 1,
    slideBy: "page",
    autoplay: true,
    controls: false,
    nav: false,
    controlsContainer: ".reviews__arrwrapp",
    speed: 600,
    autoplayTimeout: 3000,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    preventActionWhenRunning: true,
});

let prev = document.querySelectorAll(".j-reviews-left"),
    next = document.querySelectorAll(".j-reviews-right");

next.forEach((item) => {
    item.addEventListener("click", function () {
        slider.goTo("next");
        slider.pause();
    });
}); 

prev.forEach((item) => {
    item.addEventListener("click", function () {
        slider.goTo("prev");
        slider.pause();
    });
});

$(document).ready(function () {

    $(".reviews-arrow_left").hover(function () {
        $(".reviews-arrow__body_left").css({
            "background-color": "#bea58a"
        });

        $(".reviews-arrow__body_left").addClass("reviews-arrow__body_left_special");
    });

    $(".reviews-arrow_left").mouseleave(function () {
        $(".reviews-arrow__body_left").css({
            "background-color": "#424242"
        });

        $(".reviews-arrow__body_left").removeClass("reviews-arrow__body_left_special");
    });

});

/* window.addEventListener("DOMContentLoaded", function () {
    let curentIndex = 1,
        slide = this.document.querySelectorAll(".reviews__content"),
        prev = this.document.querySelectorAll(".j-reviews-left"),
        next = this.document.querySelectorAll(".j-reviews-right");

    let showSlides = function (index) {
        if (index > slide.length) {
            curentIndex = 1;
        }
        if (index <= 0) {
            curentIndex = slide.length;
        }


        slide.forEach((item) => {
            item.style.display = "none";
        });

        slide[curentIndex - 1].style.display = "block";
    };

    showSlides(curentIndex);

    let toPlus = function (n) {
        showSlides(curentIndex = curentIndex + n);
    };

    let toMinus = function (n) {
        showSlides(curentIndex = curentIndex - n);
    };

    prev.forEach((item) => {
        item.addEventListener("click", () => {
            toMinus(1);
        });
    });

    next.forEach((item) => {
        item.addEventListener("click", () => {
            toPlus(1);
        });
    });
}); */