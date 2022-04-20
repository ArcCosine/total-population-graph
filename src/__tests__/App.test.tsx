import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App test", () => {
  test("render test", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapShot();
  });

  test("title check", () => {
    render(<App />);
    expect(screen.getByText(/総人口推移グラフ/i)).toBeIntheDocument();
  });
});
