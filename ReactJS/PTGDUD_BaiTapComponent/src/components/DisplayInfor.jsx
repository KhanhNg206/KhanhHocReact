import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
//   state = {
//     isShowListUser: true,
//   };

//   toggleListUser = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };

  render() {
    const { listUser, handleDeleteUser } = this.props;

    return (
      <div>
        {/* <button onClick={() => this.toggleListUser()}>
          {this.state.isShowListUser ? "Hide list User" : "Show list User"}
        </button> */}

        {
          listUser.map((user) => {
            return (
              <UserInfor
                key={user.id}
                user={user}
                handleDeleteUser={handleDeleteUser}
              />
            );
          })}
      </div>
    );
  }
}

export default DisplayInfor;
