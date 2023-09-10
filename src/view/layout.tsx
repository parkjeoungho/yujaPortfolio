import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";

const LayoutView = observer((props: PropsWithChildren) => {
  return (
    <div className="wrap">
      <div className="container">{props.children}</div>
    </div>
  );
});

export default LayoutView;
