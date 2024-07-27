"use strict";
import $ from "jquery";

$(document).ready(function(){
    $(".modal__close").on("click", function() {
        $("label.error").css("display", "none");
    });

    function closeModal (item) {
        $(".modal__close").on("click",function(){
            $(item).removeClass("modal__overlay_active");
            $(item).removeClass("modal__item_active");
            $(item).removeClass("modal__form_active");
        });
    }
    closeModal(".modal__overlay");
    closeModal(".modal__item");
    closeModal(".modal__form");
    
    $(".btn, .cost-item").on("click", function(){
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

