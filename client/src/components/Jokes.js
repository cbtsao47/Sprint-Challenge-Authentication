import React from "react";
import JokeCard from "./JokeCard.js";
class Jokes extends React.Component {
  async componentDidMount() {
    const URL = process.env.REACT_APP_API_URL;
    try {
      this.props.getJokes();
    } catch (err) {
      console.error("Failed to retrieve jokes", err);
    }
  }
  render() {
    return (
      <>
        {this.props.jokes.map(joke => (
          <JokeCard key={joke.id} joke={joke} />
        ))}
      </>
    );
  }
}
export default Jokes;
