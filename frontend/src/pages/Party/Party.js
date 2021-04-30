import LeaveParty from './components/LeaveParty';
import Members from './components/Members';
import MetaData from './components/MetaData';
import React from 'react';
import Queue from './components/Queue';

const Party = ({ party }) => {

    return(
        <div className="content" style={{padding: "5% 10%"}}>

            <div className="columns">
                <div className="columns column is-centered is-three-quarters">

                    <div className="column is-half">
                        <div className="section">
                            <MetaData party={party} />
                        </div>

                        <div className="section">
                            <Queue />
                        </div>

                        <div className="section">
                            <LeaveParty partyId={party.id} />
                        </div>
                    </div>

                </div>

                <div className="column section">
                    <Members members={party.members} />
                </div>
            </div>
        </div>
    )
}

export default Party;