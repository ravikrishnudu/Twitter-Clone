import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TweetCard from "./TweetCard";
// import Sidebar from "./Sidebar";

import styles from "./Tweets.module.css";

async function getTweets(username) {
  if (username) {
    return fetch(
      `${process.env.REACT_APP_API_URL}/tweets?username=${username}`
    ).then((res) => {
      // console.log(res);
      return res.json();
    });
  } else {
    return fetch(`${process.env.REACT_APP_API_URL}/tweets`).then((res) => {
      // console.log(res);
      return res.json();
    });
  }
}

export default function Tweets({ user, fetchTweets }) {
  const [tweets, setTweets] = useState("");

  let { username } = useParams();

  // console.log(username);
  useEffect(() => {
    getTweets(username).then((tweets) => {
      setTweets(tweets);
    });
  }, [username]);

  if (!tweets) {
    return <div>Loading..</div>;
  }
  console.log(tweets);
  // console.log(user);
  return (
    <div className={styles.container}>
      <div>{/* <Sidebar /> */}</div>
      <div>
        {tweets.map((tweet) => (
          <TweetCard tweet={tweet} user={user} key={tweet.id} />
        ))}
      </div>
    </div>
  );
}
