# App Router / Pages Router 차이점

## 라우팅 방식 및 페이지 구성

### App Router - 폴더 단위

```text
/app
  layout.tsx                # 전체 레이아웃
  page.tsx                  # 루트 페이지
  /app-router
    layout.tsx              # app-router 레이아웃
    /ssr
        page.tsx            # /ssr 페이지
    /ssg
        page.tsx            # /ssg 페이지
    /isr
        page.tsx            # /isr 페이지

```

### Page Router - 파일 단위

```text
/pages
  index.tsx             # 루트 페이지
  _app.tsx              # 모든 페이지 공통 레이아웃
  _document.tsx         # HTML <head> 등 커스텀

  /blog
    index.tsx           # /blog
    [slug].tsx          # /blog/:slug

```

## 렌더링 방식

#### app router

    - 기본이 React Server Components (RSC) 기반
    - 클라이언트 렌더링을 하려면 'use client'를 사용해야됨

#### page router

    - 기본이 클라이언트 기반
    - 서버 사이드 렌더링을 하려면 getServerSideProps, getStaticProps, getStaticPaths을 사용해야됨

## SSR SSG ISR 방식

### page router

- 각각 getServerSideProps, getStaticProps, getStaticPaths을 이용합니다.

### app router

#### SSR

- 요청이 들어올 때마다 서버에서 HTML을 즉시 생성
- fetch()도 없고, revalidate 나 cashe:'no-store'도 없으면 SSG가 됨
- 그래서 **export const dynamic = "force-dynamic";** 로 캐싱을 명시적으로 비활성화 해야됩니다.

```javascript
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
```

#### SSG

- 빌드 시점에서 미리 HTML을 생성해서 배포
- fetch() + {cache: "force-cache"} 작성
- **export const dynamic = "force-static"** 를 적으면 SSG를 강제 할 수 있다.

```javascript
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
```

#### ISR

- 빌드 시점에서 생성하고 주기적으로 재생성
- fetch() + {cache: "force-cache"} 작성
- **export const dynamic = "force-static"** 를 적으면 SSG를 강제 할 수 있다.

```javascript
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
```

## 중첩 레이아웃

- **app router**는 layout.tsx로 layout을 공유하고
- **page router**는 지원하는게 따로 없어서 layout을 따로 만들어 사용합니다.

## 코드 스플리팅

#### app router

- 서버/클라이언트 단위로 나뉘어 분리
- 서버 컴포넌트는 html로 보내고 클라이언트 컴포넌트는 js번들로 보냄

#### page router

- page 단위로 클라이언트 컴포넌트 전체를 js번들로 보냄
