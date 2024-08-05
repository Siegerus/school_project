"use strict";
import $ from "jquery";

$(document).ready(function() {

    $(".program-list__plus").each(function(i) {
        $(this).on("click", function(){
            $(".program__content-box").eq(i).toggleClass("program__content-box_active");
            $(".program-list__item_content").eq(i).toggleClass("program-list__item_content_active");
        });

        $(".program-list__wrapper_content").eq(i).on("click", function() {
            $(".program-list__item_content").eq(i).removeClass("program-list__item_content_active");
            $(".program__content-box").eq(i).removeClass("program__content-box_active");
        });
    });

    
    

});