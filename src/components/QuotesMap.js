import React from "react";
import myFavQuotes from "./MyFavQuotes";
import Quotes from "./Quotes";

const QuotesMap = () => {
  console.log(myFavQuotes);

  myFavQuotes.map((oneQuote, index) => console.log(oneQuote));

  return (
    <div>
      {myFavQuotes &&
        myFavQuotes.map((oneQuote, index) => (
          <Quotes key={index} oneQuote={oneQuote} />
        ))}
    </div>
  );
};

export default QuotesMap;
