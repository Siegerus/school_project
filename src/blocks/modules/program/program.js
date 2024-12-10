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
        contentBox = Array.from(this.document.querySelectorAll(".program__content-box")),
        textContent = Array.from(this.document.querySelectorAll(".program-list__content"));

    function programMove(el) {

        function contentShow(a) {
            contentBox[a].classList.toggle("program__content-box_active");
            contentItem[a].classList.toggle("program-list__item_content-active");
            if (contentBox[a].classList.contains("program__content-box_active")) {
                plus[a].classList.add("program-list__plus_active");
                close[a].classList.remove("program-list__close_active");
                contentBox[a].style.maxHeight = (contentItem[a].clientHeight + 90) + "px";
            } else {
                plus[a].classList.remove("program-list__plus_active");
                close[a].classList.add("program-list__close_active");
                contentBox[a].style.maxHeight = 0;
            }
        }

        el.forEach(function (item) {
            item.addEventListener("click", function (e) {
                for (let i = 0; i < el.length; i++) {
                    if (e.target == el[i]) {
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
    programMove(contentBox);
    programMove(textContent);
});