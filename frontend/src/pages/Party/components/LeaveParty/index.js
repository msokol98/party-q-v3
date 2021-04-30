import useCurrentUser from 'hooks/useCurrentUser';
import partyAdapter from 'api/partyAdapter';

import LeaveParty from './LeaveParty';
import React from 'react';

const LeavePartyContainer = ({ partyId }) => {

    const { user } = useCurrentUser();

    const onClick = () => {
        partyAdapter.removeCurrentUser(partyId).then(() => {
            const message = user.host ? "You have ended the party." : "You have left the party";
            alert(message);
            window.location = "/";
        }).catch(() => alert("Server error occurred."));
    }

    return(
        <>
            {user &&
                <LeaveParty isHost={user.host} onClick={onClick} />
            }   
        </>
    )

}

export default LeavePartyContainer;