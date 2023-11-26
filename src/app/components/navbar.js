"use client";
import React from "react";
import styles from "./styles/navbar.module.css";
import Icons from "./icons";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaInstagram, FaLinkedin, FaPagelines } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <Icons Icon={FaPagelines} font={40} />
          <h1>TreeCode</h1>
        </div>
        <ul className={isShowing ? styles.list : styles.list1}>
          <li
            onClick={() => {
              setIsShowing(!isShowing);
              document.getElementById("foot").scrollIntoView();
            }}
          >
            <Link href="">Leetcode</Link>
          </li>
          <li
            onClick={() => {
              setIsShowing(!isShowing);
            }}
          >
            <Link href="">Dsa</Link>
          </li>
          <li
            onClick={() => {
              setIsShowing(!isShowing);
            }}
          >
            <Link href="">Tricks</Link>
          </li>
          <li
            onClick={() => {
              setIsShowing(!isShowing);
            }}
          >
            <Link href="">Developement</Link>
          </li>
        </ul>
        <ul className={styles.logo_list}>
          <li>
            <Link
              href="https://instagram.com/anoopchaudhary1?igshid=OGQ5ZDc2ODk2ZA=="
              target="blank"
            >
              <Icons Icon={FaInstagram} font={28} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/anoop-kumar-189159238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
            >
              <Icons Icon={FaLinkedin} font={28} />
            </Link>
          </li>
        </ul>
        <div
          className={styles.logo_div}
          onClick={() => {
            setIsShowing(!isShowing);
          }}
        >
          <Icons Icon={TiThMenu} font={26} />
        </div>
      </div>
    </div>
  );
}
