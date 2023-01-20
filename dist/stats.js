/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/styles/portico/portico_styles.css":
/*!**************************************************!*\
  !*** ./static/styles/portico/portico_styles.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/styles/portico/stats.css":
/*!*****************************************!*\
  !*** ./static/styles/portico/stats.css ***!
  \*****************************************/
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

/***/ "./static/js/stats/stats.js":
/*!**********************************!*\
  !*** ./static/js/stats/stats.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var plotly_js_lib_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plotly.js/lib/bar */ "./node_modules/plotly.js/lib/bar.js");
/* harmony import */ var plotly_js_lib_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plotly_js_lib_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plotly.js/lib/core */ "./node_modules/plotly.js/lib/core.js");
/* harmony import */ var plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var plotly_js_lib_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! plotly.js/lib/pie */ "./node_modules/plotly.js/lib/pie.js");
/* harmony import */ var plotly_js_lib_pie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(plotly_js_lib_pie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());









plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().register([(plotly_js_lib_bar__WEBPACK_IMPORTED_MODULE_1___default()), (plotly_js_lib_pie__WEBPACK_IMPORTED_MODULE_3___default())]);

const font_14pt = {
    family: "Open Sans, sans-serif",
    size: 14,
    color: "#000000",
};

const font_12pt = {
    family: "Open Sans, sans-serif",
    size: 12,
    color: "#000000",
};

let last_full_update = Number.POSITIVE_INFINITY;

// Copied from attachments_ui.js
function bytes_to_size(bytes, kb_with_1024_bytes = false) {
    const kb_size = kb_with_1024_bytes ? 1024 : 1000;
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    if (bytes === 0) {
        return "0 B";
    }
    const i = Number.parseInt(Math.floor(Math.log(bytes) / Math.log(kb_size)), 10);
    let size = Math.round(bytes / Math.pow(kb_size, i));
    if (i > 0 && size < 10) {
        size = Math.round((bytes / Math.pow(kb_size, i)) * 10) / 10;
    }
    return size + " " + sizes[i];
}

// TODO: should take a dict of arrays and do it for all keys
function partial_sums(array) {
    let accumulator = 0;
    return array.map((o) => {
        accumulator += o;
        return accumulator;
    });
}

// Assumes date is a round number of hours
function floor_to_local_day(date) {
    const date_copy = new Date(date.getTime());
    date_copy.setHours(0);
    return date_copy;
}

// Assumes date is a round number of hours
function floor_to_local_week(date) {
    const date_copy = floor_to_local_day(date);
    date_copy.setHours(-24 * date.getDay());
    return date_copy;
}

function format_date(date, include_hour) {
    const months = [
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "January"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "February"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "March"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "April"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "May"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "June"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "July"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "August"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "September"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "October"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "November"}),
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "December"}),
    ];
    const month_str = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    if (include_hour) {
        const hour = date.getHours();

        const str = hour >= 12 ? "PM" : "AM";

        return month_str + " " + day + ", " + (hour % 12) + ":00" + str;
    }
    return month_str + " " + day + ", " + year;
}

function update_last_full_update(end_times) {
    if (end_times.length === 0) {
        return;
    }

    last_full_update = Math.min(last_full_update, end_times.at(-1));
    const update_time = new Date(last_full_update * 1000);
    const locale_date = update_time.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const locale_time = update_time.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_last_full_update").text(locale_time + " on " + locale_date);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_last_full_update").closest(".last-update").show();
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    (0,tippy_js__WEBPACK_IMPORTED_MODULE_5__["default"])(".last_update_tooltip", {
        // Same defaults as set in our tippyjs module.
        maxWidth: 300,
        delay: [100, 20],
        animation: false,
        touch: ["hold", 750],
        placement: "top",
    });
    // Add configuration for any additional tooltips here.
});

// Helper used in vertical bar charts
function make_rangeselector(button1, button2) {
    return {
        x: -0.045,
        y: -0.62,
        buttons: [
            {stepmode: "backward", ...button1},
            {stepmode: "backward", ...button2},
            {step: "all", label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "All time"})},
        ],
    };
}

// SUMMARY STATISTICS
function get_user_summary_statistics(data) {
    if (data.length === 0) {
        return;
    }

    // Users that are not deactivated and are not bots.
    const total_users = data.all_time.at(-1);
    const total_users_string = total_users.toLocaleString();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_total_users").text(total_users_string);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_total_users").closest("summary-stats").show();

    // Users that have been active in the last 15 days and are not bots.
    const active_fifeteen_day_users = data._15day.at(-1);
    const active_fifteen_day_users_string = active_fifeteen_day_users.toLocaleString();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_active_fifteen_day_users").text(active_fifteen_day_users_string);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_active_fifteen_day_users").closest("summary-stats").show();
}

function get_total_messages_sent(data) {
    if (data.length === 0) {
        return;
    }

    const total_messages_sent = data.human.at(-1) + data.bot.at(-1);
    const total_messages_string = total_messages_sent.toLocaleString();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_total_messages_sent").text(total_messages_string);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_total_messages_sent").closest("summary-stats").show();
}

function get_thirty_days_messages_sent(data) {
    if (data.length === 0) {
        return;
    }

    const thirty_days_bot_messages = data.bot
        .slice(-30)
        .reduce((total_messages, day_messages) => total_messages + day_messages);
    const thirty_days_human_messages = data.human
        .slice(-30)
        .reduce((total_messages, day_messages) => total_messages + day_messages);

    const thirty_days_total_messages = thirty_days_bot_messages + thirty_days_human_messages;
    const thirty_days_messages_string = thirty_days_total_messages.toLocaleString();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_thirty_days_messages_sent").text(thirty_days_messages_string);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_thirty_days_messages_sent").closest("summary-stats").show();
}

function set_storage_space_used_statistic(upload_space_used) {
    let space_used = "N/A";
    if (upload_space_used !== null) {
        space_used = bytes_to_size(upload_space_used, true);
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_storage_space_used").text(space_used);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_storage_space_used").closest("summary-stats").show();
}

function set_guest_users_statistic(guest_users) {
    let guest_users_string = "N/A";
    if (guest_users !== null) {
        guest_users_string = guest_users.toLocaleString();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_guest_users_count").text(guest_users_string);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_guest_users_count").closest("summary-stats").show();
}

// PLOTLY CHARTS
function populate_messages_sent_over_time(data) {
    if (data.end_times.length === 0) {
        // TODO: do something nicer here
        return;
    }

    // Helper functions
    function make_traces(dates, values, type, date_formatter) {
        const text = dates.map((date) => date_formatter(date));
        const common = {x: dates, type, hoverinfo: "none", text, textposition: "none"};
        return {
            human: {
                // 5062a0
                name: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Humans"}),
                y: values.human,
                marker: {color: "#5f6ea0"},
                ...common,
            },
            bot: {
                // a09b5f bbb56e
                name: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Bots"}),
                y: values.bot,
                marker: {color: "#b7b867"},
                ...common,
            },
            me: {
                name: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Me"}),
                y: values.me,
                marker: {color: "#be6d68"},
                ...common,
            },
        };
    }

    const layout = {
        barmode: "group",
        width: 750,
        height: 400,
        margin: {l: 40, r: 10, b: 40, t: 0},
        xaxis: {
            fixedrange: true,
            rangeslider: {bordercolor: "#D8D8D8", borderwidth: 1},
            type: "date",
            tickangle: 0,
        },
        yaxis: {fixedrange: true, rangemode: "tozero"},
        legend: {
            x: 0.62,
            y: 1.12,
            orientation: "h",
            font: font_14pt,
        },
        font: font_12pt,
    };

    // This is also the cumulative rangeselector
    const daily_rangeselector = make_rangeselector(
        {count: 10, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 10 days"}), step: "day"},
        {count: 30, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 30 days"}), step: "day"},
    );
    const weekly_rangeselector = make_rangeselector(
        {count: 2, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 2 months"}), step: "month"},
        {count: 6, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 6 months"}), step: "month"},
    );

    function add_hover_handler() {
        document.querySelector("#id_messages_sent_over_time").on("plotly_hover", (data) => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#hoverinfo").show();
            document.querySelector("#hover_date").textContent =
                data.points[0].data.text[data.points[0].pointNumber];
            const values = [null, null, null];
            for (const trace of data.points) {
                values[trace.curveNumber] = trace.y;
            }
            const hover_text_ids = ["#hover_me", "#hover_human", "#hover_bot"];
            const hover_value_ids = ["#hover_me_value", "#hover_human_value", "#hover_bot_value"];
            for (const [i, value] of values.entries()) {
                if (value !== null) {
                    document.querySelector(hover_text_ids[i]).style.display = "inline";
                    document.querySelector(hover_value_ids[i]).style.display = "inline";
                    document.querySelector(hover_value_ids[i]).textContent = value;
                } else {
                    document.querySelector(hover_text_ids[i]).style.display = "none";
                    document.querySelector(hover_value_ids[i]).style.display = "none";
                }
            }
        });
    }

    const start_dates = data.end_times.map(
        (timestamp) =>
            // data.end_times are the ends of hour long intervals.
            new Date(timestamp * 1000 - 60 * 60 * 1000),
    );

    function aggregate_data(aggregation) {
        let start;
        let is_boundary;
        if (aggregation === "day") {
            start = floor_to_local_day(start_dates[0]);
            is_boundary = function (date) {
                return date.getHours() === 0;
            };
        } else if (aggregation === "week") {
            start = floor_to_local_week(start_dates[0]);
            is_boundary = function (date) {
                return date.getHours() === 0 && date.getDay() === 0;
            };
        }
        const dates = [start];
        const values = {human: [], bot: [], me: []};
        let current = {human: 0, bot: 0, me: 0};
        let i_init = 0;
        if (is_boundary(start_dates[0])) {
            current = {
                human: data.everyone.human[0],
                bot: data.everyone.bot[0],
                me: data.user.human[0],
            };
            i_init = 1;
        }
        for (let i = i_init; i < start_dates.length; i += 1) {
            if (is_boundary(start_dates[i])) {
                dates.push(start_dates[i]);
                values.human.push(current.human);
                values.bot.push(current.bot);
                values.me.push(current.me);
                current = {human: 0, bot: 0, me: 0};
            }
            current.human += data.everyone.human[i];
            current.bot += data.everyone.bot[i];
            current.me += data.user.human[i];
        }
        values.human.push(current.human);
        values.bot.push(current.bot);
        values.me.push(current.me);
        return {
            dates,
            values,
            last_value_is_partial: !is_boundary(
                new Date(start_dates.at(-1).getTime() + 60 * 60 * 1000),
            ),
        };
    }

    // Generate traces
    let date_formatter = function (date) {
        return format_date(date, true);
    };
    let values = {me: data.user.human, human: data.everyone.human, bot: data.everyone.bot};

    let info = aggregate_data("day");
    date_formatter = function (date) {
        return format_date(date, false);
    };
    const last_day_is_partial = info.last_value_is_partial;
    const daily_traces = make_traces(info.dates, info.values, "bar", date_formatter);
    get_thirty_days_messages_sent(info.values);

    info = aggregate_data("week");
    date_formatter = function (date) {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Week of {date}"}, {date: format_date(date, false)});
    };
    const last_week_is_partial = info.last_value_is_partial;
    const weekly_traces = make_traces(info.dates, info.values, "bar", date_formatter);

    const dates = data.end_times.map((timestamp) => new Date(timestamp * 1000));
    values = {
        human: partial_sums(data.everyone.human),
        bot: partial_sums(data.everyone.bot),
        me: partial_sums(data.user.human),
    };
    date_formatter = function (date) {
        return format_date(date, true);
    };
    get_total_messages_sent(values);
    const cumulative_traces = make_traces(dates, values, "scatter", date_formatter);

    // Functions to draw and interact with the plot

    // We need to redraw plot entirely if switching from (the cumulative) line
    // graph to any bar graph, since otherwise the rangeselector shows both (plotly bug)
    let clicked_cumulative = false;

    function draw_or_update_plot(rangeselector, traces, last_value_is_partial, initial_draw) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#daily_button, #weekly_button, #cumulative_button").removeClass("selected");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_messages_sent_over_time > div").removeClass("spinner");
        if (initial_draw) {
            traces.human.visible = true;
            traces.bot.visible = "legendonly";
            traces.me.visible = "legendonly";
        } else {
            const plotDiv = document.querySelector("#id_messages_sent_over_time");
            traces.me.visible = plotDiv.data[0].visible;
            traces.human.visible = plotDiv.data[1].visible;
            traces.bot.visible = plotDiv.data[2].visible;
        }
        layout.xaxis.rangeselector = rangeselector;
        if (clicked_cumulative || initial_draw) {
            plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().newPlot(
                "id_messages_sent_over_time",
                [traces.me, traces.human, traces.bot],
                layout,
                {displayModeBar: false},
            );
            add_hover_handler();
        } else {
            plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().deleteTraces("id_messages_sent_over_time", [0, 1, 2]);
            plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().addTraces("id_messages_sent_over_time", [traces.me, traces.human, traces.bot]);
            plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().relayout("id_messages_sent_over_time", layout);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_messages_sent_over_time").attr("last_value_is_partial", last_value_is_partial);
    }

    // Click handlers for aggregation buttons
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#daily_button").on("click", function () {
        draw_or_update_plot(daily_rangeselector, daily_traces, last_day_is_partial, false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
        clicked_cumulative = false;
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#weekly_button").on("click", function () {
        draw_or_update_plot(weekly_rangeselector, weekly_traces, last_week_is_partial, false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
        clicked_cumulative = false;
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#cumulative_button").on("click", function () {
        clicked_cumulative = false;
        draw_or_update_plot(daily_rangeselector, cumulative_traces, false, false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
        clicked_cumulative = true;
    });

    // Initial drawing of plot
    if (weekly_traces.human.x.length < 12) {
        draw_or_update_plot(daily_rangeselector, daily_traces, last_day_is_partial, true);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#daily_button").addClass("selected");
    } else {
        draw_or_update_plot(weekly_rangeselector, weekly_traces, last_week_is_partial, true);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#weekly_button").addClass("selected");
    }
}

function round_to_percentages(values, total) {
    return values.map((x) => {
        if (x === total) {
            return "100%";
        }
        if (x === 0) {
            return "0%";
        }
        const unrounded = (x / total) * 100;

        const precision = Math.min(
            6, // this is the max precision (two #, 4 decimal points; 99.9999%).
            Math.max(
                2, // the minimum amount of precision (40% or 6.0%).
                Math.floor(-Math.log10(100 - unrounded)) + 3,
            ),
        );

        return unrounded.toPrecision(precision) + "%";
    });
}

// Last label will turn into "Other" if time_series data has a label not in labels
function compute_summary_chart_data(time_series_data, num_steps, labels_) {
    const data = new Map();
    for (const [key, array] of Object.entries(time_series_data)) {
        if (array.length < num_steps) {
            num_steps = array.length;
        }
        let sum = 0;
        for (let i = 1; i <= num_steps; i += 1) {
            sum += array.at(-i);
        }
        data.set(key, sum);
    }
    const labels = labels_.slice();
    const values = [];
    for (const label of labels) {
        if (data.has(label)) {
            values.push(data.get(label));
            data.delete(label);
        } else {
            values.push(0);
        }
    }
    if (data.size !== 0) {
        labels[labels.length - 1] = "Other";
        for (const sum of data.values()) {
            values[labels.length - 1] += sum;
        }
    }
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return {
        values,
        labels,
        percentages: round_to_percentages(values, total),
        total,
    };
}

function populate_messages_sent_by_client(data) {
    const layout = {
        width: 750,
        height: null, // set in draw_plot()
        margin: {l: 10, r: 10, b: 40, t: 10},
        font: font_14pt,
        xaxis: {range: null}, // set in draw_plot()
        yaxis: {showticklabels: false},
        showlegend: false,
    };

    // sort labels so that values are descending in the default view
    const everyone_month = compute_summary_chart_data(
        data.everyone,
        30,
        data.display_order.slice(0, 12),
    );
    const label_values = [];
    for (let i = 0; i < everyone_month.values.length; i += 1) {
        label_values.push({
            label: everyone_month.labels[i],
            value: everyone_month.labels[i] === "Other" ? -1 : everyone_month.values[i],
        });
    }
    label_values.sort((a, b) => b.value - a.value);
    const labels = [];
    for (const item of label_values) {
        labels.push(item.label);
    }

    function make_plot_data(time_series_data, num_steps) {
        const plot_data = compute_summary_chart_data(time_series_data, num_steps, labels);
        plot_data.values.reverse();
        plot_data.labels.reverse();
        plot_data.percentages.reverse();
        const annotations = {values: [], labels: [], text: []};
        for (let i = 0; i < plot_data.values.length; i += 1) {
            if (plot_data.values[i] > 0) {
                annotations.values.push(plot_data.values[i]);
                annotations.labels.push(plot_data.labels[i]);
                annotations.text.push(
                    "   " + plot_data.labels[i] + " (" + plot_data.percentages[i] + ")",
                );
            }
        }
        return {
            trace: {
                x: plot_data.values,
                y: plot_data.labels,
                type: "bar",
                orientation: "h",
                sort: false,
                textinfo: "text",
                hoverinfo: "none",
                marker: {color: "#537c5e"},
            },
            trace_annotations: {
                x: annotations.values,
                y: annotations.labels,
                mode: "text",
                type: "scatter",
                textposition: "middle right",
                text: annotations.text,
            },
        };
    }

    const plot_data = {
        everyone: {
            cumulative: make_plot_data(data.everyone, data.end_times.length),
            year: make_plot_data(data.everyone, 365),
            month: make_plot_data(data.everyone, 30),
            week: make_plot_data(data.everyone, 7),
        },
        user: {
            cumulative: make_plot_data(data.user, data.end_times.length),
            year: make_plot_data(data.user, 365),
            month: make_plot_data(data.user, 30),
            week: make_plot_data(data.user, 7),
        },
    };

    let user_button = "everyone";
    let time_button;
    if (data.end_times.length >= 30) {
        time_button = "month";
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#messages_by_client_last_month_button").addClass("selected");
    } else {
        time_button = "cumulative";
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#messages_by_client_cumulative_button").addClass("selected");
    }

    if (data.end_times.length < 365) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_client button[data-time='year']").remove();
        if (data.end_times.length < 30) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_client button[data-time='month']").remove();
            if (data.end_times.length < 7) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_client button[data-time='week']").remove();
            }
        }
    }

    function draw_plot() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_messages_sent_by_client > div").removeClass("spinner");
        const data_ = plot_data[user_button][time_button];
        layout.height = layout.margin.b + data_.trace.x.length * 30;
        layout.xaxis.range = [0, Math.max(...data_.trace.x) * 1.3];
        plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().newPlot(
            "id_messages_sent_by_client",
            [data_.trace, data_.trace_annotations],
            layout,
            {displayModeBar: false, staticPlot: true},
        );
    }

    draw_plot();

    // Click handlers
    function set_user_button($button) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_client button[data-user]").removeClass("selected");
        $button.addClass("selected");
    }

    function set_time_button($button) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_client button[data-time]").removeClass("selected");
        $button.addClass("selected");
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_client button").on("click", function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-user")) {
            set_user_button(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
            user_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-user");
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-time")) {
            set_time_button(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
            time_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-time");
        }
        draw_plot();
    });
}

function populate_messages_sent_by_message_type(data) {
    const layout = {
        margin: {l: 90, r: 0, b: 10, t: 0},
        width: 750,
        height: 300,
        legend: {
            font: font_14pt,
        },
        font: font_12pt,
    };

    function make_plot_data(time_series_data, num_steps) {
        const plot_data = compute_summary_chart_data(
            time_series_data,
            num_steps,
            data.display_order,
        );
        const labels = [];
        for (let i = 0; i < plot_data.labels.length; i += 1) {
            labels.push(plot_data.labels[i] + " (" + plot_data.percentages[i] + ")");
        }
        const total_string = plot_data.total.toLocaleString();
        return {
            trace: {
                values: plot_data.values,
                labels,
                type: "pie",
                direction: "clockwise",
                rotation: -90,
                sort: false,
                textinfo: "text",
                text: plot_data.labels.map(() => ""),
                hoverinfo: "label+value",
                pull: 0.05,
                marker: {
                    colors: ["#68537c", "#be6d68", "#b3b348"],
                },
            },
            total_html: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
                {defaultMessage: "<b>Total messages</b>: {total_messages}"},
                {total_messages: total_string},
            ),
        };
    }

    const plot_data = {
        everyone: {
            cumulative: make_plot_data(data.everyone, data.end_times.length),
            year: make_plot_data(data.everyone, 365),
            month: make_plot_data(data.everyone, 30),
            week: make_plot_data(data.everyone, 7),
        },
        user: {
            cumulative: make_plot_data(data.user, data.end_times.length),
            year: make_plot_data(data.user, 365),
            month: make_plot_data(data.user, 30),
            week: make_plot_data(data.user, 7),
        },
    };

    let user_button = "everyone";
    let time_button;
    if (data.end_times.length >= 30) {
        time_button = "month";
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#messages_by_type_last_month_button").addClass("selected");
    } else {
        time_button = "cumulative";
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#messages_by_type_cumulative_button").addClass("selected");
    }
    const totaldiv = document.querySelector("#pie_messages_sent_by_type_total");

    if (data.end_times.length < 365) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_type button[data-time='year']").remove();
        if (data.end_times.length < 30) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_type button[data-time='month']").remove();
            if (data.end_times.length < 7) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_type button[data-time='week']").remove();
            }
        }
    }

    function draw_plot() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_messages_sent_by_message_type > div").removeClass("spinner");
        plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().newPlot(
            "id_messages_sent_by_message_type",
            [plot_data[user_button][time_button].trace],
            layout,
            {displayModeBar: false},
        );
        totaldiv.innerHTML = plot_data[user_button][time_button].total_html;
    }

    draw_plot();

    // Click handlers
    function set_user_button($button) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_type button[data-user]").removeClass("selected");
        $button.addClass("selected");
    }

    function set_time_button($button) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_type button[data-time]").removeClass("selected");
        $button.addClass("selected");
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#pie_messages_sent_by_type button").on("click", function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-user")) {
            set_user_button(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
            user_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-user");
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-time")) {
            set_time_button(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
            time_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-time");
        }
        draw_plot();
    });
}

function populate_number_of_users(data) {
    const weekly_rangeselector = make_rangeselector(
        {count: 2, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 2 months"}), step: "month"},
        {count: 6, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 6 months"}), step: "month"},
    );

    const layout = {
        width: 750,
        height: 370,
        margin: {l: 40, r: 10, b: 40, t: 0},
        xaxis: {
            fixedrange: true,
            rangeslider: {bordercolor: "#D8D8D8", borderwidth: 1},
            rangeselector: weekly_rangeselector,
            tickangle: 0,
        },
        yaxis: {fixedrange: true, rangemode: "tozero"},
        font: font_12pt,
    };

    const end_dates = data.end_times.map((timestamp) => new Date(timestamp * 1000));

    const text = end_dates.map((date) => format_date(date, false));

    function make_traces(values, type) {
        return {
            x: end_dates,
            y: values,
            type,
            name: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Active users"}),
            hoverinfo: "none",
            text,
            visible: true,
        };
    }

    function add_hover_handler() {
        document.querySelector("#id_number_of_users").on("plotly_hover", (data) => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#users_hover_info").show();
            document.querySelector("#users_hover_date").textContent =
                data.points[0].data.text[data.points[0].pointNumber];
            const values = [null, null, null];
            for (const trace of data.points) {
                values[trace.curveNumber] = trace.y;
            }
            const hover_value_ids = [
                "#users_hover_1day_value",
                "#users_hover_15day_value",
                "#users_hover_all_time_value",
            ];
            for (const [i, value] of values.entries()) {
                if (value !== null) {
                    document.querySelector(hover_value_ids[i]).style.display = "inline";
                    document.querySelector(hover_value_ids[i]).textContent = value;
                } else {
                    document.querySelector(hover_value_ids[i]).style.display = "none";
                }
            }
        });
    }

    const _1day_trace = make_traces(data.everyone._1day, "bar");
    const _15day_trace = make_traces(data.everyone._15day, "scatter");
    const all_time_trace = make_traces(data.everyone.all_time, "scatter");

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_number_of_users > div").removeClass("spinner");

    // Redraw the plot every time for simplicity. If we have perf problems with this in the
    // future, we can copy the update behavior from populate_messages_sent_over_time
    function draw_or_update_plot(trace) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#1day_actives_button, #15day_actives_button, #all_time_actives_button").removeClass(
            "selected",
        );
        plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().newPlot("id_number_of_users", [trace], layout, {displayModeBar: false});
        add_hover_handler();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#1day_actives_button").on("click", function () {
        draw_or_update_plot(_1day_trace);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#15day_actives_button").on("click", function () {
        draw_or_update_plot(_15day_trace);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#all_time_actives_button").on("click", function () {
        draw_or_update_plot(all_time_trace);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
    });

    // Initial drawing of plot
    draw_or_update_plot(all_time_trace, true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#all_time_actives_button").addClass("selected");
    get_user_summary_statistics(data.everyone);
}

function populate_messages_read_over_time(data) {
    if (data.end_times.length === 0) {
        // TODO: do something nicer here
        return;
    }

    // Helper functions
    function make_traces(dates, values, type, date_formatter) {
        const text = dates.map((date) => date_formatter(date));
        const common = {x: dates, type, hoverinfo: "none", text, textposition: "none"};
        return {
            everyone: {
                name: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Everyone"}),
                y: values.everyone,
                marker: {color: "#5f6ea0"},
                ...common,
            },
            me: {
                name: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Me"}),
                y: values.me,
                marker: {color: "#be6d68"},
                ...common,
            },
        };
    }

    const layout = {
        barmode: "group",
        width: 750,
        height: 400,
        margin: {l: 40, r: 10, b: 40, t: 0},
        xaxis: {
            fixedrange: true,
            rangeslider: {bordercolor: "#D8D8D8", borderwidth: 1},
            type: "date",
            tickangle: 0,
        },
        yaxis: {fixedrange: true, rangemode: "tozero"},
        legend: {
            x: 0.62,
            y: 1.12,
            orientation: "h",
            font: font_14pt,
        },
        font: font_12pt,
    };

    // This is also the cumulative rangeselector
    const daily_rangeselector = make_rangeselector(
        {count: 10, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 10 days"}), step: "day"},
        {count: 30, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 30 days"}), step: "day"},
    );
    const weekly_rangeselector = make_rangeselector(
        {count: 2, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 2 months"}), step: "month"},
        {count: 6, label: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Last 6 months"}), step: "month"},
    );

    function add_hover_handler() {
        document.querySelector("#id_messages_read_over_time").on("plotly_hover", (data) => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#read_hover_info").show();
            document.querySelector("#read_hover_date").textContent =
                data.points[0].data.text[data.points[0].pointNumber];
            const values = [null, null];
            for (const trace of data.points) {
                values[trace.curveNumber] = trace.y;
            }
            const read_hover_text_ids = ["#read_hover_me", "#read_hover_everyone"];
            const read_hover_value_ids = ["#read_hover_me_value", "#read_hover_everyone_value"];
            for (const [i, value] of values.entries()) {
                if (value !== null) {
                    document.querySelector(read_hover_text_ids[i]).style.display = "inline";
                    document.querySelector(read_hover_value_ids[i]).style.display = "inline";
                    document.querySelector(read_hover_value_ids[i]).textContent = value;
                } else {
                    document.querySelector(read_hover_text_ids[i]).style.display = "none";
                    document.querySelector(read_hover_value_ids[i]).style.display = "none";
                }
            }
        });
    }

    const start_dates = data.end_times.map(
        (timestamp) =>
            // data.end_times are the ends of hour long intervals.
            new Date(timestamp * 1000 - 60 * 60 * 1000),
    );

    function aggregate_data(aggregation) {
        let start;
        let is_boundary;
        if (aggregation === "day") {
            start = floor_to_local_day(start_dates[0]);
            is_boundary = function (date) {
                return date.getHours() === 0;
            };
        } else if (aggregation === "week") {
            start = floor_to_local_week(start_dates[0]);
            is_boundary = function (date) {
                return date.getHours() === 0 && date.getDay() === 0;
            };
        }
        const dates = [start];
        const values = {everyone: [], me: []};
        let current = {everyone: 0, me: 0};
        let i_init = 0;
        if (is_boundary(start_dates[0])) {
            current = {everyone: data.everyone.read[0], me: data.user.read[0]};
            i_init = 1;
        }
        for (let i = i_init; i < start_dates.length; i += 1) {
            if (is_boundary(start_dates[i])) {
                dates.push(start_dates[i]);
                values.everyone.push(current.everyone);
                values.me.push(current.me);
                current = {everyone: 0, me: 0};
            }
            current.everyone += data.everyone.read[i];
            current.me += data.user.read[i];
        }
        values.everyone.push(current.everyone);
        values.me.push(current.me);
        return {
            dates,
            values,
            last_value_is_partial: !is_boundary(
                new Date(start_dates.at(-1).getTime() + 60 * 60 * 1000),
            ),
        };
    }

    // Generate traces
    let date_formatter = function (date) {
        return format_date(date, true);
    };
    let values = {me: data.user.read, everyone: data.everyone.read};

    let info = aggregate_data("day");
    date_formatter = function (date) {
        return format_date(date, false);
    };
    const last_day_is_partial = info.last_value_is_partial;
    const daily_traces = make_traces(info.dates, info.values, "bar", date_formatter);

    info = aggregate_data("week");
    date_formatter = function (date) {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../i18n'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({defaultMessage: "Week of {date}"}, {date: format_date(date, false)});
    };
    const last_week_is_partial = info.last_value_is_partial;
    const weekly_traces = make_traces(info.dates, info.values, "bar", date_formatter);

    const dates = data.end_times.map((timestamp) => new Date(timestamp * 1000));
    values = {everyone: partial_sums(data.everyone.read), me: partial_sums(data.user.read)};
    date_formatter = function (date) {
        return format_date(date, true);
    };
    const cumulative_traces = make_traces(dates, values, "scatter", date_formatter);

    // Functions to draw and interact with the plot

    // We need to redraw plot entirely if switching from (the cumulative) line
    // graph to any bar graph, since otherwise the rangeselector shows both (plotly bug)
    let clicked_cumulative = false;

    function draw_or_update_plot(rangeselector, traces, last_value_is_partial, initial_draw) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#read_daily_button, #read_weekly_button, #read_cumulative_button").removeClass(
            "selected",
        );
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_messages_read_over_time > div").removeClass("spinner");
        if (initial_draw) {
            traces.everyone.visible = true;
            traces.me.visible = "legendonly";
        } else {
            const plotDiv = document.querySelector("#id_messages_read_over_time");
            traces.me.visible = plotDiv.data[0].visible;
            traces.everyone.visible = plotDiv.data[1].visible;
        }
        layout.xaxis.rangeselector = rangeselector;
        if (clicked_cumulative || initial_draw) {
            plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().newPlot("id_messages_read_over_time", [traces.me, traces.everyone], layout, {
                displayModeBar: false,
            });
            add_hover_handler();
        } else {
            plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().deleteTraces("id_messages_read_over_time", [0, 1]);
            plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().addTraces("id_messages_read_over_time", [traces.me, traces.everyone]);
            plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default().relayout("id_messages_read_over_time", layout);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_messages_read_over_time").attr("last_value_is_partial", last_value_is_partial);
    }

    // Click handlers for aggregation buttons
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#read_daily_button").on("click", function () {
        draw_or_update_plot(daily_rangeselector, daily_traces, last_day_is_partial, false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
        clicked_cumulative = false;
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#read_weekly_button").on("click", function () {
        draw_or_update_plot(weekly_rangeselector, weekly_traces, last_week_is_partial, false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
        clicked_cumulative = false;
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#read_cumulative_button").on("click", function () {
        clicked_cumulative = false;
        draw_or_update_plot(daily_rangeselector, cumulative_traces, false, false);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selected");
        clicked_cumulative = true;
    });

    // Initial drawing of plot
    if (weekly_traces.everyone.x.length < 12) {
        draw_or_update_plot(daily_rangeselector, daily_traces, last_day_is_partial, true);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#read_daily_button").addClass("selected");
    } else {
        draw_or_update_plot(weekly_rangeselector, weekly_traces, last_week_is_partial, true);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#read_weekly_button").addClass("selected");
    }
}

function get_chart_data(data, callback) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().get({
        url: "/json/analytics/chart_data" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        data,
        success(data) {
            callback(data);
            update_last_full_update(data.end_times);
        },
        error(xhr) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#id_stats_errors").show().text(JSON.parse(xhr.responseText).msg);
        },
    });
}

get_chart_data(
    {chart_name: "messages_sent_over_time", min_length: "10"},
    populate_messages_sent_over_time,
);

get_chart_data(
    {chart_name: "messages_sent_by_client", min_length: "10"},
    populate_messages_sent_by_client,
);

get_chart_data(
    {chart_name: "messages_sent_by_message_type", min_length: "10"},
    populate_messages_sent_by_message_type,
);

get_chart_data({chart_name: "number_of_humans", min_length: "10"}, populate_number_of_users);

get_chart_data(
    {chart_name: "messages_read_over_time", min_length: "10"},
    populate_messages_read_over_time,
);

set_storage_space_used_statistic(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
set_guest_users_statistic(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../page_params'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


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
/******/ 		"./node_modules/@popperjs/core/lib/createPopper.js": "./node_modules/@popperjs/core/lib/createPopper.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/contains.js": "./node_modules/@popperjs/core/lib/dom-utils/contains.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js": "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js": "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js": "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js": "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js": "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js": "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js": "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js": "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js": "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js": "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js": "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js": "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js": "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js": "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js": "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js": "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js": "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js": "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js": "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js": "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js": "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js",
/******/ 		"./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js": "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js",
/******/ 		"./node_modules/@popperjs/core/lib/enums.js": "./node_modules/@popperjs/core/lib/enums.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/applyStyles.js": "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/arrow.js": "./node_modules/@popperjs/core/lib/modifiers/arrow.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/computeStyles.js": "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/eventListeners.js": "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/flip.js": "./node_modules/@popperjs/core/lib/modifiers/flip.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/hide.js": "./node_modules/@popperjs/core/lib/modifiers/hide.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/index.js": "./node_modules/@popperjs/core/lib/modifiers/index.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/offset.js": "./node_modules/@popperjs/core/lib/modifiers/offset.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js": "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js",
/******/ 		"./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js": "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js",
/******/ 		"./node_modules/@popperjs/core/lib/popper-lite.js": "./node_modules/@popperjs/core/lib/popper-lite.js",
/******/ 		"./node_modules/@popperjs/core/lib/popper.js": "./node_modules/@popperjs/core/lib/popper.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js": "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/computeOffsets.js": "./node_modules/@popperjs/core/lib/utils/computeOffsets.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/debounce.js": "./node_modules/@popperjs/core/lib/utils/debounce.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/detectOverflow.js": "./node_modules/@popperjs/core/lib/utils/detectOverflow.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/expandToHashMap.js": "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/format.js": "./node_modules/@popperjs/core/lib/utils/format.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/getAltAxis.js": "./node_modules/@popperjs/core/lib/utils/getAltAxis.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js": "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js": "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js": "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js": "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js": "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/getVariation.js": "./node_modules/@popperjs/core/lib/utils/getVariation.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/math.js": "./node_modules/@popperjs/core/lib/utils/math.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/mergeByName.js": "./node_modules/@popperjs/core/lib/utils/mergeByName.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js": "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/orderModifiers.js": "./node_modules/@popperjs/core/lib/utils/orderModifiers.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/rectToClientRect.js": "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/uniqueBy.js": "./node_modules/@popperjs/core/lib/utils/uniqueBy.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/userAgent.js": "./node_modules/@popperjs/core/lib/utils/userAgent.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/validateModifiers.js": "./node_modules/@popperjs/core/lib/utils/validateModifiers.js",
/******/ 		"./node_modules/@popperjs/core/lib/utils/within.js": "./node_modules/@popperjs/core/lib/utils/within.js",
/******/ 		"./node_modules/@uppy/core/dist/style.css": "./node_modules/@uppy/core/dist/style.css",
/******/ 		"./node_modules/@uppy/progress-bar/dist/style.css": "./node_modules/@uppy/progress-bar/dist/style.css",
/******/ 		"./node_modules/d3-format/src/defaultLocale.js": "./node_modules/d3-format/src/defaultLocale.js",
/******/ 		"./node_modules/d3-format/src/exponent.js": "./node_modules/d3-format/src/exponent.js",
/******/ 		"./node_modules/d3-format/src/formatDecimal.js": "./node_modules/d3-format/src/formatDecimal.js",
/******/ 		"./node_modules/d3-format/src/formatGroup.js": "./node_modules/d3-format/src/formatGroup.js",
/******/ 		"./node_modules/d3-format/src/formatNumerals.js": "./node_modules/d3-format/src/formatNumerals.js",
/******/ 		"./node_modules/d3-format/src/formatPrefixAuto.js": "./node_modules/d3-format/src/formatPrefixAuto.js",
/******/ 		"./node_modules/d3-format/src/formatRounded.js": "./node_modules/d3-format/src/formatRounded.js",
/******/ 		"./node_modules/d3-format/src/formatSpecifier.js": "./node_modules/d3-format/src/formatSpecifier.js",
/******/ 		"./node_modules/d3-format/src/formatTrim.js": "./node_modules/d3-format/src/formatTrim.js",
/******/ 		"./node_modules/d3-format/src/formatTypes.js": "./node_modules/d3-format/src/formatTypes.js",
/******/ 		"./node_modules/d3-format/src/identity.js": "./node_modules/d3-format/src/identity.js",
/******/ 		"./node_modules/d3-format/src/locale.js": "./node_modules/d3-format/src/locale.js",
/******/ 		"./node_modules/d3-format/src/precisionFixed.js": "./node_modules/d3-format/src/precisionFixed.js",
/******/ 		"./node_modules/d3-format/src/precisionPrefix.js": "./node_modules/d3-format/src/precisionPrefix.js",
/******/ 		"./node_modules/d3-format/src/precisionRound.js": "./node_modules/d3-format/src/precisionRound.js",
/******/ 		"./node_modules/d3-time-format/src/defaultLocale.js": "./node_modules/d3-time-format/src/defaultLocale.js",
/******/ 		"./node_modules/d3-time-format/src/isoFormat.js": "./node_modules/d3-time-format/src/isoFormat.js",
/******/ 		"./node_modules/d3-time-format/src/isoParse.js": "./node_modules/d3-time-format/src/isoParse.js",
/******/ 		"./node_modules/d3-time-format/src/locale.js": "./node_modules/d3-time-format/src/locale.js",
/******/ 		"./node_modules/d3-time/src/day.js": "./node_modules/d3-time/src/day.js",
/******/ 		"./node_modules/d3-time/src/duration.js": "./node_modules/d3-time/src/duration.js",
/******/ 		"./node_modules/d3-time/src/hour.js": "./node_modules/d3-time/src/hour.js",
/******/ 		"./node_modules/d3-time/src/interval.js": "./node_modules/d3-time/src/interval.js",
/******/ 		"./node_modules/d3-time/src/millisecond.js": "./node_modules/d3-time/src/millisecond.js",
/******/ 		"./node_modules/d3-time/src/minute.js": "./node_modules/d3-time/src/minute.js",
/******/ 		"./node_modules/d3-time/src/month.js": "./node_modules/d3-time/src/month.js",
/******/ 		"./node_modules/d3-time/src/second.js": "./node_modules/d3-time/src/second.js",
/******/ 		"./node_modules/d3-time/src/utcDay.js": "./node_modules/d3-time/src/utcDay.js",
/******/ 		"./node_modules/d3-time/src/utcHour.js": "./node_modules/d3-time/src/utcHour.js",
/******/ 		"./node_modules/d3-time/src/utcMinute.js": "./node_modules/d3-time/src/utcMinute.js",
/******/ 		"./node_modules/d3-time/src/utcMonth.js": "./node_modules/d3-time/src/utcMonth.js",
/******/ 		"./node_modules/d3-time/src/utcWeek.js": "./node_modules/d3-time/src/utcWeek.js",
/******/ 		"./node_modules/d3-time/src/utcYear.js": "./node_modules/d3-time/src/utcYear.js",
/******/ 		"./node_modules/d3-time/src/week.js": "./node_modules/d3-time/src/week.js",
/******/ 		"./node_modules/d3-time/src/year.js": "./node_modules/d3-time/src/year.js",
/******/ 		"./node_modules/font-awesome/css/font-awesome.css": "./node_modules/font-awesome/css/font-awesome.css",
/******/ 		"./node_modules/gl-mat4/adjoint": "./node_modules/gl-mat4/adjoint.js",
/******/ 		"./node_modules/gl-mat4/clone": "./node_modules/gl-mat4/clone.js",
/******/ 		"./node_modules/gl-mat4/copy": "./node_modules/gl-mat4/copy.js",
/******/ 		"./node_modules/gl-mat4/create": "./node_modules/gl-mat4/create.js",
/******/ 		"./node_modules/gl-mat4/determinant": "./node_modules/gl-mat4/determinant.js",
/******/ 		"./node_modules/gl-mat4/fromQuat": "./node_modules/gl-mat4/fromQuat.js",
/******/ 		"./node_modules/gl-mat4/fromRotation": "./node_modules/gl-mat4/fromRotation.js",
/******/ 		"./node_modules/gl-mat4/fromRotationTranslation": "./node_modules/gl-mat4/fromRotationTranslation.js",
/******/ 		"./node_modules/gl-mat4/fromScaling": "./node_modules/gl-mat4/fromScaling.js",
/******/ 		"./node_modules/gl-mat4/fromTranslation": "./node_modules/gl-mat4/fromTranslation.js",
/******/ 		"./node_modules/gl-mat4/fromXRotation": "./node_modules/gl-mat4/fromXRotation.js",
/******/ 		"./node_modules/gl-mat4/fromYRotation": "./node_modules/gl-mat4/fromYRotation.js",
/******/ 		"./node_modules/gl-mat4/fromZRotation": "./node_modules/gl-mat4/fromZRotation.js",
/******/ 		"./node_modules/gl-mat4/frustum": "./node_modules/gl-mat4/frustum.js",
/******/ 		"./node_modules/gl-mat4/identity": "./node_modules/gl-mat4/identity.js",
/******/ 		"./node_modules/gl-mat4/invert": "./node_modules/gl-mat4/invert.js",
/******/ 		"./node_modules/gl-mat4/lookAt": "./node_modules/gl-mat4/lookAt.js",
/******/ 		"./node_modules/gl-mat4/multiply": "./node_modules/gl-mat4/multiply.js",
/******/ 		"./node_modules/gl-mat4/ortho": "./node_modules/gl-mat4/ortho.js",
/******/ 		"./node_modules/gl-mat4/perspective": "./node_modules/gl-mat4/perspective.js",
/******/ 		"./node_modules/gl-mat4/perspectiveFromFieldOfView": "./node_modules/gl-mat4/perspectiveFromFieldOfView.js",
/******/ 		"./node_modules/gl-mat4/rotate": "./node_modules/gl-mat4/rotate.js",
/******/ 		"./node_modules/gl-mat4/rotateX": "./node_modules/gl-mat4/rotateX.js",
/******/ 		"./node_modules/gl-mat4/rotateY": "./node_modules/gl-mat4/rotateY.js",
/******/ 		"./node_modules/gl-mat4/rotateZ": "./node_modules/gl-mat4/rotateZ.js",
/******/ 		"./node_modules/gl-mat4/scale": "./node_modules/gl-mat4/scale.js",
/******/ 		"./node_modules/gl-mat4/str": "./node_modules/gl-mat4/str.js",
/******/ 		"./node_modules/gl-mat4/translate": "./node_modules/gl-mat4/translate.js",
/******/ 		"./node_modules/gl-mat4/transpose": "./node_modules/gl-mat4/transpose.js",
/******/ 		"./node_modules/plotly.js/build/plotcss": "./node_modules/plotly.js/build/plotcss.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations": "./node_modules/plotly.js/src/components/annotations/index.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/arrow_paths": "./node_modules/plotly.js/src/components/annotations/arrow_paths.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/attributes": "./node_modules/plotly.js/src/components/annotations/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/calc_autorange": "./node_modules/plotly.js/src/components/annotations/calc_autorange.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/click": "./node_modules/plotly.js/src/components/annotations/click.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/common_defaults": "./node_modules/plotly.js/src/components/annotations/common_defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/convert_coords": "./node_modules/plotly.js/src/components/annotations/convert_coords.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/defaults": "./node_modules/plotly.js/src/components/annotations/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/draw": "./node_modules/plotly.js/src/components/annotations/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations/draw_arrow_head": "./node_modules/plotly.js/src/components/annotations/draw_arrow_head.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations3d": "./node_modules/plotly.js/src/components/annotations3d/index.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations3d/attributes": "./node_modules/plotly.js/src/components/annotations3d/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations3d/convert": "./node_modules/plotly.js/src/components/annotations3d/convert.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations3d/defaults": "./node_modules/plotly.js/src/components/annotations3d/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/annotations3d/draw": "./node_modules/plotly.js/src/components/annotations3d/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/color": "./node_modules/plotly.js/src/components/color/index.js",
/******/ 		"./node_modules/plotly.js/src/components/color/attributes": "./node_modules/plotly.js/src/components/color/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/colorbar": "./node_modules/plotly.js/src/components/colorbar/index.js",
/******/ 		"./node_modules/plotly.js/src/components/colorbar/attributes": "./node_modules/plotly.js/src/components/colorbar/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/colorbar/constants": "./node_modules/plotly.js/src/components/colorbar/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/colorbar/defaults": "./node_modules/plotly.js/src/components/colorbar/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/colorbar/draw": "./node_modules/plotly.js/src/components/colorbar/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/colorbar/has_colorbar": "./node_modules/plotly.js/src/components/colorbar/has_colorbar.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale": "./node_modules/plotly.js/src/components/colorscale/index.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/attributes": "./node_modules/plotly.js/src/components/colorscale/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/calc": "./node_modules/plotly.js/src/components/colorscale/calc.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/cross_trace_defaults": "./node_modules/plotly.js/src/components/colorscale/cross_trace_defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/defaults": "./node_modules/plotly.js/src/components/colorscale/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/helpers": "./node_modules/plotly.js/src/components/colorscale/helpers.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/layout_attributes": "./node_modules/plotly.js/src/components/colorscale/layout_attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/layout_defaults": "./node_modules/plotly.js/src/components/colorscale/layout_defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/scales": "./node_modules/plotly.js/src/components/colorscale/scales.js",
/******/ 		"./node_modules/plotly.js/src/components/colorscale/scales.js": "./node_modules/plotly.js/src/components/colorscale/scales.js",
/******/ 		"./node_modules/plotly.js/src/components/dragelement": "./node_modules/plotly.js/src/components/dragelement/index.js",
/******/ 		"./node_modules/plotly.js/src/components/dragelement/align": "./node_modules/plotly.js/src/components/dragelement/align.js",
/******/ 		"./node_modules/plotly.js/src/components/dragelement/cursor": "./node_modules/plotly.js/src/components/dragelement/cursor.js",
/******/ 		"./node_modules/plotly.js/src/components/dragelement/helpers": "./node_modules/plotly.js/src/components/dragelement/helpers.js",
/******/ 		"./node_modules/plotly.js/src/components/dragelement/unhover": "./node_modules/plotly.js/src/components/dragelement/unhover.js",
/******/ 		"./node_modules/plotly.js/src/components/drawing": "./node_modules/plotly.js/src/components/drawing/index.js",
/******/ 		"./node_modules/plotly.js/src/components/drawing/attributes": "./node_modules/plotly.js/src/components/drawing/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/drawing/symbol_defs": "./node_modules/plotly.js/src/components/drawing/symbol_defs.js",
/******/ 		"./node_modules/plotly.js/src/components/errorbars": "./node_modules/plotly.js/src/components/errorbars/index.js",
/******/ 		"./node_modules/plotly.js/src/components/errorbars/attributes": "./node_modules/plotly.js/src/components/errorbars/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/errorbars/calc": "./node_modules/plotly.js/src/components/errorbars/calc.js",
/******/ 		"./node_modules/plotly.js/src/components/errorbars/compute_error": "./node_modules/plotly.js/src/components/errorbars/compute_error.js",
/******/ 		"./node_modules/plotly.js/src/components/errorbars/defaults": "./node_modules/plotly.js/src/components/errorbars/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/errorbars/plot": "./node_modules/plotly.js/src/components/errorbars/plot.js",
/******/ 		"./node_modules/plotly.js/src/components/errorbars/style": "./node_modules/plotly.js/src/components/errorbars/style.js",
/******/ 		"./node_modules/plotly.js/src/components/fx": "./node_modules/plotly.js/src/components/fx/index.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/attributes": "./node_modules/plotly.js/src/components/fx/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/calc": "./node_modules/plotly.js/src/components/fx/calc.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/click": "./node_modules/plotly.js/src/components/fx/click.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/constants": "./node_modules/plotly.js/src/components/fx/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/defaults": "./node_modules/plotly.js/src/components/fx/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/helpers": "./node_modules/plotly.js/src/components/fx/helpers.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/hover": "./node_modules/plotly.js/src/components/fx/hover.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/hoverlabel_defaults": "./node_modules/plotly.js/src/components/fx/hoverlabel_defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/hovermode_defaults": "./node_modules/plotly.js/src/components/fx/hovermode_defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/layout_attributes": "./node_modules/plotly.js/src/components/fx/layout_attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/layout_defaults": "./node_modules/plotly.js/src/components/fx/layout_defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/fx/layout_global_defaults": "./node_modules/plotly.js/src/components/fx/layout_global_defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/grid": "./node_modules/plotly.js/src/components/grid/index.js",
/******/ 		"./node_modules/plotly.js/src/components/images": "./node_modules/plotly.js/src/components/images/index.js",
/******/ 		"./node_modules/plotly.js/src/components/images/attributes": "./node_modules/plotly.js/src/components/images/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/images/convert_coords": "./node_modules/plotly.js/src/components/images/convert_coords.js",
/******/ 		"./node_modules/plotly.js/src/components/images/defaults": "./node_modules/plotly.js/src/components/images/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/images/draw": "./node_modules/plotly.js/src/components/images/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/legend": "./node_modules/plotly.js/src/components/legend/index.js",
/******/ 		"./node_modules/plotly.js/src/components/legend/attributes": "./node_modules/plotly.js/src/components/legend/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/legend/constants": "./node_modules/plotly.js/src/components/legend/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/legend/defaults": "./node_modules/plotly.js/src/components/legend/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/legend/draw": "./node_modules/plotly.js/src/components/legend/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/legend/get_legend_data": "./node_modules/plotly.js/src/components/legend/get_legend_data.js",
/******/ 		"./node_modules/plotly.js/src/components/legend/handle_click": "./node_modules/plotly.js/src/components/legend/handle_click.js",
/******/ 		"./node_modules/plotly.js/src/components/legend/helpers": "./node_modules/plotly.js/src/components/legend/helpers.js",
/******/ 		"./node_modules/plotly.js/src/components/legend/style": "./node_modules/plotly.js/src/components/legend/style.js",
/******/ 		"./node_modules/plotly.js/src/components/modebar": "./node_modules/plotly.js/src/components/modebar/index.js",
/******/ 		"./node_modules/plotly.js/src/components/modebar/attributes": "./node_modules/plotly.js/src/components/modebar/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/modebar/buttons": "./node_modules/plotly.js/src/components/modebar/buttons.js",
/******/ 		"./node_modules/plotly.js/src/components/modebar/constants": "./node_modules/plotly.js/src/components/modebar/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/modebar/defaults": "./node_modules/plotly.js/src/components/modebar/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/modebar/manage": "./node_modules/plotly.js/src/components/modebar/manage.js",
/******/ 		"./node_modules/plotly.js/src/components/modebar/modebar": "./node_modules/plotly.js/src/components/modebar/modebar.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeselector": "./node_modules/plotly.js/src/components/rangeselector/index.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeselector/attributes": "./node_modules/plotly.js/src/components/rangeselector/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeselector/constants": "./node_modules/plotly.js/src/components/rangeselector/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeselector/defaults": "./node_modules/plotly.js/src/components/rangeselector/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeselector/draw": "./node_modules/plotly.js/src/components/rangeselector/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeselector/get_update_object": "./node_modules/plotly.js/src/components/rangeselector/get_update_object.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeslider": "./node_modules/plotly.js/src/components/rangeslider/index.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeslider/attributes": "./node_modules/plotly.js/src/components/rangeslider/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeslider/calc_autorange": "./node_modules/plotly.js/src/components/rangeslider/calc_autorange.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeslider/constants": "./node_modules/plotly.js/src/components/rangeslider/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeslider/defaults": "./node_modules/plotly.js/src/components/rangeslider/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeslider/draw": "./node_modules/plotly.js/src/components/rangeslider/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeslider/helpers": "./node_modules/plotly.js/src/components/rangeslider/helpers.js",
/******/ 		"./node_modules/plotly.js/src/components/rangeslider/oppaxis_attributes": "./node_modules/plotly.js/src/components/rangeslider/oppaxis_attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/selections": "./node_modules/plotly.js/src/components/selections/index.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/attributes": "./node_modules/plotly.js/src/components/selections/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/constants": "./node_modules/plotly.js/src/components/selections/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/defaults": "./node_modules/plotly.js/src/components/selections/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/draw": "./node_modules/plotly.js/src/components/selections/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/draw_newselection/attributes": "./node_modules/plotly.js/src/components/selections/draw_newselection/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/draw_newselection/defaults": "./node_modules/plotly.js/src/components/selections/draw_newselection/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/draw_newselection/newselections": "./node_modules/plotly.js/src/components/selections/draw_newselection/newselections.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/helpers": "./node_modules/plotly.js/src/components/selections/helpers.js",
/******/ 		"./node_modules/plotly.js/src/components/selections/select": "./node_modules/plotly.js/src/components/selections/select.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes": "./node_modules/plotly.js/src/components/shapes/index.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/attributes": "./node_modules/plotly.js/src/components/shapes/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/calc_autorange": "./node_modules/plotly.js/src/components/shapes/calc_autorange.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/constants": "./node_modules/plotly.js/src/components/shapes/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/defaults": "./node_modules/plotly.js/src/components/shapes/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/display_outlines": "./node_modules/plotly.js/src/components/shapes/display_outlines.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/draw": "./node_modules/plotly.js/src/components/shapes/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/draw_newshape/attributes": "./node_modules/plotly.js/src/components/shapes/draw_newshape/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/draw_newshape/constants": "./node_modules/plotly.js/src/components/shapes/draw_newshape/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/draw_newshape/defaults": "./node_modules/plotly.js/src/components/shapes/draw_newshape/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/draw_newshape/helpers": "./node_modules/plotly.js/src/components/shapes/draw_newshape/helpers.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/draw_newshape/newshapes": "./node_modules/plotly.js/src/components/shapes/draw_newshape/newshapes.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/handle_outline": "./node_modules/plotly.js/src/components/shapes/handle_outline.js",
/******/ 		"./node_modules/plotly.js/src/components/shapes/helpers": "./node_modules/plotly.js/src/components/shapes/helpers.js",
/******/ 		"./node_modules/plotly.js/src/components/sliders": "./node_modules/plotly.js/src/components/sliders/index.js",
/******/ 		"./node_modules/plotly.js/src/components/sliders/attributes": "./node_modules/plotly.js/src/components/sliders/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/sliders/constants": "./node_modules/plotly.js/src/components/sliders/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/sliders/defaults": "./node_modules/plotly.js/src/components/sliders/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/sliders/draw": "./node_modules/plotly.js/src/components/sliders/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/titles": "./node_modules/plotly.js/src/components/titles/index.js",
/******/ 		"./node_modules/plotly.js/src/components/updatemenus": "./node_modules/plotly.js/src/components/updatemenus/index.js",
/******/ 		"./node_modules/plotly.js/src/components/updatemenus/attributes": "./node_modules/plotly.js/src/components/updatemenus/attributes.js",
/******/ 		"./node_modules/plotly.js/src/components/updatemenus/constants": "./node_modules/plotly.js/src/components/updatemenus/constants.js",
/******/ 		"./node_modules/plotly.js/src/components/updatemenus/defaults": "./node_modules/plotly.js/src/components/updatemenus/defaults.js",
/******/ 		"./node_modules/plotly.js/src/components/updatemenus/draw": "./node_modules/plotly.js/src/components/updatemenus/draw.js",
/******/ 		"./node_modules/plotly.js/src/components/updatemenus/scrollbox": "./node_modules/plotly.js/src/components/updatemenus/scrollbox.js",
/******/ 		"./node_modules/plotly.js/src/constants/alignment": "./node_modules/plotly.js/src/constants/alignment.js",
/******/ 		"./node_modules/plotly.js/src/constants/axis_placeable_objects": "./node_modules/plotly.js/src/constants/axis_placeable_objects.js",
/******/ 		"./node_modules/plotly.js/src/constants/docs": "./node_modules/plotly.js/src/constants/docs.js",
/******/ 		"./node_modules/plotly.js/src/constants/interactions": "./node_modules/plotly.js/src/constants/interactions.js",
/******/ 		"./node_modules/plotly.js/src/constants/numerical": "./node_modules/plotly.js/src/constants/numerical.js",
/******/ 		"./node_modules/plotly.js/src/constants/xmlns_namespaces": "./node_modules/plotly.js/src/constants/xmlns_namespaces.js",
/******/ 		"./node_modules/plotly.js/src/core": "./node_modules/plotly.js/src/core.js",
/******/ 		"./node_modules/plotly.js/src/fonts/ploticon": "./node_modules/plotly.js/src/fonts/ploticon.js",
/******/ 		"./node_modules/plotly.js/src/lib": "./node_modules/plotly.js/src/lib/index.js",
/******/ 		"./node_modules/plotly.js/src/lib/anchor_utils": "./node_modules/plotly.js/src/lib/anchor_utils.js",
/******/ 		"./node_modules/plotly.js/src/lib/angles": "./node_modules/plotly.js/src/lib/angles.js",
/******/ 		"./node_modules/plotly.js/src/lib/array": "./node_modules/plotly.js/src/lib/array.js",
/******/ 		"./node_modules/plotly.js/src/lib/clean_number": "./node_modules/plotly.js/src/lib/clean_number.js",
/******/ 		"./node_modules/plotly.js/src/lib/clear_gl_canvases": "./node_modules/plotly.js/src/lib/clear_gl_canvases.js",
/******/ 		"./node_modules/plotly.js/src/lib/clear_responsive": "./node_modules/plotly.js/src/lib/clear_responsive.js",
/******/ 		"./node_modules/plotly.js/src/lib/coerce": "./node_modules/plotly.js/src/lib/coerce.js",
/******/ 		"./node_modules/plotly.js/src/lib/dates": "./node_modules/plotly.js/src/lib/dates.js",
/******/ 		"./node_modules/plotly.js/src/lib/dom": "./node_modules/plotly.js/src/lib/dom.js",
/******/ 		"./node_modules/plotly.js/src/lib/events": "./node_modules/plotly.js/src/lib/events.js",
/******/ 		"./node_modules/plotly.js/src/lib/extend": "./node_modules/plotly.js/src/lib/extend.js",
/******/ 		"./node_modules/plotly.js/src/lib/filter_unique": "./node_modules/plotly.js/src/lib/filter_unique.js",
/******/ 		"./node_modules/plotly.js/src/lib/filter_visible": "./node_modules/plotly.js/src/lib/filter_visible.js",
/******/ 		"./node_modules/plotly.js/src/lib/geometry2d": "./node_modules/plotly.js/src/lib/geometry2d.js",
/******/ 		"./node_modules/plotly.js/src/lib/identity": "./node_modules/plotly.js/src/lib/identity.js",
/******/ 		"./node_modules/plotly.js/src/lib/increment": "./node_modules/plotly.js/src/lib/increment.js",
/******/ 		"./node_modules/plotly.js/src/lib/is_plain_object": "./node_modules/plotly.js/src/lib/is_plain_object.js",
/******/ 		"./node_modules/plotly.js/src/lib/is_plain_object.js": "./node_modules/plotly.js/src/lib/is_plain_object.js",
/******/ 		"./node_modules/plotly.js/src/lib/keyed_container": "./node_modules/plotly.js/src/lib/keyed_container.js",
/******/ 		"./node_modules/plotly.js/src/lib/localize": "./node_modules/plotly.js/src/lib/localize.js",
/******/ 		"./node_modules/plotly.js/src/lib/loggers": "./node_modules/plotly.js/src/lib/loggers.js",
/******/ 		"./node_modules/plotly.js/src/lib/make_trace_groups": "./node_modules/plotly.js/src/lib/make_trace_groups.js",
/******/ 		"./node_modules/plotly.js/src/lib/matrix": "./node_modules/plotly.js/src/lib/matrix.js",
/******/ 		"./node_modules/plotly.js/src/lib/mod": "./node_modules/plotly.js/src/lib/mod.js",
/******/ 		"./node_modules/plotly.js/src/lib/nested_property": "./node_modules/plotly.js/src/lib/nested_property.js",
/******/ 		"./node_modules/plotly.js/src/lib/noop": "./node_modules/plotly.js/src/lib/noop.js",
/******/ 		"./node_modules/plotly.js/src/lib/notifier": "./node_modules/plotly.js/src/lib/notifier.js",
/******/ 		"./node_modules/plotly.js/src/lib/override_cursor": "./node_modules/plotly.js/src/lib/override_cursor.js",
/******/ 		"./node_modules/plotly.js/src/lib/polygon": "./node_modules/plotly.js/src/lib/polygon.js",
/******/ 		"./node_modules/plotly.js/src/lib/preserve_drawing_buffer": "./node_modules/plotly.js/src/lib/preserve_drawing_buffer.js",
/******/ 		"./node_modules/plotly.js/src/lib/push_unique": "./node_modules/plotly.js/src/lib/push_unique.js",
/******/ 		"./node_modules/plotly.js/src/lib/queue": "./node_modules/plotly.js/src/lib/queue.js",
/******/ 		"./node_modules/plotly.js/src/lib/regex": "./node_modules/plotly.js/src/lib/regex.js",
/******/ 		"./node_modules/plotly.js/src/lib/relative_attr": "./node_modules/plotly.js/src/lib/relative_attr.js",
/******/ 		"./node_modules/plotly.js/src/lib/relink_private": "./node_modules/plotly.js/src/lib/relink_private.js",
/******/ 		"./node_modules/plotly.js/src/lib/search": "./node_modules/plotly.js/src/lib/search.js",
/******/ 		"./node_modules/plotly.js/src/lib/setcursor": "./node_modules/plotly.js/src/lib/setcursor.js",
/******/ 		"./node_modules/plotly.js/src/lib/sort_object_keys": "./node_modules/plotly.js/src/lib/sort_object_keys.js",
/******/ 		"./node_modules/plotly.js/src/lib/stats": "./node_modules/plotly.js/src/lib/stats.js",
/******/ 		"./node_modules/plotly.js/src/lib/svg_text_utils": "./node_modules/plotly.js/src/lib/svg_text_utils.js",
/******/ 		"./node_modules/plotly.js/src/lib/throttle": "./node_modules/plotly.js/src/lib/throttle.js",
/******/ 		"./node_modules/plotly.js/src/lib/to_log_range": "./node_modules/plotly.js/src/lib/to_log_range.js",
/******/ 		"./node_modules/plotly.js/src/locale-en": "./node_modules/plotly.js/src/locale-en.js",
/******/ 		"./node_modules/plotly.js/src/locale-en-us": "./node_modules/plotly.js/src/locale-en-us.js",
/******/ 		"./node_modules/plotly.js/src/plot_api": "./node_modules/plotly.js/src/plot_api/index.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/container_array_match": "./node_modules/plotly.js/src/plot_api/container_array_match.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/edit_types": "./node_modules/plotly.js/src/plot_api/edit_types.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/helpers": "./node_modules/plotly.js/src/plot_api/helpers.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/manage_arrays": "./node_modules/plotly.js/src/plot_api/manage_arrays.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/plot_api": "./node_modules/plotly.js/src/plot_api/plot_api.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/plot_config": "./node_modules/plotly.js/src/plot_api/plot_config.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/plot_schema": "./node_modules/plotly.js/src/plot_api/plot_schema.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/plot_template": "./node_modules/plotly.js/src/plot_api/plot_template.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/subroutines": "./node_modules/plotly.js/src/plot_api/subroutines.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/template_api": "./node_modules/plotly.js/src/plot_api/template_api.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/to_image": "./node_modules/plotly.js/src/plot_api/to_image.js",
/******/ 		"./node_modules/plotly.js/src/plot_api/validate": "./node_modules/plotly.js/src/plot_api/validate.js",
/******/ 		"./node_modules/plotly.js/src/plots/animation_attributes": "./node_modules/plotly.js/src/plots/animation_attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/array_container_defaults": "./node_modules/plotly.js/src/plots/array_container_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/attributes": "./node_modules/plotly.js/src/plots/attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian": "./node_modules/plotly.js/src/plots/cartesian/index.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/align_period": "./node_modules/plotly.js/src/plots/cartesian/align_period.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/attributes": "./node_modules/plotly.js/src/plots/cartesian/attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/autorange": "./node_modules/plotly.js/src/plots/cartesian/autorange.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/axes": "./node_modules/plotly.js/src/plots/cartesian/axes.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/axis_autotype": "./node_modules/plotly.js/src/plots/cartesian/axis_autotype.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/axis_defaults": "./node_modules/plotly.js/src/plots/cartesian/axis_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/axis_format_attributes": "./node_modules/plotly.js/src/plots/cartesian/axis_format_attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/axis_ids": "./node_modules/plotly.js/src/plots/cartesian/axis_ids.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/category_order_defaults": "./node_modules/plotly.js/src/plots/cartesian/category_order_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/clean_ticks": "./node_modules/plotly.js/src/plots/cartesian/clean_ticks.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/constants": "./node_modules/plotly.js/src/plots/cartesian/constants.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/constraints": "./node_modules/plotly.js/src/plots/cartesian/constraints.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/dragbox": "./node_modules/plotly.js/src/plots/cartesian/dragbox.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/graph_interact": "./node_modules/plotly.js/src/plots/cartesian/graph_interact.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/include_components": "./node_modules/plotly.js/src/plots/cartesian/include_components.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/layout_attributes": "./node_modules/plotly.js/src/plots/cartesian/layout_attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/layout_defaults": "./node_modules/plotly.js/src/plots/cartesian/layout_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/line_grid_defaults": "./node_modules/plotly.js/src/plots/cartesian/line_grid_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/position_defaults": "./node_modules/plotly.js/src/plots/cartesian/position_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/prefix_suffix_defaults": "./node_modules/plotly.js/src/plots/cartesian/prefix_suffix_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/scale_zoom": "./node_modules/plotly.js/src/plots/cartesian/scale_zoom.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/set_convert": "./node_modules/plotly.js/src/plots/cartesian/set_convert.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/show_dflt": "./node_modules/plotly.js/src/plots/cartesian/show_dflt.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/tick_label_defaults": "./node_modules/plotly.js/src/plots/cartesian/tick_label_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/tick_mark_defaults": "./node_modules/plotly.js/src/plots/cartesian/tick_mark_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/tick_value_defaults": "./node_modules/plotly.js/src/plots/cartesian/tick_value_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/transition_axes": "./node_modules/plotly.js/src/plots/cartesian/transition_axes.js",
/******/ 		"./node_modules/plotly.js/src/plots/cartesian/type_defaults": "./node_modules/plotly.js/src/plots/cartesian/type_defaults.js",
/******/ 		"./node_modules/plotly.js/src/plots/command": "./node_modules/plotly.js/src/plots/command.js",
/******/ 		"./node_modules/plotly.js/src/plots/domain": "./node_modules/plotly.js/src/plots/domain.js",
/******/ 		"./node_modules/plotly.js/src/plots/font_attributes": "./node_modules/plotly.js/src/plots/font_attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/frame_attributes": "./node_modules/plotly.js/src/plots/frame_attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/get_data": "./node_modules/plotly.js/src/plots/get_data.js",
/******/ 		"./node_modules/plotly.js/src/plots/gl3d/project": "./node_modules/plotly.js/src/plots/gl3d/project.js",
/******/ 		"./node_modules/plotly.js/src/plots/layout_attributes": "./node_modules/plotly.js/src/plots/layout_attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/pad_attributes": "./node_modules/plotly.js/src/plots/pad_attributes.js",
/******/ 		"./node_modules/plotly.js/src/plots/plots": "./node_modules/plotly.js/src/plots/plots.js",
/******/ 		"./node_modules/plotly.js/src/plots/template_attributes": "./node_modules/plotly.js/src/plots/template_attributes.js",
/******/ 		"./node_modules/plotly.js/src/registry": "./node_modules/plotly.js/src/registry.js",
/******/ 		"./node_modules/plotly.js/src/snapshot": "./node_modules/plotly.js/src/snapshot/index.js",
/******/ 		"./node_modules/plotly.js/src/snapshot/cloneplot": "./node_modules/plotly.js/src/snapshot/cloneplot.js",
/******/ 		"./node_modules/plotly.js/src/snapshot/download": "./node_modules/plotly.js/src/snapshot/download.js",
/******/ 		"./node_modules/plotly.js/src/snapshot/filesaver": "./node_modules/plotly.js/src/snapshot/filesaver.js",
/******/ 		"./node_modules/plotly.js/src/snapshot/helpers": "./node_modules/plotly.js/src/snapshot/helpers.js",
/******/ 		"./node_modules/plotly.js/src/snapshot/svgtoimg": "./node_modules/plotly.js/src/snapshot/svgtoimg.js",
/******/ 		"./node_modules/plotly.js/src/snapshot/toimage": "./node_modules/plotly.js/src/snapshot/toimage.js",
/******/ 		"./node_modules/plotly.js/src/snapshot/tosvg": "./node_modules/plotly.js/src/snapshot/tosvg.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar": "./node_modules/plotly.js/src/traces/bar/index.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/arrays_to_calcdata": "./node_modules/plotly.js/src/traces/bar/arrays_to_calcdata.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/attributes": "./node_modules/plotly.js/src/traces/bar/attributes.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/calc": "./node_modules/plotly.js/src/traces/bar/calc.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/constants": "./node_modules/plotly.js/src/traces/bar/constants.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/cross_trace_calc": "./node_modules/plotly.js/src/traces/bar/cross_trace_calc.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/defaults": "./node_modules/plotly.js/src/traces/bar/defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/event_data": "./node_modules/plotly.js/src/traces/bar/event_data.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/helpers": "./node_modules/plotly.js/src/traces/bar/helpers.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/hover": "./node_modules/plotly.js/src/traces/bar/hover.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/layout_attributes": "./node_modules/plotly.js/src/traces/bar/layout_attributes.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/layout_defaults": "./node_modules/plotly.js/src/traces/bar/layout_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/plot": "./node_modules/plotly.js/src/traces/bar/plot.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/select": "./node_modules/plotly.js/src/traces/bar/select.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/sieve.js": "./node_modules/plotly.js/src/traces/bar/sieve.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/style": "./node_modules/plotly.js/src/traces/bar/style.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/style_defaults": "./node_modules/plotly.js/src/traces/bar/style_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/bar/uniform_text": "./node_modules/plotly.js/src/traces/bar/uniform_text.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie": "./node_modules/plotly.js/src/traces/pie/index.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/attributes": "./node_modules/plotly.js/src/traces/pie/attributes.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/base_plot": "./node_modules/plotly.js/src/traces/pie/base_plot.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/calc": "./node_modules/plotly.js/src/traces/pie/calc.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/defaults": "./node_modules/plotly.js/src/traces/pie/defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/event_data": "./node_modules/plotly.js/src/traces/pie/event_data.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/helpers": "./node_modules/plotly.js/src/traces/pie/helpers.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/layout_attributes": "./node_modules/plotly.js/src/traces/pie/layout_attributes.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/layout_defaults": "./node_modules/plotly.js/src/traces/pie/layout_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/plot": "./node_modules/plotly.js/src/traces/pie/plot.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/style": "./node_modules/plotly.js/src/traces/pie/style.js",
/******/ 		"./node_modules/plotly.js/src/traces/pie/style_one": "./node_modules/plotly.js/src/traces/pie/style_one.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter": "./node_modules/plotly.js/src/traces/scatter/index.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/arrays_to_calcdata": "./node_modules/plotly.js/src/traces/scatter/arrays_to_calcdata.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/attributes": "./node_modules/plotly.js/src/traces/scatter/attributes.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/calc": "./node_modules/plotly.js/src/traces/scatter/calc.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/calc_selection": "./node_modules/plotly.js/src/traces/scatter/calc_selection.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/colorscale_calc": "./node_modules/plotly.js/src/traces/scatter/colorscale_calc.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/constants": "./node_modules/plotly.js/src/traces/scatter/constants.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/cross_trace_calc": "./node_modules/plotly.js/src/traces/scatter/cross_trace_calc.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/cross_trace_defaults": "./node_modules/plotly.js/src/traces/scatter/cross_trace_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/defaults": "./node_modules/plotly.js/src/traces/scatter/defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/fillcolor_defaults": "./node_modules/plotly.js/src/traces/scatter/fillcolor_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/format_labels": "./node_modules/plotly.js/src/traces/scatter/format_labels.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/get_trace_color": "./node_modules/plotly.js/src/traces/scatter/get_trace_color.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/hover": "./node_modules/plotly.js/src/traces/scatter/hover.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/line_defaults": "./node_modules/plotly.js/src/traces/scatter/line_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/line_points": "./node_modules/plotly.js/src/traces/scatter/line_points.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/line_shape_defaults": "./node_modules/plotly.js/src/traces/scatter/line_shape_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/link_traces": "./node_modules/plotly.js/src/traces/scatter/link_traces.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/make_bubble_size_func": "./node_modules/plotly.js/src/traces/scatter/make_bubble_size_func.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/marker_colorbar": "./node_modules/plotly.js/src/traces/scatter/marker_colorbar.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/marker_defaults": "./node_modules/plotly.js/src/traces/scatter/marker_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/period_defaults": "./node_modules/plotly.js/src/traces/scatter/period_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/plot": "./node_modules/plotly.js/src/traces/scatter/plot.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/select": "./node_modules/plotly.js/src/traces/scatter/select.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/stack_defaults": "./node_modules/plotly.js/src/traces/scatter/stack_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/style": "./node_modules/plotly.js/src/traces/scatter/style.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/subtypes": "./node_modules/plotly.js/src/traces/scatter/subtypes.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/text_defaults": "./node_modules/plotly.js/src/traces/scatter/text_defaults.js",
/******/ 		"./node_modules/plotly.js/src/traces/scatter/xy_defaults": "./node_modules/plotly.js/src/traces/scatter/xy_defaults.js",
/******/ 		"./node_modules/plotly.js/src/version": "./node_modules/plotly.js/src/version.js",
/******/ 		"./node_modules/polybooljs/lib/build-log": "./node_modules/polybooljs/lib/build-log.js",
/******/ 		"./node_modules/polybooljs/lib/epsilon": "./node_modules/polybooljs/lib/epsilon.js",
/******/ 		"./node_modules/polybooljs/lib/geojson": "./node_modules/polybooljs/lib/geojson.js",
/******/ 		"./node_modules/polybooljs/lib/intersecter": "./node_modules/polybooljs/lib/intersecter.js",
/******/ 		"./node_modules/polybooljs/lib/linked-list": "./node_modules/polybooljs/lib/linked-list.js",
/******/ 		"./node_modules/polybooljs/lib/segment-chainer": "./node_modules/polybooljs/lib/segment-chainer.js",
/******/ 		"./node_modules/polybooljs/lib/segment-selector": "./node_modules/polybooljs/lib/segment-selector.js",
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
/******/ 		"./static/js/stats/stats": "./static/js/stats/stats.js",
/******/ 		"./static/js/webpack_public_path": "./static/js/webpack_public_path.js",
/******/ 		"./static/styles/alerts.css": "./static/styles/alerts.css",
/******/ 		"./static/styles/portico/portico_styles.css": "./static/styles/portico/portico_styles.css",
/******/ 		"./static/styles/portico/stats.css": "./static/styles/portico/stats.css",
/******/ 		"./static/styles/pygments.css": "./static/styles/pygments.css",
/******/ 		"./static/third/bootstrap/css/bootstrap-btn.css": "./static/third/bootstrap/css/bootstrap-btn.css",
/******/ 		"./static/third/bootstrap/css/bootstrap.css": "./static/third/bootstrap/css/bootstrap.css",
/******/ 		"./static/third/bootstrap/js/bootstrap": "./static/third/bootstrap/js/bootstrap.js",
/******/ 		"./tools/debug-require": "./tools/debug-require.js",
/******/ 		"@plotly/d3": "./node_modules/@plotly/d3/d3.js",
/******/ 		"@uppy/core/dist/style.css": "./node_modules/@uppy/core/dist/style.css",
/******/ 		"@uppy/progress-bar/dist/style.css": "./node_modules/@uppy/progress-bar/dist/style.css",
/******/ 		"d3-format": "./node_modules/d3-format/src/index.js",
/******/ 		"d3-time": "./node_modules/d3-time/src/index.js",
/******/ 		"d3-time-format": "./node_modules/d3-time-format/src/index.js",
/******/ 		"events": "./node_modules/events/events.js",
/******/ 		"fast-isnumeric": "./node_modules/fast-isnumeric/index.js",
/******/ 		"font-awesome/css/font-awesome.css": "./node_modules/font-awesome/css/font-awesome.css",
/******/ 		"ga-gtag": "./node_modules/ga-gtag/lib/index.js",
/******/ 		"gl-mat4": "./node_modules/gl-mat4/index.js",
/******/ 		"gl-mat4/fromQuat": "./node_modules/gl-mat4/fromQuat.js",
/******/ 		"has-hover": "./node_modules/has-hover/index.js",
/******/ 		"has-passive-events": "./node_modules/has-passive-events/index.js",
/******/ 		"is-browser": "./node_modules/is-browser/client.js",
/******/ 		"is-mobile": "./node_modules/is-mobile/index.js",
/******/ 		"is-string-blank": "./node_modules/is-string-blank/index.js",
/******/ 		"jquery": "./node_modules/jquery/dist/jquery.js",
/******/ 		"mouse-event-offset": "./node_modules/mouse-event-offset/index.js",
/******/ 		"native-promise-only": "./node_modules/native-promise-only/lib/npo.src.js",
/******/ 		"parse-svg-path": "./node_modules/parse-svg-path/index.js",
/******/ 		"plotly.js/lib/bar": "./node_modules/plotly.js/lib/bar.js",
/******/ 		"plotly.js/lib/core": "./node_modules/plotly.js/lib/core.js",
/******/ 		"plotly.js/lib/pie": "./node_modules/plotly.js/lib/pie.js",
/******/ 		"point-in-polygon/nested": "./node_modules/point-in-polygon/nested.js",
/******/ 		"polybooljs": "./node_modules/polybooljs/index.js",
/******/ 		"simplebar/dist/simplebar.css": "./node_modules/simplebar/dist/simplebar.css",
/******/ 		"source-code-pro/source-code-pro.css": "./node_modules/source-code-pro/source-code-pro.css",
/******/ 		"source-sans/source-sans-3.css": "./node_modules/source-sans/source-sans-3.css",
/******/ 		"tinycolor2": "./node_modules/tinycolor2/tinycolor.js",
/******/ 		"tippy.js": "./node_modules/tippy.js/dist/tippy.esm.js",
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
/******/ 			"stats": 0,
/******/ 			"vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16": 0,
/******/ 			"static_third_bootstrap_css_bootstrap_css": 0,
/******/ 			"static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_tippy_js_dist_tippy_esm_js","vendors-node_modules_d3-format_src_defaultLocale_js-node_modules_d3-format_src_precisionFixed-f8a11e","vendors-node_modules_ga-gtag_lib_index_js-node_modules_tippy_js_dist_tippy_css-node_modules_p-e3c3d9","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839"], () => (__webpack_require__("./static/js/bundles/portico.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_tippy_js_dist_tippy_esm_js","vendors-node_modules_d3-format_src_defaultLocale_js-node_modules_d3-format_src_precisionFixed-f8a11e","vendors-node_modules_ga-gtag_lib_index_js-node_modules_tippy_js_dist_tippy_css-node_modules_p-e3c3d9","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839"], () => (__webpack_require__("./static/styles/portico/stats.css")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_tippy_js_dist_tippy_esm_js","vendors-node_modules_d3-format_src_defaultLocale_js-node_modules_d3-format_src_precisionFixed-f8a11e","vendors-node_modules_ga-gtag_lib_index_js-node_modules_tippy_js_dist_tippy_css-node_modules_p-e3c3d9","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839"], () => (__webpack_require__("./static/js/stats/stats.js")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_tippy_js_dist_tippy_esm_js","vendors-node_modules_d3-format_src_defaultLocale_js-node_modules_d3-format_src_precisionFixed-f8a11e","vendors-node_modules_ga-gtag_lib_index_js-node_modules_tippy_js_dist_tippy_css-node_modules_p-e3c3d9","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839"], () => (__webpack_require__("./node_modules/tippy.js/dist/tippy.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_uppy_core_dist_style_css-node_modules_uppy_progress-bar_dist_style_css-n-dbfb16","vendors-node_modules_jquery_dist_jquery_js-node_modules_uppy_core_dist_style_css-node_modules-a12481","vendors-node_modules_tippy_js_dist_tippy_esm_js","vendors-node_modules_d3-format_src_defaultLocale_js-node_modules_d3-format_src_precisionFixed-f8a11e","vendors-node_modules_ga-gtag_lib_index_js-node_modules_tippy_js_dist_tippy_css-node_modules_p-e3c3d9","static_third_bootstrap_css_bootstrap_css","static_js_bundles_common_js-static_js_debug_js","static_styles_components_css-static_styles_portico_markdown_css-static_styles_portico_portico-164839"], () => (__webpack_require__("./static/js/debug.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=stats.js.map