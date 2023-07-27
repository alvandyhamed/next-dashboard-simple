"use client";
import React, { ReactNode, useContext } from "react";
import MainHeader from "./MainHeader";

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { SiHelpscout } from "react-icons/si";
import MenuItem from "./MenuItem";
import { MenuContext } from "@/context/MenuContextProvider";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { open } = useContext(MenuContext);
  return (
    <div className=" bg-gray-100 w-screen   min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4`}
        >
          <ul>
            <MenuItem Title="Home" LinkedPage="/" IconTitle={AiOutlineHome} />
            <MenuItem
              Title="Projects"
              IconTitle={GrProjects}
              AngleIcon={FaAngleRight}
            />
            <MenuItem
              Title="Singule"
              IconTitle={FaCheck}
              AngleIcon={FaAngleRight}
            />
            <MenuItem
              Title="Complex"
              IconTitle={FaCheckDouble}
              AngleIcon={FaAngleRight}
            />
            <MenuItem
              Title="About us"
              LinkedPage="/about"
              IconTitle={SiHelpscout}
            />
            <MenuItem
              Title="contact us"
              LinkedPage="/contact"
              IconTitle={FiPhone}
            />
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
