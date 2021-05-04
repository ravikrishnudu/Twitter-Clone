import React, { useState, useEffect } from "react";
import styles from "./Tweets.module.css";

async function getTweets() {
  return fetch(`http://localhost:8000/tweets?username=""`).then((res) => {
    console.log(res);
    return res.json();
  });
}

function Tweet({ tweet }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.tweetCard}>
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
        </div>
      </div>
    </>
  );
}
export default function Tweets() {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    getTweets().then((tweets) => {
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
