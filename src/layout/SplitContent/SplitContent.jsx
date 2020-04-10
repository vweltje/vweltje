import React, { useState } from "react";

import "./SplitContent.scss";

const SplitContent = ({ split, children }) => {
  const [moved, setMoved] = useState(false);
  const [moveDefault, setDefault] = useState(true);
  if (split) {
    setTimeout(() => {
      setMoved(true);
      setDefault(false);
    }, 10);
  }
  if (!split && moved) {
    setTimeout(() => {
      setMoved(false);
    }, 10);
    setTimeout(() => {
      setDefault(true);
    }, 200);
  }
  return (
    <div className="SplitContent">
      <main className={`SplitContent--Main ${moved ? "moved" : ""}`}>
        {children}
      </main>
      {(split || !moveDefault) && (
        <div className={`SplitContent--Clone ${moved ? "moved" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default SplitContent;
