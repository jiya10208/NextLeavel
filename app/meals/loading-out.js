import React from "react";
import styles from "./loading.module.css";

export default function MealLoadingPage() {
  return <p className={styles.loading}>Fetching meals....</p>;
}
