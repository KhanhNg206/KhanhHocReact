import React, { useState } from "react";

const AddUserInfor_FunCPN = ({ handleAddnewUser }) => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!Name || !Age) return;

    handleAddnewUser({
      id: Math.floor(Math.random() * 1000) + "user",
      Name,
      Age,
    });

    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>Your name:</label>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label>Your Age:</label>
      <input
        type="text"
        value={Age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddUserInfor_FunCPN;

