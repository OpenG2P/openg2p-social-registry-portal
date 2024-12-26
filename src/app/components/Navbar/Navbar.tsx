// src/app/components/Navbar/Navbar.tsx

import React from 'react';
import styles from './Navbar.module.css';
import { FaSearch } from 'react-icons/fa';


const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
       <div className={styles.logo}>
        <img src="logo.png" alt="Logo" className={styles.logoImage} />
        <div>
          <div  className={styles.logoTitle}>Self Service Portal</div>
          <div className={styles.subtitle}>by OpenG2P</div>
        </div>
      </div>
     
    <div className={styles.rightSection}>
    <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.search} />
        </div>
      <select className={styles.languageDropdown}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <div className={styles.profile}>
        <span className={styles.name}>Hello, John Smith</span>
        <img src="logo.png" alt="Profile" className={styles.profileImage} />
      </div>
    </div>
    </nav>
  );
};

export default Navbar;