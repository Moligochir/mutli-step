"use client";
import Image from "next/image";
import "./index.css";
import { useState } from "react";
import { errorToJSON } from "next/dist/server/render";

const checkIfInputHasCharacters = (string) => {
  return /\d/.test(string);
};
const checkIfInputHasNumbers = (string) => {
  return /\d/.test(string);
};

export default function Home() {
  const firstName = "";
  const lastName = "";
  const userName = "";

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [errorState, setErrorstate] = useState({});
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };
  // const [firstName, setfirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [userName, setUserName] = useState("");
  // const [firstNameError, setFirstNameError] = useState(false);
  // const [lastNameError, setLastNameError] = useState(false);
  // const [userNameError, setUserNameError] = useState(false);
  // const containsNumberRegex = ;

  // const handleChangeFirstNameInput = (e) => {
  //   setfirstName(e.target.value);
  // };
  const validateInput = () => {
    const errors = {};
    if (checkIfInputHasNumbers(formValues.firstName)) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    return errors;
  };

  const handleClickButton = () => {
    const errors = validateInput();

    if (Object.keys(errors).length === 0) {
      setErrorstate({});
    } else {
      setErrorstate(errors);
    }
  };

  return (
    <div className="container">
      <div className="container1">
        <img src="./test.svg"></img>
        <h1 className="head">Join Us! 😎</h1>
        <h2 className="head1">
          Please provide all current information accurately.
        </h2>
      </div>
      <div>
        <p>First name *</p>
        <input
          placeholder="First name"
          onChange={handleInputChange}
          name="firstName"
          value={formValues.firstName}
        ></input>
        {errorstat.firstName && (
          <div style={{ color: "red" }}>
            First name cannot contain special characters or numbers.
          </div>
        )}
      </div>
      <div>
        <p>Last name *</p>
        <input
          placeholder="Last name"
          onChange={handleInputChange}
          name="lastName"
          value={formValues.lastName}
        ></input>
      </div>
      <div>
        <p>Username *</p>
        <input placeholder="User name"></input>
      </div>

      <div>
        <button onClick={handleClickButton}>Continue 1/3</button>
      </div>
    </div>
  );
}
