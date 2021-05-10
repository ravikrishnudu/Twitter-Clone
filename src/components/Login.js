import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
    };
    try {
      //   const response =
      await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // if (response.status === 200) {
      //   history.push("/tweets");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
            <button className={styles.loginButton}>Log in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
