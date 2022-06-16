import apiClient from './apiService';

export const getCurrentUser = async () => {
  const rs = (await apiClient.request({
    method: 'GET',
    url: `/user/info`,
  })) as any;
  return rs;
};

export const updateUser = async (data, id) => {
  const rs = (await apiClient.request({
    method: 'PUT',
    url: `/user/${id}`,
    data: data,
  })) as any;
  return rs;
};

export const changePass = async data => {
  const rs = await apiClient.request({
    method: 'PUT',
    url: '/user',
    data: data,
  });
  return rs;
};
