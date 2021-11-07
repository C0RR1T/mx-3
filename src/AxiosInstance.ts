import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.srgssr.ch/mx3/v2',
    headers: {
        Authorization: 'Bearer QiDbr0V3zR14IMxTA0zsElWGPIvQ',
    },
});

export default axiosInstance;