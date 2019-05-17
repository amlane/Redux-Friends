import React from 'react';

class AddFriendForm extends React.Component{
    state = {
        newFriend: {
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
        if(!this.state.newFriend) return;
        
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

export default AddFriendForm;