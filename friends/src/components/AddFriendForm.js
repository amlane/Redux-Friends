import React from 'react';
import { connect } from 'react-redux'

import { addFriend } from '../actions';

class AddFriendForm extends React.Component{
    constructor(){
        super();
        this.state = {
         name: "",
         age: "",
         email: ""
        }
    }

    handleInput = e => {
        this.setState({ 
            [e.target.name]: e.target.value
         })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.name === "" || this.state.age === "" || this.state.email === "") return;
        this.props.addFriend(this.state)
        this.setState({ name: "", age: "", email: "" })
        window.location.pathname = "/friends"
    }

    render(){
        return (
                <form onSubmit={this.handleSubmit} className="friend-form">
                <h2>Add a new Friend</h2>
                    <input
                    placeholder="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                     />
                    <input
                    placeholder="age"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleInput}
                    />
                    <input 
                    placeholder="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInput}
                    />
                    <button className="add-friend">+</button>
                </form>
        )
    }
}

export default connect(null, { addFriend })(AddFriendForm);