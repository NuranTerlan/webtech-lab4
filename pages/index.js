import { CelciusFarenheit, MilesKilometers } from "../components/Converter";

import styles from "../styles/home.module.css";

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <h1>
        WebTech
        <br />
        Converter Lab
      </h1>
      <CelciusFarenheit />
      <MilesKilometers />
    </div>
  );
}
