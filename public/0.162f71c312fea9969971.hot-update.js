webpackHotUpdate(0,{

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
	  clickedMe: function clickedMe(event) {
	    console.log('Am clicked');
	    console.log(btn1.value);
	  },
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
	            { onClick: this.clickedMe, id: 'btn0', value: '0+' },
	            'O+'
	          ),
	          _react3.default.createElement(
	            'button',
	            { onClick: this.clickedMe, id: 'btn1', value: 'O-' },
	            'O-'
	          ),
	          _react3.default.createElement(
	            'button',
	            { onClick: this.clickedMe, id: 'btn2' },
	            'A+'
	          ),
	          _react3.default.createElement(
	            'button',
	            { onClick: this.clickedMe, id: 'btn3' },
	            'A-'
	          ),
	          _react3.default.createElement(
	            'button',
	            { onClick: this.clickedMe, id: 'btn4' },
	            'B+'
	          ),
	          _react3.default.createElement(
	            'button',
	            { onClick: this.clickedMe, id: 'btn5' },
	            'B-'
	          ),
	          _react3.default.createElement(
	            'button',
	            { onClick: this.clickedMe, id: 'btn6' },
	            'AB+'
	          ),
	          _react3.default.createElement(
	            'button',
	            { onClick: this.clickedMe, id: 'btn7' },
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