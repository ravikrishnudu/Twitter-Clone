import React from "react";
import { Link } from "react-router-dom";
import { Listbox, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import styles from "./TweetCard.module.css";

function TweetCard({ tweet, fetchTweets }) {
  const handleDelete = () => {
    const deleteTweet = {
      id: tweet.id,
    };
    try {
      fetch(`${process.env.REACT_APP_API_URL}/tweet/${tweet.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteTweet),
      });
    } catch (error) {
      console.log(error);
    }
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
            <button className={styles.tweetButtons}>
              {" "}
              <FaRegComment />
            </button>
            <button className={styles.tweetButtons}>
              <AiOutlineRetweet />
            </button>
            <button className={styles.tweetButtons}>
              <FaRegHeart />{" "}
            </button>
            <button className={styles.tweetButtons}>
              {" "}
              <IoShareOutline />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TweetCard;
