window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let plus = Array.from(this.document.querySelectorAll(".answers-list__plus img")),
        close = Array.from(this.document.querySelectorAll(".answers-list__close img")),
        moveItem = Array.from(this.document.querySelectorAll(".answers-list__wrapper_moveOn")),
        moveTextItem = Array.from(this.document.querySelectorAll(".answers-list__text_moveOn")),
        moveContentItem = Array.from(this.document.querySelectorAll(".answers-list__wrapper_content")),
        moveTextContentItem = Array.from(this.document.querySelectorAll(".answers-list__text_content-moveOn")),
        contentItem = Array.from(this.document.querySelectorAll(".answers-list__item_content")),
        contentBox = Array.from(this.document.querySelectorAll(".answers__content-box"));

    function answersMove(it) {
        function contentShow(a) {
            contentBox[a].classList.toggle("answers__content-box_active");
            contentItem[a].classList.toggle("answers-list__item_content-active");
            plus[a].classList.toggle("answers-list__plus_active");
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

    answersMove(plus);
    answersMove(close);
    answersMove(moveItem);
    answersMove(moveTextItem);
    answersMove(moveContentItem);
    answersMove(moveTextContentItem);
});