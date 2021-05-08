import React, { useState } from "react";
import styles from "./Signup.module.css";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = async (event) => {
    event.preventDefault();
    const user = {
      name: name,
      username: username,
      email: email,
      password: password,
    };
    fetch(`${process.env.REACT_APP_API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form onSubmit={Signup}>
      <div>
        <div className={styles.signupField}>
          <input
            className={styles.signupInputField}
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.signupField}>
          <input
            className={styles.signupInputField}
            type="text"
            placeholder="Enter Your Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={styles.signupField}>
          <input
            className={styles.signupInputField}
            type="text"
            placeholder="Mobile number or email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.signupField}>
          <input
            className={styles.signupInputField}
            type="text"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className={styles.signupButton}>Sign up</button>
      </div>
    </form>
  );
}

export default Signup;
