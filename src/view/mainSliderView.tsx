import { observer } from "mobx-react-lite";
import Slider from "react-slick";
import { FeatureSectionModel } from "../feature/feature";
import { useRef, useState } from "react";
import Play from "../../public/assets/images/main/play.svg";
import Pause from "../../public/assets/images/main/pause.svg";
import classNames from "classnames";
import { isNil } from "lodash";
import { frontModel } from "../model/model";
import { prefix } from "../feature/content";

const MainSliderView = observer((props: { model: FeatureSectionModel }) => {
  const ref = useRef<Slider>(null);
  const [isPlay, setIsPlay] = useState<boolean>(true);

  const onAutoPlayController = (isPlay: boolean) => {
    if (!ref || !ref.current) {
      return;
    }

    if (isPlay) {
      ref.current.slickPause();
      setIsPlay(false);
      return;
    }

    ref.current.slickPlay();
    setIsPlay(true);
  };

  const settings = {
    className: "main-slider",
    centerMode: !frontModel.isSmallMobile,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    dots: true,
    cssEase: "ease-in-out",
    arrows: false,
    appendDots: (dots: any) => (
      <div>
        <button
          type="button"
          className={classNames("slide-controller", {
            play: isPlay,
          })}
          onClick={() => onAutoPlayController(isPlay)}
        >
          <img src={Pause.src} alt="정지" />
          <img src={Play.src} alt="재생" />
        </button>
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="main-slider-container link">
      <div className="slider-wrap">
        <Slider ref={ref} {...settings}>
          {props.model.featureItems.map((feature, index) => (
            <div key={`main-slider-list-${index}`} className="slide-list">
              <div className="slide-list-image ">
                <img src={feature.featureImage} alt="main-item" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="gradient" />

      <MainSliderNextArrow
        addClassName="main-slide-arrow main-slide-next link"
        onClick={() => {
          if (!ref || !ref.current) {
            return;
          }

          ref.current.slickNext();
        }}
      />
      <MainSliderPrevArrow
        addClassName="main-slide-arrow main-slide-prev link"
        onClick={() => {
          if (!ref || !ref.current) {
            return;
          }

          ref.current.slickPrev();
        }}
      />
    </div>
  );
});

export function MainSliderPrevArrow(props: { onClick: () => void; addClassName: string }) {
  return (
    <div className={`${props.addClassName ?? ""}`} onClick={() => props.onClick()}>
      <img src={`${prefix}/assets/images/main/main-prev.svg`} alt="prev" />
    </div>
  );
}

export function MainSliderNextArrow(props: { onClick: () => void; addClassName: string }) {
  return (
    <div className={`${props.addClassName ?? ""}`} onClick={() => props.onClick()}>
      <img src={`${prefix}/assets/images/main/main-next.svg`} alt="next" />
    </div>
  );
}

// @ts-ignore
export function MainPrevArrow(props) {
  const { className, style, onClick, addClassName } = props;
  return (
    <div className={`${className} ${addClassName ?? ""}`} style={{ ...style }} onClick={onClick}>
      <img src={`${prefix}/assets/images/main/main-prev.svg`} alt="prev" />
    </div>
  );
}

// @ts-ignore
export function MainNextArrow(props) {
  const { className, style, onClick, addClassName } = props;
  return (
    <div className={`${className} ${addClassName ?? ""}`} style={{ ...style }} onClick={onClick}>
      <img src={`${prefix}/assets/images/main/main-next.svg`} alt="next" />
    </div>
  );
}

export default MainSliderView;
