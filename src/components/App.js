import styles from "./App.module.css";
import image from "./twitter.png";
import logo from "./birdlogo.png";
import Signup from "./Signup";

export default function App() {
  return (
    <form onSubmit={}>
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
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
