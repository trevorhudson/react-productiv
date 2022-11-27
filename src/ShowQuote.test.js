import React from "react";
import { render, querySelector, getByText, fireEvent } from "@testing-library/react";
import ShowQuote from "./ShowQuote";
import '@testing-library/jest-dom';

describe("Test ShowQuote", function () {
  const quote = {
    quote: {
      "author": "Julius Ceasar",
      "text": "I came, I saw, I conquered.",
    }
  };

  test("renders", function () {
    render(<ShowQuote currentQuote={null} />);
  });

  test("shows the button initial placeholder when no quote is passed in", function () {
    const result = render(<ShowQuote currentQuote={null} />);
    expect(result.queryByText("Click here to get a thoughtful quote!")).toBeInTheDocument();
    expect(result.queryByText("New Quote!")).not.toBeInTheDocument();
  });

  test("shows the button a new placeholder when a quote is passed in", function () {
    const result = render(<ShowQuote currentQuote={quote} />);
    expect(result.queryByText("Click here to get a thoughtful quote!")).not.toBeInTheDocument();
    expect(result.queryByText("New Quote!")).toBeInTheDocument();
  });


  it("button works ", function () {
    function handleClick() {
      expect(true).toBe(true);
    }
    const { container } = render(<ShowQuote quote={null} getQuote={handleClick} />);
    const button = container.querySelector(".btn-QuoteDisplay");
    fireEvent.click(button);
    expect.assertions(1);
  });
});