import React, { Component } from 'react';
import classes from './CreateVoucher.css';
import Button from '../../components/UI/Button/Button';
import InfoRow from '../../components/UI/InfoRow/InfoRow';
import Input from '../../components/UI/Input/Input';
import axios from 'axios';
import DropdownSelect from '../../components/UI/DropdownSelect/DropdownSelect';
import Modal from '../../components/UI/Modal/Modal';
const access_token = "Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=";
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
axios.defaults.baseURL = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/';

class CreateVoucher extends Component{
    state = {
        voucherAmount: '',
        client: this.props.client,
        expiryDateOptions: ['1 month','3 months', '6 months', '9 months', '12 months'],
        expiryDate: '1 month',
        showErrorModal: false,
        errorReturned: null
    }

    onAmountChangeHandler = (event) => {
        const newVoucherAmount = event.target.value;
        this.setState({voucherAmount: newVoucherAmount});
    }

    createNewVoucherObject(){
        let date = new Date();
        const issueDate = date.toISOString(); 
        const numberOfMonths = +(this.state.expiryDate.split(' '))[0] + date.getMonth();
        date.setMonth(numberOfMonths);
        const expiryDate = date.toISOString();
        
        const newVoucherObject = {
            clientId: this.state.clientId,
            creatingBranchId: this.props.creatingBranchId,
            expiryDate: expiryDate,
            issueDate: issueDate,
            links: [
              {
                href: "string",
                rel: "string",
                templated: true
              }
            ],
            originalBalance: this.state.voucherAmount,
            remainingBalance: this.state.voucherAmount
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
            if(res.status === 201){
              this.props.showSuccessModal();
            }
          }).catch(err => {
            this.errorModalHandler(err);
          });
    }

    onExpiryDateChangeHandler = (event) => {
        this.setState({expiryDate: event.target.value});
    }

    errorModalHandler = (err) => {
        this.setState({showErrorModal: true, errorReturned: err.toString()});
    }

    initializeErrorModal = () => {
        let errorModal = null; 

        if(this.state.showErrorModal && this.state.errorReturned){
            let errorMessage = null;
            switch(this.state.errorReturned){
                case('Error: Request failed with status code 401'):
                    errorMessage = <p>This means the request did not have the proper Authorization.</p>;
                    break;
                case('Error: Request failed with status code 403'):
                    errorMessage = <p>This means the request was forbidden.</p>;
                    break;
                case('Error: Request failed with status code 404'):
                    errorMessage = <p>This means the given business id is not valid.</p>;
                    break;
                case('Error: Request failed with status code 412'):
                    errorMessage = <p>This means the voucher with the given serial number already exists.</p>;
                    break;
            }
            errorModal = (
                <Modal modalClosed={this.closeErrorModal} show={this.state.showErrorModal} >
                    <h3>
                        {this.state.errorReturned}
                    </h3>
                    <div>
                        {errorMessage}
                    </div>
                    <Button clicked={this.closeErrorModal} btnType="Secondary">Close</Button>
                </Modal>
            );
        }

        return errorModal;
    }

    closeErrorModal = () => {
        this.setState({showErrorModal: false, errorReturned: null});
    }

    render(){
        let errorModal = this.initializeErrorModal();
        let date = new Date();
        const issueDate = date.toDateString(); 
        return (
            <div>
                {errorModal}
                <h3 className={classes.Heading}>Voucher Details</h3>
                <div className={classes.Column}>
                    <InfoRow left="Issued to:" right={this.state.client.firstName + " " + this.state.client.lastName} /> 
                    <InfoRow left="Issue date:" right={issueDate} /> 
                    <div className={classes.Row}>
                        <p style={{'fontWeight': 'bold'}}>Valid  for: </p>
                        <DropdownSelect options={this.state.expiryDateOptions} value={this.state.expiryDate} onChange={(event) => this.onExpiryDateChangeHandler(event)}/> 
                    </div>
                    <div className={classes.Row}>
                        <p style={{'fontWeight': 'bold'}}>Amount: </p>
                        <Input type="number" value={this.state.voucherAmount} onChange={this.onAmountChangeHandler} placeholder="Enter Amount" /> 
                    </div>
                    <div className={classes.Controls}>
                        <Button clicked={this.props.cancel} btnType="Secondary">Cancel</Button>
                        <Button disabled={this.state.voucherAmount === ''} clicked={this.postNewVoucher} btnType="Primary">Create Voucher</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateVoucher;