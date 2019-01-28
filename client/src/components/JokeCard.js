import React from "react";

const JokeCard = props => {
  console.log(props, "JC");
  const { id, joke } = props.joke;
  return (
    <div>
      <h2>Joke:{id}</h2>
      <p>{joke}</p>
    </div>
  );
};
export default JokeCard;
