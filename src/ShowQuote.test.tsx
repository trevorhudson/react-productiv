import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import ShowQuote from "./ShowQuote";
import "@testing-library/jest-dom";

describe("Test ShowQuote", function () {
  const quote = {
    author: "Julius Ceasar",
    text: "I came, I saw, I conquered.",
  };

  const getQuote = () => {};
  test("renders", function () {
    render(<ShowQuote currentQuote={quote} getQuote={getQuote} />);
  });

  test("shows the button initial placeholder when no quote is passed in", function () {
    const result = render(
      <ShowQuote currentQuote={null} getQuote={getQuote} />
    );
    expect(
      result.queryByText("Click here to get a thoughtful quote!")
    ).toBeInTheDocument();
    expect(result.queryByText("New Quote!")).not.toBeInTheDocument();
  });

  test("shows the button a new placeholder when a quote is passed in", function () {
    const result = render(
      <ShowQuote currentQuote={quote} getQuote={getQuote} />
    );
    expect(
      result.queryByText("Click here to get a thoughtful quote!")
    ).not.toBeInTheDocument();
    expect(result.queryByText("New Quote!")).toBeInTheDocument();
  });

  it("button works ", function () {
    function handleClick() {
      expect(true).toBe(true);
    }
    const { container } = render(
      <ShowQuote currentQuote={null} getQuote={handleClick} />
    );
    const button = container.querySelector(".btn-QuoteDisplay-initial")!;
    fireEvent.click(button);
    expect.assertions(1);
  });
});
