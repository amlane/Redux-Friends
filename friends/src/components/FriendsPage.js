import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { getFriends } from '../actions';

import FriendCard from './FriendCard';

class FriendsPage extends React.Component{

    componentDidMount(){
        this.props.getFriends();
    }



    render(){
        console.log("Friends: ", this.props.friends)
    return (
        <div>
            {this.props.fetchingFriends ? (
            <Loader type="Puff" color="#204963" height="200" width="200" />
            ) 
            : <ul className="friend-card-container">
                {this.props.friends.map( friend => {
                return (
                    <FriendCard key={friend.id} friend={friend} />
                )
                } )}
              </ul>}
    </div>
    )}
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
})

export default withRouter(connect(mapStateToProps, { getFriends })(FriendsPage));