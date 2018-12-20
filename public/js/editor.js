webpackJsonp([7],{

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(76)("b17e3fd6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14c6abc7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./editor.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14c6abc7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./editor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)(false);
// imports
exports.i(__webpack_require__(309), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)(false);
// imports


// module
exports.push([module.i, "/** Trumbowyg v2.12.2 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */\n#trumbowyg-icons,#trumbowyg-icons svg{height:0;width:0}#trumbowyg-icons{overflow:hidden;visibility:hidden}.trumbowyg-box *,.trumbowyg-box ::after,.trumbowyg-box ::before,.trumbowyg-modal *,.trumbowyg-modal ::after,.trumbowyg-modal ::before{box-sizing:border-box}.trumbowyg-box svg,.trumbowyg-modal svg{width:17px;height:100%;fill:#222}.trumbowyg-box,.trumbowyg-editor{display:block;position:relative;border:1px solid #DDD;width:100%;min-height:300px;margin:17px auto}.trumbowyg-box .trumbowyg-editor{margin:0 auto}.trumbowyg-box.trumbowyg-fullscreen{background:#FEFEFE;border:none!important}.trumbowyg-editor,.trumbowyg-textarea{position:relative;box-sizing:border-box;padding:20px;min-height:300px;width:100%;border-style:none;resize:none;outline:0;overflow:auto}.trumbowyg-editor.trumbowyg-autogrow-on-enter,.trumbowyg-textarea.trumbowyg-autogrow-on-enter{transition:height .3s ease-out}.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:transparent!important;text-shadow:0 0 7px #333}@media screen and (min-width:0 \\0){.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(200,200,200,.6)!important}}@supports (-ms-accelerator:true){.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(200,200,200,.6)!important}}.trumbowyg-box-blur .trumbowyg-editor hr,.trumbowyg-box-blur .trumbowyg-editor img{opacity:.2}.trumbowyg-textarea{position:relative;display:block;overflow:auto;border:none;font-size:14px;font-family:Inconsolata,Consolas,Courier,\"Courier New\",sans-serif;line-height:18px}.trumbowyg-box.trumbowyg-editor-visible .trumbowyg-textarea{height:1px!important;width:25%;min-height:0!important;padding:0!important;background:0 0;opacity:0!important}.trumbowyg-box.trumbowyg-editor-hidden .trumbowyg-textarea{display:block}.trumbowyg-box.trumbowyg-editor-hidden .trumbowyg-editor{display:none}.trumbowyg-box.trumbowyg-disabled .trumbowyg-textarea{opacity:.8;background:0 0}.trumbowyg-editor[contenteditable=true]:empty:not(:focus)::before{content:attr(placeholder);color:#999;pointer-events:none}.trumbowyg-button-pane{width:100%;min-height:36px;background:#ecf0f1;border-bottom:1px solid #d7e0e2;margin:0;padding:0 5px;position:relative;list-style-type:none;line-height:10px;backface-visibility:hidden;z-index:11}.trumbowyg-button-pane::after{content:\" \";display:block;position:absolute;top:36px;left:0;right:0;width:100%;height:1px;background:#d7e0e2}.trumbowyg-button-pane .trumbowyg-button-group{display:inline-block}.trumbowyg-button-pane .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:transparent}.trumbowyg-button-pane .trumbowyg-button-group::after{content:\" \";display:inline-block;width:1px;background:#d7e0e2;margin:0 5px;height:35px;vertical-align:top}.trumbowyg-button-pane .trumbowyg-button-group:last-child::after{content:none}.trumbowyg-button-pane button{display:inline-block;position:relative;width:35px;height:35px;padding:1px 6px!important;margin-bottom:1px;overflow:hidden;border:none;cursor:pointer;background:0 0;vertical-align:middle;transition:background-color 150ms,opacity 150ms}.trumbowyg-button-pane button.trumbowyg-textual-button{width:auto;line-height:35px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.trumbowyg-button-pane button.trumbowyg-disable,.trumbowyg-button-pane.trumbowyg-disable button:not(.trumbowyg-not-disable):not(.trumbowyg-active),.trumbowyg-disabled .trumbowyg-button-pane button:not(.trumbowyg-not-disable):not(.trumbowyg-viewHTML-button){opacity:.2;cursor:default}.trumbowyg-button-pane.trumbowyg-disable .trumbowyg-button-group::before,.trumbowyg-disabled .trumbowyg-button-pane .trumbowyg-button-group::before{background:#e3e9eb}.trumbowyg-button-pane button.trumbowyg-active,.trumbowyg-button-pane button:not(.trumbowyg-disable):focus,.trumbowyg-button-pane button:not(.trumbowyg-disable):hover{background-color:#FFF;outline:0}.trumbowyg-button-pane .trumbowyg-open-dropdown::after{display:block;content:\" \";position:absolute;top:25px;right:3px;height:0;width:0;border:3px solid transparent;border-top-color:#555}.trumbowyg-button-pane .trumbowyg-open-dropdown.trumbowyg-textual-button{padding-left:10px!important;padding-right:18px!important}.trumbowyg-button-pane .trumbowyg-open-dropdown.trumbowyg-textual-button::after{top:17px;right:7px}.trumbowyg-modal,.trumbowyg-modal-box{top:0;left:50%;transform:translateX(-50%);backface-visibility:hidden;position:absolute}.trumbowyg-button-pane .trumbowyg-right{float:right}.trumbowyg-dropdown{width:200px;border:1px solid #ecf0f1;padding:5px 0;border-top:none;background:#FFF;margin-left:-1px;box-shadow:rgba(0,0,0,.1) 0 2px 3px;z-index:12}.trumbowyg-dropdown button{display:block;width:100%;height:35px;line-height:35px;text-decoration:none;background:#FFF;padding:0 10px;color:#333!important;border:none;cursor:pointer;text-align:left;font-size:15px;transition:all 150ms}.trumbowyg-dropdown button:focus,.trumbowyg-dropdown button:hover{background:#ecf0f1}.trumbowyg-dropdown button svg{float:left;margin-right:14px}.trumbowyg-modal{max-width:520px;width:100%;height:350px;z-index:12;overflow:hidden}.trumbowyg-modal-box{max-width:500px;width:calc(100% - 20px);padding-bottom:45px;z-index:1;background-color:#FFF;text-align:center;font-size:14px;box-shadow:rgba(0,0,0,.2) 0 2px 3px}.trumbowyg-modal-box .trumbowyg-modal-title{font-size:24px;font-weight:700;margin:0 0 20px;padding:15px 0 13px;display:block;border-bottom:1px solid #EEE;color:#333;background:#fbfcfc}.trumbowyg-modal-box .trumbowyg-progress{width:100%;height:3px;position:absolute;top:58px}.trumbowyg-modal-box .trumbowyg-progress .trumbowyg-progress-bar{background:#2BC06A;width:0;height:100%;transition:width 150ms linear}.trumbowyg-modal-box label{display:block;position:relative;margin:15px 12px;height:29px;line-height:29px;overflow:hidden}.trumbowyg-modal-box label .trumbowyg-input-infos{display:block;text-align:left;height:25px;line-height:25px;transition:all 150ms}.trumbowyg-modal-box label .trumbowyg-input-infos span{display:block;color:#69878f;background-color:#fbfcfc;border:1px solid #DEDEDE;padding:0 7px;width:150px}.trumbowyg-modal-box label .trumbowyg-input-infos span.trumbowyg-msg-error{color:#e74c3c}.trumbowyg-modal-box label.trumbowyg-input-error input,.trumbowyg-modal-box label.trumbowyg-input-error textarea{border:1px solid #e74c3c}.trumbowyg-modal-box label.trumbowyg-input-error .trumbowyg-input-infos{margin-top:-27px}.trumbowyg-modal-box label input{position:absolute;top:0;right:0;height:27px;line-height:27px;border:1px solid #DEDEDE;background:#fff;font-size:14px;max-width:330px;width:70%;padding:0 7px;transition:all 150ms}.trumbowyg-modal-box label input:focus,.trumbowyg-modal-box label input:hover{outline:0;border:1px solid #95a5a6}.trumbowyg-modal-box label input:focus{background:#fbfcfc}.trumbowyg-modal-box label input[type=checkbox]{left:5px;top:5px;right:auto}.trumbowyg-modal-box label input[type=checkbox]+.trumbowyg-input-infos span{width:auto;padding-left:25px}.trumbowyg-modal-box .error{margin-top:25px;display:block;color:red}.trumbowyg-modal-box .trumbowyg-modal-button{position:absolute;bottom:10px;right:0;text-decoration:none;color:#FFF;display:block;width:100px;height:35px;line-height:33px;margin:0 10px;background-color:#333;border:none;cursor:pointer;font-family:\"Trebuchet MS\",Helvetica,Verdana,sans-serif;font-size:16px;transition:all 150ms}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit{right:110px;background:#2bc06a}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:focus,.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:hover{background:#40d47e;outline:0}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:active{background:#25a25a}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset{color:#555;background:#e6e6e6}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:focus,.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover{background:#fbfbfb;outline:0}.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:active{background:#d5d5d5}.trumbowyg-overlay{position:absolute;background-color:rgba(255,255,255,.5);height:100%;width:100%;left:0;display:none;top:0;z-index:10}body.trumbowyg-body-fullscreen{overflow:hidden}.trumbowyg-fullscreen{position:fixed;top:0;left:0;width:100%;height:100%;margin:0;padding:0;z-index:99999}.trumbowyg-fullscreen .trumbowyg-editor,.trumbowyg-fullscreen.trumbowyg-box{border:none}.trumbowyg-fullscreen .trumbowyg-editor,.trumbowyg-fullscreen .trumbowyg-textarea{height:calc(100% - 37px)!important;overflow:auto}.trumbowyg-fullscreen .trumbowyg-overlay{height:100%!important}.trumbowyg-fullscreen .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:#222;fill:transparent}.trumbowyg-editor embed,.trumbowyg-editor img,.trumbowyg-editor object,.trumbowyg-editor video{max-width:100%}.trumbowyg-editor img,.trumbowyg-editor video{height:auto}.trumbowyg-editor img{cursor:move}.trumbowyg-editor.trumbowyg-reset-css{background:#FEFEFE!important;font-family:\"Trebuchet MS\",Helvetica,Verdana,sans-serif!important;font-size:14px!important;line-height:1.45em!important;color:#333}.trumbowyg-editor.trumbowyg-reset-css a{color:#15c!important;text-decoration:underline!important}.trumbowyg-editor.trumbowyg-reset-css blockquote,.trumbowyg-editor.trumbowyg-reset-css div,.trumbowyg-editor.trumbowyg-reset-css ol,.trumbowyg-editor.trumbowyg-reset-css p,.trumbowyg-editor.trumbowyg-reset-css ul{box-shadow:none!important;background:0 0!important;margin:0 0 15px!important;line-height:1.4em!important;font-family:\"Trebuchet MS\",Helvetica,Verdana,sans-serif!important;font-size:14px!important;border:none}.trumbowyg-editor.trumbowyg-reset-css hr,.trumbowyg-editor.trumbowyg-reset-css iframe,.trumbowyg-editor.trumbowyg-reset-css object{margin-bottom:15px!important}.trumbowyg-editor.trumbowyg-reset-css blockquote{margin-left:32px!important;font-style:italic!important;color:#555}.trumbowyg-editor.trumbowyg-reset-css ul{list-style:disc}.trumbowyg-editor.trumbowyg-reset-css ol,.trumbowyg-editor.trumbowyg-reset-css ul{padding-left:20px!important}.trumbowyg-editor.trumbowyg-reset-css ol ol,.trumbowyg-editor.trumbowyg-reset-css ol ul,.trumbowyg-editor.trumbowyg-reset-css ul ol,.trumbowyg-editor.trumbowyg-reset-css ul ul{border:none;margin:2px!important;padding:0 0 0 24px!important}.trumbowyg-editor.trumbowyg-reset-css hr{display:block;height:1px;border:none;border-top:1px solid #CCC}.trumbowyg-editor.trumbowyg-reset-css h1,.trumbowyg-editor.trumbowyg-reset-css h2,.trumbowyg-editor.trumbowyg-reset-css h3,.trumbowyg-editor.trumbowyg-reset-css h4{color:#111;background:0 0;margin:0!important;padding:0!important;font-weight:700}.trumbowyg-editor.trumbowyg-reset-css h1{font-size:32px!important;line-height:38px!important;margin-bottom:20px!important}.trumbowyg-editor.trumbowyg-reset-css h2{font-size:26px!important;line-height:34px!important;margin-bottom:15px!important}.trumbowyg-editor.trumbowyg-reset-css h3{font-size:22px!important;line-height:28px!important;margin-bottom:7px!important}.trumbowyg-editor.trumbowyg-reset-css h4{font-size:16px!important;line-height:22px!important;margin-bottom:7px!important}.trumbowyg-dark .trumbowyg-textarea{background:#111;color:#ddd}.trumbowyg-dark .trumbowyg-box{border:1px solid #343434}.trumbowyg-dark .trumbowyg-box.trumbowyg-fullscreen{background:#111}.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{text-shadow:0 0 7px #ccc}@media screen and (min-width:0 \\0){.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(20,20,20,.6)!important}}@supports (-ms-accelerator:true){.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(20,20,20,.6)!important}}.trumbowyg-dark .trumbowyg-box svg{fill:#ecf0f1;color:#ecf0f1}.trumbowyg-dark .trumbowyg-button-pane{background-color:#222;border-bottom-color:#343434}.trumbowyg-dark .trumbowyg-button-pane::after{background:#343434}.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-button-group:not(:empty)::after{background-color:#343434}.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-button-group:not(:empty) .trumbowyg-fullscreen-button svg{color:transparent}.trumbowyg-dark .trumbowyg-button-pane.trumbowyg-disable .trumbowyg-button-group::after{background-color:#2a2a2a}.trumbowyg-dark .trumbowyg-button-pane button.trumbowyg-active,.trumbowyg-dark .trumbowyg-button-pane button:not(.trumbowyg-disable):focus,.trumbowyg-dark .trumbowyg-button-pane button:not(.trumbowyg-disable):hover{background-color:#333}.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-open-dropdown::after{border-top-color:#fff}.trumbowyg-dark .trumbowyg-fullscreen .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:#ecf0f1;fill:transparent}.trumbowyg-dark .trumbowyg-dropdown{border-color:#222;background:#333;box-shadow:rgba(0,0,0,.3) 0 2px 3px}.trumbowyg-dark .trumbowyg-dropdown button{background:#333;color:#fff!important}.trumbowyg-dark .trumbowyg-dropdown button:focus,.trumbowyg-dark .trumbowyg-dropdown button:hover{background:#222}.trumbowyg-dark .trumbowyg-modal-box{background-color:#222}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-title{border-bottom:1px solid #555;color:#fff;background:#3c3c3c}.trumbowyg-dark .trumbowyg-modal-box label{display:block;position:relative;margin:15px 12px;height:27px;line-height:27px;overflow:hidden}.trumbowyg-dark .trumbowyg-modal-box label .trumbowyg-input-infos span{color:#eee;background-color:#2f2f2f;border-color:#222}.trumbowyg-dark .trumbowyg-modal-box label .trumbowyg-input-infos span.trumbowyg-msg-error{color:#e74c3c}.trumbowyg-dark .trumbowyg-modal-box label.trumbowyg-input-error input,.trumbowyg-dark .trumbowyg-modal-box label.trumbowyg-input-error textarea{border-color:#e74c3c}.trumbowyg-dark .trumbowyg-modal-box label input{border-color:#222;color:#eee;background:#333}.trumbowyg-dark .trumbowyg-modal-box label input:focus,.trumbowyg-dark .trumbowyg-modal-box label input:hover{border-color:#626262}.trumbowyg-dark .trumbowyg-modal-box label input:focus{background-color:#2f2f2f}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit{background:#1b7943}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:focus,.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:hover{background:#25a25a}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:active{background:#176437}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset{background:#333;color:#ccc}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:focus,.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover{background:#444}.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:active{background:#111}.trumbowyg-dark .trumbowyg-overlay{background-color:rgba(15,15,15,.6)}", ""]);

// exports


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_trumbowyg_dist_trumbowyg_min_js__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_trumbowyg_dist_trumbowyg_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_trumbowyg_dist_trumbowyg_min_js__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Editor",
    props: ['name', 'propContent'],
    data: function data() {
        return {
            editor: null,
            content: null,
            config: {}
        };
    },
    created: function created() {
        this.content = this.propContent ? this.propContent : null;
    },
    mounted: function mounted() {
        this.init();
        this.initEvents();
        if (this.content) {
            this.editor.trumbowyg('html', this.content);
        }
    },

    methods: {
        init: function init() {
            this.editor = $(this.$refs.editor).trumbowyg({
                svgPath: '/svg/icons.svg'
            });
        },
        initEvents: function initEvents() {
            var _this = this;

            this.editor.on("tbwchange", function (e) {
                _this.content = _this.editor.trumbowyg('html');
            });
        }
    }
});

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

/** Trumbowyg v2.12.2 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */
jQuery.trumbowyg={langs:{en:{viewHTML:"View HTML",undo:"Undo",redo:"Redo",formatting:"Formatting",p:"Paragraph",blockquote:"Quote",code:"Code",header:"Header",bold:"Bold",italic:"Italic",strikethrough:"Stroke",underline:"Underline",strong:"Strong",em:"Emphasis",del:"Deleted",superscript:"Superscript",subscript:"Subscript",unorderedList:"Unordered list",orderedList:"Ordered list",insertImage:"Insert Image",link:"Link",createLink:"Insert link",unlink:"Remove link",justifyLeft:"Align Left",justifyCenter:"Align Center",justifyRight:"Align Right",justifyFull:"Align Justify",horizontalRule:"Insert horizontal rule",removeformat:"Remove format",fullscreen:"Fullscreen",close:"Close",submit:"Confirm",reset:"Cancel",required:"Required",description:"Description",title:"Title",text:"Text",target:"Target",width:"Width"}},plugins:{},svgPath:null,hideButtonTexts:null},Object.defineProperty(jQuery.trumbowyg,"defaultOptions",{value:{lang:"en",fixedBtnPane:!1,fixedFullWidth:!1,autogrow:!1,autogrowOnEnter:!1,imageWidthModalEdit:!1,prefix:"trumbowyg-",semantic:!0,resetCss:!1,removeformatPasted:!1,tagsToRemove:[],tagsToKeep:["hr","img","embed","iframe","input"],btns:[["viewHTML"],["undo","redo"],["formatting"],["strong","em","del"],["superscript","subscript"],["link"],["insertImage"],["justifyLeft","justifyCenter","justifyRight","justifyFull"],["unorderedList","orderedList"],["horizontalRule"],["removeformat"],["fullscreen"]],btnsDef:{},inlineElementsSelector:"a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",pasteHandlers:[],plugins:{},urlProtocol:!1,minimalLinks:!1},writable:!1,enumerable:!0,configurable:!1}),function(e,t,n,a){"use strict";var o="tbwconfirm",r="tbwcancel";a.fn.trumbowyg=function(e,t){var n="trumbowyg";if(e===Object(e)||!e)return this.each(function(){a(this).data(n)||a(this).data(n,new i(this,e))});if(1===this.length)try{var o=a(this).data(n);switch(e){case"execCmd":return o.execCmd(t.cmd,t.param,t.forceCss);case"openModal":return o.openModal(t.title,t.content);case"closeModal":return o.closeModal();case"openModalInsert":return o.openModalInsert(t.title,t.fields,t.callback);case"saveRange":return o.saveRange();case"getRange":return o.range;case"getRangeText":return o.getRangeText();case"restoreRange":return o.restoreRange();case"enable":return o.setDisabled(!1);case"disable":return o.setDisabled(!0);case"toggle":return o.toggle();case"destroy":return o.destroy();case"empty":return o.empty();case"html":return o.html(t)}}catch(r){}return!1};var i=function(o,r){var i=this,s="trumbowyg-icons",l=a.trumbowyg;i.doc=o.ownerDocument||n,i.$ta=a(o),i.$c=a(o),r=r||{},null!=r.lang||null!=l.langs[r.lang]?i.lang=a.extend(!0,{},l.langs.en,l.langs[r.lang]):i.lang=l.langs.en,i.hideButtonTexts=null!=l.hideButtonTexts?l.hideButtonTexts:r.hideButtonTexts;var d=null!=l.svgPath?l.svgPath:r.svgPath;if(i.hasSvg=d!==!1,i.svgPath=i.doc.querySelector("base")?t.location.href.split("#")[0]:"",0===a("#"+s,i.doc).length&&d!==!1){if(null==d){for(var c=n.getElementsByTagName("script"),u=0;u<c.length;u+=1){var g=c[u].src,f=g.match("trumbowyg(.min)?.js");null!=f&&(d=g.substring(0,g.indexOf(f[0]))+"ui/icons.svg")}null==d&&console.warn("You must define svgPath: https://goo.gl/CfTY9U")}var h=i.doc.createElement("div");h.id=s,i.doc.body.insertBefore(h,i.doc.body.childNodes[0]),a.ajax({async:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"xml",crossDomain:!0,url:d,data:null,beforeSend:null,complete:null,success:function(e){h.innerHTML=(new XMLSerializer).serializeToString(e.documentElement)}})}var p=i.lang.header,m=function(){return(t.chrome||t.Intl&&Intl.v8BreakIterator)&&"CSS"in t};i.btnsDef={viewHTML:{fn:"toggle","class":"trumbowyg-not-disable"},undo:{isSupported:m,key:"Z"},redo:{isSupported:m,key:"Y"},p:{fn:"formatBlock"},blockquote:{fn:"formatBlock"},h1:{fn:"formatBlock",title:p+" 1"},h2:{fn:"formatBlock",title:p+" 2"},h3:{fn:"formatBlock",title:p+" 3"},h4:{fn:"formatBlock",title:p+" 4"},subscript:{tag:"sub"},superscript:{tag:"sup"},bold:{key:"B",tag:"b"},italic:{key:"I",tag:"i"},underline:{tag:"u"},strikethrough:{tag:"strike"},strong:{fn:"bold",key:"B"},em:{fn:"italic",key:"I"},del:{fn:"strikethrough"},createLink:{key:"K",tag:"a"},unlink:{},insertImage:{},justifyLeft:{tag:"left",forceCss:!0},justifyCenter:{tag:"center",forceCss:!0},justifyRight:{tag:"right",forceCss:!0},justifyFull:{tag:"justify",forceCss:!0},unorderedList:{fn:"insertUnorderedList",tag:"ul"},orderedList:{fn:"insertOrderedList",tag:"ol"},horizontalRule:{fn:"insertHorizontalRule"},removeformat:{},fullscreen:{"class":"trumbowyg-not-disable"},close:{fn:"destroy","class":"trumbowyg-not-disable"},formatting:{dropdown:["p","blockquote","h1","h2","h3","h4"],ico:"p"},link:{dropdown:["createLink","unlink"]}},i.o=a.extend(!0,{},l.defaultOptions,r),i.o.hasOwnProperty("imgDblClickHandler")||(i.o.imgDblClickHandler=i.getDefaultImgDblClickHandler()),i.urlPrefix=i.setupUrlPrefix(),i.disabled=i.o.disabled||"TEXTAREA"===o.nodeName&&o.disabled,r.btns?i.o.btns=r.btns:i.o.semantic||(i.o.btns[3]=["bold","italic","underline","strikethrough"]),a.each(i.o.btnsDef,function(e,t){i.addBtnDef(e,t)}),i.eventNamespace="trumbowyg-event",i.keys=[],i.tagToButton={},i.tagHandlers=[],i.pasteHandlers=[].concat(i.o.pasteHandlers),i.isIE=e.userAgent.indexOf("MSIE")!==-1||e.appVersion.indexOf("Trident/")!==-1,i.init()};i.prototype={DEFAULT_SEMANTIC_MAP:{b:"strong",i:"em",s:"del",strike:"del",div:"p"},init:function(){var e=this;e.height=e.$ta.height(),e.initPlugins();try{e.doc.execCommand("enableObjectResizing",!1,!1),e.doc.execCommand("defaultParagraphSeparator",!1,"p")}catch(t){}e.buildEditor(),e.buildBtnPane(),e.fixedBtnPaneEvents(),e.buildOverlay(),setTimeout(function(){e.disabled&&e.setDisabled(!0),e.$c.trigger("tbwinit")})},addBtnDef:function(e,t){this.btnsDef[e]=t},setupUrlPrefix:function(){var e=this.o.urlProtocol;if(e)return"string"!=typeof e?"https://":/:\/\/$/.test(e)?e:e+"://"},buildEditor:function(){var e=this,n=e.o.prefix,o="";e.$box=a("<div/>",{"class":n+"box "+n+"editor-visible "+n+e.o.lang+" trumbowyg"}),e.isTextarea=e.$ta.is("textarea"),e.isTextarea?(o=e.$ta.val(),e.$ed=a("<div/>"),e.$box.insertAfter(e.$ta).append(e.$ed,e.$ta)):(e.$ed=e.$ta,o=e.$ed.html(),e.$ta=a("<textarea/>",{name:e.$ta.attr("id"),height:e.height}).val(o),e.$box.insertAfter(e.$ed).append(e.$ta,e.$ed),e.syncCode()),e.$ta.addClass(n+"textarea").attr("tabindex",-1),e.$ed.addClass(n+"editor").attr({contenteditable:!0,dir:e.lang._dir||"ltr"}).html(o),e.o.tabindex&&e.$ed.attr("tabindex",e.o.tabindex),e.$c.is("[placeholder]")&&e.$ed.attr("placeholder",e.$c.attr("placeholder")),e.$c.is("[spellcheck]")&&e.$ed.attr("spellcheck",e.$c.attr("spellcheck")),e.o.resetCss&&e.$ed.addClass(n+"reset-css"),e.o.autogrow||e.$ta.add(e.$ed).css({height:e.height}),e.semanticCode(),e.o.autogrowOnEnter&&e.$ed.addClass(n+"autogrow-on-enter");var r,i=!1,s=!1,l="keyup";e.$ed.on("dblclick","img",e.o.imgDblClickHandler).on("keydown",function(t){if((t.ctrlKey||t.metaKey)&&!t.altKey){i=!0;var n=e.keys[String.fromCharCode(t.which).toUpperCase()];try{return e.execCmd(n.fn,n.param),!1}catch(a){}}}).on("compositionstart compositionupdate",function(){s=!0}).on(l+" compositionend",function(t){if("compositionend"===t.type)s=!1;else if(s)return;var n=t.which;if(!(n>=37&&n<=40)){if(!t.ctrlKey&&!t.metaKey||89!==n&&90!==n)if(i||17===n)"undefined"==typeof t.which&&e.semanticCode(!1,!1,!0);else{var a=!e.isIE||"compositionend"===t.type;e.semanticCode(!1,a&&13===n),e.$c.trigger("tbwchange")}else e.$c.trigger("tbwchange");setTimeout(function(){i=!1},50)}}).on("mouseup keydown keyup",function(t){(!t.ctrlKey&&!t.metaKey||t.altKey)&&setTimeout(function(){i=!1},50),clearTimeout(r),r=setTimeout(function(){e.updateButtonPaneStatus()},50)}).on("focus blur",function(t){if(e.$c.trigger("tbw"+t.type),"blur"===t.type&&a("."+n+"active-button",e.$btnPane).removeClass(n+"active-button "+n+"active"),e.o.autogrowOnEnter){if(e.autogrowOnEnterDontClose)return;"focus"===t.type?(e.autogrowOnEnterWasFocused=!0,e.autogrowEditorOnEnter()):e.o.autogrow||(e.$ed.css({height:e.$ed.css("min-height")}),e.$c.trigger("tbwresize"))}}).on("cut drop",function(){setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwchange")},0)}).on("paste",function(n){if(e.o.removeformatPasted){n.preventDefault(),t.getSelection&&t.getSelection().deleteFromDocument&&t.getSelection().deleteFromDocument();try{var o=t.clipboardData.getData("Text");try{e.doc.selection.createRange().pasteHTML(o)}catch(r){e.doc.getSelection().getRangeAt(0).insertNode(e.doc.createTextNode(o))}e.$c.trigger("tbwchange",n)}catch(i){e.execCmd("insertText",(n.originalEvent||n).clipboardData.getData("text/plain"))}}a.each(e.pasteHandlers,function(e,t){t(n)}),setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwpaste",n),e.$c.trigger("tbwchange")},0)}),e.$ta.on("keyup",function(){e.$c.trigger("tbwchange")}).on("paste",function(){setTimeout(function(){e.$c.trigger("tbwchange")},0)}),e.$box.on("keydown",function(t){if(27===t.which&&1===a("."+n+"modal-box",e.$box).length)return e.closeModal(),!1})},autogrowEditorOnEnter:function(){var e=this;e.$ed.removeClass("autogrow-on-enter");var t=e.$ed[0].clientHeight;e.$ed.height("auto");var n=e.$ed[0].scrollHeight;e.$ed.addClass("autogrow-on-enter"),t!==n&&(e.$ed.height(t),setTimeout(function(){e.$ed.css({height:n}),e.$c.trigger("tbwresize")},0))},buildBtnPane:function(){var e=this,t=e.o.prefix,n=e.$btnPane=a("<div/>",{"class":t+"button-pane"});a.each(e.o.btns,function(o,r){a.isArray(r)||(r=[r]);var i=a("<div/>",{"class":t+"button-group "+(r.indexOf("fullscreen")>=0?t+"right":"")});a.each(r,function(t,n){try{e.isSupportedBtn(n)&&i.append(e.buildBtn(n))}catch(a){}}),i.html().trim().length>0&&n.append(i)}),e.$box.prepend(n)},buildBtn:function(e){var t=this,n=t.o.prefix,o=t.btnsDef[e],r=o.dropdown,i=null==o.hasIcon||o.hasIcon,s=t.lang[e]||e,l=a("<button/>",{type:"button","class":n+e+"-button "+(o["class"]||"")+(i?"":" "+n+"textual-button"),html:t.hasSvg&&i?'<svg><use xlink:href="'+t.svgPath+"#"+n+(o.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>':t.hideButtonTexts?"":o.text||o.title||t.lang[e]||e,title:(o.title||o.text||s)+(o.key?" (Ctrl + "+o.key+")":""),tabindex:-1,mousedown:function(){return r&&!a("."+e+"-"+n+"dropdown",t.$box).is(":hidden")||a("body",t.doc).trigger("mousedown"),!((t.$btnPane.hasClass(n+"disable")||t.$box.hasClass(n+"disabled"))&&!a(this).hasClass(n+"active")&&!a(this).hasClass(n+"not-disable"))&&(t.execCmd(!!r&&"dropdown"||o.fn||e,o.param||e,o.forceCss),!1)}});if(r){l.addClass(n+"open-dropdown");var d=n+"dropdown",c={"class":d+"-"+e+" "+d+" "+n+"fixed-top"};c["data-"+d]=e;var u=a("<div/>",c);a.each(r,function(e,n){t.btnsDef[n]&&t.isSupportedBtn(n)&&u.append(t.buildSubBtn(n))}),t.$box.append(u.hide())}else o.key&&(t.keys[o.key]={fn:o.fn||e,param:o.param||e});return r||(t.tagToButton[(o.tag||e).toLowerCase()]=e),l},buildSubBtn:function(e){var t=this,n=t.o.prefix,o=t.btnsDef[e],r=null==o.hasIcon||o.hasIcon;return o.key&&(t.keys[o.key]={fn:o.fn||e,param:o.param||e}),t.tagToButton[(o.tag||e).toLowerCase()]=e,a("<button/>",{type:"button","class":n+e+"-dropdown-button"+(o.ico?" "+n+o.ico+"-button":""),html:t.hasSvg&&r?'<svg><use xlink:href="'+t.svgPath+"#"+n+(o.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>'+(o.text||o.title||t.lang[e]||e):o.text||o.title||t.lang[e]||e,title:o.key?" (Ctrl + "+o.key+")":null,style:o.style||null,mousedown:function(){return a("body",t.doc).trigger("mousedown"),t.execCmd(o.fn||e,o.param||e,o.forceCss),!1}})},isSupportedBtn:function(e){try{return this.btnsDef[e].isSupported()}catch(t){}return!0},buildOverlay:function(){var e=this;return e.$overlay=a("<div/>",{"class":e.o.prefix+"overlay"}).appendTo(e.$box),e.$overlay},showOverlay:function(){var e=this;a(t).trigger("scroll"),e.$overlay.fadeIn(200),e.$box.addClass(e.o.prefix+"box-blur")},hideOverlay:function(){var e=this;e.$overlay.fadeOut(50),e.$box.removeClass(e.o.prefix+"box-blur")},fixedBtnPaneEvents:function(){var e=this,n=e.o.fixedFullWidth,o=e.$box;e.o.fixedBtnPane&&(e.isFixed=!1,a(t).on("scroll."+e.eventNamespace+" resize."+e.eventNamespace,function(){if(o){e.syncCode();var r=a(t).scrollTop(),i=o.offset().top+1,s=e.$btnPane,l=s.outerHeight()-2;r-i>0&&r-i-e.height<0?(e.isFixed||(e.isFixed=!0,s.css({position:"fixed",top:0,left:n?"0":"auto",zIndex:7}),a([e.$ta,e.$ed]).css({marginTop:s.height()})),s.css({width:n?"100%":o.width()-1+"px"}),a("."+e.o.prefix+"fixed-top",o).css({position:n?"fixed":"absolute",top:n?l:l+(r-i)+"px",zIndex:15})):e.isFixed&&(e.isFixed=!1,s.removeAttr("style"),a([e.$ta,e.$ed]).css({marginTop:0}),a("."+e.o.prefix+"fixed-top",o).css({position:"absolute",top:l}))}}))},setDisabled:function(e){var t=this,n=t.o.prefix;t.disabled=e,e?t.$ta.attr("disabled",!0):t.$ta.removeAttr("disabled"),t.$box.toggleClass(n+"disabled",e),t.$ed.attr("contenteditable",!e)},destroy:function(){var e=this,n=e.o.prefix;e.isTextarea?e.$box.after(e.$ta.css({height:""}).val(e.html()).removeClass(n+"textarea").show()):e.$box.after(e.$ed.css({height:""}).removeClass(n+"editor").removeAttr("contenteditable").removeAttr("dir").html(e.html()).show()),e.$ed.off("dblclick","img"),e.destroyPlugins(),e.$box.remove(),e.$c.removeData("trumbowyg"),a("body").removeClass(n+"body-fullscreen"),e.$c.trigger("tbwclose"),a(t).off("scroll."+e.eventNamespace+" resize."+e.eventNamespace)},empty:function(){this.$ta.val(""),this.syncCode(!0)},toggle:function(){var e=this,t=e.o.prefix;e.o.autogrowOnEnter&&(e.autogrowOnEnterDontClose=!e.$box.hasClass(t+"editor-hidden")),e.semanticCode(!1,!0),setTimeout(function(){e.doc.activeElement.blur(),e.$box.toggleClass(t+"editor-hidden "+t+"editor-visible"),e.$btnPane.toggleClass(t+"disable"),a("."+t+"viewHTML-button",e.$btnPane).toggleClass(t+"active"),e.$box.hasClass(t+"editor-visible")?e.$ta.attr("tabindex",-1):e.$ta.removeAttr("tabindex"),e.o.autogrowOnEnter&&!e.autogrowOnEnterDontClose&&e.autogrowEditorOnEnter()},0)},dropdown:function(e){var n=this,o=n.doc,r=n.o.prefix,i=a("[data-"+r+"dropdown="+e+"]",n.$box),s=a("."+r+e+"-button",n.$btnPane),l=i.is(":hidden");if(a("body",o).trigger("mousedown"),l){var d=s.offset().left;s.addClass(r+"active"),i.css({position:"absolute",top:s.offset().top-n.$btnPane.offset().top+s.outerHeight(),left:n.o.fixedFullWidth&&n.isFixed?d+"px":d-n.$btnPane.offset().left+"px"}).show(),a(t).trigger("scroll"),a("body",o).on("mousedown."+n.eventNamespace,function(e){i.is(e.target)||(a("."+r+"dropdown",n.$box).hide(),a("."+r+"active",n.$btnPane).removeClass(r+"active"),a("body",o).off("mousedown."+n.eventNamespace))})}},html:function(e){var t=this;return null!=e?(t.$ta.val(e),t.syncCode(!0),t.$c.trigger("tbwchange"),t):t.$ta.val()},syncTextarea:function(){var e=this;e.$ta.val(e.$ed.text().trim().length>0||e.$ed.find(e.o.tagsToKeep.join(",")).length>0?e.$ed.html():"")},syncCode:function(e){var t=this;if(!e&&t.$ed.is(":visible"))t.syncTextarea();else{var n=a("<div>").html(t.$ta.val()),o=a("<div>").append(n);a(t.o.tagsToRemove.join(","),o).remove(),t.$ed.html(o.contents().html())}if(t.o.autogrow&&(t.height=t.$ed.height(),t.height!==t.$ta.css("height")&&(t.$ta.css({height:t.height}),t.$c.trigger("tbwresize"))),t.o.autogrowOnEnter){t.$ed.height("auto");var r=t.autogrowOnEnterWasFocused?t.$ed[0].scrollHeight:t.$ed.css("min-height");r!==t.$ta.css("height")&&(t.$ed.css({height:r}),t.$c.trigger("tbwresize"))}},semanticCode:function(e,t,n){var o=this;if(o.saveRange(),o.syncCode(e),o.o.semantic){if(o.semanticTag("b"),o.semanticTag("i"),o.semanticTag("s"),o.semanticTag("strike"),t){var r=o.o.inlineElementsSelector,i=":not("+r+")";o.$ed.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim().length>0}).wrap("<span data-tbw/>");var s=function(e){if(0!==e.length){var t=e.nextUntil(i).addBack().wrapAll("<p/>").parent(),n=t.nextAll(r).first();t.next("br").remove(),s(n)}};s(o.$ed.children(r).first()),o.semanticTag("div",!0),o.$ed.find("p").filter(function(){return(!o.range||this!==o.range.startContainer)&&(0===a(this).text().trim().length&&0===a(this).children().not("br,span").length)}).contents().unwrap(),a("[data-tbw]",o.$ed).contents().unwrap(),o.$ed.find("p:empty").remove()}n||o.restoreRange(),o.syncTextarea()}},semanticTag:function(e,t){var n;if(null!=this.o.semantic&&"object"==typeof this.o.semantic&&this.o.semantic.hasOwnProperty(e))n=this.o.semantic[e];else{if(this.o.semantic!==!0||!this.DEFAULT_SEMANTIC_MAP.hasOwnProperty(e))return;n=this.DEFAULT_SEMANTIC_MAP[e]}a(e,this.$ed).each(function(){var e=a(this);return 0!==e.contents().length&&(e.wrap("<"+n+"/>"),t&&a.each(e.prop("attributes"),function(){e.parent().attr(this.name,this.value)}),void e.contents().unwrap())})},createLink:function(){for(var e,t,n,o=this,r=o.doc.getSelection(),i=r.focusNode,s=(new XMLSerializer).serializeToString(r.getRangeAt(0).cloneContents());["A","DIV"].indexOf(i.nodeName)<0;)i=i.parentNode;if(i&&"A"===i.nodeName){var l=a(i);s=l.text(),e=l.attr("href"),o.o.minimalLinks||(t=l.attr("title"),n=l.attr("target"));var d=o.doc.createRange();d.selectNode(i),r.removeAllRanges(),r.addRange(d)}o.saveRange();var c={url:{label:"URL",required:!0,value:e},text:{label:o.lang.text,value:s}};o.o.minimalLinks||Object.assign(c,{title:{label:o.lang.title,value:t},target:{label:o.lang.target,value:n}}),o.openModalInsert(o.lang.createLink,c,function(e){var t=o.prependUrlPrefix(e.url);if(!t.length)return!1;var n=a(['<a href="',t,'">',e.text||e.url,"</a>"].join(""));return o.o.minimalLinks||(e.title.length>0&&n.attr("title",e.title),e.target.length>0&&n.attr("target",e.target)),o.range.deleteContents(),o.range.insertNode(n[0]),o.syncCode(),o.$c.trigger("tbwchange"),!0})},prependUrlPrefix:function(e){var t=this;if(!t.urlPrefix)return e;var n=/^([a-z][-+.a-z0-9]*:|\/|#)/i;if(n.test(e))return e;var a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return a.test(e)?"mailto:"+e:t.urlPrefix+e},unlink:function(){var e=this,t=e.doc.getSelection(),n=t.focusNode;if(t.isCollapsed){for(;["A","DIV"].indexOf(n.nodeName)<0;)n=n.parentNode;if(n&&"A"===n.nodeName){var a=e.doc.createRange();a.selectNode(n),t.removeAllRanges(),t.addRange(a)}}e.execCmd("unlink",void 0,void 0,!0)},insertImage:function(){var e=this;e.saveRange();var t={url:{label:"URL",required:!0},alt:{label:e.lang.description,value:e.getRangeText()}};e.o.imageWidthModalEdit&&(t.width={}),e.openModalInsert(e.lang.insertImage,t,function(t){e.execCmd("insertImage",t.url,!1,!0);var n=a('img[src="'+t.url+'"]:not([alt])',e.$box);return n.attr("alt",t.alt),e.o.imageWidthModalEdit&&n.attr({width:t.width}),e.syncCode(),e.$c.trigger("tbwchange"),!0})},fullscreen:function(){var e,n=this,o=n.o.prefix,r=o+"fullscreen";n.$box.toggleClass(r),e=n.$box.hasClass(r),a("body").toggleClass(o+"body-fullscreen",e),a(t).trigger("scroll"),n.$c.trigger("tbw"+(e?"open":"close")+"fullscreen")},execCmd:function(e,t,n,a){var o=this;a=!!a||"","dropdown"!==e&&o.$ed.focus();try{o.doc.execCommand("styleWithCSS",!1,n||!1)}catch(r){}try{o[e+a](t)}catch(r){try{e(t)}catch(i){"insertHorizontalRule"===e?t=void 0:"formatBlock"===e&&o.isIE&&(t="<"+t+">"),o.doc.execCommand(e,!1,t),o.syncCode(),o.semanticCode(!1,!0)}"dropdown"!==e&&(o.updateButtonPaneStatus(),o.$c.trigger("tbwchange"))}},openModal:function(e,n){var i=this,s=i.o.prefix;if(a("."+s+"modal-box",i.$box).length>0)return!1;i.o.autogrowOnEnter&&(i.autogrowOnEnterDontClose=!0),i.saveRange(),i.showOverlay(),i.$btnPane.addClass(s+"disable");var l=a("<div/>",{"class":s+"modal "+s+"fixed-top"}).css({top:i.$box.offset().top+i.$btnPane.height(),zIndex:99999}).appendTo(a(i.doc.body));i.$overlay.one("click",function(){return l.trigger(r),!1});var d=a("<form/>",{action:"",html:n}).on("submit",function(){return l.trigger(o),!1}).on("reset",function(){return l.trigger(r),!1}).on("submit reset",function(){i.o.autogrowOnEnter&&(i.autogrowOnEnterDontClose=!1)}),c=a("<div/>",{"class":s+"modal-box",html:d}).css({top:"-"+i.$btnPane.outerHeight()+"px",opacity:0}).appendTo(l).animate({top:0,opacity:1},100);return a("<span/>",{text:e,"class":s+"modal-title"}).prependTo(c),l.height(c.outerHeight()+10),a("input:first",c).focus(),i.buildModalBtn("submit",c),i.buildModalBtn("reset",c),a(t).trigger("scroll"),l},buildModalBtn:function(e,t){var n=this,o=n.o.prefix;return a("<button/>",{"class":o+"modal-button "+o+"modal-"+e,type:e,text:n.lang[e]||e}).appendTo(a("form",t))},closeModal:function(){var e=this,t=e.o.prefix;e.$btnPane.removeClass(t+"disable"),e.$overlay.off();var o=a("."+t+"modal-box",a(n.body));o.animate({top:"-"+o.height()},100,function(){o.parent().remove(),e.hideOverlay()}),e.restoreRange()},openModalInsert:function(e,t,n){var i=this,s=i.o.prefix,l=i.lang,d="";return a.each(t,function(e,t){var n=t.label||e,a=t.name||e,o=t.attributes||{},r=Object.keys(o).map(function(e){return e+'="'+o[e]+'"'}).join(" ");d+='<label><input type="'+(t.type||"text")+'" name="'+a+'"'+("checkbox"===t.type&&t.value?' checked="checked"':' value="'+(t.value||"").replace(/"/g,"&quot;"))+'"'+r+'><span class="'+s+'input-infos"><span>'+(l[n]?l[n]:n)+"</span></span></label>"}),i.openModal(e,d).on(o,function(){var e=a("form",a(this)),r=!0,s={};a.each(t,function(t,n){var o=n.name||t,l=a('input[name="'+o+'"]',e),d=l.attr("type");switch(d.toLowerCase()){case"checkbox":s[o]=l.is(":checked");break;case"radio":s[o]=l.filter(":checked").val();break;default:s[o]=a.trim(l.val())}n.required&&""===s[o]?(r=!1,i.addErrorOnModalField(l,i.lang.required)):n.pattern&&!n.pattern.test(s[o])&&(r=!1,i.addErrorOnModalField(l,n.patternError))}),r&&(i.restoreRange(),n(s,t)&&(i.syncCode(),i.$c.trigger("tbwchange"),i.closeModal(),a(this).off(o)))}).one(r,function(){a(this).off(o),i.closeModal()})},addErrorOnModalField:function(e,t){var n=this.o.prefix,o=e.parent();e.on("change keyup",function(){o.removeClass(n+"input-error")}),o.addClass(n+"input-error").find("input+span").append(a("<span/>",{"class":n+"msg-error",text:t}))},getDefaultImgDblClickHandler:function(){var e=this;return function(){var t=a(this),n=t.attr("src"),o="(Base64)";0===n.indexOf("data:image")&&(n=o);var r={url:{label:"URL",value:n,required:!0},alt:{label:e.lang.description,value:t.attr("alt")}};return e.o.imageWidthModalEdit&&(r.width={value:t.attr("width")?t.attr("width"):""}),e.openModalInsert(e.lang.insertImage,r,function(n){return n.url!==o&&t.attr({src:n.url}),t.attr({alt:n.alt}),e.o.imageWidthModalEdit&&(parseInt(n.width)>0?t.attr({width:n.width}):t.removeAttr("width")),!0}),!1}},saveRange:function(){var e=this,t=e.doc.getSelection();if(e.range=null,t.rangeCount){var n,a=e.range=t.getRangeAt(0),o=e.doc.createRange();o.selectNodeContents(e.$ed[0]),o.setEnd(a.startContainer,a.startOffset),n=(o+"").length,e.metaRange={start:n,end:n+(a+"").length}}},restoreRange:function(){var e,t=this,n=t.metaRange,a=t.range,o=t.doc.getSelection();if(a){if(n&&n.start!==n.end){var r,i=0,s=[t.$ed[0]],l=!1,d=!1;for(e=t.doc.createRange();!d&&(r=s.pop());)if(3===r.nodeType){var c=i+r.length;!l&&n.start>=i&&n.start<=c&&(e.setStart(r,n.start-i),l=!0),l&&n.end>=i&&n.end<=c&&(e.setEnd(r,n.end-i),d=!0),i=c}else for(var u=r.childNodes,g=u.length;g>0;)g-=1,s.push(u[g])}o.removeAllRanges(),o.addRange(e||a)}},getRangeText:function(){return this.range+""},updateButtonPaneStatus:function(){var e=this,t=e.o.prefix,n=e.getTagsRecursive(e.doc.getSelection().focusNode),o=t+"active-button "+t+"active";a("."+t+"active-button",e.$btnPane).removeClass(o),a.each(n,function(n,r){var i=e.tagToButton[r.toLowerCase()],s=a("."+t+i+"-button",e.$btnPane);if(s.length>0)s.addClass(o);else try{s=a("."+t+"dropdown ."+t+i+"-dropdown-button",e.$box);var l=s.parent().data("dropdown");a("."+t+l+"-button",e.$box).addClass(o)}catch(d){}})},getTagsRecursive:function(e,t){var n=this;if(t=t||(e&&e.tagName?[e.tagName]:[]),!e||!e.parentNode)return t;e=e.parentNode;var o=e.tagName;return"DIV"===o?t:("P"===o&&""!==e.style.textAlign&&t.push(e.style.textAlign),a.each(n.tagHandlers,function(a,o){t=t.concat(o(e,n))}),t.push(o),n.getTagsRecursive(e,t).filter(function(e){return null!=e}))},initPlugins:function(){var e=this;e.loadedPlugins=[],a.each(a.trumbowyg.plugins,function(t,n){n.shouldInit&&!n.shouldInit(e)||(n.init(e),n.tagHandler&&e.tagHandlers.push(n.tagHandler),e.loadedPlugins.push(n))})},destroyPlugins:function(){a.each(this.loadedPlugins,function(e,t){t.destroy&&t.destroy()})}}}(navigator,window,document,jQuery);

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "textarea",
      { ref: "editor", attrs: { name: _vm.name, cols: "30", rows: "10" } },
      [_vm._v(_vm._s(_vm.content))]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14c6abc7", module.exports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(307)
}
var normalizeComponent = __webpack_require__(74)
/* script */
var __vue_script__ = __webpack_require__(310)
/* template */
var __vue_template__ = __webpack_require__(312)
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
Component.options.__file = "resources/js/components/FormComponents/editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14c6abc7", Component.options)
  } else {
    hotAPI.reload("data-v-14c6abc7", Component.options)
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