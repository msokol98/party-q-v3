import React from 'react';

const MetaData = ({ party }) => (
    <>
        <h4 className="has-text-light">Welcome to the party!</h4>
        <h4 className="has-text-light">Your host is {findHost(party.members).name}</h4>
        <h4 className="has-text-light">The access code is {party.accessCode}</h4>
    </>
);

const findHost = members => members.find(member => member.host);
 
export default MetaData;