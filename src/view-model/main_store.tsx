import { makeAutoObservable } from "mobx";

class MainStore {
  selectedItem: string = "old-to-new";

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedItem = (item: string) => {
    this.selectedItem = item;
  };
}

const mainStore = new MainStore();

export default mainStore;
