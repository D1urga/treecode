"use client";
import React from "react";
import styles from "./styles/dsaCard.module.css";

export default function DsaCard({ Icon, topic }) {
  return (
    <div className={styles.outer_div}>
      <Icon className={styles.pic} />
      <h3>{topic}</h3>
    </div>
  );
}
