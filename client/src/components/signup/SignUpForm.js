/*
 * @Author: mhc 
 * @Date: 2018-10-17 22:41:51 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-23 21:26:29
 */

import React from 'react';
import { withRouter } from 'react-router-dom';


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            error: {},
            isDisabled: false
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ error: {}, isDisabled: true });
        // 存储在redux中是这样操作就结束了
        // this.props.userSignUp(this.state);
        // 不存储在redux时
        this.props.userSignUp(this.state).then(
            () => { 
                this.setState({ isDisabled: false });
                this.props.addFlashMessage({
                    type:'success',
                    text:" 注册成功！"
                })
                this.props.history.push('/') 
            },
            (err) => {
                this.setState({
                    error: err.response.data.data,
                    isDisabled: false
                })
            }
        )
    }

    render() {
        const { username, email, password, passwordConfirmation, error, isDisabled } = this.state;
        // const { status, data } = this.props.singUpData || {};
        console.log(error);
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
                        {
                            error.username && <span className="form-text text-danger">{error.username}</span>
                        }
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
                        {
                            error.email && <span className="form-text text-danger">{error.email}</span>
                        }
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
                        {
                            error.password && <span className="form-text text-danger">{error.password}</span>
                        }
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
                        {
                            error.passwordConfirmation && <span className="form-text text-danger">{error.passwordConfirmation}</span>
                        }
                    </div>
                    <div className="form-group">
                        <button disabled={isDisabled} className="btn btn-primary btn-lg">{isDisabled ? 'loading' : 'Sing Up'}</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}


export default withRouter(SignUpForm)
