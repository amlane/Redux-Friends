import React from 'react';
import { connect } from 'react-redux'

import { addFriend } from '../actions';

class AddFriendForm extends React.Component{
    constructor(){
        super();
        this.state = {
         newFriend: {
         name: "",
         age: "",
         email: ""
            }
        }
    }
    handleInput = e => {
        console.log(e.target.name)
        this.setState({ 
            [e.target.name]: e.target.value
         })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(!this.state.newFriend) return;
        this.props.addFriend(this.state.newFriend)
        this.setState({ newFriend: '' })
    }

    render(){
        return (
            <div>
                <h2>Add a new Friend</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                    placeholder="name"
                    name="name"
                    value={this.state.newFriend.name}
                    onChange={this.handleInput}
                     />
                    <input
                    placeholder="age"
                    name="age"
                    value={this.state.newFriend.age}
                    onChange={this.handleInput}
                    />
                    <input 
                    placeholder="email"
                    name="email"
                    value={this.state.newFriend.email}
                    onChange={this.handleInput}
                    />
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addFriend })(AddFriendForm);