import React from 'react';

function FriendCard(props){
    return (
        <section className="friend-card">
            <li><span>Name: </span>{props.friend.name}</li>
            <li><span>Age: </span>{props.friend.age}</li>
            <li><span>Email: </span>{props.friend.email}</li>
        </section>
    )
}

export default FriendCard;