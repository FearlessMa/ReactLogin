/*
 * @Author: mhc 
 * @Date: 2018-10-17 22:41:51 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-18 22:18:01
 */

import React from 'react';


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.passwordConfirmation === this.state.password) {
            this.props.userSignUp(this.state);
            console.log(this.state);
        } else {
            // alert('两次输入的密码不匹配');
            this.setState({
                passwordConfirmation: '',
                password: ''
            })
        }
    }

    render() {
        const { username, email, password, passwordConfirmation } = this.state;
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <h1>join our community !</h1>
                    <div className="form-group">
                        <div className="control-label">userName</div>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            onChange={this.onChange}
                            value={username}
                        />
                    </div>
                    <div className="form-group">
                        <div className="control-label">Email</div>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <div className="control-label">Password</div>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={this.onChange}
                            value={password}
                        />
                    </div>
                    <div className="form-group">
                        <div className="control-label">Password Confirmation</div>
                        <input
                            type="password"
                            name="passwordConfirmation"
                            className="form-control"
                            onChange={this.onChange}
                            value={passwordConfirmation}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-lg">Sing Up</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}


export default SignUpForm
