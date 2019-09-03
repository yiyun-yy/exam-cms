import axios from 'axios'

const instance = axios.create({
    baseURL: 'https:localhost:7001',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});


// Add a request interceptor
instance.interceptors.request.use( (config)=> {
    // Do something before request is sent
    return config;
},  (error)=> {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use( (response)=> {
    // Do something with response data
    return response;
},  (error)=> {
    // Do something with response error
    return Promise.reject(error);
});

export default instance