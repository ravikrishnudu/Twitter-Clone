import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/App";
import NewTweet from "./components/NewTweet";
import Tweet from "./components/Tweet";
import Tweets from "./components/Tweets";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/tweets/new">
          <NewTweet />
        </Route>
        <Route exact path="/tweets/:username/:id" component={Tweet} />
        <Route path="/tweets/:username">
          <Tweets />
        </Route>

        <Route path="/tweets">
          <Tweets />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
