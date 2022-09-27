import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // Renders the App component to a document body
  render(<App />);

  // Used for debugging, just prints the markup to the console. Eslint rule throws warn/error when used
  // screen.debug();

  // Get single DOM Element containing text, its a regex pattern thats passed as argument
  const linkElement = screen.getByText(/learn react/i);

  // Jest assert statement
  expect(linkElement).toBeInTheDocument();
});

test("should contain username field", () => {
  render(<App />);

  screen.logTestingPlaygroundURL();

  // this statement would fail the test case because it throws an error when the matching element was not found.
  screen.getByLabelText("Username");

  // this statement would not fail the test case even if the element is not found. So you need to write the expect statement.
  const label = screen.queryByLabelText("Username");

  expect(label).toBeInTheDocument();

  fireEvent.click(label);

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: "a" },
  });
});
