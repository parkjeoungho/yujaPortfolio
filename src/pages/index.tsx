import { observer } from "mobx-react-lite";
import { makeAutoObservable, runInAction } from "mobx";
import { useModel } from "../../ex/mobx";
import { Feature } from "../feature/feature";
import { RefObject, useEffect, useRef } from "react";
import { useMoveSection } from "../hooks/hooks";
import { contentSets } from "../feature/content";
import MainSliderView from "../view/mainSliderView";
import DefaultCardView from "../view/defaultCardView";
import SectionView from "../view/sectionView";
import { isNil } from "lodash";
import classNames from "classnames";

const MainPage = observer(() => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const model = useModel(MainModel);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const update = () => {
      if (isNil(selectRef) || isNil(selectRef.current)) {
        return;
      }

      const winY = window.scrollY;
      const selectSectionY = selectRef.current.offsetTop + selectRef.current.scrollHeight;

      if (winY > selectSectionY) {
        runInAction(() => (model.isShowTopButton = true));
        return;
      }

      runInAction(() => (model.isShowTopButton = false));
    };

    const mouse = (e: MouseEvent) => {
      if (isNil(mouseRef) || isNil(mouseRef.current)) {
        return;
      }

      mouseRef.current.style.left = e.clientX + "px";
      mouseRef.current.style.top = e.clientY + "px";
    };

    update();

    window.addEventListener("scroll", update);
    window.addEventListener("mousemove", mouse);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("mousemove", mouse);
    };
  }, [model]);

  const featureMenus: {
    [key in Feature]: {
      ref: RefObject<HTMLDivElement>;
      onMoveToSection: () => void;
    };
  } = {
    [Feature.naver]: useMoveSection(),
    [Feature.instagram]: useMoveSection(),
    [Feature.shoppingLive]: useMoveSection(),
    [Feature.etc]: useMoveSection(),
  };

  return (
    <>
      {/*main*/}
      <div className="main">
        <div className="inner-content">
          <h2>MAIN SECTION</h2>
        </div>
      </div>

      {/*section-select-index*/}
      <div ref={selectRef} className="select-section">
        <h2>감상을 원하는 아이콘을 선택하세요.</h2>

        <div className="select-list-box">
          {contentSets.contentSet.map((feature, index) => (
            <div
              key={`select-menu-${index}`}
              className="select-list"
              onClick={() => featureMenus[feature.featureType].onMoveToSection()}
            >
              <div className="select-list-image">
                <img src={feature.featureIcon} alt={feature.featureName} />
              </div>
              <p>{feature.featureName}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-wrap">
        {contentSets.contentSet.map((content, index) => (
          <div
            key={`content-${index}`}
            ref={featureMenus[content.featureType].ref}
            className="section"
          >
            <div className="inner-container">
              {content.items.map((item, index) => {
                if (content.featureType === Feature.naver) {
                  return (
                    <SectionView
                      key={`naver-${index}`}
                      title={item.sectionTitle}
                      contribution={item.contribution}
                      hasDetail={item.isHasDetail}
                    >
                      {/*main*/}
                      {index === 0 && <MainSliderView model={item} />}

                      {/*naver - mobile*/}
                      {index !== 0 && (
                        <DefaultCardView
                          model={item}
                          onDetail={(id: string | null, detail: string | null) =>
                            model.setCurrentDetailSection(id, detail)
                          }
                          currentDetailSection={model.currentDetailSection}
                          currentDetailItem={model.currentDetailItem}
                        />
                      )}
                    </SectionView>
                  );
                }

                if (content.featureType === Feature.instagram) {
                  return (
                    <SectionView
                      key={`instagram-${index}`}
                      title={item.sectionTitle}
                      contribution={item.contribution}
                      hasDetail={item.isHasDetail}
                    >
                      <DefaultCardView
                        model={item}
                        onDetail={(id: string | null, detail: string | null) =>
                          model.setCurrentDetailSection(id, detail)
                        }
                        currentDetailSection={model.currentDetailSection}
                        currentDetailItem={model.currentDetailItem}
                      />
                    </SectionView>
                  );
                }

                if (content.featureType === Feature.shoppingLive) {
                  return (
                    <SectionView
                      key={`shoppingLive-${index}`}
                      title={item.sectionTitle}
                      contribution={item.contribution}
                      hasDetail={item.isHasDetail}
                    >
                      <DefaultCardView
                        model={item}
                        onDetail={(id: string | null, detail: string | null) =>
                          model.setCurrentDetailSection(id, detail)
                        }
                        currentDetailSection={model.currentDetailSection}
                        currentDetailItem={model.currentDetailItem}
                      />
                    </SectionView>
                  );
                }

                if (content.featureType === Feature.etc) {
                  return (
                    <SectionView
                      key={`shoppingLive-${index}`}
                      title={item.sectionTitle}
                      contribution={item.contribution}
                      hasDetail={item.isHasDetail}
                    >
                      <DefaultCardView
                        model={item}
                        onDetail={(id: string | null, detail: string | null) =>
                          model.setCurrentDetailSection(id, detail)
                        }
                        currentDetailSection={model.currentDetailSection}
                        currentDetailItem={model.currentDetailItem}
                      />
                    </SectionView>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="footer section">
        <div className="footer-header">
          <p>ABOUT ME</p>
        </div>
        <div className="footer-content">
          <p>
            안녕하세요. <b>디자이너 신유진</b>입니다.
          </p>
          <p>
            원만한 소통&공감 능력을 갖춘 섬세한 디자이너 신유진입니다.
            <br />
            SNS 콘텐츠, 이벤트 프로모션, 상세 페이지 디자인 등을
            <br />
            전문으로 하는 그래픽 디자이너 신유진입니다.
          </p>

          <p>
            디자인하는 것을 좋아하고 머릿 속에서 상상하는 것을
            <br />
            시각적으로 표현하여 디자인의 가치를 재공합니다.
          </p>
        </div>
      </div>

      <button
        type="button"
        className={classNames("top-btn", { on: model.isShowTopButton })}
        onClick={() => {
          if (isNil(selectRef) || isNil(selectRef.current)) {
            return;
          }

          selectRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        <img src="/assets/images/top_arrow.png" alt="top-btn" />
      </button>

      <div ref={mouseRef} className="mouse">
        <p>
          SHIN YUJIN <br />
          PORTFOLIO
        </p>
      </div>
    </>
  );
});

class MainModel {
  isShowTopButton = false;
  currentDetailSection: string | null = null;
  currentDetailItem: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentDetailSection(detail: string | null, id: string | null) {
    if (this.currentDetailSection === id && this.currentDetailItem === detail) {
      this.currentDetailSection = null;
      this.currentDetailItem = null;
      return;
    }

    this.currentDetailSection = id;
    this.currentDetailItem = detail;
  }
}

export default MainPage;
