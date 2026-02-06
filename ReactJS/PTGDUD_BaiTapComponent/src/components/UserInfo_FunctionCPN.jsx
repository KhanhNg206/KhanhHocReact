import React from "react";

const UserInfo_FunctionCPN = ({ user, handleDeleteUser }) => {
  return (
    <div>
      <div>My name is: {user.Name}</div>
      <div>My Age: {user.Age}</div>
      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
      <hr />
    </div>
  );
};

export default UserInfo_FunctionCPN;
