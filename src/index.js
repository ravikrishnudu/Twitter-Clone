import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import App from "./components/App";
import Login from "./components/Login";
import NewTweet from "./components/NewTweet";
import Tweet from "./components/Tweet";
import Tweets from "./components/Tweets";

function NavBar({ setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(undefined);
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function Main() {
  const [user, setUser] = useState(() => {
    const localuser = JSON.parse(localStorage.getItem("user"));
    if (localuser) {
      return localuser;
    }
  });

  if (user === undefined) {
    return (
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route>
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    );
  }

  return (
    <>
      <NavBar setUser={setUser} />
      <Switch>
        <Route path="/new">
          <NewTweet />
        </Route>
        <Route path="/tweet/:id">
          <Tweet />
        </Route>
        <Route path="/tweets/:username">
          <Tweets />
        </Route>
        <Route path="/tweets">
          <Tweets />
        </Route>
        <Route>
          <Redirect to="/tweets"> </Redirect>
        </Route>
      </Switch>
    </>
  );
}

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("root")
);
