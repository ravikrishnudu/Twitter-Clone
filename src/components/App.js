import styles from "./App.module.css";
import image from "./twitter.png";
export default function App() {
  return (
    <>
      <div className={styles.body}>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div className={styles.userFields}>
            <div>
              <input
                className={styles.userInput}
                type="text"
                placeholder="Phone,email,or username "
              />
            </div>
            <div>
              <input
                className={styles.userInput}
                type="text"
                placeholder="Password"
              />
              <div className={styles.fogetPassword}>Forget Passord?</div>
            </div>
            <div>
              <button className={styles.userLogin}>Log in</button>
            </div>
          </div>

          <div className={styles.bodyText}>
            <div className={styles.mainText}>
              <span>Happening now</span>
            </div>
            <div className={styles.titleText}>
              <span>Join Twitter today.</span>
            </div>

            <div className={styles.divSignUp}>
              <button className={styles.signUp}>Sign up</button>
            </div>
            <div>
              <button className={styles.logIn}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
