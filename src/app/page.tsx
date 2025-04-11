"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data = [
    { id: 1, title: "클라이언트 params" },
    { id: 2, title: "클라이언트 query" },
    { id: 3, title: "서버 params" },
    { id: 4, title: "서버 query" },
  ];
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen bg-blue-100">
      {data.map((data) => (
        <div key={data.id} className="">
          <div className="text-3xl text-center mb-6">{data.title}</div>
          <div className="flex gap-3">
            {num.map((id) => (
              <div
                key={id}
                className={`cursor-pointer flex justify-center items-center w-20 h-20 text-white text-4xl
                  ${
                    data.id === 1 || data.id === 2
                      ? "bg-blue-300"
                      : "bg-red-300"
                  }`}
                onClick={() =>
                  router.push(
                    `${
                      data.id === 1
                        ? "/box/"
                        : data.id === 2
                        ? "/box-query?id="
                        : data.id === 3
                        ? "/server-box/"
                        : "/server-box-query?id="
                    }${id}`
                  )
                }
              >
                <span>{id}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
