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
