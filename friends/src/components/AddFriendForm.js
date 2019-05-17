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

    cancelForm = e => {
        e.preventDefault();
        window.location.pathname = "/friends"
    }

    render(){
        return (
            <div className="friend-form">
            <button className="cancel-btn" onClick={this.cancelForm}>x</button>
                <form onSubmit={this.handleSubmit}>
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
                    <button className="add-friend-btn">+</button>
                </form>
                </div>
        )
    }
}

export default connect(null, { addFriend })(AddFriendForm);