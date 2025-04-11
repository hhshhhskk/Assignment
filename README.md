# Params, Query 값 가져오기

## 클라이언트에서 가져오기

### useParams

#### 동적 경로에서 파라미터를 가져올 때

```javascript
// /box/[id]/page.tsx

"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

const BoxId = () => {
  const router = useRouter();

  const { id } = useParams();

  return (
    <div className="flex justify-center items-center gap-30 h-screen bg-blue-100">
      <div
        className="cursor-pointer p-3 text-3xl text-white bg-purple-200"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div className=" flex justify-center items-center w-40 h-40 bg-blue-300 text-white text-4xl">
        <span>{id}</span>
      </div>
    </div>
  );
};

export default BoxId;
```

### useSearchParams

### 쿼리스트링 값을 가져올 때

```javascript
// /box-query/page.tsx

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const BoxQueryPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  return (
    <div className="flex justify-center items-center gap-30 h-screen bg-blue-100">
      <div
        className="cursor-pointer p-3 text-3xl text-white bg-purple-200"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div className=" flex justify-center items-center w-40 h-40 bg-blue-300 text-white text-4xl">
        <span>{id}</span>
      </div>
    </div>
  );
};

export default BoxQueryPage;
```

### 차이점

| **특징**               | **`useParams`**                                    | **`useSearchParams`**              |
| ---------------------- | -------------------------------------------------- | ---------------------------------- |
| **사용 목적**          | URL 경로의 동적 파라미터 추출                      | URL의 쿼리 파라미터 추출           |
| **주로 사용되는 환경** | `react-router-dom` 또는 Next.js의 `pages` 디렉터리 | Next.js 13+의 `app` 디렉터리       |
| **예시**               | `useParams().id`                                   | `useSearchParams().get('id')`      |
| **용도**               | 예: `/post/:id` 경로에서 `id` 추출                 | 예: `/search?id=123`에서 `id` 추출 |

### 🔸 사용하면 좋은 상황

- 클라이언트 전용 기능 (예: 상태 관리, 이벤트 처리 등)이 필요한 경우

- 동적 라우터 값을 기반으로 UI 제어가 필요한 경우

- 페이지 전체가 아닌 컴포넌트 단위에서 params를 사용하고 싶을 때

### 🔸 예시

- 탭 전환 시 URL 파라미터만 바뀌는 UI

- 모달이 URL 파라미터에 따라 열릴 때

- 클라이언트 사이드에서 동적으로 처리되는 UI (예: 필터, 정렬)

### 장점

- 빠른 클라이언트 반응성

- 페이지 전체를 다시 렌더링하지 않아도 동작 가능

- 유저 상호작용이 많은 UI와 궁합이 좋음

## 서버에서 가져오기

### 동적 경로에서 파라미터를 가져올 때

```javascript
// /server-box/[id]/page.tsx

import React from "react";
import Link from "next/link";

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
```

### 쿼리스트링 값을 가져올 때

```javascript
// /server-box-query/page.tsx

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
```

### 🔸 사용하면 좋은 상황

- 초기 렌더링 시점에서 동적 데이터를 바로 가져와야 할 때

- 데이터 Fetching (DB, API 호출 등)을 SSR/SSG로 처리하고 싶을 때

- SEO가 중요한 페이지일 때

- 정적 사이트 생성 (generateStaticParams)을 사용해야 할 때

### 🔸 예시

- 블로그 글 상세 페이지 (/blog/[slug])

- 상품 상세 페이지 (/product/[id])

- SEO 최적화가 필요한 마케팅 페이지

### 장점

- params를 이용해 바로 데이터를 fetch할 수 있음

- 검색 엔진에 노출되는 정적 페이지 생성 가능

- 속도, 보안, SEO에 유리함
