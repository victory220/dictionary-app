import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <span>Synonyms:</span>
        <span>
          {props.synonyms.map(function (synonym, index) {
            return (
              <span key={index} className="element">
                {synonym}
              </span>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
