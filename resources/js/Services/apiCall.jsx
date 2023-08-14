import axios from 'axios';
import { useSelector } from 'react-redux';

const apiCall = axios.create({
    baseURL: 'http://localhost:9001/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Use the useSelector hook to access the token from Redux state
apiCall.interceptors.request.use((config) => {
    const token = useSelector(state => state.auth.token);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default apiCall;
