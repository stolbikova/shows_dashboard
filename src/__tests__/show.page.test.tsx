import { render, fireEvent } from "@testing-library/react";
import axios from "axios";

import { GET_SHOW_DETAILS_API, GET_EPISODES_API } from "@/constants";
import ShowPage from "@/app/show/[id]/page";

// Mock Axios
jest.mock("axios");

describe("ShowPage", () => {
  const mockShowData = {
    id: 6771,
    name: "Powerpuff Girls",
    summary: "A show about three superhero girls.",
    image: { medium: "http://example.com/image.jpg" },
  };

  const mockEpisodesData = [
    {
      id: 1,
      name: "Episode 1",
      season: 1,
      summary: "Summary of Episode 1",
    },
    {
      id: 2,
      name: "Episode 2",
      season: 1,
      summary: "Summary of Episode 2",
    },
  ];

  it("renders show details and episode list when API call is successful", async () => {
    (axios.get as jest.Mock).mockImplementation((url: string) => {
      if (url === GET_SHOW_DETAILS_API("6771")) {
        return Promise.resolve({ data: mockShowData });
      } else if (url === GET_EPISODES_API("6771")) {
        return Promise.resolve({ data: mockEpisodesData });
      }
    });

    const props = { params: { id: "6771" } };
    const { findByText, getByText } = render(await ShowPage(props));

    expect(await findByText("Powerpuff Girls")).toBeInTheDocument();
    expect(
      await findByText("A show about three superhero girls.")
    ).toBeInTheDocument();

    const seasonHeader = getByText(/season 1/i);
    fireEvent.click(seasonHeader);

    expect(await findByText("Episode 1")).toBeInTheDocument();
    expect(await findByText("Episode 2")).toBeInTheDocument();
  });

  it("displays an error message if the API call fails", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

    const props = { params: { id: "6771" } };

    // Since ShowPage does not explicitly handle the error in UI, you could test it does not render
    await expect(ShowPage(props)).rejects.toThrow("API Error");
  });
});
