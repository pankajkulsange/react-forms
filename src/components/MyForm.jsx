import React from "react";

const MyForm = () => {
  return (
    <>
      <h3>MyForm</h3>
      <form>
        <label>First Name: </label>
        <input type="text" placeholder="First Name" />
        <br />
        <label>Last Name: </label>
        <input type="text" placeholder="Last Name" />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default MyForm;
