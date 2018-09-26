import React from 'react';
import classes from './Client.css';
import Button from '../../UI/Button/Button';

const emailIconSrc="https://png.icons8.com/ios/2x/new-post-filled.png";
const phoneIconSrc="https://png.icons8.com/ios/2x/phone-filled.png";
const client = (props) => {
    let imageSrc = "https://fmcisite.files.wordpress.com/2016/02/blank-profile-picture-973460_6404.png";
    if(props.photoUrl){
        imageSrc = props.photoUrl;
    }
    return (
        <div className={classes.Client}>
            <div className={classes.Column}>
                <p className={classes.Name}>{props.name}</p>
                <img className={classes.Image} alt="Customer Profile Pic" src={imageSrc}/>
            </div>
            <div className={classes.Column}>
                <div className={classes.ContactInfo}><img alt="Phone Icon" className={classes.Icon} src={phoneIconSrc}/> <p>{props.mobile}</p></div>
                <div className={classes.ContactInfo}><img alt="Email Icon" className={classes.Icon} src={emailIconSrc}/> <p>{props.email}</p></div>
                <Button btnType="Primary">Create Voucher</Button>
            </div>
        </div>
    );
}

export default client;