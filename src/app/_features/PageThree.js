"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";

const checkIfInputHasEmail = (string) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(string);
};
const checkIfInputHasPhonenumber = (string) => {
  return /^\d{8}$/.test(string);
};
const chechIfInputHasPassword = (string) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    string
  );
};
export const PageThree = (props) => {
  const { handleBackStep, handleNextStep } = props;
  const [formValues, setFormValues] = useState({
    dateOfBirth: "",
    profileImage: "",
  });
  const [errorState, setErrorstate] = useState({});
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const validateInput = () => {
    console.log("hello");
    const errors = {};
    // if (!checkIfInputHasEmail(formValues.email)) {
    //   errors.email = "Please provide a valid email address.";
    // }

    // if (!checkIfInputHasPhonenumber(formValues.phoneNumber)) {
    //   errors.phoneNumber = "Please enter a valid phone number.";
    // }
    // if (!chechIfInputHasPassword(formValues.password)) {
    //   errors.password = "Password must include letters and numbers.";
    // }
    // if (formValues.password !== formValues.confirmPassword) {
    //   errors.confirmPassword = "Passwords do not match. Please try again.";
    // }
    return errors;
  };

  const handleClickButton = () => {
    const errors = validateInput();
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      setErrorstate({});
      handleNextStep();
    } else {
      setErrorstate(errors);
    }
  };
  //   const shouldDisableButton = () => {
  //     return (
  //       formValues.email.length === 0 ||
  //       formValues.phoneNumber.length === 0 ||
  //       formValues.password.length === 0 ||
  //       formValues.confirmPassword.length === 0
  //     );
  //   };

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
          inputTag={"Date of birth "}
          handleChange={handleInputChange}
          name={"dateOfBirth "}
          value={formValues.email}
          error={errorState.email}
        />
        <p>Profile image *</p>
        <div className="container5">
          {" "}
          <button className="button1">
            <img src="./buttonImage.svg"></img>
          </button>{" "}
          Add image
        </div>
      </div>

      <div className="container4">
        <button
          onClick={handleBackStep}
          style={{
            backgroundColor: "white",
            color: "#202124",
            border: "solid #CBD5E1 1px",
          }}
        >
          Back
        </button>
        <button onClick={handleClickButton}>Continue 3/3</button>
      </div>
    </div>
  );
};
