import request from '../utils/request'

export let getUserLogin = (params: object) => {
    let url = '/user/login';
    return request.post(url, params)
}