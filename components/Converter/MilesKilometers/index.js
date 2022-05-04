import { useState } from "react";

import Input from "../../Input";

import { decimalRound } from "../converterExtensions";

import styles from "./mk.module.css";

const MilesKilometers = () => {
  const [miles, setMiles] = useState(0);
  const [kilometers, setKilometers] = useState(1.61);

  const onMilesChange = (e) => {
    let tempMiles = e.target.value;

    setMiles(tempMiles);
    setKilometers(decimalRound(tempMiles * 1.609, 2));
  };

  const onKilometersChange = (e) => {
    let tempKilometers = e.target.value;

    setKilometers(tempKilometers);
    setMiles(decimalRound(tempKilometers / 1.609, 2));
  };

  return (
    <div className={styles.container}>
      <Input name="Miles" value={miles} onChange={onMilesChange} />
      <Input
        name="Kilometers"
        value={kilometers}
        onChange={onKilometersChange}
      />
    </div>
  );
};

export default MilesKilometers;
