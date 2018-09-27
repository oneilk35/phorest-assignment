import React from 'react';
import classes from './Cockpit.css';
const cockpit = () => (
    <div className={classes.Cockpit}>
        <h4 className={classes.Heading}>Welcome to the phorest client searcher!</h4>
        <div className={classes.Sentences}>
            <p>You can search for clients by their email address or phone number</p>
            <p>You can select a specific client from the returned list and create a voucher for them</p>
            <p>You can select the amount you want to the voucher to be worth and the expiry date and then save it to the database!</p>
        </div>
    </div>
)

export default cockpit;