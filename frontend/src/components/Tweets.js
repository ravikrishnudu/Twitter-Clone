import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TweetCard from "./TweetCard";

async function getTweets(username) {
  return fetch(`http://localhost:8000/tweets?username=${username}`).then(
    (res) => {
      console.log(res);
      return res.json();
    }
  );
}

export default function Tweets() {
  const [tweets, setTweets] = useState("");

  let { username } = useParams();

  console.log(username);
  useEffect(() => {
    getTweets(username).then((tweets) => {
      setTweets(tweets);
    });
  }, []);

  if (!tweets) {
    return <div>Loading..</div>;
  }
  console.log(tweets);
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetCard tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
}
