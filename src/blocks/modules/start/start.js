"use strict";
import $ from "jquery";
//const jqueryValidate = require("jquery-validation");
import validate from "jquery-validation";

$(document).ready(function () {

    $("#start-feed-form").submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }

        $.ajax ({
            type: "POST",
            async: true,
            url: "mailer/start-feed-form.php" ,
            data: $(this).serialize()
        }).done(function() {

            $(this).find("input").val("");
            $(".modal__item").addClass("modal__item_active");
            $(".modal__overlay").addClass("modal__overlay_active");
            $("form").trigger("reset");
        });

        return false;
    });


    $("#start-feed-form").validate({
        errorPlacement: function(error, element) {
            if (element.hasClass("start-feed-form__hidden")) {
                error.appendTo(".start-feed-form__error-box");
            } else {
                error.insertAfter(element);
            }
        },
        ignore: "",
        rules: {
            user: {
                required: true,
                rangelength: [2, 23],
            },
            phone: {
                required: true,
                justnumber: true,
                rangelength: [10, 14],
            },
            email: {
                required: true,
                justmail: true,
                rangelength: [5, 30],
            },
            policy: {
                required: true
            }
        },
        messages: {
            user: {
                required: "Введите имя",
                rangelength: "Введите от 2 до 23 символов"
            },
            phone: {
                required: "Введите номер телефона",
                justnumber: "Укажите корректный номер телефона",
                rangelength: "Укажите корректный номер телефона"
            },
            email: {
                required: "Укажите адрес почты",
                justmail: "Некорректный адрес почты"
            },
            policy: {
                required: "Ознакомьтесь с политикой конфиденциальности"
            }
        }
    });

    $.validator.addMethod("justmail", function(value,element) {
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
    });

    $.validator.addMethod("justnumber", function(value,element) {
        return this.optional( element ) || /^[+-]?([0-9]*\\${delimiter})?[0-9]+$/.test( value );
    });


    $("#modal__form").validate({
        errorPlacement: function(error, element) {
            if (element.hasClass("start-feed-form__hidden")) {
                error.appendTo(".start-feed-form__error-box");
            } else {
                error.insertAfter(element);
            }
        },
        ignore: "",
        rules: {
            user: {
                required: true,
                rangelength: [2, 23],
            },
            phone: {
                required: true,
                justnumber: true,
                rangelength: [10, 14],
            },
            email: {
                required: true,
                justmail: true,
                rangelength: [5, 30],
            },
            policy: {
                required: true
            }
        },
        messages: {
            user: {
                required: "Введите имя",
                rangelength: "Введите от 2 до 23 символов"
            },
            phone: {
                required: "Введите номер телефона",
                justnumber: "Укажите корректный номер телефона",
                rangelength: "Укажите корректный номер телефона"
            },
            email: {
                required: "Укажите адрес почты",
                justmail: "Некорректный адрес почты"
            },
            policy: {
                required: "Ознакомьтесь с политикой конфиденциальности"
            }
        }
    });

    $.validator.addMethod("justmail", function(value,element) {
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
    });

    $.validator.addMethod("justnumber", function(value,element) {
        return this.optional( element ) || /^[+-]?([0-9]*\\${delimiter})?[0-9]+$/.test( value );
    });


});
    
    
    
