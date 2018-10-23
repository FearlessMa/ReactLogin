/*
 * @Author: mhc 
 * @Date: 2018-10-17 21:24:41 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-23 21:17:15
 */

import { combineReducers } from 'redux' 
import auth from './auth';
import { flashMessage } from './flashMessage'

export default combineReducers({
    auth,
    flashMessage
})