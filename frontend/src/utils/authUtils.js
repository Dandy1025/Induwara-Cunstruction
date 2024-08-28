import { jwtDecode } from 'jwt-decode';

export const storeToken = (token) => {
    localStorage.setItem('token', token); // Store token in localStorage
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const getDecodedToken = () => {
    const token = getToken();
    if (token) {
        return jwtDecode(token);
    }
    return null;
};