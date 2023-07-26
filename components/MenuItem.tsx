"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IconType } from "react-icons";

interface MyComponentProps {
  Title: string;
  LinkedPage?: string;
  IconTitle: IconType;
  AngleIcon?: IconType;
}

const MenuItem: React.FC<MyComponentProps> = ({
  Title,
  LinkedPage,
  IconTitle,
  AngleIcon,
}) => {
  return (
    <li className="flex item justify-start items-center hover:bg-blue-50 hover:text-blue-500 rounded-xl p-2">
      <IconTitle className="mr-2" />
      {LinkedPage ? (
        <Link href={LinkedPage}>{Title}</Link>
      ) : (
        <h3 className="flex-1">{Title}</h3>
      )}
      {AngleIcon && <AngleIcon />}
    </li>
  );
};

export default MenuItem;
