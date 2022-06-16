import apiClient from './apiService';

export const authService = {
  setAccessToken(token: string) {
    return localStorage.setItem('access_token', token);
  },
  getAccessToken() {
    return localStorage.getItem('access_token');
  },
  removeAccessToken() {
    return localStorage.removeItem('access_token');
  },

  setUsername(token: string) {
    return localStorage.setItem('username', token);
  },
  getUsername() {
    return localStorage.getItem('username');
  },
  removeUsername() {
    return localStorage.removeItem('username');
  },
};

export const registerAccount = async data => {
  const rs = (await apiClient.request({
    method: 'POST',
    url: '/auth/register',
    data: data,
  })) as any;
  return rs;
};

export const loginAccount = async data => {
  const rs = (await apiClient.request({
    method: 'POST',
    url: '/auth/login',
    data: data,
  })) as any;
  return rs;
};
