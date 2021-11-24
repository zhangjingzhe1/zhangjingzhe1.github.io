import axios from '../utils/axios'
export async function getMenus(payload) {
    return axios.get('/api/getMenus', { params: payload });
}
export async function getData(payload) {
    return axios.get(`/api/dataSource`, { params: payload });
}
export async function setData(payload) {
    console.log(payload)
    return axios.post(`/api/dataSource`, payload);
}