"use client";

import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handPickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          <Image src={pickedImage} alt="the image selected by the user" fill />
        </div>
        <input
          type="file"
          onChange={handleImageChange}
          id="image"
          className={styles.input}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          required
        />
        <button className={styles.button} type="button" onClick={handPickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
