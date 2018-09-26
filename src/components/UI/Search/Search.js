import React from 'react';
import classes from './Search.css';
import Button from '../Button/Button';
import DropdownSelect from '../DropdownSelect/DropdownSelect';
import Input from '../Input/Input';
const search = (props) => (
    <div className={classes.Search}>
        <Input onChange={props.onQueryChange} value={props.value} type="text" placeholder={"Enter Client's " + props.queryParam} />
        <DropdownSelect options={props.options} onChange={props.onQueryOptionChange}/>
        <Button clicked={props.onSubmitSearch} btnType="Primary">Search</Button>
    </div>
);

export default search;