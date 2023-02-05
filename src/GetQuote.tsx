import React, { useState } from "react";
import axios from "axios";
import ShowQuote from "./ShowQuote";

interface Quote {
  text: string;
  author: string;
}


/** Makes axios call to get a quote and display it by rendering ShowQuote.
 *
 * props:
 * none
 *
 * state:
 * current quote
 *
 * App -> GetQuote -> ShowQuote
 */

const GetQuote: React.FC = () =>{
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  /** retrieve a random quote from quotes API */
  async function randomQuote() {
    const response = await axios.get<{quote: Quote}> ("https://inspo-quotes-api.herokuapp.com/quotes/random");
    const randomQuote = response.data.quote;
    setCurrentQuote(randomQuote);
  }

  return (
    <ShowQuote getQuote={randomQuote} currentQuote={currentQuote}/>
  );
}

export default GetQuote;