import { observer } from "mobx-react-lite";
import { FeatureSectionModel } from "../feature/feature";
import classNames from "classnames";
import Slider from "react-slick";

const DefaultCardView = observer((props: { model: FeatureSectionModel }) => {
  const settings = {
    className: "card-slider",
    centerMode: false,
    centerPadding: "10px",
    infinite: true,
    slidesToShow: props.model.viewCount,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 600,
    dots: false,
    cssEase: "ease-in-out",
    // nextArrow: <MainNextArrow addClassName="main-slide-arrow main-slide-next" />,
    // prevArrow: <MainPrevArrow addClassName="main-slide-arrow main-slide-prev" />,
  };

  return (
    <div className="card-container">
      {!props.model.isSlide && (
        <div
          className={classNames("not-slide-card", {
            wrap: props.model.isTwoLine,
          })}
        >
          {props.model.featureItems.map((item, index) => (
            <div
              key={`naver-card-new-${index}`}
              style={{
                width: `${props.model.percent}%`,
                padding: "3px 5px",
              }}
            >
              <div>
                <img src={item.featureImage} alt="image" />
              </div>
            </div>
          ))}
        </div>
      )}

      {props.model.isSlide && (
        <div className="card-slide-box">
          <div>
            <Slider {...settings}>
              {props.model.featureItems.map((item, index) => (
                <div className="slide-card" key={`slide-${props.model.sectionTitle}-${index}`}>
                  <div>
                    <img src={item.featureImage} alt="slide-card-image" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
});

export default DefaultCardView;
