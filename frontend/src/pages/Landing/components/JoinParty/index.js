import is404 from 'helpers/is404';
import partyAdapter from 'api/partyAdapter';
import useInput from 'hooks/useInput';

import JoinParty from './JoinParty';
import React, { useState } from 'react';

const JoinPartyContainer = () => {
    
    const { value: accessCode, bind: bindAccessCode, reset: resetAccessCode } = useInput('',  "number");
    const [error, setError] = useState();
    
    const handleSubmit = event => {
        event.preventDefault();

        partyAdapter
            .find({accessCode})
            .then(party => party.id)
            .then(partyId => partyAdapter.addCurrentUser(partyId))
            .then(() => window.location = "/party")
            .catch(error => {
                if(is404(error)) {
                    setError("Invalid access code");
                } else {
                    setError(error.response.data.message);
                }
            })
    }

    return <JoinParty bindAccessCode={bindAccessCode} error={error} handleSubmit={handleSubmit} maxLength={6} />
}

export default JoinPartyContainer;