window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let plus = Array.from(this.document.querySelectorAll(".program-list__plus img")),
        close = Array.from(this.document.querySelectorAll(".program-list__close img")),
        moveItem = Array.from(this.document.querySelectorAll(".program-list__wrapper_moveOn")),
        moveTextItem = Array.from(this.document.querySelectorAll(".program-list__subtitle")),
        moveTextTitleItem = Array.from(this.document.querySelectorAll(".program-list__title_moveOn")),
        moveContentItem = Array.from(this.document.querySelectorAll(".program-list__wrapper_content")),
        moveTextContentItem = Array.from(this.document.querySelectorAll(".program-list__subtitle_content")),
        moveTextTitleContentItem = Array.from(this.document.querySelectorAll(".program-list__title_content-moveOn")),
        contentItem = Array.from(this.document.querySelectorAll(".program-list__item_content")),
        contentBox = Array.from(this.document.querySelectorAll(".program__content-box"));

    function programMove(it) {

        function contentShow(a) {
            contentBox[a].classList.toggle("program__content-box_active");
            contentItem[a].classList.toggle("program-list__item_content-active");
            plus[a].classList.toggle("program-list__plus_active");
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

    programMove(plus);
    programMove(close);
    programMove(moveItem);
    programMove(moveTextItem);
    programMove(moveTextTitleItem);
    programMove(moveContentItem);
    programMove(moveTextContentItem);
    programMove(moveTextTitleContentItem);
});