import jwt_decode from "jwt-decode";

export const setToken = (token) => {
    localStorage.setItem('token', token);
} 

export const getToken = () => {
    return localStorage.getItem('token');
}

export const getUser = (token) => {
    return jwt_decode(token);
}