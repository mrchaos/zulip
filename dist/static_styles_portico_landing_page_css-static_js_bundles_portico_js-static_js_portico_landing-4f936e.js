"use strict";
(self["webpackChunkzulip"] = self["webpackChunkzulip"] || []).push([["static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e"],{

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

/***/ "./static/js/portico/landing-page.js":
/*!*******************************************!*\
  !*** ./static/js/portico/landing-page.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "path_parts": () => (/* binding */ path_parts)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabbed_instructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbed-instructions */ "./static/js/portico/tabbed-instructions.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team */ "./static/js/portico/team.js");





function path_parts() {
    return window.location.pathname.split("/").filter((chunk) => chunk !== "");
}

const hello_events = function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".footer").addClass("hello");
};

const apps_events = function () {
    const info = {
        windows: {
            image: "/static/images/app-screenshots/microsoft.png",
            alt: "Windows",
            description:
                "Zulip for Windows is even better than Zulip on the web, with a cleaner look, tray integration, native notifications, and support for multiple Zulip accounts.",
            download_link: "/apps/download/windows",
            show_instructions: true,
            install_guide: "/help/desktop-app-install-guide",
            app_type: "desktop",
        },
        mac: {
            image: "/static/images/app-screenshots/macbook.png",
            alt: "macOS",
            description:
                "Zulip on macOS is even better than Zulip on the web, with a cleaner look, tray integration, native notifications, and support for multiple Zulip accounts.",
            download_link: "/apps/download/mac",
            mac_arm64_link: "/apps/download/mac-arm64",
            show_instructions: true,
            install_guide: "/help/desktop-app-install-guide",
            app_type: "desktop",
        },
        android: {
            image: "/static/images/app-screenshots/zulip-android.png",
            alt: "Android",
            description: "Zulip's native Android app makes it easy to keep up while on the go.",
            show_instructions: false,
            play_store_link: "https://play.google.com/store/apps/details?id=com.zulipmobile",
            download_link: "https://github.com/zulip/zulip-mobile/releases/latest",
            app_type: "mobile",
        },
        ios: {
            image: "/static/images/app-screenshots/zulip-iphone-rough.png",
            alt: "iOS",
            description: "Zulip's native iOS app makes it easy to keep up while on the go.",
            show_instructions: false,
            app_store_link: "https://itunes.apple.com/us/app/zulip/id1203036395",
            app_type: "mobile",
        },
        linux: {
            image: "/static/images/app-screenshots/ubuntu.png",
            alt: "Linux",
            description:
                "Zulip on the Linux desktop is even better than Zulip on the web, with a cleaner look, tray integration, native notifications, and support for multiple Zulip accounts.",
            download_link: "/apps/download/linux",
            show_instructions: true,
            install_guide: "/help/desktop-app-install-guide",
            app_type: "desktop",
        },
    };

    let version;

    function get_version_from_path() {
        let result;
        const parts = path_parts();

        for (const version of Object.keys(info)) {
            if (parts.includes(version)) {
                result = version;
            }
        }

        result = result || (0,_tabbed_instructions__WEBPACK_IMPORTED_MODULE_1__.detect_user_os)();
        return result;
    }

    const update_page = function () {
        const $download_instructions = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".download-instructions");
        const $third_party_apps = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#third-party-apps");
        const $download_android_apk = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#download-android-apk");
        const $download_from_google_play_store = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".download-from-google-play-store");
        const $download_from_apple_app_store = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".download-from-apple-app-store");
        const $download_mac_arm64 = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#download-mac-arm64");
        const $desktop_download_link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".desktop-download-link");
        const version_info = info[version];

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".info .platform").text(version_info.alt);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".info .description").text(version_info.description);
        $desktop_download_link.attr("href", version_info.download_link);
        $download_from_google_play_store.attr("href", version_info.play_store_link);
        $download_from_apple_app_store.attr("href", version_info.app_store_link);
        $download_android_apk.attr("href", version_info.download_link);
        $download_mac_arm64.attr("href", version_info.mac_arm64_link);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".image img").attr("src", version_info.image);
        $download_instructions.find("a").attr("href", version_info.install_guide);

        $download_instructions.toggle(version_info.show_instructions);

        $third_party_apps.toggle(version_info.app_type === "desktop");
        $desktop_download_link.toggle(version_info.app_type === "desktop");
        $download_android_apk.toggle(version === "android");
        $download_from_google_play_store.toggle(version === "android");
        $download_from_apple_app_store.toggle(version === "ios");
        $download_mac_arm64.toggle(version === "mac");
    };

    // init
    version = get_version_from_path();
    update_page();
};

const events = function () {
    // get the location url like `zulip.com/features/`, cut off the trailing
    // `/` and then split by `/` to get ["zulip.com", "features"], then
    // pop the last element to get the current section (eg. `features`).
    const location = window.location.pathname.replace(/\/$/, "").split(/\//).pop();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`[data-on-page='${CSS.escape(location)}']`).addClass("active");

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").on("click", (e) => {
        const $e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target);

        if ($e.is("nav ul .exit")) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("nav ul").css("transform", "translate(-350px, 0)");
            // See https://ishadeed.com/article/layout-flickering/ for
            // more context as to why the following timeout is important.
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("nav ul").removeClass("show");
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("nav ul").css("transform", "");
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("noscroll");
            }, 500);
        }

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("nav ul.show") && !$e.closest("nav ul.show").length && !$e.is("nav ul.show")) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("nav ul").removeClass("show");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("noscroll");
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hamburger").on("click", (e) => {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("nav ul").addClass("show");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("noscroll");
        e.stopPropagation();
    });

    if (path_parts().includes("apps")) {
        apps_events();
    }

    if (path_parts().includes("hello")) {
        hello_events();
    }
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    // Initiate the bootstrap carousel logic
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".carousel").carousel({
        interval: false,
    });

    // Move to the next slide on clicking inside the carousel container
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".carousel-inner .item-container").on("click", function (e) {
        const get_tag_name = e.target.tagName.toLowerCase();
        const is_button = get_tag_name === "button";
        const is_link = get_tag_name === "a";
        const is_last_slide = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tour-carousel .carousel-inner .item:last-child").hasClass(
            "active",
        );

        // Do not trigger this event if user clicks on a button, link
        // or if it's the last slide
        const move_slide_forward = !is_button && !is_link && !is_last_slide;

        if (move_slide_forward) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".carousel").carousel("next");
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".carousel").on("slid", function () {
        const $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        $this.find(".visibility-control").show();
        if ($this.find(".carousel-inner .item").first().hasClass("active")) {
            $this.find(".left.visibility-control").hide();
        } else if ($this.find(".carousel-inner .item").last().hasClass("active")) {
            $this.find(".right.visibility-control").hide();
        }
    });

    // Set up events / categories / search
    events();

    if (window.location.pathname === "/team/") {
        (0,_team__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    // Source: https://stackoverflow.com/questions/819416/adjust-width-and-height-of-iframe-to-fit-with-content-in-it
    // Resize tweet to avoid overlapping with image. Since tweet uses an iframe which doesn't adjust with
    // screen resize, we need to manually adjust its width.

    function resizeIFrameToFitContent(iFrame) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(iFrame).width("38vw");
    }

    window.addEventListener("resize", () => {
        const iframes = document.querySelectorAll(".twitter-tweet iframe");
        for (const iframe of iframes) {
            resizeIFrameToFitContent(iframe);
        }
    });
});

// Scroll to anchor link when clicked. Note that help.js has a similar
// function; this file and help.js are never included on the same
// page.
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("click", ".markdown h1, .markdown h2, .markdown h3", function () {
    window.location.hash = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("id");
});


/***/ }),

/***/ "./static/js/portico/tabbed-instructions.js":
/*!**************************************************!*\
  !*** ./static/js/portico/tabbed-instructions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activate_correct_tab": () => (/* binding */ activate_correct_tab),
/* harmony export */   "detect_user_os": () => (/* binding */ detect_user_os)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function detect_user_os() {
    if (/android/i.test(navigator.userAgent)) {
        return "android";
    }
    if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
        return "ios";
    }
    if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '../common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()) {
        return "mac";
    }
    if (/win/i.test(navigator.userAgent)) {
        return "windows";
    }
    if (/linux/i.test(navigator.userAgent)) {
        return "linux";
    }
    return "mac"; // if unable to determine OS return Mac by default
}

function activate_correct_tab($codeSection) {
    const user_os = detect_user_os();
    const desktop_os = new Set(["mac", "linux", "windows"]);
    const $li = $codeSection.find("ul.nav li");
    const $blocks = $codeSection.find(".blocks div");

    $li.each(function () {
        const language = this.dataset.language;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("active");
        if (language === user_os) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
        }

        if (desktop_os.has(user_os) && language === "desktop-web") {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
        }
    });

    $blocks.each(function () {
        const language = this.dataset.language;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("active");
        if (language === user_os) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
        }

        if (desktop_os.has(user_os) && language === "desktop-web") {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("active");
        }
    });

    // if no tab was activated, just activate the first one
    const $active_list_items = $li.filter(".active");
    if (!$active_list_items.length) {
        $li.first().addClass("active");
        const language = $li.first()[0].dataset.language;
        $blocks.filter("[data-language=" + language + "]").addClass("active");
    }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".code-section").each(function () {
    activate_correct_tab(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
});


/***/ }),

/***/ "./static/js/portico/team.js":
/*!***********************************!*\
  !*** ./static/js/portico/team.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render_tabs)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const repo_name_to_tab_name = {
    zulip: "server",
    "zulip-desktop": "desktop",
    "zulip-mobile": "mobile",
    "python-zulip-api": "python-zulip-api",
    "zulip-js": "zulip-js",
    zulipbot: "zulipbot",
    "zulip-terminal": "terminal",
    "zulip-ios-legacy": "",
    "zulip-android": "",
};

// Remember the loaded repositories so that HTML is not redundantly edited
// if a user leaves and then revisits the same tab.
const loaded_repos = [];

function calculate_total_commits(contributor) {
    let commits = 0;
    for (const repo_name of Object.keys(repo_name_to_tab_name)) {
        commits += contributor[repo_name] || 0;
    }
    return commits;
}

function get_profile_url(contributor, tab_name) {
    const commit_email_linked_to_github = "github_username" in contributor;

    if (commit_email_linked_to_github) {
        return "https://github.com/" + contributor.github_username;
    }

    const email = contributor.email;

    if (tab_name) {
        return `https://github.com/zulip/${tab_name}/commits?author=${email}`;
    }

    for (const repo_name in repo_name_to_tab_name) {
        if (repo_name in contributor) {
            return `https://github.com/zulip/${repo_name}/commits?author=${email}`;
        }
    }

    return undefined;
}

function get_display_name(contributor) {
    if (contributor.github_username) {
        return "@" + contributor.github_username;
    }
    return contributor.name;
}

function exclude_bot_contributors(contributor) {
    return contributor.github_username !== "dependabot[bot]";
}

// TODO (for v2 of /team contributors):
//   - Make tab header responsive.
//   - Display full name instead of GitHub username.
function render_tabs() {
    const template = lodash__WEBPACK_IMPORTED_MODULE_1___default().template(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#contributors-template").html());
    const count_template = lodash__WEBPACK_IMPORTED_MODULE_1___default().template(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#count-template").html());
    const total_count_template = lodash__WEBPACK_IMPORTED_MODULE_1___default().template(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#total-count-template").html());
    const contributors_list = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((c) => exclude_bot_contributors(c));
    const mapped_contributors_list = contributors_list.map((c) => ({
        name: get_display_name(c),
        github_username: c.github_username,
        avatar: c.avatar,
        profile_url: get_profile_url(c),
        commits: calculate_total_commits(c),
    }));
    const total_tab_html = mapped_contributors_list
        .sort((a, b) => (a.commits < b.commits ? 1 : a.commits > b.commits ? -1 : 0))
        .map((c) => template(c))
        .join("");

    const hundred_plus_total_contributors = mapped_contributors_list.filter(
        (c) => c.commits >= 100,
    );

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tab-total .contributors-grid").html(total_tab_html);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tab-total").prepend(
        total_count_template({
            contributor_count: contributors_list.length,
            tab_name: "total",
            hundred_plus_contributor_count: hundred_plus_total_contributors.length,
        }),
    );

    for (const repo_name of Object.keys(repo_name_to_tab_name)) {
        const tab_name = repo_name_to_tab_name[repo_name];
        if (!tab_name) {
            continue;
        }
        // Set as the loading template for now, and load when clicked.
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#tab-${CSS.escape(tab_name)} .contributors-grid`).html(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#loading-template").html());

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${CSS.escape(tab_name)}`).on("click", () => {
            if (!loaded_repos.includes(repo_name)) {
                const filtered_by_repo = contributors_list.filter((c) => c[repo_name]);
                const html = filtered_by_repo
                    .sort((a, b) =>
                        a[repo_name] < b[repo_name] ? 1 : a[repo_name] > b[repo_name] ? -1 : 0,
                    )
                    .map((c) =>
                        template({
                            name: get_display_name(c),
                            github_username: c.github_username,
                            avatar: c.avatar,
                            profile_url: get_profile_url(c),
                            commits: c[repo_name],
                        }),
                    )
                    .join("");

                jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#tab-${CSS.escape(tab_name)} .contributors-grid`).html(html);
                const contributor_count = filtered_by_repo.length;
                const hundred_plus_contributor_count = filtered_by_repo.filter(
                    (c) => c[repo_name] >= 100,
                ).length;
                const repo_url = `https://github.com/zulip/${repo_name}`;
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#tab-${CSS.escape(tab_name)}`).prepend(
                    count_template({
                        contributor_count,
                        repo_name,
                        repo_url,
                        hundred_plus_contributor_count,
                    }),
                );

                loaded_repos.push(repo_name);
            }
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=static_styles_portico_landing_page_css-static_js_bundles_portico_js-static_js_portico_landing-4f936e.js.map