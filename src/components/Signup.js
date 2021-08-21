import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import faker from "faker";
import styles from "./Signup.module.css";
import logo from "./birdlogo.png";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const [profileImage] = useState(faker.image.avatar());

  const handleSignUp = async (event) => {
    event.preventDefault();
    const user = {
      name,
      username,
      email,
      password,
      profileImage,
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
        history.push("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className={styles.signup}>
      <form onSubmit={handleSignUp}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className={styles.titleText}>
          <span>Join Twitter today.</span>
        </div>
        <div className={styles.signupField}>
          <input
            className={styles.signupInputField}
            type="text"
            required
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.signupField}>
          <input
            className={styles.signupInputField}
            type="text"
            required
            placeholder="Enter Your Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={styles.signupField}>
          <input
            className={styles.signupInputField}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.signupField}>
          <input
            className={styles.signupInputField}
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className={styles.signupButton}>Sign up</button>
        <Link className={styles.createAccount} to="/login">
          Already hava an Account? Login
        </Link>
      </form>
    </div>
  );
}

export default Signup;
