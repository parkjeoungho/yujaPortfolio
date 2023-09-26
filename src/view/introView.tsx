import { observer } from "mobx-react-lite";
import { makeAutoObservable, runInAction } from "mobx";
import classNames from "classnames";
import { useEffect } from "react";

const IntroView = observer((props: { model: IntroModel; isIntro: boolean; onOff: () => void }) => {
  useEffect(() => {
    if (!props.model.isInit) {
      runInAction(() => (props.model.isInit = true));
    }

    if (props.isIntro) {
      setTimeout(() => props.onOff(), 2000);
    }
  }, [props, props.isIntro]);

  return (
    <div className={classNames("intro-container", { on: props.model.isInit })}>
      <div className="loading-text-box">
        <div className="bg-box">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
        <div className="top-box">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
      <div className="loading-num-box">
        <div className="num-container">
          <div className="num-box first">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className="num-box second">
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>8</p>
            <p>9</p>
          </div>
        </div>
        <p>%</p>
      </div>
    </div>
  );
});

export class IntroModel {
  isInit = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export default IntroView;
