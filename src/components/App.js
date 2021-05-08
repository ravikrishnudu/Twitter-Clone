import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./App.module.css";
import image from "./twitter.png";
import logo from "./birdlogo.png";
import Signup from "./Signup";

export default function App() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    history.push("/tweets");
  };
  const handleLogin = async (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.status === 200) {
        history.push("/tweets");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.body}>
      <div>
        <img className={styles.image} src={image} alt="mainImage" />
      </div>
      <div className={styles.userFields}>
        <div className={styles.Login}>Login</div>

        <form onSubmit={handleLogin}>
          <div className={styles.loginFields}>
            <div>
              <input
                className={styles.loginInputFields}
                type="text"
                placeholder="Phone,email,or username "
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <input
                className={styles.loginInputFields}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className={styles.fogetPassword}>Forget Passord?</div>
            </div>
            <div>
              <button className={styles.loginButton} onClick={handleClick}>
                Log in
              </button>
            </div>
          </div>
        </form>
        <div className={styles.signUp}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className={styles.happeningText}>
            <span>Happening now</span>
          </div>
          <div className={styles.titleText}>
            <span>Join Twitter today.</span>
          </div>

          <div className={styles.userSignup}>
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
}
