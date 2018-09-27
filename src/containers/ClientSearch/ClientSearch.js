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
axios.defaults.baseURL = 'https://api-gateway-dev.phorest.com/third-party-api-server/api/business/';
class ClientSearch extends Component{
    state = {
        loading: true,
        clients: null,
        updatedClients: null,
        useUpdatedClients: false,
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

    /* This function will be called before render() and it is where I make the GET request to the clients
    API. The response returned is the clients and we store the clients in the state */
    componentDidMount(){
        axios.get(this.state.businessId + '/client',{
            url: this.state.businessId + '/client',
            auth: {
              username: this.state.username,
              password: this.state.password
            },
          }).then(res => {
            this.generateRealNames(res.data._embedded.clients);
            this.setState({clients: res.data._embedded.clients, loading: false});
          }).catch(err => {
            console.log(err);
          });
    }

    /* The below function is only used for display purposes. As some of the names returned from the API 
    are just long series of digits. This function replaces those digits with real names */ 

    generateRealNames = (clients) => {
        const maleNames = ['Brian', 'Peter', 'Paul', 'David', 'Barry', 'Mark', 'Keith', 'John', 'Stewart', 'Kevin', 'Joseph', 'Larry', 'Brad'];
        const femaleNames = ['Sarah', 'Abbey', 'Sally', 'Suzanne', 'Aisling', 'Meabh', 'Ciara', 'Hannah', 'Catriona', 'Emma', 'Lucy'];
        const surnames = ['ONeill', 'OMalley', 'Adams', 'Murphy', 'McDonnell', 'McCarthy', 'Bolger', 'Byrne', 'Thomas', 'Campbell', 'Burke' ];
        
        const updatedClients = clients.map(client => {
            let updatedClient = {...client};
            if(updatedClient.gender === "MALE"){
                updatedClient["firstName"] = maleNames[Math.floor(Math.random() * maleNames.length)];
            }
            else{
                updatedClient["firstName"] = femaleNames[Math.floor(Math.random() * femaleNames.length)];
            }
            updatedClient["lastName"] = surnames[Math.floor(Math.random() * surnames.length)];
            return updatedClient;
        });
        this.setState({updatedClients: updatedClients});
    } 

    /* In this function we take the value from the event (the current value in the input) and set the query 
    property in the state to this. This is now the query used to filter out clients */

    onQueryChangeHandler = (event) => {
        const newQuery = event.target.value;
        this.setState({query: newQuery});
    }

    /* In the below function we take the value from the event (the option selected) and set the queryParam 
    property in the state to this. This is now the property against which the user will query on the clients */ 

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

    /* The below two functions show and close the create voucher modal respectively, 
    by changing the applications state, causing it to re-render, then outputting the modal */
    createVoucherHandler = (event, client) => {
        this.setState({showCreateVoucherModal: true, clientReceivingVoucher: client});
    }

    closeCreateVoucherModal = () => {
        this.setState({showCreateVoucherModal: false, clientReceivingVoucher: null});
    }

    /* The below two functions show and close the success modal respectively, 
    by changing the applications state, causing it to re-render, then outputting the modal*/
    
    showSuccessModal = () => {
        this.setState({showSuccessModal: true, showCreateVoucherModal: false, queryResults: null, showCockpit: true, query: ''});
    }

    closeSuccessModal = () => {
        this.setState({showSuccessModal: false, clientReceivingVoucher: null});
    }

    /* The below function is designed to return the current value of the modal at any given time. If the 
    showCreateVoucherModal property is true, the user will be presented with a modal to create a new voucher 
    for a client. Likewise, if the success modal property is set, the success message will be displayed, otherwise
    return null */

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

    /* In the below function, the digit names from the database are swapped with normal names */

    swapClientNames = () => {
        const clients = this.state.clients;
        const updatedClients = this.state.updatedClients; 
        const useUpdatedClients = this.state.useUpdatedClients;
        this.setState({clients: updatedClients, updatedClients: clients, useUpdatedClients: !useUpdatedClients});
    }

    /* This below function is the function that renders the JSX to HTML */
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

       let nameChangeBtn = null;
       if(!this.state.queryResults){
           nameChangeBtn = <Button btnType="Secondary" clicked={this.swapClientNames}>{this.state.useUpdatedClients ? "Use API Names" : "Use Real Names"}</Button>;
       }
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
                <div className={classes.NameChangeBtn}>
                    {nameChangeBtn}
                </div>
            </div>
        );
    }
}

export default ClientSearch;