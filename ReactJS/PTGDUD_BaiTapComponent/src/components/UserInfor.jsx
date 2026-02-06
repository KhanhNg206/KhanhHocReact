import React from "react";

class UserInfor extends React.Component {
  render() {
    const { user, handleDeleteUser } = this.props;

    return (
      <div>
        <div>My name is: {user.Name}</div>
        <div>My Age: {user.Age}</div>
        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        <hr />
      </div>
    );
  }
}

export default UserInfor;
