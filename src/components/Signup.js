import React from "react";
import styles from "./Signup.module.css";

function Signup() {
  return (
    <div>
      <div className={styles.signupField}>
        <input
          className={styles.signupInputField}
          type="text"
          placeholder="Enter Your Name"
        />
      </div>
      <div className={styles.signupField}>
        <input
          className={styles.signupInputField}
          type="text"
          placeholder="Enter Your Username"
        />
      </div>
      <div className={styles.signupField}>
        <input
          className={styles.signupInputField}
          type="text"
          placeholder="Mobile number or email address"
        />
      </div>
      <div className={styles.signupField}>
        <input
          className={styles.signupInputField}
          type="text"
          placeholder="Enter Your Name"
        />
      </div>
    </div>
  );
}

export default Signup;
