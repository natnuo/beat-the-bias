"use strict";
const IS_ACTIVE_BTN_SELECTOR = "#is-active-btn";
$(IS_ACTIVE_BTN_SELECTOR).on("click", () => {
    const isChecked = $(`${IS_ACTIVE_BTN_SELECTOR}:checked`).length;
    $(`${IS_ACTIVE_BTN_SELECTOR} + label`).html(isChecked ? "Disable" : "ACTIVATE!");
});
