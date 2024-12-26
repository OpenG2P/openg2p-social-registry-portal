"use client";

import React, { ReactNode } from "react";
import styles from "./Card.module.css";
import { IconType } from "react-icons";

interface CardProps {
  title?: string; // Optional
  onClick?: () => void; // Optional
  buttonText?: string; // Optional
  background?: string; // Optional
  Icon?: IconType; // Optional
  children?: ReactNode; // Optional
  dotColor?: string; // Optional
}

const Card: React.FC<CardProps> = ({ 
  title, 
  Icon, 
  buttonText, 
  background, 
  onClick, 
  children,
  dotColor = "#000", // Default dot color is black
}) => {
  return (
    <div 
      className={styles.card} 
      style={background ? { background } : undefined} // Only apply background if provided
    >
      {Icon && (
        <div className={styles.cardIcon}>
          <Icon size={50} color="#333" />
        </div>
      )}
      {title && (
        <div className={styles.titleContainer}>
          <span 
            className={styles.dot} 
            style={{ backgroundColor: dotColor }} // Apply the dot color
          ></span>
          <h3 className={styles.title}>{title}</h3>
        </div>
      )}
      {children && <div className={styles.childrenContainer}>{children}</div>}
      {buttonText && onClick && (
        <button className={styles.cardbutton} onClick={onClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
