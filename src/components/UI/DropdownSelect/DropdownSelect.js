import React from 'react';
import classes from './DropdownSelect.css';
const dropdownSelect = (props) => {
    let options = null;
    if(props.options){
        options = props.options.map(option => {
            return <option className={classes.Option} value={option} key={option}>{option}</option>
        });
    }
    return (
        <select className={classes.Select} onChange={props.onChange}>
            {options}
        </select>
    );
}

export default dropdownSelect;