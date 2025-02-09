window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let plus = Array.from(this.document.querySelectorAll(".answers-list__plus img")),
        close = Array.from(this.document.querySelectorAll(".answers-list__close img")),
        moveItem = Array.from(this.document.querySelectorAll(".answers-list__item_launch")),
        moveTextItem = Array.from(this.document.querySelectorAll(".answers-list__text_moveOn")),
        moveContentItem = Array.from(this.document.querySelectorAll(".answers-list__wrapper_content")),
        moveTextContentItem = Array.from(this.document.querySelectorAll(".answers-list__text_content-moveOn")),
        contentItem = Array.from(this.document.querySelectorAll(".answers-list__item_content")),
        textContent = Array.from(this.document.querySelectorAll(".answers-list__content")),
        contentBox = Array.from(this.document.querySelectorAll(".answers__content-box"));

    function answersMove(it) {
        function contentShow(a) {
            contentBox[a].classList.toggle("answers__content-box_active");
            contentItem[a].classList.toggle("answers-list__item_content-active");
            if (contentBox[a].classList.contains("answers__content-box_active")) {
                plus[a].classList.add("answers-list__plus_active");
                close[a].classList.remove("answers-list__close_active");
                contentBox[a].style.maxHeight = (contentItem[a].clientHeight + 90) + "px";
            } else {
                plus[a].classList.remove("answers-list__plus_active");
                close[a].classList.add("answers-list__close_active");
                contentBox[a].style.maxHeight = 0;
            }
        }

        it.forEach(function (item, i) {
            item.addEventListener("click", function (e) {
                if(e.target.closest(".answers-list__item_launch") || e.target.closest(".answers-list__wrapper_content")) {
                    contentShow(i);
                }
            });
        });
    }

    answersMove(moveItem);
    answersMove(moveContentItem);
});