import React from 'react';

const Members = ({ members }) => (
    <div className="container">
        <h3 className="title has-text-light">Members</h3>
        {members.map(member => <h5 className="has-text-light">{member.name}</h5>)}
    </div>
);

export default Members;