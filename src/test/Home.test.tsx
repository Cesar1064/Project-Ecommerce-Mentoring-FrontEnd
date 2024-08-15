import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Home } from "../pages/Home";

vi.mock("../components/header/Header", () => ({
  Header: () => <div>Mocked Header</div>,
}));

vi.mock("../components/content/CardsPhones", () => ({
  CardsPhones: () => <div>Mocked CardsPhones</div>,
}));

describe("Home Component", () => {
  it("renders Header and CardsPhones components", () => {
    render(<Home />);

    expect(screen.getByText("Mocked Header")).toBeInTheDocument();
    expect(screen.getByText("Mocked CardsPhones")).toBeInTheDocument();
  });
});
