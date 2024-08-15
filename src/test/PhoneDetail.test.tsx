// src/pages/PhoneDetail.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import mock from "../assets/mocks/mock-smartphones.json";
import { useParams } from "react-router-dom";
import { PhoneDetail } from "../pages/PhoneDetail";

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

describe("PhoneDetail Component", () => {
  it("renders the phone details correctly", () => {
    vi.mocked(useParams).mockReturnValue({ idPhone: "1" });

    render(
      <BrowserRouter>
        <PhoneDetail />
      </BrowserRouter>
    );

    const filteredPhone = mock.find((item) => item.id === 1);

    expect(screen.getByText(filteredPhone?.name || "")).toBeInTheDocument();
    expect(
      screen.getByText(`Brand: ${filteredPhone?.brand}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`RAM: ${filteredPhone?.ram}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Storage: ${filteredPhone?.rom}`)
    ).toBeInTheDocument();
    expect(screen.getByText(filteredPhone?.price || "")).toBeInTheDocument();
  });

  it("renders the loading state when no phone is found", () => {
    vi.mocked(useParams).mockReturnValue({ idPhone: "999" });

    render(
      <BrowserRouter>
        <PhoneDetail />
      </BrowserRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
