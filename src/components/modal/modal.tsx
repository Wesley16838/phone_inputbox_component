import React from "react";
import ScrollList from "./../scrollList/scrollList";
import IPhoneNumber from "./../../interfaces";
import "./style.scss";

const Modal = (props: {
  selectedValue: IPhoneNumber;
  data: any;
  onClick: any;
  onShow: any;
  show: boolean;
}) => {
  const [filter, setFilter] = React.useState<any>(props.data);
  const [currentValue, setCurrentValue] = React.useState<string>("");
  const modalRef = React.useRef<any>();
  const { onShow } = props;
  const afterClick = () => {
    setCurrentValue("");
    setFilter(props.data);
    if (onShow) onShow(false);
  };
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef?.current?.contains(event.target)) {
        onShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, onShow]);

  return (
    <div className="modal" ref={modalRef}>
      <div className="modalselected">
        <p>{props.selectedValue.flag}</p>
        <p>{props.selectedValue.country}</p>
        <p>({props.selectedValue.nationCode})</p>
      </div>
      <div className="modalinput">
        <input
          className="inputModal"
          placeholder="Search"
          onFocus={() => {
            props.onShow(true);
          }}
          onChange={(e) => {
            const filteredData = props.data.filter(
              (item: any) =>
                e.target.value === "" ||
                item.name
                  .toLowerCase()
                  .indexOf(e.target.value.toLowerCase()) === 0
            );
            setCurrentValue(e.currentTarget.value);
            setFilter(filteredData);
          }}
          value={currentValue}
        />
      </div>
      <div className="modalscroll">
        <ScrollList
          data={filter}
          onClick={props.onClick}
          show={props.show}
          afterClick={afterClick}
        />
      </div>
    </div>
  );
};

export default Modal;
