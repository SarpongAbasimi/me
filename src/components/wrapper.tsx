import React from "react";
import { Body } from "./body";
import { Description } from "./description";
import "./wrapper.css";

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <Body />
      <Description />
      {/* <Socials/> */}
    </div>
  );
};
