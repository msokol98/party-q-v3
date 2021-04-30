import Button from 'components/Button';
import React from 'react';

const LeaveParty = ({ isHost, onClick }) => (
    <>
        {isHost ?
            <Button onClick={onClick}>End Party</Button>
        :
            <Button onClick={onClick}>Leave Party</Button>
        }
    </>
);

export default LeaveParty;