import React, { PropTypes } from 'react';

const ThanKYou = ({ orderDetails, onBackToShopping}) => (
    <div className="thank-you">
        <div className="shop-header">
            <h2>¡Gracias por tu compra { orderDetails.firstName }!</h2>
        </div>
        <p>Te llegará en breve a tu dirección { orderDetails.address }</p>
        <p>
            <button className="button" onClick={ onBackToShopping }>Volver a la tienda</button>
        </p>
    </div>
);

ThanKYou.propsTypes = {
    orderDetails: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    }),
    onBackToShopping: PropTypes.func.isRequired
}

export default ThanKYou;