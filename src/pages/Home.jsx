import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <div className={styles.homeActions}>
          <Button
          type="button"
            text="Create Account"
            variant="primary"
            onClick={() => navigate("/signup")}
          />

          <Button
          type="button"
            text="Already Registered? Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
