import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import friends from "./friends.json";
// import Modal from "./components/Modal";
import Icons from "./components/Icons";

// declare a global clickArr
let clickArr = [];

const highScoreMessage = "Congrats! You achieved the highest possible score!";
const whoopsMessage = " Whoops, You've clicked that one already";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    show: "false",
    message: ""
  };

  // Set new array to the shuffled friends array
  shuffleFriends() {
    this.setState({
      friends: this.shuffle(friends)
    })
  }

  //An Array shuffle function
  shuffle(arr) {
    let currentIndex = arr.length;
    let temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  
    return arr;
  
  };

  // Code out a onclick function that will change the state.friends.clicked to true
  handleCardClicked = id => {

    // If the card has already been selected, set score to 0, clear the clickArr and show modal
    if (clickArr.includes(id)) {
      this.setState({score: 0, message: whoopsMessage});
      clickArr = [];
      this.handleShow();
    // else: increment the score, adjust highscore if it's the new highscore, add the card to clickArr, if highscore = 12, display modal
    } else {
      const newScore = this.state.score + 1;
      this.setState({score: newScore})
      if(this.state.highscore < newScore) {
        this.setState({highscore: newScore});
        if (this.state.highscore === 12) {
          this.setState({message: highScoreMessage})
          this.handleShow();
        }
      }
      clickArr.push(id);
    }
    // Shuffle the cards
    this.shuffleFriends();
  }

  handleShow = () => this.setState({show: "true"});

  handleClose = () => this.setState({show: "false"});

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Wrapper>
          {this.state.friends.map(friend => (
          <FriendCard
            cardClicked={this.handleCardClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={Icons[friend.image]}
          />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
