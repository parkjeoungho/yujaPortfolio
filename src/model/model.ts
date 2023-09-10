import { makeObservable } from "mobx";

class FrontModel {
  constructor() {
    makeObservable(this);
  }
}

export const frontModel = new FrontModel();
