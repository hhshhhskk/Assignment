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
