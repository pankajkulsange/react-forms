import React, { useState } from "react";

const MyForm = () => {
  //   const [enteredFirstName, setEnteredFirstName] = useState("");
  //   const [enteredLastName, setEnteredLastName] = useState("");
  // NOTE: single state variable for mulitple inputs
  const [data, setData] = useState({
    enteredFirstName: "",
    enteredLastName: "",
  });
  //   function handleFirstName(e) {
  //     // console.log("FirstName changed");
  //     // console.log(e.target.name, e.target.value);
  //     // setEnteredFirstName(e.target.value);
  //     // setData({ ...data, enteredFirstName: e.target.value });
  //     setData((prevState) => {
  //       return { ...prevState, enteredFirstName: e.target.value };
  //     });
  //   }
  //   function handleLastName(e) {
  //     // console.log("LastName changed");
  //     // console.log(e.target.name, e.target.value);
  //     // setEnteredLastName(e.target.value);
  //     // setData({ ...data, enteredLastName: e.target.value });
  //     setData((prevState) => {
  //       return { ...prevState, enteredLastName: e.target.value };
  //     });
  //   }
  function inputHandler(identifier, value) {
    if (identifier === "fname") {
      setData((prevState) => {
        return { ...prevState, enteredFirstName: value };
      });
    } else if (identifier === "lname") {
      setData((prevState) => {
        return { ...prevState, enteredLastName: value };
      });
    } else {
      console.log("Not set data in state variable for Form inputs");
      return;
    }
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
          //   onChange={handleFirstName}
          onChange={(e) => {
            inputHandler("fname", e.target.value);
          }}
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          //   onChange={handleLastName}
          onChange={(e) => {
            inputHandler("lname", e.target.value);
          }}
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
