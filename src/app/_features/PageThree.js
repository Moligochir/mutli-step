"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";

// const checkIfInputHasEmpty = (string) => {
//   return (string);
// };

  
export const PageThree = (props) => {
  const { handleBackStep, handleNextStep } = props;
  const [formValues, setFormValues] = useState({
    dateOfBirth: "",
    profileImage:"",
  });
  const [errorState, setErrorstate] = useState({});
  const handleInputChange = (e) => {}
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
          id="myDateInput"
          name={"dateOfBirth "}
          type={"date"}
          
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
        <button >Continue 3/3</button>
      </div>
    </div>
  );
};
