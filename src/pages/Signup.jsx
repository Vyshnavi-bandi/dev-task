import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "../styles/pages/Signup.module.scss";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.signupContainer}>
      <h1>
        Create your <br /> PopX account
      </h1>

      <form className={styles.signupForm}>
        <Input
          label="Full Name"
          placeholder="Marry Doe"
          required
        />

        <Input
          label="Phone number"
          type="tel"
          placeholder="Marry Doe"
          required
        />

        <Input
          label="Email address"
          type="email"
          placeholder="Marry Doe"
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Marry Doe"
          required
        />

        <Input
          label="Company name"
          placeholder="Marry Doe"
        />

        <div className={styles.agencySection}>
          <p>
            Are you an Agency?<span>*</span>
          </p>

          <div className={styles.radioGroup}>
            <label>
              <input type="radio" name="agency" defaultChecked />
              <span>Yes</span>
            </label>

            <label>
              <input type="radio" name="agency" />
              <span>No</span>
            </label>
          </div>
        </div>

        <Button
        type='button'
          text="Create Account"
          variant="primary"
          onClick={() => navigate("/profile")}
        />
      </form>
    </div>
  );
};

export default Signup;
