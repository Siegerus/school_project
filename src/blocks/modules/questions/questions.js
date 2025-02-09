window.addEventListener("DOMContentLoaded", function () {

    "use strict";
    
    let plus = this.document.querySelectorAll(".questions-list__plus img"),
        close = this.document.querySelectorAll(".questions-list__close img"),
        moveItem = this.document.querySelectorAll(".questions-list__item_launch"),
        moveContentItem = this.document.querySelectorAll(".questions-list__wrapper_content-moveOn"),
        contentItem = this.document.querySelectorAll(".questions-list__item_content-moveOn"),
        contentBox = this.document.querySelectorAll(".questions__content-box_moveOn");

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

        el.forEach(function (item, i) {
            item.addEventListener("click", function (e) {
                if (e.target.closest(".questions-list__item") || e.target.closest(".questions-list__wrapper_content-moveOn")) {
                    contentShow(i);
                }
            });
        });
    }

    questionsMove(moveItem);
    questionsMove(moveContentItem);
});