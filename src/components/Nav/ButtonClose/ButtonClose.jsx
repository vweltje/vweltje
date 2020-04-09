import React from "react";

import "./ButtonClose.scss";

const ButtonClose = ({ onButtonClick }) => (
  <button className="ButtonClose" type="button" onClick={onButtonClick}>
    <span className="ButtonClose--Line first left" />
    <span className="ButtonClose--Line first right" />
    <span className="ButtonClose--Line second left" />
    <span className="ButtonClose--Line second right" />
    <span className="ButtonClose--Line third left" />
    <span className="ButtonClose--Line third right" />
  </button>
);

export default ButtonClose;
