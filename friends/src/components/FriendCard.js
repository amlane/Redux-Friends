import React from 'react';

function FriendCard(props){
    return (
        <div className="friend-card">
            <p>{props.friend.name}</p>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}

export default FriendCard;