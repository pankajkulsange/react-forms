import React, { useState } from "react";

const MyForm = () => {
  //   const [enteredFirstName, setEnteredFirstName] = useState("");
  //   const [enteredLastName, setEnteredLastName] = useState("");
  // NOTE: single state variable for mulitple inputs
  const [data, setData] = useState({
    enteredFirstName: "",
    enteredLastName: "",
  });
  function handleFirstName(e) {
    // console.log("FirstName changed");
    // console.log(e.target.name, e.target.value);
    // setEnteredFirstName(e.target.value);
    setData({ ...data, enteredFirstName: e.target.value });
  }
  function handleLastName(e) {
    // console.log("LastName changed");
    // console.log(e.target.name, e.target.value);
    // setEnteredLastName(e.target.value);
    setData({ ...data, enteredLastName: e.target.value });
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
      <p>{data.enteredFirstName}</p>
      <p>{data.enteredLastName}</p>
    </>
  );
};

export default MyForm;
