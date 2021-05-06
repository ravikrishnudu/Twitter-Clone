import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import styles from "./Tweets.module.css";

async function getTweets(username) {
  return fetch(`http://localhost:8000/tweets?username=${username}`).then(
    (res) => {
      console.log(res);
      return res.json();
    }
  );
}

function Tweet({ tweet }) {
  return (
    <>
      <div className={styles.card}>
        <Link className={styles.tweetCard} to={`/tweets/username/${tweet.id}`}>
          <div className={styles.userNameId}>
            <div className={styles.name}>Jack Ryan</div>
            <div className={styles.userName}>@jackryan</div>
            <div className={styles.options}>...</div>
          </div>
          <div className={styles.tweetText}>{tweet.text}</div>
          <div className={styles.buttons}>
            <button className={styles.tweetButtons}>Comment</button>
            <button className={styles.tweetButtons}>ReTweet</button>
            <button className={styles.tweetButtons}>Like</button>
            <button className={styles.tweetButtons}>Share</button>
          </div>
        </Link>
      </div>
    </>
  );
}
export default function Tweets() {
  const [tweets, setTweets] = useState(null);

  let { username } = useParams();
  // console.log(username);
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
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
}
