/*
 * @Author: mhc 
 * @Date: 2018-10-18 22:27:34 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-19 20:41:30
 */

import express from 'express';
import validator from 'validator'
import lodash from 'lodash';
const routes = express.Router();

routes.post('/', (req, res) => {
    console.log(req.body);
    let { error, isValid } = validatorInput(req.body);
    console.log(error,isValid);
    if (!isValid) {
        res.status(400).json({ message: 'error', data: error })
    } else {
        res.json({ message: 'success', data: req.body });
    }
})

const validatorInput = (data) => {
    const { username, email, password, passwordConfirmation } = data;
    let error = {};
    if (validator.isEmpty(username)) {
        error.username = '不能为空';
    }
    if (!validator.isEmail(email)) {
        error.email = '请输入正确的email';
    }
    if (validator.isEmpty(password)) {
        error.password = '不能为空';
    }
    if (validator.isEmpty(passwordConfirmation)) {
        error.passwordConfirmation = '不能为空';
    }
    if (!validator.equals(password, passwordConfirmation)) {
        error.passwordConfirmation = '两次密码不一致';
    }
    return { error, isValid: lodash.isEmpty(error) };
}

export default routes;