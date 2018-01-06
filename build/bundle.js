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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return { data: [{ name: 'YoProgrammer' }] };

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create app
var app = (0, _express2.default)();

// app config
// modules
app.set('port', process.env.PORT || 3000);
app.use(_express2.default.static('public'));

// routes
(0, _routes2.default)(app);

// app listen
app.listen(app.get('port'), function () {
  console.log('Server running at localhost:' + app.get('port'));
  console.log('Press CTRL-C to stop');
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = __webpack_require__(9);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(18);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = function router(app) {
  app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);
    res.send((0, _renderer2.default)(req, store));
  });
};

exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(_routes2.default, null)
    )
  ));

  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>Rexpress</title>\n        <link rel=icon type=image/png href=/statics/img/favicon.png>\n        <link rel="stylesheet" href="/styles.css">\n    </head>\n    <body>\n        <div id="root">' + content + '</div>\n        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>\n        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>\n        <script src="bundle.js"></script>\n    </body>\n    </html>\n  ';
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(13);

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(14);

var _Login2 = _interopRequireDefault(_Login);

var _About = __webpack_require__(15);

var _About2 = _interopRequireDefault(_About);

var _Service = __webpack_require__(16);

var _Service2 = _interopRequireDefault(_Service);

var _Contact = __webpack_require__(17);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default, exact: true }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/service', component: _Service2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _Contact2.default })
  );
};

exports.default = Router;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'nav',
      { className: 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/', className: 'navbar-brand' },
          'Rexpress'
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'navbar-toggler',
            type: 'button',
            'data-toggle': 'collapse',
            'data-target': '#navbarResponsive',
            'aria-controls': 'navbarResponsive',
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation'
          },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'navbarResponsive' },
          _react2.default.createElement(
            'div',
            { className: 'd-lg-flex justify-content-between w-100' },
            _react2.default.createElement(
              'ul',
              { className: 'navbar-nav' },
              _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  {
                    className: 'nav-link',
                    activeclassname: 'active',
                    to: '/',
                    exact: true
                  },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  {
                    className: 'nav-link',
                    activeclassname: 'active',
                    to: '/about'
                  },
                  'About'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  {
                    className: 'nav-link',
                    activeclassname: 'active',
                    to: '/service'
                  },
                  'Services'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  {
                    className: 'nav-link',
                    activeclassname: 'active',
                    to: '/contact'
                  },
                  'Contact'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'btn btn-primary', to: '/login' },
                _react2.default.createElement('i', { className: 'fa fa-sign-in', 'aria-hidden': 'true' }),
                ' Login'
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'store:',
        ' ',
        this.props.users.map(function (user, i) {
          return _react2.default.createElement(
            'span',
            { key: i },
            user.name
          );
        }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-8' },
              _react2.default.createElement(
                'h1',
                { className: 'my-4' },
                'Page Heading',
                _react2.default.createElement(
                  'small',
                  null,
                  'Secondary Text'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'card mb-4' },
                _react2.default.createElement('img', {
                  className: 'card-img-top',
                  src: 'http://placehold.it/750x300',
                  alt: 'Card image cap'
                }),
                _react2.default.createElement(
                  'div',
                  { className: 'card-body' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'card-title' },
                    'Post Title'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'card-text' },
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!'
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn btn-primary' },
                    'Read More \u2192'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'card-footer text-muted' },
                  'Posted on January 1, 2017 by',
                  _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Start Bootstrap'
                  )
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'pagination justify-content-center mb-4' },
                _react2.default.createElement(
                  'li',
                  { className: 'page-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'page-link', href: '#' },
                    '\u2190 Older'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'page-item disabled' },
                  _react2.default.createElement(
                    'a',
                    { className: 'page-link', href: '#' },
                    'Newer \u2192'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-4' },
              _react2.default.createElement(
                'div',
                { className: 'card my-4' },
                _react2.default.createElement(
                  'h5',
                  { className: 'card-header' },
                  'Search'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'card-body' },
                  _react2.default.createElement(
                    'div',
                    { className: 'input-group' },
                    _react2.default.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      placeholder: 'Search for...'
                    }),
                    _react2.default.createElement(
                      'span',
                      { className: 'input-group-btn' },
                      _react2.default.createElement(
                        'button',
                        { className: 'btn btn-secondary', type: 'button' },
                        'Go!'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'card my-4' },
                _react2.default.createElement(
                  'h5',
                  { className: 'card-header' },
                  'Categories'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'card-body' },
                  _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-lg-6' },
                      _react2.default.createElement(
                        'ul',
                        { className: 'list-unstyled mb-0' },
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'Web Design'
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'HTML'
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'Freebies'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-lg-6' },
                      _react2.default.createElement(
                        'ul',
                        { className: 'list-unstyled mb-0' },
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'JavaScript'
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'CSS'
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'Tutorials'
                          )
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'card my-4' },
                _react2.default.createElement(
                  'h5',
                  { className: 'card-header' },
                  'Sponser'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'card-body' },
                  'Banner'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          { className: 'py-5 bg-dark' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              { className: 'm-0 text-center text-white' },
              'Copyright \xA9 Your Website 2017'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var users = _ref.users;
  return { users: users };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(Home);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    "Login page"
  );
};

exports.default = Login;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'About Page'
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Service = function Service() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    "Service page"
  );
};

exports.default = Service;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    "Contact page"
  );
};

exports.default = Contact;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _reducers = __webpack_require__(19);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(21);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  return store;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _userReducer = __webpack_require__(20);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _userReducer2.default
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(3);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map