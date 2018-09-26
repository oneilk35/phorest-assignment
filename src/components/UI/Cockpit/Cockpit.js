import React from 'react';
import classes from './Cockpit.css';
const cockpit = () => (
    <div className={classes.Cockpit}>
        <h3>Welcome to my react App!</h3>
        <p>You can:</p>
        <ol>
            <li>Search for clients</li>
            <li>Create vouchers for clients</li>
        </ol>
    </div>
)

export default cockpit;