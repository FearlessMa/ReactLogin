/*
 * @Author: mhc 
 * @Date: 2018-10-17 21:36:07 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-18 22:45:33
 */

import express from 'express';
import { test } from './test'
import routes from './route'
import bodyParser from 'body-parser'

const app = new express();

app.use(bodyParser.json())
app.use('/api/users', routes)

app.get('/', (req, res) => {
    res.send('hello ');
    console.log(1)
});

// app.get('/user',test);

app.listen(6060, () => {
    console.log('server running at localhost :6060')
})