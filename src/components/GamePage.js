import { logDOM } from "@testing-library/react";
import React, { PureComponent } from "react";
import Card from "./Card";
import $ from "jquery";
import Timer from "react-compound-timer";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

class GamePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { name: "001-youtube" },
        { name: "002-yelp" },
        { name: "003-wordpress" },
        { name: "004-wikipedia" },
        { name: "005-whatsapp" },
        { name: "006-vine" },
        { name: "007-vimeo" },
        { name: "008-twitter" },
        { name: "009-tumblr" },
        { name: "010-trello" },
        { name: "011-stumbleupon" },
        { name: "012-spotify" },
        { name: "013-soundcloud" },
        { name: "014-snapchat" },
        { name: "015-skype" },
        { name: "016-shutterstock" },
        { name: "017-scribd" },
        { name: "018-reddit" },
        { name: "019-quora" },
        { name: "020-plaxo" },
      ],
      shuffledCards: [],
      tempCard: "",
      tempId: "",
      counter: 0,
      trigger: false,
    };
  }

  componentDidMount = () => {
    var cardsList;
    switch (this.props.location.state.amount) {
      case 5:
        cardsList = this.state.cards.slice(0, 5);
        break;
      case 8:
        cardsList = this.state.cards.slice(0, 8);
        break;
      default:
        cardsList = this.state.cards.slice(0, 11);
        break;
    }
    cardsList = [...cardsList, ...cardsList];
    cardsList.sort((a, b) => 0.5 - Math.random());
    this.setState({ shuffledCards: cardsList });
  };

  countMatch = (C) => {
    console.log(C);
    this.setState({ count: C });
  };

  FlipBack = (id1, id2) => {
    document.getElementById(id1).style.transform = "rotateY(0deg)";
    document.getElementById(id2).style.transform = "rotateY(0deg)";
    this.setState({ tempCard: "", tempId: "" });
    document.querySelector(".noclick").style.display = "none";
  };

  getTempCard = (card, id) => {
    let counter = this.state.counter;
    if (this.state.tempCard === "") {
      this.setState({ tempCard: card, tempId: id });
    } else if (card === this.state.tempCard) {
      counter++;
      if (counter === this.props.location.state.amount) {
        this.setState({ trigger: true });
      }
      this.setState({ tempCard: "", tempId: "", counter: counter });
    } else if (card !== this.state.tempCard) {
      $(document).ready(function () {
        $("body").append('<div class="noclick" />');
        document.querySelector(".noclick").style.display = "block";
      });

      setTimeout(() => {
        this.FlipBack(id, this.state.tempId);
      }, 1500);
    }
  };

  handleClose = () => {
    this.setState({ trigger: false });
  };

  render() {
    console.log(this.state.counter);
    return (
      <div>
        {this.state.trigger ? (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        ) : null}

        <Modal show={this.state.trigger} onHide={this.handleClose}>
          <Modal.Header
            style={{
              backgroundColor: "#f9ffc0",
            }}
            closeButton
          >
            <Modal.Title>Great job</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#d0ffb6" }}>
            Woohoo, you have finished the game. Let's have another one
          </Modal.Body>
          <Modal.Footer
            style={{ backgroundColor: "#f9ffc0", justifyContent: "center" }}
          >
            <Button variant="secondary" onClick={this.handleClose}>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Play
              </Link>
            </Button>
          </Modal.Footer>
        </Modal>
        <div id="header">
          <h2 id="headerCounter">Score:{this.state.counter}</h2>
          <h2>
            Time:{" "}
            <span style={{ color: "grey" }}>
              <Timer startImmediately={true}>
                <Timer.Minutes />:
                <Timer.Seconds />
              </Timer>
            </span>
          </h2>
        </div>
        <div className="cardParentDiv">
          {this.state.shuffledCards.map((element, index) => {
            console.log(index);
            return (
              <div className="scene" key={index}>
                <Card
                  returnedCard={this.getTempCard}
                  counter={this.countMatch}
                  card={element}
                  location={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GamePage;
