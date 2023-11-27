import React from "react";
import DevCard from "./devCard";
import styles from "./styles/dev.module.css";
import img1 from "../images/flutter-icon.svg";
import img2 from "../images/react.svg";
import img3 from "../images/redux-icon.svg";
import img4 from "../images/nx5.webp";

export default function Dev() {
  return (
    <div>
      <div className={styles.main_div}>
        <h1>Developement</h1>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.outer_div}>
        <DevCard im={img1} title="Flutter" />
        <DevCard im={img2} title="React js" />
        <DevCard im={img3} title="Redux" />
        <DevCard im={img4} title="Next js" />
      </div>
    </div>
  );
}
