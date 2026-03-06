import React, { useState } from "react";
import StudentManager from "./components/StudentManager";
import NumberList from "./components/NumberList";
import UserList from "./components/UserList";
import UserListAxios from "./components/UserListAxios";
function App() {
return (
    <>
    <UserList/>
    <UserListAxios/>
    </>
  );
  }

export default App;
