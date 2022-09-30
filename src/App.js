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
        className="img-fluid  mx-auto d-block"
        width={200}
      ></img>
      <h1 className="text-center">MARVIN DICTIONARY</h1> <br />
      <Dictionary defaultKeyword="rose" />
    </div>
  );
}
