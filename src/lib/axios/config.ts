import axios from "axios";

export const Api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30" },
});

// Add a request interceptor
Api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);
    // config.headers.Authorization = 'token'
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    
    return Promise.reject(error);
  }
);

// Add a response interceptor
Api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response);
    
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (msg === 'session timeout') {
        // refresh token
    //     logout
    // }
    return Promise.reject(error);
  }
);