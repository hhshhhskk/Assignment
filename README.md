# Grid css / auto-fill, auto-fit

참고: https://studiomeal.com/archives/533

## Grid

```css
grid-template-rows
grid-template-columns
```

```css
/* column을 200px 200px 500px 으로 만듬 */
grid-template-columns: 200px 200px 500px;

/* column을 1:1:1 비율로 만듬 */
grid-template-columns: 1fr 1fr 1fr;

/* 섞어서 사용할 수 있음 */
grid-template-columns: 100px 2fr 1fr;
```

## repeat 함수

### repeat(반복횟수, 반복값)

```css
grid-template-columns: repeat(5, 1fr);
/* 이 둘은 같다 */
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
```

## minmax 함수

### minmax(최소값, 최대값)

auto-fill의 경우 공간 크기에 따라 컬럼이 늘어나는데 그것의 최소 최대값을 지정할 수 있다.

```css
minmax(100px, 1fr)
[box    ][box    ][box    ]

/* 둘은 같아보이지만 auto는 컬럼의 내용크기에 따라 다르다 */

minmax(100px, auto)
[box1][긴글박스][box]
```

## auto-fit

column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채움

```css
grid-template-columns: repeat(auto-fill, minmax(20%, auto));

/* 컬럼 수의 비해 공간이 넓으면 빈공간이 같은 크기의 빈칸으로 채워진다. */
[box][box][빈칸][빈칸][빈칸]

```

## auto-fill

column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채움

```css
grid-template-columns: repeat(auto-fill, minmax(20%, auto));

/* 컬럼 수의 비해 공간이 넓으면 빈공간 만큼 균등하게 컬럼의 크기가 늘어난다. */
[box        ][box        ]...

```

## Tailwind 문법

```css
/* display: grid; */
grid

/* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))]

/* grid-auto-rows: 100px; */
auto-rows-[100px]
```

## auto-fill, auto-fit 최소 사이즈 보다 화면이 더 작은 경우 스크롤이 생기는 원인과 해결방안 

### 원인

- minmax(400px, 1fr)는 최소 너비가 400px인 그리드 아이템을 반복해서 만들라는 의미 입니다.

- auto-fill auto-fit은 가능한 한 많은 400px 너비의 그리드 셀을 채워 넣으려고 합니다.
- 지만 화면 너비가 400px보다 작아지면, 최소값인 400px보다 작은 그리드 셀을 만들 수 없기 때문에, 그리드가 강제로 400px을 유지하면서 오버플로우가 발생합니다.
- 그래서 수평 스크롤이 생기게 됩니다.

### 해결방안

- 화면이 작아졌을 때 스크롤 없이 내부 요소들이 줄어들도록 하고 싶다면, min()을 활용하거나, overflow: hidden 사용 해야 합니다.

- overflow: hidden

  - 부모영역에 주게 되면 흘러 넘치지 않지만 내용물이 짤리는 경우가 발생

- min()

  - min(400px,\_100%)두  값 중 더 작은 값을 선택합니다.
  - repeat(auto-fit,\_minmax(min(400px,\_100%),\_1fr))
  - 여기서 100%는 그리드 컨테이너의 너비 기준입니다.
  - 즉, 이 그리드 셀 하나가 차지할 수 있는 최대 너비를 의미하고 셀 하나가 그리드 너비보다 커질 수는 없다는 뜻입니다.

#### 다른 문제

- overflow: hidden은 내용물이 짤려서 min()을 이용하였지만 그래도 미세하게 스크롤이 생기는 문제가 발생 하였습니다.
- 하나하나 건들여보다가 최상위 부모의 w-screen이 문제였는데 w-screen은 스크롤을 포함한 전체 브라우저 뷰포트 너비여서 실제 보이는 영역보다 넓어져서 수평스크롤이 생긴거 였습니다.
