import React from "react";
import styles from "./styles/dsa.module.css";
import DsaCard from "./dsaCard";
import {
  FaBlackberry,
  FaBraille,
  FaCubes,
  FaInfinity,
  FaInstagram,
  FaLayerGroup,
  FaMedal,
  FaTree,
} from "react-icons/fa";

export default function Dsa() {
  return (
    <div>
      <div className={styles.outer_div}>
        <h1>Data Structures & Algorithms</h1>
        <div className={styles.divider}></div>
        <div className={styles.cards}>
          <DsaCard Icon={FaLayerGroup} topic="Arrays" />
          <DsaCard Icon={FaLayerGroup} topic="Strings" />
          <DsaCard Icon={FaLayerGroup} topic="Hash Table" />
          <DsaCard Icon={FaLayerGroup} topic="Dynamic Programming" />
          <DsaCard Icon={FaLayerGroup} topic="Maths" />
          <DsaCard Icon={FaLayerGroup} topic="Sorting" />
          <DsaCard Icon={FaLayerGroup} topic="Greedy" />
          <DsaCard Icon={FaLayerGroup} topic="Depth-First-Search" />
          <DsaCard Icon={FaLayerGroup} topic="Binary Search" />
          <DsaCard Icon={FaLayerGroup} topic="Database" />
          <DsaCard Icon={FaLayerGroup} topic="Breath-First-Search" />
          <DsaCard Icon={FaLayerGroup} topic="Tree" />
          <DsaCard Icon={FaLayerGroup} topic="Matrix" />
          <DsaCard Icon={FaLayerGroup} topic="Two-Pointer" />
          <DsaCard Icon={FaLayerGroup} topic="Bit Manipulation" />
          <DsaCard Icon={FaLayerGroup} topic="Binary Tree" />
          <DsaCard Icon={FaLayerGroup} topic="Heap" />
          <DsaCard Icon={FaLayerGroup} topic="Stack" />
          <DsaCard Icon={FaLayerGroup} topic="Prefix Sum" />
          <DsaCard Icon={FaLayerGroup} topic="Graph" />
          <DsaCard Icon={FaLayerGroup} topic="Simulation" />
          <DsaCard Icon={FaLayerGroup} topic="Design" />
          <DsaCard Icon={FaLayerGroup} topic="Counting" />
          <DsaCard Icon={FaLayerGroup} topic="Sliding Window" />
          <DsaCard Icon={FaLayerGroup} topic="Backtracking" />
          <DsaCard Icon={FaLayerGroup} topic="Union-Find" />
          <DsaCard Icon={FaLayerGroup} topic="LinkedList" />
          <DsaCard Icon={FaLayerGroup} topic="Enumeration" />
          <DsaCard Icon={FaLayerGroup} topic="Ordered Set" />
          <DsaCard Icon={FaLayerGroup} topic="Monotonic Stack" />
          <DsaCard Icon={FaLayerGroup} topic="Divide & Conquer" />
          <DsaCard Icon={FaLayerGroup} topic="Recursion" />
          <DsaCard Icon={FaLayerGroup} topic="Number Theory" />
          <DsaCard Icon={FaLayerGroup} topic="Bit Mask" />
          <DsaCard Icon={FaLayerGroup} topic="Queue" />
          <DsaCard Icon={FaLayerGroup} topic="Binary Search Tree" />
          <DsaCard Icon={FaLayerGroup} topic="Segment Tree" />
          <DsaCard Icon={FaLayerGroup} topic="Memoization" />
          <DsaCard Icon={FaLayerGroup} topic="Binary Indexed Tree" />
          <DsaCard Icon={FaLayerGroup} topic="Geometry" />
          <DsaCard Icon={FaLayerGroup} topic="Topological Sort" />
          <DsaCard Icon={FaLayerGroup} topic="Game Theory" />
          <DsaCard Icon={FaLayerGroup} topic="Hash Function" />
          <DsaCard Icon={FaLayerGroup} topic="Combinatorics" />
          <DsaCard Icon={FaLayerGroup} topic="Shortest Path" />
          <DsaCard Icon={FaLayerGroup} topic="Interactive" />
          <DsaCard Icon={FaLayerGroup} topic="String Matching" />
          <DsaCard Icon={FaLayerGroup} topic="Data Stream" />
          <DsaCard Icon={FaLayerGroup} topic="Rolling Hash" />
          <DsaCard Icon={FaLayerGroup} topic="Brain Teaser" />
          <DsaCard Icon={FaLayerGroup} topic="Randomize" />
          <DsaCard Icon={FaLayerGroup} topic="Monotonic Queue" />
          <DsaCard Icon={FaLayerGroup} topic="Merge Sort" />
          <DsaCard Icon={FaLayerGroup} topic="Iterator" />
          <DsaCard Icon={FaLayerGroup} topic="Concurrency" />
          <DsaCard Icon={FaLayerGroup} topic="Doubly linkedlist" />
          <DsaCard Icon={FaLayerGroup} topic="Probability" />
          <DsaCard Icon={FaLayerGroup} topic="Quick select" />
          <DsaCard Icon={FaLayerGroup} topic="Bucket Sort" />
          <DsaCard Icon={FaLayerGroup} topic="Suffix Array" />
          <DsaCard Icon={FaLayerGroup} topic="Minimum Spanning Tree" />
          <DsaCard Icon={FaLayerGroup} topic="Counting Sort" />
          <DsaCard Icon={FaLayerGroup} topic="Shell" />
          <DsaCard Icon={FaLayerGroup} topic="Line Sweep" />
          <DsaCard Icon={FaLayerGroup} topic="Reservoir Sampling" />
          <DsaCard Icon={FaLayerGroup} topic="Strongly Conn-Comp" />
          <DsaCard Icon={FaLayerGroup} topic="Euler Circuit" />
          <DsaCard Icon={FaLayerGroup} topic="Radix Sort" />
          <DsaCard Icon={FaLayerGroup} topic="Rejection Sampling" />
          <DsaCard Icon={FaLayerGroup} topic="Biconnected Components" />
        </div>
      </div>
    </div>
  );
}
