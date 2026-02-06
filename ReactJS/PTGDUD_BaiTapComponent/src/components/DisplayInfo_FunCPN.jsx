import React from "react";
import UserInfor from "./UserInfo_FunctionCPN";

const DisplayInfo_FunCPN = ({ listUser, handleDeleteUser }) => {
  return (
    <div>
      {listUser.map((user) => (
        <UserInfor
          key={user.id}
          user={user}
          handleDeleteUser={handleDeleteUser}
        />
      ))}
    </div>
  );
};

export default DisplayInfo_FunCPN;


