import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Header } from "../components/header/Header";

vi.mock("react-router-dom", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("Header Component", () => {
  beforeEach(() => {
    global.innerWidth = 800;
    vi.spyOn(global, "addEventListener");
    vi.spyOn(global, "removeEventListener");
  });

  it("renders correctly when window size is less than 700", () => {
    global.innerWidth = 600;
    fireEvent.resize(window);

    render(<Header />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByAltText("Home")).toBeInTheDocument();
    expect(screen.getByAltText("Shopping Cart")).toBeInTheDocument();
    expect(screen.getByAltText("User")).toBeInTheDocument();
  });

  it("renders correctly when window size is 700 or more", () => {
    global.innerWidth = 800;
    fireEvent.resize(window);

    render(<Header />);

    expect(screen.getByAltText("Globant Logo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("Access")).toBeInTheDocument();
  });
});
