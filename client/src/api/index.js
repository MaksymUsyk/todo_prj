import axios from 'axios';

const loginConfig = {
  baseURL: 'http://localhost:4200/api/auth/',
  headers: {
    'Content-Type': 'application/json'
  }
}

const LoginAPIInstance = axios.create(loginConfig);

const defaultConfig = {
  baseURL: 'http://localhost:4200/api/',
  headers: {
    'Content-Type': 'application/json'
  }
}

const token = localStorage.getItem('token');
if (token) defaultConfig.headers['authorization'] = `Bearer ${token}`;

const DefaultAPIInstance = axios.create(defaultConfig)

DefaultAPIInstance.interceptors.response.use(
  response => response,
  error => {
    if(error.code === 401) {
      localStorage.removeItem('token')
      location.reload()
    }
    return Promise.reject(error)
  }
)

export { LoginAPIInstance, DefaultAPIInstance }