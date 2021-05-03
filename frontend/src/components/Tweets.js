import React, { useState, useEffect } from "react";

async function getTweets() {
  return fetch(`http://localhost:8000/tweets?username=ravi`).then((res) => {
    console.log(res);
    res.json();
  });
}

export default function Tweets() {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    getTweets().then((tweets) => {
      setTweets(tweets);
    });
  }, []);
  console.log(tweets);
  return (
    <div>
      <h1>get tweets by id</h1>
    </div>
  );
}
