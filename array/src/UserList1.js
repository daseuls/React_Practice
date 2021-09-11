import React from "react"

function User(props) {
  return (
    <div>
      <b>{props.user.username}</b> <span>({props.user.email})</span>
    </div>
  )
}

function UserList1() {
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
  return (
    <div>
      {users.map((el) => (
        <User user={el} key={el.id} />
      ))}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
    </div>
  )
}

export default UserList1
