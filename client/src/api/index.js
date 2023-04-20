import axios from 'axios';

const loginConfig = {
  baseURL: 'http://localhost:4200/api/auth/login',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const LoginAPIInstance = axios.create(loginConfig);

const defaultConfig = {
  baseURL: 'http://localhost:4200/',
  headers: {
    'Content-Type': 'application/json'
  }
}

const token = localStorage.getItem('token');
if (token) defaultConfig.headers['authorization'] = `Bearer ${token}`;

export const DefaultAPIInstance = axios.create(defaultConfig)