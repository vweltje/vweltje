import React, { Component } from "react";

import "./ButtonOpen.scss";

class ButtonOpen extends Component {
  render() {
    const { onButtonClick } = this.props;
    return (
      <button className="ButtonOpen" type="button" onClick={onButtonClick}>
        <span className="ButtonOpen--Line first left" />
        <span className="ButtonOpen--Line first right" />
        <span className="ButtonOpen--Line second left" />
        <span className="ButtonOpen--Line second right" />
        <span className="ButtonOpen--Line third left" />
        <span className="ButtonOpen--Line third right" />
      </button>
    );
  }
}

export default ButtonOpen;
