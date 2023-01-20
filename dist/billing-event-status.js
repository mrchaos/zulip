/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ga-gtag/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ga-gtag/lib/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.install=exports.gtag=exports["default"]=void 0;var install=function install(trackingId){var additionalConfigInfo=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var scriptId="ga-gtag";if(document.getElementById(scriptId))return;var _document=document,head=_document.head;var script=document.createElement("script");script.id=scriptId;script.type="text/javascript";script.async=true;script.src="https://www.googletagmanager.com/gtag/js?id=".concat(trackingId);head.insertBefore(script,head.firstChild);window.dataLayer=window.dataLayer||[];gtag("js",new Date);gtag("config",trackingId,additionalConfigInfo)};exports.install=install;var gtag=function gtag(){window.dataLayer.push(arguments)};exports.gtag=gtag;var _default=gtag;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/tippy.js/dist/tippy.css":
/*!**********************************************!*\
  !*** ./node_modules/tippy.js/dist/tippy.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/styles/portico/billing.css":
/*!*******************************************!*\
  !*** ./static/styles/portico/billing.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/styles/portico/landing_page.css":
/*!************************************************!*\
  !*** ./static/styles/portico/landing_page.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/styles/portico/portico_styles.css":
/*!**************************************************!*\
  !*** ./static/styles/portico/portico_styles.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/js/billing/event_status.js":
/*!*******************************************!*\
  !*** ./static/js/billing/event_status.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "check_status": () => (/* binding */ check_status),
/* harmony export */   "initialize_retry_with_another_card_link_click_handler": () => (/* binding */ initialize_retry_with_another_card_link_click_handler),
/* harmony export */   "stripe_payment_intent_status_check": () => (/* binding */ stripe_payment_intent_status_check)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./static/js/billing/helpers.js");






function update_status_and_redirect(status_message, redirect_to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-loading").hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-success").show();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-success").text(status_message);
    setTimeout(() => {
        window.location.replace(redirect_to);
    }, 5000);
}

function show_error_message(message) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-loading").hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-error").show();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-error").text(message);
}

function show_html_error_message(rendered_message) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-loading").hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-error").show();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-error").html(rendered_message);
}

function handle_session_complete_event(session) {
    let message = "";
    let redirect_to = "";
    switch (session.type) {
        case "upgrade_from_billing_page":
        case "retry_upgrade_with_another_payment_method":
            message = "We have received your billing details. Attempting to create charge...";
            redirect_to = `/billing/event_status?stripe_payment_intent_id=${session.stripe_payment_intent_id}`;
            break;
        case "free_trial_upgrade_from_billing_page":
            message =
                "Your free trial of Zulip Cloud Standard has been activated. You would be redirected to the billing page soon.";
            redirect_to = "/billing";
            break;
        case "free_trial_upgrade_from_onboarding_page":
            message =
                "Your free trial of Zulip Cloud Standard has been activated. You would be redirected to the billing page soon.";
            redirect_to = "/billing?onboarding=true";
            break;
        case "card_update_from_billing_page":
            message =
                "Your card has been updated. You would be redirected to the billing page soon.";
            redirect_to = "/billing#payment-method";
    }
    update_status_and_redirect(message, redirect_to);
}

async function stripe_checkout_session_status_check(stripe_session_id) {
    const response = await jquery__WEBPACK_IMPORTED_MODULE_0___default().get("/json/billing/event/status", {stripe_session_id});
    if (response.session.status === "created") {
        return false;
    }
    if (response.session.event_handler.status === "started") {
        return false;
    }
    if (response.session.event_handler.status === "succeeded") {
        handle_session_complete_event(response.session);
        return true;
    }
    if (response.session.event_handler.status === "failed") {
        show_error_message(response.session.event_handler.error.message);
        return true;
    }

    return false;
}

function initialize_retry_with_another_card_link_click_handler() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#retry-with-another-card-link").on("click", (e) => {
        e.preventDefault();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#webhook-error").hide();
        _helpers__WEBPACK_IMPORTED_MODULE_2__.create_ajax_request(
            "/json/billing/session/start_retry_payment_intent_session",
            "restartsession",
            [],
            "POST",
            (response) => {
                window.location.replace(response.stripe_session_url);
            },
        );
    });
}

async function stripe_payment_intent_status_check(stripe_payment_intent_id) {
    const response = await jquery__WEBPACK_IMPORTED_MODULE_0___default().get("/json/billing/event/status", {stripe_payment_intent_id});

    switch (response.payment_intent.status) {
        case "requires_payment_method":
            if (response.payment_intent.event_handler.status === "succeeded") {
                show_html_error_message(
                    response.payment_intent.last_payment_error.message +
                        "<br>" +
                        'You can try adding <a id="retry-with-another-card-link"> another card or </a> or retry the upgrade.',
                );
                initialize_retry_with_another_card_link_click_handler();
                return true;
            }
            if (response.payment_intent.event_handler.status === "failed") {
                show_error_message(response.payment_intent.event_handler.error.message);
                return true;
            }
            return false;
        case "succeeded":
            if (response.payment_intent.event_handler.status === "succeeded") {
                update_status_and_redirect(
                    "Charge created successfully. Your organization has been upgraded. Redirecting to billing page...",
                    "/billing/",
                );
                return true;
            }
            if (response.payment_intent.event_handler.status === "failed") {
                show_error_message(response.payment_intent.event_handler.error.message);
                return true;
            }
            return false;
        default:
            return false;
    }
}

async function check_status() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#data").attr("data-stripe-session-id")) {
        return await stripe_checkout_session_status_check(
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#data").attr("data-stripe-session-id"),
        );
    }
    return await stripe_payment_intent_status_check(
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#data").attr("data-stripe-payment-intent-id"),
    );
}

async function start_status_polling() {
    let completed = false;
    try {
        completed = await check_status();
    } catch {
        setTimeout(start_status_polling, 5000);
    }
    if (!completed) {
        setTimeout(start_status_polling, 5000);
    }
}

async function initialize() {
    const form_loading = "#webhook-loading";
    const form_loading_indicator = "#webhook_loading_indicator";

    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_loading_indicator), {
        text: "Processing ...",
        abs_positioned: true,
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_loading).show();
    await start_status_polling();
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    initialize();
});


/***/ }),

/***/ "./static/js/billing/helpers.js":
/*!**************************************!*\
  !*** ./static/js/billing/helpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_ajax_request": () => (/* binding */ create_ajax_request),
/* harmony export */   "format_money": () => (/* binding */ format_money),
/* harmony export */   "is_valid_input": () => (/* binding */ is_valid_input),
/* harmony export */   "set_tab": () => (/* binding */ set_tab),
/* harmony export */   "show_license_section": () => (/* binding */ show_license_section),
/* harmony export */   "update_charged_amount": () => (/* binding */ update_charged_amount),
/* harmony export */   "update_discount_details": () => (/* binding */ update_discount_details)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





function create_ajax_request(
    url,
    form_name,
    ignored_inputs = [],
    type = "POST",
    success_callback,
) {
    const $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${CSS.escape(form_name)}-form`);
    const form_loading_indicator = `#${CSS.escape(form_name)}_loading_indicator`;
    const form_input_section = `#${CSS.escape(form_name)}-input-section`;
    const form_success = `#${CSS.escape(form_name)}-success`;
    const form_error = `#${CSS.escape(form_name)}-error`;
    const form_loading = `#${CSS.escape(form_name)}-loading`;

    const zulip_limited_section = "#zulip-limited-section";
    const free_trial_alert_message = "#free-trial-alert-message";

    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../loading'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_loading_indicator), {
        text: "Processing ...",
        abs_positioned: true,
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_input_section).hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_error).hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_loading).show();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(zulip_limited_section).hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(free_trial_alert_message).hide();

    const data = {};

    for (const item of $form.serializeArray()) {
        if (ignored_inputs.includes(item.name)) {
            continue;
        }
        data[item.name] = item.value;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        type,
        url,
        data,
        success(response) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_loading).hide();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_error).hide();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_success).show();
            if (["autopay", "invoice"].includes(form_name)) {
                if ("pushState" in history) {
                    history.pushState("", document.title, location.pathname + location.search);
                } else {
                    location.hash = "";
                }
            }
            success_callback(response);
        },
        error(xhr) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_loading).hide();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_error).show().text(JSON.parse(xhr.responseText).msg);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(form_input_section).show();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(zulip_limited_section).show();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(free_trial_alert_message).show();
        },
    });
}

function format_money(cents) {
    // allow for small floating point errors
    cents = Math.ceil(cents - 0.001);
    let precision;
    if (cents % 100 === 0) {
        precision = 0;
    } else {
        precision = 2;
    }
    // TODO: Add commas for thousands, millions, etc.
    return (cents / 100).toFixed(precision);
}

function update_charged_amount(prices, schedule) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#charged_amount").text(format_money(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) * prices[schedule]));
}

function update_discount_details(organization_type) {
    let discount_notice =
        "Your organization may be eligible for a discount on Zulip Cloud Standard. Organizations whose members are not employees are generally eligible.";
    const discount_details = {
        opensource: "Zulip Cloud Standard is free for open-source projects.",
        research: "Zulip Cloud Standard is free for academic research.",
        nonprofit: "Zulip Cloud Standard is discounted 85%+ for registered non-profits.",
        event: "Zulip Cloud Standard is free for academic conferences and most non-profit events.",
        education: "Zulip Cloud Standard is discounted 85% for education.",
        education_nonprofit:
            "Zulip Cloud Standard is discounted 90% for education non-profits with online purchase.",
    };
    if (discount_details[organization_type]) {
        discount_notice = discount_details[organization_type];
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sponsorship-discount-details").text(discount_notice);
}

function show_license_section(license) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#license-automatic-section").hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#license-manual-section").hide();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#automatic_license_count").prop("disabled", true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#manual_license_count").prop("disabled", true);

    const section_id = `#license-${CSS.escape(license)}-section`;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(section_id).show();
    const input_id = `#${CSS.escape(license)}_license_count`;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(input_id).prop("disabled", false);
}

let current_page;

function handle_hashchange() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${CSS.escape(current_page)}-tabs.nav a[href="${CSS.escape(location.hash)}"]`).tab("show");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").scrollTop(0);
}

function set_tab(page) {
    const hash = location.hash;
    if (hash) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${CSS.escape(page)}-tabs.nav a[href="${CSS.escape(hash)}"]`).tab("show");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").scrollTop(0);
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${CSS.escape(page)}-tabs.nav-tabs a`).on("click", function () {
        location.hash = this.hash;
    });

    current_page = page;
    window.addEventListener("hashchange", handle_hashchange);
}

function is_valid_input(elem) {
    return elem[0].checkValidity();
}


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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.debugRequireIds = {
/******/ 		"./node_modules/@uppy/core/dist/style.css": "./node_modules/@uppy/core/dist/style.css",
/******/ 		"./node_modules/@uppy/progress-bar/dist/style.css": "./node_modules/@uppy/progress-bar/dist/style.css",
/******/ 		"./node_modules/font-awesome/css/font-awesome.css": "./node_modules/font-awesome/css/font-awesome.css",
/******/ 		"./node_modules/simplebar/dist/simplebar.css": "./node_modules/simplebar/dist/simplebar.css",
/******/ 		"./node_modules/source-code-pro/source-code-pro.css": "./node_modules/source-code-pro/source-code-pro.css",
/******/ 		"./node_modules/source-sans/source-sans-3.css": "./node_modules/source-sans/source-sans-3.css",
/******/ 		"./node_modules/tippy.js/dist/tippy.css": "./node_modules/tippy.js/dist/tippy.css",
/******/ 		"./static/assets/icons/zulip-icons.font": "./static/assets/icons/zulip-icons.font.js",
/******/ 		"./static/assets/icons/zulip-icons.font.js": "./static/assets/icons/zulip-icons.font.js",
/******/ 		"./static/js/billing/event_status.js": "./static/js/billing/event_status.js",
/******/ 		"./static/js/billing/helpers": "./static/js/billing/helpers.js",
/******/ 		"./static/js/bundles/common": "./static/js/bundles/common.js",
/******/ 		"./static/js/bundles/portico": "./static/js/bundles/portico.js",
/******/ 		"./static/js/debug": "./static/js/debug.js",
/******/ 		"./static/js/portico/google-analytics": "./static/js/portico/google-analytics.js",
/******/ 		"./static/js/portico/header": "./static/js/portico/header.js",
/******/ 		"./static/js/webpack_public_path": "./static/js/webpack_public_path.js",
/******/ 		"./static/styles/alerts.css": "./static/styles/alerts.css",
/******/ 		"./static/styles/portico/billing.css": "./static/styles/portico/billing.css",
/******/ 		"./static/styles/portico/landing_page.css": "./static/styles/portico/landing_page.css",
/******/ 		"./static/styles/portico/portico_styles.css": "./static/styles/portico/portico_styles.css",
/******/ 		"./static/styles/pygments.css": "./static/styles/pygments.css",
/******/ 		"./static/third/bootstrap/css/bootstrap-btn.css": "./static/third/bootstrap/css/bootstrap-btn.css",
/******/ 		"./static/third/bootstrap/css/bootstrap.css": "./static/third/bootstrap/css/bootstrap.css",
/******/ 		"./static/third/bootstrap/js/bootstrap": "./static/third/bootstrap/js/bootstrap.js",
/******/ 		"./tools/debug-require": "./tools/debug-require.js",
/******/ 		"@uppy/core/dist/style.css": "./node_modules/@uppy/core/dist/style.css",
/******/ 		"@uppy/progress-bar/dist/style.css": "./node_modules/@uppy/progress-bar/dist/style.css",
/******/ 		"font-awesome/css/font-awesome.css": "./node_modules/font-awesome/css/font-awesome.css",
/******/ 		"ga-gtag": "./node_modules/ga-gtag/lib/index.js",
/******/ 		"jquery": "./node_modules/jquery/dist/jquery.js",
/******/ 		"simplebar/dist/simplebar.css": "./node_modules/simplebar/dist/simplebar.css",
/******/ 		"source-code-pro/source-code-pro.css": "./node_modules/source-code-pro/source-code-pro.css",
/******/ 		"source-sans/source-sans-3.css": "./node_modules/source-sans/source-sans-3.css",
/******/ 		"tippy.js/dist/tippy.css": "./node_modules/tippy.js/dist/tippy.css"
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"billing-event-status": 0,
/******/ 			"vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16": 0,
/******/ 			"static_third_bootstrap_css_bootstrap_css": 0,
/******/ 			"static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839": 0,
/******/ 			"node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css": 0,
/******/ 			"static_styles_portico_billing_css": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkzulip"] = self["webpackChunkzulip"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/bundles/portico.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_billing_css"], () => (__webpack_require__("./static/styles/portico/landing_page.css")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/billing/event_status.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/billing/helpers.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_billing_css"], () => (__webpack_require__("./static/styles/portico/billing.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/debug.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=billing-event-status.js.map