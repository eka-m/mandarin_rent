$.extend($.validator.messages, {
    required: "Это поле необходимо заполнить.",
    remote: "Пожалуйста, введите правильное значение.",
    email: "Пожалуйста, введите корректный адрес электронной почты.",
    url: "Пожалуйста, введите корректный URL.",
    date: "Пожалуйста, введите корректную дату.",
    dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
    number: "Пожалуйста, введите число.",
    digits: "Пожалуйста, вводите только цифры.",
    creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
    equalTo: "Пожалуйста, введите такое же значение ещё раз.",
    extension: "Пожалуйста, выберите файл с правильным расширением.",
    maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
    minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
    rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
    range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
    max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});


export const validate = function (form) {
   return $(form).validate({
        ignore: ":hidden, .ignore",
        submitHandler: function (form) {
            form.removeClass('has-errors');
            toastr.clear();
            form.submit();
        },
        invalidHandler: function (event, validator) {
            $(this).addClass('has-errors');
            toastr.clear();
            toastr.error('Форма содержит ошибки!', 'Оооопс..!');
        },
        errorPlacement: function (error, element) {
            const message = element.data('validation-message');
            if(message) { toastr.info(message);}
            const box = element.parent();
            box.find('.form-control-feedback').remove();
            error.addClass('text-danger').hide().appendTo(box).fadeIn(500);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid').addClass('is-valid');
        }
    });
};

export const initValidations = function () {
    $(".validate").each(function () {
        validate(this);
    });
};