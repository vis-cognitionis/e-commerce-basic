import { makeAutoObservable } from "mobx";

class MainStore {
  selectedItem: string = "old-to-new";
  selectedBrands: string[] = [];
  selectedModels: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedItem = (item: string) => {
    this.selectedItem = item;
  };

  setSelectedBrands(brands: string[]) {
    this.selectedBrands = brands;
  }

  setSelectedModels(models: string[]) {
    this.selectedModels = models;
  }
}

const mainStore = new MainStore();

export default mainStore;
