/*
 * @Author: mhc 
 * @Date: 2018-10-17 22:16:02 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-18 21:57:15
 */

import React from 'react';
import { Route } from 'react-router-dom'
import App from './components/App'
import Signup from './components/signup/SignupPage'

export  const Routes =()=>(
    <div className="container">
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
    </div>
)