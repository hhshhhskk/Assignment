"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const BoxQueryPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

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

export default BoxQueryPage;
