const axios = require("axios");
const db = require("../database/dbConfig");
const bcrypt = require("bcryptjs");
const { authenticate, generateToken } = require("../auth/authenticate");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

async function register(req, res) {
  const userInfo = req.body;
  try {
    const user = await db("users")
      .where({ username: userInfo.username })
      .first();
    if (user) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const hash = bcrypt.hashSync(userInfo.password);
      userInfo.password = hash;
      const result = await db("users").insert(userInfo);
      res.status(201).json({ message: "User created" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error registering. something is wrong with the server",
      error: err
    });
  }
  // implement user registration
}

async function login(req, res) {
  const credentials = req.body;
  try {
    const user = await db("users")
      .where({ username: credentials.username })
      .first();
    if (user && bcrypt.compareSync(credentials.password, user.password)) {
      const token = await generateToken(user);
      res
        .status(200)
        .json({ message: `${user.username} has logged in`, token });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error loging in. something is wrong with the server",
      error: err
    });
  }

  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
