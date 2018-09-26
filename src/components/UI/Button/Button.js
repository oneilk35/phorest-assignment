import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button 
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked} disabled={props.disabled}> <span className={classes.BtnText}>{props.children}</span> </button>
);

export default button;