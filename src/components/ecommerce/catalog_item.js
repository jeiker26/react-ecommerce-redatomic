import React, { PropTypes } from 'react';

const CatalogItem = ({ product, onAddToCart }) => {
    const handleAddToCart = (e) => onAddToCart(product);

    return (
        <div className="product row">
            <div className="product-summary col three-fourths">
                <h2 className="product-title">{ product.name }</h2>
                <div className="product-details">
                    <div className="product-image col one-fourth">
                        <img src="http://placehold.it/64x64" height="64" width="64" alt=""/>
                    </div>
                    <div className="product-summary col three-fourths">
                        <p>{ product.description }</p>
                    </div>
                </div>
            </div>
            <div className="product-add-to-cart col one-fourth">
                <div className="product-price">{ product.price } €</div>
                <div className="add-to-cart">
                    <a className="button" onClick={ handleAddToCart }>Add to cart</a>
                </div>
            </div>
        </div>
    )
};

CatalogItem.propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func
}

export default CatalogItem;