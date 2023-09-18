import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

const SectionView = observer(
  (props: { title: string; contribution: string; className?: string; children: ReactNode }) => {
    return (
      <div className={`main-content section-content ${props.className ?? ""}`}>
        <div className="section-head">
          <h2>{props.title}</h2>
          <p>{props.contribution}</p>
        </div>
        <div className="content-wrap">{props.children}</div>
      </div>
    );
  },
);

export default SectionView;
