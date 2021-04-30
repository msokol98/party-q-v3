import partyAdapter from 'api/partyAdapter';
import useCurrentUser from 'hooks/useCurrentUser';
import useToken from 'hooks/useToken';

import Landing from './Landing';
import React from 'react';

const LandingContainer = () => {

    useToken();

    const { user } = useCurrentUser();

    const hostParty = () => {
        partyAdapter.create({}).then(() => window.location = '/party');
    };

    return <Landing hostParty={hostParty} user={user} />;
};

export default LandingContainer;