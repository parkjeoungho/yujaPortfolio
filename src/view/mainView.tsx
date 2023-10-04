import { observer } from "mobx-react-lite";
import { makeAutoObservable, runInAction } from "mobx";
import classNames from "classnames";
import { useEffect } from "react";
import { frontModel } from "../model/model";

const MainView = observer((props: { model: MainSectionModel }) => {
  useEffect(() => {
    if (props.model.isInit) {
      setTimeout(() => {
        runInAction(() => (props.model.isInitEnd = true));
      }, 1500);
    }
  }, [props.model, props.model.isInit]);

  return (
    <div className={classNames("main", { on: props.model.isInit })}>
      <div
        className={classNames("inner-content", {
          on: props.model.isInit,
          end: props.model.isInitEnd,
        })}
      >
        <div className="top">
          <div className="inner">
            <span className="link">Hello, I Am</span>
          </div>
        </div>

        <div className="mid">
          <div className="inner">
            <span className="link">Designer</span>
          </div>
        </div>

        <div className="bottom">
          <div className="inner">
            <span className="link">Shin yujin</span>
          </div>
        </div>

        <div className="info-text-box">
          <div>
            <p>안녕하세요, 디자이너 신유진의 포트폴리오입니다.</p>
          </div>
          {/* <div>
            <p></p>
          </div> */}
        </div>
      </div>

      <div className="scroll">
        <div className="scroll-image">
          <img src="/assets/images/scroll.svg" alt="scroll" />
        </div>
        <p>아래로 스크롤</p>
      </div>
    </div>
  );
});

export class MainSectionModel {
  isInit = false;
  isInitEnd = false;

  constructor() {
    makeAutoObservable(this);
  }

  onInit() {
    this.isInit = !this.isInit;
  }
}

export default MainView;
