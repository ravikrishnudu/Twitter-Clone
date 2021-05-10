import Signup from "./Signup";
import Login from "./Login";
import styles from "./App.module.css";
import image from "./twitter.png";
import logo from "./birdlogo.png";

export default function App() {
  return (
    <div className={styles.body}>
      <div>
        <img className={styles.image} src={image} alt="mainImage" />
      </div>
      <div className={styles.userFields}>
        <Login />
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
