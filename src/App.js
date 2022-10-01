import React from "react";
import dictionary from "./dictionary-gif.gif";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="container">
      <img
        src={dictionary}
        alt="logo"
        className="img-fluid  mx-auto d-block mb-3"
        width={200}
      ></img>
      <div className="header">
        <h1 className="text-center">MARVIN</h1>
        <h1 className="text-center">Dictionary</h1>
      </div>
      <Dictionary defaultKeyword="rose" />
    </div>
  );
}
