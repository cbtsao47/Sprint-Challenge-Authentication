import React from "react";
import axios from "axios";

class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    const URL = process.env.REACT_APP_API_URL;
    e.preventDefault();
    axios
      .post(`${URL}/api/login`, this.state)
      .then(res => {
        localStorage.setItem("JWT", res.data.token);
        this.props.handleLogIn();
        this.props.history.push("/jokes");
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Sign In</button>
      </form>
    );
  }
}
export default SignIn;
