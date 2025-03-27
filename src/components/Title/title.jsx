import React from "react";
import "./title.css";
const Title = ({ subtitle, Title }) => {
  return (
    <div className="Title">
      <p> {subtitle} </p>
      <h2> {Title} </h2>
    </div>
  );
};

export default Title;
