/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/katex/dist/katex.css":
/*!*******************************************!*\
  !*** ./node_modules/katex/dist/katex.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/third/bootstrap-tooltip/tooltip.css":
/*!****************************************************!*\
  !*** ./static/third/bootstrap-tooltip/tooltip.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/third/bootstrap/css/bootstrap-btn.css":
/*!******************************************************!*\
  !*** ./static/third/bootstrap/css/bootstrap-btn.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/third/bootstrap/css/bootstrap.css":
/*!**************************************************!*\
  !*** ./static/third/bootstrap/css/bootstrap.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/styles/rendered_markdown.css":
/*!*********************************************!*\
  !*** ./static/styles/rendered_markdown.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/js/bundles/markdown.css.js":
/*!*******************************************!*\
  !*** ./static/js/bundles/markdown.css.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _third_bootstrap_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third/bootstrap/css/bootstrap.css */ "./static/third/bootstrap/css/bootstrap.css");
/* harmony import */ var _third_bootstrap_css_bootstrap_btn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third/bootstrap/css/bootstrap-btn.css */ "./static/third/bootstrap/css/bootstrap-btn.css");
/* harmony import */ var _third_bootstrap_tooltip_tooltip_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third/bootstrap-tooltip/tooltip.css */ "./static/third/bootstrap-tooltip/tooltip.css");
/* harmony import */ var katex_dist_katex_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! katex/dist/katex.css */ "./node_modules/katex/dist/katex.css");
/* harmony import */ var _styles_rendered_markdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/rendered_markdown.css */ "./static/styles/rendered_markdown.css");
/* eslint-disable import/extensions */

// Import styles
// import "spectrum-colorpicker/spectrum.css";







/***/ }),

/***/ "./static/js/debug.js":
/*!****************************!*\
  !*** ./static/js/debug.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IterationProfiler": () => (/* binding */ IterationProfiler),
/* harmony export */   "check_duplicate_ids": () => (/* binding */ check_duplicate_ids),
/* harmony export */   "print_elapsed_time": () => (/* binding */ print_elapsed_time)
/* harmony export */ });
/* eslint-disable no-console */

// This module is included from webpack in development mode.  To access it from
// the browser console, run:
//   var debug = require("./static/js/debug");

/*
      debug.print_elapsed_time("foo", foo)

    evaluates to foo() and prints the elapsed time
    to the console along with the name "foo". */

function print_elapsed_time(name, fun) {
    const t0 = Date.now();
    const out = fun();
    const t1 = Date.now();
    console.log(name + ": " + (t1 - t0) + " ms");
    return out;
}

function check_duplicate_ids() {
    const ids = new Set();
    const collisions = [];
    let total_collisions = 0;

    for (const o of Array.prototype.slice.call(document.querySelectorAll("*"))) {
        if (o.id && ids.has(o.id)) {
            const el = collisions.find((c) => c.id === o.id);

            ids.add(o.id);
            total_collisions += 1;

            if (!el) {
                const tag = o.tagName.toLowerCase();
                collisions.push({
                    id: o.id,
                    count: 1,
                    node:
                        "<" +
                        tag +
                        " className='" +
                        o.className +
                        "' id='" +
                        o.id +
                        "'>" +
                        "</" +
                        tag +
                        ">",
                });
            } else {
                el.count += 1;
            }
        } else if (o.id) {
            ids.add(o.id);
        }
    }

    return {
        collisions,
        total_collisions,
    };
}

/* An IterationProfiler is used for profiling parts of looping
 * constructs (like a for loop or _.each).  You mark sections of the
 * iteration body and the IterationProfiler will sum the costs of those
 * sections over all iterations.
 *
 * Example:
 *
 *     let ip = new debug.IterationProfiler();
 *     _.each(myarray, function (elem) {
 *         ip.iteration_start();
 *
 *         cheap_op(elem);
 *         ip.section("a");
 *         expensive_op(elem);
 *         ip.section("b");
 *         another_expensive_op(elem);
 *
 *         ip.iteration_stop();
 *     });
 *     ip.done();
 *
 * The console output will look something like:
 *     _iteration_overhead 0.8950002520577982
 *     _rest_of_iteration 153.415000159293413
 *     a 2.361999897402711
 *     b 132.625999901327305
 *
 * The _rest_of_iteration section is the region of the iteration body
 * after section b.
 */
class IterationProfiler {
    sections = new Map();
    last_time = window.performance.now();

    iteration_start() {
        this.section("_iteration_overhead");
    }

    iteration_stop() {
        const now = window.performance.now();
        const diff = now - this.last_time;
        if (diff > 1) {
            this.sections.set(
                "_rest_of_iteration",
                (this.sections.get("_rest_of_iteration") || 0) + diff,
            );
        }
        this.last_time = now;
    }

    section(label) {
        const now = window.performance.now();
        this.sections.set(label, (this.sections.get(label) || 0) + (now - this.last_time));
        this.last_time = now;
    }

    done() {
        this.section("_iteration_overhead");

        for (const [prop, cost] of this.sections) {
            console.log(prop, cost);
        }
    }
}


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"markdown": 0,
/******/ 			"vendors-node_modules_katex_dist_katex_css": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_katex_dist_katex_css"], () => (__webpack_require__("./static/js/bundles/markdown.css.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_katex_dist_katex_css"], () => (__webpack_require__("./static/js/debug.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=markdown.js.map