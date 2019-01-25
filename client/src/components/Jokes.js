import React from "react";
import JokeCard from "./JokeCard.js";
import SignIn from "./SignIn";
class Jokes extends React.Component {
  async componentDidMount() {
    try {
      this.props.getJokes();
    } catch (err) {
      console.error("Failed to retrieve jokes", err);
    }
  }
  render() {
    if (this.props.isLoggedIn) {
      return (
        <>
          {this.props.jokes.map(joke => (
            <JokeCard key={joke.id} joke={joke.joke} />
          ))}
        </>
      );
    } else {
      return <SignIn />;
    }
  }
}
export default Jokes;
