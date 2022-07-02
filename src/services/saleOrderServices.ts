import apiClient from './apiService';

export const addProductToCart = async data => {
  const rs = (await apiClient.request({
    method: 'POST',
    url: `/saleOrder/add`,
    data: data,
  })) as any;
  return rs;
};

export const removeProductFromCart = async data => {
  const rs = (await apiClient.request({
    method: 'POST',
    url: `/saleOrder/remove`,
    data: data,
  })) as any;
  return rs;
};

export const paymentSaleOrder = async data => {
  const rs = (await apiClient.request({
    method: 'POST',
    url: `/saleOrder/payment`,
    data: data,
  })) as any;
  return rs;
};

export const findAllOrder = async params => {
  const rs = (await apiClient.request({
    method: 'GET',
    url: `/saleOrder`,
    params: params,
  })) as any;
  return rs;
};
