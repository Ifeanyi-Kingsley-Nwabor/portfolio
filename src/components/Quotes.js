import React from "react";

const Quotes = ({ oneQuote }) => {
  // const { text, author } = oneQuote;
  // console.log(oneQuote);

  // const url = "https://api.kanye.rest";

  // useEffect(() => {
  //   setInterval(() => {
  //     fetch(url)
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(data => {
  //         setQuotes(data.quote);
  //       });
  //   }, 5000);
  // }, []);

  return (
    <div className="card">
      {/* <h3>Favorite Quotes:</h3>
      <div className="card-content quote-container"> */}
      {/* <p>{text}</p>
        <p>Author: {author}</p> */}
      {/* </div> */}
    </div>
  );
};

export default Quotes;
