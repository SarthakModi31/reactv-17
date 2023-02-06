import API from '../../utils/Api/api';

export const getProductData = () =>
  API({
    url: '/Products',
    method: 'get',
    hideErrorMessage:'Error in getting Products',
  });
  
export const getlistData = () =>
  API({
    url: '/list',
    method: 'get',
    hideErrorMessage:'Error in getting list',
  });