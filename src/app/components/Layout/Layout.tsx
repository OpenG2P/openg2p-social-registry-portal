// src/app/components/Layout/Layout.tsx

import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import styles from './Layout.module.css';
import { SidebarContext } from '@/app/context/SidebarContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
     
      <div className={styles.content}>
        <Sidebar/>
        
        <main className={styles.mainContent}>{ children }</main>
        
      </div>
    </div>
  );
};

export default Layout;