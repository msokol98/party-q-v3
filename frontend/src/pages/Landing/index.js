import { useQuery } from 'react-query';

import partyAdapter from 'api/partyAdapter';
import spotifyClient from 'api/spotifyClient';
import useToken from 'hooks/useToken';

import Landing from './Landing';
import React from 'react';

const LandingContainer = () => {

    useToken();

    const { data: user } = useQuery('spotifyUser', () => spotifyClient.getUser());

    const hostParty = () => {
        partyAdapter.create({}).then(() => window.location = '/party');
    };

    return <Landing hostParty={hostParty} user={user} />;
};

export default LandingContainer;