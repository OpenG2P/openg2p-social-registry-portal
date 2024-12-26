// src/app/layout.tsx

import React from 'react';
import Head from 'next/head';
import './globals.css'; // Import global styles
import Layout from './components/Layout/Layout'; // Import the Layout component
import { SidebarProvider } from './context/SidebarContext';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <title>Self Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
     {children}
      </body>
    </html>
  );
};

export default RootLayout;