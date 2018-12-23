webpackJsonp([0],{

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(78)("7f42dbcd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72ce9f28\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./clients_list.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72ce9f28\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./clients_list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(false);
// imports


// module
exports.push([module.i, "\n.clientList {\n    min-height: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 286:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "ClientsList",
    props: ['propStatuses', 'propClient'],
    data: function data() {
        return {
            client: null,
            statuses: null,
            input: null
        };
    },
    watch: {
        client: function client(value) {
            if (value) {
                this.$store.deal.show.client = value.first_name;
                this.$store.deal.client = value;
            } else {
                this.$store.deal.show.client = "Не выбран";
                this.$store.deal.client = null;
            }
        }
    },
    created: function created() {
        this.client = this.propClient ? JSON.parse(this.propClient) : null;
        this.statuses = JSON.parse(this.propStatuses);
    },
    mounted: function mounted() {
        this.init();
        this.initEvents();
    },

    methods: {
        init: function init() {
            this.input = $(this.$refs.input).typeahead(null, {
                limit: 20,
                minLength: 3,
                display: 'first_name',
                highlight: true,
                async: true,
                source: this.getServerData(),
                templates: {
                    pending: '<div class="p-2 text-center">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u0442 \u043F\u043E\u0438\u0441\u043A... <span class="ml-2 m-loader m-loader--brand"></span></div>',
                    notFound: '<div class="p-2 w-100 text-center">Ничего не найдено</div>',
                    header: '<h6 class="p-2 m--font-bolder m--font-brand">Найденные клиенты</h6>',
                    suggestion: this.templateResult
                }
            });
        },
        getServerData: function getServerData() {
            return new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.whitespace,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                cache: false,
                remote: {
                    url: route('async.clients.search', '') + '%QUERY',
                    wildcard: '%QUERY'
                }
            });
        },
        templateResult: function templateResult(data) {
            var name = this.makeClientName(data);
            return $('<div class="m--font-bold m--font-brand">\n                        <span class="m-badge m-badge--wide m-badge--' + this.statuses[data.status].class + ' m--font-bold">\n                            ' + this.statuses[data.status].title + '\n                        </span>\n                         ' + name + '\n                     </div>');
        },
        initEvents: function initEvents() {
            var _this = this;

            this.input.bind('typeahead:select', function (ev, suggestion) {
                _this.client = suggestion;
                _this.input.typeahead('val', '');
            });
        },
        makeClientName: function makeClientName(client) {
            return '\n                ' + client.first_name + '\n                ' + (client.last_name !== null ? client.last_name : '') + '\n                ' + (client.father_name !== null ? client.father_name : '') + '\n                ' + (client.phone !== null ? '| ' + client.phone : '') + '\n                ';
        }
    }
});

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "clientList" },
    [
      _c(
        "div",
        { staticClass: "form-group m-form-group mb-3 position-relative" },
        [
          _c("label", { staticClass: "form-control-label" }, [
            _vm._v("Введите данные клиента")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "m-typeahead" }, [
            _c("input", {
              ref: "input",
              class: ["form-control m-input", { ignore: !!_vm.client }],
              attrs: {
                type: "text",
                placeholder:
                  "Начинайте вводить: имя | фамилия | отчество | телефон | емайл | серия пасспорта",
                "data-validation-message":
                  "Вы должны выбрать клиента чтобы продолжить.",
                "data-msg-required":
                  "Вы должны выбрать клиента чтобы продолжить.",
                required: ""
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.client
          ? _c(
              "div",
              {
                staticClass:
                  "p-3 bg-secondary m--font-bold m--font-info d-flex align-items-center border-info"
              },
              [
                _c(
                  "span",
                  {
                    class:
                      "m-badge m-badge--wide m-badge--" +
                      _vm.statuses[_vm.client.status].class
                  },
                  [_vm._v(_vm._s(_vm.statuses[_vm.client.status].title))]
                ),
                _vm._v(" \n            "),
                _c(
                  "a",
                  {
                    staticClass: "m-link m--font-bolder",
                    attrs: {
                      href: _vm.route("clients.show", _vm.client),
                      target: "_blank"
                    }
                  },
                  [_vm._v(_vm._s(_vm.makeClientName(_vm.client)))]
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.client
        ? _c("input", {
            attrs: { type: "hidden", name: "client_id" },
            domProps: { value: _vm.client.id }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-72ce9f28", module.exports)
  }
}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(78)("1bffd4a0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e2fd60d8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inventory_list.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e2fd60d8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inventory_list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(false);
// imports


// module
exports.push([module.i, "\n.inventoryList[data-v-e2fd60d8] {\n  min-height: 250px;\n}\n.inventoryList .inventoryListItem[data-v-e2fd60d8] {\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 290:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "InventoryList",
    props: ['propDeal', 'propStatuses'],
    store: ['deal'],
    data: function data() {
        return {
            deal_id: 0,
            items: [],
            statuses: {},
            per: {
                day: "День",
                hour: "Час"
            },
            input: null
        };
    },
    computed: {
        itemids: function itemids() {
            if (this.items) {
                return JSON.stringify(this.items.map(function (i) {
                    return Number(i.id);
                }));
            }
        }
    },
    watch: {
        "deal.show.date": function dealShowDate() {
            if (this.input === null) {
                this.init();
                this.initEvents();
            }
            this.getItems();
        },
        items: function items() {
            this.deal.items = this.items;
            this.deal.show.itemsCount = this.items.length + ' ' + noun(this.items.length, 'предмет', 'предмета', 'предметов');
        }
    },
    created: function created() {
        if (this.propDeal) {
            var deal = JSON.parse(this.propDeal);
            this.items = deal.items ? deal.items : [];
            this.deal_id = deal.id ? deal.id : 0;
        }
        this.statuses = this.propStatuses ? JSON.parse(this.propStatuses) : {};
    },
    mounted: function mounted() {},

    methods: {
        init: function init() {
            this.input = $(this.$refs.input).typeahead(null, {
                limit: 20,
                minLength: 3,
                display: 'name',
                highlight: true,
                async: true,
                source: this.getServerData(),
                templates: {
                    pending: '<div class="p-2 text-center">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u0442 \u043F\u043E\u0438\u0441\u043A... <span class="ml-2 m-loader m-loader--brand"></span></div>',
                    notFound: '<div class="p-2 w-100 text-center">Ничего не найдено</div>',
                    header: '<h6 class="p-2 m--font-bolder m--font-brand">Найденные предметы</h6>',
                    suggestion: this.templateResult
                }
            });
        },
        getServerData: function getServerData() {
            var self = this;
            return new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.whitespace,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                cache: false,
                remote: {
                    url: route('async.inventory.search'),
                    wildcard: "%QUERY",
                    prepare: function prepare(query, settings) {
                        settings.type = "POST";
                        settings.data = { field: query, start: self.deal.start, finish: self.deal.end };
                        return settings;
                    }
                }

            });
        },
        initEvents: function initEvents() {
            var _this = this;

            this.input.bind('typeahead:select', function (ev, suggestion) {
                _this.items.push(suggestion);
                _this.input.typeahead('val', '');
            });
        },
        templateResult: function templateResult(item) {
            return $('<div>\n                    <span class="m-badge m-badge--wide m-badge--info m--font-bold">\u2116' + item.inventory_code + '</span>\n                    <span class="m-badge m-badge--wide m-badge--' + this.statuses[item.status].class + ' m--font-bold"> ' + this.statuses[item.status].title + '</span>\n                     ' + item.name + ' ' + (item.model ? item.model : '') + '\n                    <span class="m--font-brand m--font-bold">\n                        <small> ' + item.rent.price + '  ' + this.$store.currencies.list[0].code + ' / ' + this.per[item.rent.per] + '</small>\n                    </span>\n                    </div>');
        },
        getItems: function getItems() {
            var _this2 = this;

            if (this.items.length > 0) {
                axios.post(route('async.inventory.isactivedeal', {
                    deal: this.deal_id,
                    items: JSON.stringify(this.items),
                    start: this.deal.start,
                    finish: this.deal.end
                })).then(function (r) {
                    _this2.items = r.data.items;
                    _this2.showInfo(r.data.deleted);
                });
            }
        },
        showInfo: function showInfo(items) {
            if (items.length > 0) {
                var info = '';
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        info += '<br/>' + item.name + ' ' + item.model + '';
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                toastr.info(info, '<span class="h4 m-font--bold">Внимание!</span><br/>Cледующие предметы не доступны на этот диапозон дат. Они удалены из списка.');
            }
        }
    }
});

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "inventoryList" },
    [
      _c("div", { staticClass: "form-group m-form-group position-relative" }, [
        _c("label", { staticClass: "form-control-label" }, [
          _vm._v("Введите данные предмета")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "m-typeahead" }, [
          _c("input", {
            ref: "input",
            staticClass: "form-control m-input",
            attrs: {
              type: "text",
              placeholder:
                "Начинайте вводить: и.н. | название | модель | серийный номер "
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c(
        "transition-group",
        { attrs: { name: "fade" } },
        _vm._l(_vm.items, function(item, key) {
          return Object.keys(_vm.items).length > 0
            ? _c(
                "div",
                {
                  key: key,
                  staticClass:
                    "p-3 mb-1 bg-secondary m--font-bold m--font-info d-flex align-items-center justify-content-between"
                },
                [
                  _c("div", [
                    _c(
                      "span",
                      { staticClass: "m-badge m-badge--wide m-badge--info" },
                      [_vm._v("№" + _vm._s(item.inventory_code))]
                    ),
                    _vm._v(" \n                "),
                    _c(
                      "span",
                      {
                        class:
                          "m-badge m-badge--wide m-badge--" +
                          _vm.statuses[item.status].class
                      },
                      [_vm._v(_vm._s(_vm.statuses[item.status].title))]
                    ),
                    _vm._v(" \n                "),
                    _c(
                      "a",
                      {
                        staticClass: "m-link m--font-bolder",
                        attrs: {
                          href: _vm.route("inventory.show", item),
                          target: "_blank"
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(item.name) +
                            "\n                    " +
                            _vm._s(item.model)
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "m-badge m-badge--wide m-badge--warning" },
                      [
                        _vm._v(_vm._s(item.rent.price) + " "),
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$store.currencies.list[0].code
                            )
                          }
                        }),
                        _vm._v(" / " + _vm._s(_vm.per[item.rent.per]))
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn m-btn m-btn--icon m-btn--icon-only btn-danger btn-sm m-btn--pill",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.items.splice(key, 1)
                        }
                      }
                    },
                    [_c("i", { staticClass: "la la-trash" })]
                  )
                ]
              )
            : _vm._e()
        })
      ),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "items" },
        domProps: { value: _vm.itemids }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e2fd60d8", module.exports)
  }
}

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(78)("45014b1d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-404a0036\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./deal_dates.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-404a0036\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./deal_dates.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(false);
// imports


// module
exports.push([module.i, "\n.dealDates[data-v-404a0036] {\n  min-height: 250px;\n}\n.dealDateInput[data-v-404a0036] {\n  text-align: center;\n  font-weight: bold;\n}\n@media only screen and (max-width: 1366px) {\n.dealDateInput[data-v-404a0036] {\n      font-size: 26px !important;\n}\n}\n@media only screen and (max-width: 720px) {\n.dealDateInput[data-v-404a0036] {\n      font-size: 20px !important;\n}\n}\n@media only screen and (max-width: 420px) {\n.dealDateInput[data-v-404a0036] {\n      font-size: 12px !important;\n}\n}\n@media only screen and (max-width: 320px) {\n.dealDateInput[data-v-404a0036] {\n      font-size: 10px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 294:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "DealDates",
    props: ['propStart', 'propEnd'],
    store: ['deal'],
    mounted: function mounted() {
        this.init();
        if (this.propStart && this.propEnd) {
            this.deal.start = this.propStart;
            this.deal.end = this.propEnd;
        } else {
            this.deal.start = moment().format("YYYY-MM-DD HH:mm");
            this.deal.end = moment().add(1, 'days').format("YYYY-MM-DD HH:mm");
        }
    },

    watch: {
        "deal.end": function dealEnd() {
            this.update();
        },
        "deal.start": function dealStart() {
            this.update();
        }
    },
    methods: {
        init: function init() {
            var _this = this;

            $(this.$refs.dealDates).daterangepicker({
                opens: 'center',
                timePicker: true,
                timePicker24Hour: true,
                timePickerIncrement: 30,
                firstDay: 1,
                autoApply: true,
                autoUpdateInput: true,
                startDate: this.start,
                endDate: this.end,
                // minDate: moment(),
                // parentEl:$('.m-wizard__form'),
                // drops:"down",
                ranges: {
                    'До завтра': [moment(), moment().add(1, 'days')],
                    '3 дня': [moment(), moment().add(3, 'days')],
                    '5 дней': [moment(), moment().add(5, 'days')],
                    'Неделя': [moment(), moment().add(7, 'days')],
                    '10 дней': [moment(), moment().add(10, 'days')],
                    'Месяц': [moment(), moment().add(30, 'days')]
                },
                locale: {
                    format: "YYYY-MM-DD HH:mm",
                    separator: " / ",
                    applyLabel: "Подтвердить",
                    cancelLabel: 'Отмена',
                    customRangeLabel: "Другое",
                    fromLabel: "С",
                    toLabel: "До"
                }
            }, function (start, end, label) {
                _this.deal.start = moment(start).format("YYYY-MM-DD HH:mm");
                _this.deal.end = moment(end).format("YYYY-MM-DD HH:mm");
            });
        },
        update: function update() {
            this.$store.deal.show.date = _.capitalize(moment(this.deal.start).format("MMM-DD")) + ' / ' + _.capitalize(moment(this.deal.end).format("MMM-DD"));
        }
    }
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dealDates" }, [
    _c("div", { staticClass: "form-group m-form-group mb-3" }, [
      _c("label", { staticClass: "form-control-label" }, [
        _vm._v("Выберите диапазон дат")
      ]),
      _vm._v(" "),
      _c("input", {
        ref: "dealDates",
        staticClass: "form-control m-input dealDateInput m--font-brand",
        attrs: { type: "text", placeholder: "Нажмите чтобы выбрать" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "start" },
        domProps: { value: _vm.deal.start }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "end" },
        domProps: { value: _vm.deal.end }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-404a0036", module.exports)
  }
}

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(78)("5f22e6f2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35ecde54\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./deal_params.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35ecde54\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./deal_params.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculations__ = __webpack_require__(299);
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
    name: "DealParams",
    props: ['propDeal'],
    mixins: [__WEBPACK_IMPORTED_MODULE_0__calculations__["a" /* default */]],
    store: ['deal'],
    data: function data() {
        return {
            currentDeal: {},
            items: [],
            sale: 0,
            totalPrice: 0,
            saleInput: false,
            priceInput: false
        };
    },
    watch: {
        sale: function sale(value) {
            this.sale = typeof Number(value) !== "number" || value === "" ? 0 : Number(value);
            this.sale = this.sale > 100 ? 100 : this.sale;
        },
        "deal.items": function dealItems() {
            this.items = this.$store.deal.items;
            this.total();
        },
        "deal.start": function dealStart() {
            this.total();
        },
        "deal.end": function dealEnd() {
            this.total();
        }
    },
    created: function created() {
        this.currentDeal = this.propDeal ? JSON.parse(this.propDeal) : {};
    },
    mounted: function mounted() {
        mApp.initTooltips();
    }
});

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            sale: 0
        };
    },
    computed: {
        totalItemsPrice: function totalItemsPrice() {
            var price = 0;
            var items = this.$store.deal.items;
            for (var item in items) {
                price += Number(items[item].rent.price);
            }
            return price;
        },
        totalRealPrice: function totalRealPrice() {
            var price = 0;
            var items = this.$store.deal.items;
            for (var item in items) {
                var item = items[item];
                var oneHourPrice = Number(item.rent.price);
                if (item.rent.per === "day") {
                    oneHourPrice = item.rent.price / 24;
                }
                if (!item.reserved) {
                    price += oneHourPrice * this.rentHours;
                }
            }
            var result = Number(price).toFixed(1);
            return result > 0 ? result : 0;
        },
        rentHours: function rentHours() {
            return moment(this.$store.deal.end).diff(moment(this.$store.deal.start), 'hours');
        },
        rentDays: function rentDays() {
            return moment(this.$store.deal.end).diff(moment(this.$store.deal.start), 'days');
        },
        duration: function duration() {
            var diff = moment(this.$store.deal.end).diff(moment(this.$store.deal.start));
            var duration = moment.duration(diff);
            return '\n                ' + (duration.days() > 0 ? duration.days() : '') + ' \n                ' + (duration.days() ? noun(duration.days(), 'день', 'дня', 'дней') : '') + '\n                ' + (duration.hours() > 0 ? duration.hours() : '') + ' \n                ' + (duration.hours() ? noun(duration.hours(), 'час', 'часа', 'часов') : '') + '\n                    ';
        }
    },
    methods: {
        total: function total() {
            var total = this.totalRealPrice;
            var result = this.sale > 0 ? (total - total / 100 * this.sale).toFixed(1) : total;
            this.totalPrice = result > 0 ? result : 0;
            return result > 0 ? result : 0;
        },
        calculateSale: function calculateSale(event) {
            if (this.totalRealPrice > 0) {
                this.sale = Number(100 - event.target.value * 100 / this.totalRealPrice).toFixed(1);
                this.sale = this.sale < 0 ? 0 : this.sale;
                this.sale = this.sale > 100 ? 100 : this.sale;
            }
        }
    }
});

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "m-portlet m-portlet--bordered-semi m-portlet--space m-portlet--full-height"
    },
    [
      _c("div", { staticClass: "m-portlet__body" }, [
        _c("div", { staticClass: "m-widget25" }, [
          _c("span", { staticClass: "m-widget25__price m--font-brand" }, [
            _c("i", { staticClass: "flaticon-coins fa-1x" }),
            _vm._v(
              "\n                " +
                _vm._s(_vm.totalPrice) +
                "\n                "
            ),
            _c("small", [
              _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.$store.currencies.list[0].code)
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "m-widget25__desc" }, [
            _vm._v("за " + _vm._s(_vm.duration))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "m-widget25--progress" }, [
            _c("div", { staticClass: "m-widget25__progress" }, [
              _c("span", { staticClass: "m-widget25__progress-number" }, [
                _vm._v(_vm._s(_vm.totalRealPrice) + " "),
                _c("small", [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(_vm.$store.currencies.list[0].code)
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "m--space-10" }),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("span", { staticClass: "m-widget25__progress-sub" }, [
                _vm._v("Без скидки")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "m-widget25__progress cursor-pointer",
                on: {
                  mouseleave: function($event) {
                    _vm.saleInput ? (_vm.saleInput = !_vm.saleInput) : ""
                  }
                }
              },
              [
                _c("span", { staticClass: "m-widget25__progress-number " }, [
                  _vm.saleInput
                    ? _c(
                        "div",
                        { staticClass: "m-input-icon m-input-icon--right" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.sale,
                                expression: "sale",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control m-input bg-transparent",
                            staticStyle: {
                              "font-size": "26px",
                              "font-weight": "bold"
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.sale },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.sale = $event.target.value.trim()
                                },
                                function($event) {
                                  _vm.total()
                                }
                              ],
                              blur: function($event) {
                                _vm.$forceUpdate()
                              }
                            }
                          })
                        ]
                      )
                    : _c(
                        "span",
                        {
                          staticClass: "cursor-pointer",
                          on: {
                            click: function($event) {
                              _vm.saleInput = !_vm.saleInput
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.sale) + " %")]
                      )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "m--space-10" }),
                _vm._v(" "),
                _c("div", { staticClass: "progress m-progress--sm" }, [
                  _c("div", {
                    staticClass: "progress-bar m--bg-warning",
                    style: "width:" + _vm.sale + "%;",
                    attrs: { role: "progressbar" }
                  })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "m-widget25__progress-sub" }, [
                  _vm._v("Скидка")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "m-widget25__progress cursor-pointer",
                on: {
                  mouseleave: function($event) {
                    _vm.priceInput ? (_vm.priceInput = !_vm.priceInput) : ""
                  }
                }
              },
              [
                _c("span", { staticClass: "m-widget25__progress-number" }, [
                  _vm.priceInput
                    ? _c(
                        "div",
                        { staticClass: "m-input-icon m-input-icon--right" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.totalPrice,
                                expression: "totalPrice"
                              }
                            ],
                            staticClass: "form-control m-input bg-transparent",
                            staticStyle: {
                              "font-size": "26px",
                              "font-weight": "bold"
                            },
                            attrs: { type: "text" },
                            domProps: { value: _vm.totalPrice },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.totalPrice = $event.target.value
                                },
                                function($event) {
                                  _vm.calculateSale($event)
                                }
                              ]
                            }
                          })
                        ]
                      )
                    : _c(
                        "span",
                        {
                          staticClass: "cursor-pointer",
                          on: {
                            click: function($event) {
                              _vm.priceInput = !_vm.priceInput
                            }
                          }
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.totalPrice) +
                              "\n                                    "
                          ),
                          _c("small", [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$store.currencies.list[0].code
                                )
                              }
                            })
                          ])
                        ]
                      )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "m--space-10" }),
                _vm._v(" "),
                _c("div", { staticClass: "progress m-progress--sm" }, [
                  _c("div", {
                    staticClass: "progress-bar m--bg-success",
                    style: "width:" + (100 - _vm.sale) + "%;",
                    attrs: { role: "progressbar" }
                  })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "m-widget25__progress-sub" }, [
                  _vm._v("Итоговая")
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "realprice" },
        domProps: { value: _vm.totalRealPrice }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "price" },
        domProps: { value: _vm.totalPrice }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "sale" },
        domProps: { value: _vm.sale }
      })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress m-progress--sm" }, [
      _c("div", {
        staticClass: "progress-bar m--bg-danger",
        staticStyle: { width: "100%" },
        attrs: { role: "progressbar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-portlet__foot pb-2" }, [
      _c(
        "span",
        {
          staticClass: "m--font-info",
          attrs: {
            "data-toggle": "m-tooltip",
            "data-placement": "right",
            title: "",
            "data-original-title":
              "Вы можете редактировать скидку и итоговую сумму нажатием на них."
          }
        },
        [_c("small", [_c("i", { staticClass: "flaticon-info" })])]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-35ecde54", module.exports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(284)
}
var normalizeComponent = __webpack_require__(76)
/* script */
var __vue_script__ = __webpack_require__(286)
/* template */
var __vue_template__ = __webpack_require__(287)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/js/components/Deals/clients_list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72ce9f28", Component.options)
  } else {
    hotAPI.reload("data-v-72ce9f28", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(288)
}
var normalizeComponent = __webpack_require__(76)
/* script */
var __vue_script__ = __webpack_require__(290)
/* template */
var __vue_template__ = __webpack_require__(291)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e2fd60d8"
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
Component.options.__file = "resources/js/components/Deals/inventory_list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e2fd60d8", Component.options)
  } else {
    hotAPI.reload("data-v-e2fd60d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(76)
/* script */
var __vue_script__ = __webpack_require__(294)
/* template */
var __vue_template__ = __webpack_require__(295)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-404a0036"
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
Component.options.__file = "resources/js/components/Deals/deal_dates.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-404a0036", Component.options)
  } else {
    hotAPI.reload("data-v-404a0036", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(296)
}
var normalizeComponent = __webpack_require__(76)
/* script */
var __vue_script__ = __webpack_require__(298)
/* template */
var __vue_template__ = __webpack_require__(300)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-35ecde54"
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
Component.options.__file = "resources/js/components/Deals/deal_params.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35ecde54", Component.options)
  } else {
    hotAPI.reload("data-v-35ecde54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 76:
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

/***/ 77:
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

/***/ 78:
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

var listToStyles = __webpack_require__(79)

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

/***/ 79:
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