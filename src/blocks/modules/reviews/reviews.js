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