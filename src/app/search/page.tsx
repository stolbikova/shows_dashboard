"use client";

import { observer } from "mobx-react-lite";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import searchStore from "@/store/ShowStore";

import styles from "./page.module.css";

const SearchPage = observer(() => {
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    searchStore.fetchSearchResults();
  };

  const handleShowClick = (id: number) => {
    router.push(`/show/${id}`);
  };

  return (
    <div className={styles.searchContainer}>
      <h1>Search TV Shows</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={searchStore.query}
          onChange={(e) => searchStore.setQuery(e.target.value)}
          placeholder="Search for a show..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      {searchStore.loading && <p>Loading...</p>}
      {searchStore.error && <p>{searchStore.error}</p>}

      {searchStore.results.length > 0 && (
        <ul className={styles.resultsList}>
          {searchStore.results.map((result) => (
            <li key={result.show.id}>
              <a onClick={() => handleShowClick(result.show.id)}>
                {result.show.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default SearchPage;
