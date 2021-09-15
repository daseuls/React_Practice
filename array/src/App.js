import React, { useState, useRef } from "react"
import CreateUser from "./CreateUser"
import UserList1 from "./UserList1"

export default function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  })

  const { username, email } = inputs

  const onChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]
  const nextId = useRef(4)
  const onCreate = () => {
    setInputs({
      usename: "",
      email: "",
    })
    nextId.current += 1
  }
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList1 users={users} />
    </>
  )
}
