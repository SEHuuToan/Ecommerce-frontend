import axios from 'axios';
// import HOST from '../main';
const HOST = 'http://localhost:4000/api/products/'

const axiosGet = async (url) => {
    const res = await axios.get(HOST + url)
    return res;
}
const axiosGetWithParams = async (url, params) => {
    const p = new URLSearchParams(params)
    const res = axios.get(HOST + url + '?' + p)
    return res;
}

export {
    axiosGet,
    axiosGetWithParams,
}