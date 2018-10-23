/*
 * @Author: mhc 
 * @Date: 2018-10-18 21:55:48 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-23 22:15:10
 */

import axios from 'axios';
import {  REQ_SING_UP_ERR, ADD_FLASH_MESSAGE, FILTER_FLASH_MESSAGE } from './actionTypes';
// import { REQ_SING_UP } from './actionTypes';
// const config = {
//     // baseURL:'localhost:6060'
// }

// const axiosPost = (url, data) => axios.post(url, data, config).catch((err) => {
//     // console.log(err.response.data, 'axios error');
//     return err.response;
// });

export const userSignUp = userDate => dispatch => {
    // TODO  返回 promise 后可以在组件中使用.then 继续操作不用经过redux存储
    return axios.post('/api/users',userDate);
    // 可以存储在 redux 中
    // return req('/api/users', userDate, dispatch);
}

// async function req(url, data, dispatch) {
//     let res = await axiosPost(url, data)
//     console.log(res, 'async');
//     dispatch({
//         type: REQ_SING_UP,
//         data: {
//             data: res.data,
//             status: res.status
//         }
//     })
// }

export const userSignUpErr = errData=>dispatch=>{
    dispatch({
        type:REQ_SING_UP_ERR,
        errData
    })
}
export const addFlashMessage = flashMessage=>dispatch=>{
    dispatch({
        type:ADD_FLASH_MESSAGE,
        flashMessage
    })
}
export const filterMessage = id=>({
        type:FILTER_FLASH_MESSAGE,
        id
    });
