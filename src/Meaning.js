import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <div className="part-of-speech">{props.meaning.partOfSpeech}</div>
      <div className="indent">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>
                <span>{index + 1}. </span>
                {definition.definition}
              </div>
              <div className="example">{definition.example}</div>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
