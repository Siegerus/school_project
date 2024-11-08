"use strict";
import $ from "jquery";

$(document).ready(function () {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth > 1200) {

        $(".students-arrow_right").hover(function () {
            $(".students-arrow__body_right").css({
                "background-color": "#d9d9d9"
            });

            $(".students-arrow__body_right").addClass("students-arrow__body_right_special");
        });

        $(".students-arrow_right").mouseleave(function () {
            $(".students-arrow__body_right").css({
                "background-color": "#424242"
            });

            $(".students-arrow__body_right").removeClass("students-arrow__body_right_special");
        });

    } else {

        $(".students-arrow_right").hover(function () {
            $(".students-arrow__body_right").css({
                "background-color": "#424242"
            });

            $(".students-arrow__body_right").removeClass("students-arrow__body_right_special");
        });
    }
});

window.addEventListener("DOMContentLoaded", function () {
    let curentIndex = 1,
        slide = this.document.querySelectorAll(".students__content"),
        prev = this.document.querySelector(".j-students-left"),
        next = this.document.querySelector(".j-students-right");

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

        slide[curentIndex - 1].style.display = "grid";
    };

    showSlides(curentIndex);

    let toPlus = function (n) {
        showSlides(curentIndex = curentIndex + n);
    };

    let toMinus = function (n) {
        showSlides(curentIndex = curentIndex - n);
    };

    prev.addEventListener("click", () => {
        toMinus(1);
    });

    next.addEventListener("click", () => {
        toPlus(1);
    });

});
