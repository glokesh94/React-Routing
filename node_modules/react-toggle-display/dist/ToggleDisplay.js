(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', 'react', 'prop-types'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('react'), require('prop-types'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.React, global.propTypes);
		global.ToggleDisplay = mod.exports;
	}
})(this, function (exports, _react, _propTypes) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = ToggleDisplay;

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	ToggleDisplay.propTypes = {
		tag: _propTypes2.default.string,
		hide: _propTypes2.default.bool,
		show: _propTypes2.default.bool,
		if: _propTypes2.default.bool
	};

	ToggleDisplay.defaultProps = {
		tag: 'span'
	};

	var propsToRemove = Object.keys(ToggleDisplay.propTypes);

	function isDefined(val) {
		return val != null;
	}

	function shouldHide(props) {
		if (isDefined(props.show)) {
			return !props.show;
		} else if (isDefined(props.hide)) {
			return props.hide;
		}
		return false;
	}

	function pickProps(props) {
		var newProps = Object.assign({}, props);
		propsToRemove.forEach(function (prop) {
			if (prop in newProps) {
				delete newProps[prop];
			}
		});
		return newProps;
	}

	function ToggleDisplay(props) {
		if (props.if === false) {
			return null;
		}

		var style = {};
		if (shouldHide(props)) {
			style.display = 'none';
		}

		var Tag = props.tag;
		// prevent our props from being leaked down onto the children
		var newProps = pickProps(props);

		return _react2.default.createElement(Tag, _extends({ style: style }, newProps));
	}
});
