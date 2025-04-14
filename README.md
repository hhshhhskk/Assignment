# Next.js App Router vs Pages Router 비교

Next.js에는 두 가지 주요 라우팅 방식이 있습니다.

- **Pages Router**: Next.js 초기부터 존재한 방식 (`/pages` 디렉토리 기반)
- **App Router**: Next.js 13부터 도입된 새로운 방식 (`/app` 디렉토리 기반, 현재 권장)

## App Router 사용법

```javascript
// app/app-ssr/page.tsx
// /app-ssr?q=app&fruit=apple&fruit=banana&fruit=cherry

export default async function AppSSRPage({
  searchParams,
}: {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>,
}) {
  const { q, fruit } = await searchParams;
  const search_query = typeof q === "string" ? q : "";
  const fruitList = Array.isArray(fruit) ? fruit : fruit ? [fruit] : [];

  return (
    <div>
      <h1>App Router SSR 페이지</h1>
      <p>서버에서 읽은 query: {search_query}</p>
      {fruitList.map((fruit, idx) => (
        <p key={fruit}>
          서버에서 읽은 fruit 배열 {idx + 1} : {fruit}
        </p>
      ))}
    </div>
  );
}
```

- Next.js 13~ app 디렉토리 구조에서는 page.tsx나 layout.tsx 컴포넌트가 호출될 때,
  Next.js가 params, searchParam를 자동으로 넘겨 줍니다.

## Page Router 사용법

```javascript
// pages/page-ssr.tsx
// /app-ssr?q=page
import { GetServerSideProps } from "next";

interface MySSRPageProps {
  q: string;
}

export default function MySSRPage({ q }: MySSRPageProps) {
  return (
    <div>
      <h1>Page Router SSR 페이지</h1>
      <p>서버에서 온 메세지: {q}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<MySSRPageProps> = async (
  context
) => {
  const { query } = context;

  const q = typeof query.q === "string" ? query.q : "";

  return {
    props: {
      q,
    },
  };
};
```

- Next.js 13 이전 버전 Page 디렉토리 구조에서는 getServerSideProps로 params, searchParams를 가져온다.

## 차이점 표로 보기

| 항목          | **App Router (`/app`)**                    | **Pages Router (`/pages`)**               |
| ------------- | ------------------------------------------ | ----------------------------------------- |
| 도입 시기     | Next.js 13~                                | Next.js 초기부터                          |
| 라우팅 방식   | 폴더 단위 중첩 라우팅                      | 파일 단위 라우팅                          |
| 페이지 구성   | `layout.tsx`, `page.tsx`, `loading.tsx` 등 | `_app.tsx`, `_document.tsx`, `_error.tsx` |
| 데이터 패칭   | `fetch()` + `cache`, `revalidate`          | `getServerSideProps`, `getStaticProps` 등 |
| 렌더링 방식   | React Server Components (RSC) 기반         | 클라이언트 컴포넌트 기반                  |
| SSR 지원      | ✅ (기본 지원)                             | ✅ (`getServerSideProps`)                 |
| SSG/ISR 지원  | ✅ (`revalidate`, `generateStaticParams`)  | ✅ (`getStaticProps`, `getStaticPaths`)   |
| 중첩 레이아웃 | ✅ 지원 (`layout.tsx`)                     | ❌ 직접 구성해야 함                       |
| 컴포넌트 분리 | `"use client"`로 명확히 구분               | 전부 클라이언트 컴포넌트                  |
| 코드 스플리팅 | 서버/클라이언트 분리로 효율적              | 페이지 단위                               |
| 공식 권장     | ✅ ✅ (Next 15 기준)                       | ⚠️ 유지되지만 신규 기능 비권장            |

---

## 📁 구조 예시

### App Router (`/app`)

```text
/app
  ├── layout.tsx       ← 공통 레이아웃
  ├── page.tsx         ← 메인 페이지
  ├── loading.tsx      ← 로딩 스피너
  ├── error.tsx        ← 에러 처리
  └── blog/
        ├── layout.tsx
        └── [slug]/
            └── page.tsx
```

### Pages Router (`/pages`)

```text
/pages
  ├── index.tsx
  ├── about.tsx
  ├── blog/
  │    └── [slug].tsx
  ├── _app.tsx
  ├── _document.tsx
  └── _error.tsx
```

---

## 🧠 어떤 걸 선택할까?

| 상황                         | 추천 라우터                       |
| ---------------------------- | --------------------------------- |
| **신규 프로젝트**            | ✅ App Router                     |
| **기존 프로젝트 유지보수**   | ✅ Pages Router                   |
| **SEO가 중요한 사이트**      | ✅ App Router + SSR               |
| **정적 콘텐츠 사이트**       | ✅ App Router (`revalidate` 포함) |
| **간단한 SPA 또는 대시보드** | Pages Router도 가능               |

---

## 결론

- App Router는 Next.js의 **미래 표준**으로, SSR/SSG/RSC를 보다 유연하고 효율적으로 지원합니다.
- Pages Router는 여전히 사용 가능하지만, **신규 기능은 App Router에만 적용**됩니다.
- 가능하다면 신규 프로젝트는 **App Router** 사용을 권장합니다.
