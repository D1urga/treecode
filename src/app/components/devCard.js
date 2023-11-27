import Image from "next/image";
import React from "react";
import styles from "./styles/devCard.module.css";

export default function DevCard({ im, title }) {
  return (
    <div>
      <div className={styles.outer_div}>
        <Image src={im} className={styles.pic} />
        <h2>{title}</h2>
      </div>
    </div>
  );
}
