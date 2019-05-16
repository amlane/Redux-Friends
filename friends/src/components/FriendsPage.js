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
        
        </div>
    )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
})

export default withRouter(connect(mapStateToProps, { getFriends })(FriendsPage));