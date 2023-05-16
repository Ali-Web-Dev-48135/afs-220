import React from 'react';


import classes from './NotFound.module.css';
import Card from '../UIElement/Card';



const NotFound = props => {

    return(
        <Card className={classes.notFound}>
            <p>404 Page Not Found On www.Gamestop.com Domain.</p>
        </Card>
    )

};

export default NotFound;