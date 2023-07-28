"use client";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleClick}>Place holder</button>
    </div>
  );
};

export default HomePage;
