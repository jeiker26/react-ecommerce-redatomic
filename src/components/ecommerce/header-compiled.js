"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var text = _ref.text;
    return _react2.default.createElement(
        "div",
        { className: "shop-header" },
        _react2.default.createElement(
            "h2",
            null,
            text
        )
    );
};

exports.default = Header;

//# sourceMappingURL=header-compiled.js.map