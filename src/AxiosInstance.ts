import axios from 'axios';
import env from 'react-dotenv';

const axiosInstance = axios.create({
    baseURL: 'https://api.srgssr.ch/mx3/v2',
    headers: {
        Authorization: env.API_TOKEN,
    },
});

export default axiosInstance;