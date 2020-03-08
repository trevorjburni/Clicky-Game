import React from "react";
import "./style.css";

// Need to add onClick ability to the card
function FriendCard(props) {
  return (
      <div className="img-container" onClick={() => props.cardClicked(props.id)}>
          <img alt={props.name} src={props.image} />
      </div>
  );
}

export default FriendCard;
