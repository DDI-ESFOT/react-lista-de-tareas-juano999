

import React from "react";
import "../App.css";
import ToDoList from "./ToDoList";
import UserList from "./UserList";


function App({users}) {
  return (
    <>
      <UserList users={users} />
      <ToDoList />
    </>
  );
}

export default App;
