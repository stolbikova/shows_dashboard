import { render } from "@testing-library/react";
import axios from "axios";
import { notFound } from "next/navigation";

import EpisodePage from "@/app/episode/[id]/page";

// Mock Axios and notFound
jest.mock("axios");
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
  useRouter: jest.fn(),
}));

describe("EpisodePage", () => {
  const mockEpisodeData = {
    id: 1,
    name: "Pilot",
    summary: "This is a summary of the pilot episode.",
    image: { medium: "http://example.com/image.jpg" },
  };

  it("renders episode details when API call is successful", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockEpisodeData });

    const props = { params: { id: "1" } };
    const { findByText } = render(await EpisodePage(props));

    expect(await findByText(mockEpisodeData.name)).toBeInTheDocument();
    expect(
      await findByText("This is a summary of the pilot episode.")
    ).toBeInTheDocument();
  });

  it("calls notFound when the API call fails", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API Error"));

    const props = { params: { id: "1" } };
    await EpisodePage(props);

    expect(notFound).toHaveBeenCalled();
  });
});
