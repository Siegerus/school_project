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
