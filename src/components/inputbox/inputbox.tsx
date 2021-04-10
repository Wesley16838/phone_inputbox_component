import React from "react";
import "./style.scss";
import info from "./../../assets/country_dial_info.json";
import Modal from "./../../components/modal/modal";
import IPhoneNumber from "./../../interfaces";

const InputBox = () => {
  const [phonenumber, setPhoneNumber] = React.useState<IPhoneNumber>({
    phoneNumber: "",
    nationCode: "+1",
    country: "United States",
    flag: "🇺🇸",
  });
  const [showlist, setShowList] = React.useState(false);
  const inputRef = React.useRef<any>();
  const onChangeNationCode = (
    nationCode: string,
    country: string,
    flag: string
  ) => {
    setPhoneNumber({ ...phonenumber, nationCode, country, flag });
    inputRef.current.focus();
  };
  return (
    <>
      <div className="inputbox">
        <div className="nationcode">{phonenumber.nationCode}</div>
        <input
          className="phonenumber"
          value={phonenumber.phoneNumber}
          onChange={(e) =>
            setPhoneNumber({ ...phonenumber, phoneNumber: e.target.value })
          }
          onFocus={() => setShowList(false)}
          ref={inputRef}
        />
      </div>
      <Modal
        selectedValue={phonenumber}
        data={info}
        onClick={onChangeNationCode}
        onShow={setShowList}
        show={showlist}
      />
    </>
  );
};

export default InputBox;
