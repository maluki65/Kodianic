import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kodianic-backend.onrender.com/v1/api/',
  withCredentials: true,
});

// On attaching CSRF token before every request
api.interceptors.request.use((config) => {
  const csrfToken = localStorage.getItem('csrfToken');
  if (csrfToken) {
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
});

//On handling expired JWT ot invalid CSRF
api.interceptors.response.use(
  (response) => response, (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      localStorage.removeItem('csrfToken');
      if (api.logoutHandler) {
        api.logoutHandler();
      }
    }
    return Promise.reject(error);
  }
);

export default api;