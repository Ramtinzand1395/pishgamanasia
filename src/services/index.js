import axios from "axios";
const SERVER_URL = "https://exam.pishgamanasia.com/webapi";
// @desc  Login
// @route POST https://exam.pishgamanasia.com/webapi/Account/Login
export const LoginApi = (contact) => {
  const url = `${SERVER_URL}/Account/Login`;
  return axios.post(url, contact);
};
// @desc  GetVehicale
// @route POST https://exam.pishgamanasia.com/webapi/Request/GetVehicleUsers
export const GetVehicleUsers = (values) => {
  const url = `${SERVER_URL}/Request/GetVehicleUsers`;
  return axios.get(url,{params:values});
};
// @desc  SendRequest
// @route POST https://exam.pishgamanasia.com/webapi/Request/SendRequest
export const SendRequest = (values) => {
  const url = `${SERVER_URL}/Request/SendRequest`;
  return axios.post(url,values);
};
