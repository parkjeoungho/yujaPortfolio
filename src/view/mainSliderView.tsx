import { observer } from "mobx-react-lite";
import Slider from "react-slick";
import { FeatureSectionModel } from "../feature/feature";
import { isNil } from "lodash";

const MainSliderView = observer((props: { model: FeatureSectionModel | undefined }) => {
  const settings = {
    className: "main-slider",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    // variableWidth: true,
  };

  if (isNil(props.model)) {
    return <div></div>;
  }

  return (
    <div className="slider-wrap">
      <Slider {...settings}>
        {props.model.featureItems.map((feature, index) => (
          <div key={`main-slider-list-${index}`} className="slide-list">
            <div>
              <img src={feature.featureImage} alt="main-item" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default MainSliderView;
