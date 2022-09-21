import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
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
