import React, { useState } from "react";

const MyForm = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  function handleFirstName(e) {
    // console.log("FirstName changed");
    // console.log(e.target.name, e.target.value);
    setEnteredFirstName(e.target.value);
  }
  function handleLastName(e) {
    // console.log("LastName changed");
    // console.log(e.target.name, e.target.value);
    setEnteredLastName(e.target.value);
  }
  return (
    <>
      <h3>MyForm</h3>
      <form>
        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleFirstName}
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleLastName}
        />
        <br />
        <button>Submit</button>
      </form>
      <p>{enteredFirstName}</p>
      <p>{enteredLastName}</p>
    </>
  );
};

export default MyForm;
