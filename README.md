# Pagination

- 일반적이고 권장되는 방식은 쿼리스트링 기반 페이지네이션입니다.

- 대부분의 프레임워크, API, CMS, 검색엔진, 웹서비스에서 기본적으로 사용

- 기능적으로도 가장 안정적이고 확장성 있는 방식

## 쿼리스트링 페이지네이션의 주요 장점

## 1. URL 공유 가능 (링크 복사 가능)

- 예: https://site.com/board?page=3
- 사용자가 보고 있는 페이지를 그대로 공유하거나 북마크할 수 있음
- 뒤로가기/앞으로가기 히스토리도 정확하게 관리됨
- 만약 useState(페이지번호)만 쓰면 새로고침 시 정보가 사라짐 → 쿼리스트링은 이 문제를 해결

## 2. 서버사이드 렌더링(SSR)/정적 생성(SSG)에 유리

- Next.js의 getServerSideProps, getStaticProps에서 context.query.page로 쉽게 접근 가능
- SEO가 필요한 페이지에서는 ?page=1, ?page=2 등 각각의 페이지를 독립된 콘텐츠로 다룰 수 있음

## 3. 검색, 정렬, 필터링과 조합이 쉬움

- 예: ?page=2&sort=latest&category=notice
- 여러 조건을 URL에 담아서 API 요청 또는 라우팅에 반영 가능
- 프론트/백 모두에서 유지보수가 쉬운 구조

## 4. 클라이언트 라우팅 최적화

- router.push("?page=2") 시 새로고침 없이 이동
- shallow routing을 활용하면 페이지 리로딩 없이 상태만 변경 가능 (Next.js 기준)

```javascript
router.push("?page=3", undefined, { shallow: true });
```

## 5. API 요청과 매핑이 직관적

- 프론트 URL: /board?page=2
- 백엔드 API: /api/board?page=2
- 쿼리 파라미터를 그대로 API에도 전달하므로 처리 흐름이 단순하고 명확

## 6. 분석도구, GA 등에서 트래픽 분석이 용이

- ?page=1, ?page=2가 각각 다른 페이지로 집계되어 사용자 동선 파악 가능
- 광고 캠페인, 검색 최적화, A/B 테스트 등에 활용 가능

## 만약 쿼리스트링 없이 상태만으로 처리하면?

- 새로고침 시 상태 초기화
- 브라우저 주소에는 항상 /board만 보임
- 페이지 번호를 공유하거나 북마크 불가능
- 검색/필터링 조건을 URL에 포함시키기 어려움

## nuqs 라이브러리

Next.js 13/14의 App Router 환경에서 쿼리스트링(query string)을 더 쉽고 타입 안정성 있게 다룰 수 있도록 도와주는 React 훅 기반 라이브러리입니다.

### 한줄 정의

- nuqs는 Next.js의 URL 쿼리스트링을 읽고, 수정하고, 반영하는 커스텀 훅 모음입니다.

  - 쿼리스트링을 쉽게 읽고(set/get)

  - 타입을 자동으로 직렬화/역직렬화(serialize/parse)

  - router.push() 같은 로직 없이 자동으로 URL 업데이트 가능

## 기본 사용 예시

```javascript
"use client";

import { useQueryState } from "nuqs";

export default function MyComponent() {
  const [page, setPage] = useQueryState("page", {
    parse: Number,
    serialize: String,
  });

  return (
    <div>
      <p>현재 페이지: {page}</p>
      <button onClick={() => setPage((page ?? 1) + 1)}>다음 페이지</button>
    </div>
  );
}
```

## 여러 쿼리 동시에

```javascript
const [category, setCategory] = useQueryState("category");
const [sort, setSort] = useQueryState("sort");
```

## 객체처럼 여러 쿼리 동시 관리

```javascript
const [query, setQuery] = useQueryStates({
  page: withDefault(NumberParam, 1),
  sort: StringParam,
});
```
