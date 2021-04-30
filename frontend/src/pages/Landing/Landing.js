
import { oauthURL } from 'config';
import { useQuery } from 'react-query';

import spotifyClient from 'api/spotifyClient';
import useToken from 'hooks/useToken';

import Button from 'components/Button';
import React from 'react';

const Landing = () => {

    useToken();

    const { data: user } = useQuery('spotifyUser', () => spotifyClient.getUser());

    return(
        <div className="section container content">
            {!user && <Button onClick={() => window.location = oauthURL}>Login with Spotify</Button>}

            {user &&
                <div>
                    <h5>Hello {user.display_name}</h5>
                    <br />
                    <Button onClick={spotifyClient.logout}>Logout with Spotify</Button>
                </div>
            }
        </div>
    );
}
 
export default Landing;
