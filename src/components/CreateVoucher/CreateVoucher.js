import React, { Component } from 'react';
import classes from './CreateVoucher.css';
import Button from '../UI/Button/Button';
import InfoRow from '../UI/InfoRow/InfoRow';
import Input from '../UI/Input/Input';
import axios from 'axios';

const access_token = "Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=";
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
axios.defaults.baseURL = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/';

class CreateVoucher extends Component{
    state = {
        voucherAmount: '',
        client: this.props.client
    }

    onAmountChangeHandler = (event) => {
        const newVoucherAmount = event.target.value;
        this.setState({voucherAmount: newVoucherAmount});
    }

    createNewVoucherObject(){
        let date = new Date();
        const issueDate = date.toISOString(); 
        date.setFullYear(date.getFullYear()+1);
        const expiryDate = date.toISOString();
        
        const newVoucherObject = {
            clientId: this.state.clientId,
            creatingBranchId: this.props.creatingBranchId,
            expiryDate: issueDate,
            issueDate: expiryDate,
            links: [
              {
                href: "string",
                rel: "string",
                templated: true
              }
            ],
            originalBalance: this.state.voucherAmount,
            remainingBalance: this.state.voucherAmount,
            voucherId: "ab-123"
        }
        return newVoucherObject;
    }

    postNewVoucher = () => {
        const newVoucherObject = this.createNewVoucherObject();
        axios.post(this.props.businessId + '/voucher',{},{
            url: this.props.businessId + '/voucher',
            auth: {
              username: this.props.username,
              password: this.props.password
            },
            headers: {
              'content-type': 'application/json'
            },
            data: newVoucherObject
          }).then(res => {
            console.log(res);
            if(res.status === 201){
              console.log("Successfully created!");
            }
            console.log(res.data);
          }).catch(err => {
            console.log(err);
          });
    }

    render(){
        let date = new Date();
        const issueDate = date.toDateString(); 
        date.setFullYear(date.getFullYear()+1);
        const expiryDate = date.toDateString();
        return (
            <div>
                <h3 className={classes.Heading}>Voucher Details</h3>
                <div className={classes.Column}>
                    <InfoRow left="Issued to:" right={this.state.client.firstName + " " + this.state.client.lastName} /> 
                    <InfoRow left="Issue date:" right={issueDate} /> 
                    <InfoRow left="Expiry Date:" right={expiryDate} /> 
                    <div className={classes.Row}>
                        <p style={{'fontWeight': 'bold'}}>Amount: </p>
                        <Input type="number" value={this.state.voucherAmount} onChange={this.onAmountChangeHandler} placeholder="Enter Amount" /> 
                    </div>
                    <div className={classes.Controls}>
                        <Button clicked={this.props.cancel} btnType="Secondary">Cancel</Button>
                        <Button clicked={this.postNewVoucher} btnType="Primary">Create Voucher</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateVoucher;