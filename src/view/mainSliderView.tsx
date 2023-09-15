import { observer } from "mobx-react-lite";
import Slider from "react-slick";
import { FeatureSectionModel } from "../feature/feature";
import { isNil } from "lodash";
import { useRef, useState } from "react";

const MainSliderView = observer((props: { model: FeatureSectionModel | undefined }) => {
  const ref = useRef<Slider>(null);
  const [isPlay, setIsPlay] = useState<boolean>(true);

  const onAutoPlayController = (isPlay: boolean) => {
    if (!ref || !ref.current) {
      return;
    }

    if (isPlay) {
      ref.current.slickPause();
      return;
    }

    ref.current.slickPlay();
  };

  const settings = {
    className: "main-slider",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    dots: true,
    cssEase: "ease-in-out",
    nextArrow: <MainNextArrow addClassName="main-slide-arrow main-slide-next" />,
    prevArrow: <MainPrevArrow addClassName="main-slide-arrow main-slide-prev" />,
  };

  if (isNil(props.model)) {
    return <div></div>;
  }

  return (
    <div className="main-content">
      <div className="section-head">
        <h2>{props.model.sectionTitle}</h2>
        <p>{props.model.contribution}</p>
      </div>
      <div className="main-slider-container">
        <div className="slider-wrap">
          <Slider ref={ref} {...settings}>
            {props.model.featureItems.map((feature, index) => (
              <div key={`main-slider-list-${index}`} className="slide-list">
                <div className="slide-list-image">
                  <img src={feature.featureImage} alt="main-item" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="gradient" />
      </div>
    </div>
  );
});

// @ts-ignore
export function MainPrevArrow(props) {
  const { className, style, onClick, addClassName } = props;
  return (
    <div className={`${className} ${addClassName ?? ""}`} style={{ ...style }} onClick={onClick}>
      <img src="/assets/images/main/main-prev.svg" alt="prev" />
    </div>
  );
}

// @ts-ignore
export function MainNextArrow(props) {
  const { className, style, onClick, addClassName } = props;
  return (
    <div className={`${className} ${addClassName ?? ""}`} style={{ ...style }} onClick={onClick}>
      <img src="/assets/images/main/main-next.svg" alt="next" />
    </div>
  );
}

export default MainSliderView;
