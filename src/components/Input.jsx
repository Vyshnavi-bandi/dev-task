import styles from "../styles/components/Input.module.scss";

const Input = ({
  label,
  type = "text",
  placeholder,
  required = false,
  name,
}) => {
  return (
    <div className={styles.formGroup}>
      {label && (
        <label>
          {label}
          {required && <span>*</span>}
        </label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
