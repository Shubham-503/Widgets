import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("");
  console.log("render search");

  useEffect(() => {
    const search = async () => {
      await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
    };
    search();
  }, [term]);

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Search </label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
