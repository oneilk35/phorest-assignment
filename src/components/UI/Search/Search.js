import React from 'react';
import classes from './Search.css';
import Button from '../Button/Button';
import DropdownSelect from '../DropdownSelect/DropdownSelect';
import Input from '../Input/Input';
const search = (props) => {
    let ph = "Enter Client's ";
    props.queryParam === 'mobile' ? ph = ph  + props.queryParam + ' number' : ph = ph + props.queryParam + ' address';
    return (
        <div className={classes.Search}>
        <Input onChange={props.onQueryChange} value={props.value} 
            type="text" 
            placeholder={ph} />
        <DropdownSelect options={props.options} onChange={props.onQueryOptionChange}/>
        <Button disabled={props.value === ''} clicked={props.onSubmitSearch} btnType="Primary">Search</Button>
    </div>
    );
}

export default search;