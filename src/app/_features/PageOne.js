"use client";
// import "./index.css";
import { useState } from "react";
import { FormInput } from "../_components/form-input";

const checkIfInputHasCharacters = (string) => {
  return /[!@#$%^&*()_+-=':\",.<>/?`~]/.test(string);
};
const checkIfInputHasNumbers = (string) => {
  return /\d/.test(string);
};

export const PageOne = (props) => {
  const { handleNextStep } = props;
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

  const validateInput = () => {
    const errors = {};
    if (
      checkIfInputHasNumbers(formValues.firstName) ||
      checkIfInputHasCharacters(formValues.firstName)
    ) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    if (
      checkIfInputHasNumbers(formValues.lastName) ||
      checkIfInputHasCharacters(formValues.lastName)
    ) {
      errors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (
      checkIfInputHasNumbers(formValues.userName) ||
      checkIfInputHasCharacters(formValues.userName)
    ) {
      errors.userName =
        "This username is already taken. Please choose another one.";
    }
    return errors;
  };

  const handleClickButton = () => {
    const errors = validateInput();

    if (Object.keys(errors).length === 0) {
      setErrorstate({});
      handleNextStep();
    } else {
      setErrorstate(errors);
    }
  };
  const shouldDisableButton = () => {
    return (
      formValues.firstName.length === 0 ||
      formValues.lastName.length === 0 ||
      formValues.userName.length === 0
    );
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

      <div className="container2">
        <FormInput
          inputTag={"First Name"}
          handleChange={handleInputChange}
          name={"firstName"}
          value={formValues.firstName}
          error={errorState.firstName}
        />
        <FormInput
          inputTag={"Last Name"}
          handleChange={handleInputChange}
          name={"lastName"}
          value={formValues.lastName}
          error={errorState.lastName}
        />
        <FormInput
          inputTag={"User Name"}
          handleChange={handleInputChange}
          name={"userName"}
          value={formValues.userName}
          error={errorState.userName}
        />
      </div>

      <div className="container3">
        <button disabled={shouldDisableButton()} onClick={handleClickButton}>
          Continue 1/3
        </button>
      </div>
    </div>
  );
};
