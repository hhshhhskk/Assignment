"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

// BoxId 컴포넌트
const BoxId = () => {
  const router = useRouter();

  const { id } = useParams();

  return (
    <div className="flex justify-center items-center gap-30 h-screen bg-blue-100">
      <div
        className="cursor-pointer p-3 text-3xl text-white bg-purple-200"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div className=" flex justify-center items-center w-40 h-40 bg-blue-300 text-white text-4xl">
        <span>{id}</span>
      </div>
    </div>
  );
};

export default BoxId;
