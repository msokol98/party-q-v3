import React from 'react';

const Members = ({ members }) => (
    <div className="container">
        <h3 className="title has-text-light">Members</h3>
        {members.map((member, i) => <h5 key={i} className="has-text-light">{member.name}</h5>)}
    </div>
);

export default Members;