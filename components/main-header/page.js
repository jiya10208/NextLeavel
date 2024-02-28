"use client";

import Link from "next/link";
import React from "react";
import styles from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBg from "./main-header-bg";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();
  return (
    <>
      <MainHeaderBg />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />{" "}
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href={"/meals"}
                className={path.startsWith("/meals") ? styles.active : ""}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href={"/community"}
                className={path === "/community" ? styles.active : ""}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
