import React from "react";
import styles from "./TweetCard.module.css";
// import { Link } from "react-router-dom";

function TweetCard({ tweet }) {
  return (
    <div>
      <div className={styles.card}>
        <div
          className={styles.tweetCard}
          // to={`/tweets/username/${tweet.id}`}
        >
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
    </div>
  );
}

export default TweetCard;
