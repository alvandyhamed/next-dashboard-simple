import React from "react";
import { FaBars } from "react-icons/fa";

function MainHeader() {
  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
      <div>Brands</div>
      <div>
        <FaBars className="cursor-pointer" />
      </div>
    </div>
  );
}

export default MainHeader;
