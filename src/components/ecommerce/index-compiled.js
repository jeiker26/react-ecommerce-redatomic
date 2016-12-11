'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _catalog = require('../../data/catalog');

var _catalog2 = require('./catalog');

var _catalog3 = _interopRequireDefault(_catalog2);

var _cart = require('./cart');

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ecommerce = function (_Component) {
    _inherits(Ecommerce, _Component);

    function Ecommerce() {
        _classCallCheck(this, Ecommerce);

        var _this = _possibleConstructorReturn(this, (Ecommerce.__proto__ || Object.getPrototypeOf(Ecommerce)).call(this));

        _this.state = {
            page: 'catalog',
            products: _catalog.products,
            cart: []
        };
        _this.handleNavigate = _this.handleNavigate.bind(_this);
        _this.handleAddToCart = _this.handleAddToCart.bind(_this);
        _this.handleChangeQuantity = _this.handleChangeQuantity.bind(_this);
        return _this;
    }

    _createClass(Ecommerce, [{
        key: 'handleAddToCart',
        value: function handleAddToCart(product) {
            var cartItems = this.state.cart;
            var existingProduct = cartItems.find(function (p) {
                return p.id === product.id;
            });
            if (existingProduct) {
                cartItems = cartItems.map(function (p) {
                    if (p.id == product.id) {
                        p.qty = p.qty + 1;
                    }
                    return p;
                });
            } else {
                var newProduct = Object.assign({}, product, { qty: 1 });
                cartItems = cartItems.concat([newProduct]);
            }

            this.setState({
                cart: cartItems,
                page: 'cart'
            });
        }
    }, {
        key: 'handleChangeQuantity',
        value: function handleChangeQuantity(product, qty) {
            var cartItems = this.state.products.map(function (p) {
                if (p.id === product.id) {
                    p.qty = qty;
                }
                return p;
            }).filter(function (p) {
                return p.qty > 0;
            });

            this.setState({
                cart: cartItems
            });
        }
    }, {
        key: 'handleNavigate',
        value: function handleNavigate(newPage) {
            this.setState({
                page: newPage
            });
        }
    }, {
        key: 'getComponent',
        value: function getComponent(page) {
            switch (page) {
                case 'catalog':
                    return _react2.default.createElement(_catalog3.default, {
                        products: this.state.products,
                        onAddToCart: this.handleAddToCart });
                case 'cart':
                    return _react2.default.createElement(_cart2.default, {
                        products: this.state.cart,
                        onChangeQuantity: this.handleChangeQuantity,
                        onNavigate: this.handleNavigate });

                default:
                    return null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var component = this.getComponent(this.state.page);
            return _react2.default.createElement(
                'div',
                { className: 'shopping-cart' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Ecommerce'
                ),
                component
            );
        }
    }]);

    return Ecommerce;
}(_react.Component);

exports.default = Ecommerce;

//# sourceMappingURL=index-compiled.js.map