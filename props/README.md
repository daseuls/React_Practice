# 비구조화 할당

```javascript
// Hello.js

export default function Hello(props) {
  return (
    <div style={{ color: props.color }}>안녕하세요 {props.name}님 반가워요</div>
  )
}
```

를 이렇게 바꿀 수 있다.

```javascript
// Hello.js

export default function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}님 반가워요</div>
}
```

# defaultProps

- 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 컴포넌트에 `defaultProps`라는 값을 설정하면 된다.

```javascript
// Hello 컴포넌트 끝에다가 다음과 같이 추가
Hello.defaultProps = {
  name: "이름없음",
}
```

# props.children

- 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, `props.children`을 조회하면 된다.

```javascript
// Wrapper.js

import React from "react"

export default function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  }
  return <div style={style}>{children}</div>
}
```

```javascript
// App.js

import React from "react"
import Hello from "./Hello"
import Wrapper from "./Wrapper"

export default function App() {
  return (
    <Wrapper>
      <Hello name="다슬" color="red" />
      <Hello color="blue" />
    </Wrapper>
  )
}
```

# 조건부 렌더링

- 조건부 렌더링이란, 특정 조건에 따라 다른 결과물을 렌더링 하는 것 의미.

```javascript
// App.js
// props isSpecial이 true일 때 '*'을 붙여 렌더링을 시켜주고 싶다면?

export default function App() {
  return (
    <Wrapper>
      <Hello name="다슬" color="red" isSpecial={true} />
      <Hello color="blue" />
    </Wrapper>
  )
}

// Hello.js

export default function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}
      안녕하세요 {name}님 반가워요
    </div>
  )
}
```

이것을 단축 평가 논리 계산법인 && 연산자를 통해 바꿔줄 수 있다.

```javascript
// App.js

export default function App() {
  return (
    <Wrapper>
      <Hello name="다슬" color="red" isSpecial={true} />
      <Hello color="blue" />
    </Wrapper>
  )
}

// Hello.js

export default function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}님 반가워요
    </div>
  )
}
```

## props 값 설정을 생략하면 ={true}

- 컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략하면, 이를 `true`로 설정한 것으로 간주한다.

```javascript
// App.js

export default function App() {
  return (
    <Wrapper>
      <Hello name="다슬" color="red" isSpecial /> // 이 부분!!
      <Hello color="blue" />
    </Wrapper>
  )
}
```

- 이렇게 `isSpecial`이름만 넣어주면 `isSpecial={true}`와 동일한 의미이다.
