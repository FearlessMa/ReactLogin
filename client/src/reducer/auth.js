/*
 * @Author: mhc 
 * @Date: 2018-10-17 21:22:18 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-23 21:12:28
 */

import { REQ_SING_UP, REQ_SING_UP_ERR } from '../actions/actionTypes';

const auth = (state = {}, action = {}) => {
    switch (action.type) {
        case REQ_SING_UP:
            return {
                ...state,
                singUpData: action.data
            }
        case REQ_SING_UP_ERR:
            return {
                ...state,
                singUpData: action.errData
            }
        default:
            return state
    }
}
export default auth;