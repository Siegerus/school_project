"use strict";
import $ from "jquery";
//const jqueryValidate = require("jquery-validation");
import validate from "jquery-validation";

$(document).ready(function () {

    $("form").submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }

        $.ajax ({
            type: "POST",
            async: true,
            url: "mailer/smart.php" ,
            data: $(this).serialize()
        }).done(function() {

            $(this).find("input").val("");
            $(".modal__item").addClass("modal__item_active");
            $(".modal__overlay").addClass("modal__overlay_active");
            $(".modal__form").removeClass("modal__form_active");
            $("form").trigger("reset");
        });

        $.ajax ({
            type: "POST",
            async: true,
            url: "mailer/telegram/telegram.php" ,
            data: $(this).serialize()
        });

        return false;
    });

    function submitForms(form) {
        $(form).validate({
            errorPlacement: function(error, element) {
                if (element.hasClass("start-feed-form__hidden_start")) {
                    error.appendTo(".start-feed-form__error-box_start");
                } else if (element.hasClass("start-feed-form__hidden_modal")) {
                    error.appendTo(".start-feed-form__error-box_modal");
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
    }

    submitForms("#start-feed-form");
    submitForms("#modal__form");
    
});
    
    
    
