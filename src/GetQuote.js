import React, { useState } from "react";
import axios from "axios";
import ShowQuote from "./ShowQuote";

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
function GetQuote() {
  const [currentQuote, setCurrentQuote] = useState("");

  /** retrieve a random quote from quotes API */
  async function randomQuote() {
    const response = await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random");
    const randomQuote = response.data.quote;
    setCurrentQuote(randomQuote);
  }

  return (
    <ShowQuote getQuote={randomQuote} currentQuote={currentQuote}/>
  );
}

export default GetQuote;