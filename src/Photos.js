import React from "react";

export default function Photos(props) {
  if (!props.photos) return null;
  return (
    <div className="Photos">
      {props.photos.map(function (photo, index) {
        return (
          <div key={index}>
            <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img src={photo.src.landscape} alt={props.word} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
