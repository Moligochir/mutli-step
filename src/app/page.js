"use client";
import "./index.css";
import { PageOne } from "./_features/PageOne";
import { PageTwo } from "./_features/PageTwo";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(2);
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleBackStep = () => {
    if (step === 1) {
      return;
    } else {
      setStep(step - 1);
    }
  };

  return (
    <>
      {step === 1 && <PageOne handleNextStep={handleNextStep} />}
      {step === 2 && (
        <PageTwo
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
        />
      )}
    </>
  );
}
