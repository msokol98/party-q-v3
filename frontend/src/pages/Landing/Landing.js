
import { oauthURL } from 'config';

import authClient from 'api/authClient';

import Button from 'components/Button';
import JoinParty from './components/JoinParty';
import React from 'react';

const Landing = ({ hostParty, user }) => {

    let sections = user && [
        <h5 className="has-text-light">Hello {user.name}</h5>,
    ];
    
    const sectionsWithParty = [
        <Button onClick={() =>  window.location = "/party"}>Active Party</Button>,
    ];

    const sectionsWithNoParty = [
        <Button onClick={hostParty}>Host Party</Button>,
        <JoinParty />,
        <Button onClick={authClient.logout}>Logout</Button>
    ];
    
    if(user && user.inParty) {
        sections = [...sections, ...sectionsWithParty];
    } else if(user) {
        sections = [...sections, ...sectionsWithNoParty];
    }

    return(
        <div className="section container content">

        {!user && <Button onClick={() => window.location = oauthURL}>Login with Spotify</Button>}

        {user &&
            <div>
                {sections.map((section, i) => <div key={i} style={{margin: "50px"}}>{section}</div>)}
            </div>
        }
    </div>
    )
}

export default Landing;
