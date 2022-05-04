import styles from "./input.module.css";

const Input = ({ type = "number", name, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
