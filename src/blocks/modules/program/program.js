window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let plus = this.document.querySelectorAll(".program-list__plus img"),
        close = this.document.querySelectorAll(".program-list__close img"),
        moveItem = this.document.querySelectorAll(".program-list__item"),
        moveContentItem = this.document.querySelectorAll(".program-list__wrapper_content"),
        contentItem = this.document.querySelectorAll(".program-list__item_content"),
        contentBox = this.document.querySelectorAll(".program__content-box");
    
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

        el.forEach(function (item, i) {
            item.addEventListener("click", function (e) {
                if (e.target.closest(".program-list__item") || e.target.closest(".program-list__wrapper_content")) { 
                    contentShow(i);
                }
            });
        });
    }

    programMove(moveItem);
    programMove(moveContentItem);
    
});