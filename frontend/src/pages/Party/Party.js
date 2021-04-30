import LeaveParty from './components/LeaveParty';
import React from 'react';

const Party = ({ party }) => {

    console.log(party)

    return(
        <div className="section container content">
            <h5>Welcome to the party!</h5>
            <h5>Your host is {findHost(party.members).name}</h5>
            <h5>The access code is {party.accessCode}</h5>

            <LeaveParty partyId={party.id} />
        </div>
    )
}

const findHost = members => members.find(member => member.host);

export default Party;