import React, { useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching definition for "${word}" `);
  }

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <input
          type="search"
          autoFocus
          onChange={handleChange}
          className="form-control w-25"
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
