import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
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
    <div className="Dictionary">
      <h1>What word do you want to look up?</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex gap-1 justify-content-center"
      >
        <input
          type="search"
          autoFocus
          onChange={handleChange}
          className="form-control w-25"
        />
        <input type="submit" className="btn btn-primary" />
      </form>
      <Results results={results} />
    </div>
  );
}
