"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_includes_manage_views_widgets_WidgetsBrand_js"],{

/***/ "./node_modules/@coreui/icons/js/free/cil-calendar.js":
/*!************************************************************!*\
  !*** ./node_modules/@coreui/icons/js/free/cil-calendar.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cilCalendar": () => (/* binding */ cilCalendar)
/* harmony export */ });
const cilCalendar = ["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z' class='ci-primary'/><rect width='32' height='32' x='112' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]

/***/ }),

/***/ "./resources/js/components/includes/manage/views/widgets/WidgetsBrand.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/includes/manage/views/widgets/WidgetsBrand.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/js/brand/cib-facebook.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/js/brand/cib-twitter.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/js/brand/cib-linkedin.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/js/free/cil-calendar.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/react-chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var WidgetsBrand = function WidgetsBrand(_ref) {
  var withCharts = _ref.withCharts;
  var chartOptions = {
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetStatsD, _objectSpread(_objectSpread({
        className: "mb-4"
      }, withCharts && {
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/react-chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "position-absolute w-100 h-100",
          type: "line",
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [65, 59, 84, 84, 51, 55, 40],
              fill: true
            }]
          },
          options: chartOptions
        })
      }), {}, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_6__.cibFacebook,
          height: 52,
          className: "my-4 text-white"
        }),
        values: [{
          title: 'friends',
          value: '89K'
        }, {
          title: 'feeds',
          value: '459'
        }],
        style: {
          '--cui-card-cap-bg': '#3b5998'
        }
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetStatsD, _objectSpread(_objectSpread({
        className: "mb-4"
      }, withCharts && {
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/react-chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "position-absolute w-100 h-100",
          type: "line",
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [1, 13, 9, 17, 34, 41, 38],
              fill: true
            }]
          },
          options: chartOptions
        })
      }), {}, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_7__.cibTwitter,
          height: 52,
          className: "my-4 text-white"
        }),
        values: [{
          title: 'followers',
          value: '973k'
        }, {
          title: 'tweets',
          value: '1.792'
        }],
        style: {
          '--cui-card-cap-bg': '#00aced'
        }
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetStatsD, _objectSpread(_objectSpread({
        className: "mb-4"
      }, withCharts && {
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/react-chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "position-absolute w-100 h-100",
          type: "line",
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [78, 81, 80, 45, 34, 12, 40],
              fill: true
            }]
          },
          options: chartOptions
        })
      }), {}, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__.cibLinkedin,
          height: 52,
          className: "my-4 text-white"
        }),
        values: [{
          title: 'contacts',
          value: '500'
        }, {
          title: 'feeds',
          value: '1.292'
        }],
        style: {
          '--cui-card-cap-bg': '#4875b4'
        }
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetStatsD, _objectSpread(_objectSpread({
        className: "mb-4",
        color: "warning"
      }, withCharts && {
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/react-chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "position-absolute w-100 h-100",
          type: "line",
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [35, 23, 56, 22, 97, 23, 64],
              fill: true
            }]
          },
          options: chartOptions
        })
      }), {}, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_9__.cilCalendar,
          height: 52,
          className: "my-4 text-white"
        }),
        values: [{
          title: 'events',
          value: '12+'
        }, {
          title: 'meetings',
          value: '4'
        }]
      }))
    })]
  });
};

WidgetsBrand.propTypes = {
  withCharts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsBrand);

/***/ })

}]);