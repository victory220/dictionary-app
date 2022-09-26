import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <div className="d-flex flex-wrap gap-2 similar">
          {props.synonyms.map(function (synonym, index) {
            return (
              <div key={index} className="element">
                {synonym}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
