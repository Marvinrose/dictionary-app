import React from "react";

export default function Phonetic(props) {
  return (
    <div className="phonetic mb-3">
      <a href={props.phonetic.audio} rel="noreferrer">
        <i class="fa fa-volume-up" aria-hidden="true"></i>
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
