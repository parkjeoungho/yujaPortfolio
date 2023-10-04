import { makeAutoObservable } from "mobx";

class FrontModel {
  isMid = false;
  isMobile = false;
  isIntro = true;

  constructor() {
    makeAutoObservable(this);
  }

  onMid(isMid: boolean) {
    this.isMid = isMid;
  }

  onMobile(isMobile: boolean) {
    this.isMobile = isMobile;
  }

  onIntroOff() {
    this.isIntro = false;
  }
}

export const frontModel = new FrontModel();
