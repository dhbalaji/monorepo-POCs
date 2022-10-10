import React from "react";
import jest from "jest-mock";
import App from "./App";
import { describe, it, expect } from "vitest";
import { findByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App test", () => {
  it("should contain text", async () => {
    render(<App />);
    // screen.debug();
    expect(screen.getByText("Vite + React + Vitest")).toBeDefined();
    expect(screen.queryAllByRole("link").length).toBe(3);
    expect(screen.queryAllByRole("link")[0].getAttribute("href")).toBe(
      "https://vitejs.dev"
    );
    expect(screen.queryAllByRole("link")[1].getAttribute("href")).toBe(
      "https://reactjs.org"
    );
    expect(screen.queryAllByRole("link")[2].getAttribute("href")).toBe(
      "https://vitest.dev"
    );

    const btn = screen.getByRole("button", {
      name: /count is 0/i,
    });
    expect(btn).toBeDefined();

    userEvent.click(btn);
    userEvent.click(btn);
    await screen.findByText(/count is 2/i);

    // This would fail because on click would change text in async way
    // expect(screen.getByRole("button").textContent).toBe();
  });

  it("should match snapshot", () => {
    const result = render(<App />);
    expect(result).toMatchSnapshot();
  });
});
