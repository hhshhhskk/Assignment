import React from "react";

// export const dynamic = "force-static";

const SSGPage = async () => {
  await fetch("https://example.com", {
    cache: "force-cache",
  });

  const now = new Date();

  const formatted =
    `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ` +
    `${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;

  return (
    <div>
      <h1>App Router - SSG</h1>
      <p>처음 빌드한 시각 그대로: {formatted}</p>
    </div>
  );
};

export default SSGPage;
