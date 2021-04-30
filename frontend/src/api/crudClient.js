import { get, post, put, patch, destroy } from './xhr';

const crudClient = model => {
    return {
        index: () => get(`/${model}`),
        single: id => get(`/${model}/${id}`),
        find: params =>  get(`/${model}`, { params }),
        create: data => post(`/${model}`, data),
        update: (id, data) => put(`/${model}/${id}`, data),
        partialUpdate: (id, data) => patch(`/${model}/${id}`, data),
        remove: id => destroy(`/${model}/${id}`),
    }
};

export default crudClient;