import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styles from "./Login.module.css";
import logo from "./birdlogo.png";

function Login({ setUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        const res = await response.json();
        localStorage.setItem("user", JSON.stringify(res));
        console.log(res);
        setUser(res);
        history.push("/tweets");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleLogin}>
        <div className={styles.loginFields}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className={styles.text}>
            <h4>Log in to Twitter</h4>
          </div>
          <div>
            <input
              className={styles.loginInputFields}
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <input
              className={styles.loginInputFields}
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <button className={styles.loginButton}>Log in</button>
          </div>
          <div className={styles.fogetPassword}>
            <div className={styles.fogetPasswordText}>Forget Passord?</div>
            <Link to="/" className={styles.signupText}>
              Signup for Twitter
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
