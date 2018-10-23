/*
 * @Author: mhc 
 * @Date: 2018-10-17 22:16:02 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-23 21:48:55
 */

import React from 'react';
import { Route } from 'react-router-dom'
import App from './components/App'
import Signup from './components/signup/SignupPage'
import { FlashMessage } from './components/flashMessage'

export const Routes = (props) => (
    <div className="container">
        <div>
            <FlashMessage/>
        </div>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
    </div>
)