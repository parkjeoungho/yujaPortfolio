import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import { useModel } from "../../ex/mobx";
import { Feature } from "../feature/feature";
import { RefObject } from "react";
import { useMoveSection } from "../hooks/hooks";
import { contentSets } from "../feature/content";
import MainSliderView from "../view/mainSliderView";
import DefaultCardView from "../view/defaultCardView";
import SectionView from "../view/sectionView";

const MainPage = observer(() => {
  const model = useModel(MainModel);

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
      <div className="select-section">
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
                    >
                      {/*main*/}
                      {index === 0 && <MainSliderView model={item} />}

                      {/*naver - mobile*/}
                      {index !== 0 && <DefaultCardView model={item} />}
                    </SectionView>
                  );
                }

                if (content.featureType === Feature.instagram) {
                  return (
                    <SectionView
                      key={`instagram-${index}`}
                      title={item.sectionTitle}
                      contribution={item.contribution}
                    >
                      <DefaultCardView model={item} />
                    </SectionView>
                  );
                }
              })}
            </div>
          </div>
        ))}
        {/*<div ref={featureMenus[featureNaver.featureType].ref} className="section section-main">*/}
        {/*  <div className="inner-container">*/}
        {/*    {featureNaver.items.map((item, index) => (*/}
        {/*      <SectionView*/}
        {/*        key={`naver-${index}`}*/}
        {/*        title={item.sectionTitle}*/}
        {/*        contribution={item.contribution}*/}
        {/*      >*/}
        {/*        /!*main*!/*/}
        {/*        {index === 0 && <MainSliderView model={item} />}*/}

        {/*        /!*naver - mobile*!/*/}
        {/*        {index !== 0 && <DefaultCardView model={item} />}*/}
        {/*      </SectionView>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  );
});

class MainModel {
  select = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export default MainPage;
