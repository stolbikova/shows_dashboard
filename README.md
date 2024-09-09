# TV Show Search Application

This is a **TV Show Search Application** built using **Next.js** with the **App Router** and **MobX** for state management. The app allows users to search for TV shows via the **TVMaze API** and view detailed information about selected shows.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [MobX State Management](#mobx-state-management)
- [Usage](#usage)
- [API](#api)
- [License](#license)

---

## Features

- **Search TV Shows**: Users can search for TV shows using the **TVMaze API**.
- **Show Details**: View detailed information about a specific TV show, including the show’s title, summary, and image.
- **Responsive Design**: The application is responsive and works across mobile and desktop devices.
- **Client-Side Rendering**: Search results are fetched and displayed client-side using the Next.js App Router.
- **MobX State Management**: Search query and results are managed with MobX for clean and centralized state management.

---

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**: Strongly-typed JavaScript.
- **MobX**: State management for search queries and results.
- **Axios**: For making HTTP requests to the TVMaze API.
- **CSS Modules**: Scoped CSS for styling.

---

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

You need to have the following installed on your local machine:

- **Node.js** (v22.8.1)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/stolbikova/shows_dashboard.git
   cd shows_dashboard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the app in your browser**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## MobX State Management

### `SearchStore.ts`

The `SearchStore` class manages the entire state related to the search functionality. It includes the search query, search results, loading state, and error handling.

```ts
class SearchStore {
  query = "";
  results = [];
  loading = false;
  error = null;

  // Set the search query
  setQuery(query: string) {
    this.query = query;
  }

  // Fetch search results from the TVMaze API
  async fetchSearchResults() {
    // Fetch logic here
  }

  // Clear results when necessary
  clearResults() {
    this.results = [];
  }
}
```

## Usage

### Search for a Show

1. Navigate to the **search page** by visiting `/search` in your browser.
2. Enter the name of a TV show and click **Search**.
3. A list of TV shows matching your query will be displayed.
4. Click on a show to be redirected to its details page.

### View Show Details

1. After searching for a show, click on a result to view more information about the show.
2. You will be redirected to `/show/{id}`, where `{id}` is the show's unique identifier from the **TVMaze API**.

---

## API

This app uses the **TVMaze API** to search for shows and retrieve show details.

### Endpoints:

1. **Search Shows**:

   - URL: `http://api.tvmaze.com/search/shows?q={query}`
   - Method: `GET`
   - Description: Searches for shows based on the query string.

2. **Show Details**:
   - URL: `http://api.tvmaze.com/shows/{id}`
   - Method: `GET`
   - Description: Fetches detailed information about a specific show based on the show’s `id`.
   - For example: http://localhost:3000/show/6771

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
