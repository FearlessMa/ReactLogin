/*
 * @Author: mhc 
 * @Date: 2018-10-17 21:22:18 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-19 21:24:25
 */

import { REQ_SING_UP } from '../actions/actionTypes';

const auth = (state = {}, action = {}) => {
    switch (action.type) {
        case REQ_SING_UP :
            return {
                ...state,
                singUpData:action.data
            }
        default:
            return state
    }
}
export default auth;