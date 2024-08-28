import jwtDecode from 'jwt-decode';

export const storeToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

const token = getToken();
if (token) {
    try {
        const decoded = jwtDecode(token);
        console.log('Decoded token:', decoded);
    } catch (error) {
        console.error('Error decoding token:', error);
    }
}
