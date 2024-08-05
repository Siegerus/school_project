"use strict";
import $ from "jquery";

$(document).ready(function() {

    $(".questions-list__plus").each(function(i) {
        $(this).on("click", function(){
            
            $(".questions__content-box").eq(i).toggleClass("questions__content-box_active");
            /* $(".questions__content-box").height($("questions-list__item_content").outerHeight()); */
            $(".questions-list__item_content").eq(i).toggleClass("questions-list__item_content_active");
        });

        $(".questions-list__wrapper_content").eq(i).on("click", function() {
            $(".questions-list__item_content").eq(i).removeClass("questions-list__item_content_active");
            $(".questions__content-box").eq(i).removeClass("questions__content-box_active");
        });
    });


    
    /* $("body").click(function () {
        if ($(".questions__content-box").hasClass("questions__content-box_active")) {
            $(".questions__content-box").removeClass("questions__content-box_active");
        }
    }); */
});