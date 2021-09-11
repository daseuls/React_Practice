import React, { useRef } from "react"
import UserList1 from "./UserList1"

export default function App() {
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
    nextId.current += 1
  }
  return <UserList1 users={users} />
}
