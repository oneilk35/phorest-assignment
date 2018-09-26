import React from 'react';
import classes from './InfoRow.css';

const infoRow = (props) => (
    <div className={classes.InfoRow}>
        <p className={classes.Left}>{props.left}</p>
        <p className={classes.Right}>{props.right}</p>
    </div>
); 

export default infoRow;