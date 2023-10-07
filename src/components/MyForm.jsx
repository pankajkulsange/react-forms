import React from "react";

const MyForm = () => {
  function handleFirstName(e) {
    // console.log("FirstName changed");
    console.log(e.target.name, e.target.value);
  }
  function handleLastName(e) {
    // console.log("LastName changed");
    console.log(e.target.name, e.target.value);
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
    </>
  );
};

export default MyForm;
