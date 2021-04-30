import { patch } from 'api/xhr';
import crudClient from 'api/crudClient';

const partyAdapter = {
    ...crudClient('parties'),
    addCurrentUser: partyId => patch(`parties/${partyId}/members?adding=true`, {}),
    removeCurrentUser: partyId => patch(`parties/${partyId}/members?adding=false`, {})
};

export default partyAdapter;