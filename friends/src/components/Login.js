import React from 'react';
import { connect } from 'react-redux';

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
    }

    render(){
        return (
            <div>
                <h2>Login Page YAY!</h2>
                <form onSubmit={this.handleClick}>
                    <input />
                    <input />
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { login } )(Login);