webpackHotUpdate(0,{

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

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
	  _component: {},
	  _component2: {}
	};

	var _homeReenaBackupBloodhoundNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/home/reena/backup/bloodhound/src/components/SearchDonors.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _homeReenaBackupBloodhoundNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/home/reena/backup/bloodhound/src/components/SearchDonors.js",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeReenaBackupBloodhoundNode_modulesReactTransformHmrLibIndexJs2(_homeReenaBackupBloodhoundNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var SearchDonors = _wrapComponent("_component")(_react3.default.createClass({
	  displayName: "SearchDonors",

	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },
	  clickedMe0: function clickedMe0(event) {
	    var _this = this;

	    var url = "/bloodhounds/" + btn0.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {
	      //console.log(data);
	      _this.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe1: function clickedMe1(event) {
	    console.log('Am clicked');
	    console.log(btn1.value);
	  },
	  clickedMe2: function clickedMe2(event) {
	    console.log('Am clicked');
	    console.log(btn2.value);
	  },
	  clickedMe3: function clickedMe3(event) {
	    console.log('Am clicked');
	    console.log(btn3.value);
	  },
	  clickedMe4: function clickedMe4(event) {
	    console.log('Am clicked');
	    console.log(btn4.value);
	  },
	  clickedMe5: function clickedMe5(event) {
	    console.log('Am clicked');
	    console.log(btn5.value);
	  },
	  clickedMe6: function clickedMe6(event) {
	    console.log('Am clicked');
	    console.log(btn6.value);
	  },
	  clickedMe7: function clickedMe7(event) {
	    console.log('Am clicked');
	    console.log(btn7.value);
	  },
	  render: function render() {
	    console.log('in donors page');
	    return _react3.default.createElement(
	      "div",
	      { className: "dropdown" },
	      _react3.default.createElement(
	        "button",
	        { className: "dropbtn" },
	        "Dropdown"
	      ),
	      _react3.default.createElement(
	        "div",
	        { className: "dropdown-content" },
	        _react3.default.createElement(
	          "div",
	          null,
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe0, id: "btn0", value: "O+" },
	            "O+"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe1, id: "btn1", value: "O-" },
	            "O-"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe2, id: "btn2", value: "A+" },
	            "A+"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe3, id: "btn3", value: "A-" },
	            "A-"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe4, id: "btn4", value: "B+" },
	            "B+"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe5, id: "btn5", value: "B-" },
	            "B-"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe6, id: "btn6", value: "AB+" },
	            "AB+"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe7, id: "btn7", value: "AB-" },
	            "AB-"
	          )
	        ),
	        _react3.default.createElement(DataDisplay, { display: this.state.data })
	      )
	    );
	  }
	}));

	var DataDisplay = _wrapComponent("_component2")(_react3.default.createClass({
	  displayName: "DataDisplay",

	  getInitialState: function getInitialState() {
	    return { data: this.props.display };
	  },
	  render: function render() {
	    return _react3.default.createElement(
	      "div",
	      null,
	      _react3.default.createElement(
	        "p",
	        null,
	        this.props.display.fname
	      )
	    );
	  }
	}));

	exports.default = SearchDonors;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239)(module)))

/***/ }

})