import axios from "axios";

const api = axios.create({
    baseURL: 'https://versel-server-sigma.vercel.app/'
})

export default api;