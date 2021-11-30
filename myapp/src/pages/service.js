import axios from '../utils/axios'
import { encode } from 'js-base64';
export async function getMenus(payload) {
    return axios.get('/api/getMenus', { params: payload });
}
export async function getData(payload) {
    return axios.get(`/api/dataSource`, { params: payload });
}
export async function setData(payload) {
    const {fource, data} = payload;
    if(fource) {
        payload.fource = encode(`${fource}A${new Date().getTime()}`)
    }
    if(data.id) {
        payload.id = data.id;
    }
    return axios.post(`/api/dataSource`, payload);
}