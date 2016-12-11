'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _cart_item = require('./cart_item');

var _cart_item2 = _interopRequireDefault(_cart_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_Component) {
    _inherits(Cart, _Component);

    function Cart(props) {
        _classCallCheck(this, Cart);

        var _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));

        _this.handleBack = _this.handleBack.bind(_this);
        _this.handleCheckout = _this.handleCheckout.bind(_this);
        return _this;
    }

    _createClass(Cart, [{
        key: 'handleBack',
        value: function handleBack(e) {
            this.props.onNavigate('catalog');
        }
    }, {
        key: 'handleCheckout',
        value: function handleCheckout(e) {
            this.props.onNavigate('checkout');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var cartItems = this.props.products.map(function (p) {
                return _react2.default.createElement(_cart_item2.default, { key: p.id, product: p, onChangeQuantity: _this2.props.onChangeQuantity });
            });

            var total = this.props.products.reduce(function (acc, p) {
                return acc + p.price * p.qty;
            }, 0).toFixed(2);

            return _react2.default.createElement(
                'div',
                { className: 'cart' },
                _react2.default.createElement(_header2.default, { text: 'Carrito' }),
                _react2.default.createElement(
                    'div',
                    { className: 'cart-contents' },
                    _react2.default.createElement(
                        'table',
                        { cellSpacing: '0' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'th',
                                { className: 'qty' },
                                'Cantidad'
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'description' },
                                'Producto'
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'unit-price' },
                                'Precio'
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'subtotal' },
                                'Total'
                            ),
                            _react2.default.createElement('th', { className: 'actions' })
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            cartItems,
                            _react2.default.createElement(
                                'tr',
                                { className: 'summary' },
                                _react2.default.createElement(
                                    'td',
                                    { className: 'total', colSpan: '4' },
                                    total,
                                    ' \u20AC'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'footer' },
                    _react2.default.createElement(
                        'a',
                        { className: 'button', onClick: this.handleBack },
                        'Seguir comprando'
                    ),
                    this.props.products.length ? _react2.default.createElement(
                        'a',
                        { className: 'button', onClick: this.handleCheckout },
                        'Terminar compra'
                    ) : null
                )
            );
        }
    }]);

    return Cart;
}(_react.Component);

Cart.propTypes = {
    products: _react.PropTypes.arrayOf(_react.PropTypes.object),
    onNavigate: _react.PropTypes.func,
    onChangeQuantity: _react.PropTypes.func
};

exports.default = Cart;

//# sourceMappingURL=cart-compiled.js.map