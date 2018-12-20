//== Class Definition
const SnippetLogin = function () {

    const login = $('#m_login');

    const showMsg = function (form, type, msg) {
        let alert = $('<div class="m-alert m-alert--outline alert alert-' + type + ' alert-dismissible" role="alert">\
			<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\
			<span></span>\
		</div>');

        form.find('.alert').remove();
        alert.prependTo(form);
        mUtil.animateClass(alert[0], 'fadeIn animated');
        alert.find('span').html(msg);
    };

    const displaySignInForm = function () {
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signup');

        login.addClass('m-login--signin');
        login.find('.m-login__signin').animateClass('flipInX animated');
    };

    const handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            e.preventDefault();
            const btn = $(this);
            const form = $(this).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    }
                }
            });

            if (!form.valid()) {
                return;
            }

            btn.addClass('m-loader m-loader--right m-loader--light').attr('disabled', true);
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            form.ajaxSubmit({
                url: form.attr('action'),
                success(response, status, xhr, $form) {
                    if (status === "success") {
                        setTimeout(function () {
                            showMsg(form, 'success', response.msg);
                            setTimeout(function () {
                                btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
                                window.location.href = response.redirect;
                            }, 3000)
                        }, 1500)
                    }
                },
                error(response) {
                    const errors = response.responseJSON.errors;
                    let message = '';
                    for (let error in errors) {
                        if (errors.hasOwnProperty(error)) {
                            message += errors[error];
                        }
                    }
                    showMsg(form, 'danger', message);
                    btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
                }
            });
        });
    };

    return {
        init: function () {
            handleSignInFormSubmit();
        }
    };
}();

jQuery(document).ready(function () {
    SnippetLogin.init();
});