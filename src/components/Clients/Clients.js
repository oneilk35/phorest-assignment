import React from 'react';
import classes from './Clients.css';
import Client from './Client/Client';

const clients = (props) => {
    let clients = null;
    if(props.clients){
        clients = props.clients.map(client => (
            <Client 
                name={client.firstName + " " + client.lastName} 
                email={client.email}
                mobile={client.mobile}
                key={client.clientId}
                photoUrl={client.photoUrl}  />
        ));
    }
    
    return (
        <div className={classes.Clients}>
            {clients}
        </div>
    );
}

export default clients;