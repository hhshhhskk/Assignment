import React from "react";

// export const dynamic = "force-dynamic";

const SSRPage = async () => {
  await fetch("https://example.com", { cache: "no-store" });
  const now = new Date();

  const formatted =
    `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ` +
    `${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;

  return (
    <div>
      <h1>App Router - SSR</h1>
      <p>서버 렌더링 요청시 시각: {formatted}</p>
    </div>
  );
};

export default SSRPage;
