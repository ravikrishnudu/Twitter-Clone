import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TweetCard from "./TweetCard";

async function getTweet(id) {
  return fetch(`${process.env.REACT_APP_API_URL}/tweets?id=${id}`).then((res) =>
    res.json()
  );
}

export default function Tweet() {
  const [tweet, setTweet] = useState(null);

  let { id } = useParams();
  console.log(id);
  // useEffect(() => {
  //   getTweet(id).then((tweet) => {
  //     setTweet(tweet);
  //   });
  // }, []);
  const fetchTweets = () => {
    getTweet(id).then((tweet) => {
      setTweet(tweet);
    });
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  console.log(tweet);
  if (!tweet) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      {tweet.map((tweet) => (
        <TweetCard tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
}
