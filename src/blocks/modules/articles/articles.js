"use strict";
import $ from "jquery";

$(document).ready(function(){

    $(".articles-item").each(function(i) {
        $(this).hover(function(){
            $(".articles-item__descr").eq(i).css({
                "color" : "#d9d9d9",
                "transition" : "all 0.6s"
            });
            $(".articles-item").eq(i).css({
                "background-color" : "#424242",
                "transition" : "all 0.6s"
            });

        });

        $(this).mouseleave(function(){
            $(".articles-item__descr").eq(i).css({
                "color" : "#424242"
            });

            $(".articles-item").eq(i).css({
                "background-color" : "#bea58a"
            });
        });

        $(this).mousedown(function(){
            $(".articles-item__descr").eq(i).css({
                "opacity" : "0.1",
                "transition" : "all 0.1s"
            });
        });

        $(this).mouseup(function(){
            $(".articles-item__descr").eq(i).css({
                "opacity" : "1",
            });
        });
    });
});

window.addEventListener("DOMContentLoaded", function() {
    let curentIndex = 1,
        slide = this.document.querySelectorAll(".articles__content"),
        hidden = this.document.querySelectorAll(".articles-item_m-hidden"), 
        width = this.document.documentElement.clientWidth,
        prev = this.document.querySelector(".j-articles-left"),
        next = this.document.querySelector(".j-articles-right");

    if(width < 768) {
        let showSlides = function(index) {
            if(index > slide.length) {
                curentIndex = 1;
            }
            if(index <= 0) {
                curentIndex = slide.length;
            }
    
    
            slide.forEach((item) => {
                item.style.display = "none";
            });
    
            
            hidden.forEach((item) => {
                item.style.display = "none";
            });
            
    
            slide[curentIndex - 1].style.display = "flex";
        };
    
        showSlides(curentIndex);
    
        let toPlus = function(n) {
            showSlides(curentIndex = curentIndex + n);
        };
    
        let toMinus = function(n) {
            showSlides(curentIndex = curentIndex - n);
        };
    
        prev.addEventListener("click", () => {
            toMinus(1);
        });
    
        next.addEventListener("click", () => {
            toPlus(1);
        });

    }

    
});
