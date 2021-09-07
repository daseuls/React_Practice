import React from "react"
import Hello from "./Hello"
import Wrapper from "./Wrapper"

export default function App() {
  return (
    <Wrapper>
      <Hello name="다슬" color="red" isSpecial />
      <Hello color="blue" />
    </Wrapper>
  )
}
