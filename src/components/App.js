import styles from "./App.module.css";
import image from "./twitter.png";
import logo from "./birdlogo.png";

export default function App() {
  return (
    <>
      <div className={styles.body}>
        <div>
          <img className={styles.image} src={image} alt="mainImage" />
        </div>
        <div className={styles.userFields}>
          <div className={styles.Login}>Login</div>
          <div className={styles.loginFields}>
            <div>
              <input
                className={styles.loginInputFields}
                type="text"
                placeholder="Phone,email,or username "
              />
            </div>
            <div>
              <input
                className={styles.loginInputFields}
                type="text"
                placeholder="Password"
              />
              <div className={styles.fogetPassword}>Forget Passord?</div>
            </div>
            <div>
              <button className={styles.loginButton}>Log in</button>
            </div>
          </div>

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
              <div className={styles.signupFields}>
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
              <button className={styles.signupButton}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
