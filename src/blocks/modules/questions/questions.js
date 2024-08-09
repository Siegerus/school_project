/* "use strict";
import $ from "jquery";

$(document).ready(function() {

    $(".questions-list__plus").each(function(i) {
        $(this).on("click", function(){
            
            $(".questions__content-box").eq(i).toggleClass("questions__content-box_active");
            $(".questions-list__item_content").eq(i).toggleClass("questions-list__item_content_active");
        });

        $(".questions-list__wrapper_content").eq(i).on("click", function() {
            $(".questions-list__item_content").eq(i).removeClass("questions-list__item_content_active");
            $(".questions__content-box").eq(i).removeClass("questions__content-box_active");
        });
    });
}); */

window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let plus = Array.from(this.document.querySelectorAll(".questions-list__plus img")),
        close = Array.from(this.document.querySelectorAll(".questions-list__close img")),
        moveItem = Array.from(this.document.querySelectorAll(".questions-list__wrapper_moveOn")),
        moveTextItem = Array.from(this.document.querySelectorAll(".questions-list__text_moveOn")),
        moveContentItem = Array.from(this.document.querySelectorAll(".questions-list__wrapper_content-moveOn")),
        moveTextContentItem = Array.from(this.document.querySelectorAll(".questions-list__text_content-moveOn")),
        contentItem = Array.from(this.document.querySelectorAll(".questions-list__item_content-moveOn")),
        contentBox = Array.from(this.document.querySelectorAll(".questions__content-box_moveOn"));

    function questionsMove(it) {
        function contentShow(a) {
            contentBox[a].classList.toggle("questions__content-box_active");
            contentItem[a].classList.toggle("questions-list__item_content-active");
        }

        it.forEach(function (item) {
            item.addEventListener("click", function (e) {
                for (let i = 0; i < it.length; i++) {
                    if (e.target == it[i]) {
                        contentShow(i);
                    }
                }
            });
        });
    }

    questionsMove(plus);
    questionsMove(close);
    questionsMove(moveItem);
    questionsMove(moveTextItem);
    questionsMove(moveContentItem);
    questionsMove(moveTextContentItem);
});