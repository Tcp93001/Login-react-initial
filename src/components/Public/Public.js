import Card from "../UI/Card/Card";
import styles from "./Public.module.css";

import React from 'react'

function Public() {
  return (
    <Card className={styles.public}>
      <h1>Página pública</h1>
    </Card>
  )
}

export default Public;
