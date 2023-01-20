"use strict";
(self["webpackChunkzulip"] = self["webpackChunkzulip"] || []).push([["static_js_bundles_portico_js-static_js_portico_signup_js"],{

/***/ "./node_modules/ga-gtag/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ga-gtag/lib/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.install=exports.gtag=exports["default"]=void 0;var install=function install(trackingId){var additionalConfigInfo=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var scriptId="ga-gtag";if(document.getElementById(scriptId))return;var _document=document,head=_document.head;var script=document.createElement("script");script.id=scriptId;script.type="text/javascript";script.async=true;script.src="https://www.googletagmanager.com/gtag/js?id=".concat(trackingId);head.insertBefore(script,head.firstChild);window.dataLayer=window.dataLayer||[];gtag("js",new Date);gtag("config",trackingId,additionalConfigInfo)};exports.install=install;var gtag=function gtag(){window.dataLayer.push(arguments)};exports.gtag=gtag;var _default=gtag;exports["default"]=_default;

/***/ }),

/***/ "./static/styles/portico/portico_styles.css":
/*!**************************************************!*\
  !*** ./static/styles/portico/portico_styles.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/js/bundles/portico.js":
/*!**************************************!*\
  !*** ./static/js/bundles/portico.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./static/js/bundles/common.js");
/* harmony import */ var _portico_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../portico/header */ "./static/js/portico/header.js");
/* harmony import */ var _portico_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portico/google-analytics */ "./static/js/portico/google-analytics.js");
/* harmony import */ var _styles_portico_portico_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/portico/portico_styles.css */ "./static/styles/portico/portico_styles.css");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");







/***/ }),

/***/ "./static/js/portico/google-analytics.js":
/*!***********************************************!*\
  !*** ./static/js/portico/google-analytics.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var ga_gtag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ga-gtag */ "./node_modules/ga-gtag/lib/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




let config;

if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) !== undefined) {
    (0,ga_gtag__WEBPACK_IMPORTED_MODULE_0__.install)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    config = (info) => (0,ga_gtag__WEBPACK_IMPORTED_MODULE_0__.gtag)("config", Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), info);
} else {
    config = () => {};
}


/***/ }),

/***/ "./static/js/portico/header.js":
/*!*************************************!*\
  !*** ./static/js/portico/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".portico-header li.logout").on("click", () => {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#logout_form").trigger("submit");
        return false;
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".dropdown").on("click", (e) => {
        const $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target);
        const dropdown_is_shown = $this.closest(".dropdown").hasClass("show");

        if (!dropdown_is_shown) {
            $this.closest(".dropdown").addClass("show");
        } else if (dropdown_is_shown) {
            $this.closest(".dropdown").removeClass("show");
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".nav-dropdown").on("mouseover", (e) => {
        const $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target);
        // We switch to a vertical sidebar menu at width <= 1024px
        const in_vertical_orientation = window.matchMedia("(max-width: 1024px)").matches;
        // We only support mouseover events if we are in a horizontal
        // orientation (width > 1024px) and if the primary input mechanism
        // can hover over elements.
        const hover_supported = window.matchMedia("(hover: hover)").matches;
        const dropdown_is_shown = $this.closest("ul .dropdown").hasClass("show");

        if (!dropdown_is_shown && !in_vertical_orientation && hover_supported) {
            $this.closest("ul .dropdown").addClass("show");
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".nav-dropdown").on("mouseout", (e) => {
        const $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target);
        // We switch to a vertical sidebar menu at width <= 1024px
        const in_vertical_orientation = window.matchMedia("(max-width: 1024px)").matches;
        // We only support mouseout events if we are in a horizontal
        // orientation (width > 1024px) and if the primary input mechanism
        // can hover over elements.
        const hover_supported = window.matchMedia("(hover: hover)").matches;
        const dropdown_is_shown = $this.closest("ul .dropdown").hasClass("show");

        if (dropdown_is_shown && !in_vertical_orientation && hover_supported) {
            $this.closest("ul .dropdown").removeClass("show");
        }
    });
});


/***/ }),

/***/ "./static/js/portico/signup.js":
/*!*************************************!*\
  !*** ./static/js/portico/signup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../password_quality'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    // NB: this file is included on multiple pages.  In each context,
    // some of the jQuery selectors below will return empty lists.

    const $password_field = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_password, #id_new_password1");
    if ($password_field.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().validator.addMethod(
            "password_strength",
            (value) => Object(function webpackMissingModule() { var e = new Error("Cannot find module '../password_quality'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value, undefined, $password_field),
            () => Object(function webpackMissingModule() { var e = new Error("Cannot find module '../password_quality'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())($password_field.val(), $password_field),
        );
        // Reset the state of the password strength bar if the page
        // was just reloaded due to a validation failure on the backend.
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../password_quality'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())($password_field.val(), jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pw_strength .bar"), $password_field);

        $password_field.on("input", function () {
            // Update the password strength bar even if we aren't validating
            // the field yet.
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../password_quality'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(), jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pw_strength .bar"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
        });
    }

    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
        "#ldap-password",
        "#ldap-password ~ .password_visibility_toggle",
    );
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
        "#id_password",
        "#id_password ~ .password_visibility_toggle",
    );
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
        "#id_new_password1",
        "#id_new_password1 ~ .password_visibility_toggle",
    );
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
        "#id_new_password2",
        "#id_new_password2 ~ .password_visibility_toggle",
    );

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#registration, #password_reset").validate({
        rules: {
            password: "password_strength",
            new_password1: "password_strength",
        },
        errorElement: "p",
        errorPlacement($error, $element) {
            // NB: this is called at most once, when the error element
            // is created.
            $element.next(".help-inline.alert.alert-error").remove();
            if ($element.next().is('label[for="' + $element.attr("id") + '"]')) {
                $error.insertAfter($element.next()).addClass("help-inline alert alert-error");
            } else if ($element.parent().is('label[for="' + $element.attr("id") + '"]')) {
                // For checkboxes and radio-buttons
                $error.insertAfter($element.parent()).addClass("help-inline alert alert-error");
            } else {
                $error.insertAfter($element).addClass("help-inline alert alert-error");
            }
        },
    });

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#registration").length > 0) {
        // Check if there is no input field with errors.
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".help-inline:not(:empty)").length === 0) {
            // Find the first input field present in the form that is
            // not hidden and disabled and store it in a variable.
            const $firstInputElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()("input:not(:hidden, :disabled)").first();
            // Focus on the first input field in the form.
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())($firstInputElement);
        } else {
            // If input field with errors is present.
            // Find the input field having errors and stores it in a variable.
            const $inputElementWithError = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".help-inline:not(:empty)")
                .first()
                .parent()
                .find("input");
            // Focus on the input field having errors.
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())($inputElementWithError);
        }

        // reset error message displays
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_team_subdomain_error_client").css("display", "none");
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".team_subdomain_error_server").text() === "") {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".team_subdomain_error_server").css("display", "none");
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#timezone").val(new Intl.DateTimeFormat().resolvedOptions().timeZone);
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#registration").on("submit", () => {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#registration").valid()) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".register-button .loader").css("display", "inline-block");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".register-button").prop("disabled", true);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".register-button span").hide();
        }
    });

    // Code in this block will be executed when the /accounts/send_confirm
    // endpoint is visited i.e. accounts_send_confirm.html is rendered.
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-page-id='accounts-send-confirm']").length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#resend_email_link").on("click", () => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".resend_confirm").trigger("submit");
        });
    }

    // Code in this block will be executed when the user visits /register
    // i.e. accounts_home.html is rendered.
    if (
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-page-id='accounts-home']").length > 0 &&
        window.location.hash.slice(0, 1) === "#"
    ) {
        document.email_form.action += window.location.hash;
    }

    // Code in this block will be executed when the user is at login page
    // i.e. login.html is rendered.
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-page-id='login-page']").length > 0 && window.location.hash.slice(0, 1) === "#") {
        // All next inputs have the same value when the page is
        // rendered, so it's OK that this selector gets N elements.
        const next_value = jquery__WEBPACK_IMPORTED_MODULE_0___default()("input[name='next']").attr("value");

        // We need to add `window.location.hash` to the `next`
        // property, since the server doesn't receive URL fragments
        // (and thus could not have included them when rendering a
        // redirect to this page).
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("input[name='next']").attr("value", next_value + window.location.hash);
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#send_confirm").validate({
        errorElement: "div",
        errorPlacement($error) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".email-frontend-error").empty();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#send_confirm .alert.email-backend-error").remove();
            $error.appendTo(".email-frontend-error").addClass("text-error");
        },
        success() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#errors").empty();
        },
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".register-page #email, .login-page-container #id_username").on(
        "focusout keydown",
        function (e) {
            // check if it is the "focusout" or if it is a keydown, then check if
            // the keycode was the one for "Enter".
            if (e.type === "focusout" || e.key === "Enter") {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val().trim());
            }
        },
    );

    const show_subdomain_section = function (bool) {
        const action = bool ? "hide" : "show";
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#subdomain_section")[action]();
    };

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#realm_in_root_domain").on("change", function () {
        show_subdomain_section(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(":checked"));
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#login_form").validate({
        errorClass: "text-error",
        wrapper: "div",
        submitHandler(form) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#login_form").find(".loader").css("display", "inline-block");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#login_form").find("button .text").hide();

            form.submit();
        },
        invalidHandler() {
            // this removes all previous errors that were put on screen
            // by the server.
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#login_form .alert.alert-error").remove();
        },
        showErrors(error_map) {
            if (error_map.password) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("#login_form .alert.alert-error").remove();
            }
            this.defaultShowErrors();
        },
    });

    function check_subdomain_avilable(subdomain) {
        const url = "/json/realm/subdomain/" + subdomain;
        jquery__WEBPACK_IMPORTED_MODULE_0___default().get(url, (response) => {
            if (response.msg !== "available") {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_team_subdomain_error_client").html(response.msg);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_team_subdomain_error_client").show();
            }
        });
    }

    function update_full_name_section() {
        if (
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#source_realm_select").length &&
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#source_realm_select").find(":selected").val() !== ""
        ) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#full_name_input_section").hide();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#profile_info_section").show();
            const avatar_url = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#source_realm_select").find(":selected").attr("data-avatar");
            const full_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#source_realm_select").find(":selected").attr("data-full-name");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#profile_full_name").text(full_name);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_full_name").val(full_name);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#profile_avatar").attr("src", avatar_url);
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#full_name_input_section").show();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#profile_info_section").hide();
        }
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#source_realm_select").on("change", update_full_name_section);
    update_full_name_section();

    let timer;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_team_subdomain").on("keydown", () => {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".team_subdomain_error_server").text("").css("display", "none");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_team_subdomain_error_client").css("display", "none");
        clearTimeout(timer);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_team_subdomain").on("keyup", () => {
        clearTimeout(timer);
        timer = setTimeout(check_subdomain_avilable, 250, jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_team_subdomain").val());
    });

    // GitHub auth
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").on("click", "#choose_email .choose-email-box", function () {
        this.parentNode.submit();
    });
});


/***/ })

}]);
//# sourceMappingURL=static_js_bundles_portico_js-static_js_portico_signup_js.js.map