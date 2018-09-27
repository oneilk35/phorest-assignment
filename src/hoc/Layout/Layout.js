import React, { Component } from 'react';
import Header from '../../components/UI/Header/Header';
import ClientSearch from '../../components/ClientSearch/ClientSearch';
import classes from './Layout.css';
class Layout extends Component {
    render(){
        return(
        <div className={classes.Layout}>
            <Header/>
            <ClientSearch />
        </div>
        );
    }
}

export default Layout; 