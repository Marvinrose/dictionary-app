import React from "react";
import dictionary from "./dictionary-gif.gif";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";
import DarkMode from "./DarkMode";
export default function App() {
  return (
    <div className="container">
      <DarkMode />
      <img
        src={dictionary}
        alt="logo"
        className="img-fluid  mx-auto d-block mb-3"
        width={200}
      ></img>

      <h1 className="text-center header">MARVIN DICTIONARY</h1>

      <Dictionary defaultKeyword="rose" />
    </div>
  );
}
