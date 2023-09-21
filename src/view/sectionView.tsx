import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

const SectionView = observer(
  (props: {
    title: string;
    contribution: string;
    className?: string;
    hasDetail: boolean;
    children: ReactNode;
  }) => {
    return (
      <div className={`main-content section-content ${props.className ?? ""}`}>
        <div className="section-head">
          <div>
            <h2>{props.title}</h2>
            {props.hasDetail && <p className="detail-info">클릭하면 세부 내용이 보입니다</p>}
          </div>
          <p>{props.contribution}</p>
        </div>
        <div className="content-wrap">{props.children}</div>
      </div>
    );
  },
);

export default SectionView;
