import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { PropsWithChildren, useEffect } from "react";
import { frontModel } from "../model/model";

const LayoutView = observer((props: PropsWithChildren) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const update = () => {
      const screenX = window.innerWidth;

      frontModel.onVh(window.innerHeight);

      if (1280 >= screenX && screenX > 900 && !frontModel.isMid) {
        frontModel.onMid(true);
        frontModel.onMobile(false);
        frontModel.onSmallMobile(false);
        return;
      }

      if (900 >= screenX && screenX > 430 && !frontModel.isMobile) {
        frontModel.onMid(false);
        frontModel.onMobile(true);
        frontModel.onSmallMobile(false);
        return;
      }

      if (430 >= screenX && !frontModel.isSmallMobile) {
        frontModel.onMid(false);
        frontModel.onMobile(false);
        frontModel.onSmallMobile(true);
        return;
      }

      if (screenX > 1280) {
        frontModel.onMid(false);
        frontModel.onMobile(false);
        frontModel.onSmallMobile(false);
        return;
      }
    };

    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="wrap"
      style={{
        height: frontModel.isIntro ? frontModel.vh + "px" : "auto",
        overflow: frontModel.isIntro ? "hidden" : "visible",
      }}
    >
      <div className="container">{props.children}</div>
    </div>
  );
});

export default LayoutView;
