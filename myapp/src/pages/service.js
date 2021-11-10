import axios from '../utils/axios'
export async function getMenus(payload) {
    return axios.get('/api/getMenus', { params: payload });
}