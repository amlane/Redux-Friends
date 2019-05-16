import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFriends } from '../actions';

class FriendsPage extends React.Component{

    componentDidMount(){
        this.props.getFriends();
    }



    render(){
        console.log("Friends: ", this.props.friends)
    return (
        <div>
         <h2>Hello From the Friends Page</h2>
        {this.props.friends.map( friend => {
            return (
                <div>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            )
        } )}
        </div>
    )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
})

export default withRouter(connect(mapStateToProps, { getFriends })(FriendsPage));