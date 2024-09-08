import { makeAutoObservable } from "mobx";

class ShowStore {
  showId: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  // Set showId (to be done server-side)
  setShowId(id: string) {
    this.showId = id;
  }
}

const showStore = new ShowStore();
export default showStore;
