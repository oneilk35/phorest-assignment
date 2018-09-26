import React from 'react';
import classes from './Search.css';
import Button from '../Button/Button';
import DropdownSelect from '../DropdownSelect/DropdownSelect';
const search = (props) => (
    <div className={classes.Search}>
        <input className={classes.Input} onChange={props.onQueryChange} value={props.value} type="text" placeholder={"Search for a client by their " + props.queryParam} />
        <DropdownSelect options={props.options} onChange={props.onQueryOptionChange}/>
        <Button clicked={props.onSubmitSearch} btnType="Primary">Search</Button>
    </div>
);

export default search;