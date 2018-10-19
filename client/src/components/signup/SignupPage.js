/*
 * @Author: mhc 
 * @Date: 2018-10-17 22:27:20 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-19 21:24:10
 */

import React from 'react';
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux';
import { userSignUp } from '../../actions';

class SignupPage extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <SignUpForm singUpData={this.props.singUpData} userSignUp={this.props.userSignUp} />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    singUpData: state.auth.singUpData
})

export default connect(mapStateToProps, { userSignUp })(SignupPage)
