import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";

//components
import Nav from "./components/Nav";
import Jokes from "./components/Jokes";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
class App extends Component {
  state = {
    isLoggedIn: false,
    jokes: []
  };
  getJokes = () => {
    const URL = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("JWT");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };
    axios.get(`${URL}/api/jokes`, requestOptions).then(
      res => console.log(res)
      // this.setState({
      //   ...state,
      //   jokes:res.data.jokes
      // })
    );
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };
  handleLogIn = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  render() {
    const { isLoggedIn, jokes } = this.state;
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Route
            path="/jokes"
            render={props => (
              <Jokes
                {...props}
                isLoggedIn={isLoggedIn}
                getJokes={this.getJokes}
                jokes={jokes}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <SignIn {...props} handleLogIn={this.handleLogIn} />
            )}
          />
          <Route
            path="/register"
            render={props => (
              <SignUp {...props} handleLogout={this.handleLogout} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
