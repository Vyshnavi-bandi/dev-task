import styles from '../styles/components/Button.module.scss'
const Button = ({ text, onClick, variant = "primary", type = "button" }) => {
  return (
    <button type={type} className={`${styles.btn} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
