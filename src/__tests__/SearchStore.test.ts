import axios from "axios";
import { act } from "react";

import searchStore from "@/store/SearchStore";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("SearchStore", () => {
  it("sets query correctly", () => {
    searchStore.setQuery("Breaking Bad");
    expect(searchStore.query).toBe("Breaking Bad");
  });

  it("fetches search results", async () => {
    const mockData = [
      { show: { id: 1, name: "Breaking Bad" } },
      { show: { id: 2, name: "Dexter" } },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    await act(async () => {
      await searchStore.fetchSearchResults();
    });

    expect(searchStore.results).toEqual(mockData);
    expect(searchStore.loading).toBe(false);
  });

  it("handles API errors", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("API error"));

    await act(async () => {
      await searchStore.fetchSearchResults();
    });

    expect(searchStore.error).toBe("Something went wrong. Please try again.");
    expect(searchStore.loading).toBe(false);
  });

  it("clears results", () => {
    searchStore.clearResults();
    expect(searchStore.results).toEqual([]);
  });
});
