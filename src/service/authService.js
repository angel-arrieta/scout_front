import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const register = async (userData) => {
    const res = await axios.post(`${API_URL}/signup`, userData);
    return res.data;
};

export const login = async (userData) => {
    const res = await axios.post(`${API_URL}/login`, userData);
    if (res.data.token) {
        localStorage.setItem('token', res.data.token);
    }
    return res.data;
};

