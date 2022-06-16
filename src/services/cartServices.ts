import apiClient from './apiService';

export const getCurrentCart = async () => {
  const rs = (await apiClient.request({
    method: 'GET',
    url: `/saleOrder/current`,
  })) as any;
  return rs;
};
