import "./ShowQuote.css";

/** Shows a random current quote and displays button to get new quote
 *
 * Props:
 * getQuote is a function that retrieves a random quote from API
 * quote is the current state passed down from the the parent GetQuote component
 *
 * No state
 */
function ShowQuote({ getQuote, currentQuote }) {

  function initialQuote() {
    return (<div className="ShowQuote">
      <button
        className = "btn-QuoteDisplay"
        onClick={getQuote}>Click here to get a thoughtful quote!
      </button>
    </div>);
  }

  function displayQuote() {
    return(<div className="ShowQuote">
      <p className="Quote"><i>{currentQuote.text} - {currentQuote.author}</i></p>
      <button
        className = "btn-QuoteDisplay"
        onClick={getQuote}>New Quote!
      </button>
    </div>);
  }

  return currentQuote ? displayQuote() : initialQuote();
};

export default ShowQuote;