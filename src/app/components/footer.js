"use client";
import React from "react";
import Icons from "./icons";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPagelines,
  FaTwitter,
  FaXbox,
} from "react-icons/fa";
import styles from "./styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.main_div}>
        <div className={styles.div1}>
          <div className={styles.title}>
            <Icons Icon={FaPagelines} font={40} />
            <h1>TreeCode</h1>
          </div>
          <p>
            The best place to learn data structures, algorithms, most asked
            coding interview questions, real interview experiences free of cost.
          </p>
        </div>
        <div className={styles.div2}>
          <h4>Dsa Playlist</h4>
          <p>Array Series</p>
          <p>Tree Series</p>
          <p>Graphs Series</p>
          <p>Dynamic Programming</p>
        </div>
        <div className={styles.div2}>
          <h4>Developement Playlist</h4>
          <p>Array Series</p>
          <p>Tree Series</p>
          <p>Graphs Series</p>
          <p>Dynamic Programming</p>
        </div>
        <div className={styles.div4}>
          <h4>Contribute</h4>
          <p>Write an article</p>
          <h4>Follow Us</h4>
          <div className={styles.icon_list}>
            <Icons Icon={FaInstagram} font={26} />
            <Icons Icon={FaLinkedin} font={26} />
            <Icons Icon={FaFacebook} font={26} />
            <Icons Icon={FaTwitter} font={26} />
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div id="foot" className={styles.intro}>
        <p>This website is developed by Anoop Kumar Chaudhary</p>
      </div>
    </div>
  );
}
