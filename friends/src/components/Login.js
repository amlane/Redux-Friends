import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    render(){
        return (
            <div>
                <h2>Login Page YAY!</h2>
                <form>
                    <input />
                    <input />
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}

export default Login;