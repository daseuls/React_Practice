# 비구조화 할당

```javascript
export default function Hello(props) {
  return (
    <div style={{ color: props.color }}>안녕하세요 {props.name}님 반가워요</div>
  )
}
```

를 이렇게 바꿀 수 있다.

```javascript
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
