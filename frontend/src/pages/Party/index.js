import { Redirect } from 'react-router';
import { useQuery } from 'react-query';

import is404 from 'helpers/is404';
import partyAdapter from 'api/partyAdapter';

import Party from './Party';
import React, { useState } from 'react';

import WebSocketClient from 'components/WebSocketClient';

const PartyContainer = () => {

    const { data: party, error } = useQuery('party', () => partyAdapter.index());

    const [outgoingUpdate, setOutgoingUpdate] = useState();
    const [incomingUpdate, setIncomingUpdate] = useState();

    if(error && is404(error)) {
       return <Redirect to="/" />
    }

    console.log("incoming update....", incomingUpdate)

    return(
        <>
            {party &&
                <>
                    <WebSocketClient outgoingUpdate={outgoingUpdate} onUpdate={setIncomingUpdate} partyId={party.id} />
                    <Party party={party} />
                    <h1 className="has-text-white">{incomingUpdate}</h1>
                    <button onClick={() => setOutgoingUpdate("a new message!!!!!")}>Send Update</button>
                </> 
            }
        </>
    );
}

export default PartyContainer;