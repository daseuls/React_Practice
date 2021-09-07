import React from "react"

export default function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}님 반가워요</div>
}

Hello.defaultProps = {
  name: "이름없음",
}
