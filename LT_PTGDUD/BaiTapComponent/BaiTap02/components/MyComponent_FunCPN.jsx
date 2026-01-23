import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor_FunCPN";
import DisplayInfor from "./DisplayInfo_FunCPN";

const MyComponent_FunCPN = () => {
  const [listUser, setListUser] = useState([
    { id: 1, Name: "Dung", Age: 49 },
    { id: 2, Name: "Hoang", Age: 17 },
    { id: 3, Name: "Chien", Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    setListUser([userObject, ...listUser]);
  };

  const handleDeleteUser = (userID) => {
    const listUserClone = listUser.filter(
      (item) => item.id !== userID
    );
    setListUser(listUserClone);
  };

  return (
    <div>
      <AddUserInfor handleAddnewUser={handleAddnewUser} />
      <hr />
      <DisplayInfor
        listUser={listUser}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default MyComponent_FunCPN;
