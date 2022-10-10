import styles from "./TableHead.module.css";
import React from "react";

function TableHead({ arrOrDep }) {
  return (
    <thead>
      <tr>
        {arrOrDep === "dep" ? (
          <th className={`${styles.std}`}>STD</th>
        ) : (
          <th className={`${styles.std}`}>STA</th>
        )}
        {arrOrDep === "dep" ? (
          <th className={`${styles.etd}`}>ETD</th>
        ) : (
          <th className={`${styles.etd}`}>ETA</th>
        )}
        {arrOrDep === "dep" ? (
          <th className={`${styles.destination}`}>DESTINATION</th>
        ) : (
          <th className={`${styles.destination}`}>FROM</th>
        )}
        <th className={`${styles.flight}`}>FLIGHT</th>
        <th className={`${styles.gate}`}>GATE</th>
        <th className={`${styles.remarks}`}>REMARKS</th>
      </tr>
    </thead>
  );
}

export default TableHead;
