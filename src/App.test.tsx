import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page's title", () => {
  render(<App />);
  const title = screen.getByText(/Let's wave/i);
  expect(title).toBeInTheDocument();
});
