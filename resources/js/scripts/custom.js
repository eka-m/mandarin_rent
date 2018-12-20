import wizard from './wizard';
import {initValidations} from './form-validation';

$(document).ready(() => {
    /*Selectpicker*/
    const selectPickerElement = $(".selectPicker");
    const selectPickerrOptions = selectPickerElement.data("options");
    selectPickerElement.selectpicker(selectPickerrOptions);
    /*End Selectpicker*/
    if (classExists("rest")) {
        $(".rest").restfulizer();
    }
    /*Popover*/
    if (classExists("restPopover")) {
        $(".restPopover").on("shown.bs.popover", function () {
            $(".restPopoverConfirm").restfulizer();
        });
    }
    /*End Popover*/

    if (classExists('initPortlet')) {
        $('.initPortlet').each(function (e) {
            new mPortlet(this);
        });
    }

    /*Bootstrap DatePicker*/
    const datePickerElement = $(".dateInput");
    const datePickerInitialOptions = {
        language: "ru"
    };
    const datePickerOptions = Object.assign(
        datePickerInitialOptions,
        datePickerElement.data("options")
    );
    datePickerElement.datepicker(datePickerOptions);
    /*End Bootstrap DatePicker*/

    /*Bootstrap DateTimePicker*/
    const dateTimePickerElement = $(".dateTimeInput");
    const dateTimePickerInitialOptions = {
        todayHighlight: true,
        autoclose: true,
        language: "ru"
    };
    const dateTimePickerOptions = Object.assign(
        dateTimePickerInitialOptions,
        dateTimePickerElement.data("options")
    );
    dateTimePickerElement.datetimepicker(dateTimePickerOptions);
    /*End Bootstrap DateTimePicker*/

    /* Switch */
    if (classExists("switch")) {
        const valueInput = $('.switch > input[type="hidden"]');
        const switchInput = $('.switch > input[type="checkbox"]');
        valueInput.val(valueInput.data("val"));
        // console.log(valueInput.val());
        switchInput
            .bootstrapSwitch({
                state: valueInput.data("val")
            })
            .on("switchChange.bootstrapSwitch", (event, state) => {
                valueInput.val(state ? 1 : 0);
            });
    }
    /* End switch */
});
initValidations();
wizard();


/* Pagination */
if (classExists("paginatiable-box")) {
    const boxItem = $(".paginatiable-box");
    boxItem.each(function (e) {
        const elem = $(this);
        const url = elem.data("url");
        getPaginatiableData(url, elem);
    });

    $(document).on("click", ".paginatiable-box .pagination a", function (e) {
        e.preventDefault();
        const url = $(this).attr("href");
        const conatiner = $(this).closest(".paginatiable-box");
        getPaginatiableData(url, conatiner);
    });
}

function getPaginatiableData(url, container) {
    $.ajax({
        url: url,
        dataType: "json",
        beforeSend() {
            mApp.block(container, {
                overlayColor: "rgba(36, 127, 225, 1.00)",
                type: "loader",
                state: "success",
                message: "Пожалуйста подождите..."
            });
        }
    })
        .done(function (data) {
            container.html(data);
            // location.hash = page;
            mApp.unblock(container);
            mApp.initTooltips();
        })
        .fail(function () {
            mApp.unblock(container);
            toastr.error("Сервер не отвечает");
        });
}

/* End Pagination */

/*HELPERS*/

function classExists(className) {
    return $("." + className).length > 0;
}

function idExists(id) {
    return $("#" + id).length > 0;
}

/*END HELPERS*/
