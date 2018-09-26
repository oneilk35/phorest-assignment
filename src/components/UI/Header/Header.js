import React from 'react';
import classes from './Header.css';

const logoAddr = "https://aworthycause.net/assets2016/images/phorest-rebrand/Phorest-acorn-icon.gif";
const header = () => (
    <div className={classes.Header}>
        <img className={classes.Image} src={logoAddr} alt="Leaf" />
        <h2>phorest</h2>
    </div>
);

export default header;