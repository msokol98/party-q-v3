import { Redirect } from 'react-router';
import { useQuery } from 'react-query';

import is404 from 'helpers/is404';
import partyAdapter from 'api/partyAdapter';

import Party from './Party';
import React from 'react';

const PartyContainer = () => {

    const { data: party, error } = useQuery('party', () => partyAdapter.index());

    if(error && is404(error)) {
       return <Redirect to="/" />
    }

    return(
        <>
            {party && <Party party={party} />}
        </>
    );
}

export default PartyContainer;