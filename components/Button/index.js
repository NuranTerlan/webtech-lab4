import Link from "next/link";

import styles from "./button.module.css";

const Button = ({ name, link = "" }) => {
  const button = <button styles={styles.button}>{name}</button>;

  return <>{link ? <Link href={link}>{button}</Link> : button}</>;
};

export default Button;
