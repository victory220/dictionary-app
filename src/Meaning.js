import React from "react";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>{definition.definition}</div>
              <em>{definition.example}</em>
            </div>
          );
        })}
      </div>
    </div>
  );
}
