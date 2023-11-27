import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import img_1 from "./images/img4.jpg";
import Link from "next/link";
import Dsa from "./components/dsa";
import Dev from "./components/dev";
// import { Album } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.left_div}>
          <div className={styles.heading}>
            <h1>Start your coding</h1>
            <h1>Journey now</h1>
          </div>
          <h2>
            How to Start Coding: The Ultimate Guide for Beginner Programmers
          </h2>
          <p>
            Coding is one of the most valuable skills you can build, and in this
            post you'll learn about how to start learning. If you’re searching
            for “how to learn coding,” it might be because you want to advance
            your career or develop other skills in the computer programming
            world.
          </p>
          <div className={styles.btn_div}>
            <Link className={styles.btn1} href="">
              Start Now
            </Link>
            <Link className={styles.btn1} href="">
              Advanced
            </Link>
          </div>
        </div>
        <div className={styles.right_div}>
          <Image
            src={img_1}
            alt="Picture of the author"
            className={styles.pic1}
          />
        </div>
      </div>
      <p className={styles.bottom}>
        Anyone can learn to code with time, dedication, and internet access. If
        you’re reading this, that includes you. That’s why, in this guide, we’ll
        unpack everything you need to know to start writing code, including:
        This will help you determine which programming language you learn first,
        what sorts of projects you want to complete, and ultimately what you
        want to make of your skills.
      </p>
      <Dsa />
      <Dev />
      <Footer />
    </main>
  );
}
