"use client";
import Image from "next/image";
import "./index.css";
import { useState } from "react";

export default function Home() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [firstNameError, setFirstNameEroor] = useState(false);

  const handleChangeFirstNameInput = (e) => {
    setfirstName(e.target.value);
  };
  const handleClickButton = () => {
    if (firstName.length < 3) {
      console.log(false);
    } else {
      console.log("true");
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
          onChange={handleChangeFirstNameInput}
        ></input>
      </div>
      <div>
        <p>Last name *</p>
        <input placeholder="Last name"></input>
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
