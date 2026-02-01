import Button from "../components/Button";
import Input from "../components/Input";
import styles from "../styles/pages/Login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h1>
        Signin to your <br /> PopX account
      </h1>

      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit,
      </p>

      <form className={styles.loginForm}>
        <Input
          label="Email address"
          type="email"
          placeholder="Enter email address"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
        />

        <Button type='button' text="Login" variant="disabled" />
      </form>
    </div>
  );
};

export default Login;
