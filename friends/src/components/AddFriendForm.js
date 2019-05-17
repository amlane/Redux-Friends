import React from 'react';

class AddFriendForm extends React.Component{
    state = {
        name: "",
        age: "",
        email: ""
    }

    handleInput = e => {
        this.setState({ 
            [e.target.name]: e.target.value
         })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(!this.state) return;
        
    }

    render(){
        return (
            <div>
                <h2>Add a new Friend</h2>
                <form onSubmit={this.handleSubmit}>
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
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default AddFriendForm;