import React, { PureComponent } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class LevelPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="mainDiv">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="difficulty col-8">
              <div>
                <h1 style={{ color: "#3bd6a4", fontWeight: "900" }}>
                  Memory Game
                </h1>

                <h2 style={{ color: "#3bd6a4" }}>Difficulty</h2>
                <Link
                  to={{
                    pathname: "/game",
                    state: {
                      amount: 5,
                    },
                  }}
                >
                  <button>EASY</button>
                </Link>

                <Link
                  to={{
                    pathname: "/game",
                    state: {
                      amount: 8,
                    },
                  }}
                >
                  <button>MEDIUM</button>
                </Link>
                <Link
                  to={{
                    pathname: "/game",
                    state: {
                      amount: 11,
                    },
                  }}
                >
                  <button>HARD</button>
                </Link>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LevelPage;
