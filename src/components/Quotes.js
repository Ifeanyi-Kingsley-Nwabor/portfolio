import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState();

  const url = "https://api.kanye.rest";

  useEffect(() => {
    setInterval(() => {
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setQuotes(data.quote);
        });
    }, 5000);
  }, []);

  return (
    <div className="card">
      <h3>Favorite Quotes:</h3>
      <h5 className="card-content quote-container">{quotes}</h5>
    </div>
  );
};

export default Quotes;
