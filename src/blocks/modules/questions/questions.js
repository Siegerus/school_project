window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let plus = Array.from(this.document.querySelectorAll(".questions-list__plus img")),
        close = Array.from(this.document.querySelectorAll(".questions-list__close img")),
        moveItem = Array.from(this.document.querySelectorAll(".questions-list__wrapper_moveOn")),
        moveTextItem = Array.from(this.document.querySelectorAll(".questions-list__text_moveOn")),
        moveContentItem = Array.from(this.document.querySelectorAll(".questions-list__wrapper_content-moveOn")),
        moveTextContentItem = Array.from(this.document.querySelectorAll(".questions-list__text_content-moveOn")),
        contentItem = Array.from(this.document.querySelectorAll(".questions-list__item_content-moveOn")),
        contentBox = Array.from(this.document.querySelectorAll(".questions__content-box_moveOn")),
        textContent = Array.from(this.document.querySelectorAll(".questions-list__content"));
        
    function questionsMove(el) {
        function contentShow(a) {
            contentBox[a].classList.toggle("questions__content-box_active");
            contentItem[a].classList.toggle("questions-list__item_content-active");
            if (contentBox[a].classList.contains("questions__content-box_active")) {
                plus[a].classList.add("questions-list__plus_active");
                close[a].classList.remove("questions-list__close_active");
                contentBox[a].style.maxHeight = (contentItem[a].clientHeight + 90) + "px";
            } else {
                plus[a].classList.remove("questions-list__plus_active");
                close[a].classList.add("questions-list__close_active");
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

    questionsMove(plus);
    questionsMove(close);
    questionsMove(moveItem);
    questionsMove(moveTextItem);
    questionsMove(moveContentItem);
    questionsMove(moveTextContentItem);
    questionsMove(contentBox);
    questionsMove(textContent);
});