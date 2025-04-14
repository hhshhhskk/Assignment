import React from "react";

// export const revalidate = 10;

const ISRPage = async () => {
  await fetch("https://example.com", { next: { revalidate: 10 } });
  const now = new Date();

  const formatted =
    `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ` +
    `${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;

  return (
    <div>
      <h1>App Router - ISR</h1>
      <p>10초마다 데이터(시간) 최신화: {formatted}</p>
    </div>
  );
};

export default ISRPage;
