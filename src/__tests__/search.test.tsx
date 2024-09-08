import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

import SearchPage from "../app/search/page";
import searchStore from "../store/SearchStore";

// Mock the MobX store
jest.mock("../store/SearchStore");

// Mock the router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Search Page", () => {
  beforeEach(() => {
    searchStore.query = "";
    searchStore.results = [];
    searchStore.loading = false;
    searchStore.error = null;
  });

  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: "/",
    query: {},
  });

  it("renders search input and button", () => {
    render(<SearchPage />);

    const searchInput = screen.getByPlaceholderText(/search for a show/i);

    const searchButton = screen.getByRole("button", { name: /search/i });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("updates query in the store when typing", () => {
    render(<SearchPage />);

    const input = screen.getByPlaceholderText(/search for a show/i);

    fireEvent.change(input, { target: { value: "Breaking Bad" } });

    expect(searchStore.setQuery).toHaveBeenCalledWith("Breaking Bad");
  });

  it("displays loading state", () => {
    searchStore.loading = true;

    render(<SearchPage />);

    const loadingMessage = screen.getByText(/loading.../i);
    expect(loadingMessage).toBeInTheDocument();
  });

  it("displays search results", () => {
    searchStore.results = [
      { show: { id: 1, name: "Breaking Bad" } },
      { show: { id: 2, name: "Stranger Things" } },
    ];

    render(<SearchPage />);

    const result1 = screen.getByText("Breaking Bad");
    const result2 = screen.getByText("Stranger Things");

    expect(result1).toBeInTheDocument();
    expect(result2).toBeInTheDocument();
  });
});
