import Link from "next/link";
import React, { Suspense } from "react";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MealLoadingPage from "./loading-out";
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Deliciour meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and devour the taste! It&apos;s easy and
          fun{" "}
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share"> Share your favorite recipe</Link>{" "}
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
