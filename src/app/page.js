"use client";
import "./index.css";
import { PageOne } from "./_features/PageOne";
const checkIfInputHasCharacters = (string) => {
  return /[!@#$%^&*()_+-=':\",.<>/?`~]/.test(string);
};
const checkIfInputHasNumbers = (string) => {
  return /\d/.test(string);
};

export default function Home() {
  return <PageOne />;
}
