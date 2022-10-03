import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

const photosNumber = 6;

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    // console.log(response);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000012d414ae389564c479d5a257efd3e31cc";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=${photosNumber}`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          className="form-control"
        />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
      <Results results={results} />
      <Photos photos={photos} word={word} />
    </div>
  );
}
