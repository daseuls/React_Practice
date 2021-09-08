# useState

- `useState`를 사용할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다. 이 함수를 호출해주면 배열이 반환되는데, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter함수이다.

원래는 다음과 같이 해야한다.

```javascript
const numberState = useState(0)
const number = numberState[0]
const setNumber = numberState[1]
// =>
const [number, setNumber] = useState(0)
```

배열 비구조화 할당을 통해 각 원소를 추출해준것이다.

Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해준다.

# 함수형 업데이트

- 지금은 Setter 함수를 사용 할 때, 업데이트 하고 싶은 새로운 값을 파라미터로 넣어주고 있는데, 그 대신에 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.

```javascript
export default function Counter() {
  const [number, setNumber] = useState(0)
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1)
  }

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1)
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}
```

# 여러개의 input 상태 관리하기

## 비구조화할당

```javascript
const { value, name } = e.target
//은 다음과 같은 표현이다.
const value = e.target.value
const name = e.target.name
```

```javascript
const onChange = (e) => {
  const { value, name } = e.target
  setInputs({
    ...inputs,
    [name]: value,
  })
}
```

- 여기서 ` [name]: value`는
  `[e.target.name] : e.target.value` 과 같은 말이다.

- 여기서 사용한 ... 문법은 spread 문법이다. 객체의 내용을 모두 "펼쳐서" 기존 객체를 복사해준다.

이러한 작업을, "불변성을 지킨다" 라고 부른다. 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 이에 따라 필요한 리렌더링이 진행된다. 만약에 inputs[name] = value 이런식으로 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않는다.

추가적으로, 리액트에서는 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있다. 컴포넌트 최적화에 대해서는 나중에 더 자세히 알아보도록 하겠다.

지금은 이것만 기억하자. 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 된다!
