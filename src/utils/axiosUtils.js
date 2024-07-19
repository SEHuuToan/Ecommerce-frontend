import axios from 'axios';
// const HOST = 'http://192.168.2.224:4000/'
const HOST = import.meta.env.VITE_BASE_URL_LOCAL;

const axiosGet = async (url) => {
    const res = await axios.get(`${HOST}api/products/${url}`)
    return res;
}
const axiosGetWithParams = async (url, params) => {
    const p = new URLSearchParams(params)
    const res = axios.get(HOST + url + '?' + p)
    return res;
}
const axiosGetBlog = async (url) => {
    const res = await axios.get(HOST+ 'api/' + url)
    return res;
}

export {
    axiosGet,
    axiosGetWithParams,
    axiosGetBlog
}