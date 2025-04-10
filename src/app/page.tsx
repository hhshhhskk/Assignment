"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-30 h-screen bg-blue-100">
      <div className="">
        <div className="text-4xl text-center mb-6">클라이언트</div>
        <div className="flex gap-3">
          {num.map((id) => (
            <div
              key={id}
              className="cursor-pointer flex justify-center items-center w-40 h-40 bg-blue-300 text-white text-4xl"
              onClick={() => router.push(`/boxs/${id}`)}
            >
              <span>{id}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="text-4xl text-center mb-6">서버</div>
        <div className="flex gap-3">
          {num.map((id) => (
            <div
              key={id}
              className="cursor-pointer flex justify-center items-center w-40 h-40 bg-red-300 text-white text-4xl"
              onClick={() => router.push(`/server-box/${id}`)}
            >
              <span>{id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
