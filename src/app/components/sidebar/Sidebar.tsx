// component/sidebar/Sidebar.tsx
"use client";
import Image from "next/image";
import { BsPersonCircle } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { TbSettings2 } from "react-icons/tb";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { usePathname } from "next/navigation"; // updated import
import { GiFamilyHouse } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: RxDashboard,
  },
  {
    name: "Individuals",
    href: "/individuals",
    icon: BsPersonCircle,
    
  },
  {
    name: "Households",
    href: "/households",
    icon: GiFamilyHouse,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: IoDocumentTextOutline,
  },
  {
    name: "Support",
    href: "/support",
    icon: BiSupport,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: TbSettings2 ,
  },


];

const Sidebar = () => {
  const pathname = usePathname(); // get the current path
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
          
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;