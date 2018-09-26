import React from 'react';
import classes from './Input.css';
const input = (props) => {
    let classNames = [classes.Input]
    if(props.type === "number"){
        classNames.push(classes.Number);
    }
    return (
        <input 
        className={classNames.join(' ')} 
        type={props.type} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={props.onChange} />
    );
};

export default input;