import { makeAutoObservable } from "mobx";

class FrontModel {
  isMid = false;
  isMobile = false;
  isSmallMobile = false;
  isIntro = true;
  vh = 0;

  constructor() {
    makeAutoObservable(this);
  }

  onMid(isMid: boolean) {
    this.isMid = isMid;
  }

  onMobile(isMobile: boolean) {
    this.isMobile = isMobile;
  }

  onSmallMobile(isSmallMobile: boolean) {
    this.isSmallMobile = isSmallMobile;
  }

  onIntroOff() {
    this.isIntro = false;
  }

  onVh(vh: number) {
    this.vh = vh;
  }
}

export const frontModel = new FrontModel();
