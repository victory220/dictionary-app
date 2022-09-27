import React from "react";

export default function Phonetic(props) {
  console.log(props);
  return (
    <div className="Phonetic">
      <div>{props.phonetic.text}</div>
      <div>
        {props.phonetic.audio && (
          <audio controls src={props.phonetic.audio}></audio>
        )}
      </div>
    </div>
  );
}
