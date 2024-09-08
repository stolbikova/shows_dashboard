import { render, screen, fireEvent } from "@testing-library/react";

import EpisodeList from "@/components/EpisodeList/EpisodeList";
import { Episode } from "@/types";

// Mock data
const common = {
  image: { medium: "", original: "" },
  number: 1,
  airdate: "",
};
const mockEpisodes: Episode[] = [
  {
    id: 1,
    name: "Episode 1",
    season: 1,
    summary: "Episode 1 summary",
    ...common,
  },
  {
    id: 2,
    name: "Episode 2",
    season: 1,
    summary: "Episode 2 summary",
    ...common,
  },
  {
    id: 3,
    name: "Episode 3",
    season: 2,
    summary: "Episode 3 summary",
    ...common,
  },
];

describe("EpisodeList", () => {
  it("renders the seasons based on the provided episodes", () => {
    render(<EpisodeList episodes={mockEpisodes} />);

    // Verify that Season headers are rendered
    expect(
      screen.getByText((content, element) => content.includes("Season 1"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => content.includes("Season 2"))
    ).toBeInTheDocument();
  });

  it("expands and shows the episodes when clicking on a season header", () => {
    render(<EpisodeList episodes={mockEpisodes} />);

    // Initially, episodes should not be visible
    expect(
      screen.queryByText((content, element) => content.includes("Episode 1"))
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText((content, element) => content.includes("Episode 2"))
    ).not.toBeInTheDocument();

    // Click to expand Season 1
    const season1Header = screen.getByText((content, element) =>
      content.includes("Season 1")
    );
    fireEvent.click(season1Header);

    // Episodes for Season 1 should now be visible
    expect(
      screen.getByText((content, element) => content.includes("Episode 1"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => content.includes("Episode 2"))
    ).toBeInTheDocument();
  });

  it("collapses the episodes when clicking on the expanded season header", () => {
    render(<EpisodeList episodes={mockEpisodes} />);

    // Click to expand Season 1
    const season1Header = screen.getByText((content, element) =>
      content.includes("Season 1")
    );
    fireEvent.click(season1Header);

    // Episodes should be visible
    expect(
      screen.getByText((content, element) => content.includes("Episode 1"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => content.includes("Episode 2"))
    ).toBeInTheDocument();

    // Click again to collapse Season 1
    fireEvent.click(season1Header);

    expect(
      screen.queryByText((content) => content.includes("Episode 1"))
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText((content, element) => content.includes("Episode 2"))
    ).not.toBeInTheDocument();
  });
});
