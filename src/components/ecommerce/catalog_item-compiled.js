"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CatalogItem = function CatalogItem(_ref) {
    var product = _ref.product,
        onAddToCart = _ref.onAddToCart;

    var handleAddToCart = function handleAddToCart(e) {
        return onAddToCart(product);
    };

    return _react2.default.createElement(
        "div",
        { className: "product row" },
        _react2.default.createElement(
            "div",
            { className: "product-summary col three-fourths" },
            _react2.default.createElement(
                "h2",
                { className: "product-title" },
                product.name
            ),
            _react2.default.createElement(
                "div",
                { className: "product-details" },
                _react2.default.createElement(
                    "div",
                    { className: "product-image col one-fourth" },
                    _react2.default.createElement("img", { src: "http://placehold.it/64x64", height: "64", width: "64", alt: "" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "product-summary col three-fourths" },
                    _react2.default.createElement(
                        "p",
                        null,
                        product.description
                    )
                )
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "product-add-to-cart col one-fourth" },
            _react2.default.createElement(
                "div",
                { className: "product-price" },
                product.price,
                " \u20AC"
            ),
            _react2.default.createElement(
                "div",
                { className: "add-to-cart" },
                _react2.default.createElement(
                    "a",
                    { className: "button", onClick: handleAddToCart },
                    "Add to cart"
                )
            )
        )
    );
};

CatalogItem.propTypes = {
    product: _react.PropTypes.object,
    onAddToCart: _react.PropTypes.func
};

exports.default = CatalogItem;

//# sourceMappingURL=catalog_item-compiled.js.map