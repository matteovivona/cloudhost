import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";

test("renders the landing message", () => {
  render(<App />);

  expect(screen.getByText("cloudhost.zone")).toBeInTheDocument();
  expect(screen.getByText(/host your ideas/i)).toBeInTheDocument();
});
