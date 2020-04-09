import React from "react";
import { upperFirst } from "lodash";
import "./Splitview.scss";

const SplitviewContainer = ({ position, children }) => (
  <div className={`Splitview--${upperFirst(position)}`}>
    <div className="Splitview--Content">{children}</div>
  </div>
);

const Splitview = ({ children }) => {
  return <div className="Splitview">{children}</div>;
};

export { Splitview as default, SplitviewContainer };
