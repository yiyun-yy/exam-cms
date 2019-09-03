import axios from 'axios'

export function getUserLogin(params){
    let url ='/user/login';
    return axios.post(url,params)
}