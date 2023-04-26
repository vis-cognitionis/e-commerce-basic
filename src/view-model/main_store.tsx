import { makeAutoObservable } from "mobx";

class MainStore {
  selectedItem: string = "old-to-new";
  selectedFilters: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedItem = (item: string) => {
    this.selectedItem = item;
  };

  setSelectedFilters(filters: string[]) {
    this.selectedFilters = filters;
  }
}

const mainStore = new MainStore();

export default mainStore;
