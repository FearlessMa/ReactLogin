/*
 * @Author: mhc 
 * @Date: 2018-10-18 22:27:34 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-18 22:46:38
 */

import express from 'express';

const routes = express.Router();

routes.post('/', (req, res) => {
    console.log(req.body);
    res.json({ msg: 'success', data: req.body });
})
export default routes;