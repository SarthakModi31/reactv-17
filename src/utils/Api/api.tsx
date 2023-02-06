import axios, { Method } from 'axios';
import {
  API_END_POINT,
} from '../index';


export interface IAPIOptions {
  url?: string;
  method?: Method;
  queryParams?: object;
  formData?: object;
  body?: any;
  cache?: boolean;
  headers?: any;
  successMessage?: string;
  hideErrorMessage?: string;
  errorMessage?: string;
}



const handleAPIError = ({ exception, hideErrorMessage } : any) => {
  if (hideErrorMessage!== '') {
    // notificaiton.errror(hideErrorMessage);
  }
  throw exception;

};


const API = async (apiData: IAPIOptions): Promise<any> => {
  const {
    url,
    queryParams = {},
    // cache,
    method,
    body,
    formData,
    // headers = {},
    // successMessage,
    hideErrorMessage =  '',
  } = apiData;
  try {
    let apiUrl = `/${url}`.replace(/\/\//g, '/');
    let response;
    let requestHeaders = {};


    // DO append the API end point only if the url is not the service url
    apiUrl = `${API_END_POINT}${apiUrl}`;
    response = await axios.request({
      method: method || 'GET',
      url: apiUrl,
      data: formData || body,
      params: queryParams,
      headers: requestHeaders,
    });
    return response;
  } catch (exception) {
    return handleAPIError({ exception, hideErrorMessage });
  }
};


API.get = (url: string , options: IAPIOptions) => API({ url, method: 'get', ...options });
API.put = (url :string, body: any, options: IAPIOptions) =>
  API({
    url,
    body,
    method: 'put',
    ...options,
  }); 
API.patch = (url:string , body: any, options: IAPIOptions) =>
  API({
    url,
    body,
    method: 'patch',
    ...options,
  });
API.post = (url :string , body: any, options: IAPIOptions) =>
  API({
    url,
    body,
    method: 'post',
    ...options,
  });
API.delete = (url:string , body: any, options: IAPIOptions) =>
  API({
    url,
    body,
    method: 'delete',
    ...options,
  });
export default API;
