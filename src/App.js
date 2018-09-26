import React, { Component } from 'react';
import axios from 'axios';
import Layout from './hoc/Layout/Layout';

const access_token = "Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=";
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
class App extends Component {

  /* 
  state = {
    clients: [],
    loaded: false
  }

  componentDidMount(){
    axios.get('http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client',{
      url: 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client',
      auth: {
        username: 'global/cloud@apiexamples.com',
        password: 'VMlRo/eh+Xd8M~l'
      },
    }).then(res => {
      this.setState({clients: res.data._embedded.clients, loaded: true});
    }).catch(err => {
      console.log(err);
    });

    axios.get('http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher',{
      url: 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher',
      auth: {
        username: 'global/cloud@apiexamples.com',
        password: 'VMlRo/eh+Xd8M~l'
      },
    }).then(res => {
      console.log(res);
      if(res.status === 200){
        console.log("Successfully got yokes!");
      }
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

  buttonHandler = () => {
    const newVoucherObject = {
      clientId: "WwEaIb0m4bhJphVtm2VgIw",
      creatingBranchId: "SE-J0emUgQnya14mOGdQSw",
      expiryDate: "2018-09-24T17:29:18.705Z",
      issueDate: "2018-09-24T17:29:18.705Z",
      links: [
        {
          href: "string",
          rel: "string",
          templated: true
        }
      ],
      originalBalance: 123.12,
      remainingBalance: 23.12,
      voucherId: "ab-123"
    }

    axios.post('http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher',{},{
      url: 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher',
      auth: {
        username: 'global/cloud@apiexamples.com',
        password: 'VMlRo/eh+Xd8M~l'
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

  render() {
    let clients = <p>Hi phorest</p>;

    if(this.state.loaded){
      clients = this.state.clients.map(client => (
        <div className={classes.Person} key={client.clientId}>
          <p>Name: {client.firstName}</p>
          <p>Email: {client.email}</p>
          <p>mobile: {client.mobile}</p>
        </div>
      ));
    }
    return (
      <div className={classes.Chocolate}>
        <button onClick={this.buttonHandler}>Create Voucher!</button>
      </div>
    );
  } 
  */

  render(){
    return (
      <Layout />
    );
  }
}

export default App;
