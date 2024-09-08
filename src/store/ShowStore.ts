import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

import { GET_SEARCH } from "@/constants";

class SearchStore {
  query = "";
  results: { show: { id: number; name: string } }[] = [];
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Set the search query
  setQuery(query: string) {
    this.query = query;
  }

  // Fetch search results from the API
  async fetchSearchResults() {
    if (!this.query) return;

    this.loading = true;
    this.error = null;

    const searchApi = GET_SEARCH(this.query);

    try {
      const res = await axios.get(searchApi);
      runInAction(() => {
        this.results = res.data;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Something went wrong. Please try again.";
        this.loading = false;
      });
    }
  }

  clearResults() {
    this.results = [];
  }
}

const searchStore = new SearchStore();
export default searchStore;
