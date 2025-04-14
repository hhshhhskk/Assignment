// app/[id]/page.tsx (예시 경로)

import React from "react";

interface SSR2PageProps {
  params: { id: string };
}
const SSR2Page = async ({ params }: SSR2PageProps) => {
  await fetch("https://example.com", { cache: "no-store" });

  const now = new Date();
  const formatted =
    `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ` +
    `${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;

  return (
    <div>
      <h1>App Router - SSR</h1>
      <p>현재 페이지 ID: {params.id}</p>
      <p>서버 렌더링 요청 시각: {formatted}</p>
    </div>
  );
};

export default SSR2Page;
