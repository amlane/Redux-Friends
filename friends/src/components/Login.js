import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleClick = e => {
        e.preventDefault();
        console.log("Ouch you clicked me too hard.")
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected')
        })
    }

    render(){
        return (
            <div>
                <h2>Login Page YAY!</h2>
                <form onSubmit={this.handleClick}>
                    <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    placeholder="...username"
                    />
                    <input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    placeholder="...password"
                    />
                    <button>
                    {this.props.isLoggingIn ? (
                        <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ) : (
                        "Sign In"
                    )}
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})

export default connect(mapStateToProps, { login } )(Login);