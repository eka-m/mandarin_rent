webpackJsonp([1],{

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(76)("2dd23a59", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-035dade3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profit.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-035dade3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "ProfitChart",
    props: ['chartdata', 'options'],
    data: function data() {
        return {
            chart: null,
            data: null,
            month: null,
            prices: {
                total: null,
                paid: null,
                notpaid: null
            },
            dates: {
                start: moment(window.appStarts).format('YYYY'),
                end: moment().format('YYYY'),
                selected: moment().format('YYYY')
            }
        };
    },
    watch: {
        "dates.selected": function datesSelected(value) {
            var _this = this;

            mApp.block(this.$refs.graphContainer, {});
            axios.get("/async/statistics/year/" + value).then(function (r) {
                if (r.status === 200) {
                    _this.data = r.data;
                    _this.chart.destroy();
                    _this.renderChart();
                    mApp.unblock(_this.$refs.graphContainer, {});
                }
            });
        }
    },
    created: function created() {
        this.data = JSON.parse(this.chartdata);
    },
    mounted: function mounted() {
        this.renderChart();
        $(this.$refs.yearSelect).selectpicker({ language: "ru" });
    },

    computed: {
        totalProfit: function totalProfit() {
            var self = this;
            return this.data.notPaidProfit.map(function (item, index) {
                return Number(Math.round(item + self.data.paidProfit[index]).toFixed(2));
            });
        }
    },
    methods: {
        renderChart: function renderChart() {
            var self = this;
            this.chart = new Chart(this.$refs.profitChart, {
                type: 'line',
                data: {
                    labels: self.$helpers.monthNames(),
                    datasets: [{
                        label: "Общее",
                        borderColor: 'RGB(255, 175, 31)',
                        pointHoverRadius: 10,
                        fill: false,
                        data: self.totalProfit

                    }, {
                        label: "Оплаченные",
                        borderColor: '#00ddf6',
                        backgroundColor: 'RGB(255, 175, 31,0.5)',
                        pointHoverRadius: 10,
                        fill: false,
                        data: self.data.paidProfit
                    }, {
                        label: "Не оплаченные",
                        borderColor: '#FE0E55',
                        pointHoverRadius: 10,
                        fill: false,
                        data: self.data.notPaidProfit
                    }]
                },
                options: {
                    title: {
                        display: false
                    },
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
                    tooltips: {
                        intersect: false,
                        mode: 'nearest',
                        xPadding: 10,
                        yPadding: 10,
                        caretPadding: 10,
                        callbacks: {
                            afterFooter: function afterFooter(tooltipItems, data) {
                                self.month = tooltipItems[0].xLabel;
                                self.prices.total = self.totalProfit[tooltipItems[0].index];
                                self.prices.paid = self.data.paidProfit[tooltipItems[0].index];
                                self.prices.notpaid = self.data.notPaidProfit[tooltipItems[0].index];
                            }
                        },
                        custom: function custom(tooltipModel) {
                            if (tooltipModel.body === undefined) {
                                self.month = null;
                                self.prices.total = null;
                                self.prices.paid = null;
                                self.prices.notpaid = null;
                            }
                        }
                    },

                    legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    hover: {
                        mode: "index"
                    },
                    scales: {
                        xAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Месяц'
                            }
                        }],
                        yAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Сумма'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    elements: {
                        line: {
                            tension: 0.0000001
                        },
                        point: {
                            radius: 1,
                            borderWidth: 5,
                            borderColor: "#FFFFFF"
                        }
                    },
                    layout: {
                        padding: {
                            left: 20,
                            right: 20,
                            top: 20,
                            bottom: 20
                        }
                    }
                }
            });
        },
        calculatePrices: function calculatePrices(data) {
            return Math.round(data.reduce(function (a, b) {
                return a + b;
            }, 0)).toFixed(1);
        }
    }

});

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "m-portlet m-portlet--full-height m-portlet--skin-light m-portlet--fit shadow-none"
    },
    [
      _c("div", { staticClass: "m-portlet__head" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "m-portlet__head-tools" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.dates.selected,
                  expression: "dates.selected"
                }
              ],
              ref: "yearSelect",
              attrs: { "data-width": "100px" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.dates,
                    "selected",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { domProps: { value: _vm.dates.start } }, [
                _vm._v(_vm._s(_vm.dates.start))
              ]),
              _vm._v(" "),
              _vm._l(_vm.dates.end - _vm.dates.start, function(year, key) {
                return _c(
                  "option",
                  {
                    key: key,
                    domProps: { value: Number(_vm.dates.start) + Number(year) }
                  },
                  [
                    _vm._v(
                      _vm._s(Number(_vm.dates.start) + Number(year)) +
                        "\n                "
                    )
                  ]
                )
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { ref: "graphContainer", staticClass: "m-portlet__body" }, [
        _c(
          "div",
          { staticClass: "m-widget21", staticStyle: { "min-height": "420px" } },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "m-widget21__item m--pull-left" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "m-widget21__info" }, [
                    _c("span", { staticClass: "m-widget21__title" }, [
                      _vm._v(
                        "\n                                Общая\n                            "
                      )
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "m-widget21__sub" }, [
                      _vm._v("Общая сумма.")
                    ]),
                    _vm._v(" "),
                    _vm.month !== null
                      ? _c(
                          "div",
                          {
                            staticClass: "m-widget21__number m--font-warning h4"
                          },
                          [_vm._v(_vm._s(_vm.month))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "m-widget21__number m--font-warning h1" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.prices.total !== null
                              ? _vm.prices.total
                              : _vm.calculatePrices(_vm.totalProfit)
                          ) + " "
                        ),
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$store.currencies.list[0].code
                            )
                          }
                        })
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "m-widget21__item m--pull-left" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "m-widget21__info" }, [
                    _c("span", { staticClass: "m-widget21__title" }, [
                      _vm._v(
                        "\n                                Оплаченные\n                            "
                      )
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "m-widget21__sub" }, [
                      _vm._v("Сумма оплаченных сделок.")
                    ]),
                    _vm._v(" "),
                    _vm.month !== null
                      ? _c(
                          "div",
                          {
                            staticClass: "m-widget21__number m--font-accent h4"
                          },
                          [_vm._v(_vm._s(_vm.month))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "m-widget21__number m--font-accent h1" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.prices.paid !== null
                              ? _vm.prices.paid
                              : _vm.calculatePrices(_vm.data.paidProfit)
                          ) + " "
                        ),
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$store.currencies.list[0].code
                            )
                          }
                        })
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col m--align-left" }, [
                _c("div", { staticClass: "m-widget21__item m--pull-right" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "m-widget21__info" }, [
                    _c("span", { staticClass: "m-widget21__title" }, [
                      _vm._v("Неоплаченные")
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "m-widget21__sub" }, [
                      _vm._v("Сумма неоплаченных сделок.")
                    ]),
                    _vm._v(" "),
                    _vm.month
                      ? _c(
                          "div",
                          {
                            staticClass: "m-widget21__number m--font-danger h4"
                          },
                          [_vm._v(_vm._s(_vm.month))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "m-widget21__number m--font-danger h1" },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.prices.notpaid !== null
                              ? _vm.prices.notpaid
                              : _vm.calculatePrices(_vm.data.notPaidProfit)
                          ) + " "
                        ),
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$store.currencies.list[0].code
                            )
                          }
                        })
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "m-widget21__chart m-portlet-fit--sides",
                staticStyle: { height: "310px" }
              },
              [_c("canvas", { ref: "profitChart" })]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-portlet__head-caption" }, [
      _c("div", { staticClass: "m-portlet__head-title" }, [
        _c("h3", { staticClass: "m-portlet__head-text" }, [
          _vm._v("\n                    Прибыль\n                ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "m-widget21__icon" }, [
      _c(
        "a",
        {
          staticClass:
            "btn btn-warning m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill",
          attrs: { href: "#" }
        },
        [
          _c("i", {
            staticClass: "fa flaticon-coins m--font-light m--font-light"
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "m-widget21__icon" }, [
      _c(
        "a",
        {
          staticClass:
            "btn btn-accent m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill",
          attrs: { href: "#" }
        },
        [
          _c("i", {
            staticClass: "fa flaticon-piggy-bank m--font-light m--font-light"
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "m-widget21__icon" }, [
      _c(
        "a",
        {
          staticClass:
            "btn btn-danger m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill",
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "fa flaticon-exclamation-1 m--font-light" })]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-035dade3", module.exports)
  }
}

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(76)("76796ae0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49805eb5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manager_profit.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49805eb5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manager_profit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "ManagerProfit",
    props: ['propManagers', 'options'],
    data: function data() {
        return {
            chart: null,
            data: null,
            month: null,
            prices: {
                total: null,
                paid: null,
                notpaid: null,
                manager: null
            },
            dates: {
                start: moment(window.appStarts).format('YYYY'),
                end: moment().format('YYYY'),
                selected: moment().format('YYYY')
            },
            managers: [],
            manager: null,
            showdeals: false
        };
    },
    computed: {
        selectedManager: function selectedManager() {
            var _this = this;

            return this.managers.filter(function (i) {
                return i.id === _this.manager;
            })[0];
        },
        totalProfit: function totalProfit() {
            var self = this;
            return this.data.notPaidProfit.map(function (item, index) {
                return Number(Math.round(item + self.data.paidProfit[index]).toFixed(2));
            });
        }
    },
    watch: {
        "dates.selected": function datesSelected(value) {
            this.getData();
        },
        manager: function manager() {
            this.getData();
        }
    },
    created: function created() {
        this.managers = JSON.parse(this.propManagers);
        this.manager = this.managers[0].id;
    },
    mounted: function mounted() {
        $('.manager-profit-select').selectpicker({ language: 'ru' });
    },

    methods: {
        renderChart: function renderChart() {
            var self = this;
            this.chart = new Chart(this.$refs.profitChart, {
                type: 'line',
                data: {
                    labels: self.$helpers.monthNames(),
                    datasets: [{
                        label: "Общее",
                        borderColor: 'RGB(255, 175, 31)',
                        pointHoverRadius: 10,
                        fill: false,
                        data: self.totalProfit

                    }, {
                        label: "Оплаченные",
                        borderColor: '#00ddf6',
                        backgroundColor: 'RGB(255, 175, 31,0.5)',
                        pointHoverRadius: 10,
                        fill: false,
                        data: self.data.paidProfit
                    }, {
                        label: "Не оплаченные",
                        borderColor: '#FE0E55',
                        pointHoverRadius: 10,
                        fill: false,
                        data: self.data.notPaidProfit
                    }, {
                        label: "Прибыль " + self.selectedManager.name,
                        borderColor: '#00B24F',
                        pointHoverRadius: 10,
                        fill: false,
                        data: self.data.managerProfit
                    }]
                },
                options: {
                    title: {
                        display: false
                    },
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
                    tooltips: {
                        intersect: false,
                        mode: 'nearest',
                        xPadding: 10,
                        yPadding: 10,
                        caretPadding: 10,
                        callbacks: {
                            afterFooter: function afterFooter(tooltipItems, data) {
                                self.month = tooltipItems[0].xLabel;
                                self.prices.total = self.totalProfit[tooltipItems[0].index];
                                self.prices.paid = self.data.paidProfit[tooltipItems[0].index];
                                self.prices.notpaid = self.data.notPaidProfit[tooltipItems[0].index];
                                self.prices.manager = self.data.managerProfit[tooltipItems[0].index];
                            }
                        },
                        custom: function custom(tooltipModel) {
                            if (tooltipModel.body === undefined) {
                                self.month = null;
                                self.prices.total = null;
                                self.prices.paid = null;
                                self.prices.notpaid = null;
                                self.prices.manager = null;
                            }
                        }
                    },

                    legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    hover: {
                        mode: "index"
                    },
                    scales: {
                        xAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    elements: {
                        line: {
                            tension: 0.0000001
                        },
                        point: {
                            radius: 1,
                            borderWidth: 5,
                            borderColor: "#FFFFFF"
                        }
                    },
                    layout: {
                        padding: {
                            left: 20,
                            right: 20,
                            top: 20,
                            bottom: 20
                        }
                    }
                }
            });
        },
        getData: function getData() {
            var _this2 = this;

            mApp.block(this.$refs.graphContainer, {});
            axios.get("/async/statistics/year/" + this.dates.selected + '/' + this.manager).then(function (r) {
                if (r.status === 200) {
                    _this2.data = r.data;
                    _this2.reloadChart();
                    mApp.unblock(_this2.$refs.graphContainer, {});
                }
            });
        },
        reloadChart: function reloadChart() {
            if (this.chart) {
                this.chart.destroy();
                this.renderChart();
            } else {
                this.renderChart();
            }
        },
        calculatePrices: function calculatePrices(data) {
            return Math.round(data.reduce(function (a, b) {
                return a + b;
            }, 0)).toFixed(1);
        }
    }

});

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "m-portlet m-portlet--full-height m-portlet--skin-light m-portlet--fit  shadow-none"
    },
    [
      _c("div", { staticClass: "m-portlet__head" }, [
        _c("div", { staticClass: "m-portlet__head-caption" }, [
          _c("div", { staticClass: "m-portlet__head-title" }, [
            _c("h3", { staticClass: "m-portlet__head-text" }, [
              _vm._v(
                "\n                    Статистика менеджера: " +
                  _vm._s(_vm.selectedManager.name) +
                  "\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "m-portlet__head-tools" }, [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "button",
              {
                class:
                  "btn m-btn m-btn--icon m-btn m-btn--custom btn-" +
                  (_vm.showdeals ? "accent" : "brand"),
                on: {
                  click: function($event) {
                    _vm.showdeals = !_vm.showdeals
                  }
                }
              },
              [_c("i", { staticClass: "fa flaticon-share" }), _vm._v(" Сделки")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group mr-3" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.manager,
                    expression: "manager"
                  }
                ],
                ref: "managerSelect",
                staticClass: "manager-profit-select",
                attrs: {
                  "data-width": "230px",
                  "data-live-search": "true",
                  title: "Выберите менеджера"
                },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.manager = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l(_vm.managers, function(manager, key) {
                return _c(
                  "option",
                  {
                    key: key,
                    attrs: {
                      "data-content":
                        manager.name +
                        ' <span class="m-badge m-badge--accent m--font-bolder">' +
                        manager.params.percent +
                        " %</span>"
                    },
                    domProps: { value: manager.id }
                  },
                  [
                    _vm._v(
                      _vm._s(manager.name) +
                        " ${manager.params.percent} %\n                    "
                    )
                  ]
                )
              })
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.dates.selected,
                    expression: "dates.selected"
                  }
                ],
                ref: "yearSelect",
                staticClass: "manager-profit-select",
                attrs: { "data-width": "100px" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.dates,
                      "selected",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { domProps: { value: _vm.dates.start } }, [
                  _vm._v(_vm._s(_vm.dates.start))
                ]),
                _vm._v(" "),
                _vm._l(_vm.dates.end - _vm.dates.start, function(year, key) {
                  return _c(
                    "option",
                    {
                      key: key,
                      domProps: {
                        value: Number(_vm.dates.start) + Number(year)
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(Number(_vm.dates.start) + Number(year)) +
                          "\n                    "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "graphContainer",
          staticClass: "m-portlet__body position-relative"
        },
        [
          _c(
            "div",
            {
              staticClass: "m-widget21",
              staticStyle: { "min-height": "420px" }
            },
            [
              _c("transition", { attrs: { name: "fade" } }, [
                _vm.showdeals && _vm.data
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "div",
                          { staticClass: "m-widget21__item m--pull-left" },
                          [
                            _c("span", { staticClass: "m-widget21__icon" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-warning m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa flaticon-coins m--font-light m--font-light"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "m-widget21__info" }, [
                              _c("span", { staticClass: "m-widget21__title" }, [
                                _vm._v(
                                  "\n                                Общая\n                            "
                                )
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticClass: "m-widget21__sub" }, [
                                _vm._v("Общая сумма.")
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-widget21__number m--font-warning h6"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.month ? _vm.month : "За год")
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-widget21__number m--font-warning h1"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.prices.total !== null
                                        ? _vm.prices.total
                                        : _vm.calculatePrices(_vm.totalProfit)
                                    ) + " "
                                  ),
                                  _c("span", {
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.$store.currencies.list[0].code
                                      )
                                    }
                                  })
                                ]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "div",
                          { staticClass: "m-widget21__item m--pull-left" },
                          [
                            _c("span", { staticClass: "m-widget21__icon" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-accent m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa flaticon-piggy-bank m--font-light m--font-light"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "m-widget21__info" }, [
                              _c("span", { staticClass: "m-widget21__title" }, [
                                _vm._v(
                                  "\n                                Оплаченные\n                            "
                                )
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticClass: "m-widget21__sub" }, [
                                _vm._v("Сумма оплаченных сделок.")
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-widget21__number m--font-accent h6"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.month ? _vm.month : "За год")
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-widget21__number m--font-accent h1"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.prices.paid !== null
                                        ? _vm.prices.paid
                                        : _vm.calculatePrices(
                                            _vm.data.paidProfit
                                          )
                                    ) + " "
                                  ),
                                  _c("span", {
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.$store.currencies.list[0].code
                                      )
                                    }
                                  })
                                ]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "div",
                          { staticClass: "m-widget21__item m--pull-right" },
                          [
                            _c("span", { staticClass: "m-widget21__icon" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-danger m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa flaticon-exclamation-1 m--font-light"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "m-widget21__info" }, [
                              _c("span", { staticClass: "m-widget21__title" }, [
                                _vm._v("Неоплаченные")
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticClass: "m-widget21__sub" }, [
                                _vm._v("Сумма неоплаченных сделок.")
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-widget21__number m--font-danger h6"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.month ? _vm.month : "За год")
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-widget21__number m--font-danger h1"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.prices.notpaid !== null
                                        ? _vm.prices.notpaid
                                        : _vm.calculatePrices(
                                            _vm.data.notPaidProfit
                                          )
                                    ) + " "
                                  ),
                                  _c("span", {
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.$store.currencies.list[0].code
                                      )
                                    }
                                  })
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.showdeals && _vm.data
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "m-widget21__item" }, [
                          _c("span", { staticClass: "m-widget21__icon" }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-success m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill",
                                attrs: { href: "#" }
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fa flaticon-user-ok m--font-light fa-2x"
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "m-widget21__info" }, [
                            _c("span", { staticClass: "m-widget21__title" }, [
                              _vm._v(_vm._s(_vm.selectedManager.name))
                            ]),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "m-widget21__number m--font-success h4"
                              },
                              [_vm._v(_vm._s(_vm.month ? _vm.month : "За год"))]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "m-widget21__number m--font-success h1 display-3"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.prices.manager !== null
                                        ? _vm.prices.manager
                                        : _vm.calculatePrices(
                                            _vm.data.managerProfit
                                          )
                                    ) +
                                    "\n                                    "
                                ),
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$store.currencies.list[0].code
                                    )
                                  }
                                })
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "m-widget21__chart m-portlet-fit--sides",
                  staticStyle: { height: "310px" }
                },
                [_c("canvas", { ref: "profitChart" })]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-49805eb5", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(228)
}
var normalizeComponent = __webpack_require__(74)
/* script */
var __vue_script__ = __webpack_require__(230)
/* template */
var __vue_template__ = __webpack_require__(231)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-035dade3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Charts/profit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-035dade3", Component.options)
  } else {
    hotAPI.reload("data-v-035dade3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(232)
}
var normalizeComponent = __webpack_require__(74)
/* script */
var __vue_script__ = __webpack_require__(234)
/* template */
var __vue_template__ = __webpack_require__(235)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49805eb5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Charts/manager_profit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49805eb5", Component.options)
  } else {
    hotAPI.reload("data-v-49805eb5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(77)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});