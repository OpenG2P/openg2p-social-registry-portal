// src/components/card/NestedCard.tsx
"use client";

import React from "react";
import styles from "./Card.module.css";

interface NestedCardProps {
  title: string;
  imageSrc: string; // Image source for the card
  buttonText: string;
  onClick: () => void;
}

const NestedCard: React.FC<NestedCardProps> = ({ title, imageSrc, buttonText, onClick }) => {
  return (
    <div className={styles.nestedCard}>
      <div className={styles.nestedCardImage}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <h4 className={styles.nestedTitle}>{title}</h4>
      <button className={styles.nestedButton} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default NestedCard;
