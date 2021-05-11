import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/App";
import Login from "./components/Login";
import NewTweet from "./components/NewTweet";
import Tweet from "./components/Tweet";
import Tweets from "./components/Tweets";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/new" component={NewTweet} />
        <Route path="/tweet/:id" component={Tweet} />
        <Route path="/tweets/:username" component={Tweets} />
        <Route path="/tweets" component={Tweets} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
