import React from "react";
import Link from "next/link";

interface IServerBoxProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ServerBoxQueryPage = async ({ searchParams }: IServerBoxProps) => {
  const { id } = await searchParams;

  return (
    <div className="flex justify-center items-center gap-30 h-screen bg-blue-100">
      <Link
        href="/"
        className="cursor-pointer p-3 text-3xl text-white bg-purple-200"
      >
        Home
      </Link>
      <div className=" flex justify-center items-center w-40 h-40 bg-red-300 text-white text-4xl">
        <span>{id}</span>
      </div>
    </div>
  );
};

export default ServerBoxQueryPage;
