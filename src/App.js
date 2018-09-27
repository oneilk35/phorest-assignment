import React, { Component } from 'react';
import axios from 'axios';
import Layout from './hoc/Layout/Layout';

const access_token = "Basic Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw=";
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
class App extends Component {
  render(){
    return (
      <Layout />
    );
  }
}

export default App;
