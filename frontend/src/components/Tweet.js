import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import styles from "./Tweet.module.css";
import Tweets from "./Tweets";

async function getTweet(id) {
  return fetch(`http://localhost:8000/tweets/${id}`).then((res) => res.json());
}

export default function Tweet() {
  const [tweet, setTweet] = useState(null);

  let { id } = useParams();
  const fetchTweet = () => {
    getTweet(id).then((tweet) => {
      setTweet(tweet);
    });
  };
  useEffect(() => {
    fetchTweet();
  }, []);

  return (
    <div>
      <Tweets tweet={tweet} fetchTweet={fetchTweet} />
      <h1>hi</h1>
    </div>
  );
}
