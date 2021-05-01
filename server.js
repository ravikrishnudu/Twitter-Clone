const express = require("express");
const { createUser, getUsers, createTweet, getTweets } = require("./handler");
const { User, Tweets } = require("./Model");

const PORT = 8000;
//middleware
const app = express();

app.use(express.json());

app.post("/user", async (req, res) => {
  // res.json({ msg: "hello" });
  console.log(req.body);
  const user = await createUser(req.body);
  console.log(user);
  res.status(201).json(user);
});

app.get("/user", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.patch("/user/:id", function (req, res) {
  let { id } = req.params;
  User.update(id).then((user) => {
    res.json(user);
  });
});

app.delete("/user/:id", function (req, res) {
  let { id } = req.params;
  User.findByPk(id).then((user) => {
    user.destroy().then(() => {
      res.json(user);
    });
  });
});

// Tweets
app.post("/tweet", async (req, res) => {
  const tweet = await createTweet(req.body);
  res.status(201).json(tweet);
  // res.json({ msg: "why didnt you get posts" });
});

app.get("/tweet", async (req, res) => {
  const tweets = await getTweets();
  res.json(tweets);
});

app.delete("/tweets/:id", function (req, res) {
  let { id } = req.params;
  Tweets.findByPk(id).then((tweet) => {
    tweet.destroy().then(() => {
      res.json(tweet);
    });
  });
});

app.listen(PORT, () => {
  console.log(`server stated on ${PORT}`);
});
