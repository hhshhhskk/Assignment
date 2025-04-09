# Debounce, Throttle

참고

1. https://velog.io/@jiynn_12/Debounce-%EC%99%80-throttle-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B3%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90

2. https://itprogramming119.tistory.com/entry/React-Debounce%EC%99%80-Throttle-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C

## Debounce

#### 연속된 호출이 끝나고 일정시간이 지나면 1번만 실행

- 예시
  - 검색창: 사용자가 계속 입력하다가 멈췄을 때만 검색
  - 고 -> 고양 -> 고양이 -> 입력 멈추고 300ms 후 fetch 실행

```javascript
const delayDebounce = setTimeout(() => {
  fetchData();
}, 300);
```

## Throttle

#### 지정한 시간마다 최대 1번만 실행

- 예시
  - 스크롤 이벤트: 너무 자주 실행되니까 300ms에 한 번씩만 실행
  - 스크롤 중 0ms, 300ms, 600ms, 900ms... 마다 1번씩 실행

```javascript
const throttledFetch = async () => {
  const now = Date.now();
  if (now - lastCalled.current < 300) return;

  lastCalled.current = now;

  const res = await fetch(`FetchURL`);
  const data = await res.json();
  console.log(data);
};
```

## 비교정리

| 구분      | debounce                            | throttle                 |
| :-------- | :---------------------------------- | :----------------------- |
| 실행 시점 | 마지막 호출 후 일정시간 지나야 실행 | 지정 시간마다 한 번 실행 |
| 사용 예시 | 검색어 입력, 자동 저장              | 스크롤, 마우스 이동 등   |
| 목표      | **입력 안정성**                     | **성능 최적화**          |
| 특징      | 이벤트 끝에 실행됨                  | 이벤트 중간에도 실행됨   |
