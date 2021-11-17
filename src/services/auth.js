import {post} from '../utils/request'
/**
 * 用户登录
 * @param {*} user 
 * username
 * password
 * @returns 
 */
export function loginApi(user){
    return post('/api/v1/auth/manage_login',user)
}