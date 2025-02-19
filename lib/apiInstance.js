import axios from "axios";

const API_URL =
  "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/"; // didnt use env here for simplicity

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = API_URL;
const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo"; // didnt use env here for simplicity

axiosInstance.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${token}`;
  return request;
}, null);

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);

export const _get = (url) =>
  axiosInstance.get(url).then((response) => response);
