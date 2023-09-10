import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";

const LayoutView = observer((props: PropsWithChildren) => {
  return <div>{props.children}</div>;
});

export default LayoutView;
