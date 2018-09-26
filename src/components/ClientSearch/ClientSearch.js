import React, {Component} from 'react';
import classes from './ClientSearch.css';
import Spinner from '../UI/Spinner/Spinner';
import Clients from '../Clients/Clients';
import Cockpit from '../UI/Cockpit/Cockpit';
import Search from '../UI/Search/Search';
import axios from 'axios';

const access_token = "Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=";
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
class ClientSearch extends Component{
    state = {
        loading: true,
        clients: null,
        query: '',
        queryResults: null,
        showCockpit: true,
        queryParam: 'email',
        queryOptions: ['email', 'mobile']
    }

    componentDidMount(){
        axios.get('http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client',{
            url: 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client',
            auth: {
              username: 'global/cloud@apiexamples.com',
              password: 'VMlRo/eh+Xd8M~l'
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

    render(){
        let spinner,clients,cockpit, emptyResult = null;
        this.state.showCockpit ? cockpit = <Cockpit /> : null;
        this.state.queryResults ? clients = <Clients clients={this.state.queryResults}/> : null;
        this.state.loading ? spinner = <Spinner /> : null;
        if(this.state.queryResults){
            this.state.queryResults.length === 0 ? emptyResult = <h3>No client matches this query!</h3> : null
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
            </div>
        );
    }
}

export default ClientSearch;