import { useLocation } from 'react-router-dom';

import crudClient from 'api/crudClient';
import is404 from 'helpers/is404';
import spotifyClient from 'api/spotifyClient';
import qs from 'qs';

const useToken = () => {

    const location = useLocation();
    const token = qs.parse(location.search, { ignoreQueryPrefix: true }).access_token;
    const oldToken = localStorage.getItem('token');
    
    if(oldToken !== token && token) {
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
            if(is404(error)) {
                createMember(membersAdapter, token);
            }
        })
}

const createMember = (membersAdapter, token) => {
    spotifyClient
        .getUser()
        .then(user => membersAdapter.create({
            'id': user.id,
            'name': user.display_name,
            token
        }));
}

export default useToken;
  