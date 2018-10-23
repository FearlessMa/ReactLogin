/*
 * @Author: mhc 
 * @Date: 2018-10-17 22:27:20 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-23 21:23:07
 */

import React from 'react';
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux';
import { userSignUp, userSignUpErr, addFlashMessage } from '../../actions';

class SignupPage extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <SignUpForm singUpData={this.props.singUpData} userSignUp={this.props.userSignUp}
                        userSignUpErr={this.props.userSignUpErr}
                        addFlashMessage={this.props.addFlashMessage}
                    />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    singUpData: state.auth.singUpData
})

export default connect(mapStateToProps, { userSignUp, userSignUpErr, addFlashMessage })(SignupPage)
