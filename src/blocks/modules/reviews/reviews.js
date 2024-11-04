"use strict";
import $ from "jquery";

$(document).ready(function() {

    $(".reviews-arrow_left").hover(function() {
        $(".reviews-arrow__body_left").css({
            "background-color" : "#bea58a"
        });

        $(".reviews-arrow__body_left").addClass("reviews-arrow__body_left_special");
    });

    $(".reviews-arrow_left").mouseleave(function() {
        $(".reviews-arrow__body_left").css({
            "background-color" : "#424242"
        });
        
        $(".reviews-arrow__body_left").removeClass("reviews-arrow__body_left_special");
    });

});

window.addEventListener("DOMContentLoaded", function() {
    let curentIndex = 1,
        slide = this.document.querySelectorAll(".reviews__content"),
        prev = this.document.querySelectorAll(".j-reviews-left"),
        next = this.document.querySelectorAll(".j-reviews-right");

    let showSlides = function(index) {
        if(index > slide.length) {
            curentIndex = 1;
        }
        if(index <= 0) {
            curentIndex = slide.length;
        }


        slide.forEach((item) => {
            item.style.display = "none";
        })

        slide[curentIndex - 1].style.display = "block";
    }

    showSlides(curentIndex);

    let toPlus = function(n) {
        showSlides(curentIndex = curentIndex + n);
    }

    let toMinus = function(n) {
        showSlides(curentIndex = curentIndex - n);
    }

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
});