import React from "react";
import Link from "next/link";

// Server Component에서 비동기 데이터 처리
const ServerBoxPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <div className="flex justify-center items-center gap-30 h-screen bg-blue-100">
      <Link
        href="/"
        className="cursor-pointer p-3 text-3xl text-white bg-purple-200"
      >
        Home
      </Link>
      <div className=" flex justify-center items-center w-40 h-40 bg-red-300 text-white text-4xl">
        <span>{id}</span> {/* 서버에서 받은 id 표시 */}
      </div>
    </div>
  );
};

export default ServerBoxPage;
