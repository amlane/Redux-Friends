import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFriends } from '../actions';

import FriendCard from './FriendCard';

class FriendsPage extends React.Component{

    componentDidMount(){
        this.props.getFriends();
    }



    render(){
        console.log("Friends: ", this.props.friends)
    return (

        <ul className="friend-card-container">
        {this.props.friends.map( friend => {
            return (
                <FriendCard key={friend.id} friend={friend} />
            )
        } )}
        </ul>

    )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
})

export default withRouter(connect(mapStateToProps, { getFriends })(FriendsPage));