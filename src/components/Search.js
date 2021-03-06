import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  // console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeout = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [term]);

  const renderedItems = results.map((result) => {
    return (
      <div className=" ui item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://www.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedItems}</div>
    </div>
  );
}

export default Search;
