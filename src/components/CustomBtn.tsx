import React from "react";
import { CustomBtnProps } from '../types/interfaces'

const CustomBtn = ({customCls, title, BsArrow, handleClick}: CustomBtnProps) => {
  
  return (
    <button className={`${customCls}`} onClick={handleClick}>
      {title}
      <span className="ml-4">{BsArrow}</span>
    </button>
  );
};

export default CustomBtn;
