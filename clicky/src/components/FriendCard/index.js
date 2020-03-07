import React from "react";
import "./style.css";

// Need to add onClick ability to the card
function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.cardClicked(props.id)}>
      <div className="img-container">
          <img alt={props.name} src={props.image} />
      </div>
      
    </div>
  );
}

export default FriendCard;
