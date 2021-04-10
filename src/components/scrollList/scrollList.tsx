import React from "react";
import "./style.scss";

const ScrollList = (props: {
  data: object;
  onClick: any;
  show: boolean;
  afterClick: any;
}) => {
  const handleOnClick = (item: any) => {
    if (props.onClick) props.onClick(item.dial_code, item.name, item.flag);
    if (props.afterClick) props.afterClick(false);
  };
  const showed = props.show ? "block" : "none";
  const inlineStyles = {
    display: showed,
  };
  return (
    <div style={inlineStyles} className="scrolllist">
      <ul>
        {props.data instanceof Array && props.data.length !== 0 ? (
          props.data.map((item) => {
            return (
              <li key={item.name} onClick={(e) => handleOnClick(item)}>
                <p>{item.flag}</p>
                <p>{item.name}</p>
                <p>({item.dial_code})</p>
              </li>
            );
          })
        ) : (
          <li className="disable" key="noResult">
            <p>No result</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ScrollList;
