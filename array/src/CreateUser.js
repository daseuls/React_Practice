import React from "react"

export default function CreateUser(props) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={props.onChange}
        value={props.username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={props.onChange}
        value={props.email}
      />
      <button onClick={props.onCreate}>등록</button>
    </div>
  )
}
