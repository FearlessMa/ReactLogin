/*
 * @Author: mhc 
 * @Date: 2018-10-18 21:55:48 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-18 22:36:20
 */

import axios from 'axios';

const config = {
    // baseURL:'localhost:6060'
}

const axiosPost = (url,data)=>axios.post(url,data,config);

export const userSignUp = userDate => dispatch => {
    return axiosPost('/api/users',userDate)
}