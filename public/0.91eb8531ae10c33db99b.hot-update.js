webpackHotUpdate(0,{

/***/ 382:
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
	  filename: '/home/reena/backup/bloodhound/src/components/Registration.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _homeReenaBackupBloodhoundNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/home/reena/backup/bloodhound/src/components/Registration.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeReenaBackupBloodhoundNode_modulesReactTransformHmrLibIndexJs2(_homeReenaBackupBloodhoundNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Registration = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'Registration',

	  getInitialState: function getInitialState() {
	    return {
	      person: [],
	      text: '123'
	    };
	  },
	  onInputChange: function onInputChange(event) {
	    this.setState({ text: event.target.value });
	    console.log("changing Text...", text);
	  },
	  /*  onSubmit: function(e) {
	      e.preventDefault();
	    },
	    addDonor: function(text){
	      let person = text.map(name => {
	        let newPerson = {};
	        newPerson.id = uuid();
	        newPerson.text = name;
	        return newPerson
	      })
	      this.setState({
	        person: this.state.persons.concat(person)
	      })
	    },*/
	  render: function render() {
	    console.log('Registration');
	    return _react3.default.createElement(
	      'div',
	      null,
	      _react3.default.createElement(
	        'li',
	        null,
	        _react3.default.createElement('input', { type: 'text', value: this.state.text, placeholder: 'First Name', onChange: this.onInputChange })
	      )
	    );
	  }
	}));

	exports.default = Registration;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239)(module)))

/***/ }

})