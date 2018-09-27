import React, {Component} from 'react';
import classes from './ClientSearch.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Clients from '../../components/Clients/Clients';
import Cockpit from '../../components/UI/Cockpit/Cockpit';
import Search from '../../components/UI/Search/Search';
import axios from 'axios';
import Modal from '../../components/UI/Modal/Modal';
import CreateVoucher from '../CreateVoucher/CreateVoucher';
import Button from '../../components/UI/Button/Button';

const access_token = "Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=";
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
axios.defaults.baseURL = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/';
class ClientSearch extends Component{
    state = {
        loading: true,
        clients: null,
        query: '',
        queryResults: null,
        showCockpit: true,
        queryParam: 'email',
        queryOptions: ['email', 'mobile'],
        showCreateVoucherModal: false,
        clientReceivingVoucher: null,
        businessId: 'eTC3QY5W3p_HmGHezKfxJw',
        branchId: 'SE-J0emUgQnya14mOGdQSw',
        username: 'global/cloud@apiexamples.com',
        password: 'VMlRo/eh+Xd8M~l'
    }

    componentDidMount(){
        axios.get(this.state.businessId + '/client',{
            url: this.state.businessId + '/client',
            auth: {
              username: this.state.username,
              password: this.state.password
            },
          }).then(res => {
            this.setState({clients: res.data._embedded.clients, loading: false});
          }).catch(err => {
            console.log(err);
          });
    }

    onQueryChangeHandler = (event) => {
        const newQuery = event.target.value;
        this.setState({query: newQuery});
    }

    onQueryOptionChangedHandler = (event) => {
        const newQueryOption = event.target.value;
        this.setState({query: '', queryParam: newQueryOption, queryResults: null, showCockpit: true});
    }

    onSubmitSearchHander = () => {
        this.setState({loading: true});
        const newQueryResults = this.state.clients.filter(client => {
            const email = client[this.state.queryParam];
            return email.includes(this.state.query);
        }); 

        this.setState({queryResults: newQueryResults, loading: false, showCockpit: false});
    }

    createVoucherHandler = (event, client) => {
        this.setState({showCreateVoucherModal: true, clientReceivingVoucher: client});
    }

    closeCreateVoucherModal = () => {
        this.setState({showCreateVoucherModal: false, clientReceivingVoucher: null});
    }

    showSuccessModal = () => {
        this.setState({showSuccessModal: true, showCreateVoucherModal: false, queryResults: null, showCockpit: true, query: ''});
    }

    closeSuccessModal = () => {
        this.setState({showSuccessModal: false, clientReceivingVoucher: null});
    }

    initializeModal = () => {
        let modal = null;
        if(this.state.showCreateVoucherModal && this.state.clientReceivingVoucher){
            modal = (
                <Modal modalClosed={this.closeCreateVoucherModal} show={this.state.showCreateVoucherModal}>
                    <CreateVoucher 
                        businessId={this.state.businessId} creatingBranchId ={this.state.branchId}
                        username={this.state.username} password={this.state.password} 
                        showSuccessModal={this.showSuccessModal} cancel={this.closeCreateVoucherModal} 
                        client={this.state.clientReceivingVoucher} />
                </Modal>);
        }

        if(this.state.showSuccessModal){
            modal = (
                <Modal modalClosed={this.closeSuccessModal} show={this.state.showSuccessModal}>
                    <h3 className={classes.Heading}>Voucher successfully created for {this.state.clientReceivingVoucher.firstName + " " + this.state.clientReceivingVoucher.lastName}! </h3>
                    <Button clicked={this.closeSuccessModal} btnType="Secondary">Close</Button>
            </Modal>);
        }
        return modal;
    }

    render(){
        let spinner,clients,cockpit,emptyResult,modal  = null;
        this.state.showCockpit ? cockpit = <Cockpit /> : cockpit = null;
        this.state.queryResults ? clients = 
            <Clients createVoucher={this.createVoucherHandler} clients={this.state.queryResults}/> : clients = null;
        this.state.loading ? spinner = <Spinner /> : spinner = null;
        if(this.state.queryResults){
            this.state.queryResults.length === 0 ? emptyResult = <h3>No client matches this query!</h3> : emptyResult = null
        }
       modal = this.initializeModal();
        
        return (
            <div className={classes.ClientSearch}>
                <Search 
                    queryParam={this.state.queryParam}
                    options={this.state.queryOptions}
                    onQueryOptionChange={(event) => this.onQueryOptionChangedHandler(event)}
                    onQueryChange={(event) => this.onQueryChangeHandler(event)}
                    onSubmitSearch={this.onSubmitSearchHander} 
                    value={this.state.query}/>
                {spinner}
                {clients}
                {emptyResult}
                {cockpit}
                {modal}
            </div>
        );
    }
}

export default ClientSearch;