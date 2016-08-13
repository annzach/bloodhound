webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactRouter = __webpack_require__(175);

	var _Title = __webpack_require__(238);

	var _Title2 = _interopRequireDefault(_Title);

	var _Registration = __webpack_require__(382);

	var _Registration2 = _interopRequireDefault(_Registration);

	var _Home = __webpack_require__(383);

	var _Home2 = _interopRequireDefault(_Home);

	var _SearchDonors = __webpack_require__(384);

	var _SearchDonors2 = _interopRequireDefault(_SearchDonors);

	__webpack_require__(385);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _Title2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: 'registration', component: _Registration2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'searchdonors', component: _SearchDonors2.default })
	  )
	), document.getElementById('root'));

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(240);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(245);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(1);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(246);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _homeReenaBackupBloodhoundNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/home/reena/backup/bloodhound/src/components/SearchDonors.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _homeReenaBackupBloodhoundNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/home/reena/backup/bloodhound/src/components/SearchDonors.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeReenaBackupBloodhoundNode_modulesReactTransformHmrLibIndexJs2(_homeReenaBackupBloodhoundNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var SearchDonors = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'SearchDonors',

	  // componentDidMount : function(){
	  //   console.log(this.props);
	  // },
	  render: function render() {
	    console.log('in donors page');
	    return _react3.default.createElement(
	      'div',
	      { className: 'dropdown' },
	      _react3.default.createElement(
	        'button',
	        { className: 'dropbtn' },
	        'Dropdown'
	      ),
	      _react3.default.createElement(
	        'div',
	        { className: 'dropdown-content' },
	        _react3.default.createElement(
	          'div',
	          null,
	          _react3.default.createElement(
	            'button',
	            null,
	            'O+'
	          ),
	          _react3.default.createElement(
	            'button',
	            null,
	            'O-'
	          ),
	          _react3.default.createElement(
	            'button',
	            null,
	            'A+'
	          ),
	          _react3.default.createElement(
	            'button',
	            null,
	            'A-'
	          ),
	          _react3.default.createElement(
	            'button',
	            null,
	            'B+'
	          ),
	          _react3.default.createElement(
	            'button',
	            null,
	            'B-'
	          ),
	          _react3.default.createElement(
	            'button',
	            null,
	            'AB+'
	          ),
	          _react3.default.createElement(
	            'button',
	            null,
	            'AB-'
	          )
	        )
	      )
	    );
	  }
	}));

	exports.default = SearchDonors;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239)(module)))

/***/ }

})