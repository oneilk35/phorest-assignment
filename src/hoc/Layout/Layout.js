import React, { Component } from 'react';
import Aux from '../_Aux';
import Header from '../../components/UI/Header/Header';
import ClientSearch from '../../components/ClientSearch/ClientSearch';
class Layout extends Component {
    render(){
        return(
        <Aux>
            <Header/>
            <ClientSearch />
        </Aux>
        );
    }
}

export default Layout; 