import React from 'react';

import CartItem from './CartItem';
import classes from './CartList.module.css';

const CartList = props => {

    return (
        <React.Fragment>
            <ul className={classes['cart-list']}>
                {
                    props.items.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            qty={item.qty}
                            imageUrl={item.imageUrl}
                        />
                    ))
                }
            </ul>
        </React.Fragment>
    )

};

export default CartList;