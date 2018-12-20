import {validate} from "./form-validation";

export default function () {
    $('.wizard').each(function () {
        const wizardEl = $(this);
        const wizardNav = $(this).find('.m-wizard__step-number');
        const wizardId = wizardEl.attr("id");
        const startStep = wizardEl.data('start');
        const wizardForm = wizardEl.data('form');
        const form = $("#" + wizardForm);
        const validator = form.data('validator');


        const wizard = new mWizard(wizardId, {
            startStep: startStep || 1,
        });

        wizardNav.click(function (e) {
            const step = $(this).data("step");
            if(validator) {
                if (validator.form() !== true) {
                    wizard.stop();
                } else {
                    wizard.goTo(step)
                }
            }
        });

        wizard.on('beforeNext', function(wizard) {
            if(validator) {
                if (validator.form() !== true) {
                    wizard.stop();
                }
            }
        });

        wizard.on('change', function(wizard) {
            // mUtil.scrollTop();
        });

    });
}