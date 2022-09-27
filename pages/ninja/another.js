import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import Navbar from "../../components/Navbar";

export default function Another() {
  return (
    <div>
      <h1>Another</h1>
      <p>{loremIpsum()}</p>
      <p>{loremIpsum()}</p>
    </div>
  );
}
