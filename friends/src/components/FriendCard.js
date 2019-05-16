import React from 'react';

function FriendCard(props){
    return (
        <section className="friend-card">
            <li>{props.friend.name}</li>
            <li>{props.friend.age}</li>
            <li>{props.friend.email}</li>
        </section>
    )
}

export default FriendCard;