import React from "react";
import styles from "./TweetCard.module.css";
import { Link } from "react-router-dom";
import { Listbox, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";

function TweetCard({ tweet, fetchTweets }) {
  const handleDelete = () => {
    const deleteTweet = {
      id: tweet.id,
    };

    fetch(`${process.env.REACT_APP_API_URL}/tweet/${tweet.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteTweet),
    })
      .then((data) => {
        console.log("Succes:", data);
        fetchTweets();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div className={styles.card}>
        <Link className={styles.tweetCard} to={`/tweets/username/${tweet.id}`}>
          <div className={styles.userNameId}>
            <div className={styles.name}>Jack Ryan</div>
            <div className={styles.userName}>@jackryan</div>
            <div className={styles.options}>
              <Listbox defaultValue="...">
                {" "}
                <ListboxOption value="...">...</ListboxOption>{" "}
                <ListboxOption onClick={handleDelete} value="delete">
                  delete
                </ListboxOption>{" "}
              </Listbox>
            </div>
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
    </div>
  );
}

export default TweetCard;
