import { useState } from "react";

import Input from "../../Input";

import { decimalRound } from "../converterExtensions";

import styles from "./cf.module.css";

const CelciusFarenheit = () => {
  const [celcius, setCelcius] = useState(0);
  const [farenheit, setFarenheit] = useState(32);

  const onCelciusChange = (e) => {
    let tempCelcius = e.target.value;

    setCelcius(tempCelcius);
    setFarenheit(decimalRound((tempCelcius * 9) / 5 + 32, 2));
  };

  const onFarenheitChange = (e) => {
    let tempFarenheit = e.target.value;

    setFarenheit(tempFarenheit);
    setCelcius(decimalRound(((tempFarenheit - 32) * 5) / 9, 2));
  };

  return (
    <div className={styles.container}>
      <Input name="Celcius" value={celcius} onChange={onCelciusChange} />
      <Input name="Farenheit" value={farenheit} onChange={onFarenheitChange} />
    </div>
  );
};

export default CelciusFarenheit;
