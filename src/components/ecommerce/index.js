import React, { Component, PropTypes } from 'react';
import { products as catalogProducts } from  '../../data/catalog';
import Catalog from './catalog';
import Cart from './cart';

class Ecommerce extends Component {
    constructor() {
        super();
        this.state = {
            page: 'catalog',
            products: catalogProducts,
            cart: [],
        }
        this.handleNavigate = this.handleNavigate.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    }

    handleAddToCart(product) {
        let cartItems = this.state.cart;
        let existingProduct = cartItems.find(p => p.id === product.id);
        if(existingProduct) {
            cartItems = cartItems.map(p => {
                if(p.id == product.id) {
                    p.qty = p.qty + 1;
                }
                return p;
            })
        }else {
            const newProduct = Object.assign({}, product, { qty: 1 });
            cartItems = cartItems.concat([newProduct]);
        }

        this.setState({
            cart: cartItems,
            page: 'cart'
        })
    }

    handleChangeQuantity(product, qty) {
        const cartItems = this.state.products.map(p => {
            if(p.id === product.id) {
                p.qty = qty;
            }
            return p;
        })
            .filter(p => p.qty > 0);

        this.setState({
            cart: cartItems
        })
    }

    handleNavigate(newPage) {
        this.setState({
            page: newPage
        })
    }


    getComponent(page) {
        switch(page){
            case 'catalog':
                return <Catalog
                    products={ this.state.products }
                    onAddToCart={ this.handleAddToCart } />
            case 'cart':
                return <Cart
                    products={ this.state.cart }
                    onChangeQuantity={ this.handleChangeQuantity }
                    onNavigate={ this.handleNavigate } />

            default:
                return null;
        }
    }

    render() {
        const component = this.getComponent(this.state.page);
        return (
            <div className="shopping-cart">
                <h1>Ecommerce</h1>
                { component }
            </div>
        )
    }
}

export default Ecommerce;

