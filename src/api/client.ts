import Axios from "axios";
// import querystring from "query-string";

export type APIResponse<T> = {
  status: {
    timestamp: string;
    error_code: string;
    error_description: string;
  };
  data: T;
};

export const API_KEY = 'e0011af5-c99b-40a1-a52a-6eb98d6fe3fd'

const client = Axios.create({
  baseURL: "https://api.flipsidecrypto.com/api/v2",
  // paramsSerializer: (params) => querystring.stringify(params),
});

// client.interceptors.request.use((config:any) => {
//   // config.headers.Authorization = token;
//   return config;
// });

export default client;
