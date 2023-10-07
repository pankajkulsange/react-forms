import React from "react";

const MyForm = () => {
  function handleFirstName(e) {
    console.log("FirstName changed");
  }
  function handleLastName(e) {
    console.log("LastName changed");
  }
  return (
    <>
      <h3>MyForm</h3>
      <form>
        <label>First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleFirstName}
        />
        <br />
        <label>Last Name: </label>
        <input type="text" placeholder="Last Name" onChange={handleLastName} />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default MyForm;
