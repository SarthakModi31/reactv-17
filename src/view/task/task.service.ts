import API from '../../utils/Api/api';

export const getProductData = () =>
  API({
    url: '/taskData',
    method: 'get',
    hideErrorMessage:'Error in getting Products',
  });
