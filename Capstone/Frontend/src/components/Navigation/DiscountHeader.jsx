import React from 'react';

import classes from './DiscountHeader.module.css';

const DiscountHeader = (props) => {

    return(
        <header className={classes['discount-header']}><span>10% Discount For The Holidays</span></header>
    );
};

export default DiscountHeader;