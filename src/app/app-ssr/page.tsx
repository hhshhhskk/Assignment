import React from "react";

export const dynamic = "force-dynamic";

const AppSSRPage = async () => {
  const message = "앱 라우터 서버에서 날아온 메세지입니다.";

  return (
    <div>
      <h1>App Router SSR 페이지</h1>
      <p>서버에서 온 메세지: {message}</p>
    </div>
  );
};

export default AppSSRPage;
