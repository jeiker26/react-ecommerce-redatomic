"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartItem = function (_Component) {
    _inherits(CartItem, _Component);

    function CartItem(props) {
        _classCallCheck(this, CartItem);

        var _this = _possibleConstructorReturn(this, (CartItem.__proto__ || Object.getPrototypeOf(CartItem)).call(this, props));

        _this.handleIncQty = _this.handleIncQty.bind(_this);
        _this.handleDecQty = _this.handleDecQty.bind(_this);
        _this.handleRemQty = _this.handleRemQty.bind(_this);
        return _this;
    }

    _createClass(CartItem, [{
        key: "handleIncQty",
        value: function handleIncQty(e) {
            e.preventDefault();
            this.props.onChangeQuantity(this.props.product, this.props.product.qty + 1);
        }
    }, {
        key: "handleDecQty",
        value: function handleDecQty(e) {
            e.preventDefault();
            this.props.onChangeQuantity(this.props.product, this.props.product.qty - 1);
        }
    }, {
        key: "handleRemQty",
        value: function handleRemQty(e) {
            e.preventDefault();
            this.props.onChangeQuantity(this.props.product, 0);
        }
    }, {
        key: "render",
        value: function render() {
            var _props$product = this.props.product,
                id = _props$product.id,
                name = _props$product.name,
                qty = _props$product.qty,
                description = _props$product.description,
                price = _props$product.price;

            var subtotal = (price * qty).toFixed(2);
            return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    { className: "qty" },
                    qty
                ),
                _react2.default.createElement(
                    "td",
                    { className: "description" },
                    _react2.default.createElement(
                        "h3",
                        null,
                        name
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        description
                    )
                ),
                _react2.default.createElement(
                    "td",
                    { className: "unit-price" },
                    price,
                    " \u20AC"
                ),
                _react2.default.createElement(
                    "td",
                    { className: "subtotal" },
                    subtotal,
                    " \u20AC"
                ),
                _react2.default.createElement(
                    "td",
                    { className: "actions" },
                    _react2.default.createElement(
                        "a",
                        { className: "button", onClick: this.handleIncQty },
                        "+ 1"
                    ),
                    _react2.default.createElement(
                        "a",
                        { className: "button", onClick: this.handleDecQty },
                        "- 1"
                    ),
                    _react2.default.createElement(
                        "a",
                        { className: "button", onClick: this.handleRemQty },
                        "Borrar"
                    )
                )
            );
        }
    }]);

    return CartItem;
}(_react.Component);

CartItem.propTypes = {
    product: _react.PropTypes.shape({
        id: _react.PropTypes.number.isRequired,
        name: _react.PropTypes.string.isRequired,
        description: _react.PropTypes.string.isRequired,
        qty: _react.PropTypes.number.isRequired
    }),
    onChangeQuantity: _react.PropTypes.func
};

exports.default = CartItem;

//# sourceMappingURL=cart_item-compiled.js.map