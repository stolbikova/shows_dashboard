# TV Show Search Application

This is a **TV Show Search Application** built using **Next.js** with the **App Router** and **MobX** for state management. The app allows users to search for TV shows via the **TVMaze API** and view detailed information about selected shows.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [MobX State Management](#mobx-state-management)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
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

## Folder Structure

Here's an overview of the project structure:

. ├── app/ │ ├── search/ │ │ └── page.tsx # Search page where users can search TV shows │ ├── show/ │ │ └── [id].tsx # Dynamic show details page │ └── layout.tsx # Root layout for the application ├── components/ │ ├── ShowDetails.tsx # Component to display detailed information about a show ├── store/ │ └── SearchStore.ts # MobX store for managing search state and API requests ├── styles/ │ ├── SearchPage.module.css # CSS Module for the search page │ ├── ShowDetails.module.css # CSS Module for show details page ├── public/ │ └── favicon.ico # App favicon ├── next.config.js # Next.js configuration ├── package.json # Project dependencies and scripts └── README.md # Project documentation (this file)

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
