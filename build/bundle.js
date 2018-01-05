/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(4);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create app
// modules
var app = (0, _express2.default)();

// app config
app.set('port', process.env.PORT || 3000);
app.use(_express2.default.static('public'));

// routes
app.get('*', function (req, res) {
    res.send('\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <meta http-equiv="X-UA-Compatible" content="ie=edge">\n            <title>Rexpress</title>\n            <link rel="stylesheet" href="/styles.css">\n        </head>\n        <body>\n            <div id="root">' + (0, _server.renderToString)(_react2.default.createElement(_Home2.default, null)) + '</div>\n            <script src="bundle.js"></script>\n        </body>\n        </html>\n    ');
});

// app listen
app.listen(app.get('port'), function () {
    console.log('Server running at localhost:' + app.get('port'));
    console.log('Press CTRL-C to stop');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "nav",
      { className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "a",
          { className: "navbar-brand", href: "#" },
          "Start Bootstrap"
        ),
        _react2.default.createElement(
          "button",
          {
            className: "navbar-toggler",
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbarResponsive",
            "aria-controls": "navbarResponsive",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          },
          _react2.default.createElement("span", { className: "navbar-toggler-icon" })
        ),
        _react2.default.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbarResponsive" },
          _react2.default.createElement(
            "ul",
            { className: "navbar-nav ml-auto" },
            _react2.default.createElement(
              "li",
              { className: "nav-item active" },
              _react2.default.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "Home",
                _react2.default.createElement(
                  "span",
                  { className: "sr-only" },
                  "(current)"
                )
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item" },
              _react2.default.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "About"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item" },
              _react2.default.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "Services"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "nav-item" },
              _react2.default.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "Contact"
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-8" },
          _react2.default.createElement(
            "h1",
            { className: "my-4" },
            "Page Heading",
            _react2.default.createElement(
              "small",
              null,
              "Secondary Text"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "card mb-4" },
            _react2.default.createElement("img", {
              className: "card-img-top",
              src: "http://placehold.it/750x300",
              alt: "Card image cap"
            }),
            _react2.default.createElement(
              "div",
              { className: "card-body" },
              _react2.default.createElement(
                "h2",
                { className: "card-title" },
                "Post Title"
              ),
              _react2.default.createElement(
                "p",
                { className: "card-text" },
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
              ),
              _react2.default.createElement(
                "a",
                { href: "#", className: "btn btn-primary" },
                "Read More \u2192"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "card-footer text-muted" },
              "Posted on January 1, 2017 by",
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Start Bootstrap"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "card mb-4" },
            _react2.default.createElement("img", {
              className: "card-img-top",
              src: "http://placehold.it/750x300",
              alt: "Card image cap"
            }),
            _react2.default.createElement(
              "div",
              { className: "card-body" },
              _react2.default.createElement(
                "h2",
                { className: "card-title" },
                "Post Title"
              ),
              _react2.default.createElement(
                "p",
                { className: "card-text" },
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
              ),
              _react2.default.createElement(
                "a",
                { href: "#", className: "btn btn-primary" },
                "Read More \u2192"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "card-footer text-muted" },
              "Posted on January 1, 2017 by",
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Start Bootstrap"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "card mb-4" },
            _react2.default.createElement("img", {
              className: "card-img-top",
              src: "http://placehold.it/750x300",
              alt: "Card image cap"
            }),
            _react2.default.createElement(
              "div",
              { className: "card-body" },
              _react2.default.createElement(
                "h2",
                { className: "card-title" },
                "Post Title"
              ),
              _react2.default.createElement(
                "p",
                { className: "card-text" },
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
              ),
              _react2.default.createElement(
                "a",
                { href: "#", className: "btn btn-primary" },
                "Read More \u2192"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "card-footer text-muted" },
              "Posted on January 1, 2017 by",
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Start Bootstrap"
              )
            )
          ),
          _react2.default.createElement(
            "ul",
            { className: "pagination justify-content-center mb-4" },
            _react2.default.createElement(
              "li",
              { className: "page-item" },
              _react2.default.createElement(
                "a",
                { className: "page-link", href: "#" },
                "\u2190 Older"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "page-item disabled" },
              _react2.default.createElement(
                "a",
                { className: "page-link", href: "#" },
                "Newer \u2192"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-4" },
          _react2.default.createElement(
            "div",
            { className: "card my-4" },
            _react2.default.createElement(
              "h5",
              { className: "card-header" },
              "Search"
            ),
            _react2.default.createElement(
              "div",
              { className: "card-body" },
              _react2.default.createElement(
                "div",
                { className: "input-group" },
                _react2.default.createElement("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Search for..."
                }),
                _react2.default.createElement(
                  "span",
                  { className: "input-group-btn" },
                  _react2.default.createElement(
                    "button",
                    { className: "btn btn-secondary", type: "button" },
                    "Go!"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "card my-4" },
            _react2.default.createElement(
              "h5",
              { className: "card-header" },
              "Categories"
            ),
            _react2.default.createElement(
              "div",
              { className: "card-body" },
              _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                  "div",
                  { className: "col-lg-6" },
                  _react2.default.createElement(
                    "ul",
                    { className: "list-unstyled mb-0" },
                    _react2.default.createElement(
                      "li",
                      null,
                      _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Web Design"
                      )
                    ),
                    _react2.default.createElement(
                      "li",
                      null,
                      _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "HTML"
                      )
                    ),
                    _react2.default.createElement(
                      "li",
                      null,
                      _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Freebies"
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-lg-6" },
                  _react2.default.createElement(
                    "ul",
                    { className: "list-unstyled mb-0" },
                    _react2.default.createElement(
                      "li",
                      null,
                      _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "JavaScript"
                      )
                    ),
                    _react2.default.createElement(
                      "li",
                      null,
                      _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "CSS"
                      )
                    ),
                    _react2.default.createElement(
                      "li",
                      null,
                      _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Tutorials"
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "card my-4" },
            _react2.default.createElement(
              "h5",
              { className: "card-header" },
              "Side Widget"
            ),
            _react2.default.createElement(
              "div",
              { className: "card-body" },
              "You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "footer",
      { className: "py-5 bg-dark" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "p",
          { className: "m-0 text-center text-white" },
          "Copyright \xA9 Your Website 2017"
        )
      )
    )
  );
};

exports.default = Home;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map