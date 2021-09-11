import React from "react"

function User(props) {
  return (
    <div>
      <b>{props.user.username}</b> <span>({props.user.email})</span>
    </div>
  )
}

function UserList1(props) {
  return (
    <div>
      {props.users.map((el) => (
        <User user={el} key={el.id} />
      ))}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
    </div>
  )
}

export default UserList1
