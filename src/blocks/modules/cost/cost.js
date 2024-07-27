"use strict";
import $ from "jquery";

$(document).ready(function () {

    function paintItem(item) {
        $(".cost-item").each(function(i) {

            $(this).hover(function(){
                $(item).eq(i).css({
                    "color": "#bea58a",
                    "transition" : "all 0.6s"
                });
            });

            $(this).mouseleave(function() {
                $(item).eq(i).css({
                    "color": "#424242",
                    "transition" : "all 0.6s"
                });
            });
        });
    }

    paintItem(".cost-item__price");
    paintItem(".cost-item__number");
    paintItem(".cost-item__title");
    paintItem(".cost-item__month");
    paintItem(".cost-item__support");
});

