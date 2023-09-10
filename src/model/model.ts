import { makeAutoObservable } from "mobx";

class FrontModel {
  constructor() {
    makeAutoObservable(this);
  }
}

export const frontModel = new FrontModel();
