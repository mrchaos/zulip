/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/styles/portico/billing.css":
/*!*******************************************!*\
  !*** ./static/styles/portico/billing.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/js/billing/billing.js":
/*!**************************************!*\
  !*** ./static/js/billing/billing.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create_update_license_request": () => (/* binding */ create_update_license_request),
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./static/js/billing/helpers.js");




function create_update_license_request() {
    _helpers__WEBPACK_IMPORTED_MODULE_1__.create_ajax_request(
        "/json/billing/plan",
        "licensechange",
        ["licenses_at_next_renewal"],
        "PATCH",
        () => window.location.replace("/billing"),
    );
}

function initialize() {
    _helpers__WEBPACK_IMPORTED_MODULE_1__.set_tab("billing");

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#update-card-button").on("click", (e) => {
        const success_callback = (response) => {
            window.location.replace(response.stripe_session_url);
        };
        _helpers__WEBPACK_IMPORTED_MODULE_1__.create_ajax_request(
            "/json/billing/session/start_card_update_session",
            "cardchange",
            [],
            "POST",
            success_callback,
        );
        e.preventDefault();
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#update-licenses-button").on("click", (e) => {
        if (_helpers__WEBPACK_IMPORTED_MODULE_1__.is_valid_input(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#new_licenses_input")) === false) {
            return;
        }
        e.preventDefault();
        const current_licenses = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#licensechange-input-section").data("licenses");
        const new_licenses = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#new_licenses_input").val();
        if (new_licenses > current_licenses) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#new_license_count_holder").text(new_licenses);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#current_license_count_holder").text(current_licenses);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#confirm-licenses-modal").modal("show");
        } else {
            create_update_license_request();
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#confirm-license-update-button").on("click", () => {
        create_update_license_request();
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#update-licenses-at-next-renewal-button").on("click", (e) => {
        e.preventDefault();
        _helpers__WEBPACK_IMPORTED_MODULE_1__.create_ajax_request(
            "/json/billing/plan",
            "licensechange",
            ["licenses"],
            "PATCH",
            () => window.location.replace("/billing"),
        );
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#change-plan-status").on("click", (e) => {
        _helpers__WEBPACK_IMPORTED_MODULE_1__.create_ajax_request("/json/billing/plan", "planchange", [], "PATCH", () =>
            window.location.replace("/billing"),
        );
        e.preventDefault();
    });
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

/***/ "./static/js/templates.js":
/*!********************************!*\
  !*** ./static/js/templates.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var handlebars_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlebars/runtime */ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js");
/* harmony import */ var handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(handlebars_runtime__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





// Below, we register Zulip-specific extensions to the Handlebars API.
//
// IMPORTANT: When adding a new Handlebars helper, update the
// knownHelpers array in the webpack config so that webpack knows your
// helper is registered at runtime and don't try to require them when
// bundling.

// We don't want to wait for DOM ready to register the Handlebars helpers
// below. There's no need to, as they do not access the DOM.
// Furthermore, waiting for DOM ready would introduce race conditions with
// other DOM-ready callbacks that attempt to render templates.

handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().registerHelper({
    eq(a, b) {
        return a === b;
    },
    and(...args) {
        args.pop(); // Handlebars options
        if (args.length === 0) {
            return true;
        }
        const last = args.pop();
        for (const arg of args) {
            if (!arg || handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().Utils.isEmpty(arg)) {
                return arg;
            }
        }
        return last;
    },
    or(...args) {
        args.pop(); // Handlebars options
        if (args.length === 0) {
            return false;
        }
        const last = args.pop();
        for (const arg of args) {
            if (arg && !handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().Utils.isEmpty(arg)) {
                return arg;
            }
        }
        return last;
    },
    not(a) {
        return !a || handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().Utils.isEmpty(a);
    },
});

handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().registerHelper("t", (message) => {
    // Marks a string for translation.
    // Example usage:
    //     {{t "some English text"}}

    const descriptor = {id: message, defaultMessage: message};
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module './i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(descriptor);
});

handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().registerHelper("tr", function (options) {
    // Marks a block for translation.
    // Example usage 1:
    //     {{#tr}}
    //         <p>some English text</p>
    //     {{/tr}}
    //
    // Example usage 2:
    //     {{#tr}}
    //         <p>This {variable} will get value from the current context</p>
    //     {{/tr}}
    //
    // Note: use `{` and `}` instead of `{{` and `}}` to declare
    // variables.
    const message = options
        .fn(this)
        .trim()
        .split("\n")
        .map((s) => s.trim())
        .join(" ");
    const descriptor = {id: message, defaultMessage: message};
    const result = Object(function webpackMissingModule() { var e = new Error("Cannot find module './i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(descriptor, {
        ...Object(function webpackMissingModule() { var e = new Error("Cannot find module './i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        ...Object.fromEntries(
            Object.entries(options.fn.partials ?? {}).map(([name, value]) => [
                name,
                (s) => value(this, {data: {"partial-block": () => s.join("")}}),
            ]),
        ),
        ...Object.fromEntries(
            Object.entries(this ?? {}).map(([key, value]) => [
                key,
                handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().Utils.escapeExpression(value),
            ]),
        ),
    });
    return new (handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().SafeString)(result);
});

handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().registerHelper(
    "rendered_markdown",
    (content) => new (handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().SafeString)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(content)),
);

handlebars_runtime__WEBPACK_IMPORTED_MODULE_0___default().registerHelper("numberFormat", (number) => number.toLocaleString());


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/base": "./node_modules/handlebars/dist/cjs/handlebars/base.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/decorators": "./node_modules/handlebars/dist/cjs/handlebars/decorators.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/decorators/inline": "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/exception": "./node_modules/handlebars/dist/cjs/handlebars/exception.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/helpers": "./node_modules/handlebars/dist/cjs/handlebars/helpers.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing": "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/helpers/each": "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing": "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/helpers/if": "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/helpers/log": "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup": "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/helpers/with": "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object": "./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access": "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper": "./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/logger": "./node_modules/handlebars/dist/cjs/handlebars/logger.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/no-conflict": "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/runtime": "./node_modules/handlebars/dist/cjs/handlebars/runtime.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/safe-string": "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js",
/******/ 		"./node_modules/handlebars/dist/cjs/handlebars/utils": "./node_modules/handlebars/dist/cjs/handlebars/utils.js",
/******/ 		"./node_modules/simplebar/dist/simplebar.css": "./node_modules/simplebar/dist/simplebar.css",
/******/ 		"./node_modules/source-code-pro/source-code-pro.css": "./node_modules/source-code-pro/source-code-pro.css",
/******/ 		"./node_modules/source-sans/source-sans-3.css": "./node_modules/source-sans/source-sans-3.css",
/******/ 		"./node_modules/tippy.js/dist/tippy.css": "./node_modules/tippy.js/dist/tippy.css",
/******/ 		"./static/assets/icons/zulip-icons.font": "./static/assets/icons/zulip-icons.font.js",
/******/ 		"./static/assets/icons/zulip-icons.font.js": "./static/assets/icons/zulip-icons.font.js",
/******/ 		"./static/js/billing/billing": "./static/js/billing/billing.js",
/******/ 		"./static/js/billing/helpers": "./static/js/billing/helpers.js",
/******/ 		"./static/js/bundles/common": "./static/js/bundles/common.js",
/******/ 		"./static/js/bundles/portico": "./static/js/bundles/portico.js",
/******/ 		"./static/js/debug": "./static/js/debug.js",
/******/ 		"./static/js/portico/google-analytics": "./static/js/portico/google-analytics.js",
/******/ 		"./static/js/portico/header": "./static/js/portico/header.js",
/******/ 		"./static/js/portico/landing-page": "./static/js/portico/landing-page.js",
/******/ 		"./static/js/portico/tabbed-instructions": "./static/js/portico/tabbed-instructions.js",
/******/ 		"./static/js/portico/team": "./static/js/portico/team.js",
/******/ 		"./static/js/templates": "./static/js/templates.js",
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
/******/ 		"handlebars/runtime": "./node_modules/handlebars/dist/cjs/handlebars.runtime.js",
/******/ 		"jquery": "./node_modules/jquery/dist/jquery.js",
/******/ 		"lodash": "./node_modules/lodash/lodash.js",
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
/******/ 			"billing": 0,
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","vendors-node_modules_handlebars_dist_cjs_handlebars_runtime_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/bundles/portico.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","vendors-node_modules_handlebars_dist_cjs_handlebars_runtime_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/portico/landing-page.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","vendors-node_modules_handlebars_dist_cjs_handlebars_runtime_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_billing_css"], () => (__webpack_require__("./static/styles/portico/landing_page.css")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","vendors-node_modules_handlebars_dist_cjs_handlebars_runtime_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/billing/helpers.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","vendors-node_modules_handlebars_dist_cjs_handlebars_runtime_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/billing/billing.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","vendors-node_modules_handlebars_dist_cjs_handlebars_runtime_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/templates.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","vendors-node_modules_handlebars_dist_cjs_handlebars_runtime_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_billing_css"], () => (__webpack_require__("./static/styles/portico/billing.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","vendors-node_modules_handlebars_dist_cjs_handlebars_runtime_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_billing_css"], () => (__webpack_require__("./static/js/debug.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=billing.js.map