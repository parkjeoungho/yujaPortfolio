import { observer } from "mobx-react-lite";
import { FeatureSectionModel } from "../feature/feature";
import classNames from "classnames";
import Slider from "react-slick";
import { runInAction } from "mobx";
import { useEffect, useRef } from "react";
import { isEmpty, isNil } from "lodash";
import { frontModel } from "../model/model";

const DefaultCardView = observer(
  (props: {
    model: FeatureSectionModel;
    onDetail: (id: string | null, detail: string | null) => void;
    currentDetailSection: string | null;
    currentDetailItem: string | null;
  }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") {
        return;
      }

      const update = () => {
        runInAction(() => {
          if (!ref || !ref.current) {
            return;
          }

          props.model.detailSize = ref.current.offsetHeight;
        });
      };

      update();

      window.addEventListener("resize", update);

      return () => window.removeEventListener("resize", update);
    });

    console.log(props.model.sliderViewCount);

    const settings = {
      className: "card-slider",
      centerMode: false,
      centerPadding: "10px",
      infinite: true,
      slidesToShow: props.model.sliderViewCount,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 600,
      dots: false,
      cssEase: "ease-in-out",
      nextArrow: <CardNextArrow addClassName="card-slide-arrow card-slide-next" />,
      prevArrow: <CardPrevArrow addClassName="card-slide-arrow card-slide-prev" />,
    };

    console.log(props.model.isDetailTowLine);
    return (
      <>
        <div ref={ref} className="card-container">
          {!props.model.isSlide && (
            <div
              className={classNames("not-slide-card", {
                wrap: props.model.isTwoLine,
              })}
            >
              {props.model.featureItems.map((item, index) => (
                <div
                  className="link"
                  key={`naver-card-new-${index}`}
                  style={{
                    width: `${props.model.percent}%`,
                    padding: "3px 5px",
                  }}
                  onClick={() => props.onDetail(null, null)}
                >
                  <div>
                    <img src={item.featureImage} alt="image" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {props.model.isSlide && (
            <div className="card-slide-box link">
              <div>
                <Slider {...settings}>
                  {props.model.featureItems.map((item, index) => (
                    <div
                      className="slide-card"
                      key={`slide-${props.model.sectionTitle}-${index}`}
                      onClick={
                        props.model.isHasDetail
                          ? () => props.onDetail(item.featureId, props.model.sectionId)
                          : () => props.onDetail(null, null)
                      }
                    >
                      <div
                        className={classNames({
                          "not-select":
                            props.currentDetailSection === props.model.sectionId &&
                            props.currentDetailItem !== item.featureId,
                        })}
                      >
                        <img src={item.featureImage} alt="slide-card-image" />
                        <div />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}
        </div>

        <div
          className={classNames("card-detail-box", {
            on: props.currentDetailSection === props.model.sectionId,
            isWrap: props.model.isDetailTowLine,
          })}
          style={{
            height:
              props.currentDetailSection === props.model.sectionId
                ? props.model.getDetailSize(props.currentDetailItem)
                : 0,
          }}
        >
          {!isNil(props.model.sectionId) && (
            <>
              {props.model.currentDetailList(props.currentDetailItem).map((item, index) => (
                <div
                  key={`feature-${props.currentDetailSection}-${index}`}
                  style={{
                    width: `${props.model.percent}%`,
                    height: props.model.isDetailTowLine ? `${props.model.detailSize}px` : "100%",
                    marginBottom: props.model.isDetailTowLine ? "10px" : 0,
                  }}
                >
                  <div className="link">
                    <img src={item} alt="detail-item" />
                  </div>
                </div>
              ))}
              {!isNil(props.currentDetailSection) &&
                isEmpty(props.model.currentDetailList(props.currentDetailItem)) && (
                  <p className="empty link">세부 이미지가 없습니다</p>
                )}
            </>
          )}
        </div>
      </>
    );
  },
);

// @ts-ignore
export function CardPrevArrow(props) {
  const { className, style, onClick, addClassName } = props;
  return (
    <div className={`${className} ${addClassName ?? ""}`} style={{ ...style }} onClick={onClick}>
      <div className="inner-arrow-box">
        <div>
          <img src="/assets/images/main/main-prev.svg" alt="prev" />
        </div>
      </div>
    </div>
  );
}

// @ts-ignore
export function CardNextArrow(props) {
  const { className, style, onClick, addClassName } = props;
  return (
    <div className={`${className} ${addClassName ?? ""}`} style={{ ...style }} onClick={onClick}>
      <div className="inner-arrow-box">
        <div>
          <img src="/assets/images/main/main-next.svg" alt="next" />
        </div>
      </div>
    </div>
  );
}

export default DefaultCardView;
