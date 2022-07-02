import apiClient from './apiService';

export const findProduct = async params => {
  const rs = (await apiClient.request({
    method: 'GET',
    url: '/public/product',
    params: params,
  })) as any;
  return rs;
};

export const findProductById = async id => {
  const rs = (await apiClient.request({
    method: 'GET',
    url: `/public/product/${id}`,
  })) as any;
  return rs;
};

export const findListCategory = async () => {
  const rs = (await apiClient.request({
    method: 'GET',
    url: '/public/category',
  })) as any;
  return rs;
};
