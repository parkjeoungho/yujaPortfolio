import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { prefix } from "../feature/content";

const ModalView = observer((props: { isShow: boolean; onOff: () => void }) => {
  const [isBlock, setIsBlock] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (props.isShow) {
      setIsBlock(true);
      setTimeout(() => setIsOpen(true), 20);
      return;
    }

    setIsOpen(false);
    setTimeout(() => setIsBlock(false), 500);
  }, [props.isShow]);

  return (
    <div className={classNames("modal", { block: isBlock, "is-open": isOpen })}>
      <div className="black" onClick={() => props.onOff()} />
      <div className="modal-content">
        <div className="contact-image">
          <button type="button" onClick={() => props.onOff()}>
            <img src={`${prefix}/assets/images/x.png`} alt="close" />
          </button>
          <img src={`${prefix}/assets/images/yujin_pop_up.png`} alt="contact" />
        </div>
      </div>
    </div>
  );
});

export default ModalView;
