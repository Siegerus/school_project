"use strict";
import $ from "jquery";

$(document).ready(function() {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth > 1200) {
    
        $(".students-arrow_right").hover(function() {
            $(".students-arrow__body_right").css({
                "background-color" : "#d9d9d9"
            });

            $(".students-arrow__body_right").addClass("students-arrow__body_right_special");
        });
        
        $(".students-arrow_right").mouseleave(function() {
            $(".students-arrow__body_right").css({
                "background-color" : "#424242"
            });
            
            $(".students-arrow__body_right").removeClass("students-arrow__body_right_special");
        });
        
    } else {

        $(".students-arrow_right").hover(function() {
            $(".students-arrow__body_right").css({
                "background-color" : "#424242"
            });
            
            $(".students-arrow__body_right").removeClass("students-arrow__body_right_special");
        });
    }
});
