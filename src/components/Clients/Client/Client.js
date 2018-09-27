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
            <div className={classes.Left}>
                <div  className={classes.Name}><p>{props.name}</p></div>
                <img className={classes.Image} alt="Customer Profile Pic" src={imageSrc}/>
            </div>
            <div className={classes.Right}>
                <div className={classes.ContactInfo}><img alt="Phone Icon" className={classes.Icon} src={phoneIconSrc}/> <p>{props.mobile}</p></div>
                <div className={classes.ContactInfo}><img alt="Email Icon" className={classes.Icon} src={emailIconSrc}/> <p>{props.email}</p></div>
                <div>
                    <Button clicked={props.createVoucher} btnType="Primary">Create Voucher</Button>
                </div>
            </div>
        </div>
    );
}

export default client;