// context/SidebarContext.tsx
"use client";
import { createContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebarcollapse: () => void;
}

const initialValue: SidebarContextType = {
  isCollapsed: false,
  toggleSidebarcollapse: () => {},
};

const SidebarContext = createContext<SidebarContextType>(initialValue);

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };