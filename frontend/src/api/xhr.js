import { apiHost } from 'config';
import { handleError, handleResponse } from './handlers';
import axios from 'axios';

function getApiClient(config) {
    return axios.create({
        baseURL: apiHost,
        ...config
    });
}

export function get(path, config={}) {
    return getApiClient(config)
            .get(path)
            .then(handleResponse)
            .catch(handleError);
}

export function post(path, model={}, config={}) {
    return getApiClient(config)
            .post(path, model)
            .then(handleResponse)
            .catch(handleError);
}

export function put(path, model={}, config={}) {
    return getApiClient(config)
            .put(path, model)
            .then(handleResponse)
            .catch(handleError);
}

export function patch(path, model={}, config={}) {
    return getApiClient(config)
            .patch(path, model)
            .then(handleResponse)
            .catch(handleError);
}

export function destroy(path, config={}) {
    return getApiClient(config)
            .delete(path)
            .then(handleResponse)
            .catch(handleError);
}

