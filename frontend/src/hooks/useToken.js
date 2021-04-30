import { useLocation } from 'react-router-dom';

import crudClient from 'api/crudClient';
import spotifyClient from 'api/spotifyClient';
import qs from 'qs';

const useToken = () => {
    const location = useLocation();

    const token = qs.parse(location.search, { ignoreQueryPrefix: true }).access_token;
    const oldToken = localStorage.getItem('jwt');
    
    if(!oldToken || oldToken !== token) {
        updateToken(token);
    }

    return token;
};

const updateToken = token => {
    localStorage.setItem('token', token);

    const membersAdapter = crudClient('members');

    spotifyClient
        .getUser()
        .then(user => user.id)
        .then(id => membersAdapter.partialUpdate(id, {token}))
        .catch(error => {
            const { status } = error.response;

            if(status === 404) {
                createMember(membersAdapter, token);
            }
        })
}

const createMember = (membersAdapter, token) => {
    spotifyClient
        .getUser()
        .then(user => user.id)
        .then(id => membersAdapter.create({id, token}));
}

export default useToken;
  