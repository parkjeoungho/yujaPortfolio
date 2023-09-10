import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import { useModel } from "../../ex/mobx";
import { Feature } from "../feature/feature";
import { RefObject } from "react";
import { useMoveSection } from "../hooks/hooks";
import { contentSets, featureNaver } from "../feature/content";
import MainSliderView from "../view/mainSliderView";

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

      {/*main*/}
      <div ref={featureMenus[featureNaver.featureType].ref} className="section-main">
        <div className="inner-container">
          <MainSliderView model={featureNaver.items[0]} />
        </div>
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
