import { handleError, handleResponse } from './handlers';

import axios from 'axios';

function spotifyAxiosInstance(config={}) {
    return axios.create({
        baseURL: "https://api.spotify.com/v1",
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`},
        ...config
    });
};

export const spotifyClient = {
    getUser: () => {
        return spotifyAxiosInstance()
            .get('me')
            .then(handleResponse)
            .catch(handleError);
    },
    logout: () => {
        localStorage.removeItem('token');
        window.location = "/";
    }
};

export default spotifyClient;