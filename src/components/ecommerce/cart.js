import React, { Component, PropTypes } from 'react';
import Header from './header';
import CartItem from './cart_item';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    handleBack(e) {
        this.props.onNavigate('catalog');
    }

    handleCheckout(e) {
        this.props.onNavigate('checkout');
    }

    render() {
        const cartItems = this.props.products.map(p =>
            <CartItem key={ p.id } product={ p } onChangeQuantity={ this.props.onChangeQuantity }/>
        );

        const total = this.props.products.reduce((acc, p) => {
            return acc + (p.price * p.qty);
        }, 0).toFixed(2);

        return (
            <div className="cart">
                <Header text="Carrito" />
                <div className="cart-contents">
                    <table cellSpacing="0">
                        <thead>
                            <th className="qty">Cantidad</th>
                            <th className="description">Producto</th>
                            <th className="unit-price">Precio</th>
                            <th className="subtotal">Total</th>
                            <th className="actions"></th>
                        </thead>
                        <tbody>
                            { cartItems }
                            <tr className="summary">
                                <td className="total" colSpan="4">
                                    { total } &euro;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="footer">
                    <a className="button" onClick={ this.handleBack }>Seguir comprando</a>
                    { this.props.products.length ?
                        <a className="button" onClick={ this.handleCheckout }>Terminar compra</a>
                        :
                        null }
                </div>
            </div>
        )
    }
}

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    onNavigate: PropTypes.func,
    onChangeQuantity: PropTypes.func
};

export default Cart;