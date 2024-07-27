"use strict";
import $ from "jquery";

$(document).ready(function(){

    $(".articles-item").each(function(i) {
        $(this).hover(function(){
            $(".articles-item__descr").eq(i).css({
                "color" : "#d9d9d9"
            });
        });

        $(this).mouseleave(function(){
            $(".articles-item__descr").eq(i).css({
                "color" : "#424242"
            });
        });
    });

    $(".articles-item").each(function(i) {
        $(this).mousedown(function(){
            $(".articles-item__descr").eq(i).css({
                "opacity" : "0.1"
            });
        });

        $(this).mouseup(function(){
            $(".articles-item__descr").eq(i).css({
                "opacity" : "1",
                "transition" : "all 0.3s"
            });
        });
    });
});
