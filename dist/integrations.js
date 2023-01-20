/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/styles/portico/integrations.css":
/*!************************************************!*\
  !*** ./static/styles/portico/integrations.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/js/portico/integrations.js":
/*!*******************************************!*\
  !*** ./static/js/portico/integrations.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../blueslip'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-analytics */ "./static/js/portico/google-analytics.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page */ "./static/js/portico/landing-page.js");










// these constants are populated immediately with data from the DOM on page load
// name -> display name
const INTEGRATIONS = new Map();
const CATEGORIES = new Map();

function load_data() {
    for (const integration of jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-lozenge")) {
        const name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(integration).data("name");
        const display_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(integration).find(".integration-name").text().trim();

        if (display_name && name) {
            INTEGRATIONS.set(name, display_name);
        }
    }

    for (const category of jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-category")) {
        const name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(category).data("category");
        const display_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(category).text().trim();

        if (display_name && name) {
            CATEGORIES.set(name, display_name);
        }
    }
}

const INITIAL_STATE = {
    category: "all",
    integration: null,
    query: "",
};

let state = {...INITIAL_STATE};

function adjust_font_sizing() {
    for (const integration of jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-lozenge")) {
        const $integration_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(integration).find(".integration-name");
        const $integration_category = jquery__WEBPACK_IMPORTED_MODULE_0___default()(integration).find(".integration-category");

        // if the text has wrapped to two lines, decrease font-size
        if ($integration_name.height() > 30) {
            $integration_name.css("font-size", "1em");
            if ($integration_name.height() > 30) {
                $integration_name.css("font-size", ".95em");
            }
        }

        if ($integration_category.height() > 30) {
            $integration_category.css("font-size", ".8em");
            if ($integration_category.height() > 30) {
                $integration_category.css("font-size", ".75em");
            }
        }
    }
}

function update_path() {
    let next_path;
    if (state.integration) {
        next_path = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.integration-lozenge[data-name="${CSS.escape(state.integration)}"]`)
            .closest("a")
            .attr("href");
    } else if (state.category) {
        next_path = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.integration-category[data-category="${CSS.escape(state.category)}"]`)
            .closest("a")
            .attr("href");
    } else {
        next_path = "/";
    }

    window.history.pushState(state, "", next_path);
    _google_analytics__WEBPACK_IMPORTED_MODULE_3__.config({page_path: next_path});
}

function update_categories() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-lozenges").css("opacity", 0);

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-category").removeClass("selected");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`[data-category="${CSS.escape(state.category)}"]`).addClass("selected");

    const $dropdown_label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-categories-dropdown .dropdown-category-label");
    if (state.category === INITIAL_STATE.category) {
        $dropdown_label.text(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Filter by category"}));
    } else {
        $dropdown_label.text(CATEGORIES.get(state.category));
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-lozenges").animate({opacity: 1}, {duration: 400});

    adjust_font_sizing();
}

const update_integrations = lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(() => {
    const max_scrollY = window.scrollY;

    for (const integration of jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-lozenges").find(".integration-lozenge")) {
        const $integration = jquery__WEBPACK_IMPORTED_MODULE_0___default()(integration);
        const $integration_category = $integration.find(".integration-category");

        if (state.category !== "all") {
            $integration_category.css("display", "none");
            $integration.addClass("without-category");
        } else {
            $integration_category.css("display", "");
            $integration.removeClass("without-category");
        }

        if (!$integration.hasClass("integration-create-your-own")) {
            const display_name = INTEGRATIONS.get($integration.data("name"));
            const display =
                Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(state.query, display_name) &&
                ($integration.data("categories").includes(CATEGORIES.get(state.category)) ||
                    state.category === "all");

            if (display) {
                $integration.css("display", "inline-block");
            } else {
                $integration.css("display", "none");
            }
        }

        document.body.scrollTop = Math.min(window.scrollY, max_scrollY);
    }

    adjust_font_sizing();
}, 50);

function hide_catalog_show_integration() {
    const $lozenge_icon = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
        `.integration-lozenge.integration-${CSS.escape(state.integration)}`,
    ).clone(false);
    $lozenge_icon.removeClass("legacy");

    const categories = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.integration-${CSS.escape(state.integration)}`)
        .data("categories")
        .slice(1, -1)
        .split(",")
        .map((category) => category.trim().slice(1, -1));

    function show_integration(doc) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instructions-group .name").text(INTEGRATIONS.get(state.integration));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instructions-group .categories .integration-category").remove();
        for (const category of categories) {
            let link;
            for (const [name, display_name] of CATEGORIES) {
                if (display_name === category) {
                    link = name;
                }
            }
            const $category_el = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<a>")
                .attr("href", "/integrations/" + link)
                .append(
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()("<h3>")
                        .addClass("integration-category")
                        .attr("data-category", link)
                        .text(category),
                );
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instructions-group .categories").append($category_el);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instructions-group").css({
            opacity: 0,
            display: "flex",
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-instructions").css("display", "none");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${CSS.escape(state.integration)}.integration-instructions .help-content`).html(doc);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instruction-block .integration-lozenge").remove();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instruction-block").append($lozenge_icon).css("display", "flex");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.integration-instructions#${CSS.escape(state.integration)}`).css("display", "block");

        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({scrollTop: 0}, {duration: 200});
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instructions-group").animate({opacity: 1}, {duration: 300});

        adjust_font_sizing();
    }

    function hide_catalog(doc) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-categories-dropdown").css("display", "none");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integrations .catalog").addClass("hide");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".extra, .integration-main-text, #integration-search").css("display", "none");

        show_integration(doc);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".main").css("visibility", "visible");
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default().get({
        url: "/integrations/doc-html/" + state.integration,
        dataType: "html",
        success: hide_catalog,
        error(err) {
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../blueslip'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
                "Integration documentation for '" + state.integration + "' not found.",
                err,
            );
        },
    });
}

function hide_integration_show_catalog() {
    function show_catalog() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({scrollTop: 0}, {duration: 200});

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-categories-dropdown").css("display", "");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integrations .catalog").removeClass("hide");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".extra, .integration-main-text, #integration-search").css("display", "block");
        adjust_font_sizing();
    }

    function hide_integration() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instruction-block").css("display", "none");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instructions-group").css("display", "none");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".inner-content").css({padding: ""});
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#integration-instruction-block .integration-lozenge").remove();
        show_catalog();
    }

    hide_integration();
}

function get_state_from_path() {
    const result = {...INITIAL_STATE};
    result.query = state.query;

    const parts = (0,_landing_page__WEBPACK_IMPORTED_MODULE_4__.path_parts)();
    if (parts[1] === "doc" && INTEGRATIONS.get(parts[2])) {
        result.integration = parts[2];
    } else if (CATEGORIES.has(parts[1])) {
        result.category = parts[1];
    }

    return result;
}

function render(next_state) {
    const previous_state = {...state};
    state = next_state;

    if (previous_state.integration !== next_state.integration && next_state.integration !== null) {
        hide_catalog_show_integration();
    } else {
        if (previous_state.integration !== next_state.integration) {
            hide_integration_show_catalog();
        }

        if (previous_state.category !== next_state.category) {
            update_categories();
            update_integrations();
        }

        if (previous_state.query !== next_state.query) {
            update_integrations();
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".main").css("visibility", "visible");
    }
}

function dispatch(action, payload) {
    switch (action) {
        case "CHANGE_CATEGORY":
            render({...state, category: payload.category});
            update_path();
            break;

        case "SHOW_INTEGRATION":
            render({...state, integration: payload.integration});
            update_path();
            break;

        case "HIDE_INTEGRATION":
            render({...state, integration: null});
            update_path();
            break;

        case "SHOW_CATEGORY":
            render({...state, integration: null, category: payload.category});
            update_path();
            break;

        case "UPDATE_QUERY":
            render({...state, query: payload.query});
            break;

        case "LOAD_PATH":
            render(get_state_from_path());
            _google_analytics__WEBPACK_IMPORTED_MODULE_3__.config({page_path: window.location.pathname});
            break;

        default:
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../blueslip'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Invalid action dispatched on /integrations.");
            break;
    }
}

function toggle_categories_dropdown() {
    const $dropdown_list = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-categories-dropdown .dropdown-list");
    $dropdown_list.slideToggle(250);
}

function integration_events() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#integration-search input[type="text"]').on("keypress", (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            for (const integration_element of jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-lozenges").children()) {
                const $integration = jquery__WEBPACK_IMPORTED_MODULE_0___default()(integration_element).find(".integration-lozenge");

                if ($integration.css("display") !== "none") {
                    $integration.closest("a")[0].click();
                    break;
                }
            }
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-categories-dropdown .dropdown-toggle").on("click", () => {
        toggle_categories_dropdown();
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-instruction-block").on("click", "a .integration-category", (e) => {
        e.preventDefault();
        const category = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data("category");
        dispatch("SHOW_CATEGORY", {category});
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integrations a .integration-category").on("click", (e) => {
        e.preventDefault();
        const category = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data("category");
        dispatch("CHANGE_CATEGORY", {category});
        toggle_categories_dropdown();
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integrations a .integration-lozenge").on("click", (e) => {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(".integration-lozenge").hasClass("integration-create-your-own")) {
            e.preventDefault();
            const integration = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(".integration-lozenge").data("name");
            dispatch("SHOW_INTEGRATION", {integration});
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("a#integration-list-link span, a#integration-list-link i").on("click", (e) => {
        e.preventDefault();
        dispatch("HIDE_INTEGRATION");
    });

    // combine selector use for both focusing the integrations searchbar and adding
    // the input event.
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integrations .searchbar input[type='text']").on("input", (e) => {
        dispatch("UPDATE_QUERY", {query: e.target.value.toLowerCase()});
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("scroll", () => {
        if (document.body.scrollTop > 330) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-categories-sidebar").addClass("sticky");
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integration-categories-sidebar").removeClass("sticky");
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("resize", () => {
        adjust_font_sizing();
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("popstate", () => {
        if (window.location.pathname.startsWith("/integrations")) {
            dispatch("LOAD_PATH");
        } else {
            window.location = window.location.href;
        }
    });
}

// init
jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    integration_events();
    load_data();
    dispatch("LOAD_PATH");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".integrations .searchbar input[type='text']").trigger("focus");
    adjust_font_sizing();
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
/******/ 		"./node_modules/simplebar/dist/simplebar.css": "./node_modules/simplebar/dist/simplebar.css",
/******/ 		"./node_modules/source-code-pro/source-code-pro.css": "./node_modules/source-code-pro/source-code-pro.css",
/******/ 		"./node_modules/source-sans/source-sans-3.css": "./node_modules/source-sans/source-sans-3.css",
/******/ 		"./node_modules/tippy.js/dist/tippy.css": "./node_modules/tippy.js/dist/tippy.css",
/******/ 		"./static/assets/icons/zulip-icons.font": "./static/assets/icons/zulip-icons.font.js",
/******/ 		"./static/assets/icons/zulip-icons.font.js": "./static/assets/icons/zulip-icons.font.js",
/******/ 		"./static/js/bundles/common": "./static/js/bundles/common.js",
/******/ 		"./static/js/bundles/portico": "./static/js/bundles/portico.js",
/******/ 		"./static/js/debug": "./static/js/debug.js",
/******/ 		"./static/js/portico/google-analytics": "./static/js/portico/google-analytics.js",
/******/ 		"./static/js/portico/header": "./static/js/portico/header.js",
/******/ 		"./static/js/portico/integrations": "./static/js/portico/integrations.js",
/******/ 		"./static/js/portico/landing-page": "./static/js/portico/landing-page.js",
/******/ 		"./static/js/portico/tabbed-instructions": "./static/js/portico/tabbed-instructions.js",
/******/ 		"./static/js/portico/team": "./static/js/portico/team.js",
/******/ 		"./static/js/webpack_public_path": "./static/js/webpack_public_path.js",
/******/ 		"./static/styles/alerts.css": "./static/styles/alerts.css",
/******/ 		"./static/styles/portico/integrations.css": "./static/styles/portico/integrations.css",
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
/******/ 			"integrations": 0,
/******/ 			"vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16": 0,
/******/ 			"static_third_bootstrap_css_bootstrap_css": 0,
/******/ 			"static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839": 0,
/******/ 			"node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css": 0,
/******/ 			"static_styles_portico_integrations_css": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_integrations_css"], () => (__webpack_require__("./static/js/bundles/portico.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_integrations_css"], () => (__webpack_require__("./static/js/portico/integrations.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_integrations_css"], () => (__webpack_require__("./static/styles/portico/landing_page.css")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_integrations_css"], () => (__webpack_require__("./static/styles/portico/integrations.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_lodash_lodash_js","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839","node_modules_tippy_js_dist_tippy_css-static_styles_portico_landing_page_css","static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e","static_styles_portico_integrations_css"], () => (__webpack_require__("./static/js/debug.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=integrations.js.map