const { User, Tweets } = require("./Model");
// User
async function createUser(data) {
  const user = await User.create({ name: "rajesh" });
  console.log(user);
  return user.toJSON();
}

async function getUsers() {
  const users = await User.findAll();
  return users;
}
// Tweets
async function createTweet(data) {
  const tweet = await Tweets.create(data);
  return tweet.toJSON();
}

async function getTweets() {
  const tweets = await Tweets.findAll();
  return tweets;
}

module.exports = { createUser, getUsers, createTweet, getTweets };
