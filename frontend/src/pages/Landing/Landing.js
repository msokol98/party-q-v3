
import { oauthURL } from 'config';

import authClient from 'api/authClient';

import Button from 'components/Button';
import JoinParty from '../components/JoinParty';
import React from 'react';

const Landing = ({ hostParty, user }) => (
    <div className="section container content">

        {!user && <Button onClick={() => window.location = oauthURL}>Login with Spotify</Button>}

        {user &&
            <div>
                <h5>Hello {user.display_name}</h5>
                <br />
                <Button onClick={hostParty}>Host Party</Button>
                <br />
                <JoinParty />
                <br />
                <Button onClick={authClient.logout}>Logout</Button>
            </div>
        }
    </div>
);

export default Landing;
