# Params 값 가져오기

## 클라이언트에서 가져오기

### useParams

#### 동적 경로에서 파라미터를 사용할 때

```javascript
// /post/:id 경로에서 id 파라미터를 추출
import { useParams } from "next/navigation";

const Post = () => {
  const { id } = useParams();
  return <h1>Post ID: {id}</h1>;
};
```

### useSearchParams

#### 쿼리 스트링에서 파라미터를 사용할 때

```javascript
// /search?name=John&id=123 경로에서 쿼리 파라미터를 추출
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  return (
    <h1>
      Search results for: {name} (ID: {id})
    </h1>
  );
};
```

### 차이점

| **특징**               | **`useParams`**                                    | **`useSearchParams`**              |
| ---------------------- | -------------------------------------------------- | ---------------------------------- |
| **사용 목적**          | URL 경로의 동적 파라미터 추출                      | URL의 쿼리 파라미터 추출           |
| **주로 사용되는 환경** | `react-router-dom` 또는 Next.js의 `pages` 디렉터리 | Next.js 13+의 `app` 디렉터리       |
| **예시**               | `useParams().id`                                   | `useSearchParams().get('id')`      |
| **용도**               | 예: `/post/:id` 경로에서 `id` 추출                 | 예: `/search?id=123`에서 `id` 추출 |

## 서버에서 가져오기

```javascript
// /server-box/:id 경로에서 id 파라미터를 추출
import React from "react";

// 서버 컴포넌트에서 비동기 데이터 처리
const ServerBoxPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params; // params에서 id를 추출

  return <div>{id}</div>;
};

export default ServerBoxPage;
```
