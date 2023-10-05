import { observer } from "mobx-react-lite";
import { makeAutoObservable, runInAction } from "mobx";
import classNames from "classnames";
import { useEffect } from "react";
import { frontModel } from "../model/model";

const IntroView = observer((props: { model: IntroModel; onOff: () => void }) => {
  useEffect(() => {
    if (!props.model.isInit) {
      runInAction(() => {
        props.model.isInit = true;

        setTimeout(() => {
          runInAction(() => (props.model.isLoading = true));

          setTimeout(() => {
            runInAction(() => {
              props.model.isInit = false;
              props.model.isOut = true;
            });
          }, 1500);
        }, 750);
      });
    }

    if (frontModel.isIntro) {
      setTimeout(() => props.onOff(), 3400);
    }
  }, [props]);

  return (
    <>
      {/* <div className={classNames("bg-blue intro-bg", { out: props.model.isOut })} /> */}
      <div className={classNames("bg-white intro-bg", { out: props.model.isOut })} />
      <div
        className={classNames("intro-container", {
          in: props.model.isInit,
          on: props.model.isLoading,
          out: props.model.isOut,
        })}
        style={{ height: frontModel.vh + "px" }}
      >
        <div className="loading-text-box">
          <div className="bg-box">
            <span className="link">L</span>
            <span className="link">O</span>
            <span className="link">A</span>
            <span className="link">D</span>
            <span className="link">I</span>
            <span className="link">N</span>
            <span className="link">G</span>
          </div>
          <div className="top-box">
            <span className="link">L</span>
            <span className="link">O</span>
            <span className="link">A</span>
            <span className="link">D</span>
            <span className="link">I</span>
            <span className="link">N</span>
            <span className="link">G</span>
          </div>
        </div>
        <div className="loading-num-box">
          <div className="num-container">
            <div className="num-box first">
              <p className="link">0</p>
              <p className="link">1</p>
              <p className="link">2</p>
              <p className="link">3</p>
              <p className="link">4</p>
              <p className="link">5</p>
              <p className="link">6</p>
              <p className="link">8</p>
              <p className="link">9</p>
            </div>
            <div className="num-box second">
              <p className="link">0</p>
              <p className="link">1</p>
              <p className="link">2</p>
              <p className="link">3</p>
              <p className="link">4</p>
              <p className="link">5</p>
              <p className="link">6</p>
              <p className="link">8</p>
              <p className="link">9</p>
            </div>
          </div>
          <p className="last link">%</p>
        </div>
      </div>
    </>
  );
});

export class IntroModel {
  isInit = false;
  isLoading = false;
  isOut = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export default IntroView;
