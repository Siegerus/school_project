"use strict";
import $ from "jquery";

$(document).ready(function(){
    $(".modal__close").on("click", function() {
        $(".modal__overlay").removeClass("modal__overlay_active");
        $(".modal__item").removeClass("modal__item_active");
        $(".modal__form").removeClass("modal__form_active");
        $("label.error").css("display", "none");
    });

    
    
    $(".btn").on("click", function(){
        $(".modal__form").addClass("modal__form_active");
        $(".modal__overlay").addClass("modal__overlay_active");
    });

    $(".modal__overlay").click(function (e) {
        if ($(e.target).is(".modal__overlay")) {
            $(".modal__overlay").removeClass("modal__overlay_active");
            $(".modal__item").removeClass("modal__item_active");
            $(".modal__form").removeClass("modal__form_active");
        }
    }); 
});

